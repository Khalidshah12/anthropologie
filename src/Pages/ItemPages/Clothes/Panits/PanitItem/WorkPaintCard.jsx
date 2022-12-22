import React from 'react'
import { Box, Text, Image } from "@chakra-ui/react";
import {workpaints} from '../../../../../db';

import { single_page_data } from "../../../../../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import { get_workpaints_success } from "../../../../../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


function WorkPaintCard() {

  const dispatch = useDispatch();

  const { workpaintData } = useSelector((state) => {
    return {
      workpaintData: state.AppReducer.workpaintData,
    };
  });


  const singlePageHandler = (item) => {
    dispatch(single_page_data(item));
  };
  useEffect(() => {
    dispatch(get_workpaints_success(workpaints));
  }, []);

  return (
    <>
       <Box
             w={"1000.84px"}
             maxWidth={"100%"}
              display={"grid"}
              gridTemplateColumns={{
                lg: "repeat(4, 1fr)",
                md: "repeat(3,1fr)",
                sm: "repeat(2, 1fr)",
              }}
             
            >
                 {workpaintData.length > 0 &&
          workpaintData.map((ele) => (
            <Link to={`/shop/${ele.id}`}>
              <Box
                w={"233.203px"}
                h="493.969px"
                minHeight={"auto"}
                onClick={() => singlePageHandler(ele)}
                key={ele.id}
              >
                <Image w={"auto"} h="349.469px" src={ele.image} />
                <Text>{ele.name}</Text>
                <Text>${ele.price}</Text>
              </Box>
            </Link>
          ))}
            </Box> 
    </>
  )
}

export default WorkPaintCard
