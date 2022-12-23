import { Box, Img, Text, Button, Select, Center } from "@chakra-ui/react";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { postData } from "../../Redux/AppReducer/action";
import { useToast } from "@chakra-ui/react";
import Offer from "./Offer";
import { Link } from "react-scroll";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function SingleItemPage() {
  const dispatch = useDispatch();
  const toast = useToast();

  const [Qty, SetQty] = useState(count);

  const { singlepage } = useSelector((state) => {
    return {
      singlepage: state.AppReducer.singlepage,
    };
  });

  const selectHandler = (e) => {
    SetQty(e.target.value);
  };

  // add to cart
  const addtoCart = () => {
    dispatch(postData(singlepage));
    toast({
      title: "Item Added Successfully.",
      description: "We are waiting for checkout.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  // crauser
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  console.log(singlepage);
  return (
    <Box>
      <Box
        w={"80%"}
        minH="auto"
        minW={"auto"}
        display="flex"
        flexWrap={"wrap"}
        gap="50px"
        m={"auto"}
        mt="30px"
      >
        <Box width={[250, 300, 400, 500]}>
          <Slider {...settings}>
            <Box overflow={"hidden"}>
              <Img
                height={{
                  lg: "400.016px",
                  md: "300px",
                  sm: "200px",
                  sx: "200px",
                }}
                borderRadius="10px"
                // border="1px solid red"
                src={singlepage.image}
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.5)" }}
              />
            </Box>
            <Box overflow={"hidden"}>
              <Img
                height={{
                  lg: "400.016px",
                  md: "300px",
                  sm: "200px",
                  sx: "200px",
                }}
                // border="1px solid red"
                borderRadius="10px"
                src={singlepage.flip_image}
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.5)" }}
              />
            </Box>
          </Slider>
        </Box>
        <Center>
          <Box
            padding={"10px"}
            width={{ lg: "450px", md: "450px", sm: "300px" }}
          >
            <Box>
              <Text fontSize={"22px"} fontWeight="500" mb={"20px"}>
                {singlepage.name}
              </Text>
            </Box>
            <Box mt={"10px"} mb="10px" fontWeight={"bold"}>
              ${singlepage.price}.00
            </Box>
            <Box>
              <Text w={"290px"} fontSize="12px" mb={"15px"} mt="15px">
                Or 4 interest-free installments of $45.00 with Klarna orAfterpay{" "}
              </Text>
            </Box>
            <hr />
            <Box mt={"20px"}>
              <Text>Color : {singlepage.color}</Text>
              <Box display={"flex"} w="auto" minWidth={"auto"} mt="10px">
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  width={"30px"}
                  height="30px"
                  borderRadius={"50%"}
                  _hover={{
                    border: "1px solid #167A92",
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    width={"20px"}
                    height="20px"
                    borderRadius={"50%"}
                    style={{ backgroundColor: "red" }}
                  ></Box>
                </Box>
              </Box>
              <Box mt={"10px"} mb="10px">
                Fit*
              </Box>
              <Box
                display={"flex"}
                gap="10px"
                // border="1px solid red"
                width="200px"
              >
                <Button
                  fontFamily={"sans-serif"}
                  fontSize="13px"
                  border={"1px solid black"}
                  letterSpacing="0.6px"
                  fontWeight={100}
                  h="38px"
                  w={"100px"}
                  minH="38px"
                  borderRadius={"none"}
                >
                  Standard
                </Button>
                <Button
                  fontFamily={"sans-serif"}
                  fontSize="13px"
                  border={"1px solid black"}
                  letterSpacing="0.6px"
                  fontWeight={100}
                  h="38px"
                  w={"100px"}
                  minH="38px"
                  borderRadius={"none"}
                >
                  Petite
                </Button>
                <Button
                  fontFamily={"sans-serif"}
                  fontSize="13px"
                  border={"1px solid black"}
                  letterSpacing="0.6px"
                  fontWeight={100}
                  h="38px"
                  w={"100px"}
                  minH="38px"
                  borderRadius={"none"}
                >
                  Plus
                </Button>
              </Box>
              <Box mt={"10px"} mb="10px">
                Size*
              </Box>
              <Box width="250px">
                {singlepage.size.map((ele) => (
                  <Button m={"2px"} _hover={{ border: "1px solid black" }}>
                    {ele}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box mt={"10px"} mb="15px">
              <Box mb="10px">Qty*</Box>
              <Box>
                <Select width={"100px"} height="45px" onChange={selectHandler}>
                  {Qty.map((ele) => (
                    <option value={ele}>{ele}</option>
                  ))}
                </Select>
              </Box>
            </Box>

            <Box>
              <Box>
                <Button
                  borderRadius="none"
                  h={"45px"}
                  width={{ lg: "306.016px", md: "250px", sm: "200px" }}
                  border="1px solid #4B5666"
                  p={"10px 20px 10px 20px"}
                  minH="45px"
                  background={"#4B5666"}
                  color="white"
                  _hover={{
                    color: "black",
                    backgroundColor: "rgb(253,253,249)",
                borderRadius:"10px"

                  }}
                  fontWeight={400}
                  onClick={addtoCart}
                >
                  ADD TO BASKET
                </Button>
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                mt={"20px"}
                mb="20px"
                width={{ lg: "306.016px", md: "250px", sm: "200px" }}
                fontSize={"12px"}
                color="#167A92"
                textDecoration={"underline"}
                cursor="pointer"
              >
                <Text>Add To Registry</Text>
                <Text>Add to Wish List</Text>
              </Box>
              <Box>
                <Link to="offer" smooth>
                  <Button
                    borderRadius="none"
                    h={"45px"}
                    width={{ lg: "306.016px", md: "250px", sm: "200px" }}
                    border="1px solid #4B5666"
                    p={"10px 20px 10px 20px"}
                    minH="45px"
                    backgroundColor="rgb(253,253,249)"
                    _hover={{
                      background: "#4B5666",
                      color: "white",
                borderRadius:"10px"

                    }}
                    fontWeight={400}
                  >
                    SHOP THE COLLECTION
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Center>
      </Box>

      <Box width={"80%"} minWidth="auto" m={"auto"} mt="50px">
        <Text fontSize={"18px"} mt="20px" mb="20px" fontWeight={500}>
          Products Details
        </Text>
        <Text>{singlepage.details}</Text>
      </Box>
      <Box>
        <Offer />
      </Box>
    </Box>
  );
}

export default SingleItemPage;
