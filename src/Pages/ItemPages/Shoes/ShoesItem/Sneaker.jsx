import React from 'react'
// import {Sneakers} from '../../../db';
import Sidebar from "../../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { get_sneaker_success } from "../../../../Redux/AppReducer/action";
import {useDispatch } from "react-redux";
import { Sneakers } from '../../../../db';
import { Box, Text, Center } from "@chakra-ui/react";
import SneakerCard from './SneakerCard';
import {useMediaQuery} from '@chakra-ui/react';
import Filter from '../../Filter';

function Sneaker() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const dispatch = useDispatch();
 
  const filterhandler =(e)=>{
    if(e.target.value==="lowtohigh"){
      const lowtohighdata = Sneakers.sort((a,b)=>{
        return a.price - b.price;
      })
      console.log(lowtohighdata)
      dispatch(get_sneaker_success(lowtohighdata));
    }
    
    if(e.target.value==="hightolow"){
      const hightolowdata = Sneakers.sort((a,b)=>{
        return b.price - a.price;
      })
      console.log(hightolowdata)
      dispatch(get_sneaker_success(hightolowdata));
    }

    if(e.target.value==="removefilter"){
   
      dispatch(get_sneaker_success(Sneakers));

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
          <Box  style={{display: isMobile ? "none" : "block"}}>
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
              Women's Sneakers{" "}
                <span
                  style={{ fontSize: "13px", width: "auto", height: "auto" }}
                >
                  {Sneakers.length} products
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
                <SneakerCard/>
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

export default Sneaker
