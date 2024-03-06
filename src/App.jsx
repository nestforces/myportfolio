import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
import IndexPortfolio from './Pages/Index/IndexPortfolio';

function App() {

  return (
    <ChakraProvider>
      <IndexPortfolio />
    </ChakraProvider>
  )
}

export default App
