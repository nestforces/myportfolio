import { Box, Flex, Text, Button, Grid, Textarea, Input, } from "@chakra-ui/react";
import { IconBrandLinkedin, IconMailFilled, IconBrandGithubFilled, IconPhoneFilled, } from '@tabler/icons-react';
import { useState } from "react";


const ContactMe = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSubmitContactMe = () => {
        const subject = 'Message from Portfolio';
        const body = `Name: ${name}\nEmail: ${email}\nMessage: \n${message}`;
        
        // Properly encode subject and body
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);
    
        const mailToLink = `mailto:maulanamahfud2113@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    
        window.location.href = mailToLink;
        setName(null);
        setEmail(null);
        setMessage(null);
    }

    return (
        <>
        <Box p={{ base: '50px', md:'20px' }} mt='50px' mb='30px'>
                <Text fontSize='4xl' textColor='white' textAlign='center' fontWeight='bold' fontStyle='italic' mb='10px'>Contact Me</Text>
                <Flex flexDirection={{ base: 'column', md: 'row' }}>
                    <Box justifyContent='center' textAlign='center' width={{base: '100%', md: '40%'}}>
                        <Text textColor='white' fontSize='3xl' fontWeight='bold'>Get In Touch</Text>
                        <Text textColor='white'>I'm always excited to connect and discuss new opportunities or collaborations. Whether you have a project in mind, a question to ask, or just want to say hello, feel free to reach out. Your message is important to me, and I'll get back to you as soon as possible.</Text>
                        <Grid gap='20px' textColor='white' justifyContent='center' mt='50px' templateColumns='repeat 1, 1fr'>
                            <Flex gap='20px'>
                                <IconMailFilled />
                                <Text>maulanamahfud2113@gmail.com</Text>
                            </Flex>
                            <Flex p='5px' _hover={{ bgColor: '#222222', borderRadius: 'full', boxShadow: '0 4px 8px rgba(142, 16, 80, 0.1), 0 8px 16px rgba(142, 16, 80, 0.1), 0 16px 32px rgba(142, 16, 80, 0.1), 0 32px 64px rgba(142, 16, 80, 0.1)', textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white', color: 'white', }} onClick={() => window.open("https://drive.google.com/file/d/1vddw8S-7fiYGvEpacN7kqA6j9nHiqBd6/view?usp=drive_link", "_blank")} cursor='pointer' gap='20px'>
                                <IconPhoneFilled />
                                <Text>+62 896 9181 7933</Text>
                            </Flex>
                            <Flex p='5px' _hover={{ bgColor: '#222222', borderRadius: 'full', boxShadow: '0 4px 8px rgba(142, 16, 80, 0.1), 0 8px 16px rgba(142, 16, 80, 0.1), 0 16px 32px rgba(142, 16, 80, 0.1), 0 32px 64px rgba(142, 16, 80, 0.1)', textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white', color: 'white', }} onClick={() => window.open("https://github.com/nestforces", "_blank")} cursor='pointer' gap='20px'>
                                <IconBrandGithubFilled />
                                <Text>nestforces</Text>
                            </Flex>
                            <Flex  p='5px' _hover={{ bgColor: '#222222',  borderRadius: 'full', boxShadow: '0 4px 8px rgba(142, 16, 80, 0.1), 0 8px 16px rgba(142, 16, 80, 0.1), 0 16px 32px rgba(142, 16, 80, 0.1), 0 32px 64px rgba(142, 16, 80, 0.1)', textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white', color: 'white', }} onClick={() => window.open("https://www.linkedin.com/in/maulana-mahfud-4b1918206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")} cursor='pointer' gap='20px'>
                                <Text><IconBrandLinkedin /></Text>
                                <Text>Linked in</Text>
                            </Flex>
                        </Grid>
                    </Box>
                    <Box mt={{ base: '20px', md: '0px' }} p={{ base: '0px', md: '50px' }}>
                        <Box boxShadow='0 4px 8px rgba(142, 16, 80, 0.1), 0 8px 16px rgba(142, 16, 80, 0.1), 0 16px 32px rgba(142, 16, 80, 0.1), 0 32px 64px rgba(142, 16, 80, 0.1)' p={{ base: '20px', md:'50px' }} margin='auto' width={{base: '100%', md: '100%'}} height='fit-content' bgColor='#333333'>
                                <Text mb='30px' fontSize='xl' textColor='white' fontWeight='bold'>SAY SOMETHING</Text>
                                <Input value={name} onChange={(e) => setName(e.target.value)} type='text' textColor='white' _placeholder={{color: 'white'}} mb='10px'  width='full' placeholder='Your Name...' />
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} type='text' textColor='white' _placeholder={{color: 'white'}} mb='10px' placeholder='Your Email...'/>
                                <Textarea height='150px' value={message} onChange={(e) => setMessage(e.target.value)} type='text' textColor='white' _placeholder={{color: 'white'}} mb='10px' placeholder='Your Message...'/>
                                <Button onClick={() => handleSubmitContactMe()} isDisabled={name && email && message ? false : true} width='full' bgGradient="linear(to-r, #b686e8, #bc3876)" textColor='white'>SEND</Button>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default ContactMe;