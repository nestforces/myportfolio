import { Box, Flex, Text, Image, Grid, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, } from "@chakra-ui/react";
import homefragment from '../assets/Home Fragment.jpg';
import detailmanga from '../assets/Detail Manga.jpg';
import chapter from '../assets/Chapter.jpg';
import homemacgroceria from '../assets/Macbook-Air-localhost (3).png';
import productmacgroceria from '../assets/Macbook-Air-localhost (2).png';
import loginmacgroceria from '../assets/Macbook-Air-localhost.png';
import homeiphonegroceria from '../assets/iPhone-13-PRO-MAX-localhost (1).png';
import productiphonegroceria from '../assets/iPhone-13-PRO-MAX-localhost (3).png';
import loginiphonegroceria from '../assets/iPhone-13-PRO-MAX-localhost (2).png';
import homemacticketing from '../assets/hometicketing.png';
import eventmacticketing from '../assets/eventticketing.png';
import loginmacticketing from '../assets/loginticketingmacair.png';
import menumacpos from '../assets/Macbook-Air-localhost (10).png';
import orderprocessmacpos from '../assets/Macbook-Air-localhost (11).png';
import loginmacpos from '../assets/Macbook-Air-localhost (13).png';
import { useInView } from 'react-intersection-observer';
import { useState } from "react";

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

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <Box  p={{ base: '50px', md:'20px' }} mt='50px'>
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
        </>
    )
}

export default Projects;