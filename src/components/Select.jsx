import React from 'react'

import BoraBora from '../assests/borabora.jpg';
import BoraBora2 from '../assests/borabora2.jpg';
import Maldives from '../assests/maldives.jpg';
import Maldives2 from '../assests/maldives2.jpg';
import Maldives3 from '../assests/maldives3.jpg';
import KeyWest from '../assests/keywest.jpg';
import SelectsCard from './SelectsCard';

const Select = () => {
  return (
    <div className='w-full mx-auto px-4 py-16 cursor-pointer grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={BoraBora} text='Bora Bora' />
    <SelectsCard bg={BoraBora2} text='Maldives' />
    <SelectsCard bg={Maldives} text='Antigua' />
    <SelectsCard bg={Maldives2} text='Cozumel' />
    <SelectsCard bg={Maldives3} text='Jamaica' />
    <SelectsCard bg={KeyWest} text='Key West' />
    
        
    </div>
  )
}

export default Select