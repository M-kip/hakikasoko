import * as React from 'react'
import { Flex } from '@chakra-ui/react'
import { ICard } from './card';
import { intro } from './data';

function MarketDescription(){
    const items = intro.map((obj)=><ICard head={obj.head} body={obj.body} icon={obj.icon} key={obj.id} />)
    return(
        <Flex flexWrap={'wrap'} w={'100%'} p={[4, 12]} gap={[2, 4]} mt={[2, 4]} bg='green.400' direction={['column', 'column', 'row']}>
            {items}
        </Flex>
    ) ;
}
export {MarketDescription}