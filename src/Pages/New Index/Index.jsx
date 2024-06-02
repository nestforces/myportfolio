import { Box, Flex, Text, Image, Button, Icon, VStack, IconButton, Grid, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, Textarea, Input, HStack, Spacer, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, } from "@chakra-ui/react";
import { useRef , useState, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { IconBrandLinkedin, IconMail, IconMailFilled, IconMapPin, IconBrandGithubFilled, IconPhoneFilled, IconMenu2, IconBrandInstagram, IconBrandTwitter, IconBrandFacebook, IconPhone, IconLocation, IconUser } from '@tabler/icons-react';
// import Home from "../../components/Home";
// import AboutMe from "../../components/AboutMe";
// import Skills from "../../components/Skills";
// import Projects from "../../components/Projects";
// import ContactMe from "../../components/ContactMe";
// import SkillsCard from "../../components/SkillsCard";
import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlineWorkOutline, MdConnectWithoutContact } from "react-icons/md";
import computerjpg2 from '../../assets/image.jpg';
const Home = lazy(() => import("../../components/Home"));
const AboutMe = lazy(() => import("../../components v2/AboutMe"));
const Skills = lazy(() => import("../../components v2/Skills"));
const Projects = lazy(() => import("../../components v2/Projects"));
const ContactMe = lazy(() => import("../../components v2/ContactMe"));
const SkillsCard = lazy(() => import("../../components v2/SkillsCard"));

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



const Index = () => {

    const homeRef = useRef();
    const aboutMeRef = useRef();
    const skillsRef = useRef();
    const projectsRef = useRef();
    const contactMeRef = useRef();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mainDisplay, setMainDisplay] = useState('about')


    const handleNavigationClick = (ref) => {
        try {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        } catch (err) {
            console.log(err)
        }
    };

    const CustomLinkedinIcon = (props) => {
        return (
          <Icon as={IconBrandLinkedin} {...props} />
        );
      };

      const CustomGithubIcon = (props) => {
        return (
          <Icon as={IconBrandGithubFilled} {...props} />
        );
      };

      const CustomMailIcon = (props) => {
        return (
          <Icon as={IconMail} {...props} />
        );
      };



    return (
        <>
        <Box display={{base: 'block', md: 'none'}} top={0} position='fixed' width='full' zIndex={999} bgColor='#8e1050'>
            <Flex pt='20px' pb='20px' pl='50px' pr='50px' flexDirection='row'>
                <Box onClick={() => setIsDrawerOpen(true)} color='white' cursor='pointer' ml='-30px' mr='10px' display={{ base: 'block', md: 'none' }}><IconMenu2 /></Box>
                <Box>
                    <Text textColor='white' fontSize='xl' fontWeight='bold' fontStyle='italic'>My Portfolio</Text>
                </Box>
                <Spacer display={{base: 'none', md:'block'}} />
                
            </Flex>
            </Box>
        <Flex mt={{base: '70px', md: '0px'}} alignItems="flex-start" pl={{base : '0px', md : '20px'}} pr={{base : '0px', md : '20px'}}  flexDirection={{base : 'column', md : 'row'}} h={"full"}>
      <VStack height='100px' mt='20px' width={{base : '100%', md : '30vw'}} position={{base : 'relative', md : 'sticky'}} top={{base : '0px', md : '50px'}} >
        <Image width='200px' borderRadius='10px' ml='auto' mr ='auto' mb='-120px' zIndex={99} src={computerjpg2} />
    
    <Box bg="#FFFEF7" borderRadius='10px' width={{base : '80%', md : '30vw'}} justifyContent='center'>
        
        <VStack mt='110px' mb='10px'>

        <Text color='black' fontWeight='bold' fontSize='30px'>Maulana Mahfud</Text>
        <Text color='black' mt='-20px' fontStyle='italic'>Fullstack Developer</Text>
        <Flex gap='20px' flexDir='row'>
            <IconButton icon={<CustomLinkedinIcon color="#0A66C2" />}
        _hover={{ bg: '#0A66C2', color: 'white' }}
        sx={{
          '&:hover svg': {
            color: 'white',
          },
        }} />
            <IconButton icon={<CustomGithubIcon color="#0A66C2" />}
        _hover={{ bg: '#0A66C2', color: 'white' }}
        sx={{
          '&:hover svg': {
            color: 'white',
          },
        }} />
        <IconButton icon={<CustomMailIcon color="#0A66C2" />}
        _hover={{ bg: '#0A66C2', color: 'white' }}
        sx={{
          '&:hover svg': {
            color: 'white',
          },
        }} />
        
        </Flex>\
        <Box p='20px' borderRadius='10px' bgColor='steelblue'>
            <HStack><Box borderRadius='10px' p='5px' bg='white'><IconMail color='crimson' /></Box><Text>maulanamahfud2113@gmail.com</Text></HStack>
            <HStack><Box mt='5px' borderRadius='10px' p='5px' bg='white'><IconMapPin color='crimson' /></Box><Text>Central Java, Indonesia</Text></HStack>
        </Box>
        <Flex flexDirection='row' justifyContent='center' gap='10px'>
                    <Button borderRadius='full' onClick={() => window.open("https://github.com/nestforces", "_blank")} bgGradient="linear(to-r, #b686e8, #bc3876)" textColor='white'>
                        <Text _hover={{ textShadow: '0 0 5px #bc3876, 0 0 10px #bc3876, 0 0 15px #bc3876', color: '#bc3876', }}>GitHub</Text>
                    </Button>
                    <Button borderRadius='full' _hover={{bgColor: '#bc3876'}} variant='outline' colorScheme='blue' borderWidth='3px' fontWeight='bold' backgroundColor='white' onClick={() => window.open("https://drive.google.com/file/d/1r64Qq_ZLmzqJRDlKAs3yM8ewm4_MhOQX/view?usp=sharing", "_blank")} borderColor="linear(to-r, #b686e8, #bc3876)">
                        <Text textColor='#bc3876' _hover={{ textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white', color: 'white', }}>Download CV</Text>
                    </Button>
                    </Flex>
        </VStack>
  </Box>
  </VStack>
        <VStack mt={{base: '300px', md: '0px'}} mb={{base: '30px', md: '0px'}} width='100%' pl={{base : '0px', md : '20px'}}>
        <Box mt='110px' height = 'fit-content' minHeight='500px' mb='30px' width='97%' bg='#FFFEF7' textAlign='left'p={4} rounded='lg' boxShadow="0px 1px 5px gray">
            <Box display={mainDisplay == 'about' ? 'block' : 'none'}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Box ><AboutMe /></Box>
                </Suspense>
            </Box>
            <Box display={mainDisplay == 'skills' ? 'block' : 'none'}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Box ><Skills /></Box>
                </Suspense>
            </Box>
            <Box display={mainDisplay == 'projects' ? 'block' : 'none'}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Box ><Projects /></Box>
                </Suspense>
            </Box>
            <Box display={mainDisplay == 'contactme' ? 'block' : 'none'}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Box ><ContactMe /></Box>
                </Suspense>
            </Box>
        </Box>
        
        </VStack>
        
          <Box
          display={{base : 'none', md : 'block'}}
          top={{base: '0px', md : '110px'}} mt='20px' position='sticky'  p='0px 20px 0px 20px' height='fit-content'
          >
            <Box
              width="10vw"
              bg="#FFFEF7"
              textAlign="left"
              p={4}
              rounded="lg"
              boxShadow="0px 1px 5px gray"
            >
                <VStack>
                    
                    <VStack onClick={() => setMainDisplay('about')} cursor='pointer' textColor={mainDisplay == "about" ? 'white' : 'black'} _hover={{bg: '#4D869C', textColor: 'white'}} width='100px' p='5px' bg={mainDisplay == "about" ? '#4D869C' : '#CDE8E5'} borderRadius='10px' >
                        <Text><IconUser size='20px'/></Text>
                        <Text>About Me</Text>
                    </VStack>
                    <VStack onClick={() => setMainDisplay('skills')} cursor='pointer' textColor={mainDisplay == "skills" ? 'white' : 'black'} _hover={{bg: '#4D869C', textColor: 'white'}} width='100px' p='5px' bg={mainDisplay == "skills" ? '#4D869C' : '#CDE8E5'} borderRadius='10px' >
                        <Text><LiaToolsSolid size='20px'/></Text>
                        <Text>Skills</Text>
                    </VStack>
                    <VStack onClick={() => setMainDisplay('projects')} cursor='pointer' textColor={mainDisplay == "projects" ? 'white' : 'black'} _hover={{bg: '#4D869C', textColor: 'white'}} width='100px' p='5px' bg={mainDisplay == "projects" ? '#4D869C' : '#CDE8E5'} borderRadius='10px' >
                        <Text><MdOutlineWorkOutline size='20px'/></Text>
                        <Text>Projects</Text>
                    </VStack>                   
                    <VStack onClick={() => setMainDisplay('contactme')} cursor='pointer' textColor={mainDisplay == "contactme" ? 'white' : 'black'} _hover={{bg: '#4D869C', textColor: 'white'}} width='100px' p='5px' bg={mainDisplay == "contactme" ? '#4D869C' : '#CDE8E5'} borderRadius='10px' >
                        <Text><MdConnectWithoutContact size='20px'/></Text>
                        <Text>Contact Me</Text>
                    </VStack>
                    
                </VStack>
              
            </Box>
          </Box>
    </Flex>
    <Drawer isOpen={isDrawerOpen} placement="left" onClose={() => setIsDrawerOpen(false)}>
                    <DrawerOverlay>
                        <DrawerContent bgColor='#444444' color='white'>
                            <DrawerCloseButton color='white' />
                            <DrawerHeader bgColor='#222222' fontWeight='bold'>Navigation</DrawerHeader>
                            <DrawerBody>
                                <Flex textColor='white' flexDirection='column' gap='15px' fontWeight='bold'>
                                    <Text cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'aboutMe' ? '#b686e8' : null } borderRadius={ activeSection == 'aboutMe' ? '10px' : null } onClick={() => { setMainDisplay('about'); setActiveSection("aboutMe") }}>About Me</Text>
                                    <Text  cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'skills' ? '#b686e8' : null } borderRadius={ activeSection == 'skills' ? '10px' : null } onClick={() => { setMainDisplay('skills'); setActiveSection("skills") }}>Skills</Text>
                                    <Text  cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'projects' ? '#b686e8' : null } borderRadius={ activeSection == 'projects' ? '10px' : null } onClick={() => { setMainDisplay('projects'); setActiveSection("projects") }}>Projects</Text>
                                    <Text  cursor='pointer' p='5px' _hover={{ borderRadius: '10px', bgColor: '#b686e8' }} bgColor={ activeSection == 'contactMe' ? '#b686e8' : null } borderRadius={ activeSection == 'contactMe' ? '10px' : null } onClick={() => { setMainDisplay('contactme'); setActiveSection("contactMe") }}>Contact Me</Text>
                                </Flex>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
        </>
    )
}

export default Index
