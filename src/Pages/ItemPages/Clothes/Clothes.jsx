import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Text,Center } from "@chakra-ui/react";
import Sidebar from "../Sidebar";

import { Link } from "react-router-dom";
// import Navbar from "../../../components/Navbar/Navbar";
// import Footer from "../../../components/Footer/Footer";
import { casual } from "../../../db";
import { party } from "../../../db";
import { flare } from "../../../db";
import { wideleg } from "../../../db";
import CasualCard from "./Dresses/DressItem/CasualCard";
import FlareCard from "./Jeans/JeansItem/FlareCard";
import PartyCard from "./Dresses/DressItem/PartyCard";
import WidelegCard from "./Panits/PanitItem/WidelegCard";
import { useMediaQuery } from "@chakra-ui/react";
import Filter from "../Filter";

function Clothes() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const clothesBox = (
    <Box
      display={"flex"}
      width={"95%"}
      m="auto"
      gap={"20px"}
      mt={"30px"}
      flexWrap={"wrap"}
      color={"white"}
      alignItems={"center"}
      justifyContent="center"
      ml={{base:"5px", sm:"60px", md:"60px",lg:"60px"}}
    >
      
        <Link to={"/clothes/dresses"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            fontSize={"16px"}
            // border={"1px solid black"}
            h={"80.625px"}
            w={"188.172px"}
            minHeight={"auto"}
            minWidth={"auto"}
            fontFamily={"Times New Roman"}
            background={"#b18544"}
            // opacity={"0.8"}
          >
            DRESSES
          </Box>
        </Link>
      
        <Link to={"/clothes/paints"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            fontSize={"16px"}
            // border={"1px solid black"}
            h={"80.625px"}
            w={"188.172px"}
            minHeight={"auto"}
            minWidth={"auto"}
            fontFamily={"Times New Roman"}
            background={"#a2606e"}
            opacity={"0.9"}
          >
            PAINTS
          </Box>
        </Link>
        <Link to={"/clothes/jeans"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            fontSize={"16px"}
            // border={"1px solid black"}
            h={"80.625px"}
            w={"188.172px"}
            minHeight={"auto"}
            minWidth={"auto"}
            fontFamily={"Times New Roman"}
            background={"#b3827e"}
          >
            JEANS
          </Box>
        </Link>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"80.625px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          background={"#ce8968"}
        >
          JACKETS & COATS
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"80.625px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          background={"#877083"}
        >
          TOPS
        </Box>{" "}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"80.625px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          background={"#bd6d6f"}
        >
          SWEATERS
        </Box>

   
    </Box>
  );
  return (
    <Box>
      {/* <Navbar/> */}
      <Box>
      <Box>{clothesBox}</Box>
        <Box mt={"40px"}>
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
                    // w={"1020.84px"}
                    maxWidth={"100%"}
                    // border="1px solid red"
                    display={"flex"}
                    justifyContent="space-between"
                    flexWrap={"wrap"}
                    minW={"auto"}
                    h={"auto"}
                    maxH="auto"
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
                          {casual.length + wideleg.length + party.length + flare.length} products
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
                </Box>
                <Box mt="30px">
                  {/* data here */}
                <Center>
                  <PartyCard />
                </Center>

                <Center>
                  <CasualCard />
                </Center>
                <Center>
                  <FlareCard />
                </Center>
                <Center>
                  <WidelegCard />
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
      </Box>
      {/* <Footer/> */}
    </Box>
  );
}

export default Clothes;
