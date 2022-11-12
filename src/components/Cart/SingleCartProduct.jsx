import React from 'react'
import { Box, Button, Text, Image, RadioGroup, Stack, Radio } from '@chakra-ui/react'
import { ImGift } from 'react-icons/im'
import styles from '../../Pages/Cart/Cart.module.css'

export default function SingleCartProduct({ item, HandleQuantity, HandleRemove, HandleSaveForLater, HandleGiftWrap, openGift }) {
    return (
        <Box className={styles.productsDiv} key={item.id}>
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
                        <Text id={styles.productEdit}>Edit</Text>
                        <Box className={styles.productQuantityMobile}>
                            <select className={styles.productQuantitySelect} onChange={(e) => HandleQuantity(e, item.id, item.price)}>
                                <option>{item.quantity}</option>
                                <option disabled></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </Box>
                    </Box>
                    <Box className={styles.productsDetail}>
                        <Text className={styles.productPrice}>${item.price}</Text>
                    </Box>
                    <Box className={styles.productsDetail}>
                        <Box className={styles.productQuantityFull}>
                            <select className={styles.productQuantitySelect} onChange={(e) => HandleQuantity(e, item.id, item.price)}>
                                <option>{item.quantity}</option>
                                <option disabled></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </Box>
                    </Box>
                    <Box className={styles.productsDetailTotalPrice}>
                        <Text className={styles.productTotalPrice}>${item.totalprice}</Text>
                    </Box>
                </Box>
                <Box className={styles.removeSaveDiv}>
                    <Text className={styles.remove} onClick={() => HandleRemove(item.id)}>Remove</Text>
                    <Text className={styles.removeBorder}>|</Text>
                    <Text className={styles.save} onClick={() => HandleSaveForLater(item.id)}>Save for Later</Text>
                </Box>
                <Box className={styles.giftDiv}>
                    <ImGift fontSize={"24px"} color="#167A92" />
                    <Text className={styles.giftText} onClick={() => HandleGiftWrap(item.id)}>Add Gift Wrap</Text>
                </Box>
                {/* {openGift} */}
                <Box display='none' mb='20px'>
                    <Box>
                        <RadioGroup defaultValue="4" mb='20px'>
                            <Stack direction='column'>
                                <Radio value='4'><Text fontSize="13px">Gift Wrapped & Ready (includes: pre-assembled box, tissue, sticker, and your gift message) $4.00</Text></Radio>
                                <Radio value='2'><Text fontSize="13px">DIY Gift Wrap Kit (includes: gift bag, tissue, sticker, and your gift message) $2.00</Text></Radio>
                            </Stack>
                        </RadioGroup>
                        <Box display="flex" alignItems='center'>
                            <Button
                                backgroundColor="#FDFDF9"
                                border='1px solid black'
                                borderRadius='none'
                                w='60'
                                fontSize='13px'
                                letterSpacing='2.4px'
                                fontWeight='normal'
                            >
                                SAVE
                            </Button>
                            <Text ml='20px' textDecoration="underline" color='#167A92'>Cancel</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Image src='https://images.urbndata.com/is/image/Anthropologie/30433643_one_b?$thumb128x198$' />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
