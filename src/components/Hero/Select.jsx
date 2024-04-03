import React from 'react'

import India from '../../assests/india.jpg';
import BoraBora2 from '../../assests/borabora2.jpg';
import China from '../../assests/china.jpg'
import USA from '../../assests/usa.jpg'
import Maldives3 from '../../assests/maldives3.jpg';
import KeyWest from '../../assests/keywest.jpg';
import SelectsCard from '../../components/Hero/SelectsCard';

const Select = () => {
  return (
    <div className='w-full mx-auto px-4 py-16 cursor-pointer grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={India} text='India' />
    <SelectsCard bg={BoraBora2} text='Maldives' />
    <SelectsCard bg={China} text='China' />
    <SelectsCard bg={USA} text='USA' />
    <SelectsCard bg={Maldives3} text='Jamaica' />
    <SelectsCard bg={KeyWest} text='Key West' />
    
        
    </div>
  )
}

export default Select