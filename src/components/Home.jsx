import React from 'react'
import Carousel from './Hero/Carousel'
import Landing from './Hero/Landing'
import Destinations from './Hero/Destination'
import Search from './Hero/Search'
import Select from './Hero/Select'
import Testimonals from './Hero/Testimonals'
import Faq from './Hero/Faq'


const Home = () => {
  return (
    <div className='bg-slate-100'>
    <Landing/>
    <Search/>
    <Destinations/>
    <Select/>
    <Faq/>
    <Carousel/>
    <Testimonals/>
    </div>
  
  )
}

export default Home
