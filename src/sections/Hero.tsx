import React from 'react'
import { Poppins, Montserrat } from "next/font/google"
import Image from 'next/image';
import { FaCircleArrowRight } from "react-icons/fa6";

// const inter = Poppins({
//   subsets: ["latin"],
//   weight: '800'
// });



const Hero = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between  mt-15 w-[90%] m-auto max-w-[1440px] md:mt-3  '>
      <div className='flex flex-col gap-5 justify-center items-center md:flex-1 md:gap-7  md:mb-25 '>
        <span className='hidden items-center justify-center py-3 px-8 gap-3 bg-white border border-gray-100 shadow-sm rounded-full md:inline-flex  md:mb-10'>
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
          </span>
          <span className='text-[17px]  text-gray-800'>
            Available for New Projects
          </span>
        </span>
        <h1 className='text-transparent  [-webkit-text-stroke:1.7px_black] text-6xl md:text-[70px] lg:text-[100px] '>Welcome!</h1>
        <p className='font-bold uppercase'><span className='text-2xl'>"</span> i'm a frontend developer. . .<span className='text-2xl'>"</span></p>
        <p className='text-center capitalize text-[15px]  text-[#1A1A1A] md:text-[18px]'>i build high performance websites and webapps that creates an impact & makes brands stand out</p>
        <button className='flex gap-2 py-2 px-8 bg-black text-white justify-center items-center rounded-full mt-2'>Let's work <FaCircleArrowRight /></button>
      </div>
      <div className='md:flex-1 flex justify-center '>
        <Image src="/hero_image.png" alt="Hero Image" width={500} height={500} priority className='  ' />
      </div>
    </div>
  )
}

export default Hero
