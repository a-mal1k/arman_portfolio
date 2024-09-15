import React from 'react'
import mailSVG from '../assets/icons/mail.svg';
import phoneSVG from '../assets/icons/phone.svg'

const Footer = () => {
  return (
    <footer className='w-full static bottom-0 z-20 bg-stone-200 dark:bg-slate-700 rounded shadow-xl'>
      <div className='container mx-auto p-4 flex flex-row justify-center items-center gap-4'>
        <a href='mailto:aliarman.in@gmail.com' className='text-xs lg:text-sm flex items-center gap-2 font-light'>
         <img src={mailSVG} alt="mail" />
         <span>aliarman.in@gmail.com</span>
        </a>
        <a href='tel:+919899732743' className='text-xs lg:text-sm font-light flex items-center gap-2'>
        <img src={phoneSVG} alt="mail" />
         <span>+919899732743</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer