import React, { useState } from "react";
import { Box, Flex, Text, Button, useColorModeValue, Textarea, Input, } from "@chakra-ui/react";
import { IconBrandLinkedin, IconMailFilled, IconBrandGithubFilled, IconPhoneFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, from }) => {
    const variants = {
        hidden: { opacity: 0, x: from === 'left' ? -100 : 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const bgColor = useColorModeValue("#FFFEF7", "#1A202C");
    const textColor = useColorModeValue("black", "white");
    const bgComponents = useColorModeValue("aliceblue", "#344C64");

    const handleSubmitContactMe = () => {
        const subject = 'Message from Portfolio';
        const body = `Name: ${name}\nEmail: ${email}\nMessage: \n${message}`;
        
        // Properly encode subject and body
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);
    
        const mailToLink = `mailto:maulanamahfud2113@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    
        window.location.href = mailToLink;
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <>
        <Flex flexDir='row' ml='20px'>
                    <Text fontSize='3xl' textColor={textColor} fontWeight='bold' fontStyle='italic'>Contact Me</Text>
                    <Box width='50px' mt='30px' borderTop='solid 2px blue'></Box>
                </Flex>
        <Box p='20px'>
            
            <AnimatedSection from="right">
            <Text textColor={textColor} fontSize='small'>
                I'm always excited to connect and discuss new opportunities or collaborations. Whether you have a project in mind, a question to ask, or just want to say hello, feel free to reach out. Your message is important to me, and I'll get back to you as soon as possible.
            </Text>
            </AnimatedSection>
            <Text mt='20px' textColor={textColor} fontSize='xl' fontWeight='bold'>SAY SOMETHING</Text>
            <Box mt='10px'>
                <AnimatedSection from="left">
                    <Box borderRadius='10px' boxShadow='0 4px 8px rgba(142, 16, 80, 0.1), 0 8px 16px rgba(142, 16, 80, 0.1), 0 16px 32px rgba(142, 16, 80, 0.1), 0 32px 64px rgba(142, 16, 80, 0.1)' p={{ base: '20px', md:'50px' }} margin='auto' width={{base: '100%', md: '100%'}} height='fit-content' bgColor={bgComponents}>
                        <Input
                            borderBottom='solid 3px #00b4d8'
                            borderRadius='0px'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            textColor='black'
                            _placeholder={{color: 'gray'}}
                            mb='10px'
                            width='full'
                            placeholder='Your Name...'
                        />
                        <Input
                            borderBottom='solid 3px #00b4d8'
                            borderRadius='0px'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            isRequired
                            required
                            textColor='black'
                            _placeholder={{color: 'gray'}}
                            mb='10px'
                            placeholder='Your Email...'
                        />
                        <Textarea
                            borderBottom='solid 3px #00b4d8'
                            borderRadius='0px'
                            height='150px'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            type='text'
                            textColor='black'
                            _placeholder={{color: 'gray'}}
                            mb='10px'
                            placeholder='Your Message...'
                        />
                        <Button
                            onClick={handleSubmitContactMe}
                            isDisabled={name && email && message && /^(?=.*[@])[@]{8,}$/.test(email) == true ? false : true}
                            width='full'
                            bgGradient="linear(to-r, #b686e8, #bc3876)"
                            textColor='white'
                        >
                            SEND
                        </Button>
                    </Box>
                </AnimatedSection>
            </Box>
        </Box>
        </>
    );
}

export default ContactMe;
