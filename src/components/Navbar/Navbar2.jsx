import React from "react";
import Styles from './Navbar2.module.css';
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  RadioGroup,
  Button,
  Stack,
  useDisclosure,
  Box,

} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  return (
    <Box className={Styles.nav}>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4"></Stack>
      </RadioGroup>
      <Box position={"absolute"} top="150px" right={"10px"}>
        <Button
          colorScheme="rgb(253,253,249)"
          color={"black"}
          border="1px solid black"
          onClick={onOpen}

        >
          <HamburgerIcon />
        </Button>

      </Box>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent  bg="rgb(253,253,249)">
          <DrawerHeader borderBottomWidth="1px" fontFamily={"cursive"}>Anthropologie</DrawerHeader>
          <DrawerBody >
            <Box className={Styles.Navbar2} >
                <div>
                  <p>Gifts</p>
                </div>
                <div >
                  <p>New!</p>
                </div>
                <div >
                  <Link to={"/clothes/dresses"}>
                    <p>Dresses</p>
                  </Link>
                </div>
                <div >
                  <Link to={"/clothes"}>
                    <p>Clothing</p>
                  </Link>
                </div>
                <div>
                  <Link to={"/shoes"}>
                    <p>Shoes</p>
                  </Link>
                </div>
                <div >
                  <p>Accessories!</p>
                </div>
                <div >
                  <p>BHLDN Weddings</p>
                </div>
                <div>
                  <p>Beauty & Wellness</p>
                </div>
                <div>
                  <p>Garden & outdoor</p>
                </div>
                <div>
                  <p>Sale</p>
                </div>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/*  */}
    </Box>
  );
};

export default Navbar2;
