import * as React from 'react'
import { HStack, Heading, Stack, Text, Box, Badge, Flex } from '@chakra-ui/react'

function ProductDescription(props){
    return(
        <Flex w={'100%'} p={4} mt={4} bg='gray.100'  display={['column', 'row']} >
            <Flex display={["column", "row"]}>
                <Box>
                    <Heading size={['sm', 'lg', 'xl']}>Anywhere, Anytime Access:</Heading>
                    <Text fontSize={[18, 20, 22]} mt={4}>
                        Whether you're at your desk or on the go, Hakikasoko is accessible through our website or mobile app. 
                        Embrace the flexibility of managing your business whenever and wherever you are.
                    </Text>
                    <Text fontSize={[18, 20, 22]} mt={4}>
                    Join Hakikasoko today and unlock a world of opportunities for your retail business. 
                    Experience the future of B2B buying – seamless, secure, and tailored to your needs. 
                    Don't miss out on the next big step for retailers and wholesalers alike!
                    </Text>
                </Box>
                <Flex  flexWrap={'wrap'} gap={"0.2em"} p={'0.5em'} mt={'0.5em'} borderLeft={'0.2em black solid'}>
                    <Box p={2}>
                        <Badge colorScheme='purple' variant={'outline'} fontSize={22}>200M +</Badge>
                        <Text mt={2}>Products</Text>
                    </Box>
                    <Box p={2}>
                        <Badge colorScheme='purple' variant={'outline'} fontSize={22}>200 K</Badge>
                        <Text mt={2}>Suppliers</Text>
                    </Box>
                    <Box p={2}>
                        <Badge colorScheme='purple' variant={'outline'} fontSize={22}>4, 800 +</Badge>
                        <Text mt={2}>Product categories</Text>
                    </Box>
                    <Box p={2}>
                        <Badge colorScheme='purple' variant={'outline'} fontSize={22}>20 +</Badge>
                        <Text mt={2}>Countries and Regions</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}
export { ProductDescription }