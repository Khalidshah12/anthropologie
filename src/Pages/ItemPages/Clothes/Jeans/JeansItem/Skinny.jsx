import React from 'react'

import { Box, Text, Center} from "@chakra-ui/react";
import {skinny} from '../../../../../db';

import Sidebar from "../../../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { get_skinny_success } from "../../../../../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import SkinnyCard from './SkinnyCard';
import {useMediaQuery} from '@chakra-ui/react';
import Filter from '../../../Filter';


function Skinny() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const dispatch = useDispatch();

  const filterhandler =(e)=>{
    if(e.target.value==="lowtohigh"){
      const lowtohighdata = skinny.sort((a,b)=>{
        return a.price - b.price;
      })
      console.log(lowtohighdata)
      dispatch(get_skinny_success(lowtohighdata));
    }
    
    if(e.target.value==="hightolow"){
      const hightolowdata = skinny.sort((a,b)=>{
        return b.price - a.price;
      })
      console.log(hightolowdata)
      dispatch(get_skinny_success(hightolowdata));
    }

    if(e.target.value==="removefilter"){
   
      dispatch(get_skinny_success(skinny));

    }
  }

  return (
    <>
    {/* <Navbar/> */}
      <Box mt={"30px"}>
      <Box width={"90%"} m="auto">
        <Box
          h={"auto"}
          padding={"0,50px, 0, 50px"}
          maxWidth="1561px"
          display="flex"
        >
          <Box style={{display: isMobile ? "none" : "block"}}>
            <Sidebar />
          </Box>
          <Box>
            <Box>
            <Box
                maxWidth={"100%"}
                display={"flex"}
                justifyContent="space-between"
                // border="1px solid red
                minW={"auto"}
                flexWrap={"wrap"}
                h={"auto"}
          >
            <Box>
              <Text fontSize={"25px"}>
                Casual Dresses for Any Occasion{" "}
                <span
                  style={{ fontSize: "13px", width: "auto", height: "auto" }}
                >
                  {skinny.length} products
                </span>
              </Text>
            </Box>
            <Box display={"flex"}>
             <Filter filterhandler={filterhandler}/>
              <Box display={"flex"}>
                <ChevronLeftIcon
                  fontSize={"40px"}
                  _hover={{ color: "#167A92" }}
                />
                <Box>
                  <Text mt={"8px"}>1/47</Text>
                </Box>
                <ChevronRightIcon
                  fontSize={"40px"}
              
                  _hover={{ color: "#167A92" }}
                />
              </Box>
            </Box>
          </Box>
            </Box>
            <Box>
              {/* data here */}
              <Center>
              <SkinnyCard/>
              </Center>
            </Box>
          </Box>
      
        </Box>
        <Box display={"flex"} justifyContent="end">
          <Box display={"flex"}>
            <ChevronLeftIcon
              fontSize={"40px"}
            
              _hover={{ color: "#167A92" }}
            />
            <Box>
              <Text mt={"8px"}>1/47</Text>
            </Box>
            <ChevronRightIcon
              fontSize={"40px"}
        
              _hover={{ color: "#167A92" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
    {/* <Footer/> */}
    </>
  )
}

export default Skinny
