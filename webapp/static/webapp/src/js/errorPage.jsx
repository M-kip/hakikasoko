import * as React from 'react';
import { useRouteError } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

function ErrorPage(){
    const error = useRouteError();
    console.error(error)

    return(
        <Box marginX={100} w={"100%"} p={'0.2em'} textAlign={'center'}>
            <Heading>Oops</Heading>
            <Text>Sorry, an unexpected error as occurred</Text>
            <Text>{ error.statusText || error.message }</Text>
        </Box>
    );

}
export default ErrorPage;