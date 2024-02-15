import { Box, Center, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import * as React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaBowlFood, FaCar, FaDumbbell, FaHospital, FaIndustry, FaSchool, FaScrewdriverWrench, FaShirt, FaSpoon, FaTrowel, FaTruck, FaTv} from 'react-icons/fa6';
function CategoryCarousel(){
    return(
        <Box width={'100%'} p={4} height={400}  mt={4} bg='green.300'>
            <Flex direction='row' gap={6} justify='center' wrap='wrap' alignItems='center'>
                <Center borderRadius={'50%'} border={'2px black solid'} width={160} height={160} as={ReactRouterLink} to={`products`}>
                    <Stack>
                        <Icon as={FaIndustry} boxSize={8} marginX={'auto'}/>
                        <Text align={'center'} >Industries</Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'} width={160} height={160}>
                    <Stack>
                        <Icon as={FaCar} boxSize={8} marginX={'auto'}/>
                        <Text>Automotive </Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'} width={160} height={160}>
                    <Stack justifyContent={'center'}>
                        <Icon as={FaScrewdriverWrench} boxSize={8} marginX={'auto'}/>
                        <Text>Hardware</Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'} width={160} height={160}>
                    <Stack>
                        <Icon as={FaTv} boxSize={8} marginX={'auto'}/>
                        <Text>Home Appliances</Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'} width={160} height={160}>
                    <Stack>
                        <Icon as={FaTrowel} boxSize={8} marginX={'auto'}/>
                        <Text>Constraction</Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'} width={160} height={160}>
                    <Stack>
                        <Icon as={FaDumbbell} boxSize={8} marginX={'auto'}/>
                        <Text>Sports Equipment</Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'}  width={160} height={160}>
                    <Stack>
                        <Icon as={FaBowlFood} boxSize={8} marginX={'auto'}/>
                        <Text textAlign={'center'}>Food & Beaverages</Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'}  width={160} height={160}>
                    <Stack>
                        <Icon as={FaShirt} boxSize={8} marginX={'auto'}/>
                        <Text>Apparels</Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'}  width={160} height={160}>
                    <Stack>
                        <Icon as={FaTruck} boxSize={8} marginX={'auto'} />
                        <Text>Transportation</Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'}  width={160} height={160}>
                    <Stack>
                        <Icon as={FaSchool} boxSize={8} marginX={'auto'} />
                        <Text textAlign={'center'}>School & Office Supplies</Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'}  width={160} height={160}>
                    <Stack>
                        <Icon as={FaHospital} boxSize={8} marginX={'auto'} />
                        <Text textAlign={'center'}>Hostpital & Lab Supplies</Text>
                    </Stack>
                </Center>
                <Center borderRadius={'50%'} border={'2px black solid'}  width={160} height={160}>
                    <Stack>
                        <Icon as={FaSpoon} boxSize={8} marginX={'auto'}/>
                        <Text textAlign={'center'}>Kitchen Ware</Text>
                    </Stack>
                </Center>
            </Flex>
        </Box>
    );
}
export { CategoryCarousel}