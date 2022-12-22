import React from "react";

import Sidebar from "../../../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";

// import Navbar from "../../../../../components/Navbar/Navbar";
// import Footer from "../../../../../components/Footer/Footer";

import { wideleg } from "../../../../../db";
import { Box, Text, Center } from "@chakra-ui/react";
import WidelegCard from "./WidelegCard";
import Filter from "../../../Filter";

function WideLeg() {
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
                  maxH="auto"
                >
                  <Box>
                    <Text fontSize={"22px"}>
                      Wide Leg Pants{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        {wideleg.length} products
                      </span>
                    </Text>
                  </Box>
                  <Box display={"flex"}>
                      <Filter/>
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
                <WidelegCard />
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
      {/* <Footer /> */}
    </>
  );
}

export default WideLeg;
