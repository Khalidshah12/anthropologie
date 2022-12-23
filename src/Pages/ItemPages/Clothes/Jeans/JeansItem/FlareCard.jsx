import React from "react";
import { Box, Text, Img } from "@chakra-ui/react";
import { flarejeans } from "../../../../../db";

import { single_page_data } from "../../../../../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import { get_flare_success } from "../../../../../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function FlareCard() {
  const dispatch = useDispatch();

  const { flareData } = useSelector((state) => {
    return {
      flareData: state.AppReducer.flareData,
    };
  });

  const singlePageHandler = (item) => {
    dispatch(single_page_data(item));
  };
  useEffect(() => {
    dispatch(get_flare_success(flarejeans));
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
        {flareData.length > 0 &&
          flareData.map((ele) => (
            <Link to={`/shop/${ele.id}`}>
              <Box
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
                    transform: "scale(1.1)",
                    opacity: 0.9,
                    brightness: "200%",
                    contrast: "100",
                  }}
                  src={ele.image}
                />

                <Text width={"230px"}>{ele.name}</Text>
                <Text fontWeight={"bold"}>${ele.price}</Text>
              </Box>
            </Link>
          ))}
      </Box>
    </>
  );
}

export default FlareCard;
