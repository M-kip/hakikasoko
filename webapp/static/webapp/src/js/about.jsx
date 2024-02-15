import * as React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';
function About(){
    return(
        <Stack w={1080} marginX={100} h={438} bg={'green.50'} color={'black'} p={6} textAlign={'center'} mt={6}>
            <Heading mt={100}>What is Hakika</Heading>
            <Text>Our company aims to launch a cutting edge Unified B2B
                and B2C e-commerce website in Tanzania, catering to the diverse needsof business and consumers.
                The platform will provide a seamless online marketplace, fostering a digital ecosystem for efficient
                trade and commerce.
            </Text>
        </Stack>
    );
}
export default About;