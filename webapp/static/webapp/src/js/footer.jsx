import * as React from 'react';
import { Grid,GridItem, Heading, Text, Button, VStack, Link,
    Editable, EditableInput, EditablePreview, Icon } from '@chakra-ui/react';
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaEnvelope, FaLocationPin, FaPhone} from 'react-icons/fa6';
function Footer(){
    return(
        <Grid gridTemplateColumns={'33.33% 33.33% 33.33%'} w={'100%'} h={'auto'}
            gridTemplateRows={'100%'} padding={6} mt={8} bg='blackAlpha.800'  color={'white'} fontWeight={'inherit'} fontSize={'inherit'}>
            <GridItem >
                <Heading size={'md'} textAlign={'center'}>Contact</Heading>
                <Text textAlign={'center'}>Any ? Questiond Ask</Text>
                <form>
                    <Editable border={'2px solid grey'} mt={4}
                        defaultValue='Name'>
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                    <Editable border={'2px solid grey'} mt={4}
                        defaultValue='Email'>
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                    <Editable border={'2px solid grey'} mt={4}
                        defaultValue='Subject'>
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                    <Editable border={'2px solid grey'} mt={4}
                        defaultValue='Message'>
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                    <Button w={'100%'} size={'md'} mt={4} colorScheme='blue'>send</Button>
                </form>
            </GridItem>
            <GridItem>
                <Heading size={'md'} textAlign={'center'}>About</Heading>
                <VStack mt={4} w={'100%'}>
                    <Link href="#">We're hiring</Link>
                    <Link href="#">Support</Link>
                    <Link href="#">Find store</Link>
                    <Link href="#">Shipment</Link>
                    <Link href="#">Payment</Link>
                    <Link href="#">Gift card</Link>
                    <Link href="#">Return</Link>
                    <Link href="#">Help</Link>
                </VStack>
            </GridItem>
            <GridItem>
                <Heading size={'md'} textAlign={'center'}>Store</Heading>
                <VStack mt={4} w={'100%'} ml={4}>
                    <Text><Icon as={FaLocationPin} mr={4} />Hakika Soko</Text>
                    <Text><Icon as={FaPhone} mr={4}/>0746172559</Text>
                    <Text><Icon as={FaEnvelope} mr={4}/>info@hakikasoko.com</Text>
                    <Heading size={'sm'} mt={4}>We Accept</Heading>
                    <Text><Icon as={FaCcVisa} mr={4}/>Visa</Text>
                    <Text><Icon as={FaCcMastercard} mr={4}/>Master Card</Text>
                    <Text><Icon as={FaCcPaypal} mr={4}/>PayPal</Text>
                </VStack>
            </GridItem>
            <GridItem  w={'100%'} colSpan={3} >
                <Text textAlign={'center'} color={'whitesmoke'}  >Powered by Hakika Soko 2023</Text>
            </GridItem>
        </Grid>
    );
}
export default Footer;