import { Box, Flex, Text, Image, VStack, Button, Grid, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, Textarea, Input, HStack, Spacer, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, } from "@chakra-ui/react";
import computerjpg from '../../assets/7832583.jpg';
import computerjpg2 from '../../assets/image.jpg';
import computerjpg3 from '../../assets/image2.jpg';
import htmllogo from '../../assets/html.png';
import csslogo from '../../assets/css.png';
import javascriptlogo from '../../assets/javascript.png';
import nodelogo from '../../assets/node.png';
import javalogo from '../../assets/java.png';
import chakrauilogo from '../../assets/chakraui.jpg';
import kotlinlogo from '../../assets/kotlin.png';
import mysqllogo from '../../assets/mysql.png';
import reactlogo from '../../assets/react.png';
import typescriptlogo from '../../assets/typescript.png';
import homefragment from '../../assets/Home Fragment.jpg';
import detailmanga from '../../assets/Detail Manga.jpg';
import chapter from '../../assets/Chapter.jpg';
import homemacgroceria from '../../assets/Macbook-Air-localhost (3).png';
import productmacgroceria from '../../assets/Macbook-Air-localhost (2).png';
import loginmacgroceria from '../../assets/Macbook-Air-localhost.png';
import homeiphonegroceria from '../../assets/iPhone-13-PRO-MAX-localhost (1).png';
import productiphonegroceria from '../../assets/iPhone-13-PRO-MAX-localhost (3).png';
import loginiphonegroceria from '../../assets/iPhone-13-PRO-MAX-localhost (2).png';
import homemacticketing from '../../assets/hometicketing.png';
import eventmacticketing from '../../assets/eventticketing.png';
import loginmacticketing from '../../assets/loginticketingmacair.png';
import menumacpos from '../../assets/Macbook-Air-localhost (10).png';
import orderprocessmacpos from '../../assets/Macbook-Air-localhost (11).png';
import loginmacpos from '../../assets/Macbook-Air-localhost (13).png';

import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useRef , useState} from 'react';
import { useInView } from 'react-intersection-observer';
import { IconBrandLinkedin, IconMailFilled, IconBrandGithubFilled, IconPhoneFilled, IconMenu2 } from '@tabler/icons-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

extend({ OrbitControls });



const BallWithImage = ({ imageSrc }) => {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageSrc);
    const meshRef = useRef();

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 0, 50);

    useFrame(() => {
        // Rotate the ball around the y-axis
        meshRef.current.rotation.y += 0.01;
    });
  
    return (
        <mesh ref={meshRef}>
        <sphereGeometry args={[50, 32, 32]} />
        <meshBasicMaterial attach="material" map={texture}/>
        {/* Adjust the position of the mesh to be in front of the ball */}
        <pointLight args={[pointLight.color.getStyle(), pointLight.intensity, pointLight.distance]} />
      </mesh>
    );
  };
  
  
  const ThreeScene = ({ imageSrc }) => {
    const { camera, gl } = useThree();
    const orbitControlsRef = useRef();

    useFrame(() => {
      orbitControlsRef.current.update();
    });
  
    camera.position.set(100, 0, 0);

  return (
    <>
      <BallWithImage imageSrc={imageSrc} />
      <orbitControls enableZoom={false} ref={orbitControlsRef} args={[camera, gl.domElement]} />
    </>
    );
  };


const IndexPortfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const homeRef = useRef();
    const aboutMeRef = useRef();
    const skillsRef = useRef();
    const projectsRef = useRef();
    const contactMeRef = useRef();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    const handleNavigationClick = (ref) => {
        try {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        } catch (err) {
            console.log(err)
        }
    };
    console.log(activeSection)

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitContactMe = () => {
        const subject = 'Message from Portfolio';
        const body = `Name: ${name}\nEmail: ${email}\nMessage: \n${message} />`;
        
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
            <Box bgImage={computerjpg3} bgSize='cover'>
            <Flex pt='30px' pb='30px' ref={homeRef} bgColor='rgba(0, 0, 0, 0.7)' rowGap='50px' flexDirection={{base: 'column', md:'row', sm:'column'}}>
                <Box width={{base: '100%', md:'50%'}} textAlign='center'>
                    <Text color='white' fontSize='6xl' bgGradient="linear(to-r, #b686e8, #bc3876)" bgClip='text' fontWeight='bold'>Hello, I'm</Text>
                    <Text  color='white' fontSize='6xl' >Maulana Mahfud</Text>
                    <Text  color='white' fontSize='2xl' mb='10px' >A Software Developer</Text>
                    <Flex flexDirection='row' justifyContent='center' gap='10px'>
                    <Button borderRadius='full' onClick={() => window.open("https://github.com/nestforces", "_blank")} bgGradient="linear(to-r, #b686e8, #bc3876)" textColor='white'>
                        <Text _hover={{ textShadow: '0 0 5px #bc3876, 0 0 10px #bc3876, 0 0 15px #bc3876', color: '#bc3876', }}>GitHub</Text>
                    </Button>
                    <Button borderRadius='full' _hover={{bgColor: '#bc3876'}} variant='outline' colorScheme='blue' borderWidth='3px' fontWeight='bold' backgroundColor='white' onClick={() => window.open("https://drive.google.com/file/d/105N2inV8FDnHaPN7_qghZLNZN7IDdx0G/view?usp=sharing", "_blank")} borderColor="linear(to-r, #b686e8, #bc3876)">
                        <Text textColor='#bc3876' _hover={{ textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white', color: 'white', }}>Download CV</Text>
                    </Button>
                    </Flex>
                </Box>
                <Box width={{base: '100%', md:'50%'}}>
                    <VStack>
                    <Box p='50px' bgColor='#181818' width='fit-content' borderRadius='full'>
                    <Image boxSize={{base: '200px', md:'300px'}} borderRadius='full' src={computerjpg2} alt="Computer Image" />
                    </Box>
                    </VStack>
                </Box>
                <Box>
                </Box>
            </Flex>
            </Box>
            </AnimatedSection>
            <AnimatedSection>
            <Flex p={{ base: '50px', md:'20px' }} ref={aboutMeRef} mt='30px' rowGap='50px' flexDirection={{base: 'column', md:'row', sm:'column'}}>
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
            </AnimatedSection>
            <AnimatedSection>
                <Box bgGradient='linear(to-b, #111111, #802a5e)' p={{ base: '50px', md:'20px' }} mt='50px' ref={skillsRef}>
            <Text fontSize='4xl' textColor='white' textAlign='center' fontWeight='bold' fontStyle='italic'>Skills</Text>
            <Grid w='100%' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }} >
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={htmllogo} />
                    </Canvas>
                </Box>
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={csslogo} />
                    </Canvas>
                </Box>
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={javascriptlogo} />
                    </Canvas>
                </Box>
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={typescriptlogo} />
                    </Canvas>
                </Box>
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={javalogo} />
                    </Canvas>
                </Box>
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={reactlogo} />
                    </Canvas>
                </Box><Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={nodelogo} />
                    </Canvas>
                </Box><Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={kotlinlogo} />
                    </Canvas>
                </Box><Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={chakrauilogo} />
                    </Canvas>
                </Box><Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={mysqllogo} />
                    </Canvas>
                </Box>
            </Grid>
            </Box>
            </AnimatedSection>
            <Box  p={{ base: '50px', md:'20px' }} mt='50px' ref={projectsRef}>
                <AnimatedSection>
                <Text fontSize='4xl' textColor='white' fontWeight='bold' textAlign='center' fontStyle='italic'>Projects</Text>
                </AnimatedSection>
                
                <Box mt='10px'>
                <AnimatedSection><Text fontSize='2xl' textColor='white' fontWeight='bold' textAlign='center' fontStyle='italic' mb='10px'>Groceria</Text></AnimatedSection>
                <Flex flexDirection={{base: 'column', md:'row'}}>
                <Box margin='auto' width={{base: '100%', md:'30%'}}>
                <AnimatedSection><Text lineHeight={2} mb='10px' textColor='white'>
                        Welcome to the future of grocery shopping — introducing our cutting-edge responsive web application powered by JavaScript and the dynamic trio of frameworks: React.js for the frontend, Node.js for the backend, and adorned with the sleek design elements of Chakra UI. With our app, users can effortlessly purchase staples and goods from supermarkets, all from the comfort of their own homes, with delivery options akin to the seamless experience provided by the Segari web application.
                        </Text></AnimatedSection>
                    </Box>
                    <Box width={{base: '100%', md:'70%'}}>
                    <AnimatedSection><Grid w='100%' margin='auto' gap='10px' templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}>
                            <Image cursor="pointer" onClick={() => handleImageClick(homemacgroceria)} margin='auto' borderRadius='10px' width='auto' src={homemacgroceria} />
                            <Image cursor="pointer" onClick={() => handleImageClick(productmacgroceria)} margin='auto' borderRadius='10px' width='auto' src={productmacgroceria} />
                            <Image cursor="pointer" onClick={() => handleImageClick(loginmacgroceria)} margin='auto' borderRadius='10px' width='auto' src={loginmacgroceria} />
                        </Grid></AnimatedSection>
                        <Box height='20px'></Box>
                        <AnimatedSection><Grid w='100%' margin='auto' gap='10px' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}>
                            <Image cursor="pointer" onClick={() => handleImageClick(homeiphonegroceria)} margin='auto' borderRadius='10px' height={{md:'300px'}} src={homeiphonegroceria} />
                            <Image cursor="pointer" onClick={() => handleImageClick(productiphonegroceria)} margin='auto' borderRadius='10px'  height={{md:'300px'}} src={productiphonegroceria} />
                            <Image cursor="pointer" onClick={() => handleImageClick(loginiphonegroceria)} margin='auto' borderRadius='10px'  height={{md:'300px'}} src={loginiphonegroceria} />
                        </Grid></AnimatedSection>
                    </Box>
                </Flex>
                </Box>
                
                
                <Box mt='50px'>
                <AnimatedSection><Text fontSize='2xl' textColor='white' fontWeight='bold' textAlign='center' fontStyle='italic' mb='10px'>Ticketing</Text></AnimatedSection>
                <Flex flexDirection={{base: 'column', md:'row'}}>
                    <Box margin='auto' width={{base: '100%', md:'30%'}}>
                    <AnimatedSection><Text lineHeight={2} mb='10px' textColor='white'>
                        Embark on a seamless and stylish ticket-buying experience with our cutting-edge responsive web application. Immerse yourself in the world of events, all powered by the dynamic duo of React.js for the frontend, Express.js for the backend, and adorned with the elegant design components of Chakra UI. This is more than just ticket purchasing; it's a visual feast and a streamlined journey into the heart of your favorite events.
                        </Text></AnimatedSection>
                    </Box>
                    <Box width={{base: '100%', md:'70%'}}>
                    <AnimatedSection><Grid w='100%' margin='auto' gap='10px' templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}>
                            <Image cursor="pointer" onClick={() => handleImageClick(homemacticketing)} margin='auto' borderRadius='10px' width='auto' src={homemacticketing} />
                            <Image cursor="pointer" onClick={() => handleImageClick(eventmacticketing)} margin='auto' borderRadius='10px' width='auto' src={eventmacticketing} />
                            <Image cursor="pointer" onClick={() => handleImageClick(loginmacticketing)} margin='auto' borderRadius='10px' width='auto' src={loginmacticketing} />
                        </Grid></AnimatedSection>
                    </Box>
                </Flex>
                </Box>
                <Box mt='50px'>
                <AnimatedSection><Text fontSize='2xl' textColor='white' fontWeight='bold' textAlign='center' fontStyle='italic' mb='10px'>POS Coffee Shop</Text></AnimatedSection>
                    <Flex flexDirection={{base: 'column', md:'row'}}>
                        <Box margin='auto' width={{base: '100%', md:'30%'}}>
                        <AnimatedSection><Text lineHeight={2} mb='10px' textColor='white'>Introducing a cutting-edge, responsive web application meticulously crafted for seamless cashier payment experiences at your shop. Powered by TypeScript and adorned with the sleek design elements of Chakra UI, our innovative solution brings a harmonious blend of functionality and aesthetics to your point-of-sale operations.</Text></AnimatedSection>
                        </Box>
                        <Box width={{base: '100%', md:'70%'}}>
                        <AnimatedSection><Grid w='100%' margin='auto' gap='10px' templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}>
                            <Image cursor="pointer" onClick={() => handleImageClick(menumacpos)} margin='auto' borderRadius='10px' width='auto' src={menumacpos} />
                            <Image cursor="pointer" onClick={() => handleImageClick(orderprocessmacpos)} margin='auto' borderRadius='10px' width='auto' src={orderprocessmacpos} />
                            <Image cursor="pointer" onClick={() => handleImageClick(loginmacpos)} margin='auto' borderRadius='10px' width='auto' src={loginmacpos} />
                        </Grid></AnimatedSection>
                        </Box>
                    </Flex>
                </Box>
                <Box mt='50px'>
                <AnimatedSection><Text fontSize='2xl' textColor='white' fontWeight='bold' textAlign='center' fontStyle='italic' mb='10px'>Comicku</Text></AnimatedSection>
                <Flex flexDirection={{base: 'column', md: 'row'}}>
                    <Box margin='auto' width={{base: '100%', md:'30%'}}>
                    <AnimatedSection><Text lineHeight={2} mb='10px' textColor='white'>Step into the captivating world of comics with our state-of-the-art mobile application, expertly designed for manga, manhua, and manhwa enthusiasts. Crafted with the power of Kotlin and Firebase for secure login, coupled with data retrieval from a Open Source REST API, our app delivers a seamless and immersive comic reading experience.</Text></AnimatedSection>
                    </Box>
                    <Box width={{base: '100%', md:'70%'}}>
                    <AnimatedSection><Grid w='100%' margin='auto' gap='10px' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}>
                            <Image cursor="pointer" onClick={() => handleImageClick(homefragment)} margin='auto' borderRadius='10px' height={{base: 'auto', md: '400px'}} src={homefragment} />
                            <Image cursor="pointer" onClick={() => handleImageClick(detailmanga)} margin='auto' borderRadius='10px' height={{base: 'auto', md: '400px'}} src={detailmanga} />
                            <Image cursor="pointer" onClick={() => handleImageClick(chapter)} margin='auto' borderRadius='10px' height={{base: 'auto', md: '400px'}} src={chapter} />
                        </Grid></AnimatedSection>
                    </Box>
                </Flex>
                </Box>
            </Box>
            <Box p={{ base: '50px', md:'20px' }} mt='50px' mb='30px' ref={contactMeRef}>
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
{/*                                 <Box width={{ base: '100%', md: '500px'}}><ReactQuill value={message} onChange={(value) => setMessage(value)} theme='snow' style={{ backgroundColor: 'white', marginBottom: '10px', borderRadius: '10px', }}  placeholder='Message...' /></Box> */}
                                <Textarea height='200px' mb='10px' value={message} onChange={(e) => setMessage(e.target.value)} type='text' textColor='white' _placeholder={{color: 'white'}} mb='10px' placeholder='Your Message...'/>
                                <Button onClick={() => handleSubmitContactMe()} isDisabled={name && email && message ? false : true} width='full' bgGradient="linear(to-r, #b686e8, #bc3876)" textColor='white'>SEND</Button>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            
            <Modal size='full' isOpen={isModalOpen} onClose={closeModal}>
                <ModalOverlay bg="rgba(0, 0, 0, 0.5)" />
                <ModalContent bg="transparent" color="white">
                <ModalHeader>Enlarged Image</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Image margin='auto' src={selectedImage} alt="Enlarged Image" />
                </ModalBody>
                </ModalContent>
            </Modal>
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
