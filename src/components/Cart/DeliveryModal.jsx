import { Divider, Text, Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from '../../Pages/Cart/Cart.module.css'
import { BsBoxSeam, BsShop } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

export default function DeliveryModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Link onClick={onOpen} id={styles.deliveryOption}>Delivery Options</Link>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent pl="20px" pr="20px" borderRadius="none">
                    <ModalHeader fontSize="22px">Delivery Options</ModalHeader>
                    <ModalCloseButton fontSize="20px" />
                    <Divider />
                    <ModalBody letterSpacing="0.6px" lineHeight="23.4px">
                        <Text fontSize="13px" mb="30px">We offer the following shipment options for qualifying items on the "Shipping" page at checkout.</Text>
                        <Box display="flex" mb="20px">
                            <Box><BsBoxSeam fontSize={"28px"} /></Box>
                            <Box ml="20px">
                                <Heading fontSize="18px" fontWeight="500" mb="15px">Standard Shipping Services</Heading>
                                <Text fontSize="13px" mb="10px">We offer a number of shipping options to fit your needs. US orders only: AnthroPerks members enjoy 24/7 FREE shipping over $50!</Text>
                            </Box>
                        </Box>
                        <Box display="flex" mb="20px">
                            <Box><IoLocationOutline fontSize={"28px"} /></Box>
                            <Box ml="20px">
                                <Heading fontSize="18px" fontWeight="500" mb="15px">Anthro At Your Service: Store Pickup</Heading>
                                <Text fontSize="13px" mb="10px">Order Online & Pick Up for FREE</Text>
                            </Box>
                        </Box>
                        <Box display="flex" mb="20px">
                            <Box><BsShop fontSize={"28px"} /></Box>
                            <Box ml="20px">
                                <Heading fontSize="18px" fontWeight="500" mb="15px">Ship to a Collection Point</Heading>
                                <Text fontSize="13px" mb="10px">Enjoy delivery to a convenient Collection Point near you!</Text>
                            </Box>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
