import * as React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

function Mission(){
    return(
        <Stack w={1080} marginX={100} h={438} bg={'green.50'} color={'black'} p={6} textAlign={'center'} mt={6}>
            <Heading mt={100}>Mission</Heading>
            <Text>
                To empower business and consumers in Tanzania through a unified and accessible
                platform.
            </Text>
        </Stack>
    );
}
export default Mission;