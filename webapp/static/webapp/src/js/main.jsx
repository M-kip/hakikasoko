import * as React from 'react';
import { Box, Button, Flex, Grid, GridItem, Spacer} from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { JumbotronProducts } from './Jumbotron';
export default function Layout() {
    const navigate = useNavigate()
    return(
        <Box width={'100%'}>
            <Box display={'flex'} width={'100%'} flexDirection={'column'}>
                <Box >
                    <Button margin={'1em'} p={'1em'}  size={'sm'} colorScheme='green' onClick={(e)=>{e.preventDefault(), navigate(-1)}}>Back</Button>
                </Box>
                <Box >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}