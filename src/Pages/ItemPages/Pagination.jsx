import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// function array(n){
//   return new Array(n);
// }


// const item = [1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,20];

function Pagination({pageHandler, page, no_page}) {

  return (
    <>
      <Box display={"flex"}>
        <Button onClick={()=>pageHandler(-1)} disabled={page===1} background ="none" width="15px">
          <ChevronLeftIcon fontSize={"40px"} _hover={{ color: "#167A92" }} />
        </Button>
        <Box>
        <Text mt={"8px"}>{page}/{no_page}</Text>
        </Box>
        <Button onClick={()=>pageHandler(1)} disabled={page===no_page} background ="none" width="15px">
          <ChevronRightIcon fontSize={"40px"} _hover={{ color: "#167A92" }} />
        </Button>
      </Box>
    </>
  );
}

export default Pagination;
