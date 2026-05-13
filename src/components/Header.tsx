// 'use client'
// import Hamburger from 'hamburger-react'
// import Link from 'next/link'
// import React, { useState } from 'react'

// const Header = () => {

//   const [open, setOpen] = useState(false);

//   return (
    
//     <div className='flex items-center justify-between md:mr-10  py-1 sticky top-0 z-50 bg-white w-full '>
//       <div className='md:hidden'>
//         <span className='inline-flex items-center justify-center py-2 px-4 gap-2 bg-white border border-gray-100 shadow-sm rounded-full md:hidden'>
//           <span className="relative flex h-2.5 w-2.5">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
//           </span>
//           <span className='text-[12px]  text-gray-800'>
//             Available for New Projects
//           </span>
//         </span>
//       </div>
//       <div className='hidden justify-center items-center text-2xl leading-none md:flex  '>
//         <a href="">DEVV_ <span className='text-yellow-300'>EL</span></a>
//       </div>
//       <nav className='hidden md:flex'>
//         <ul className='flex items-center '>
//           <li className=' nav '><Link href="/">Home</Link></li>
//           <li className=' nav '><Link href="/about">About</Link></li>
//           <li className=' nav'><Link href="/project">Projects</Link></li>
          
//           <li className=' nav'><Link href="/contact">Contact me!</Link></li>
//         </ul>
//       </nav>


//       <div className="md:hidden relative z-1">
//         <Hamburger size={18} toggled={open} toggle={setOpen} />
//       </div>

//       <div
//         className={`fixed top-1 right-0 h-screen w-[250px] bg-white/5 backdrop-blur-xl flex flex-col pt-20  gap-6   items-center  transform transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"
//           }`}
//       >
//         <Link href="/" className='nav nav-mobile' onClick={() => setOpen(false)}>Home</Link>
//         <Link href="/about" className='nav nav-mobile ' onClick={() => setOpen(false)}>About</Link>
//         <Link href="/project" className='nav nav-mobile' onClick={() => setOpen(false)}>Projects</Link>
        
//         <Link href="/contact" className='nav nav-mobile' onClick={() => setOpen(false)}>Contact me!</Link>
//       </div>
//     </div>
//   )
// }

// export default Header

'use client'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div className='flex items-center justify-between md:mr-10 py-1 pl-5 sticky top-0 z-50 bg-white w-full'>
      
      
      <div 
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu} 
      />

      <div className='md:hidden'>
        <span className='inline-flex items-center justify-center py-2 px-4 gap-2 bg-white border border-gray-100 shadow-sm rounded-full'>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400"></span>
          </span>
          <span className='text-[12px] text-gray-800'>
            Available for New Projects
          </span>
        </span>
      </div>

      <div className='hidden pl-10 font-bold justify-center text-black items-center text-2xl leading-none md:flex'>
        <Link href="/">DEVV_ <span className='text-blue-600'>EL</span></Link>
      </div>

      <nav className='hidden md:flex text-black'>
        <ul className='flex items-center'>
          <li className='nav'><Link href="/">Home</Link></li>
          {/* <li className='nav'><Link href="/about">About</Link></li> */}
          <li className='nav'><Link href="/project">Projects</Link></li>
          <li className='nav'><Link href="/#contact">Contact me!</Link></li>
        </ul>
      </nav>

      
      <div className="md:hidden text-black  relative z-60">
        <Hamburger size={19} toggled={open} toggle={setOpen} />
      </div>

      
      <div
        className={`fixed top-0 right-0 h-screen w-[250px] bg-white text-black backdrop-blur-xl border-l border-gray-100 flex flex-col pt-24 gap-6 items-center shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="/" className='nav nav-mobile' onClick={closeMenu}>Home</Link>
        <Link href="/what" className='nav nav-mobile' onClick={closeMenu}>What i do?</Link>
        <Link href="/project" className='nav nav-mobile' onClick={closeMenu}>Projects</Link>
        <Link href="/#contact" className='nav nav-mobile' onClick={closeMenu}>Contact me!</Link>
      </div>
    </div>
  )
}

export default Header
