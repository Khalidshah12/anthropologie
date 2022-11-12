import { Box, Button, Divider, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import styles from '../../Pages/Checkout/Checkout.module.css'

export default function SearchModal(props) {
    const { isError, isSearchLoading, HandleSearch } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const isSearchError = input === ''
    
    const handleInputChange = (e) => setInput(e.target.value)
    const HandleLoading = () => {
        if (!isSearchError) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                onOpen()
            }, 1000);
        }
    }

    return (
        <Box w="100%">
            <Button w='100%'
                cursor={!isError ? 'pointer' : 'default'}
                backgroundColor={!isError ? '#4B5666' : "rgb(206, 206, 206)"}
                color={"white"}
                borderRadius=''
                h='45px'
                _hover={{
                    backgroundColor: !isError ? "white" : "none",
                    border: !isError ? "1px solid black" : "none",
                    color: !isError ? "#4B5666" : "white"
                }}
                isLoading={isSearchLoading}
                colorScheme='teal'
                variant='outline'
                spinnerPlacement='start'
                onClick={() => HandleSearch(onOpen)}
            >SEARCH</Button>
            <Modal size='xl' onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent borderRadius="none">
                    <ModalHeader fontSize="22px" m='auto'>Find a Pickup Location</ModalHeader>
                    <ModalCloseButton fontSize="20px" />
                    <ModalBody letterSpacing="0.6px" lineHeight="23.4px">
                        <Box>
                            <Text width='100%' textAlign='center' mb='20px' fontSize="13px">Locate a store or a Collection Point near you</Text>
                            <FormControl isInvalid={isSearchError}>
                                <Box>
                                    <Divider />
                                    <Box width='80%' m='auto'>
                                        <FormLabel fontSize='13px' fontWeight='normal'>City or ZIP Code*</FormLabel>
                                        <Input mb={!isSearchError ? "15px" : ""} id={styles.searchModalInputs} h='45px' borderRadius='' variant='' w='100%' type='email' value={input} onChange={handleInputChange} />
                                        {!isSearchError ? "" : (
                                            <FormErrorMessage mb="10px" fontSize='13px'>Please enter City or ZIP Code</FormErrorMessage>
                                        )}
                                    </Box>
                                    <Box width='80%' m='auto'>
                                        <FormLabel fontSize='13px' fontWeight='normal'>Distance*</FormLabel>
                                        <Select id={styles.searchSelectMi} w='100%' variant=''>
                                            <option value="">25mi.</option>
                                            <option value="">50mi.</option>
                                        </Select>
                                    </Box>
                                    <Box width='80%' m='auto'>
                                        <Button w='100%'
                                            cursor={!isSearchError ? 'pointer' : 'default'}
                                            backgroundColor={!isSearchError ? '#4B5666' : "rgb(206, 206, 206)"}
                                            color={"white"}
                                            borderRadius=''
                                            h='45px'
                                            _hover={{
                                                backgroundColor: !isSearchError ? "white" : "none",
                                                border: !isSearchError ? "1px solid black" : "none",
                                                color: !isSearchError ? "#4B5666" : "white"
                                            }}
                                            colorScheme='teal'
                                            variant='outline'
                                            isLoading={isLoading}
                                            spinnerPlacement='start'
                                            mt='15px'
                                            mb='15px'
                                            onClick={HandleLoading}
                                        >SEARCH</Button>
                                        <Text fontSize='13px' mb='25px'>
                                            {!isLoading
                                                ? "No results for 425305. Not all items are available for a pickup location within your search criteria.vTry searching a greater distance or select standard shipping services instead."
                                                : ""
                                            }
                                        </Text>
                                    </Box>
                                </Box>
                            </FormControl>
                        </Box>
                    </ModalBody >
                </ModalContent >
            </Modal >
        </Box >
    )
}
