import React from "react";
import { useState, useEffect } from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import Sidebar from "../Sidebar";

import { Link } from "react-router-dom";

import { casual } from "../../../db";
import { party } from "../../../db";
import { flare } from "../../../db";
import { wideleg } from "../../../db";
import CasualCard from "./Dresses/DressItem/CasualCard";
import Pagination from "../Pagination";

import { useMediaQuery } from "@chakra-ui/react";
import Filter from "../Filter";
import { useDispatch } from "react-redux";
import { get_casual_success } from "../../../Redux/AppReducer/action";

function Clothes() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const totalitem = casual.length;

  const pagelimit = 50;

  const no_page = Math.ceil(totalitem / pagelimit);

  const getPagination = (page) => {
    const trimStart = (page - 1) * pagelimit;
    const trimEnd = trimStart + pagelimit;

    const data = casual.slice(trimStart, trimEnd);

    dispatch(get_casual_success(data));
  };

  const pageHandler = (value) => {
    setPage((prev) => prev + value);
  };

  useEffect(() => {
    getPagination(page);
  }, [page]);

  const filterhandler = (e) => {
    if (e.target.value === "lowtohigh") {
      const lowtohighdata = casual.sort((a, b) => {
        return a.price - b.price;
      });
      console.log(lowtohighdata);
      dispatch(get_casual_success(lowtohighdata));
    }

    if (e.target.value === "hightolow") {
      const hightolowdata = casual.sort((a, b) => {
        return b.price - a.price;
      });
      console.log(hightolowdata);
      dispatch(get_casual_success(hightolowdata));
    }

    if (e.target.value === "removefilter") {
      dispatch(get_casual_success(casual));
    }

  };

  const clothesBox = (
    <Box
      display={"flex"}
      width={"95%"}
      m="auto"
      gap={"20px"}
      mt={"30px"}
      flexWrap={"wrap"}
      color={"white"}
      alignItems={"center"}
      justifyContent="center"
      ml={{ base: "5px", sm: "60px", md: "60px", lg: "60px" }}
    >
      <Link to={"/clothes/dresses"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"80.625px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          background={"#b18544"}
          // opacity={"0.8"}
        >
          DRESSES
        </Box>
      </Link>
      <Link to={"/clothes/paints"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"80.625px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          background={"#a2606e"}
          opacity={"0.9"}
        >
          PAINTS
        </Box>
      </Link>
      <Link to={"/clothes/jeans"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"80.625px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          background={"#b3827e"}
        >
          JEANS
        </Box>
      </Link>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
        fontSize={"16px"}
        // border={"1px solid black"}
        h={"80.625px"}
        w={"188.172px"}
        minHeight={"auto"}
        minWidth={"auto"}
        fontFamily={"Times New Roman"}
        background={"#ce8968"}
      >
        JACKETS & COATS
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
        fontSize={"16px"}
        // border={"1px solid black"}
        h={"80.625px"}
        w={"188.172px"}
        minHeight={"auto"}
        minWidth={"auto"}
        fontFamily={"Times New Roman"}
        background={"#877083"}
      >
        TOPS
      </Box>{" "}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
        fontSize={"16px"}
        // border={"1px solid black"}
        h={"80.625px"}
        w={"188.172px"}
        minHeight={"auto"}
        minWidth={"auto"}
        fontFamily={"Times New Roman"}
        background={"#bd6d6f"}
      >
        SWEATERS
      </Box>
    </Box>
  );
  return (
    <Box mt={"260px"}>
      {/* <Navbar/> */}
      <Box>
        <Box>{clothesBox}</Box>
        <Box mt={"40px"}>
          <Box width={"90%"} m="auto">
            <Box
              h={"auto"}
              padding={"0,50px, 0, 50px"}
              maxWidth="1561px"
              display="flex"
            >
              <Box style={{ display: isMobile ? "none" : "block" }}>
                <Sidebar />
              </Box>
              <Box>
                <Box>
                  <Box
                    // w={"1020.84px"}
                    maxWidth={"100%"}
                    // border="1px solid red"
                    display={"flex"}
                    justifyContent="space-between"
                    flexWrap={"wrap"}
                    minW={"auto"}
                    h={"auto"}
                    maxH="auto"
                  >
                    <Box>
                      <Text fontSize={"25px"}>
                        Casual Dresses for Any Occasion{" "}
                        <span
                          style={{
                            fontSize: "13px",
                            width: "auto",
                            height: "auto",
                          }}
                        >
                          {casual.length +
                            wideleg.length +
                            party.length +
                            flare.length}{" "}
                          products
                        </span>
                      </Text>
                    </Box>
                    <Box display={"flex"} gap="10px">
                      <Box>
                        <Filter filterhandler={filterhandler} />
                      </Box>
                      <Box>
                        <Pagination
                          pageHandler={pageHandler}
                          page={page}
                          no_page={no_page}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box mt="30px">
                  {/* data here */}
                  {/* <Center>
                    <PartyCard />
                  </Center> */}
                  <Center>
                    <CasualCard />
                  </Center>
                  {/* <Center>
                    <FlareCard />
                  </Center>
                  <Center>
                    <WidelegCard />
                  </Center> */}
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent="flex-end"
              width={"98%"}
              m="auto"
            >
              <Pagination
                pageHandler={pageHandler}
                page={page}
                no_page={no_page}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Footer/> */}
    </Box>
  );
}

export default Clothes;
