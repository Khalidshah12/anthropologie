import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
function Pagination() {
  return (
    <>
      <Box display={"flex"}>
        <ChevronLeftIcon fontSize={"40px"} _hover={{ color: "#167A92" }} />
        <Box>
          <Text mt={"8px"}>1/47</Text>
        </Box>
        <ChevronRightIcon fontSize={"40px"} _hover={{ color: "#167A92" }} />
      </Box>
    </>
  );
}

export default Pagination;
