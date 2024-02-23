import react, * as React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter,
        Button, ButtonGroup, Divider, Grid, GridItem, Box, Container, Spinner, HStack } from '@chakra-ui/react';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { Link as ReactRouterLink } from 'react-router-dom';
import { apiProductsListQuery } from '../../../../../OpenApi/openApiClientFunctions';
import { useApiProductsList } from '../../../../../OpenApi/openApiClientComponents';
export const loader =  (queryClient: QueryClient) => 
                        async ({params}: any) => {
                            const [queryKey, queryFn] = [...apiProductsListQuery({})]
                            const defaultOptions =  queryOptions({
                                    queryKey: queryKey,
                                    queryFn: queryFn,
                                    staleTime: 1000 * 60 * 2
                                });
                            return await queryClient.fetchQuery(defaultOptions)
                        }
function Product(props) {
    let myCardImgRef = React.useRef();
    let myCardBodyRef = React.useRef()
    function handleMouseEnter(e)
    {
        myCardImgRef.current.style.display = "none"
        myCardBodyRef.current.style.display = 'block'
    }
    function handleMouseLeave(e)
    {
        myCardImgRef.current.style.display = "block"
        myCardBodyRef.current.style.display = 'none'
    }
    return(
        <Card position="relative"   as={ReactRouterLink} to={`products/product/${props.id}`} maxWidth={['150px','200px']}  height={'100%'}>
            <CardBody display={['block']} minWidth={['100%', '200px']}>
                <Image ref={myCardImgRef} src={props.productImage} maxWidth={['100%', '200px',]} maxHeight={['200px', '200px']}  width={'100%'} />
                <Stack ref={myCardBodyRef} overflow={'wrap'} fontSize={[12, 14, 16]} >
                    <Heading size={['sm', 'sm', 'sm']} >{props.name}</Heading>
                    <Text overflow={'wrap'}>
                        {props.description}
                    </Text>
                    <HStack >
                        <Text>
                            {props.supplier}
                        </Text>
                        <Text color='blue.600' overflow={'wrap'}>
                            $ {props.price}
                        </Text>
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    );
}
function Product2(props) {
    let myCardImgRef = React.useRef();
    let myCardBodyRef = React.useRef()
    function handleMouseEnter(e)
    {
        myCardImgRef.current.style.display = "none"
        myCardBodyRef.current.style.display = 'block'
    }
    function handleMouseLeave(e)
    {
        myCardImgRef.current.style.display = "block"
        myCardBodyRef.current.style.display = 'none'
    }
    return(
        <Card position="relative"   as={ReactRouterLink} to={`product/${props.id}`} maxWidth={['150px','200px']}  height={'100%'}>
            <CardBody display={['block']} minWidth={['100%', '200px']}>
                <Image ref={myCardImgRef} src={props.productImage} maxWidth={['100%', '200px',]} maxHeight={['200px', '200px']}  width={'100%'} />
                <Stack ref={myCardBodyRef} overflow={'wrap'} fontSize={[12, 14, 16]} >
                    <Heading size={['sm', 'sm', 'sm']} >{props.name}</Heading>
                    <Text overflow={'wrap'}>
                        {props.description}
                    </Text>
                    <HStack >
                        <Text>
                            {props.supplier}
                        </Text>
                        <Text color='blue.600' overflow={'wrap'}>
                            $ {props.price}
                        </Text>
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    );
}
export default function Products(props) {
    const { data, isLoading, error } = useApiProductsList({})
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
    return (
        <Box>
                <Heading size={'lg'} mt={'0.5em'} textDecoration={'Highlight'}>Hakika Soko Product Catalog:</Heading>
                <Box width={'100%'} p={[4, 8]} gap={2} marginY={6} bg='green.200' display="flex" flexFlow={"row"} flexWrap={'wrap'} justifyContent={'center'}>
                    {data.map((result)=><Box key={result.id} ><Product {...result}  /></Box>)}
                </Box>
        </Box>
    );
}
function Products2(props) {
    const { data, isLoading, error } = useApiProductsList({})
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
    return (
        <Box>
                <Heading size={'lg'} mt={'0.5em'} textDecoration={'Highlight'}>Hakika Soko Product Catalog:</Heading>
                <Box width={'100%'} p={[4, 8]} gap={2} marginY={6} bg='green.200' display="flex" flexFlow={"row"} flexWrap={'wrap'} justifyContent={'center'}>
                    {data.map((result)=><Box key={result.id} ><Product2 {...result}  /></Box>)}
                </Box>
        </Box>
    );
}
export { Product, Products2 }