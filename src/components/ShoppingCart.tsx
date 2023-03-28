import React from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import StoreItems from "../data/items.json"
import { Box, Flex, Image,Text } from "@chakra-ui/react";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface CartItemProps {
    id: number
    quantity: number
}


function ShoppingCart({id,quantity}: CartItemProps) {
    const {cartItems, removeFromCart} = useShoppingCart()
    const item = StoreItems.find(i => i.id === id)
    if(item === null) return null
    return (
        <MaxWidthWrapper>

            <Flex
                alignItems="center"
                mb="20px"
                gap="50px"
            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    >
                    <Image 
                        mr="20px"
                        src={item?.imgUrl} 
                        width="225px" 
                        height="150px" 
                        alt="cover"
                        />
                    <Box
                        display="flex"
                        flexDirection="column"
                    >
                    <Text>name: {item?.name}</Text>
                    <Text>Peaces: {quantity}</Text>
                    <Text> Price: {item?.price}</Text>
                    </Box>
                </Flex>
                <Flex>
{                    item? (
                    <Text>Total Price: {item.price * quantity}</Text>
                    ) :(
                        null
                    )}
                </Flex>
                <Flex
                        alignItems="center"
                        justifyContent="center"
                >
                    <Box
                        width="25px"
                        height="25px"
                        bg="#000"
                        color="#fff"
                        fontSize="25px"
                        onClick={() =>removeFromCart(id)}
                        alignItems="center"
                        justifyContent="center"
                        display="flex"
                    >

                    x
                    </Box>
                </Flex>
            </Flex>

        </MaxWidthWrapper>
    )

}
export default ShoppingCart;