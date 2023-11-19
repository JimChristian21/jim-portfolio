import React from 'react';
import addressMap from '../images/address.png';
import { FaLocationDot, FaEnvelope, FaMobileScreenButton, FaGithub, FaLinkedin } from 'react-icons/fa6'

const Contacts = () => {
  return (
    <div id='Contacts' className='text-white w-full flex flex-col items-center md:items-start md:flex-row px-10'>
      <h2 className='text-3xl font-semibold text-center color-3 md:hidden'>Contacts</h2>
      <div className='w-1/2 order-last md:order-first'>
        <h2 className='text-5xl font-semibold text-center color-3 hidden md:block'>Contacts</h2>
        <div className='h-full flex flex-col text-md lg:text-2xl'>
          <p className='mb-3'><FaLocationDot className='inline'/> Veramount Residence, Luz, Mabolo, Cebu City 6000</p>
          <p className='mb-3'><FaEnvelope className='inline'/> jimcrhistianedllantes9@gmail.com</p>
          <p className='mb-3'><FaMobileScreenButton className='inline'/> +639673444947</p>
          <p className='mb-3'><FaGithub className='inline'/> <a href='https://github.com/JimChristian21' target='_blank'>JimChristian21</a></p>
          <p className='mb-3'><FaLinkedin className='inline'/> <a href='https://www.linkedin.com/in/jim-christian-edullantes-165978198' target='_blank'>Jim Christian Edullantes</a></p>
        </div>
      </div>
      <div className='w-1/2 h-full my-3'>
        <img src={addressMap} alt='Address' />
      </div>
    </div>
  )
} 

export default Contacts