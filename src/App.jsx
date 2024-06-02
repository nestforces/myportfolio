import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
import IndexPortfolio from './Pages/Index/IndexPortfolio';
import Index from './Pages/New Index/Index'

function App() {

  return (
    <ChakraProvider>
      {/* <IndexPortfolio /> */}
      <Index />
    </ChakraProvider>
  )
}

export default App
