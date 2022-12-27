import React from "react";
import { Box, Text, Img } from "@chakra-ui/react";
import { embelished_shoes } from "../../../../db";

import { single_page_data } from "../../../../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import { get_embleshed_success } from "../../../../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function EmbleshedCard() {
  const dispatch = useDispatch();

  const { embleshedData } = useSelector((state) => {
    return {
      embleshedData: state.AppReducer.embleshedData,
    };
  });

  const singlePageHandler = (item) => {
    dispatch(single_page_data(item));
  };
  useEffect(() => {
    dispatch(get_embleshed_success(embelished_shoes));
  }, []);

  return (
    <>
      <Box
        display={"grid"}
        rowGap="15px"
        minH={"auto"}
        minW="auto"
        gridTemplateColumns={{
          lg: "repeat(4,1fr)",
          base: "repeat(1,1fr)",
          md: "repeat(3, 1fr)",
          sm: "repeat(2,1fr)",
        }}
        mt="30px"
      >
        {embleshedData.length > 0 &&
          embleshedData.map((ele) => (
            <Link to={`/shop/${ele.id}`}>
              <Box
                // w={"233.203px"}
                h="470.969px"
                minHeight={"auto"}
                cursor="pointer"
                width={"243.484px"}
                minW="auto"
                minH={"auto"}
                onClick={() => singlePageHandler(ele, ele.id)}
                key={ele.id + Math.random()}
              >
                <Img
                  w={"auto"}
                  h="349.469px"
                  borderRadius={"10px"}
                  transition="all 0.3s"
                  _hover={{
                    opacity: 0.9,
                    brightness: "200%",
                    contrast: "100",
                  }}
                  src={ele.image}
                />
                <Text width={"240px"}>{ele.name}</Text>
                <Text>${ele.price}</Text>
              </Box>
            </Link>
          ))}
      </Box>
    </>
  );
}

export default EmbleshedCard;
