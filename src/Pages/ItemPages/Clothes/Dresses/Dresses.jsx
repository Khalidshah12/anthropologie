import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Center} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import Sidebar from "../../Sidebar";
import { casual } from "../../../../db";
import {party} from '../../../../db';
import {useMediaQuery} from '@chakra-ui/react';


// import Navbar from "../../../../components/Navbar/Navbar";
// import Footer from "../../../../components/Footer/Footer";
import PartyCard from "./DressItem/PartyCard";
import CasualCard from "./DressItem/CasualCard";
import Filter from "../../Filter";

function Dresses() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const dressBox = (
    <Box
      display={"flex"}
      width={"95%"}
      m="auto"
      gap={"20px"}
      mt={"40px"}
      flexWrap={"wrap"}
      color={"white"}
      alignItems={"center"}
      justifyContent="center"
      ml={{base:"5px", sm:"60px", md:"60px",lg:"60px"}}

    >

      <Link to={"/clothes/dresses/wedding"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"59.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          background={"#bda16b"}
          // opacity={"0.8"}
          textAlign={"center"}
        >
          WEDDING GUEST <br /> DRESSES
        </Box>
      </Link>
      <Link to={"/clothes/dresses/casual"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"59.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          background={"#deaf8b"}
          opacity={"0.9"}
        >
          CASUAL DRESSES
        </Box>
      </Link>
      <Link to={"/clothes/dresses/party"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"59.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          background={"#d9838e"}
        >
          PARTY DRESSES
        </Box>
      </Link>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
        fontSize={"16px"}
        // border={"1px solid black"}
        h={"59.7334px"}
        w={"188.172px"}
        minHeight={"auto"}
        minWidth={"auto"}
        fontFamily={"Times New Roman"}
        background={"#dd8a74"}
      >
        WHITE DRESSSES
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
        fontSize={"16px"}
        // border={"1px solid black"}
        h={"59.7334px"}
        w={"188.172px"}
        minHeight={"auto"}
        minWidth={"auto"}
        fontFamily={"Times New Roman"}
        background={"#c37481"}
      >
        BLACK DRESSES
      </Box>{" "}
      <Link to={'/clothes/dresses/formaldress'}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"59.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          background={"#ca757a"}
        >
          FORMAL DRESSSES
        </Box>
      </Link>
    </Box>
  );
  return (
    <>
      {/* <Navbar/> */}
      <Box>{dressBox}]</Box>
      <Box mt={"20px"}>
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
                    {party.length + casual.length} products
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
              <Box mt={"30px"}>
                {/* data here */}
                <Center>
                <PartyCard/>
                </Center>
                <Center>
                <CasualCard/>
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

export default Dresses;
