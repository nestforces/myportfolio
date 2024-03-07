import { Box, Flex, Text, Image, Button, Grid, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, Textarea, Input, HStack, Spacer, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, keyframes, } from "@chakra-ui/react";
import htmllogo from '../assets/html.png';
import csslogo from '../assets/css.png';
import javascriptlogo from '../assets/javascript.png';
import nodelogo from '../assets/node.png';
import javalogo from '../assets/java.png';
import chakrauilogo from '../assets/chakraui.jpg';
import kotlinlogo from '../assets/kotlin.png';
import mysqllogo from '../assets/mysql.png';
import reactlogo from '../assets/react.png';
import typescriptlogo from '../assets/typescript.png';

const rotateY = keyframes`
from {
  transform: rotateY(0deg);
}

to {
  transform: rotateY(360deg);
}
`;

const logos = [
    htmllogo, csslogo, javascriptlogo, typescriptlogo, 
    javalogo, reactlogo, nodelogo, kotlinlogo, 
    chakrauilogo, mysqllogo
  ];
  
  const names = [
    'HTML', 'CSS', 'Javascript', 'Typescript', 
    'Java', 'React', 'Node', 'Kotlin', 'Chakra UI', 'MySql'
  ];

  
  const SkillsCard = () => {
    return (
        <>
        <Box bgGradient='linear(to-b, #222222, #802a5e)' p={{ base: '50px', md:'20px' }} mt='50px'>
           <Text fontSize='4xl' textColor='white' textAlign='center' fontWeight='bold' fontStyle='italic'>Skills</Text>
           <Grid w='100%' rowGap='30px' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}>
                {logos.map((logo, index) => (
                    <Box key={index} boxSize='100px' margin='auto'>
                        <Image src={logo} borderRadius='full' objectFit='cover' boxSize='100px' animation={`${rotateY} 10s linear infinite`} />
                        <Text textAlign='center' textColor='white'>{names[index]}</Text>
                    </Box>
                ))}
            </Grid>
           </Box>
       </>
    );
  };

export default SkillsCard;
