import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {single_page_data} from '../../../../../Redux/AppReducer/action';
import {get_casual_success} from '../../../../../Redux/AppReducer/action';
import { casual } from "../../../../../db";

function CasualCard() {
  
    const dispatch = useDispatch();
      const { casualData, isLoading, isError } = useSelector((state) => {
    return {
      casualData: state.AppReducer.casualData,
      isError: state.AppReducer.isError,
      isLoading: state.AppReducer.isLoading,
    };
  });

 
const singlePageHandler =(item)=>{
    dispatch(single_page_data(item))
}

useEffect(()=>{
    dispatch(get_casual_success(casual))
},[])

  return (
    <>
      <Box
        w={"1000.84px"}
        maxWidth={"100%"}
        display={"grid"}
        rowGap="15px"
        gridTemplateColumns={{
          lg: "repeat(4, 1fr)",
          md: "repeat(3,1fr)",
          sm: "repeat(2, 1fr)",
        }}

      >
        {casualData.length > 0 &&
          casualData.map((ele) => (
            <Link to={`/shop/${ele.id}`}>

                <Box w={"233.203px"} h="470.969px" minHeight={"auto"} cursor="pointer" onClick={()=> singlePageHandler(ele)}>
                    <Image w={"auto"} h="349.469px" src={ele.image} />
                    <Text>{ele.name}</Text>
                    <Text>${ele.price}</Text>
                </Box>
            </Link>
          ))}
      </Box>
    </>
  );
}

export default CasualCard;
