import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Box, Image, Flex, Text } from "@chakra-ui/react"

interface StoreItemProps  {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}


function StoreItem(props: StoreItemProps) {
    const quantity = 0;
    return (
        <Box>
            <MaxWidthWrapper>
                {

                }
                <Box
                    display="flex"
                    // alignItems="center"
                    flexDirection="column"
                    bg="#f6f6f6"
                    width="500px"
                    height="400px"
                >
                    <Box
                        width="100%"
                        height="200px"
                    >
                        <Image src={props.imgUrl} width='100%' height="100%" alt="img" />
                    </Box>
                    <Flex
                        justifyContent="space-between"
                        px="15px"
                        mt="25px"
                        fontSize="25px"
                        fontWeight="bold"
                    >
                        <Text>{props.name}</Text>
                        <Text>{props.price}</Text>
                    </Flex>

                    {
                        quantity === 0 ? 
                        (
                            <>
                            <Flex
                            alignItems="center"
                            justifyContent="center"
    
                        >
                            <Box
                            width="160px"
                            height="20px"
                            bg="blue"
                            color="white"
                            textAlign="center"
                            p="10px"
                            cursor="pointer"
                            >
                                + Add To Cart
                            </Box>
                        </Flex>
                                </>
                        ):(
                            <>
                            
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        gap="4"
                    >
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            width="30px"
                            height="25px"
                            bg="blue"
                            color="white"
                            cursor="pointer"
                        >
                            -
                        </Flex>
                        <Text>
                            <span>{quantity}</span> in cart
                        </Text>
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            width="30px"
                            height="25px"
                            bg="blue"
                            color="white"
                            cursor="pointer"
                        >
                            +
                        </Flex>
                    </Flex>
                    <Flex
                        alignItems="center"
                        justifyContent="center"

                    >
                        <Box
                        width="70px"
                        height="20px"
                        bg="red"
                        color="white"
                        textAlign="center"

                        >
                            Remove
                        </Box>
                    </Flex>
                    </>
                        )
                    }




                </Box>
            </MaxWidthWrapper>
        </Box>
    )
}
export default StoreItem;