import * as React from 'react'
import { Box, Button, Flex, Grid, GridItem, Heading, Spacer, Container, Spinner, Text, Stack } from '@chakra-ui/react';
import { Product } from './products';
import { useApiProductsList } from '../../../../../OpenApi/openApiClientComponents';

function ProductShowCase(props){
    const { data, isLoading, error } = useApiProductsList({})
    if(data)
        return(
            <Box bg='gray.200' width={'100%'}  p={4} mt={2} >
                <Heading mt={8}>Discover your next business opportunity</Heading>
                <Grid  templateRows='repeat(2, 1fr)' gridTemplateColumns='repeat(4, 1fr)' mt={4} width={'100%'} gap={2} justifyContent={'center'} h={800}>
                    <GridItem bg={'white'}  rowSpan={2} colSpan={1} >
                        <Flex mt={2} p={2} alignItems={'center'}>
                            <Heading size={'sm'}>Top Selling</Heading>
                            <Spacer />
                            <Button colorScheme='blue' variant={'outline'}>View More</Button>
                        </Flex>
                        <Product {...data[0]}/>
                    </GridItem>
                    <GridItem  colSpan={1} rowSpan={1} bg='white'>
                        <Flex mt={2} p={2} alignItems={'center'}>
                            <Heading size={'sm'}>New Arrivals</Heading>
                            <Spacer />
                            <Button colorScheme='blue' variant={'outline'}>View More</Button>
                        </Flex>
                        <Product {...data[1]} />
                    </GridItem>
                    <GridItem  colSpan={2} rowSpan={1} bg='white'>
                        <Flex mt={2} p={2} alignItems={'center'}>
                            <Heading size={'sm'}>Discounts</Heading>
                            <Spacer />
                            <Button colorScheme='blue' variant={'outline'}>View More</Button>
                        </Flex>
                        <Flex gap={2}>
                            <Product {...data[2]} />
                            <Product {...data[3]} />
                        </Flex>
                    </GridItem>
                    <GridItem  bg='white' colSpan={3} rowSpan={1} overflowY={'hidden'}>
                        <Flex alignItems={'center'}>
                            <Heading size={'sm'}>Weekly Top Rankings</Heading>
                            <Spacer />
                            <Button colorScheme='blue' variant={'outline'}>View More</Button>
                        </Flex>
                        <Product {...data[4]} />
                    </GridItem>
                </Grid>
            </Box>
        );
    if(error){
            return(
                <Box>
                    <Text>{error.message}</Text>
                </Box>
            );
        }
    if(isLoading){
            return(
                <Container>
                    <Stack><Spinner size={'sm'} /></Stack>
                </Container>
            );
        }
}
export { ProductShowCase}