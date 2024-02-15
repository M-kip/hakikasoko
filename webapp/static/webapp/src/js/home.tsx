import * as React from 'react';
import { Box, Container} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Jumbotron, { JumbotronProducts } from './Jumbotron';
import Contact from './contact';
import { MarketDescription } from './introduction';
import { ProductDescription } from './introduction2';
import { CategoryCarousel } from './categoryCarousel';
import { ProductShowCase } from './productShowCase';
import { SignupHero } from './signupHero';
import  Products  from './products';
import { useApiProductsList } from '../../../../../OpenApi/openApiClientComponents';
import { apiCategoriesListQuery } from '../../../../../OpenApi/openApiClientFunctions';
import { QueryClient, queryOptions} from '@tanstack/react-query';

export const loader =  (queryClient: QueryClient) => 
                        async ({params}: any) => {
                            const temp = {...apiCategoriesListQuery({})}
                            const defaultOptions =  queryOptions({
                                    queryKey: temp['0'],
                                    queryFn: temp['1'],
                                    staleTime: 1000 * 60 * 2
                                });
                            return await queryClient.fetchQuery(defaultOptions)
                        }
export default function Home(){
    return(
        <Container color={'BlackAlpha.900'}  maxW={1280} fontWeight='semibold' >
            <Jumbotron />
            <ProductDescription />
            <Products />
            <SignupHero />
            <Contact />
        </Container>
    );
}