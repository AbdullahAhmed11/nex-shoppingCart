import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Box, Image, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import StoreItem from "@/components/StoreItem";
import StoreItems from "../data/items.json"
function Store() {
    return (
        <Box>
            <MaxWidthWrapper>
                <Grid templateColumns='repeat(2, 1fr)' gap={4} >
                    {
                        StoreItems.map((item) => (
                        <GridItem key={item.id} mb="10px">
                            <StoreItem {...item}/>
                        </GridItem>
                        ))
                    }
                </Grid>
            </MaxWidthWrapper>
        </Box>
    )
}
export default Store;