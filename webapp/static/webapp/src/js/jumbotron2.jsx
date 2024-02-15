import { Grid, GridItem } from '@chakra-ui/react'
import HeroCard from './card';
import { HeroCardH } from './card';
import { LandingImages } from './data';

export default function jumbotron2(props){
    let images = LandingImages;

    return(
        <Grid mt={4} gridTemplateColumns={'33.3% auto auto'}  gridTemplateRows={'60% auto'} marginX={100} maxWidth={1080} gap={6} maxHeight={574} height={574} overflowX={'auto'}>
        <GridItem maxWidth={438} rowSpan={2} rowStart={1} rowEnd={2}>
            <HeroCard heading={ images[0].name } description={ images[0].description} image={ images[0].url}/>
        </GridItem>
        <GridItem colSpan={2} colStart={2} colEnd={3} maxWidth={622} maxHeight={287}>
            <HeroCardH heading={images[1].name} description={images[1].description} image={ images[1].img}/>
        </GridItem>
        <GridItem colSpan={2} colStart={2} colEnd={3} maxWidth={622} maxHeight={270} >
            <HeroCardH heading={images[2].name} description={images[2].description} image={ images[2].img}/>
        </GridItem>
    </Grid>
    );
}