import React from "react";
import { useState, useEffect } from "react";
import Pagination from "../../../Pagination";
import Sidebar from "../../../Sidebar";

import { get_workpaints_success } from "../../../../../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import { Box, Text, Center } from "@chakra-ui/react";
import { workpaints } from "../../../../../db";
import WorkPaintCard from "./WorkPaintCard";
import { useMediaQuery } from "@chakra-ui/react";
import Filter from "../../../Filter";

function WorkPaint() {
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
  };

  return (
    <>
      {/* <Navbar/> */}
      <Box mt={"30px"}>
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
                  // border="1px solid red"
                  display={"flex"}
                  justifyContent="space-between"
                  minW={"auto"}
                  flexWrap={"wrap"}
                  h={"auto"}
                  maxH="auto"
                >
                  <Box>
                    <Text fontSize={"22px"}>
                      Cocktail Dresses and Occasion Dresses{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        {workpaints.length} products
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

                {/* data  */}
              </Box>
              <Center>
                <WorkPaintCard />
              </Center>
            </Box>
          </Box>
         
        </Box>
      </Box>
      {/* <Footer/> */}
    </>
  );
}

export default WorkPaint;
