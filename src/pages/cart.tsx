import React from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import ShoppingCart from "@/components/ShoppingCart";
import StoreItems from "../data/items.json"
import { Flex } from "@chakra-ui/react";


function Cart () {
    const {cartItems} = useShoppingCart()
    return (
        <>
        <div>
            {
                cartItems.map(item => (
                    <ShoppingCart key={item.id} {...item} />
                    ))
                }
        </div>
        <Flex
            alignItems="center"
            justifyContent="center"
            fontSize="30px"
            mb="30px"
            fontWeight="bold"
        >
            Total : {" "}
                {
                    cartItems.reduce((total, ShoppingCart) => {
                        const item = StoreItems.find(i => i.id === ShoppingCart.id)
                        return total + (item?.price || 0) * ShoppingCart.quantity

                    },0)
                }
                $
            </Flex>
                </>
    )
}
export default Cart;