import React from "react";
// import {bootcut} from '../../../../db';
import { bootcut } from "../../../../../db";
import { Box, Text, Select, Image } from "@chakra-ui/react";
import Sidebar from "../../../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import Navbar from "../../../../../components/Navbar/Navbar";
// import Footer from "../../../../../components/Footer/Footer";
import BootcutCard from "./BootcutCard";
import {useMediaQuery} from '@chakra-ui/react';

function Bootcut() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* <Navbar /> */}

      <Box mt={"30px"}>
        <Box width={"90%"} m="auto">
          <Box
            h={"auto"}
            padding={"0,50px, 0, 50px"}
            maxWidth="1561px"
            display="flex"
          >
            <Box style={{display: isMobile ? "none" : "block"}}>
              <Sidebar />
            </Box>
            <Box>
              <Box>
                <Box
                  w={"1020.84px"}
                  maxWidth={"100%"}
                  // border="1px solid red"
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Box>
                    <Text fontSize={"25px"}>
                      Bootcut - Women's Jeans & Denim{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        {bootcut.length} products
                      </span>
                    </Text>
                  </Box>
                  <Box display={"flex"}>
                    <Box display={"flex"} gap="5px">
                      <Text mt={"3px"}>Sort :</Text>
                      <Box>
                        <Select
                          h={"35px"}
                          border={"1px solid #939395"}
                          // margin="0 30px 0 0"
                          // padding={"0 10px 0 10px"}
                          minHeight="auto"
                          minWidth={"auto"}
                          placeholder="Featured"
                          _hover="none"
                        >
                          <option value="lowtohigh">Price: Low to High</option>
                          <option value="hightolow">Price: High to Low</option>
                          <option value="Newest">Newest</option>
                          <option value="Bestselling">Bestselling</option>
                          <option value="Ratings">High To Low</option>
                          <option value="atoz">A-Z</option>
                          <option value="ztoa">Z-A</option>
                        </Select>
                      </Box>
                    </Box>
                    <Box display={"flex"}>
                      <ChevronLeftIcon
                        fontSize={"40px"}
                        _hover={{ color: "#167A92" }}
                      />
                      <Box>
                        <Text mt={"8px"}>1/47</Text>
                      </Box>
                      <ChevronRightIcon
                        fontSize={"40px"}
                        _hover={{ color: "#167A92" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                {/* Data here */}
                <BootcutCard/>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent="end">
            <Box display={"flex"}>
              <ChevronLeftIcon
                fontSize={"40px"}
                _hover={{ color: "#167A92" }}
              />
              <Box>
                <Text mt={"8px"}>1/47</Text>
              </Box>
              <ChevronRightIcon
                fontSize={"40px"}
                _hover={{ color: "#167A92" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
}

export default Bootcut;
