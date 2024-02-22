import * as React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, Container,
        Button, ButtonGroup, Divider, Icon,} from '@chakra-ui/react';

export default function HeroCard({heading, description, image}) {
    return(
        <Card>
            <CardBody>
                <Image src={image}></Image>
                <Stack>
                    <Heading size='md' mt={2}>{heading}</Heading>
                    <Text>
                        {description}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='green'>
                        Learn More
                    </Button>
                    <Button variant='ghost' colorScheme='green'>
                        SignUp
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
}
function HeroCardH({heading, description, image}) {
    return(
        <Card direction='row'>
            <Image src={ image.url} width={ image.width} height={ image.height } mt={4} ml={4}/>
            <Stack>
                <CardBody>
                    <Stack>
                        <Heading size='sm' mt={2}>{heading}</Heading>
                        <Text>
                            {description}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='green'>
                            Learn More
                        </Button>
                        <Button variant='ghost' colorScheme='green'>
                            Shop
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Stack>
        </Card>
    );
}
function ICard(props){
    return(
        <Card>
            <CardBody>
                <Stack>
                    <Container><Icon as={props.icon} boxSize={8} /></Container>
                    <Divider />
                    <Heading size={['sm', 'lg', 'lg']}>{props.head}</Heading>
                    <Text fontSize={['sm', 'lg', 'lg']}>{props.body}</Text>
                </Stack>
            </CardBody>
        </Card>
    );
}

export { HeroCardH, ICard}