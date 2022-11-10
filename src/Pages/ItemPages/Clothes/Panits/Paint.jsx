import React from 'react'
import WideLeg from './PanitItem/WideLeg'
import WorkPaint from './PanitItem/WorkPaint'
import {Box} from '@chakra-ui/react'
import {Link} from 'react-router-dom';

function Paint() {
  const paintsBox = (
    <Box
      display={"flex"}
      width={"95%"}
      m="auto"
      gap={"20px"}
      mt={"240px"}
      flexWrap={"wrap"}
      color={"white"}
      ml="60px"
    >
      <Link to={"/workpaints"}>
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
          WORKPAINTS
        </Box>
      </Link>
    </Box>

  );
  return (
    <>
      <Box>
        {paintsBox}
      </Box>
    </>
  )
}

export default Paint
