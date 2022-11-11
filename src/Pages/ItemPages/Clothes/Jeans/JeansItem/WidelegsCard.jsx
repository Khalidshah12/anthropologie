import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { wideleg } from "../../../../../db";

function WidelegsCard() {
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
        mt="30px"
      >
        {wideleg.length > 0 &&
          wideleg.map((ele) => (
            <Box w={"233.203px"} h="493.969px" minHeight={"auto"}>
              <Image w={"auto"} h="349.469px" src={ele.image} />
              <Text>{ele.name}</Text>
              <Text>${ele.price}</Text>
            </Box>
          ))}
      </Box>
    </>
  );
}

export default WidelegsCard;
