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


import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useRef, useState } from 'react';


extend({ OrbitControls });

const SphereWithImage = ({ imageSrc, error, setError }) => {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageSrc, (texture) => {
      // If the image fails to load, set the error state to true
      if (texture === undefined) {
        setError(true);
      }
    });
    const meshRef = useRef();
  
    useFrame(() => {
      // Rotate the ball around the y-axis
      meshRef.current.rotation.y += 0.01;
    });
  
    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[50, 32, 32]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  };
  
  const ThreeScene = ({ imageSrc, error }) => {
    const { camera, gl } = useThree();
    const orbitControlsRef = useRef();
  
    useFrame(() => {
      orbitControlsRef.current.update();
    });
  
    camera.position.set(100, 0, 0);
  
    // If there is an error, return null to prevent the sphere from rendering
    if (error) {
      return null;
    }
  
    return (
      <>
        <SphereWithImage imageSrc={imageSrc} error={error} setError={null} />
        <orbitControls enableZoom={false} ref={orbitControlsRef} args={[camera, gl.domElement]} />
      </>
    );
  };
  
  const Skills = () => {
    const [error, setError] = useState(false);

    return (
        <>
        <Box bgGradient='linear(to-b, #222222, #802a5e)' p={{ base: '50px', md:'20px' }} mt='50px'>
           <Text fontSize='4xl' textColor='white' textAlign='center' fontWeight='bold' fontStyle='italic'>Skills</Text>
           {htmllogo ? (
                   <Grid w='100%' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}>
                       {[htmllogo, csslogo, javascriptlogo, typescriptlogo, javalogo, reactlogo, nodelogo, kotlinlogo, chakrauilogo, mysqllogo].map(
           (logo, index) => (
             <Box key={index} boxSize='100px' margin='auto'>
               <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                 <ThreeScene imageSrc={`${logo}`} error={error} setError={setError} />
               </Canvas>
             </Box>
           )
         )}
                   </Grid>
                   ) : (
                   <Text>Loading in desktop</Text>
                   )}
           </Box>
       </>
    );
  };

export default Skills;

