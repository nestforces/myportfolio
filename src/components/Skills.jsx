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
import { useRef, useState, useEffect, } from 'react';


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




const Skills = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imagePromises = [htmllogo, csslogo, javascriptlogo, typescriptlogo, javalogo, reactlogo, nodelogo, kotlinlogo, chakrauilogo, mysqllogo].map((imageSrc) => {
        return new Promise((resolve) => {
            const image = new Image();
            image.src = imageSrc;
            image.onload = resolve;
        });
        });

        Promise.all(imagePromises)
            .then(() => setImagesLoaded(true))
            .catch((error) => console.error('Error loading images:', error));
        }, []);

    return (
        <>
         <Box bgGradient='linear(to-b, #222222, #802a5e)' p={{ base: '50px', md:'20px' }} mt='50px'>
            <Text fontSize='4xl' textColor='white' textAlign='center' fontWeight='bold' fontStyle='italic'>Skills</Text>
            {imagesLoaded && (
            <Grid w='100%' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }} >
            <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={`${htmllogo}`} />
                    </Canvas>
                </Box>
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={`${csslogo}`} />
                    </Canvas>
                </Box>
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={`${javascriptlogo}`} />
                    </Canvas>
                </Box>
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={`${typescriptlogo}`} />
                    </Canvas>
                </Box>
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={`${javalogo}`} />
                    </Canvas>
                </Box>
                <Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={`${reactlogo}`} />
                    </Canvas>
                </Box><Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={`${nodelogo}`} />
                    </Canvas>
                </Box><Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={`${kotlinlogo}`} />
                    </Canvas>
                </Box><Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={`${chakrauilogo}`} />
                    </Canvas>
                </Box><Box boxSize='100px'   margin={'auto'}>
                    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                        <ThreeScene imageSrc={`${mysqllogo}`} />
                    </Canvas>
                </Box>
            </Grid>
            )}
            </Box>
        </>
    )
}

export default Skills;