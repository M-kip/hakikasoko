import * as React from 'react';
import { Box, Heading,Stack, Spinner, Container, Link, VStack, Spacer, Menu, MenuButton, MenuList, MenuItem, Icon, Image, Button } from '@chakra-ui/react';
import { FaAddressBook, FaBusinessTime, FaDiscourse, FaFaucetDrip, FaPersonRifle, FaShop} from 'react-icons/fa6'
import { Power0, Power1, gsap } from 'gsap';
import { Link as ReactRouterLink, NavLink } from 'react-router-dom';
import { useApiCategoriesList } from '../../../../../OpenApi/openApiClientComponents';

export default function Header(props) {
    const {data, error, isLoading} = useApiCategoriesList({})
    let myRef = React.useRef();
    React.useLayoutEffect(() => {
        gsap.from(myRef.current, {duration:1, repeat: -1, x: 30, yoyo: true, ease: Power1})
    });
    if(error){
        return(
            <Box>
                <Text>{error.message}</Text>
            </Box>
        );
    }
    if(isLoading){
        return(
            <Container>
                <Stack><Spinner size={'sm'} /></Stack>
            </Container>
        );
    }
    return(
        <Box  fontSize={18} width={'100%'}>
            <VStack marginX={6}>
                <Image src='static/Hakika_logo_blk.png' h={100} w={120}  ref={myRef} />
                <Spacer />
                <Menu _hover={{ background: 'grey'}} p={4} borderRadius={4}>
                    <MenuButton w="100%" as={Button}><Icon as={ FaBusinessTime} size={'lg'} mr={2}/>B2B</MenuButton>
                    <MenuList>
                        {data.map((obj)=><MenuItem key={obj.id} as={ReactRouterLink} to={`products`} >{obj.name}</MenuItem>)}
                    </MenuList>
                </Menu>
                <Menu as={ReactRouterLink} _hover={{ background: 'grey'}} p={4} borderRadius={4}>
                    <MenuButton as={Button}><Icon as={FaShop} size={'lg'} mr={2} />E-Shop</MenuButton>
                    <MenuList>
                        <MenuItem>Home Decor</MenuItem>
                        <MenuItem>Industrial</MenuItem>
                        <MenuItem>Health Care & Personal Care</MenuItem>
                        <MenuItem>Fashion & Beauty</MenuItem>
                        <MenuItem>Sports & Entertainment</MenuItem>
                        <MenuItem>Tools and Home Improvement</MenuItem>
                    </MenuList>
                </Menu>
                <Link as={ReactRouterLink} _hover={{ background: 'grey'}} p={2} borderRadius={4}><Icon as={FaShop} size={'md'} mr={2} />Retailers</Link>
                <Menu as={ReactRouterLink} _hover={{ background: 'grey'}} p={2} borderRadius={4}>
                    <MenuButton as={Button}><Icon as={FaDiscourse} size={'lg'} mr={2} />Directories</MenuButton>
                    <MenuList>
                        <MenuItem>Healthcare clinics</MenuItem>
                        <MenuItem>Steelmills</MenuItem>
                        <MenuItem>Tourist services</MenuItem>
                        <MenuItem>Industries</MenuItem>
                        <MenuItem>Lawfirms and advocates</MenuItem>
                        <MenuItem>Cargo services</MenuItem>
                        <MenuItem>Transporting companies</MenuItem>
                    </MenuList>
                </Menu>
                <Link as={ReactRouterLink} _hover={{ background: 'grey'}} p={2} borderRadius={4}><Icon as={ FaFaucetDrip} size={'lg'} mr={2} />Auction</Link>
                <Link as={ReactRouterLink} _hover={{ background: 'grey'}} p={2} borderRadius={4}><Icon as={ FaAddressBook} size={'lg'} mr={2}  />About</Link>
                <Link as={ReactRouterLink} _hover={{ background: 'grey'}} p={2} borderRadius={4}><Icon as={ FaAddressBook} size={'lg'} mr={2}  />Hotel</Link>
                <Spacer />
                <Menu as={ReactRouterLink} _hover={{ background: 'grey'}} p={2} borderRadius={4}>
                    <MenuButton as={Button}><Icon as={ FaPersonRifle } size={'lg'} mr={2}/>Profile</MenuButton>
                    <MenuList>
                        <MenuItem>Dashbord</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Cart</MenuItem>
                        <MenuItem>Security</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </VStack>
        </Box>        
    );
}