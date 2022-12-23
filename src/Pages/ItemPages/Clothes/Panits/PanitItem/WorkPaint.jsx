import React from "react";

import Sidebar from "../../../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { get_workpaints_success } from "../../../../../Redux/AppReducer/action";
import {useDispatch } from "react-redux";
import { Box, Text, Center } from "@chakra-ui/react";
import { workpaints } from "../../../../../db";
import WorkPaintCard from "./WorkPaintCard";
import { useMediaQuery } from "@chakra-ui/react";
import Filter from "../../../Filter";

function WorkPaint() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  
  const dispatch = useDispatch();
 

  const filterhandler =(e)=>{
    if(e.target.value==="lowtohigh"){
      const lowtohighdata = workpaints.sort((a,b)=>{
        return a.price - b.price;
      })
      console.log(lowtohighdata)
      dispatch(get_workpaints_success(lowtohighdata));
    }
    
    if(e.target.value==="hightolow"){
      const hightolowdata = workpaints.sort((a,b)=>{
        return b.price - a.price;
      })
      console.log(hightolowdata)
      dispatch(get_workpaints_success(hightolowdata));
    }

    if(e.target.value==="removefilter"){
   
      dispatch(get_workpaints_success(workpaints));

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
            <Box style={{ display: isMobile ? "none" : "block" }}>
              <Sidebar />
            </Box>
            <Box>
              <Box>
                <Box
                  maxWidth={"100%"}
                  // border="1px solid red"
                  display={"flex"}
                  justifyContent="space-between"
                  minW={"auto"}
                  flexWrap={"wrap"}
                  h={"auto"}
                  maxH="auto"
                >
                  <Box>
                    <Text fontSize={"22px"}>
                      Cocktail Dresses and Occasion Dresses{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        {workpaints.length} products
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

                {/* data  */}
              </Box>
              <Center>
              <WorkPaintCard />
              </Center>
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
  );
}

export default WorkPaint;
