import React from "react";

import { Box, Text, Select, Image, Center } from "@chakra-ui/react";
import Sidebar from "../../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import Navbar from "../../../../components/Navbar/Navbar";
// import Footer from "../../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import {bootcut, boyfriend, flare} from '../../../../db';
import {wideleg} from '../../../../db';
import {straight} from '../../../../db';
import FlareCard from "./JeansItem/FlareCard";
import WidelegsCard from "./JeansItem/WidelegsCard";
import StraightCard from "./JeansItem/StraightCard";
import SkinnyCard from "./JeansItem/SkinnyCard";
import {useMediaQuery} from '@chakra-ui/react';


function Jeans() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const jeansBox = (
    <Box
      display={"flex"}
      width={"95%"}
      m="auto"
      gap={"20px"}
      mt={"40px"}
      flexWrap={"wrap"}
      ml="60px"
    >
      <Link to={"/clothes/jeans/flare"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          // opacity={"0.8"}
          textAlign={"center"}
        >
          <Image
            height={"285px"}
            width="auto"
            src="https://images.ctfassets.net/5de70he6op10/3YLrFbhGHySXgQNQeLehrd/7668a18ea3a3f749d5d8677f95425b67/07XX22_DenimFitGuide_2a_Flare.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Flare Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Slim to the knee, then plenty of flare.
          </Center>
        </Box>
      </Link>
      <Link to={"/clothes/jeans/straight"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          textAlign={"center"}
        >
          <Image
            height={"285px"}
            width="auto"
            src="https://images.ctfassets.net/5de70he6op10/5kzSrbLIQ4vdVrZrxlmdV1/3e34008dcbcbead5f8bb6d049e7833cf/07XX22_DenimFitGuide_2c_Straight.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Straight Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Stylishly slim, straight, and streamlined.
          </Center>
        </Box>
      </Link>
      <Link to={"/clothes/jeans/wideleg"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          textAlign={"center"}
        >
          <Image
            height={"285px"}
            width="auto"
            src="https://images.ctfassets.net/5de70he6op10/7hmtppyZyXWxt8aWOopHZq/9c07e1f7a725ac581aaccef287ae2260/07XX22_DenimFitGuide_2b_Wideleg.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Wide Leg Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Just relax and let loose with wide legs.
          </Center>
        </Box>
      </Link>

      <Link to={"/clothes/jeans/bootcut"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          textAlign={"center"}
        >
          <Image
            height={"285px"}
            width="auto"
            src="https://images.ctfassets.net/5de70he6op10/6Cxehd3E68xxeIZ51CPK8U/21f0455a4eec2622fc30144f20c8e704/07XX22_DenimFitGuide_2d_Bootcut.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Bootcut Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Easy and flattering, they make the bootcut.
          </Center>
        </Box>
      </Link>
      <Link to={"/clothes/jeans/boyfriend"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          textAlign={"center"}
        >
          <Image
            height={"285px"}
            width="auto"
            src="https://images.ctfassets.net/5de70he6op10/4eVz0PgHne37VoG2fxFuFw/12a8aa66bae70f657696551958951e00/07XX22_DenimFitGuide_2e_Boyfriend.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Boyfriend Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Slouchy and relaxed for an easy, everyday fit.
          </Center>
        </Box>{" "}
      </Link>
      <Link to={"/clothes/jeans/skinny"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          textAlign={"center"}
        >
          <Image
            height={"285px"}
            width="auto"
            src="https://images.ctfassets.net/5de70he6op10/5iVUZX2juMBuuDx31RZxwt/cd468d6fe6592dfa5b3004016046a9f6/07XX22_DenimFitGuide_2f_Skinny.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Skinny Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Here’s the skinny: They’re sleek, slim, and versatile.
          </Center>
        </Box>
      </Link>
    </Box>
  );
  return (
    <>
      {/* <Navbar /> */}
      <Box>{jeansBox}</Box>
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
                w={"1020.84px"}
                maxWidth={"100%"}
                // border="1px solid red"
                display={"flex"}
                justifyContent="space-between"
              >
                <Box>
                  <Text fontSize={"25px"}>
                  Women's Jeans & Denim{" "}
                    <span
                      style={{ fontSize: "13px", width: "auto", height: "auto" }}
                    >
                      {bootcut.length + boyfriend.length + flare.length + wideleg.length + straight.length} products
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
            <Box>
              {/* data here */}
                <FlareCard/>
                <WidelegsCard/>
                <StraightCard/>
                <SkinnyCard/>
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
      {/* <Footer /> */}
    </>
  );
}

export default Jeans;
