import React from 'react'
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import styles from '../../Pages/Cart/Cart.module.css'
import { Link } from 'react-router-dom';
import { GetLocal } from '../../Utilis/localStorage';

export default function CheckoutOrderSummary(props) {
    const {
        cart,
        HandleProceed,
        total,
        subTotal,
        shipping,
        text,
        isFormError
    } = props
    const discount = GetLocal('discount') || "$0.00"
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

                    <Box id={styles.shippingChargesDiv} className={styles.chargesClass}>
                        <Text>Discount</Text>
                        <Text>{discount}</Text>
                    </Box>

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
                        cursor={!isFormError ? 'pointer' : 'default'}
                        backgroundColor={!isFormError ? '#4B5666' : "rgb(206, 206, 206)"}
                        color={"white"}
                        _hover={{
                            backgroundColor: !isFormError ? "white" : "none",
                            border: !isFormError ? "1px solid black" : "none",
                            color: !isFormError ? "#4B5666" : "white"
                        }}
                        onClick={HandleProceed}
                    >
                        {text}
                    </Button>
                </Box>
            </Box>
        </>
    )
}
