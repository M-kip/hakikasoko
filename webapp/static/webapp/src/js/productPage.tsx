import * as React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Header from './header';
import Footer from './footer';
import SlideShow from './slideshow';

export function ProductDetail(){
    return(
        <Box >
            <SlideShow />
        </Box>
    );
}