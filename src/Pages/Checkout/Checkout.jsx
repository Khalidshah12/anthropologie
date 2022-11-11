import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsBoxSeam, BsShop } from 'react-icons/bs'
import { ImBlocked } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckoutOrderSummary from '../../components/Cart/CheckoutOrderSummary'
import TabOne from '../../components/Checkout/TabOne'
import { getCartData } from '../../Redux/AppReducer/action'
import { countryAndCode } from '../../Utilis/countryAndCode'
import { GetLocal } from '../../Utilis/localStorage'
import styles from './Checkout.module.css'

export default function Checkout() {
    const dispatch = useDispatch()
    const { cart } = useSelector((store) => {
        return {
            cart: store.AppReducer.cart,
        };
    });
    const navigate = useNavigate()
    const amoutDetails = GetLocal("amoutDetails") || {}
    const [country] = useState(countryAndCode)
    const [countryCode, setCountryCode] = useState(93)
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", streetAddress: "", city: "", postcode: "", mobileNumber: ""
    })

    const isFormError = formData.firstName === '' || formData.lastName === '' || formData.streetAddress === '' || formData.city === '' || formData.postcode === '' || formData.mobileNumber === '' || formData.mobileNumber.length > 10 || formData.mobileNumber.length < 10

    const isFirstNameError = formData.firstName === ''
    const isLastNameError = formData.lastName === ''
    const isStreetAddError = formData.streetAddress === ''
    const isCityError = formData.city === ''
    const isPostcodeError = formData.postcode === ''
    const isMobileNumberError = formData.mobileNumber === '' || formData.mobileNumber.length > 10 || formData.mobileNumber.length < 10

    const HandleCountryChange = (value) => {
        country.map((el) => {
            if (value === el.name) {
                return setCountryCode(el.code)
            }
            return null
        })
    }

    const HandleProceed = () => {
        if (amoutDetails.total > 0) {
            if (!isFormError) {
                navigate('/')
            }
        }
    }

    useEffect(() => {
        dispatch(getCartData);
        document.title = "Shipping | Anthropologie"
    }, [dispatch])

    console.log(cart)

    return (
        <div>
            <Heading>Checkout</Heading>
            <Box id={styles.main}>
                <Box id={styles.left}>
                    <Tabs w="100%">
                        <TabList w="100%" mb='20px'>
                            <Tab
                                className={styles.tabs}
                                w='50%'
                                fontSize="18px"
                                _selected={{ borderBottom: '3px solid black' }}
                                _hover={{ color: "#167A92", borderBottom: '3px solid #167A92', cursor: "default" }}
                                backgroundColor=""
                                padding='20px 20px 20px 20px'
                            >
                                <BsBoxSeam fontSize={"18px"} className={styles.tabsIcons} /> Ship
                            </Tab>
                            <Tab
                                className={styles.tabs}
                                w='50%'
                                fontSize="18px"
                                _selected={{ borderBottom: '3px solid black' }}
                                _hover={{ color: "#167A92", borderBottom: '3px solid #167A92', cursor: "default" }}
                                backgroundColor=""
                                padding='20px 20px 20px 20px'
                            >
                                <BsShop fontSize={"18px"} className={styles.tabsIcons} /> Pick Up
                            </Tab>
                        </TabList>


                        <TabPanels>
                            <TabPanel>
                                <TabOne
                                    formData={formData}
                                    isFirstNameError={isFirstNameError}
                                    isLastNameError={isLastNameError}
                                    isCityError={isCityError}
                                    isFormError={isFormError}
                                    isMobileNumberError={isMobileNumberError}
                                    isPostcodeError={isPostcodeError}
                                    countryCode={countryCode}
                                    setFormData={setFormData}
                                    isStreetAddError={isStreetAddError}
                                    country={country}
                                    HandleCountryChange={HandleCountryChange} />
                            </TabPanel>
                            <TabPanel>
                                <Box>
                                    <Heading fontSize="18px" fontWeight="400" mb='15px'>Find a Pickup Location</Heading>
                                    <Box>
                                        <Text fontSize="13px">Locate a store or a Collection Point near you:</Text>
                                        <Box display='flex'>
                                            <ImBlocked color='#A5642D' />
                                            <Text color='#A5642D' fontSize="13px">Sorry – gift wrap is unavailable with Store Pickup and Collection Point orders.</Text>
                                        </Box>
                                        <Box></Box>
                                    </Box>
                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <Box id={styles.right}>
                    <CheckoutOrderSummary
                        isFormError={isFormError}
                        HandleProceed={HandleProceed}
                        shipping={amoutDetails.shipping}
                        subTotal={amoutDetails.subTotal}
                        total={amoutDetails.total}
                        cart={cart}
                        text={"SHIP TO THIS ADDRESS"} />
                </Box>
            </Box>
        </div >
    )
}
