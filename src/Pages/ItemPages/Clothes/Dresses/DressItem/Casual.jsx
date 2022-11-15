import React from "react";

import { Box, Text } from "@chakra-ui/react";
import { casual } from "../../../../../db";
import {useMediaQuery} from '@chakra-ui/react';

import Sidebar from "../../../Sidebar";
import Pagination from "../../../Pagination";
import Filter from "../../../Filter";
// import Navbar from "../../../../../components/Navbar/Navbar";
// import Footer from "../../../../../components/Footer/Footer";
import CasualCard from "./CasualCard";

function Casual() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");
 
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
                      <Filter />
                    </Box>
                    <Box>
                      <Pagination />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box mt={"30px"}>
                {/* map data here */}
                <CasualCard/>
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
