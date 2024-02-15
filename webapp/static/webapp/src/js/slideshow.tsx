import * as React from 'react';
import { Box, Container, Spinner, Stack, Image, Grid, GridItem,
         Text } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { myImages } from './data'
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { useApiProductsRetrieve } from '../../../../../OpenApi/openApiClientComponents';
import { apiProductsListQuery } from '../../../../../OpenApi/openApiClientFunctions';

export const loader =  (queryClient: QueryClient) => 
                        async ({params}: any) => {
                            const temp = {...apiProductsListQuery({queryParams: {id: params.productId}})}
                            const defaultOptions =  queryOptions({
                                    queryKey: temp['0'],
                                    queryFn: temp['1'],
                                    staleTime: 1000 * 60 * 2
                                });
                            return await queryClient.fetchQuery(defaultOptions)
                        }
function SlideShow() {
    const [index, setIndex] = React.useState(0);
    const { data, error, isLoading} = useApiProductsRetrieve({ pathParams: {id: 1}})

    function handleClick(e){
        if (index < myImages.length - 1){
            setIndex(index + 1);
        } else
            setIndex(0);
    }
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
    return(
        <Box w={["100%", "60%"]} position={'relative'} >
            <Text>{index + 1} of {myImages.length }</Text>
            <Image
                src={data.productImage} mt={4}
                alt={data.alt}/>
            <ArrowLeftIcon boxSize={6} onClick={handleClick} pos={'absolute'} top={'50%'}/>
            <ArrowRightIcon boxSize={6} onClick={handleClick} pos={'absolute'} top={'50%'} right={'2%'}/>
            <Text textAlign={'center'}>{data.name}</Text>
            <Grid gridTemplateColumns={'auto auto auto auto'} mt={2}>
                <GridItem onClick={handleClick} cursor={'pointer'}>
                    <Image src={data.productImage} width={'100%'}></Image>
                </GridItem>
                <GridItem onClick={handleClick} cursor={'pointer'}>
                    <Image src={data.productImage1} width={'100%'}></Image>
                </GridItem>
                <GridItem onClick={handleClick} cursor={'pointer'}>
                    <Image src={data.productImage2} width={'100%'}></Image>
                </GridItem>
                <GridItem onClick={handleClick} cursor={'pointer'}>
                    <Image src={data.productImage3} width={'100%'}></Image>
                </GridItem>
            </Grid>
        </Box>
    );
}
export default SlideShow;