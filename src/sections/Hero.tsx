"use client"
import React from 'react'
import { Poppins, Montserrat } from "next/font/google"
import Image from 'next/image';
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from 'next/dist/client/link';
import { motion } from 'framer-motion'
// const inter = Poppins({
//   subsets: ["latin"],
//   weight: '800'
// });



const Hero = () => {

  const herotext = `Welcome!`
  const hero = herotext.split('')

  const herotext2 = `i build high performance websites and webapps that creates an impact & makes brands stand out.`
  const hero2 = herotext2.split('')


  return (
    <div className='flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between  mt-15 w-[90%] m-auto max-w-[1440px] md:mt-3  '>
      <div className='flex flex-col gap-5 justify-center items-center md:flex-1 md:gap-7  md:mb-25 '>
        <span className='hidden items-center justify-center py-3 px-8 gap-3 bg-white border border-gray-100 shadow-sm rounded-full md:inline-flex  md:mb-10'>
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-400"></span>
          </span>
          <span className='text-[17px]  text-gray-800'>
            Available for New Projects
          </span>
        </span>
        {/* <h1 className='text-transparent  [-webkit-text-stroke:1.7px_black] text-6xl md:text-[70px] lg:text-[100px] '>Welcome<span className="text-black">!</span></h1> */}
        <h1 className='text-transparent  [-webkit-text-stroke:1.7px_black] text-6xl md:text-[70px] lg:text-[100px] '>
          {hero.map((word, index) => (
            <motion.span key={index}
              initial={{ filter: "blur(10px)", opacity: 1, y: 50 }}
              animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >{word}
            </motion.span>
          ))}
          {/* <span className="text-black">!</span> */}
        </h1>
        <p className='font-bold uppercase'><span className='text-2xl'>"</span> i'm a frontend developer. . .<span className='text-2xl'>"</span></p>
        <p className='text-center  text-[15px]  text-[#1A1A1A] md:text-[18px]'>
          {hero2.map((h2, index) => (
            <motion.span key={index}
              initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
              animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.009 * index }}
            >{h2}
            </motion.span>
          ))}
        </p>
        <motion.div 
        whileTap={{scale:0.9}}
        transition={{type:"spring", stiffness:100, damping:15}}
        >
          <Link href="/#contact" className='flex gap-2 py-[10px] px-8 bg-gradient-to-br from-black hover:from-gray-800 to -50% to-neutral-900 hover:scale-110 duration-200 ease-in-out text-white justify-center items-center rounded-xl  mt-2'>Let's work <FaCircleArrowRight /></Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{type:"spring", stiffness:200, damping:10, }}

        className='md:flex-1 flex justify-center w-auto '>
        <Image src="/hero_image.png" alt="Hero Image" width={500} height={500} priority className='  ' />
      </motion.div>
    </div>
  )
}

export default Hero
