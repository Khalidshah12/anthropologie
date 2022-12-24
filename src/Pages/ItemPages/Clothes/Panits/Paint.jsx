import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Box, Text, Center } from "@chakra-ui/react";
import Sidebar from "../../Sidebar";

import { get_workpaints_success } from "../../../../Redux/AppReducer/action";
// import { get_wideleg_success } from "../../../../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import { wideleg } from "../../../../db";
import { workpaints } from "../../../../db";
import WorkPaintCard from "./PanitItem/WorkPaintCard";
// import WidelegCard from "./PanitItem/WidelegCard";
import Filter from "../../Filter";
import Pagination from "../../Pagination";
function Paint() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const totalitem = workpaints.length;

  const pagelimit = 50;
  const no_page = Math.ceil(totalitem / pagelimit);

  const getPagination = (page) => {
    const trimStart = (page - 1) * pagelimit;
    const trimEnd = trimStart + pagelimit;

    const data = workpaints.slice(trimStart, trimEnd);

    dispatch(get_workpaints_success(data));
  };

  const pageHandler = (value) => {
    setPage((prev) => prev + value);
  };

  useEffect(() => {
    getPagination(page);
  }, [page]);

  const filterhandler = (e) => {
    if (e.target.value === "lowtohigh") {
      const lowtohighdata = workpaints.sort((a, b) => {
        return a.price - b.price;
      });
      console.log(lowtohighdata);
      dispatch(get_workpaints_success(lowtohighdata));
    }

    if (e.target.value === "hightolow") {
      const hightolowdata = workpaints.sort((a, b) => {
        return b.price - a.price;
      });
      console.log(hightolowdata);
      dispatch(get_workpaints_success(hightolowdata));
    }

    if (e.target.value === "removefilter") {
      dispatch(get_workpaints_success(workpaints));
    }
    // if (e.target.value === "lowtohigh") {
    //   const lowtohighdata = wideleg.sort((a, b) => {
    //     return a.price - b.price;
    //   });
    //   console.log(lowtohighdata);
    //   dispatch(get_wideleg_success(lowtohighdata));
    // }

    // if (e.target.value === "hightolow") {
    //   const hightolowdata = wideleg.sort((a, b) => {
    //     return b.price - a.price;
    //   });
    //   console.log(hightolowdata);
    //   dispatch(get_wideleg_success(hightolowdata));
    // }

    // if (e.target.value === "removefilter") {
    //   dispatch(get_wideleg_success(wideleg));
    // }
  };
  const paintsBox = (
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
      <Link to={"/clothes/paints/wideleg"}>
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
          background={"rgb(175,129,60)"}
          // opacity={"0.8"}
          textAlign={"center"}
        >
          WIDE LEG PAINTS
        </Box>
      </Link>
      <Link to={"/clothes/paints/workpaints"}>
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
          background={"rgb(187,87,101)"}
          // opacity={"0.8"}
          textAlign={"center"}
        >
          WORK PAINTS
        </Box>
      </Link>
    </Box>
  );
  return (
    <>
      {/* <Navbar/> */}
      <Box>
        {paintsBox}
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
                          {workpaints.length + wideleg.length} products
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
                  <Center>
                    <WorkPaintCard />
                  </Center>
                  {/* <Center>
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
    </>
  );
}

export default Paint;
