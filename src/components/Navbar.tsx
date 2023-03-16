import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import {AiOutlineShoppingCart} from "react-icons/ai";

function Navbar() {

const NAV_LINKS = [
    {
        link: "Home",
        href: "/",
    },
    {
        link: "Store",
        href: "/store",
    },
    {
        link: "About",
        href: "/about",
    },
]
    return (
        <Box 
        >
            <MaxWidthWrapper>
            <Flex
                alignItems="center"
                justifyContent="space-between"
                py="20px"
                px="40px"
            >
                <Flex
                    
                >
                    {
                        NAV_LINKS.map((x) => {
                            return (
                                <Box as={Link} key={x.link} href={x.href} legacyBehavior>
                                    <Text 
                                        color="black"  
                                        px="20px"
                                        cursor="pointer"
                                    >
                                            {x.link}
                                    </Text>
                                </Box>
                            )
                        })
                    }
                </Flex>
                <Flex>
                    <Box
                        bg="blue"
                        width="50px"
                        height="50px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        rounded="50%"
                        flexDirection="column"
                    >
                            <AiOutlineShoppingCart color="white" fontSize="20px"/>
                    </Box>
                    <Box
                        width="25px"
                        height="25px"
                        rounded="50%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        ml="-10px"
                        bg="red"
                        color="white"
                        mt="30px"
                        
                    >
                        1
                    </Box>
                </Flex>
            </Flex>
            </MaxWidthWrapper>
        </Box>
    )
}
export default Navbar;