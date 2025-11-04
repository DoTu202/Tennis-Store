import React from 'react'
import Navbar from './Components//Navigation/Navbar'
import Hero from './Components/Hero/Hero'
import '@fontsource/nunito-sans/400.css'; 
import '@fontsource/nunito-sans/700.css';
import '@fontsource/nunito-sans/300.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App