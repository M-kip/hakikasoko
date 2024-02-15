import * as React from 'react';
import { Box, Heading, Text, Editable, EditablePreview, EditableInput, Button } from '@chakra-ui/react';

export default function Contact() {
    return(
    <Box bg='green.400' w={'100%'}  pl={8} pt={24} color={'black'} h={349} mt={12}>
        <Heading size={'md'} mt={2}>Subscribe</Heading>
        <Text mt={2}>To get the latest new and VIP deals.</Text>
        <Editable border={'2px solid black'} mt={2} width={300}>
            <EditablePreview />
            <EditableInput />
        </Editable>
        <Button colorScheme='red' size={'md'} mt={6}>Send</Button>
    </Box>
    );
}