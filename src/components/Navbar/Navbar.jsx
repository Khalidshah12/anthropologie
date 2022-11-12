import { Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { authentication } from "../../firebase/firebase_config";
import { RecaptchaVerifier  } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
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
const Navbar = () => {
  const countrycode = "+91";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [pin, SetPin] = useState("");
  const [show, SetShow] = useState(false);
  const [user, SetUser]  = useState(false);
  const [phone, setPhone] = useState(countrycode);
  const navigate = useNavigate();


  // const SignoutHandler =()=>{
  //   SetUser(false)
  //   signOut()
  // }
  
  
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
            SetUser(true)
            return navigate("/")
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
        generateourCaptcha();
        setTimeout(() => {
          let appVerifier = window.recaptchaVerifier;
          signInWithPhoneNumber(authentication, phone, appVerifier)
            .then((confirmationResult) => {
              window.confirmationResult = confirmationResult;
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
          By “logging in to KFC”, you agree to our{" "}
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
    <header>
      <img
        src="https://images.ctfassets.net/5de70he6op10/73vpJWzKmWO1fT2HwJ3p4B/b42cab1aedaef564d46e96fbd1cccaa0/Nov22_30Off_SOS_PrimaryBanner_LS_ThisWeekendOnly.jpg"
        alt=""
      />
      <div className="NavbarFirst">
        <div className="globeSearch">
          <Link to="/">
            <img
              className="userLogo"
              src="https://previews.123rf.com/images/magurok/magurok1309/magurok130900108/22359466-vector-globe-search-icon.jpg"
              alt="Serach Logo"
            />
          </Link>

          <li className="dropdown">
            <div style={{ display: "flex", gap: "5px" }}>
              <a>English($)</a>
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

        <img
          className="userLogo"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
          alt="User Logo"
        />
        <Link to="/login">
          <div>Sign In / Sign In</div>
        </Link>
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
      <nav>
        <ul className="navbar">
          <li className="dropdown">
            Gift
            <ul className="child-dropdown">
              <a>Shop By Category</a>
              <div className="hovergrid">
                <div className="hovergrid1">
                  <li>Explore All Gifts</li>
                  <li>Shop All Gifts</li>
                  <li>Gifts for Her</li>
                  <li>Candle gift & sets</li>
                  <li>Holiday ,decor </li>
                  <li>Stocking suffers</li>
                  <li>Giftable Sweaters</li>
                  <li>Giftable Accessories</li>
                  <li>Gifts for the home</li>
                  <li>Cozy Gifts ,slippers,Throws</li>
                  <li>Cold weather Gifts </li>
                  <li>Beauty gifts and sets</li>
                  <li>Gifts by Receipts</li>
                  <li>BestSeling Gifts</li>
                  <li>Gifts Bundles</li>
                  <li>Gifts Cards</li>
                </div>

                <div className="hovergrid2">
                  <h3>Gifts under price</h3>
                  <div>
                    <li>Gifts under 30$</li>
                    <li>Gifts under 50$ </li>
                    <li>Gifts under 25$</li>
                    <li> Gifts under 100$</li>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li>New!</li>
          <Link to={'/clothes/dresses'}>
            <li>Dresses</li>
          </Link>
          <Link to={'/clothes'}>
            <li>Clothing</li>
          </Link>
          <Link to={'/shoes'}>
          <li>Shoes</li>
          </Link>
          <li>Accessories</li>
          <li>BHLND Weddings</li>
          <li>Home & Furniture</li>
          <li>Beauty & wellness</li>
          <li>Garden & outdoor</li>
          <li>Sale</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
