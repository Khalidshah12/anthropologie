import React from "react";
// import {boyfriend} from '../../../../db';
import { useState, useEffect } from "react";
import { boyfriend } from "../../../../../db";
import { Box, Text, Center } from "@chakra-ui/react";
import Sidebar from "../../../Sidebar";
import { get_boyfriend_success } from "../../../../../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import BoyfriendCard from "./BoyfriendCard";
import { useMediaQuery } from "@chakra-ui/react";
import Filter from "../../../Filter";
import Pagination from "../../../Pagination";

function Boyfriend() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const totalitem = boyfriend.length;

  const pagelimit = 50;
  const no_page = Math.ceil(totalitem / pagelimit);

  const getPagination = (page) => {
    const trimStart = (page - 1) * pagelimit;
    const trimEnd = trimStart + pagelimit;

    const data = boyfriend.slice(trimStart, trimEnd);
   

    dispatch(get_boyfriend_success(data));
    
  };

  const pageHandler = (value) => {
    setPage((prev) => prev + value);
  };

  useEffect(() => {
    getPagination(page);
  }, [page]);

  const filterhandler = (e) => {
    if (e.target.value === "lowtohigh") {
      const lowtohighdata = boyfriend.sort((a, b) => {
        return a.price - b.price;
      });
      console.log(lowtohighdata);
      dispatch(get_boyfriend_success(lowtohighdata));
    }

    if (e.target.value === "hightolow") {
      const hightolowdata = boyfriend.sort((a, b) => {
        return b.price - a.price;
      });
      console.log(hightolowdata);
      dispatch(get_boyfriend_success(hightolowdata));
    }

    if (e.target.value === "removefilter") {
      dispatch(get_boyfriend_success(boyfriend));
    }
  };

  return (
    <Box mt={"270px"}>
      {/* <Navbar /> */}
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
                      Casual Dresses for Any Occasion{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        {boyfriend.length} products
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
                  <BoyfriendCard />
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
      {/* <Footer /> */}
    </Box>
  );
}

export default Boyfriend;
