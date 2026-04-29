// import React from 'react'

// const Skillset = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Skillset


'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Icons
import { FaReact, FaPython, FaNodeJs, FaGitAlt, FaDocker, FaCss3Alt, FaLaptopCode } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiFastapi, SiPostgresql, SiFramer, SiHtml5 } from 'react-icons/si'
import { AiOutlineCode, AiOutlineGlobal } from 'react-icons/ai'
import { MdOutlineDesignServices, MdOutlineSpeed } from 'react-icons/md'
import Image from 'next/image'
import { HiOutlinePaintBrush } from 'react-icons/hi2'
import { HiBadgeCheck } from 'react-icons/hi'

const SKILLS_DATA = {
    Frontend: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'Framer Motion', icon: <SiFramer className="text-purple-500" /> },
        { name: 'HTML', icon: <SiHtml5 className="text-orange-400 " /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} className="text-blue-600 " /> },
    ],
    Backend: [
    
        { name: 'Superbase', icon: <Image src='/superbase.png' alt='superbase' width={20} height={20} /> },
    ],
    
   Expertise: [
    { name: 'Responsive Design', icon: <AiOutlineGlobal /> },
    { name: 'UI/UX Implementation', icon: <HiOutlinePaintBrush /> },
    { name: 'Web Accessibility', icon: <HiBadgeCheck /> },
    { name: 'Performance Opt.', icon: <MdOutlineSpeed /> },
    { name: 'SEO Strategy', icon: <AiOutlineGlobal /> },
    { name: 'Headless CMS', icon: <FaLaptopCode /> },
  ],
}

const Skillset = () => {
    type TabType = "Frontend" | "Backend" | "Expertise";
    const [activeTab, setActiveTab] = useState<TabType>('Frontend')

    return (
        <section className="bg-gray-100 py-15 mt-3 px-5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-[#222222] mb-5">Skills</h2>

                <div className="flex flex-wrap gap-3 mb-2 border-b border-gray-200 pb-4">
                    {Object.keys(SKILLS_DATA).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as TabType)}
                            className={`px-1 py-1 rounded-full text-sm font-semibold transition-all duration-100 ${activeTab === tab
                                    ? '  text-black  underline underline-offset-8'
                                    : 'text-gray-500 hover:text-black'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4"
                    >
                        {SKILLS_DATA[activeTab].map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-2 md:p-5 bg-white border border-white rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out group active:scale-105"
                            >
                                <div className="text-2xl  transition-all duration-200">
                                    {skill.icon}
                                </div>
                                <span className="text-[#222222] font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Skillset



