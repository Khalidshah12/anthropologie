import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import {
  AiFillCaretDown,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GiGlobe } from "react-icons/gi";

import { useState, useRef } from "react";
import { authentication } from "../../firebase/firebase_config";
import { RecaptchaVerifier, signOut } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MyAccount from "../UserAccount/MyAccount";

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
} from "@chakra-ui/react";
import { AuthContext } from "../../context/authcontext/AuthContext";
import Navbar2 from "./Navbar2";

const Navbar = () => {
  const [count, setcount] = useState(60);
  const countrycode = "+91";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [pin, SetPin] = useState("");
  const [show, SetShow] = useState(false);
  // const [user, SetUser] = useState(false);
  const [phone, setPhone] = useState(countrycode);
  const navigate = useNavigate();
  const ref = useRef();
  const { user, SetUser } = useContext(AuthContext);

  const startTime = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setcount((prev) => {
        if (prev === 0) {
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const Stop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  useEffect(() => {
    const clearUp = () => {
      Stop();
    };
    return clearUp;
  }, []);

  const SignoutHandler = () => {
    window.location.reload();
    // SetUser(false)
    SetShow(false);
    signOut();
  };

  const otherNumberHandler = () => {
    SetShow(false);
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
          console.log(user);
          SetUser(true);
          

          return navigate("/");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error);
          // ...
        });

      onClose();

      // SetUser(true);
    }
  };

  const Sendotp = (e) => {
    e.preventDefault();
    if (phone.length >= 12) {
      console.log(phone);
      SetShow(true);
      startTime();
      generateourCaptcha();
      setTimeout(() => {
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phone, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            SetShow(true);
          })
          .catch((err) => {
            console.log(err);
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
        <Center>
          <div>Seconds : {count}</div>
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
    </Box>
  );

  // console.log(user)
  const display = !show ? sendform : otpform;

  return (
    <header id="header-positon">
      <img
        src="https://images.ctfassets.net/5de70he6op10/73vpJWzKmWO1fT2HwJ3p4B/b42cab1aedaef564d46e96fbd1cccaa0/Nov22_30Off_SOS_PrimaryBanner_LS_ThisWeekendOnly.jpg"
        alt=""
      />
      <div className="NavbarFirst">
        <div className="globeSearch">
          <Link to="/">
            {/* <img
              className="userLogo"
              src="https://previews.123rf.com/images/magurok/magurok1309/magurok130900108/22359466-vector-globe-search-icon.jpg"
              alt="Serach Logo"
            /> */}
            <GiGlobe fontSize={"25px"} color="#167A92" />
          </Link>

          <li className="dropdown">
            <div style={{ display: "flex", gap: "5px", color: "#167A92" }}>
              <p style={{ color: "#167A92", fontSize: "13px" }}>English($)</p>
              <AiFillCaretDown />
            </div>

            <ul className="child-dropdown2">
              <div className="lidiv">
                <li>Currency</li>
                <li>USD</li>
                <li>Language</li>
                <li>English</li>
              </div>
            </ul>
          </li>
        </div>

        {/* <img
          className="userLogo"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
          alt="User Logo"
        /> */}
        <AiOutlineUser fontSize={"22px"} />
        <Box ml={"5px"} mt="-10px">
          <Box
            ref={finalRef}
            tabIndex={-1}
            aria-label="Focus moved to this box"
          ></Box>
          <Box mt={4}>
            {user ? (
              <MyAccount SignoutHandler={SignoutHandler} />
            ) : (
              <Box mt={4} onClick={onOpen} cursor="pointer" fontSize={"13px"}>
                Sign In / Sign Up
              </Box>
            )}
          </Box>

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
              </ModalBody>
            </ModalContent>
          </Modal>
          <Center>
            <Box id="recaptcha-box"></Box>
          </Center>
        </Box>
      </div>

      <div className="Navbars">
        <div className="Navbar1">
          <div className="MainLogo">
            <Link to="/">
              <img
                className="MainLogo1"
                src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg"
                alt="logomain"
              />
            </Link>
            <img
              className="MainLogo2"
              src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
              alt="logomain"
            />
          </div>
        </div>
        <div className="SerachNavbar">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              // border: "1px solid black",
            }}
          >
            <Input
              htmlSize={20}
              width="auto"
              justifyContent="center"
              alignItems="center"
              placeholder="Search Anthropologie"
            />
            <BsSearch size="1.5em" />
          </div>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to="/cart"
          >
            <AiOutlineShoppingCart size="1.5em" />
          </Link>
        </div>
      </div>
      <Navbar2 />
    </header>
  );
};

export default Navbar;
