import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { casual } from "../../db";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { single_page_data } from "../../Redux/AppReducer/action";
import { get_casual_success } from "../../Redux/AppReducer/action";
import {useNavigate} from 'react-router-dom';
import {
  Heading,
  Box,
  Img,
  Spacer,
  Flex,
} from "@chakra-ui/react";


export default function Offer() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { casualData } = useSelector((state) => {
    return {
      casualData: state.AppReducer.casualData,
    };
  });

  const navogateTosinglePage =(id)=>{
    setTimeout(() => {
      navigate(`/shop/${id}`)
    }, 9000);

  }
  const singlePageHandler = (item, id) => {
    dispatch(single_page_data(item));
    navogateTosinglePage(id)
  };

  useEffect(() => {
    dispatch(get_casual_success(casual));

  }, []);


  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box >
      <Spacer h={"100px"} id="offer"/>
      <Box w={"100%"} bgColor={"#202124"} h="550px" minWidth={"auto"}>
        <Box w={"80%"} m={"auto"}>
          <Spacer h={"50px"} />
          <Flex color={"white"} justifyContent={"space-between"}>
            <Heading fontSize={"38px"}>OFFERS & DEALS</Heading>
          </Flex>
          <Spacer h={"50px"} />
          <Box>
            {/* slider */}
            <Slider {...settings}>
              {casualData.map((ele) => (
                <Box
                  color={"white"}
                  h={"360px"}
                  w="310px"
                  borderRadius={"10px"}
                  bgColor={"#F8F7F5"}
                  // border={"1px solid red"}
                onClick={() => singlePageHandler(ele, ele.id)}
                overflow="hidden"
                >
                  <Img
                    src={ele.image}
                    alt="image"
                    h={"360px"}
                    w="310px"

                    borderRadius={"10px"}
                    cursor="pointer"
                    transition= "transform 0.3s"
                    _hover={{transform:"scale(1.1)", opacity:0.8}}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
