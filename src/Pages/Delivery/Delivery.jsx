import { Box, Heading, Text, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { ImGift } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../../Redux/AppReducer/action'
import { GetLocal } from '../../Utilis/localStorage'
import styles from './Delivery.module.css'
import style from '../Cart/Cart.module.css'
import { useNavigate } from 'react-router-dom'
import CheckoutOrderSummary from '../../components/Checkout/CheckoutOrderSummary'


export default function Delivery() {
    const dispatch = useDispatch()
    const { cart } = useSelector((store) => {
        return {
            cart: store.AppReducer.cart,
        };
    });
    const address = GetLocal('address') || {}
    const amoutDetails = GetLocal("amoutDetails") || {}
    const countryCode = GetLocal('countryCode') || ''
    const navigate = useNavigate()

    const HandleEditBasket = () => {
        navigate('/cart')
    }

    const HandleAddressChange = () => {
        navigate('/checkout/shipping-address')
    }

    const HandleProceed = () => {
        if (amoutDetails.total > 0) {
            navigate('/checkout/payment')
        }
    }

    useEffect(() => {
        dispatch(getCartData);
        document.title = "Delivery | Anthropologie"
    }, [dispatch])

    // console.log(cart)

    return (
        <div>

            <Box id={styles.main}>
                <Box id={styles.left}>
                    <Box id={styles.head}>
                        <Heading fontSize='18px' fontWeight='normal'>Shipping To Khalid Shah</Heading>
                        <Text id={styles.change} onClick={HandleAddressChange}>Change</Text>
                    </Box>
                    <Box id={styles.deliveryDiv}>
                        <Text className={styles.deliveryText}>{address.firstName.toUpperCase()} {address.lastName.toUpperCase()}</Text>
                        <Text className={styles.deliveryText}>{address.streetAddress.toUpperCase()}</Text>
                        <Text className={styles.deliveryText}>{address.city.toUpperCase()} </Text>
                        <Text className={styles.deliveryText} >{`+${countryCode}`} {address.mobileNumber}</Text>
                    </Box>
                    <Box id={styles.express} fontWeight='600'>
                        Express and Overnight orders placed after 1 PM ET typically ship the next business day.
                    </Box>
                    <Box id={styles.international}>
                        <Text className={styles.internationalText} fontWeight='600'>7-12 business days - $60.00</Text>
                        <Text className={styles.internationalText}>Standard International</Text>
                        <Text className={styles.internationalText}>Your order will be delivered by your local postal service and carrier brokerage fees may apply. Duties & taxes will be assessed upon delivery and may be nonrefundable. Order total in checkout is calculated in USD.</Text>
                    </Box>
                    <Box>
                        <Box id={style.itemsBar} border='1px solid #E5E2DE' borderTop={'none'}>
                            <Text id={styles.edit} pl='20px' onClick={HandleEditBasket}>Edit Basket</Text>
                            <Text id={style.itemsTextNone}>Item Price</Text>
                            <Text className={style.itemsText}>Quantity</Text>
                            <Text className={style.itemsText} pr='20px'>Total Price</Text>
                        </Box>
                        <Box id={styles.items}>
                            {cart.map((item) => {
                                return <Box className={style.productsDiv} key={item.id}>
                                    <Box className={style.imageDiv}>
                                        <Image src={item.image} alt='Dress' />
                                    </Box>
                                    <Box className={style.productsDetailDiv}>
                                        <Box className={style.productsDetailTopDiv}>
                                            <Box className={style.productsFirstDetail}>
                                                <Text className={style.productName}>{item.name}</Text>
                                                <Text className={style.productStyle}>Style # 4123800430150</Text>
                                                <Text className={style.productColor}>Color: {item.color}</Text>
                                                <Text className={style.productSize}>Size {item.size}</Text>
                                            </Box>
                                            <Box className={style.productsDetail}>
                                                <Text className={style.productPrice}>${item.price}</Text>
                                            </Box>
                                            <Box className={style.productsDetailQuantity}>
                                                <Box className={style.productQuantityDel}>
                                                    {item.quantity}
                                                </Box>
                                            </Box>
                                            <Box className={style.productsDetailTotalPrice}>
                                                <Text className={style.productTotalPrice}>${item.totalprice}</Text>
                                            </Box>
                                        </Box>
                                        <Box className={style.giftDiv}>
                                            <ImGift fontSize={"24px"} color="#167A92" />
                                            <Text className={style.giftText}>Add Gift Wrap</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            })}
                        </Box>
                    </Box>
                </Box>
                <Box id={styles.right}>
                    <CheckoutOrderSummary
                        isFormError={false}
                        HandleProceed={HandleProceed}
                        shipping={amoutDetails.shipping}
                        subTotal={amoutDetails.subTotal}
                        total={amoutDetails.total}
                        cart={cart}
                        text={"CONTINUE TO PAYMENT"}
                    />
                </Box>
            </Box>
        </div>
    )
}
