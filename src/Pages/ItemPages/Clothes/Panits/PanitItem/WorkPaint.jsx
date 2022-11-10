import React from 'react'
// import {workpaints} from  '../../../../db';
import { Box, Text, Select, Image } from "@chakra-ui/react";
import Sidebar from "../../../Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import {workpaints} from '../../../../../db';

function WorkPaint() {
  return (
    <Box mt={"240px"}>
    <Box width={"90%"} m="auto">
      <Box
        h={"auto"}
        padding={"0,50px, 0, 50px"}
        maxWidth="1561px"
        display="flex"
      >
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Box>
          <Box
          w={"985px"}
          maxWidth={"100%"}
          border="1px solid red"
          h={"50px"}
          display={"flex"}
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize={"22px"}>
            Cocktail Dresses and Occasion Dresses{" "}
              <span
                style={{ fontSize: "13px", width: "auto", height: "auto" }}
              >
                237 products
              </span>
            </Text>
          </Box>
          <Box display={"flex"}>
            <Box display={"flex"} gap="5px">
              <Text mt={"3px"}>Sort : </Text>
              <Box
             
              >
                <Select
                  h={"35px"}
                 
                  border={"1px solid #939395"}
                  margin="0 30px 0 0"
                  padding={"0 10px 0 10px"}
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

        {/* data  */}
          </Box>
          {/* <Box
             w={"1000.84px"}
             maxWidth={"100%"}
              display={"grid"}
              gridTemplateColumns={{
                lg: "repeat(4, 1fr)",
                md: "repeat(3,1fr)",
                sm: "repeat(2, 1fr)",
              }}
             
            >
              {workpaints.length > 0 &&
                workpaints.map((ele) => (
                  <Box w={"233.203px"} h="493.969px" minHeight={"auto"}>
                    <Image w={"auto"} h="349.469px" src={ele.Image} />
                    <Text>{ele.name}</Text>
                    <Text>${ele.price}</Text>
                  </Box>
                ))}
            </Box> */}
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
  )
}

export default WorkPaint
