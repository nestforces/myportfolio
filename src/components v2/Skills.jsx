import { Box, Flex, Text, Image, Button, Grid, keyframes, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, Textarea, Input, HStack, Spacer, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, } from "@chakra-ui/react";
import htmllogo from '../assets/html.png';
import csslogo from '../assets/css.png';
import javascriptlogo from '../assets/javascript.png';
import nodelogo from '../assets/node.png';
import javalogo from '../assets/java.png';
import chakrauilogo from '../assets/chakraui.jpg';
import kotlinlogo from '../assets/kotlin.png';
import mysqllogo from '../assets/mysql.png';
import reactlogo from '../assets/react.png';
import typescriptlogo from '../assets/typescript.png';
import sequelizelogo from '../assets/sequelize.png';
import prismalogo from '../assets/prisma.png';
import gitlogo from '../assets/git.png';

import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useRef, useState } from 'react';

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

const rotateY = keyframes`
from {
    transform: rotateY(0deg);
}

to {
    transform: rotateY(360deg);
}
`;


const scale = keyframes`
from {
    transform: scale(1);
}

to {
    transform: scale(1.2);
}
`;

const logos2 = [
  htmllogo, csslogo, javascriptlogo, typescriptlogo, 
  javalogo,  
  chakrauilogo, mysqllogo, sequelizelogo, prismalogo, gitlogo,
];

const names2 = [
  'HTML', 'CSS', 'Javascript', 'Typescript', 
  'Java', 'Chakra UI', 'MySQL', 'Sequelize', 'Prisma', 'Git'
];

const skillColors2 = {
  HTML: 'orange',
  CSS: 'blue',
  Javascript: 'yellow',
  Typescript: 'cyan',
  Java: '#df9338',
  'Chakra UI': '#57c8c7',
  MySQL: '#3765af',
  Sequelize: '#03afef',
  Prisma: '#139983',
  Git: '#f05030',
};

extend({ OrbitControls });

const SphereWithImage = ({ imageSrc }) => {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageSrc);
    const meshRef = useRef();
  
    useFrame(() => {
      // Rotate the ball around the y-axis
      meshRef.current.rotation.y += 0.02;
    });
  
    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[50, 32, 32]} />
        <meshBasicMaterial attach="material" map={texture} />
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
        <SphereWithImage imageSrc={imageSrc} />
        <orbitControls enableZoom={false} ref={orbitControlsRef} args={[camera, gl.domElement]} />
      </>
    );
  };

  const logos = [
    // htmllogo, csslogo, javascriptlogo, typescriptlogo, javalogo, 
    reactlogo, nodelogo, kotlinlogo, 
    // chakrauilogo, mysqllogo, sequelizelogo, prismalogo, gitlogo,
  ];
  
  const names = [
    // 'HTML', 'CSS', 'Javascript', 'Typescript', 'Java', 
    'React', 'Node', 'Kotlin', 
    // 'Chakra UI', 'MySQL', 'Sequelize', 'Prisma', 'Git'
  ];

    const skillColors = {
        // HTML: 'orange',
        // CSS: 'blue',
        // Javascript: 'yellow',
        // Typescript: 'cyan',
        // Java: '#df9338',
        React: 'teal',
        Node: 'lime',
        Kotlin: '#f4860f',
        // 'Chakra UI': '#57c8c7',
        // MySQL: '#3765af',
        // Sequelize: '#03afef',
        // Prisma: '#139983',
        // Git: '#f05030',
    };
  
  const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
        <Flex flexDir='row' ml='20px'>
                    <Text fontSize='3xl' textColor='black' fontWeight='bold' fontStyle='italic'>Skills</Text>
                    <Box width='50px' mt='30px' borderTop='solid 2px blue'></Box>
                </Flex>
        <Box p='20px'>
        
                <Box borderRadius='10px' bg='blueviolet' p='10px' mt='0px'>
           {/* <Text fontSize='4xl' textColor='white' textAlign='center' fontWeight='bold' fontStyle='italic'>Skills</Text> */}
           <AnimatedSection from="left">
           <Grid mb='30px' w='100%' rowGap='30px' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}>
                {logos.map((logo, index) => (
                    <Box cursor='pointer' filter={`drop-shadow(0 0 5px ${skillColors[names[index]] || 'rgba(255, 255, 255, 0.5)'})`} key={index} boxSize='100px' margin='auto'>
                        <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                            <ThreeScene imageSrc={`${logo}`} />
                        </Canvas>
                        <Text textAlign='center' textColor='white'>{names[index]}</Text>
                    </Box>
                ))}
            </Grid>
            </AnimatedSection>
            <AnimatedSection from="right">
            <Grid mb='20px' w='100%' rowGap='30px' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}>
      {logos2.map((logo, index) => (
        <Box
          key={index}
          boxSize="100px"
          margin="auto"
          filter={`drop-shadow(0 0 10px ${
            skillColors2[names2[index]] || "rgba(255, 255, 255, 0.5)"
          })`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            cursor='pointer'
            src={logo}
            borderRadius='full'
            objectFit='cover'
            boxSize='100px'
            animation={`${rotateY} 10s linear infinite`}
            transform={`rotateY(${index * (360 / logos2.length)}deg) translateZ(120px) ${hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'}`}
            filter={hoveredIndex === index ? 'none' : 'grayscale(100%)'}
          />
          <Text textAlign='center' textColor='white'>{names2[index]}</Text>
        </Box>
      ))}
    </Grid>
    </AnimatedSection>
           </Box>
           </Box>
       </>
    );
  };

export default Skills;

