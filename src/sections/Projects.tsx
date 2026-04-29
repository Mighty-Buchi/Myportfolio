
import React from 'react';
// Import icons from a library like 'react-icons'
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFramer, SiCss, SiHtml5 } from 'react-icons/si';
import { ExternalLink, } from 'lucide-react'; // For the link icons
import { FaCss3Alt } from 'react-icons/fa6';

const techIcons = {
  "Next.js": <SiNextdotjs className="w-6 h-6 text-black" />,
  "React": <SiReact className="w-6 h-6 text-blue-400" />,
  "Tailwind": <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
  "TypeScript": <SiTypescript className="w-6 h-6 text-blue-600" />,
  "Framer Motion": <SiFramer className="w-6 h-6 text-purple-500" />,
  "css":<FaCss3Alt className="w-6 h-6 text-blue-600"/>,
  "html":<SiHtml5 className="w-6 h-6 text-orange-400"/>
};


const myProjects = [
  {
    id: 1,
    title: "Aura E-commerce Store",
    description: "A high-performance storefront built with React, focused on visual storytelling and seamless navigation. Features a custom-branded shopping experience, optimized image delivery, and a clean, mobile-first design using Tailwind CSS.",
    image: "/favy.png",
    stack: ["React", "css", "Framer Motion"],
    liveLink: "https://favy-eta.vercel.app/",
    // githubLink: "https://github.com/yourname/aura"
  },
  {
    id: 2,
    title: "Mock Autentication and API search dashboard",
    description: `
         ✅Login page (phone validation + mock auth).
         ✅Main page (API list + live search).
         ✅ Detail page (dynamic item info).
         ✅ Filter search
         🛠️ Used React Hooks, API integration & clean UI`,
    image: "/mock.png",
    stack: ["html", "css", "Framer Motion"],
    liveLink: "https://mock-pearl-one.vercel.app/",
    // githubLink: "https://github.com/yourname/taskflow"
  },
  {
    id: 3,
    title: "TaskFlow Dashboard",
    description: "An analytics and task management platform providing real-time data insights.",
    image: "/dark.png",
    stack: ["TypeScript", "Next.js", "Framer Motion"],
    liveLink: "https://taskflow.example.com",
    // githubLink: "https://github.com/yourname/taskflow"
  },
  {
    id: 4,
    title: "TaskFlow Dashboard",
    description: "An analytics and task management platform providing real-time data insights.",
    image: "/dark.png",
    stack: ["TypeScript", "Next.js", "Framer Motion"],
    liveLink: "https://taskflow.example.com",
    // githubLink: "https://github.com/yourname/taskflow"
  }
];

const Projects = () => {
  return (
    <section className=" mx-auto px-4  py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#222222] mb-12 sticky top-15 md:static" >
          Projects<span className="text-blue-600">.</span>
        </h2>


        <div className="flex flex-col md:grid md:grid-cols-2 gap-10  ">
          {myProjects.map((project) => (
            <div key={project.id} className="sticky top-27 md:static  group bg-white rounded-3xl p-4 md:p-6 border border-gray-300 shadow-md hover:shadow-lg transition-all duration-200">


              <div className="rounded-2xl overflow-hidden mb-5 bg-gray-50 border border-gray-200  ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 "
                />
              </div>


              <h3 className="text-[#222222] font-bold mb-2 md:text-lg">{project.title}</h3>


              <div className="flex gap-4 mb-2 ">
                {project.stack.map((techName) => (
                  <div key={techName} title={techName} className="shadow-sm flex gap-1 items-center border border-gray-300 rounded-lg py-1 px-2 md:py-2 md:px-2 text-gray-700 mb-2">
                    {techIcons[techName as keyof typeof techIcons] || <span className="text-xs md:text-lg">{techName}</span>}
                  </div>
                ))}
              </div>


              <p className="text-gray-600 mb-5 leading-relaxed text-[14px] md:text-[15px] whitespace-pre-line">
                {project.description}
              </p>


              <div className="flex flex-wrap  items-center justify-center ">
                <a
                 target="_blank" rel="noopener noreferrer"
                  href={project.liveLink}
                  className="flex items-center gap-2 justify-center  bg-black text-white py-3 px-10 md:py-4 md:px-12 rounded-full font-semibold  hover:bg-white hover:text-black hover:border-black border border-transparent  transition text-sm"
                >
                  View Live <ExternalLink size={18} />
                </a>
                {/* <a 
                href={project.githubLink} 
                className="flex items-center justify-center gap-2 text-gray-600 font-medium hover:text-black underline transition"
              >
                View Code <ExternalLink size={18} />
              </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;