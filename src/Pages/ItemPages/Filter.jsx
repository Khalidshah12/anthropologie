import React from "react";
import { Box, Select, Text } from "@chakra-ui/react";

function Filter() {
  return (
    <>
      <Box display={"flex"} gap="5px">
        <Text mt={"3px"}>Sort : </Text>

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
    </>
  );
}

export default Filter;
