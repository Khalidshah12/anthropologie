import { Box, Checkbox, FormControl, FormErrorMessage, Heading, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../../Pages/Checkout/Checkout.module.css'

export default function TabOne(props) {
    const {
        formData,
        isFirstNameError,
        isLastNameError,
        isCityError,
        isFormError,
        isMobileNumberError,
        isPostcodeError,
        countryCode,
        setFormData,
        isStreetAddError,
        country,
        HandleCountryChange
    } = props
    return (
        <>
            <Heading fontSize="18px" fontWeight="400" mb='15px'>Shipping Address</Heading>
            <Box width="100%">
                <FormControl isInvalid={isFormError}>
                    <label className={styles.labels}>Country/Region</label>
                    <select id={styles.selectTag} onChange={(e) => HandleCountryChange(e.target.value)}>
                        {country.map((el) => {
                            return <option key={el.id} >{el.name}</option>
                        })}
                    </select>
                    <Box className={styles.combineDiv} >
                        <Box className={styles.inputBoxFlex}>
                            <label className={styles.labels}>First Name*</label>
                            <Input name='firstName' value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className={styles.inputs} h='45px' borderRadius='' variant='' type="text" />
                            {!isFirstNameError
                                ? ""
                                : (
                                    <FormErrorMessage fontSize='13px' color='#C33D3D' mt='3px'>Please enter First Name</FormErrorMessage>
                                )}
                        </Box>

                        <Box className={styles.inputBoxFlex}>
                            <label className={styles.labels}>Last Name*</label>
                            <Input name='lastName' value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className={styles.inputs} h='45px' borderRadius='' variant='' type="text" />
                            {!isLastNameError
                                ? ""
                                : (
                                    <FormErrorMessage fontSize='13px' color='#C33D3D' mt='3px'>Please enter Last Name</FormErrorMessage>
                                )}
                        </Box>
                    </Box>
                    <Box className={styles.inputBox}>
                        <label className={styles.labels}>Street Address*</label>
                        <Input name='streetAddress' value={formData.streetAddress} onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })} className={styles.inputs} h='45px' borderRadius='' variant='' type="text" placeholder='35 character limit, continue below.' />
                        {!isStreetAddError
                            ? ""
                            : (
                                <FormErrorMessage fontSize='13px' color='#C33D3D' mt='3px'>Please enter Street Address</FormErrorMessage>
                            )}
                    </Box>
                    <Box className={styles.inputBox}>
                        <label className={styles.labels}>Address 2</label>
                        <Input className={styles.inputs} h='45px' borderRadius='' variant='' type="text" placeholder='Building, Suit or Apartment Number' />
                    </Box>
                    <Box className={styles.inputBox}>
                        <Checkbox border='gray' size='sm' mb='15px'><Text fontSize='13px' color='#26262C'>PO Box</Text></Checkbox>
                    </Box>
                    <Box className={styles.combineDiv}>
                        <Box className={styles.inputBoxFlex}>
                            <label className={styles.labels}>City*</label>
                            <Input name='city' value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className={styles.inputs} h='45px' borderRadius='' variant='' type="text" />
                            {!isCityError
                                ? ""
                                : (
                                    <FormErrorMessage fontSize='13px' color='#C33D3D' mt='3px'>Please enter City</FormErrorMessage>
                                )}
                        </Box>

                        <Box className={styles.inputBoxFlex}>
                            <label className={styles.labels}>Province or Region</label>
                            <Input className={styles.inputs} h='45px' borderRadius='' variant='' type="text" />
                        </Box>
                    </Box>
                    <Box className={styles.inputBoxFlex}>
                        <label className={styles.labels}>Postcode*</label>
                        <Input name='postcode' value={formData.postcode} onChange={(e) => setFormData({ ...formData, postcode: e.target.value })} className={styles.inputs} h='45px' borderRadius='' variant='' type="text" />
                        {!isPostcodeError
                            ? ""
                            : (
                                <FormErrorMessage fontSize='13px' color='#C33D3D' mt='3px'>Please enter Postcode</FormErrorMessage>
                            )}
                    </Box>
                    <Box className={styles.inputBoxFlex}>
                        <label className={styles.labels}>Mobile Number*</label>
                        <InputGroup className={styles.inputBoxFlex} border="1px solid #939395">
                            <InputLeftAddon children={`+${countryCode}`} border='none' h='45px' borderRadius="" backgroundColor='#FFFFFF' />
                            <Input name='mobileNumber' value={formData.mobileNumber} onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} id={styles.Mobileinput} h='45px' backgroundColor='#FDFDF9' border='none' borderRadius='' variant='' type='number' />
                        </InputGroup>
                        {!isMobileNumberError
                            ? ""
                            : (
                                <FormErrorMessage fontSize='13px' color='#C33D3D' mt='3px'>Please enter Mobile Number</FormErrorMessage>
                            )}
                    </Box>
                </FormControl>
            </Box>
        </>
    )
}
