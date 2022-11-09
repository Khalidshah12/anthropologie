import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import styles from './Cart.module.css'
import { Link } from 'react-router-dom';
import { AiOutlineInfoCircle, AiOutlinePlus } from 'react-icons/ai'
import { ImGift } from 'react-icons/im'
import axios from 'axios';



export default function Cart() {

    const [cart, setCart] = useState([])

    const getData = () => {
        axios.get('http://localhost:8080/cart')
            .then((res) => {
                setCart(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const addQuant = (id, quantity, price) => {
        let payload = {
            quantity: quantity,
            totalprice: price * quantity
        }
        axios.patch(`http://localhost:8080/cart/${id}`, payload)
            .then((res) => {
                getData()
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const HandleQuantity = (e, id, price) => {
        addQuant(id, Number(e.target.value), price)
    }

    useEffect(() => {
        getData()
    }, [])

    // console.log(typeof quantity)
    return (
        <div>
            <Box id={styles.mainDiv}>
                <Box id={styles.basketDiv}>
                    <Box id={styles.mainLeftDiv}>
                        <Box id={styles.mainLeftHeadDiv}>
                            <Heading fontSize={'22px'} color='#26262C' fontWeight="400">Basket</Heading>
                            <Text><Link id={styles.deliveryOption}>Delivery Options</Link></Text>
                        </Box>
                        {cart.length > 0 ?
                            <Box id={styles.mainLeftItemsDiv}>
                                <Box id={styles.itemsBar}>
                                    <Text id={styles.itemsText}>Item</Text>
                                    <Text className={styles.itemsText}>Item Price</Text>
                                    <Text className={styles.itemsText}>Quantity</Text>
                                    <Text className={styles.itemsText}>Total Price</Text>
                                </Box>
                                <Box id={styles.productsMainDiv}>
                                    {cart.map((item) => {
                                        return <Box className={styles.productsDiv} key={item.id}>
                                            <Box className={styles.imageDiv}>
                                                <Image src={item.image} alt='Dress' />
                                            </Box>
                                            <Box className={styles.productsDetailDiv}>
                                                <Box className={styles.productsDetailTopDiv}>
                                                    <Box className={styles.productsFirstDetail}>
                                                        <Text className={styles.productName}>{item.name}</Text>
                                                        <Text className={styles.productStyle}>Style # 4123800430150</Text>
                                                        <Text className={styles.productColor}>Color: {item.color}</Text>
                                                        <Text className={styles.productSize}>Size {item.size}</Text>
                                                        <Text className={styles.productEdit}>Edit</Text>
                                                    </Box>
                                                    <Box className={styles.productsDetail}>
                                                        <Text className={styles.productPrice}>${item.price}</Text>
                                                    </Box>
                                                    <Box className={styles.productsDetail}>
                                                        <Box className={styles.productQuantity}>
                                                            <select className={styles.productQuantitySelect} onChange={(e) => HandleQuantity(e, item.id, item.price)}>
                                                                <option>{item.quantity}</option>
                                                                <option></option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </Box>
                                                    </Box>
                                                    <Box className={styles.productsDetail}>
                                                        <Text className={styles.productTotalPrice}>${item.totalprice}</Text>
                                                    </Box>
                                                </Box>
                                                <Box className={styles.removeSaveDiv}>
                                                    <Text className={styles.remove}>Remove</Text>
                                                    <Text className={styles.removeBorder}>|</Text>
                                                    <Text className={styles.save}>Save for Later</Text>
                                                </Box>
                                                <Box className={styles.giftDiv}>
                                                    <ImGift fontSize={"24px"} color="#167A92" />
                                                    <Text className={styles.giftText}>Add Gift Wrap</Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                    })}
                                </Box>
                            </Box>
                            :
                            <Box id={styles.mainLeftContinueShoppingDiv}>
                                <Text fontSize="13px" color={'#5C5C5F'}>Your basket is currently empty. <Link id={styles.continueShopping} to='/'>Continue Shopping.</Link></Text>
                            </Box>
                        }
                        <Box id={styles.savedItemInstructionDiv}>
                            <Heading fontSize='18px' fontWeight='normal' mb='15px'>Saved for Later</Heading>
                            <Box id={styles.savedItemInstruction}>Your saved for later is currently empty. Add items here that you like, but aren't ready to buy.</Box>
                        </Box>
                    </Box>
                    <Box id={styles.mainRightDiv}>
                        <Box id={styles.mainRightHeadDiv}>
                            <Heading fontSize={'18px'} fontWeight='500'>Order Summary</Heading>
                            <Link id={styles.contactNumber}>800.309.2500</Link>
                        </Box>
                        <Box id={styles.ChargesMainDiv}>
                            <Box id={styles.ChargesDiv}>
                                <Box id={styles.shippingChargesDiv} className={styles.chargesClass}>
                                    <Text>Shipping</Text>
                                    <Text>TBD</Text>
                                </Box>
                                <Box id={styles.estimatedTaxDiv} className={styles.chargesClass}>
                                    <Text>Estimated Tax</Text>
                                    <Text>$.0.00</Text>
                                </Box>
                                <Box id={styles.totalDiv} className={styles.chargesClass}>
                                    <Text>Total</Text>
                                    <Text>$.0.00</Text>
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
                                >
                                    PROCEED TO CHECKOUT
                                </Button>
                                <Button id={styles.paypalButton} cursor={cart.length > 0 ? 'pointer' : 'default'}><Image src='./paypal_logo.png' alt='paypal logo' /></Button>
                                <Box id={styles.promoDiv}>
                                    <Text>Promo Code</Text>
                                    <AiOutlinePlus />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </div >
    )
}


