import React from "react";
// import {casual} from '../../../../db';
import { Box, Text, Select, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Sidebar from "../../../Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getcasual } from "../../../../../Redux/AppReducer/action";
import { useEffect } from "react";
import Pagination from "../../../Pagination";
import Filter from "../../../Filter";
import { casual } from "../../../../../db";

function Casual() {
  const dispatch = useDispatch();

  // const { casual, isLoading, isError } = useSelector((state) => {
  //   return {
  //     casual: state.AppReducer.casual,
  //     isError: state.AppReducer.isError,
  //     isLoading: state.AppReducer.isLoading,
  //   };
  // });

  console.log(casual);

  useEffect(() => {
    dispatch(getcasual);
  }, []);
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
                // border="1px solid red"
                h={"50px"}
                display={"flex"}
                justifyContent="space-between"
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
                      251 products
                    </span>
                  </Text>
                </Box>
                <Box display={"flex"}>
                  <Box>
                    <Filter />
                  </Box>
                  <Box>
                    <Pagination />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* map data here */}
            <Box
             w={"1000.84px"}
             maxWidth={"100%"}
              display={"grid"}
              gridTemplateColumns={{
                lg: "repeat(4, 1fr)",
                md: "repeat(3,1fr)",
                sm: "repeat(2, 1fr)",
              }}
             
            >
              {casual.length > 0 &&
                casual.map((ele) => (
                  <Box w={"233.203px"} h="493.969px" minHeight={"auto"}>
                    <Image w={"auto"} h="349.469px" src={ele.Image} />
                    <Text>{ele.name}</Text>
                    <Text>${ele.price}</Text>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent="end" width={"98%"} m="auto">
        <Pagination />
      </Box>
    </Box>
  );
}

export default Casual;
