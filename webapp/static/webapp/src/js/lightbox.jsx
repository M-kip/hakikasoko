import * as React from 'react';
import {Box, Button, CloseButton, Grid, GridItem } from '@chakra-ui/react';
import SlideShow from './slideshow';
import { myImages } from './data';
function LightBox({content, label}){
    function handleClick(e){
        let modal = document.getElementById('myModal');
        modal.style.display = "block";
    }
    function handleClose(e){
        let modal = document.getElementById('myModal');
        modal.style.display = "none"
    }
    let items = myImages.map((image) => { 
                                            return <GridItem backgroundImage={image.url} onClick={handleClick}
                                                        backgroundPosition={'center'} h={150}
                                                            marginX={'auto'} backgroundSize={`"150 150"`} w={'100%'}></GridItem>})
    return(
        <Box>
            <Grid gridTemplateColumns={'25% 25% 25% 25%'} w={'100%'}>
                {items}
            </Grid>
            <Box id='myModal' display='none' zIndex={1} w='100%' h={'100%'}
                position={'fixed'} left={0} top={0} overflow={'auto'} m={'24px auto'}>
                <Box id='modal-content' bg='grey'>
                    <CloseButton onClick={handleClose} position={'absolute'} 
                    right={0} top={0} bg={'red'}zIndex={1} w={'xs'}/>
                    <Box>
                        <SlideShow />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
export default LightBox;