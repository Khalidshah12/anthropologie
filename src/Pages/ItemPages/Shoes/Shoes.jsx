import React from 'react'

import { Box, Text, Select, Image } from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import Navbar from "../../../components/Navbar/Navbar";
// import Footer from "../../../components/Footer/Footer";
import {Link} from 'react-router-dom';
import { Sneakers } from '../../../db';
import {birkenstock} from '../../../db';
import { embelished_shoes } from '../../../db';
import BirkenstockCard from './ShoesItem/BirkenstockCard';
import EmbleshedCard from './ShoesItem/EmbleshedCard';
import SneakerCard from './ShoesItem/SneakerCard';
import {useMediaQuery} from '@chakra-ui/react';


function Shoes() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const shoessBox = (
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
      <Link to={"/shoes/embleshed"}>
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
          EMBELLISHED <br/> SHOES
        </Box>
      </Link>
      <Link to={"/shoes/sneakers"}>
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
          SNEAKERS
        </Box>
      </Link>
      <Link to={"/shoes/birkenstock"}>
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
          BIRKENSTOCK <br/> CLASSICS
        </Box>
      </Link>
    </Box>
  );
  return (
    <>
    {/* <Navbar/> */}
    <Box>
      {shoessBox}
    </Box>
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
              Women's Shoes{" "}
                <span
                  style={{ fontSize: "13px", width: "auto", height: "auto" }}
                >
                  {Sneakers.length + embelished_shoes.length + birkenstock.length} products
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
          <Box>
            {/* data here */}
              <SneakerCard/>
              <BirkenstockCard/>
              <EmbleshedCard/>
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

export default Shoes
