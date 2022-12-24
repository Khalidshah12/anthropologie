import React from "react";
import { useState, useEffect } from "react";
import { Box, Text, Img, Center } from "@chakra-ui/react";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";
import { bootcut, boyfriend, flare, skinny } from "../../../../db";
import { wideleg } from "../../../../db";
import { straight } from "../../../../db";
import WidelegsCard from "./JeansItem/WidelegsCard";
// import FlareCard from "./JeansItem/FlareCard";
// import StraightCard from "./JeansItem/StraightCard"; 
// import SkinnyCard from "./JeansItem/SkinnyCard";
import { useMediaQuery } from "@chakra-ui/react";
import Filter from "../../Filter";
import { get_wideleg_success } from "../../../../Redux/AppReducer/action";
// import { get_flare_success } from "../../../../Redux/AppReducer/action";
// import { get_straight_success } from "../../../../Redux/AppReducer/action";
// import { get_skinny_success } from "../../../../Redux/AppReducer/action";
import Pagination from "../../Pagination";
import { useDispatch } from "react-redux";

function Jeans() {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const totalitem = wideleg.length;

  const pagelimit = 50;
  const no_page = Math.ceil(totalitem / pagelimit);

  const getPagination = (page) => {
    const trimStart = (page - 1) * pagelimit;
    const trimEnd = trimStart + pagelimit;

    const data = wideleg.slice(trimStart, trimEnd);

    dispatch(get_wideleg_success(data));
  };

  const pageHandler = (value) => {
    setPage((prev) => prev + value);
  };

  useEffect(() => {
    getPagination(page);
  }, [page]);

  const filterhandler = (e) => {
    // if (e.target.value === "lowtohigh") {
    //   const lowtohighdata = flare.sort((a, b) => {
    //     return a.price - b.price;
    //   });
    //   console.log(lowtohighdata);
    //   dispatch(get_flare_success(lowtohighdata));
    // }

    // if (e.target.value === "hightolow") {
    //   const hightolowdata = flare.sort((a, b) => {
    //     return b.price - a.price;
    //   });
    //   console.log(hightolowdata);
    //   dispatch(get_flare_success(hightolowdata));
    // }

    // if (e.target.value === "removefilter") {
    //   dispatch(get_flare_success(flare));
    // }

    if (e.target.value === "lowtohigh") {
      const lowtohighdata = wideleg.sort((a, b) => {
        return a.price - b.price;
      });
      console.log(lowtohighdata);
      dispatch(get_wideleg_success(lowtohighdata));
    }

    if (e.target.value === "hightolow") {
      const hightolowdata = wideleg.sort((a, b) => {
        return b.price - a.price;
      });
      console.log(hightolowdata);
      dispatch(get_wideleg_success(hightolowdata));
    }

    if (e.target.value === "removefilter") {
      dispatch(get_wideleg_success(wideleg));
    }

    // if (e.target.value === "lowtohigh") {
    //   const lowtohighdata = straight.sort((a, b) => {
    //     return a.price - b.price;
    //   });
    //   console.log(lowtohighdata);
    //   dispatch(get_straight_success(lowtohighdata));
    // }

    // if (e.target.value === "hightolow") {
    //   const hightolowdata = straight.sort((a, b) => {
    //     return b.price - a.price;
    //   });
    //   console.log(hightolowdata);
    //   dispatch(get_straight_success(hightolowdata));
    // }

    // if (e.target.value === "removefilter") {
    //   dispatch(get_straight_success(straight));
    // }

    // if (e.target.value === "lowtohigh") {
    //   const lowtohighdata = skinny.sort((a, b) => {
    //     return a.price - b.price;
    //   });
    //   console.log(lowtohighdata);
    //   dispatch(get_skinny_success(lowtohighdata));
    // }

    // if (e.target.value === "hightolow") {
    //   const hightolowdata = skinny.sort((a, b) => {
    //     return b.price - a.price;
    //   });
    //   console.log(hightolowdata);
    //   dispatch(get_skinny_success(hightolowdata));
    // }

    // if (e.target.value === "removefilter") {
    //   dispatch(get_skinny_success(skinny));
    // }
  };

  const jeansBox = (
    <Box
      display={"flex"}
      width={"95%"}
      m="auto"
      gap={"20px"}
      mt={"40px"}
      justifyContent="center"
      alignItems="center"
      flexWrap={"wrap"}
      ml={{ base: "5px", sm: "60px", md: "60px", lg: "60px" }}
    >
      <Link to={"/clothes/jeans/flare"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          // opacity={"0.8"}
          textAlign={"center"}
        >
          <Img
            height={"285px"}
            width="auto"
            borderRadius={"10px"}
            transition="all 0.2s ease-in"
            _hover={{ opacity: "0.9", transform: "rotateY(180deg)" }}
            src="https://images.ctfassets.net/5de70he6op10/3YLrFbhGHySXgQNQeLehrd/7668a18ea3a3f749d5d8677f95425b67/07XX22_DenimFitGuide_2a_Flare.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Flare Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Slim to the knee, then plenty of flare.
          </Center>
        </Box>
      </Link>
      <Link to={"/clothes/jeans/straight"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          textAlign={"center"}
        >
          <Img
            height={"285px"}
            width="auto"
            borderRadius={"10px"}
            transition="all 0.2s ease-in"
            _hover={{ opacity: "0.9", transform: "rotateY(180deg)" }}
            src="https://images.ctfassets.net/5de70he6op10/5kzSrbLIQ4vdVrZrxlmdV1/3e34008dcbcbead5f8bb6d049e7833cf/07XX22_DenimFitGuide_2c_Straight.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Straight Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Stylishly slim, straight, and streamlined.
          </Center>
        </Box>
      </Link>
      <Link to={"/clothes/jeans/wideleg"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          textAlign={"center"}
        >
          <Img
            height={"285px"}
            width="auto"
            borderRadius={"10px"}
            transition="all 0.2s ease-in"
            _hover={{ opacity: "0.9", transform: "rotateY(180deg)" }}
            src="https://images.ctfassets.net/5de70he6op10/7hmtppyZyXWxt8aWOopHZq/9c07e1f7a725ac581aaccef287ae2260/07XX22_DenimFitGuide_2b_Wideleg.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Wide Leg Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Just relax and let loose with wide legs.
          </Center>
        </Box>
      </Link>

      <Link to={"/clothes/jeans/bootcut"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          textAlign={"center"}
        >
          <Img
            height={"285px"}
            width="auto"
            borderRadius={"10px"}
            transition="all 0.2s ease-in"
            _hover={{ opacity: "0.9", transform: "rotateY(180deg)" }}
            src="https://images.ctfassets.net/5de70he6op10/6Cxehd3E68xxeIZ51CPK8U/21f0455a4eec2622fc30144f20c8e704/07XX22_DenimFitGuide_2d_Bootcut.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Bootcut Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Easy and flattering, they make the bootcut.
          </Center>
        </Box>
      </Link>
      <Link to={"/clothes/jeans/boyfriend"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          textAlign={"center"}
        >
          <Img
            height={"285px"}
            width="auto"
            borderRadius={"10px"}
            transition="all 0.2s ease-in"
            _hover={{ opacity: "0.9", transform: "rotateY(180deg)" }}
            src="https://images.ctfassets.net/5de70he6op10/4eVz0PgHne37VoG2fxFuFw/12a8aa66bae70f657696551958951e00/07XX22_DenimFitGuide_2e_Boyfriend.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Boyfriend Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Slouchy and relaxed for an easy, everyday fit.
          </Center>
        </Box>{" "}
      </Link>
      <Link to={"/clothes/jeans/skinny"}>
        <Box
          fontSize={"16px"}
          // border={"1px solid black"}
          h={"400.7334px"}
          w={"188.172px"}
          minHeight={"auto"}
          minWidth={"auto"}
          fontFamily={"Times New Roman"}
          textAlign={"center"}
        >
          <Img
            height={"285px"}
            width="auto"
            borderRadius={"10px"}
            transition="all 0.2s ease-in"
            _hover={{ opacity: "0.9", transform: "rotateY(180deg)" }}
            src="https://images.ctfassets.net/5de70he6op10/5iVUZX2juMBuuDx31RZxwt/cd468d6fe6592dfa5b3004016046a9f6/07XX22_DenimFitGuide_2f_Skinny.jpg?w=480&q=80&fm=webp"
          />
          <Text fontSize={"22px"} p="5px" opacity="0.9">
            <u id="jeans">Skinny Jeans</u>
          </Text>
          <Center w={"180px"} opacity="0.9">
            Here’s the skinny: They’re sleek, slim, and versatile.
          </Center>
        </Box>
      </Link>
    </Box>
  );
  return (
    <>
      {/* <Navbar /> */}
      <Box>{jeansBox}</Box>
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
                      Women's Jeans & Denim{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          width: "auto",
                          height: "auto",
                        }}
                      >
                        {bootcut.length +
                          boyfriend.length +
                          flare.length +
                          wideleg.length +
                          straight.length}{" "}
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
              <Box>
                {/* data here */}
                {/* <Center>
                  <FlareCard />
                </Center> */}
                <Center>
                  <WidelegsCard />
                </Center>
                {/* <Center>
                  <StraightCard />
                </Center>
                <Center>
                  <SkinnyCard />
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
      {/* <Footer /> */}
    </>
  );
}

export default Jeans;
