import { Box, Flex, Text, Image, VStack, Button, } from "@chakra-ui/react";
import computerjpg2 from '../assets/image.jpg';
import computerjpg3 from '../assets/image2.jpg';


const Home = () => {


    return (
        <>
        <Box bgImage={computerjpg3} bgSize='cover'>
            <Flex pt='30px' pb='30px' bgColor='rgba(0, 0, 0, 0.7)' rowGap='50px' flexDirection={{base: 'column', md:'row', sm:'column'}}>
                <Box width={{base: '100%', md:'50%'}} textAlign='center'>
                    <Text color='white' fontSize='6xl' bgGradient="linear(to-r, #b686e8, #bc3876)" bgClip='text' fontWeight='bold'>Hello, I'm</Text>
                    <Text  color='white' fontSize='6xl' >Maulana Mahfud</Text>
                    <Text  color='white' fontSize='2xl' mb='10px' >A Software Developer</Text>
                    <Flex flexDirection='row' justifyContent='center' gap='10px'>
                    <Button borderRadius='full' onClick={() => window.open("https://github.com/nestforces", "_blank")} bgGradient="linear(to-r, #b686e8, #bc3876)" textColor='white'>
                        <Text _hover={{ textShadow: '0 0 5px #bc3876, 0 0 10px #bc3876, 0 0 15px #bc3876', color: '#bc3876', }}>GitHub</Text>
                    </Button>
                    <Button borderRadius='full' _hover={{bgColor: '#bc3876'}} variant='outline' colorScheme='blue' borderWidth='3px' fontWeight='bold' backgroundColor='white' onClick={() => window.open("https://drive.google.com/file/d/1Rv4K2y1lsluUxTwvM9l0fuowQxqkIIxH/view?usp=sharing", "_blank")} borderColor="linear(to-r, #b686e8, #bc3876)">
                        <Text textColor='#bc3876' _hover={{ textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white', color: 'white', }}>Download CV</Text>
                    </Button>
                    </Flex>
                </Box>
                <Box width={{base: '100%', md:'50%'}}>
                    <VStack>
                    <Box p='50px' filter='drop-shadow(0 0 20px rgba(142, 16, 80, 0.5))' bgColor='#181818' width='fit-content' borderRadius='full'>
                    <Image filter='drop-shadow(0 0 20px rgba(142, 16, 80, 0.5))' boxSize={{base: '200px', md:'300px'}} borderRadius='full' src={computerjpg2} alt="Computer Image" />
                    </Box>
                    </VStack>
                </Box>
                <Box>
                </Box>
            </Flex>
            </Box>
        </>
    )
}

export default Home;