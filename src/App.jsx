import React from 'react'
import Header from './components/Header/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Registration from './components/Registration/Registration'
import Login from './components/Registration/Login'
import AOS from 'aos';
import "aos/dist/aos.css"
import BlogsDetails from './components/Blog/BlogDetails'
import Blogs from './components/Blog/Blogs'
import Places from './components/Places/Places'
import PlaceDetails from './components/Places/PlaceDetails'


const App = () => {

      React.useEffect(()=>{
        AOS.init({
          offset:100,
          duration : 900 ,
          easing :"ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      },[])
  return (
    <div className='bg-slate-100'>
     <Router>
    <Header />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/blogs/:id' element={<BlogsDetails />}/>
        <Route path='/places' element={<Places />}/>
        <Route path='/places/:id' element={<PlaceDetails />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
   <Footer/>
</Router>
</div>
  )
}

export default App
