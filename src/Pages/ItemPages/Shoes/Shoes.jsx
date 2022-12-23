import React from "react";

import { Box, Text, Center } from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { get_sneaker_success } from "../../../Redux/AppReducer/action";
import { get_embleshed_success } from "../../../Redux/AppReducer/action";
import { get_birkenstock_success } from "../../../Redux/AppReducer/action";

import {useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Sneakers } from "../../../db";
import { birkenstock } from "../../../db";
import { embelished_shoes } from "../../../db";
import BirkenstockCard from "./ShoesItem/BirkenstockCard";
import EmbleshedCard from "./ShoesItem/EmbleshedCard";
import SneakerCard from "./ShoesItem/SneakerCard";
import { useMediaQuery } from "@chakra-ui/react";
import Filter from "../Filter";

function Shoes() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const dispatch = useDispatch();
 
  const filterhandler =(e)=>{
    if(e.target.value==="lowtohigh"){
      const lowtohighdata = Sneakers.sort((a,b)=>{
        return a.price - b.price;
      })
      console.log(lowtohighdata)
      dispatch(get_sneaker_success(lowtohighdata));
    }
    
    if(e.target.value==="hightolow"){
      const hightolowdata = Sneakers.sort((a,b)=>{
        return b.price - a.price;
      })
      console.log(hightolowdata)
      dispatch(get_sneaker_success(hightolowdata));
    }

    if(e.target.value==="removefilter"){
   
      dispatch(get_sneaker_success(Sneakers));

    }
    if(e.target.value==="lowtohigh"){
      const lowtohighdata = embelished_shoes.sort((a,b)=>{
        return a.price - b.price;
      })
      console.log(lowtohighdata)
      dispatch(get_embleshed_success(lowtohighdata));
    }
    
    if(e.target.value==="hightolow"){
      const hightolowdata = embelished_shoes.sort((a,b)=>{
        return b.price - a.price;
      })
      console.log(hightolowdata)
      dispatch(get_embleshed_success(hightolowdata));
    }

    if(e.target.value==="removefilter"){
   
      dispatch(get_embleshed_success(embelished_shoes));

    }
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

  const shoessBox = (
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
      ml={{ base: "5px", sm: "60px", md: "60px", lg: "60px" }}
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
          EMBELLISHED <br /> SHOES
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
          BIRKENSTOCK <br /> CLASSICS
        </Box>
      </Link>
    </Box>
  );
  return (
    <>
      {/* <Navbar/> */}
      <Box>{shoessBox}</Box>
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
                      Women's Shoes{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        {Sneakers.length +
                          embelished_shoes.length +
                          birkenstock.length}{" "}
                        products
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
                  <SneakerCard />
                </Center>
                <Center>
                  <BirkenstockCard />
                </Center>
                <Center>
                  <EmbleshedCard />
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

export default Shoes;
