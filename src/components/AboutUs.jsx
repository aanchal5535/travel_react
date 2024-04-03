import React from 'react'
import About from '../assests/maldives2.jpg'
import { NavLink } from 'react-router-dom'
import Blog from './Blog/Blog'

const AboutUs = () => {
  return (
    <div className="w-full px-0 py-48 bg-slate-100">
    <div className="flex flex-col-2 items-center justify-center">
      <div className='px-24 py-0'>
        <h1 className='capitalize font-bold pb-4'> Travel </h1>
        <p className='mx-8 my-0 pb-4'>
        Travel is a user-friendly website  that offers information about tourist attractions all  over the world. The main purpose of this platform is to give the travel destination information to the users. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt pariatur, in minima corrupti beatae voluptatum blanditiis cupiditate eum natus rem quod sit, tenetur libero porro magni impedit nihil iusto tempora!
        </p>
        <NavLink>
        <button>Show More</button>
        </NavLink>
      </div>
      
      <div className="w-full h-auto flex justify-center items-center">
        <figure className='relative'>
          <img
            src={About}
            alt="Hero"
            className="w-[80%] h-auto"
          />
        </figure>
      </div>
    </div>
    <Blog/>
  </div>
  )
}

export default AboutUs
