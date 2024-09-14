import React from 'react'
import mailSVG from '../assets/icons/mail.svg';
import phoneSVG from '../assets/icons/phone.svg'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='container mx-auto p-4 flex justify-center items-center gap-4'>
        <a href='mailto:aliarman.in@gmail.com' className='flex items-center gap-2'>
         <img src={mailSVG} alt="mail" />
         <span>aliarman.in@gmail.com</span>
        </a>
        <a href='tel:+919899732743' className='flex items-center gap-2'>
        <img src={phoneSVG} alt="mail" />
         <span>+919899732743</span>
        </a>
      </div>
    </div>
  )
}

export default Footer