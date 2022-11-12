import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getwedding } from "../../../../../Redux/AppReducer/action";
import { wedding } from "../../../../../db";
import { useMediaQuery } from "@chakra-ui/react";
import { Box, Image, Text } from "@chakra-ui/react";
import Sidebar from "../../../Sidebar";
// import Navbar from "../../../../../components/Navbar/Navbar";
// import Footer from "../../../../../components/Footer/Footer";
const img =
  "https://images.ctfassets.net/5de70he6op10/2PdLAuxgF5OpC2u5ui2aWf/14997170d64fc963f8e24284f3874725/070822_WeddingDressGateway_SS_01_copy.jpg?w=1125&q=80&fm=webp";

function Wedding() {
  // const dispatch = useDispatch();
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  // console.log(isMobile);

  // const { wedding, isLoading, isError } = useSelector((state) => {
  //   return {
  //     wedding: state.AppReducer.wedding,
  //     isError:state.AppReducer.isError,
  //     isLoading:state.AppReducer.isLoading
  //   };
  // });

  // console.log(wedding);

  // useEffect(() => {
  //   dispatch(getwedding);
  // }, []);

  return (
    <>
    {/* <Navbar/> */}
      <Box mt={"30px"}>
        {isMobile ? (
          <Box
            h={"auto"}
            w="90%"
            padding={"0,50px, 0, 50px"}
            maxWidth="1561px"
            m={"auto"}
            display="flex"
            mt={"50px"}
          >
            <Box w={"1020.84px"} maxWidth={"100%"}>
              <Box>
                {wedding.map((ele) => {
                  if (ele.name === "Wedding Guest Dresses") {
                    return (
                      <Box>
                        {isMobile ? (
                          <Image
                            src={img}
                            h="649px"
                            w="100%"
                            minWidth={"auto"}
                            minHeight={"auto"}
                          />
                        ) : (
                          <Image src={ele.image} h={"387.141px"} w="100%" />
                        )}

                        <Text
                          textAlign={"center"}
                          fontSize="22px"
                          padding={"10px"}
                        >
                          {ele.name}
                        </Text>
                        <Text textAlign={"center"} padding={"10px"}>
                          {ele.details}
                        </Text>
                      </Box>
                    );
                  }
                })}
              </Box>

              <Box>
                <Text fontSize="22px" textAlign={"center"} padding={"10px"}>
                  SHOP BY DRESS CODE
                </Text>
              </Box>
              <Box
                display={"grid"}
                gridTemplateColumns={{
                  lg: "repeat(2, 1fr)",
                  sm: "repeat(1, 1fr)",
                }}
                columnGap="10px"
                padding={"10px"}
              >
                {wedding.map((ele) => {
                  if (ele.name !== "Wedding Guest Dresses") {
                    return (
                      <Box w={"500.422px"} maxWidth={"100%"}>
                        <Image src={ele.image} h={"415.859px"} />
                        <Text fontSize="22px" padding={"10px"}>
                          {ele.name}
                        </Text>
                        <Text padding={"10px"}>{ele.details}</Text>
                      </Box>
                    );
                  }
                })}
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            h={"auto"}
            w="90%"
            padding={"0,50px, 0, 50px"}
            maxWidth="1561px"
            m={"auto"}
            display="flex"
            mt={"50px"}
          >
            <Box>
              <Sidebar />
            </Box>

            <Box w={"1020.84px"} maxWidth={"100%"}>
              <Box>
                {wedding.map((ele) => {
                  if (ele.name === "Wedding Guest Dresses") {
                    return (
                      <Box>
                        {isMobile ? (
                          <Image
                            src={img}
                            h="649px"
                            w="100%"
                            minWidth={"auto"}
                            minHeight={"auto"}
                          />
                        ) : (
                          <Image src={ele.image} h={"387.141px"} w="100%" />
                        )}

                        <Text
                          textAlign={"center"}
                          fontSize="22px"
                          padding={"10px"}
                        >
                          {ele.name}
                        </Text>
                        <Text textAlign={"center"} padding={"10px"}>
                          {ele.details}
                        </Text>
                      </Box>
                    );
                  }
                })}
              </Box>

              <Box>
                <Text fontSize="22px" textAlign={"center"} padding={"10px"}>
                  SHOP BY DRESS CODE
                </Text>
              </Box>
              <Box
                display={"grid"}
                gridTemplateColumns={{
                  lg: "repeat(2, 1fr)",
                  sm: "repeat(1, 1fr)",
                }}
                columnGap="10px"
                padding={"10px"}
              >
                {wedding.map((ele) => {
                  if (ele.name !== "Wedding Guest Dresses") {
                    return (
                      <Box w={"500.422px"} maxWidth={"100%"}>
                        <Image src={ele.image} h={"415.859px"} />
                        <Text fontSize="22px" padding={"10px"}>
                          {ele.name}
                        </Text>
                        <Text padding={"10px"}>{ele.details}</Text>
                      </Box>
                    );
                  }
                })}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      {/* <Footer/> */}
    </>
  );
}

export default Wedding;
