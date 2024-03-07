import { Box, Flex, Text, Image, Button, Grid, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, Textarea, Input, HStack, Spacer, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, } from "@chakra-ui/react";
import { useRef , useState} from 'react';
import { useInView } from 'react-intersection-observer';
import { IconBrandLinkedin, IconMailFilled, IconBrandGithubFilled, IconPhoneFilled, IconMenu2 } from '@tabler/icons-react';
import Home from "../../components/Home";
import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s, transform 0.5s' }}>
      {children}
    </div>
  );
};



const IndexPortfolio = () => {

    const homeRef = useRef();
    const aboutMeRef = useRef();
    const skillsRef = useRef();
    const projectsRef = useRef();
    const contactMeRef = useRef();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");


    const handleNavigationClick = (ref) => {
        try {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
        <Box css={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none', }, }} style={{ msOverflowStyle: 'none' }}  bgColor='#111111' height='full' width='100vw'>
            <Box top={0} position='fixed' width='full' zIndex={99} bgColor='#8e1050'>
            <Flex pt='20px' pb='20px' pl='50px' pr='50px' flexDirection='row'>
                <Box onClick={() => setIsDrawerOpen(true)} color='white' cursor='pointer' ml='-30px' mr='10px' display={{ base: 'block', md: 'none' }}><IconMenu2 /></Box>
                <Box>
                    <Text textColor='white' fontSize='xl' fontWeight='bold' fontStyle='italic'>My Portfolio</Text>
                </Box>
                <Spacer display={{base: 'none', md:'block'}} />
                <Box display={{base: 'none', md:'block'}}>
                    <Flex textColor='white' flexDirection='row' gap='15px' fontWeight='bold'>
                        <Text cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'home' ? '#b686e8' : null } borderRadius={ activeSection == 'home' ? '10px' : null } onClick={() => { handleNavigationClick(homeRef); setActiveSection("home") }}>Home</Text>
                        <Text cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'aboutMe' ? '#b686e8' : null } borderRadius={ activeSection == 'aboutMe' ? '10px' : null } onClick={() => { handleNavigationClick(aboutMeRef); setActiveSection("aboutMe") }}>About Me</Text>
                        <Text  cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'skills' ? '#b686e8' : null } borderRadius={ activeSection == 'skills' ? '10px' : null } onClick={() => { handleNavigationClick(skillsRef); setActiveSection("skills") }}>Skills</Text>
                        <Text  cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'projects' ? '#b686e8' : null } borderRadius={ activeSection == 'projects' ? '10px' : null } onClick={() => { handleNavigationClick(projectsRef); setActiveSection("projects") }}>Projects</Text>
                        <Text  cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'contactMe' ? '#b686e8' : null } borderRadius={ activeSection == 'contactMe' ? '10px' : null } onClick={() => { handleNavigationClick(contactMeRef); setActiveSection("contactMe") }}>Contact Me</Text>
                    </Flex>
                </Box>
            </Flex>
            </Box>
        <Box bgColor='#111111' p={{base: '0px', md:'0px', sm:'50px'}}>
        <Box mt='70px' bgColor='#111111'>
            <AnimatedSection>
            <Box ref={homeRef}><Home /></Box>
            </AnimatedSection>
            <AnimatedSection>
            <Box ref={aboutMeRef}><AboutMe /></Box>
            </AnimatedSection>
            <AnimatedSection>
               <Box ref={skillsRef}><Skills /></Box>
            </AnimatedSection>
            <Box ref={projectsRef}><Projects /></Box>
            <Box ref={contactMeRef}><ContactMe /></Box>
            
            
            <Drawer isOpen={isDrawerOpen} placement="left" onClose={() => setIsDrawerOpen(false)}>
                    <DrawerOverlay>
                        <DrawerContent bgColor='#444444' color='white'>
                            <DrawerCloseButton color='white' />
                            <DrawerHeader bgColor='#222222' fontWeight='bold'>Navigation</DrawerHeader>
                            <DrawerBody>
                                <Flex textColor='white' flexDirection='column' gap='15px' fontWeight='bold'>
                                    <Text cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'home' ? '#b686e8' : null } borderRadius={ activeSection == 'home' ? '10px' : null } onClick={() => { handleNavigationClick(homeRef); setActiveSection("home") }}>Home</Text>
                                    <Text cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'aboutMe' ? '#b686e8' : null } borderRadius={ activeSection == 'aboutMe' ? '10px' : null } onClick={() => { handleNavigationClick(aboutMeRef); setActiveSection("aboutMe") }}>About Me</Text>
                                    <Text  cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'skills' ? '#b686e8' : null } borderRadius={ activeSection == 'skills' ? '10px' : null } onClick={() => { handleNavigationClick(skillsRef); setActiveSection("skills") }}>Skills</Text>
                                    <Text  cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'projects' ? '#b686e8' : null } borderRadius={ activeSection == 'projects' ? '10px' : null } onClick={() => { handleNavigationClick(projectsRef); setActiveSection("projects") }}>Projects</Text>
                                    <Text  cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'contactMe' ? '#b686e8' : null } borderRadius={ activeSection == 'contactMe' ? '10px' : null } onClick={() => { handleNavigationClick(contactMeRef); setActiveSection("contactMe") }}>Contact Me</Text>
                                </Flex>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
        </Box>
        
        </Box>
        <Box fontStyle='italic' fontWeight='bold' textAlign='center' textColor='white' pt='10px' pb='10px' bgColor='#8e1050'>
                <Text>Maulana Mahfud © 2024</Text>
            </Box>
        </Box>
        </>
    )
}

export default IndexPortfolio
