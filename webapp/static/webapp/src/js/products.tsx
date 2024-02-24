import react, * as React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter,
        Button, ButtonGroup, Divider, Grid, GridItem, Box, Container, Spinner, HStack, 
        Flex} from '@chakra-ui/react';
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
        <Card position="relative"   as={ReactRouterLink} to={`products/product/${props.id}`} width={'100%'} height={'100%'}>
            <CardBody>
                <Image ref={myCardImgRef} src={props.productImage} />
                <Stack ref={myCardBodyRef} overflow={'wrap'} fontSize={[12, 14, 16]} >
                    <Heading textTransform={'uppercase'} size={['sm', 'sm', 'sm']} >{props.name}</Heading>
                    <HStack>
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
        <Card  position="relative"   as={ReactRouterLink} to={`product/${props.id}`} maxWidth={['100%','200px']}  height={'100%'}>
            <CardBody >
                <Image ref={myCardImgRef} src={props.productImage} />
                <Stack ref={myCardBodyRef} overflow={'wrap'} fontSize={[12, 14, 16]} >
                    <Heading textTransform={'uppercase'} size={['sm', 'sm', 'sm']} >{props.name}</Heading>
                    <HStack >
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
        <Box width={'100%'}>
                <Heading size={'lg'} mt={'0.5em'} textDecoration={'Highlight'}>Hakika Soko Product Catalog:</Heading>
                <Grid templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)','repeat(4, 1fr)', 'repeat(6, 1fr)']} width={'100%'} p={[2, 4]} gap={2} marginY={6} bg='green.200' >
                    {data.map((result)=><GridItem width={'100%'} key={ result.id }><Product {...result}  /></GridItem>)}
                </Grid>
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
                <Heading size={'sm'} mt={'0.5em'} textDecoration={'Highlight'} textTransform={'uppercase'}>Hakika Soko Product Catalog:</Heading>
                <Grid templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)']} width={'100%'} p={[2, 4]} gap={2} marginY={6} bg='green.200' >
                    {data.map((result)=><GridItem width={'100%'} key={ result.id }><Product2 {...result}  /></GridItem>)}
                </Grid>
        </Box>
    );
}
export { Product, Products2 }