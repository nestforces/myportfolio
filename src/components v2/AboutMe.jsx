import React from 'react';
import { Box, Flex, Text, HStack, Grid, useColorModeValue } from "@chakra-ui/react";
import { IoLogoAndroid } from "react-icons/io";
import { FaReact, FaNode } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, from }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const variants = {
        hidden: { opacity: 0, x: from === 'left' ? -100 : 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

const AboutMe = () => {
    const bgColor = useColorModeValue("#FFFEF7", "#1A202C");
    const textColor = useColorModeValue("black", "white");

    return (
        <>
            <Box textColor='black' margin='auto' pl='30px' pr='30px'>
                <AnimatedSection from="right">
                    <HStack>
                        <Text color={textColor} fontSize='3xl' fontWeight='bold' fontStyle='italic'>About Me</Text>
                        <Box width='50px' mt='20px' borderTop='solid 2px blue'></Box>
                    </HStack>
                </AnimatedSection>
                <AnimatedSection from="left">
                    <Text color={textColor} lineHeight={2} fontSize='small' textAlign='justify'>
                        I am a software developer eager to learn and grow in the field. My current skills include JavaScript, HTML, CSS, TypeScript, Kotlin, and Java, as well as database management with MySQL. I am proficient in version control using Git and GitHub. In terms of frameworks, I have hands-on experience with both frontend and backend development using React, Node.js, Express.js, and Chakra UI for building user interfaces. Additionally, I have proficiency with ORM (Object-Relational Mapping) libraries like Prisma and Sequelize for database management. I am enthusiastic about honing my abilities and have a keen interest in creating responsive and dynamic web applications.
                    </Text>
                </AnimatedSection>

                <Text color={textColor} mt='30px' fontSize='xl'>What I Do</Text>
                <Grid gap='10px' templateColumns={{ md: 'repeat(2, 1fr)', base: 'repeat(1, 1fr)' }} width='70%'>
                    <AnimatedSection from="left">
                        <Flex flexDir='row' p='20px' borderRadius='10px' bg='#badcfe'>
                            <Box width='20%' >
                                <Text color='#1c2c4c' mt='10px' fontSize={{base: '5xl', md: '3xl'}}><FaReact /></Text>
                            </Box>
                            <Box width='80%'>
                                <Text fontWeight='bold'>Front End Development</Text>
                                <Text fontSize='small' textAlign='justify'>
                                    As a front-end developer, I specialize in creating responsive and visually appealing user interfaces using HTML, CSS, and JavaScript frameworks like React. I focus on delivering seamless user experiences across all devices, ensuring cross-browser compatibility, and optimizing web performance. With skills in UI/UX design, API integration, and version control with Git, I develop dynamic and interactive websites that meet modern web standards and business needs.
                                </Text>
                            </Box>
                        </Flex>
                    </AnimatedSection>
                    <AnimatedSection from="right">
                        <Flex flexDir='row' p='20px' borderRadius='10px' bg='#dee0eb'>
                            <Box width='20%'>
                                <Text color='#6cc24a' mt='10px' fontSize={{base: '5xl', md: '3xl'}}><FaNode /></Text>
                            </Box>
                            <Box width='80%'>
                                <Text fontWeight='bold'>Back End Development</Text>
                                <Text fontSize='small' textAlign='justify'>
                                    As a back-end developer, I specialize in building robust and scalable server-side applications using technologies like Node.js, Express, and databases such as MySQL, MongoDB and PostgreSQL. My focus is on developing efficient APIs, managing server infrastructure, and ensuring data security. With expertise in authentication, data modeling, and performance optimization, I create reliable back-end systems that support seamless front-end experiences and meet business requirements.
                                </Text>
                            </Box>
                        </Flex>
                    </AnimatedSection>
                    <AnimatedSection from="left">
                        <Flex flexDir='row' p='20px' borderRadius='10px' bg='#ebe2e5'>
                            <Box width='20%'>
                                <Text color='#78c257' mt='10px' fontSize={{base: '5xl', md: '3xl'}}><IoLogoAndroid /></Text>
                            </Box>
                            <Box width='80%'>
                                <Text fontWeight='bold'>Mobile Development</Text>
                                <Text fontSize='small' textAlign='justify'>
                                    As an Android Apps developer, I specialize in creating high-performance, user-friendly mobile applications using Kotlin and Java. I focus on delivering seamless user experiences through efficient UI/UX design, robust functionality, and integration with various APIs and backend services. With expertise in Android SDK, Jetpack libraries, and modern development practices, I build scalable and secure applications tailored to meet diverse business needs.
                                </Text>
                            </Box>
                        </Flex>
                    </AnimatedSection>
                </Grid>
            </Box>
        </>
    );
}

export default AboutMe;
