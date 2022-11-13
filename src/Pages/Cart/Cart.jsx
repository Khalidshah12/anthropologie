import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, Image, Text, useToast } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Cart.module.css";
import SingleCartProduct from "../../components/Cart/SingleCartProduct";
import { getCartData } from "../../Redux/AppReducer/action";
import DeliveryModal from "../../components/Cart/DeliveryModal";
import OrderSummary from "../../components/Cart/OrderSummary";
import { SaveLocal } from "../../Utilis/localStorage";


export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => {
    return {
      cart: store.AppReducer.cart,
    };
  });
  const navigate = useNavigate();
  const [saved, setSaved] = useState([]);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  // const [openGift, setOpenGift] = useState([]);
  const [promo, setPromo] = useState(false);
  const [canPromoApply, setCanPromoApply] = useState(true);
  const [promoValue, setPromovalue] = useState("");
  const [estimatedTax] = useState(0);
  const toast = useToast();

  const addQuantity = (id, quantity, price) => {
    let payload = {
      quantity: quantity,
      totalprice: price * quantity,
    };
    axios
      .patch(`https://emptyapi.onrender.com/cart/${id}`, payload)
      .then((r) => {
        dispatch(getCartData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const HandleRemove = (id) => {
    axios
      .delete(`https://emptyapi.onrender.com/cart/${id}`)
      .then((r) => {
        dispatch(getCartData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const HandleQuantity = (e, id, price) => {
    addQuantity(id, Number(e.target.value), price);
  };

  const getSavedData = () => {
    axios
      .get(`https://emptyapi.onrender.com/savedforlater`)
      .then((r) => {
        setSaved(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const HandleSaveForLater = (id) => {
    axios
      .get(`https://emptyapi.onrender.com/cart/${id}`)
      .then((r) => {
        axios
          .post(`https://emptyapi.onrender.com/savedforlater`, r.data)
          .then((r) => { })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(() => {
      axios
        .delete(`https://emptyapi.onrender.com/cart/${id}`)
        .then((r) => {
          dispatch(getCartData);
          getSavedData();
        })
        .catch((e) => {
          console.log(e);
        });
    }, 1000);
  };

  const HandleRemoveSaved = (id) => {
    axios
      .delete(`https://emptyapi.onrender.com/savedforlater/${id}`)
      .then((r) => {
        getSavedData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const MoveToCart = (id) => {
    axios
      .get(`https://emptyapi.onrender.com/savedforlater/${id}`)
      .then((r) => {
        axios
          .post(`https://emptyapi.onrender.com/cart`, r.data)
          .then((r) => { })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(() => {
      axios
        .delete(`https://emptyapi.onrender.com/savedforlater/${id}`)
        .then((r) => {
          dispatch(getCartData);
          getSavedData();
        })
        .catch((e) => {
          console.log(e);
        });
    }, 1000);
  }

  const HandlePromoCode = () => {
    setPromo(!promo);
  };

  const HandleApplyPromo = () => {
    if (promoValue === "") {
      toast({
        title: "Error",
        description: "Write a Promo Code",
        status: "warning",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      if (canPromoApply) {
        if (promoValue === "Khalid") {
          setTotal(total / 2);
          setCanPromoApply(false);

          toast({
            title: "Congratulation",
            description: "50% Discount Applied Successfully",
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Sorry",
            description: "Promo Code is Not Found",
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Sorry",
          description: "You Can Apply Only One Code At A Time",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const HandleProceed = () => {
    if (cart.length > 0) {
      let amoutDetails = {
        subTotal: subTotal,
        shipping: shipping,
        estimatedTax: estimatedTax,
        total: total,
      };
      SaveLocal("amoutDetails", amoutDetails);
      if (!canPromoApply) {
        SaveLocal("discount", "50%");
      } else {
        SaveLocal("discount", "$0.00");
      }
      navigate("/checkout/shipping-address");
    }
  };

  //Pending
  const HandleGiftWrap = (id) => {
    // let gift = cart.map((el) => {
    //   return el.id === id;
    // });
    // setOpenGift(gift);
    // console.log(gift);
  };

  useEffect(() => {
    dispatch(getCartData);
    getSavedData();
    document.title = "Basket | Anthropologie";
  }, [dispatch]);

  useEffect(() => {
    let a = cart.reduce((acc, el) => {
      return acc + el.totalprice;
    }, 0);
    setSubTotal(Math.floor(a));
    if (subTotal < 1000 && subTotal > 0) {
      setShipping(60);
    } else {
      setShipping(0);
    }
    if (canPromoApply) {
      setTotal(subTotal + shipping);
    } else {
      setTotal((subTotal + shipping) / 2);
    }
  }, [cart, shipping, subTotal, canPromoApply]);

  return (
    <Box id={styles.mainDiv}>
      <Box id={styles.basketDiv}>
        <Box id={styles.mainLeftDiv}>
          <Box id={styles.mainLeftHeadDiv}>
            <Heading fontSize={"22px"} color="#26262C" fontWeight="400">
              Basket
            </Heading>
            <DeliveryModal />
          </Box>
          {cart.length > 0 ? (
            <Box id={styles.mainLeftItemsDiv}>
              <Box id={styles.itemsBar}>
                <Text id={styles.itemsText}>Item</Text>
                <Text id={styles.itemsTextNone}>Item Price</Text>
                <Text className={styles.itemsText}>Quantity</Text>
                <Text className={styles.itemsText}>Total Price</Text>
              </Box>
              <Box id={styles.productsMainDiv}>
                {cart.map((item) => {
                  return (
                    <SingleCartProduct
                      key={item.id}
                      item={item}
                      HandleQuantity={HandleQuantity}
                      HandleRemove={HandleRemove}
                      HandleSaveForLater={HandleSaveForLater}
                      HandleGiftWrap={HandleGiftWrap}
                    // openGift={openGift}
                    />
                  );
                })}
              </Box>
            </Box>
          ) : (
            <Box id={styles.mainLeftContinueShoppingDiv}>
              <Text fontSize="13px" color={"#5C5C5F"}>
                Your basket is currently empty.{" "}
                <Link id={styles.continueShopping} to="/">
                  Continue Shopping.
                </Link>
              </Text>
            </Box>
          )}
        </Box>
        <Box id={styles.mainRightDiv}>
          <OrderSummary
            cart={cart}
            total={total}
            promo={promo}
            canPromoApply={canPromoApply}
            promoValue={promoValue}
            setPromovalue={setPromovalue}
            HandlePromoCode={HandlePromoCode}
            HandleApplyPromo={HandleApplyPromo}
            subTotal={subTotal}
            shipping={shipping}
            HandleProceed={HandleProceed}
            text="PROCEED TO CHECKOUT"
          />
        </Box>
      </Box>
      <Box id={styles.savedItemInstructionDiv}>
        <Heading fontSize="18px" fontWeight="normal" mb="15px">
          Saved for Later
        </Heading>
        <Box id={styles.savedItemInstruction}>
          {saved.length > 0 ? (
            <Box className={styles.savedDiv}>
              {saved.map((item) => {
                return (
                  <Box key={item.id}>
                    <Box className={styles.savedImagesDiv}>
                      <Image
                        className={styles.savedImages}
                        src={item.image}
                        alt={item.name}
                      />
                      <CloseIcon
                        onClick={() => HandleRemoveSaved(item.id)}
                        className={styles.RemoveIcon}
                        fontSize="16px"
                        position="absolute"
                        top="2"
                        right="3"
                        cursor={"pointer"}
                      />
                    </Box>
                    <Button
                      onClick={() => MoveToCart(item.id)}
                      className={styles.moveToCart}
                      w='100%'
                      variant=''
                      borderRadius=''
                      backgroundColor={cart.length > 0 ? '#4B5666' : "rgb(206, 206, 206)"}
                      color={"white"}
                      _hover={{
                        backgroundColor: "white",
                        border: "1px solid black",
                        color: "#4B5666"
                      }}
                    >Move to Cart</Button>
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Text>
              Your saved for later is currently empty. Add items here that you
              like, but aren't ready to buy.
            </Text>
          )}
        </Box>
      </Box>
    </Box>

  );
}
