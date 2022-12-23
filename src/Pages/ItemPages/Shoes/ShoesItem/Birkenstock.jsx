import React from "react";

import Sidebar from "../../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { get_birkenstock_success } from "../../../../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import { birkenstock } from "../../../../db";
import { Box, Text, Center } from "@chakra-ui/react";
import BirkenstockCard from "./BirkenstockCard";
import { useMediaQuery } from "@chakra-ui/react";
import Filter from "../../Filter";

function Birkenstock() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const dispatch = useDispatch();
 
  const filterhandler =(e)=>{
    if(e.target.value==="lowtohigh"){
      const lowtohighdata = birkenstock.sort((a,b)=>{
        return a.price - b.price;
      })
      console.log(lowtohighdata)
      dispatch(get_birkenstock_success(lowtohighdata));
    }
    
    if(e.target.value==="hightolow"){
      const hightolowdata = birkenstock.sort((a,b)=>{
        return b.price - a.price;
      })
      console.log(hightolowdata)
      dispatch(get_birkenstock_success(hightolowdata));
    }

    if(e.target.value==="removefilter"){
   
      dispatch(get_birkenstock_success(birkenstock));

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
                  display={"flex"}
                  justifyContent="space-between"
                  // border="1px solid red
                  minW={"auto"}
                  flexWrap={"wrap"}
                  h={"auto"}
                >
                  <Box>
                    <Text fontSize={"25px"}>
                      Birkenstock - Women's Shoes{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        {birkenstock.length} products
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
                  <BirkenstockCard />
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
  );
}

export default Birkenstock;
