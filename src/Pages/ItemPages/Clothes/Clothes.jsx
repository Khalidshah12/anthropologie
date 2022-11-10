import { Box } from "@chakra-ui/react";
import React from "react";
import Dresses from "./Dresses/Dresses";
import Jeans from "./Jeans/Jeans";
import Paint from "./Panits/Paint";

function Clothes() {
  const clothesBox = (
    <Box
      display={"flex"}
      width={"90%"}
      m="auto"
      gap={"20px"}
      mt={"240px"}
      flexWrap={"wrap"}
      color={"white"}
    >
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
      {clothesBox}
      <Dresses />
    </Box>
  );
}

export default Clothes;
