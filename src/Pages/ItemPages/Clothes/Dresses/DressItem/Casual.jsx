import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_casual_success } from "../../../../../Redux/AppReducer/action";
import { useEffect, useState } from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import { casual } from "../../../../../db";
import { useMediaQuery } from "@chakra-ui/react";

import Sidebar from "../../../Sidebar";
import Pagination from "../../../Pagination";
import Filter from "../../../Filter";

import CasualCard from "./CasualCard";

function Casual() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");
  const dispatch = useDispatch();
 
  const { casualData } = useSelector((state) => {
    return {
      casualData: state.AppReducer.casualData,
    };
  });

  useEffect(() => {
    dispatch(get_casual_success(casual));
  }, []);

  console.log(casualData)

  const filterhandler =(e)=>{
    if(e.target.value==="lowtohigh"){
      const lowdata = casualData.sort((a,b)=>{
        return a.price > b.price;
      })
      console.log(lowdata)
    }
  }

  return (
    <>
      {/* <Navbar /> */}

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
                      Casual Dresses for Any Occasion{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        {casual.length} products
                      </span>
                    </Text>
                  </Box>
                  <Box display={"flex"}>
                    <Box>
                      <Filter filterhandler={filterhandler} />
                    </Box>
                    <Box>
                      <Pagination />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box mt={"30px"}>
                {/* map data here */}
                <Center>
                  <CasualCard />
                </Center>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent="end" width={"98%"} m="auto">
          <Pagination />
        </Box>
      </Box>

      {/* <Footer /> */}
    </>
  );
}

export default Casual;
