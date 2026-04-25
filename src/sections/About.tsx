'use client'
import React from 'react'
import { AiFillCode } from 'react-icons/ai';
import { FaCss3Alt, FaLaptopCode, FaReact } from 'react-icons/fa';
import { MdDownload, MdEventAvailable } from "react-icons/md";
import { RiNextjsFill } from 'react-icons/ri'
import Skills from '../components/Skills';
import { SiTailwindcss } from 'react-icons/si';
import { BsJavascript, BsTypescript } from 'react-icons/bs';
import { IoLogoHtml5 } from 'react-icons/io5';


const About = () => {
  return (
    <div className='bg-gray-100'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4   p-5 justify-center  max-w-7xl m-auto'>
        <div className="flex flex-col bg-white rounded-2xl border border-white justify-center items-center gap-25 shadow-sm">
          <div className="relative w-full max-w-37.5 aspect-square mt-4">

            <div className="absolute inset-0 rounded-full flex justify-center items-center overflow-hidden bg-gray-200">
              <FaLaptopCode size={120} className="" />
            </div>

          </div>
          <div className='text-center'>
            <p className='uppercase text-2xl font-bold text-[#222222] mb-2'>buchi ihiaso</p>
            <p className='text-[#7b7b7b] mb-3'>ihiasobuchi@gmail.com</p>
            <button className='bg-black py-3 px-8 text-white rounded-full mb-3 flex items-center gap-2  hover:bg-white hover:text-black hover:border transition-all duration-200 ease-in-out hover:cursor-pointer'>Download CV <span><MdDownload /></span> </button><br />
          </div>
        </div>


        <div className='flex flex-col gap-5'>
          <div className='flex flex-col bg-white border border-white shadow-sm rounded-2xl p-4'>
            <h1 className='flex flex-col md:flex-row font-bold text-3xl text-[#222222] items-center  md:gap-3 mb-3'>About Me <small className='text-sm font-normal text-emerald-500 flex items-center gap-1'> <span><MdEventAvailable size={20} /></span> open to work</small></h1>
            <p className='text-sm md:text-base leading-relaxed mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dignissimos excepturi ut maxime nostrum necessitatibus nemo, odio cum distinctio officia!</p>
          </div>
          <div className='flex flex-col bg-white border border-white shadow-sm rounded-2xl p-4'>
            <h3 className='tracking-widest text-sm text-[#7B7B7B] font-bold mb-4'>LATEST ROLES</h3>
            <div className='flex mb-4 gap-1 items-center'>
              <span className='border-3'><AiFillCode size={40} /> </span>
              <span>
                <span className='text-[#222222] font-bold'>Frontend Engineer <br /></span>
                <span className='text-[#7B7B7B] text-sm'>Freelance/Remote</span>
              </span>
            </div>
            <span className='tracking-widest text-sm text-[#7B7B7B] font-bold mb-2' >MAIN STACK</span>
            <div className='flex  flex-wrap gap-1' >
              <Skills stack='NextJs' icon={<RiNextjsFill  className="skills" />} />
              <Skills stack='React' icon={<FaReact  className="skills" />} />
              <Skills stack='tailwind' icon={<SiTailwindcss  className="skills" />} />
              <Skills stack='Typescript' icon={<BsTypescript  className="skills" />} />
              <Skills stack='HTML' icon={<IoLogoHtml5  className="skills" />} />
              <Skills stack='CSS' icon={<FaCss3Alt  className="skills"  />} />
              <Skills stack='Javascript' icon={<BsJavascript  className="skills" />} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
