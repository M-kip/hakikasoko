import * as React from 'react';
import {Box, Button, Text, CloseButton } from '@chakra-ui/react';

function Modal({content, label}){
    function handleClick(e){
        let modal = document.getElementById('myModal');
        modal.style.display = "block";
    }
    function handleClose(e){
        let modal = document.getElementById('myModal');
        modal.style.display = "none"
    }
    return(
        <Box>
            <Button className='modal-button' onClick={handleClick} colorScheme='blue'>{label}</Button>
            <Box id='myModal' display='none' zIndex={1} w='100%' h={'100%'}
                position={'fixed'} left={0} top={0} overflow={'auto'}>
                <Box id='modal-content'>
                    <CloseButton onClick={handleClose} />
                    <Box>
                        {content}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
export default Modal;