import React from "react";
import { formal_dress } from "../../../../../db";
import { Box, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { single_page_data } from "../../../../../Redux/AppReducer/action";

import { get_formal_success } from "../../../../../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react';

function FormalDressCard() {
  const dispatch = useDispatch();
  const { formalData} = useSelector((state) => {
    return {
      formalData: state.AppReducer.formalData,
    };
  });

  
  const singlePageHandler = (item) => {
    dispatch(single_page_data(item));
  };
  useEffect(() => {
    dispatch(get_formal_success(formal_dress));
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
        mt="30px"
      >
   
        {formalData.length > 0 &&
          formalData.map((ele) => (
            <NavLink to={`/shop/${ele.id}`}>
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
            </NavLink>
          ))}
      </Box>
    </>
  );
}

export default FormalDressCard;
