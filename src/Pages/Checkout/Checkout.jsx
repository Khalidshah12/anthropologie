import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsBoxSeam, BsShop } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckoutOrderSummary from '../../components/Checkout/CheckoutOrderSummary'
import TabOne from '../../components/Checkout/TabOne'
import TabTwo from '../../components/Checkout/TabTwo'
import { getCartData } from '../../Redux/AppReducer/action'
import { countryAndCode } from '../../Utilis/countryAndCode'
import { GetLocal, SaveLocal } from '../../Utilis/localStorage'
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
    let [formData, setFormData] = useState({
        firstName: "", lastName: "", streetAddress: "", city: "", postcode: "", mobileNumber: ""
    })

    const isFormError = formData.firstName === '' || formData.lastName === '' || formData.streetAddress === '' || formData.city === '' || formData.postcode === '' || formData.mobileNumber === '' || formData.mobileNumber.length > 10 || formData.mobileNumber.length < 10

    const isFirstNameError = formData.firstName === ''
    const isLastNameError = formData.lastName === ''
    const isStreetAddError = formData.streetAddress === ''
    const isCityError = formData.city === ''
    const isPostcodeError = formData.postcode === ''
    const isMobileNumberError = formData.mobileNumber === '' || formData.mobileNumber.length > 10 || formData.mobileNumber.length < 10
    const [isSearchLoading, setIsSearchLoading] = useState(false)

    const [input, setInput] = useState('')
    const isError = input === ''
    const handleInputChange = (e) => setInput(e.target.value)

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
                formData = { ...formData, countryCode }
                SaveLocal("address", formData)
                SaveLocal('countryCode', countryCode)
                navigate('/checkout/shipping-delivery')
            }
        }
    }

    const HandleSearch = (onOpen) => {
        if (!isError) {
            setIsSearchLoading(true)
            setTimeout(() => {
                setIsSearchLoading(false)
                onOpen()
            }, 1000);
        }
    }

    useEffect(() => {
        dispatch(getCartData);
        document.title = "Shipping | Anthropologie"
    }, [dispatch])

    return (
        <div>
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
                                <TabTwo
                                    isError={isError}
                                    input={input}
                                    handleInputChange={handleInputChange}
                                    HandleSearch={HandleSearch}
                                    isSearchLoading={isSearchLoading} />
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
