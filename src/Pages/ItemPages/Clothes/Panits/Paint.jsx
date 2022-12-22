import React from 'react'
import {useMediaQuery} from '@chakra-ui/react';


import {Link} from 'react-router-dom';
import { Box, Text, Select, Image } from "@chakra-ui/react";
import Sidebar from "../../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import Navbar from "../../../../components/Navbar/Navbar";
// import Footer from "../../../../components/Footer/Footer";
import {wideleg} from '../../../../db';
import {workpaints} from '../../../../db';
import WorkPaintCard from './PanitItem/WorkPaintCard';
import WidelegCard from './PanitItem/WidelegCard';

function Paint() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const paintsBox = (
    <Box
      display={"flex"}
      width={"95%"}
      m="auto"
      gap={"20px"}
      mt={"30px"}
      flexWrap={"wrap"}
      color={"white"}
      ml="60px"
    >
            <Link to={"/clothes/paints/wideleg"}>
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
          background={"rgb(175,129,60)"}
          // opacity={"0.8"}
          textAlign={"center"}
        >
          WIDE LEG PAINTS
        </Box>
      </Link>
      <Link to={"/clothes/paints/workpaints"}>
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
          background={"rgb(187,87,101)"}
          // opacity={"0.8"}
          textAlign={"center"}
        >
          WORK PAINTS
        </Box>
      </Link>

    </Box>

  );
  return (
    <>
    {/* <Navbar/> */}
      <Box>
        {paintsBox}
        <Box mt={"40px"}>
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
                {workpaints.length + wideleg.length} products
              </span>
            </Text>
          </Box>
          <Box display={"flex"}>
            <Box display={"flex"} gap="5px">
              <Text mt={"3px"}>Sort :</Text>
              <Box
             
              >
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
          <Box mt="30px">
            {/* data here */}
            <WorkPaintCard/>
            <WidelegCard/>
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
    </>
  )
}

export default Paint
