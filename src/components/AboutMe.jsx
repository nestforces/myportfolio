import { Box, Flex, Text, Image, VStack, } from "@chakra-ui/react";
import computerjpg from '../assets/7832583.jpg';

const AboutMe = () => {
    return (
        <>
        <Flex p={{ base: '50px', md:'20px' }} mt='30px' rowGap='50px' flexDirection={{base: 'column', md:'row', sm:'column'}}>
                <Box width={{base: '100%', md:'50%'}}>
                    <VStack>
                    <Box p='50px' bgColor='#181818' width='fit-content' borderRadius='full'>
                    <Image boxSize={{base: '200px', md:'300px'}} borderRadius='full' src={computerjpg} alt="Computer Image" />
                    </Box>
                    </VStack>
                </Box>
                <Box margin='auto' width={{base: '100%', md:'50%'}}>
                    <Text fontSize='4xl' textColor='white' fontWeight='bold' fontStyle='italic'>About Me</Text>
                    <Text lineHeight={2} color='white'>
                    I am a software developer eager to learn and grow in the field. 
                    My current skills include working with JavaScript, HTML, CSS, Typescript, Kotlin, and Java, 
                    as well as managing databases with MySQL. I am familiar with version control using Git and GitHub. 
                    In terms of frameworks, I have hands-on experience with React.js, React.ts, Node.js, Express.js, 
                    and Chakra UI for building user interfaces. Despite being a beginner, 
                    I am enthusiastic about honing my abilities and have a keen interest in creating responsive and
                     dynamic web applications.
                    </Text>
                </Box>
            </Flex>
        </>
    )
}

export default AboutMe;