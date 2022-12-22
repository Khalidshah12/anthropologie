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
     display={"grid"}
     rowGap="15px"
     minH={"auto"}
     minW="auto"
     gridTemplateColumns={{
      lg:"repeat(4,1fr)",
            base:"repeat(1,1fr)",
            md: "repeat(3, 1fr)",
            sm:"repeat(2,1fr)"
     
     }}
        mt="30px"
      >
   
        {formalData.length > 0 &&
          formalData.map((ele) => (
            <NavLink to={`/shop/${ele.id}`}>
              <Box
                    h="470.969px"
                    minHeight={"auto"}
                    cursor="pointer"
                  width={"243.484px"}

                    minW="auto"
                    minH={"auto"}
                    onClick={() => singlePageHandler(ele, ele.id)}
                    key={ele.id + Math.random()}
              >
                <Image w={"auto"} h="349.469px" src={ele.image} />
                <Text  width={"240px"}>{ele.name}</Text>
                <Text>${ele.price}</Text>
              </Box>
            </NavLink>
          ))}
      </Box>
    </>
  );
}

export default FormalDressCard;
