import { Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'

export default function Checkout() {

    useEffect(() => {
        document.title = "Shipping | Anthropologie"
    }, [])

    return (
        <div>
            <Heading>Checkout</Heading>
        </div>
    )
}
