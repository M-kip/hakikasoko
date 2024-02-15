import * as React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { myImages } from './data'

function Carosel() {
    const [index, setIndex] = React.useState(0);

    function handleClick(e){
        if (index < myImages.length - 1){
            setIndex(index + 1);
        } else
            setIndex(0);
    }
    let image = myImages[index];
    return(
        <Box w={['100%', '50%']} marginX={100} marginY={20} position={'relative'}   overflowX={'hidden'}>
            <Heading  textAlign={'center'}>Deals of the day</Heading>
            <Text>{index + 1} of {myImages.length }</Text>
            <Image 
                src={image.url} mt={4}
                alt={image.alt}  h={350} />
            <ArrowLeftIcon boxSize={6} onClick={handleClick} pos={'absolute'} top={'50%'}/>
            <ArrowRightIcon boxSize={6} onClick={handleClick} pos={'absolute'} top={'50%'} right={'2%'}/>
        </Box>
    );
}
export default Carosel;