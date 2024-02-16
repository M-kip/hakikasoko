import * as React from 'react'
import { Button, Heading, Stack, Text } from '@chakra-ui/react';
function SignupHero(){
    return(
        <Stack p={"0.5em"} mt={4} width={'100%'} bg='gray.200' height={350} justifyContent={'center'} alignItems={'center'}>
            <Heading size={'2xl'}>Ready to get started</Heading>
            <Text mt={4}>Explore millions of products from our, certified suppliers by signing up today.</Text>
            <Button as={'a'} href='accounts/signup' mt={2} colorScheme='blue' variant={'outline'}>Sign up</Button>
        </Stack>
    );
}
export { SignupHero }