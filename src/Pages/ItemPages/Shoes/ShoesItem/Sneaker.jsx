import React from "react";
import { useState, useEffect } from "react";
// import {Sneakers} from '../../../db';
import Sidebar from "../../Sidebar";

import { get_sneaker_success } from "../../../../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import { Sneakers } from "../../../../db";
import { Box, Text, Center } from "@chakra-ui/react";
import SneakerCard from "./SneakerCard";
import { useMediaQuery } from "@chakra-ui/react";
import Filter from "../../Filter";
import Pagination from "../../Pagination";

function Sneaker() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const totalitem = Sneakers.length;

  const pagelimit = 50;
  const no_page = Math.ceil(totalitem / pagelimit);

  const getPagination = (page) => {
    const trimStart = (page - 1) * pagelimit;
    const trimEnd = trimStart + pagelimit;

    const data = Sneakers.slice(trimStart, trimEnd);

    dispatch(get_sneaker_success(data));
  };

  const pageHandler = (value) => {
    setPage((prev) => prev + value);
  };

  useEffect(() => {
    getPagination(page);
  }, [page]);

  const filterhandler = (e) => {
    if (e.target.value === "lowtohigh") {
      const lowtohighdata = Sneakers.sort((a, b) => {
        return a.price - b.price;
      });
      console.log(lowtohighdata);
      dispatch(get_sneaker_success(lowtohighdata));
    }

    if (e.target.value === "hightolow") {
      const hightolowdata = Sneakers.sort((a, b) => {
        return b.price - a.price;
      });
      console.log(hightolowdata);
      dispatch(get_sneaker_success(hightolowdata));
    }

    if (e.target.value === "removefilter") {
      dispatch(get_sneaker_success(Sneakers));
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
                  display={"flex"}
                  justifyContent="space-between"
                  // border="1px solid red
                  minW={"auto"}
                  flexWrap={"wrap"}
                  h={"auto"}
                >
                  <Box>
                    <Text fontSize={"25px"}>
                      Women's Sneakers{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        {Sneakers.length} products
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
              <Box>
                {/* data here */}
                <Center>
                  <SneakerCard />
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

export default Sneaker;
