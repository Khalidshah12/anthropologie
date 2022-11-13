import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Select} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import Sidebar from "../../Sidebar";
import { casual } from "../../../../db";
import {party} from '../../../../db';
import {useMediaQuery} from '@chakra-ui/react';


// import Navbar from "../../../../components/Navbar/Navbar";
// import Footer from "../../../../components/Footer/Footer";
import PartyCard from "./DressItem/PartyCard";
import CasualCard from "./DressItem/CasualCard";

function Dresses() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const dressBox = (
    <Box
      display={"flex"}
      width={"95%"}
      m="auto"
      gap={"20px"}
      mt={"40px"}
      flexWrap={"wrap"}
      color={"white"}
      ml="60px"
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
              w={"1020.84px"}
              maxWidth={"100%"}
              // border="1px solid red"
              display={"flex"}
              justifyContent="space-between"
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
                <Box display={"flex"} gap="5px">
                  <Text mt={"3px"}>Sort :</Text>
                  <Box>
                    <Select
                      h={"35px"}
                      border={"1px solid #939395"}
                      // margin="0 30px 0 0"
                      // padding={"0 10px 0 10px"}
                      minHeight="auto"
                      minWidth={"auto"}
                      placeholder="Featured"
                      _hover="none"
                    >
                      <option value="lowtohigh">Price: Low to High</option>
                      <option value="hightolow">Price: High to Low</option>
                      <option value="Newest">Newest</option>
                      <option value="Bestselling">Bestselling</option>
                      <option value="Ratings">High To Low</option>
                      <option value="atoz">A-Z</option>
                      <option value="ztoa">Z-A</option>
                    </Select>
                  </Box>
                </Box>
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
                <PartyCard/>
                <CasualCard/>
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
