import * as React from 'react';
import { Box, Stack, Text, Heading, Image, HStack, Link} from '@chakra-ui/react'
import { Jumbo } from './data';
import gsap, { Bounce, Elastic, Power0 } from 'gsap';

export function JumbotronProducts() {
    return(
        <Box my={2}>
            <Image src='static/hakika-soko-web1.jpg' w={"100%"}/>
        </Box>
    );
}
function Jumbotron() {
    let jumboRef = React.useRef()
    React.useLayoutEffect(() =>{
        gsap.fromTo(jumboRef.current, {duration: 3, scale: 0.5, opacity: 0}, {duration: 3, scale: 1.0, ease: Power0, opacity: 1})
    },[])
    return(
        <Box ref={jumboRef} textAlign={'center'} backgroundImage={Jumbo.img.url} backgroundPosition={'center'} fontSize={18}
         w={'100%'}  position={'relative'} backgroundSize={'cover'} color={'white'}>
            <Stack p={4} background='blackAlpha.500' w={'100%'} h={'100%'} >
                <Heading mt={'2em'}>{ Jumbo.title}</Heading>
                <Text>{Jumbo.description}</Text>
                <HStack marginX={'auto'} p={4}>
                    <Link bg='blue'p={4} cursor={'pointer'} href='products/'>Shop with us</Link>
                    <Link bg='blue'p={4} cursor={'pointer'} href='accounts/signup'>Create Virtual Shop</Link>
                </HStack>
            </Stack>
        </Box>
    );
}
export default Jumbotron;