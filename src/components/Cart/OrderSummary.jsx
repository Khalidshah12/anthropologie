import React from 'react'
import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react';
import { AiOutlineInfoCircle, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import styles from '../../Pages/Cart/Cart.module.css'
import { Link } from 'react-router-dom';

export default function OrderSummary(props) {
    const {
        promo,
        canPromoApply,
        promoValue,
        setPromovalue,
        HandlePromoCode,
        HandleApplyPromo,
        subTotal,
        shipping,
        HandleProceed,
        cart,
        total,
        text
    } = props
    return (
        <>
            <Box id={styles.mainRightHeadDiv}>
                <Heading fontSize={'18px'} fontWeight='500'>Order Summary</Heading>
                <Link id={styles.contactNumber}>800.309.2500</Link>
            </Box>
            <Box id={styles.ChargesMainDiv}>
                <Box id={styles.ChargesDiv}>
                    {cart.length > 0
                        ? <Box className={styles.chargesClass}>
                            <Text>Subtotal</Text>
                            <Text>${`${subTotal}.00` || "0.00"}</Text>
                        </Box>
                        : ""}
                    <Box id={styles.shippingChargesDiv} className={styles.chargesClass}>
                        <Text>Shipping</Text>
                        <Text>${`${shipping}.00` || "TBD"}</Text>
                    </Box>
                    {canPromoApply
                        ? null
                        : <Box id={styles.shippingChargesDiv} className={styles.chargesClass}>
                            <Text>Discount</Text>
                            <Text>50%</Text>
                        </Box>
                    }
                    <Box id={styles.estimatedTaxDiv} className={styles.chargesClass}>
                        <Text>Estimated Tax</Text>
                        <Text>$0.00</Text>
                    </Box>
                    <Box id={styles.totalDiv} className={styles.chargesClass}>
                        <Text>Total</Text>
                        <Text>${`${total}.00` || "0.00"}</Text>
                    </Box>
                </Box>
                <Box id={styles.payNowOrLaterDiv}>
                    <Box id={styles.payNowOrLater}>
                        <Text mr="5px">Pay now or pay later with <span className={styles.paySpan}>Klarna.</span></Text>
                        <AiOutlineInfoCircle fontSize='16px' color='#167A92' />
                    </Box>
                    <Box id={styles.payafterDiv}>
                        <Text mr="5px">Pay with <span className={styles.paySpan}>Afterpay</span></Text>
                        <AiOutlineInfoCircle fontSize='16px' color='#167A92' />
                    </Box>
                </Box>
                <Box id={styles.ButtonsDiv}>
                    <Button id={styles.proceedbutton}
                        cursor={cart.length > 0 ? 'pointer' : 'default'}
                        backgroundColor={cart.length > 0 ? '#4B5666' : "rgb(206, 206, 206)"}
                        color={"white"}
                        _hover={{
                            backgroundColor: cart.length > 0 ? "white" : "none",
                            border: cart.length > 0 ? "1px solid black" : "none",
                            color: cart.length > 0 ? "#4B5666" : "white"
                        }}
                        onClick={HandleProceed}
                    >
                        {text}
                    </Button>
                    <Button id={styles.paypalButton} cursor={cart.length > 0 ? 'pointer' : 'default'}><Image src='./paypal_logo.png' alt='paypal logo' /></Button>
                    <Box id={styles.promoDiv} onClick={HandlePromoCode}>
                        <Text>Promo Code</Text>
                        {promo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </Box>
                    {promo
                        ? <Box id={styles.promoInputDiv}>
                            <Input
                                value={promoValue}
                                onChange={(e) => setPromovalue(e.target.value)}
                                borderRadius='none'
                                w='65%'
                                fontSize='13px'
                                backgroundColor="#FDFDF9"
                                letterSpacing='1.5px'
                                fontWeight='normal'
                                border='1px solid black'
                                variant=''
                            />
                            <Button
                                borderRadius='none'
                                backgroundColor="#FDFDF9"
                                border='1px solid black'
                                w='30%'
                                fontSize='13px'
                                letterSpacing='2.4px'
                                fontWeight='normal'
                                onClick={HandleApplyPromo}
                                _hover={{ backgroundColor: '#4B5666', color: "white" }}
                            >
                                APPLY
                            </Button>
                        </Box>
                        : null
                    }
                </Box>
            </Box>
        </>
    )
}
