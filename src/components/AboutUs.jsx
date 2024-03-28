import React from 'react'
import About from '../assests/maldives2.jpg'
import { NavLink } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className="w-full px-0 py-48">
    <div className="flex flex-col-2 items-center justify-center">
      <div className='px-24 py-0'>
        <h1 className='capitalize font-bold pb-4'> Travel </h1>
        <p className='mx-8 my-0 pb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          atque temporibus veniam doloribus libero ad error omnis voluptates
          animi! Suscipit sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur modi et numquam adipisci? Tempora, in laboriosam quam quis doloribus, inventore iste earum incidunt accusamus autem eveniet placeat architecto itaque?
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
  </div>
  )
}

export default AboutUs
