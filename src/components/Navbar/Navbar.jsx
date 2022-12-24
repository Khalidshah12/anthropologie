import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authcontext/AuthContext";
import { Link } from "react-router-dom";

import Styles from "./Navbar.module.css";
import { signInWithGoogle } from "../../Service/firebase";
import firebase from "../../Service/firebase";
import { auth } from "../../Service/firebase";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GiGlobe } from "react-icons/gi";

import { useState } from "react";
import { authentication } from "../../firebase/firebase_config";
import { RecaptchaVerifier, signOut } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MyAccount from "../UserAccount/MyAccount";
import { ChevronDownIcon } from "@chakra-ui/icons";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Center,
  Text,
  Input,
  Divider,
  HStack,
  Image,
  Img,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Navbar2 from "./Navbar2";
import useTimer from "../timer/useTimer";
import { setItem } from "../../localstorage/LocalStorage";

const Navbar = () => {
  const countrycode = "+91";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: secondisOpen,
    onOpen: secondonOpen,
    onClose: secondonClose,
  } = useDisclosure();
  const finalRef = React.useRef(null);
  const [pin, SetPin] = useState("");
  const [show, SetShow] = useState(false);
  const [error, SetError] = useState(false);
  const [phone, setPhone] = useState(countrycode);
  const [username, setUsername] = useState(null);

  const navigate = useNavigate();

  const { user, SetUser } = useContext(AuthContext);

  // uset timer hook
  const { timer, Start, Stop } = useTimer(1000);

  // google oath
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setItem("googleToken", username);
      setUsername(user);
    });
  }, [username]);

  console.log(username);
  const SignoutHandler = () => {
    window.location.reload();
    navigate("/");
    SetShow(false);
    signOut();
  };

  const otherNumberHandler = () => {
    SetShow(false);
    signOut();
  };

  const PinEvent = (e) => {
    SetPin(e.target.value);
  };

  const Inputevent = (e) => {
    setPhone(e.target.value);
  };

  const generateourCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-box",
      {
        size: "invisible",
        callback: (response) => {
          // recaptcha solved, allow sign in with phone number
          console.log(response);
        },
      },
      authentication
    );
  };

  const OnsubmitEvent = () => {
    if (pin.length === 6) {
      console.log(pin);
      const confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(pin)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          setItem("token", user.stsTokenManager.accessToken);
          console.log(user);
          SetUser(true);
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error);
          // ...
        });

      onClose();

      Stop();

      return navigate("/");
    }
  };

  const Sendotp = (e) => {
    e.preventDefault();
    Start();
    if (phone.length >= 12) {
      console.log(phone);
      SetShow(true);
      generateourCaptcha();
      setTimeout(() => {
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phone, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            SetShow(true);
          })
          .catch((err) => {
            Stop();
            console.log(err);
            SetError(true);
          });
      }, 3000);
    }
  };

  const sendform = (
    <Box>
      <Text textAlign={"left"}>Mobile Number*</Text>
      <Center mt={"5px"} display={"flex"} flexDirection={"column"}>
        <Input
          placeholder="Phone Number*"
          type={"text"}
          name={"phone"}
          value={phone}
          onChange={Inputevent}
        ></Input>
      </Center>
      <Center mt={"20px"}>
        <Text fontSize={"12px"}>
          By “logging in to Anthropologie”, you agree to our{" "}
          <u style={{ fontWeight: "bold" }}>Privacy Policy</u> and{" "}
          <u style={{ fontWeight: "bold" }}>Terms & Conditions</u>.
        </Text>
      </Center>
      <Center mt={"20px"}>
        <Button
          fontSize={"13px"}
          fontWeight={"bold"}
          w={"177px"}
          h="44px"
          borderRadius={"30px"}
          bgColor={"black"}
          color={"white"}
          _hover={"none"}
          onClick={Sendotp}
        >
          Send Me a Code
        </Button>
      </Center>
      <Center mt={"20px"}>
        <Divider mr={"3px"} />
        or
        <Divider ml={"3px"} />
      </Center>
      <Center mt={"20px"}>
        <Button
          fontSize={"14px"}
          fontWeight={"bold"}
          w={"464px"}
          h="48px"
          borderRadius={"30px"}
          bgColor={"white"}
          color={"grey"}
          _hover={"none"}
          border={"1px solid black"}
        >
          Skip, Continue As Guest
        </Button>
      </Center>
    </Box>
  );

  const otpform = (
    <Box id="">
      <Center mt={"20px"}>
        <Text fontSize={"12px"}>
          Please enter the verification code we just sent to {phone}
        </Text>
      </Center>

      <Center mt={"20px"}>
        <Text
          fontSize={"14px"}
          color={"grey"}
          fontWeight={"bold"}
          cursor={"pointer"}
          onClick={otherNumberHandler}
        >
          <u>Different Number?</u>
        </Text>
      </Center>

      <Center mt={"30px"}>
        <HStack>
          <Input
            type="text"
            value={pin}
            placeholder="Code"
            onChange={PinEvent}
          />
        </HStack>
      </Center>

      <Box mt={"5px"} fontSize="12px" fontWeight={"bold"}>
        <Box>
          <Center color={"red"}>
            {error
              ? "Server Error Please refresh the page ana try again."
              : null}
          </Center>
        </Box>

        <Center>
          <Box>Seconds : {timer}</Box>
        </Center>
      </Box>

      <Center mt={"20px"}>
        <Text fontSize={"14px"} color={"grey"} fontWeight={"bold"}>
          <u>Resend the Code</u>
        </Text>
      </Center>
      <Center mt={"20px"}>
        <Divider mr={"3px"} />
        or
        <Divider ml={"3px"} />
      </Center>
      <Center mt={"20px"}>
        <Button
          fontSize={"14px"}
          fontWeight={"bold"}
          w={"90px"}
          h="30px"
          borderRadius={"30px"}
          color={"black"}
          bgColor="grey"
          onClick={OnsubmitEvent}
        >
          Submit
        </Button>
      </Center>
      <Center></Center>
    </Box>
  );

  // console.log(user)
  const display = !show ? sendform : otpform;

  return (
    <Box
      position={"sticky"}
      top="0px"
      bg={"rgb(253,253,249)"}
      zIndex="1000"
      maxH={"auto"}
      h="auto"
      width={"100%"}
    >
      <Image
        w="100%"
        h={"43.39px"}
        src="https://images.ctfassets.net/5de70he6op10/73vpJWzKmWO1fT2HwJ3p4B/b42cab1aedaef564d46e96fbd1cccaa0/Nov22_30Off_SOS_PrimaryBanner_LS_ThisWeekendOnly.jpg"
        alt="banner"
      />
      <Box
        display={"flex"}
        justifyContent="flex-end"
        alignItems=" center"
        // border=" 1px solid red"
        font="16px 'Avenir Book ', sans-serif"
        listStyle="none"
        letterSpacing="0.6px"
        bg={"rgb(253,253,249)"}
        h="43px"
        padding={"0px 20px"}
        w="95%"
        m={"auto"}
        gap="15px"
        minW={"auto"}
      >
        <Box>
          <Box display={"flex"}>
            <Link to="/">
              <GiGlobe fontSize={"25px"} color="#167A92" />
            </Link>

            <Box
              style={{ display: "flex", gap: "5px" }}
              position="relative"
              cursor={"pointer"}
              id="dropdown"
            >
              <Text style={{ fontSize: "14px" }} id="dropdown-btn">
                English($)
                <ChevronDownIcon fontSize={"22px"} id="" />
              </Text>
              <Box
                id="dropdown-content"
                position={"absolute"}
                fontSize="13px"
                zIndex={1000}
                bg="rgb(253,253,249)"
                top={"25px"}
                width="200px"
                right={"20%"}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                padding={"10px 10px"}
                borderRadius="10px"
              >
                <Text padding={"5px"}>Currency</Text>
                <Text
                  padding={"5px"}
                  color="#167A92"
                  _hover={{ background: "rgb(253,253,200)" }}
                >
                  USD ($){" "}
                </Text>
                <Text padding={"5px"}>Language</Text>
                <Text
                  padding={"5px"}
                  color="#167A92"
                  _hover={{ background: "rgb(253,253,200)" }}
                >
                  English
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"}>
          <Box>
            <AiOutlineUser fontSize={"25px"} color="#167A92" />
          </Box>
          <Box display={"flex"} gap="5px">
            <Box id="recaptcha-box"></Box>

            <Box
              ref={finalRef}
              tabIndex={-1}
              aria-label="Focus moved to this box"
            ></Box>
            {username ? (
              <Menu isOpen={secondisOpen}>
                <MenuButton
                  onMouseEnter={secondonOpen}
                  onMouseLeave={secondonClose}
                >
                  <Image
                    width="30px"
                    height="30px"
                    borderRadius={"50%"}
                    src={username.photoURL}
                  />
                </MenuButton>
                <MenuList
                  width={"200px"}
                  borderRadius="10px"
                  onMouseEnter={secondonOpen}
                  onMouseLeave={secondonClose}
                >
                  <MenuItem>
                    <Link
                      px={2}
                      py={1}
                      rounded={"md"}
                      _hover={{
                        textDecoration: "underline",
                      }}
                    >
                      {username.displayName}
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      px={2}
                      py={1}
                      rounded={"md"}
                      _hover={{
                        textDecoration: "underline",
                      }}
                      onClick={() => {
                        auth.signOut();
                        setItem("googleToken", "");
                      }}
                    >
                      Sign Out
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Box color="#167A92">
                {user ? (
                  <MyAccount SignoutHandler={SignoutHandler} />
                ) : (
                  <Box onClick={onOpen} cursor="pointer" fontSize={"14px"}>
                    Sign In / Sign Up
                  </Box>
                )}
              </Box>
            )}

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent background="rgb(253,253,249)">
                <ModalHeader>
                  {" "}
                  <Center fontSize={"22px"} mt="50px">
                    {!show ? "Create An Account" : "Sign In"}
                  </Center>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text textAlign={"center"}>
                    Welcome to Anthropologie! It's quick and easy to set up an
                    account.
                  </Text>
                  <Box mt={"30px"} mb="30px">
                    {display}
                  </Box>
                  <Center>
                    <Box mb={"20px"}>
                      <Button
                        borderRadius="none"
                        h={"45px"}
                        width={{ lg: "306.016px", md: "250px", sm: "200px" }}
                        p={"10px 20px 10px 20px"}
                        minH="45px"
                        border={"1px solid black"}
                        color="red"
                        _hover={{
                          color: "red",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                        fontWeight={"bold"}
                        onClick={() => {
                          signInWithGoogle();
                          onClose();
                        }}
                      >
                        Sign In With Google
                      </Button>
                    </Box>
                  </Center>
                </ModalBody>
              </ModalContent>
            </Modal>
            <Center>{/* <Box id="recaptcha-box"></Box> */}</Center>
          </Box>
        </Box>
      </Box>

      <Box
        display={{ lg: "flex", sm: "block" }}
        justifyContent="space-between"
        w="95%"
        m={"auto"}
        minW={"auto"}
      >
        <Box display={"flex"}>
          <Link to="/">
            <Image
              h={"60px"}
              w="210px"
              padding={"0px 20px 0px 20px"}
              border="1px solid black"
              src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg"
              alt="logomain"
            />
          </Link>
          <Image
            h={"60px"}
            w="210px"
            padding={"0px 20px 0px 20px"}
            border="1px solid black"
            src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
            alt="logomain"
          />
        </Box>

        <Box display={"flex"} gap="10px" h={"45px"}>
          <Box
            width={{ base: "200px", lg: "300px" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box position={"relative"}>
              <Input
                h="42px"
                width={{ base: "200px", lg: "254.625px" }}
                minH={"auto"}
                minW="auto"
                justifyContent="center"
                alignItems="center"
                fontSize={"12px"}
                borderRadius="none"
                border="1px solid black"
                color={"#167A92"}
                placeholder="Search Anthropologie"
              />
              <Box position={"absolute"} top="25%" right={"10px"}>
                <BsSearch size="1em" />
              </Box>
            </Box>
            <Link
              border="1px solid red"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              to="/cart"
              ml="-10px"
            >
              <AiOutlineShoppingCart size="1.5em" />
            </Link>
          </Box>
        </Box>
      </Box>
      <Navbar2 />
      <Box className={Styles.nav_item}>
        <Box width={"90%"} m="auto" display="flex" justifyContent={"center"}>
          <Box
            display={"flex"}
            gap="30px"
            m="10px"
            flexWrap={"wrap"}
            className={Styles.navbar}
          >
            <p className={Styles.RED}>Gifts</p>

            <p>New!</p>
            <Link to={"/clothes/dresses"}>
              <p>Dresses</p>
            </Link>

            <Link to={"/clothes"}>
              <p>Clothing</p>
            </Link>

            <Link to={"/shoes"}>
              <p>Shoes</p>
            </Link>

            <p>Accessories!</p>
            {/* <p>Home & Furniture!</p> */}

            <p>BHLDN Weddings</p>

            <p>Beauty & Wellness</p>

            <p>Garden & outdoor</p>

            <p className={Styles.RED}>Extra 40% Off Sale</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
