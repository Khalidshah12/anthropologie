import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Text, Center } from "@chakra-ui/react";
import Sidebar from "../../Sidebar";
import { casual } from "../../../../db";
import { party } from "../../../../db";
import { useMediaQuery } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { get_casual_success } from "../../../../Redux/AppReducer/action";
import { get_party_success } from "../../../../Redux/AppReducer/action";

import PartyCard from "./DressItem/PartyCard";
import CasualCard from "./DressItem/CasualCard";
import Filter from "../../Filter";
import Pagination from "../../Pagination";

function Dresses() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const totalcasual = casual.length;

  const pagelimit = 50;
  const no_page = Math.ceil(totalcasual / pagelimit);

  const getPagination = (page) => {
    const trimStart = (page - 1) * pagelimit;
    const trimEnd = trimStart + pagelimit;

    const data_casual = casual.slice(trimStart, trimEnd);
    const data_party = party.slice(trimStart, trimEnd);

    dispatch(get_casual_success(data_casual));
    dispatch(get_party_success(data_party));
  };

  const pageHandler = (value) => {
    setPage((prev) => prev + value);
  };

  useEffect(() => {
    getPagination(page);
  }, [page]);

  const filterhandler = (e) => {
    if (e.target.value === "lowtohigh") {
      const lowtohighdata = party.sort((a, b) => {
        return a.price - b.price;
      });
      console.log(lowtohighdata);
      dispatch(get_party_success(lowtohighdata));
    }

    if (e.target.value === "hightolow") {
      const hightolowdata = party.sort((a, b) => {
        return b.price - a.price;
      });
      console.log(hightolowdata);
      dispatch(get_party_success(hightolowdata));
    }

    if (e.target.value === "removefilter") {
      dispatch(get_party_success(party));
    }

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

  const dressBox = (
    <Box
      display={"flex"}
      width={"95%"}
      m="auto"
      gap={"20px"}
      mt={"40px"}
      flexWrap={"wrap"}
      color={"white"}
      alignItems={"center"}
      justifyContent="center"
      ml={{ base: "5px", sm: "60px", md: "60px", lg: "60px" }}
    >
      <Link to={"/clothes/dresses/wedding"}>
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
          WEDDING GUEST <br /> DRESSES
        </Box>
      </Link>
      <Link to={"/clothes/dresses/casual"}>
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
          background={"#deaf8b"}
          opacity={"0.9"}
        >
          CASUAL DRESSES
        </Box>
      </Link>
      <Link to={"/clothes/dresses/party"}>
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
          background={"#d9838e"}
        >
          PARTY DRESSES
        </Box>
      </Link>
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
        background={"#dd8a74"}
      >
        WHITE DRESSSES
      </Box>
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
        background={"#c37481"}
      >
        BLACK DRESSES
      </Box>{" "}
      <Link to={"/clothes/dresses/formaldress"}>
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
          background={"#ca757a"}
        >
          FORMAL DRESSSES
        </Box>
      </Link>
    </Box>
  );
  return (
    <>
      {/* <Navbar/> */}
      <Box>{dressBox}]</Box>
      <Box mt={"20px"}>
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
                  maxWidth={"100%"}
                  display={"flex"}
                  justifyContent="space-between"
                  // border="1px solid red
                  minW={"auto"}
                  flexWrap={"wrap"}
                  h={"auto"}
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
                        {party.length + casual.length} products
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
              <Box mt={"30px"}>
                {/* data here */}
                <Center>
                  <PartyCard />
                </Center>
                <Center>
                  <CasualCard />
                </Center>
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
      {/* <Footer/> */}
    </>
  );
}

export default Dresses;
