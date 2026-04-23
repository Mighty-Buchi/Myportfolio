'use client'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    
    <div className='flex items-center justify-between md:mr-10  py-1 sticky top-0 z-50 bg-white w-full '>
      <div className='md:hidden'>
        <span className='inline-flex items-center justify-center py-2 px-4 gap-2 bg-white border border-gray-100 shadow-sm rounded-full md:hidden'>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className='text-[12px]  text-gray-800'>
            Available for New Projects
          </span>
        </span>
      </div>
      <div className='hidden justify-center items-center text-2xl leading-none md:flex  '>
        <a href="">DEVV_ <span className='text-yellow-300'>EL</span></a>
      </div>
      <nav className='hidden md:flex'>
        <ul className='flex items-center '>
          <li className=' nav '><Link href="/">Home</Link></li>
          <li className=' nav '><Link href="/about">About</Link></li>
          <li className=' nav'><Link href="/project">Project</Link></li>
          <li className=' nav'><Link href="/workflow">Workflow</Link></li>
          <li className=' nav'><Link href="/contact">Contact me!</Link></li>
        </ul>
      </nav>


      <div className="md:hidden relative z-1">
        <Hamburger size={18} toggled={open} toggle={setOpen} />
      </div>

      <div
        className={`fixed top-1 right-0 h-screen w-[250px] bg-white shadow-xl flex flex-col pt-20  gap-6   items-center  transform transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <Link href="/" className='nav nav-mobile' onClick={() => setOpen(false)}>Home</Link>
        <Link href="/about" className='nav nav-mobile ' onClick={() => setOpen(false)}>About</Link>
        <Link href="/project" className='nav nav-mobile' onClick={() => setOpen(false)}>Project</Link>
        <Link href="/workflow" className='nav nav-mobile' onClick={() => setOpen(false)}>Workflow</Link>
        <Link href="/contact" className='nav nav-mobile' onClick={() => setOpen(false)}>Contact me!</Link>
      </div>
    </div>
  )
}

export default Header
