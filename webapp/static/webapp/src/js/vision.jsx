import * as React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

function Vision(){
    return(
        <Stack w={1080} marginX={100} h={438} bg={'green.50'} color={'black'} p={6} textAlign={'center'} mt={6}>
            <Heading mt={100}>Vision</Heading>
            <Text>
                To become the go-to online marketplace, connecting buyers and sellers across B2B and B2C sectors
            </Text>
        </Stack>
    );
}
export default Vision;