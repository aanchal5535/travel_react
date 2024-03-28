import React from 'react'
import Header from './components/Header/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Registration from './components/Registration'
import Services from './components/Services'
import Login from './components/Login'







const App = () => {
  return (
    <>
     <Router>
    <Header />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/' element={<Services />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
   <Footer/>
</Router>
      
     
    </>
  )
}

export default App
