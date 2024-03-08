import { Box, Flex, Text, Image, Button, Grid, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, Textarea, Input, HStack, Spacer, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, } from "@chakra-ui/react";
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
import { useRef } from 'react';


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
    htmllogo, csslogo, javascriptlogo, typescriptlogo, 
    javalogo, reactlogo, nodelogo, kotlinlogo, 
    chakrauilogo, mysqllogo, sequelizelogo, prismalogo, gitlogo,
  ];
  
  const names = [
    'HTML', 'CSS', 'Javascript', 'Typescript', 
    'Java', 'React', 'Node', 'Kotlin', 'Chakra UI', 'MySQL', 'Sequelize', 'Prisma', 'Git'
  ];
  
  const Skills = () => {
    return (
        <>
        <Box bgGradient='linear(to-b, #222222, #802a5e)' p={{ base: '50px', md:'20px' }} mt='50px'>
           <Text fontSize='4xl' textColor='white' textAlign='center' fontWeight='bold' fontStyle='italic'>Skills</Text>
           <Grid mb='30px' w='100%' rowGap='30px' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}>
                {logos.map((logo, index) => (
                    <Box key={index} boxSize='100px' margin='auto'>
                        <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                            <ThreeScene imageSrc={`${logo}`} />
                        </Canvas>
                        <Text textAlign='center' textColor='white'>{names[index]}</Text>
                    </Box>
                ))}
            </Grid>
           </Box>
       </>
    );
  };

export default Skills;

