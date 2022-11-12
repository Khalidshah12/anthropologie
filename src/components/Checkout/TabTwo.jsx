import { Box, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../../Pages/Checkout/Checkout.module.css'
import SearchModal from './SearchModal'
import { MdBlockFlipped } from 'react-icons/md'


export default function TabTwo(props) {
    const {
        isError,
        input,
        handleInputChange,
        HandleSearch,
        isSearchLoading
    } = props
    return (
        <>
            <Box>
                <Heading fontSize="18px" fontWeight="400" mb='15px'>Find a Pickup Location</Heading>
                <Box>
                    <Text fontSize="13px" mb="15px">Locate a store or a Collection Point near you:</Text>
                    <Box display='flex' alignItems="center" mb='20px'>
                        <MdBlockFlipped color='#A5642D' fontSize="30px" />
                        <Text color='#A5642D' fontSize="13px" ml='7px'>Sorry – gift wrap is unavailable with Store Pickup and Collection Point orders.</Text>
                    </Box>
                    <Box>
                        <FormControl isInvalid={isError}>
                            <Box display='flex' justifyContent='space-between' w='100%'>
                                <Box w='32%'>
                                    <FormLabel fontSize='13px' fontWeight='normal'>City or ZIP Code*</FormLabel>
                                </Box>
                                <Box w='32%'>
                                    <FormLabel fontSize='13px' fontWeight='normal'>Distance*</FormLabel>
                                </Box>
                                <Box w='32%'>
                                    <FormLabel></FormLabel>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent='space-between'>
                                <Box width='32%'>
                                    <Input className={styles.inputs} h='45px' borderRadius='' variant='' w='100%' type='email' value={input} onChange={handleInputChange} />
                                    {!isError ? "" : (
                                        <FormErrorMessage fontSize='13px'>Please enter City or ZIP Code</FormErrorMessage>
                                    )}
                                </Box>
                                <Box width='32%'>
                                    <Select id={styles.selectMi} w='100%' variant=''>
                                        <option value="">25mi.</option>
                                        <option value="">50mi.</option>
                                    </Select>
                                </Box>
                                <Box width='32%'>
                                    <SearchModal
                                        isError={isError}
                                        isSearchLoading={isSearchLoading}
                                        HandleSearch={HandleSearch}
                                    />
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
