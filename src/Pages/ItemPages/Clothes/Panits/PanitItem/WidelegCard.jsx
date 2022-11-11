import React from 'react'
import {wideleg} from '../../../../../db';
import { Box, Text, Image } from "@chakra-ui/react";


function WidelegCard() {
  return (
    <>
        <Box
             w={"1000.84px"}
             maxWidth={"100%"}
              display={"grid"}
              gridTemplateColumns={{
                lg: "repeat(4, 1fr)",
                md: "repeat(3,1fr)",
                sm: "repeat(2, 1fr)",
              }}
             
            >
              {wideleg.length > 0 &&
                wideleg.map((ele) => (
                  <Box w={"233.203px"} h="493.969px" minHeight={"auto"}>
                    <Image w={"auto"} h="349.469px" src={ele.Image} />
                    <Text>{ele.name}</Text>
                    <Text>${ele.price}</Text>
                  </Box>
                ))}
            </Box> 
    </>
  )
}

export default WidelegCard
