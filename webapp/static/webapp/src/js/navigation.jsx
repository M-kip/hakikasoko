import * as React from 'react';
import { Box, Heading, Link, VStack, Menu, HStack, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa6';

export default function Navigation() {
    return(
        <HStack   marginX={4} paddingX={2} maxWidth={300} color={'black'} overflowX={'auto'} bg={'green.400'}>
            <HStack  >
                <Link p={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}> 
                 Shirts</Link>
                <Link p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>   Dresses</Link>
                <Menu p={2} mt={2} w={'100%'}> 
                <MenuButton as={'button'}
                                  _hover={{
                                    background: "grey",
                                  }} w={'100%'}>Jeans<Icon as={FaAngleDown} size={'lg'} ml={4} mx={6}/></MenuButton> 
                <MenuList marginLeft={3}>
                <MenuItem p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}> Skinny</MenuItem>
                <MenuItem p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>  Relaxed</MenuItem>
                <MenuItem p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>  Bootcut</MenuItem>
                <MenuItem p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>  Straight</MenuItem>
                </MenuList>
                </Menu>
                <Link p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>   Jackets</Link>
                <Link p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>   Gymwear</Link>
                <Link p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>   Blazers</Link>
                <Link p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>   Shoes</Link>
            </HStack>
                <Link p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>  Contact</Link> 
                <Link p={2} mt={2}  w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>  Newsletter</Link> 
                <Link p={2} mt={2} w={'100%'}
                  _hover={{
                    background: "grey",
                  }}>  Subscribe</Link>
        </HStack>
    );
}
