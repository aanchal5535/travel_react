import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Search from './components/Search'
import Testimonals from './components/Testimonals'
import { Route, Routes } from 'react-router-dom'
import Registration from './components/Registration'
import Contact from './components/Contact'
import Destination from './components/Destination'
import Landing from './components/Landing'
import Select from './components/Select'






const App = () => {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='signup' element={<Registration/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    <Landing/>
    <Destination/>
    <Search/>
    <Select/>
    <Carousel/>
    <Testimonals/>
   <Footer/>
   
    </>
  )
}

export default App
