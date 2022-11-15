import { Box, Heading, Text, Input, RadioGroup, Radio, Image, Tooltip, Button, Checkbox, useDisclosure, Collapse, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap'
import { FiHelpCircle } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckoutOrderSummary from '../../components/Checkout/CheckoutOrderSummary'
import { getCartData } from '../../Redux/AppReducer/action'
import { GetLocal } from '../../Utilis/localStorage'
import styles from './Payment.module.css'

export default function Payment() {
    const { isOpen, onToggle } = useDisclosure()
    const amoutDetails = GetLocal('amoutDetails')
    const address = GetLocal('address')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cart } = useSelector((store) => {
        return {
            cart: store.AppReducer.cart,
        };
    });
    const [formData, setFormData] = useState({
        cardNumber: "", expiry: "", cvv: ""
    })
    const [isCash, setIsCash] = useState(false)
    const isFormError = (formData.cardNumber === '' || formData.expiry === '' || formData.cvv === '' || formData.cardNumber.length > 12 || formData.cardNumber.length < 12 || formData.expiry.length < 5 || !formData.expiry[2].includes("/") || formData.cvv.length < 3) && isCash
    const isCardError = formData.cardNumber === '' || formData.cardNumber.length > 12 || formData.cardNumber.length < 12
    const isExpiryError = formData.expiry === '' || formData.expiry.length < 5 || !formData.expiry[2].includes("/")
    const isCvvError = formData.cvv === '' || formData.cvv.length < 3
    const toast = useToast()

    const HandleProceed = () => {
        if (!isFormError) {
            toast({
                title: "Successfull",
                description: "Your Order is Confirmed",
                status: "success",
                position: "top",
                duration: 3000,
                isClosable: true,
            });
            setTimeout(() => {
                navigate('/')
            }, 3000);
        }
    }

    const HandleRadio = (value) => {
        if (value === '2') {
            setIsCash(false)
        } else {
            setIsCash(true)
        }
    }

    useEffect(() => {
        dispatch(getCartData);
        document.title = "Payment | Anthropologie"
    }, [dispatch])

    return (
        <div>
            <Box id={styles.main}>
                <Box id={styles.left}>
                    <Heading fontSize='18px' fontWeight='normal' mb='15px'>Payment Method</Heading>
                    <Box>
                        <RadioGroup defaultValue="2" mb='20px'>
                            <Stack direction='column'>
                                <Box id={styles.creditCard} border={isOpen ? '1px solid black' : '1px solid #CCCCCC'}>
                                    <Radio size='sm' value='1' onClick={onToggle} onChange={(e) => HandleRadio(e.target.value)}></Radio>
                                    <Box id={styles.creditCardRight}>
                                        <Heading fontSize='18px' fontWeight='normal'>Credit Card</Heading>
                                        <Box id={styles.cardImagesDiv}>
                                            <Image className={styles.cardImages} alt='master card' src='https://www.anthropologie.com/static/v3/images/mastercard-200dd7d92e446ace024f5b7a56fc3dbb.svg'></Image>
                                            <Image className={styles.cardImages} alt='visa card' src='https://www.anthropologie.com/static/v3/images/visa-e299d59963d3487491cc3f5cdd2ee783.svg'></Image>
                                            <Image className={styles.cardImages} alt='american express card' src='https://www.anthropologie.com/static/v3/images/american-express-d1f00c36ef5c0d39793f98f685b4c130.svg'></Image>
                                            <Image className={styles.cardImages} alt='discover card' src='https://www.anthropologie.com/static/v3/images/discover-85248a7a74c3ffd34011d6e3bacae886.svg'></Image>
                                            <Image className={styles.cardImages} alt='jcb card' src='https://www.anthropologie.com/static/v3/images/jcb-366a23ec5606ddc0773d2a522713d487.svg'></Image>
                                            <Image className={styles.cardImages} alt='union pay card' src='https://www.anthropologie.com/static/v3/images/cup-844be65defd53cd3a53319e88255a3a1.svg'></Image>
                                            <Image className={styles.cardImages} alt='diners-club card' src='https://www.anthropologie.com/static/v3/images/diners-club-3bfd7869205a25218c3dc5b56b008380.svg'></Image>
                                            <Image className={styles.cardImages} alt='maestro card' src='https://www.anthropologie.com/static/v3/images/maestro-d8ba8fd50606b932d7baf4665404da59.svg'></Image>
                                        </Box>
                                        <Collapse in={isOpen} animateOpacity>
                                            <Box w='100%' >
                                                <Box id={styles.labelsDiv}>
                                                    <Box w='40%'>
                                                        <Text fontWeight='normal' fontSize='13px'>City or ZIP Code*</Text>
                                                    </Box>
                                                    <Box w='30%'>
                                                        <Text fontWeight='normal' fontSize='13px'>Distance*</Text>
                                                    </Box>
                                                    <Box w='20%'>
                                                        <Text></Text>
                                                    </Box>
                                                    <Box w="2%">
                                                        <Text></Text>
                                                    </Box>
                                                </Box>
                                                <Box id={styles.inputsMainDiv}>
                                                    <Box id={styles.width40} >
                                                        <Input mb={!isCardError ? "19px" : ""} className={styles.inputs} h='45px' borderRadius='' variant='' w='100%' type='number' value={formData.cardNumber} onChange={(e) => { if (e.target.value.length < 13) { setFormData({ ...formData, cardNumber: e.target.value }) } }} placeholder='XXXX XXXX XXXX XXXX' />
                                                        {!isCardError ? "" : (
                                                            <Text color='#C33D3D' fontSize='13px'>Invalid credit card number.</Text>
                                                        )}
                                                    </Box>
                                                    <Box id={styles.width30} >
                                                        <Input mb={!isExpiryError ? "19px" : ""} className={styles.inputs} h='45px' borderRadius='' variant='' w='100%' type='text' value={formData.expiry} onChange={(e) => { if (e.target.value.length < 6) { setFormData({ ...formData, expiry: e.target.value }) } }} placeholder='MM/YY' />
                                                        {!isExpiryError ? "" : (
                                                            <Text color='#C33D3D' fontSize='13px'>Please enter Expiration Date</Text>
                                                        )}
                                                    </Box>
                                                    <Box id={styles.width20}>
                                                        <Input mb={!isCvvError ? "19px" : ""} className={styles.inputs} h='45px' borderRadius='' variant='' w='100%' type='number' value={formData.cvv} onChange={(e) => { if (e.target.value.length < 4) { setFormData({ ...formData, cvv: e.target.value }) } }} />
                                                        {!isCvvError ? "" : (
                                                            <Text color='#C33D3D' fontSize='13px'>Please enter CVV</Text>
                                                        )}
                                                    </Box>
                                                    <Box id={styles.width5} mb='19px'>
                                                        <Tooltip hasArrow bg='#4B5666' fontWeight='normal' letterSpacing='0.6px' lineHeight='6' label="The CID/Security Code is the 3-digit number printed by the signature line on the back of the card; for American Express cards, it's the 4-digit number on the front of the card above the account number.">
                                                            <Button variant='ghost' _hover={{ backgroundColor: 'none' }}><FiHelpCircle /></Button>
                                                        </Tooltip>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Checkbox size='sm' mt='15px' mb='15px'>
                                                <Text fontSize='13px'>Save this card to my account.</Text>
                                            </Checkbox>
                                            <Box mb='15px'>
                                                <Text fontSize='13px' fontWeight='500' mb='15px'>Billing Address</Text>
                                                <Box>
                                                    <Text className={styles.deliveryText}>{address.firstName.toUpperCase()} {address.lastName.toUpperCase()}</Text>
                                                    <Text className={styles.deliveryText}>{address.streetAddress.toUpperCase()}</Text>
                                                    <Text className={styles.deliveryText}>{address.city.toUpperCase()} </Text>
                                                    <Text className={styles.deliveryText} >{`+${address.countryCode}`} {address.mobileNumber}</Text>
                                                </Box>
                                            </Box>
                                            <Text id={styles.change} onClick={() => navigate('/checkout/shipping-address')}>Change</Text>
                                        </Collapse>
                                    </Box>
                                </Box>
                                <Box id={styles.cashOnDelivery} border={!isOpen ? '1px solid black' : '1px solid #CCCCCC'} >
                                    <Radio size='sm' value='2' onClick={onToggle} onChange={(e) => HandleRadio(e.target.value)}></Radio>
                                    <Box id={styles.cashOnDeliveryRight}>
                                        <Heading fontSize='18px' fontWeight='normal'>Cash on Delivery</Heading>
                                    </Box>
                                </Box>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Box>
                <Box id={styles.right}>
                    <CheckoutOrderSummary
                        cart={cart}
                        HandleProceed={HandleProceed}
                        total={amoutDetails.total}
                        subTotal={amoutDetails.subTotal}
                        shipping={amoutDetails.shipping}
                        text={"PLACE ORDER"}
                        isFormError={isFormError}
                    />
                </Box>
            </Box>
        </div>
    )
}
