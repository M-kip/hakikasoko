import * as React from 'react'
import { Button, ButtonGroup, Grid, GridItem, Heading, Stack, Link} from '@chakra-ui/react'
import SlideShow from './slideshow';

export function ProductDetail(){
    return(
        <Grid gridTemplateColumns={['repeat(1, 1fr)' ,'repeat(2, 1fr)']} gap={[2,4,6,8]} padding={[4,6,8]} bg={'gray.300'}>
            <GridItem width={'100%'}>
                <SlideShow />
            </GridItem>
            <GridItem>
                <Stack>
                    <Heading  textAlign={'center'} color={'green.700'} fontWeight={700} size={['sm', 'sm', 'lg', 'xlg']} textTransform={'uppercase'}>Add to Cart</Heading>
                    <ButtonGroup flexDirection={['column', 'column', 'row']} gap={[2,2,2]}>
                        <Button colorScheme='blue' as={Link}>View Cart</Button>
                        <Button colorScheme='green' as={Link}>View orders</Button>
                        <Button colorScheme='blue' as={Link}>View mailing/payment info</Button>
                    </ButtonGroup>
                </Stack>
            </GridItem>
        </Grid>
    );
}