import * as React from 'react'
import { HStack, Heading, Box, Stack, Text, Grid, GridItem, Badge } from '@chakra-ui/react'

function ProductDescription(props){
    return(
        <Stack w={'100%'} p={4} mt={4} bg='gray.100' h={400}>
            <Stack>
                <Heading size={['sm', 'lg', 'xl']}>Anywhere, Anytime Access:</Heading>
                <Text fontSize={[18, 20, 22]} mt={4}>
                    Whether you're at your desk or on the go, Hakikasoko is accessible through our website or mobile app. 
                    Embrace the flexibility of managing your business whenever and wherever you are.
                </Text>
                <Text fontSize={22}>
                Join Hakikasoko today and unlock a world of opportunities for your retail business. 
                Experience the future of B2B buying – seamless, secure, and tailored to your needs. 
                Don't miss out on the next big step for retailers and wholesalers alike!
                </Text>
            </Stack>
            <Grid w={800} templateColumns={'50% 50%'} gap={2} p={8} borderLeft={'4px black solid'}>
                <GridItem p={2}>
                    <Badge colorScheme='purple' variant={'outline'} fontSize={22}>200M +</Badge>
                    <Text mt={2}>Products</Text>
                </GridItem>
                <GridItem p={2}>
                    <Badge colorScheme='purple' variant={'outline'} fontSize={22}>200 K</Badge>
                    <Text mt={2}>Suppliers</Text>
                </GridItem>
                <GridItem p={2}>
                    <Badge colorScheme='purple' variant={'outline'} fontSize={22}>4, 800 +</Badge>
                    <Text mt={2}>Product categories</Text>
                </GridItem>
                <GridItem p={2}>
                    <Badge colorScheme='purple' variant={'outline'} fontSize={22}>20 +</Badge>
                    <Text mt={2}>Countries and Regions</Text>
                </GridItem>
            </Grid>
        </Stack>
    );
}
export { ProductDescription }