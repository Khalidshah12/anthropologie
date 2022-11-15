import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { single_page_data } from "../../../../../Redux/AppReducer/action";
import { get_casual_success } from "../../../../../Redux/AppReducer/action";
import { casual } from "../../../../../db";
import {useNavigate} from 'react-router-dom';

function CasualCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { casualData } = useSelector((state) => {
    return {
      casualData: state.AppReducer.casualData,
    };
  });

  const navogateTosinglePage =(id)=>{
    setTimeout(() => {
      navigate(`/shop/${id}`)
    }, 9000);

  }
  const singlePageHandler = (item, id) => {
    dispatch(single_page_data(item));
    navogateTosinglePage(id)
  };

  useEffect(() => {
    dispatch(get_casual_success(casual));

  }, []);



  return (
    <>
      <Box
      // border={"1px solid red"}
        // w={"1000.84px"}
       
        display={"grid"}
        rowGap="15px"
        minH={"auto"}
        minW="auto"
        gridTemplateColumns={{
          lg:"repeat(4,1fr)",
          base:"repeat(1,1fr)",
          md: "repeat(3, 1fr)",
          sm:"repeat(2,1fr)"
        
        }}
      >
        {casualData.length > 0 &&
          casualData.map((ele) => (
            // <Link to={`/shop/${ele.id}`}>
              <Box
                // w={"233.203px"}
                h="470.969px"
                minHeight={"auto"}
                cursor="pointer"
                width={"243.484px"}
                minW="auto"
                minH={"auto"}
                onClick={() => singlePageHandler(ele, ele.id)}
                key={ele.id + Math.random()}
              >
                <Image w={"auto"} h="349.469px" src={ele.image} />
                <Text width={"240px"}>{ele.name}</Text>
                <Text>${ele.price}</Text>
              </Box>
            // </Link>
          ))}
      </Box>
    </>
  );
}

export default CasualCard;
