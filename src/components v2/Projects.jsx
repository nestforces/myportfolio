import React, { useState } from 'react';
import { Box, Flex, Text, Image, Grid, HStack, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader } from "@chakra-ui/react";
import { motion } from 'framer-motion';
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
import homemacjikanime from '../assets/Macbook-Air-nestforces.github.io (2).png';
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
                <Flex flexDir='row' ml='20px'>
                    <Text fontSize='3xl' textColor='black' fontWeight='bold' fontStyle='italic'>Projects</Text>
                    <Box width='50px' mt='30px' borderTop='solid 2px blue'></Box>
                </Flex>
            <Box p='20px' textColor='black'>
                

                <Grid gap='10px' templateColumns={{ md: 'repeat(2, 1fr)', base: 'repeat(1, 1fr)' }} width='100%'>
                    <AnimatedSection from="left">
                        <Flex flexDir='column' p='10px' borderRadius='10px' bg='#C2F3D3'>
                            <Image src={homemacgroceria} />
                            <Box p='10px'>
                                <Text mt='10px' fontWeight='bold'>Groceria</Text>
                                <Text fontSize='small' textAlign='justify'>
                                    Groceria is a comprehensive online grocery shopping platform built using ReactJS, NodeJS, Sequelize, JavaScript, MySQL, Midtrans, Firebase, Redux, Raja Ongkir, and Chakra UI. The application features a user-friendly frontend and a robust backend to manage inventory, process orders, and coordinate deliveries, effectively enhancing customer satisfaction and streamlining logistics.
                                </Text>
                            </Box>
                        </Flex>
                    </AnimatedSection>
                    <AnimatedSection from="right">
                        <Flex flexDir='column' p='10px' borderRadius='10px' bg='#DDECEF'>
                            <Image src={menumacpos} />
                            <Box p='10px'>
                                <Text mt='10px' fontWeight='bold'>POS Coffee Shop</Text>
                                <Text fontSize='small' textAlign='justify'>
                                    POS Coffee Shop is an all-in-one web application designed to optimize both frontend cashier operations and backend management for coffee shops. Utilizing ReactJS, NodeJS, Prisma, TypeScript, Chakra UI, MySQL, and Redux, the platform provides an intuitive interface for staff and efficient backend processes for transactions, inventory tracking, and reporting, resulting in improved operational efficiency and customer service.
                                </Text>
                            </Box>
                        </Flex>
                    </AnimatedSection>
                    <AnimatedSection from="left">
                        <Flex flexDir='column' p='10px' borderRadius='10px' bg='#A0E7E5'>
                            <Image src={homemacticketing} />
                            <Box p='10px'>
                                <Text mt='10px' fontWeight='bold'>Ticketing</Text>
                                <Text fontSize='small' textAlign='justify'>
                                    Ticketing is a responsive web application developed to enhance the online event ticket purchasing experience. Built with ReactJS, NodeJS, Sequelize, JavaScript, Redux, Chakra UI, and MySQL, it integrates a seamless frontend ticketing interface with robust backend systems for event management, transaction processing, and attendee reporting, significantly improving user satisfaction and event organization.
                                </Text>
                            </Box>
                        </Flex>
                    </AnimatedSection>
                    <AnimatedSection from="right">
                        <Flex flexDir='column' p='10px' borderRadius='10px' bg='#EFF1D9'>
                            <Image height='140px' ml='auto' mr='auto' borderRadius='10px' width='70px' src={homefragment} />
                            <Box p='10px'>
                                <Text mt='10px' fontWeight='bold'>Comicku</Text>
                                <Text fontSize='small' textAlign='justify'>
                                    COMICKU is a premier mobile application for comic enthusiasts, developed using Kotlin, Firebase, and SQLite. The app offers an extensive selection of comics with an intuitive interface and functionality, providing users with an immersive reading experience and setting a new standard for mobile comic consumption.
                                </Text>
                            </Box>
                        </Flex>
                    </AnimatedSection>
                    <AnimatedSection from="left">
                        <Flex flexDir='column' p='10px' borderRadius='10px' bg='#F1EB86'>
                            <Image src={homemacjikanime} />
                            <Box p='10px'>
                                <Text mt='10px' fontWeight='bold'>Jikanime</Text>
                                <Text fontSize='small' textAlign='justify'>
                                    JIKANIME is a responsive web platform for anime and manga enthusiasts, built with ReactJS, JavaScript, and Chakra UI. Offering a vast database of titles, it prioritizes user experience with a seamless interface adaptable to all devices. Users enjoy detailed insights, ratings, and dynamic dark mode/light mode options, enhancing their viewing experience.
                                </Text>
                            </Box>
                        </Flex>
                    </AnimatedSection>
                </Grid>
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
    );
};

export default Projects;
