

import React from 'react';
// Import icons from a library like 'react-icons'
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFramer } from 'react-icons/si';
import { ExternalLink, } from 'lucide-react'; // For the link icons

const techIcons = {
  "Next.js": <SiNextdotjs className="w-6 h-6 text-black" />,
  "React": <SiReact className="w-6 h-6 text-blue-400" />,
  "Tailwind": <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
  "TypeScript": <SiTypescript className="w-6 h-6 text-blue-600" />,
  "Framer Motion": <SiFramer className="w-6 h-6 text-purple-500" />,
};


const myProjects = [
  {
    id: 1,
    title: "Aura E-commerce Store",
    description: "A full-stack solution featuring seamless product discovery and a secure checkout flow.",
    image: "/project1-thumb.png",
    stack: ["React", "Next.js", "Tailwind"],
    liveLink: "https://aura.example.com",
    // githubLink: "https://github.com/yourname/aura"
  },
  {
    id: 2,
    title: "TaskFlow Dashboard",
    description: "An analytics and task management platform providing real-time data insights.",
    image: "/project2-thumb.png",
    stack: ["TypeScript", "Next.js", "Framer Motion"],
    liveLink: "https://taskflow.example.com",
    // githubLink: "https://github.com/yourname/taskflow"
  },
  {
    id: 3,
    title: "TaskFlow Dashboard",
    description: "An analytics and task management platform providing real-time data insights.",
    image: "/project2-thumb.png",
    stack: ["TypeScript", "Next.js", "Framer Motion"],
    liveLink: "https://taskflow.example.com",
    // githubLink: "https://github.com/yourname/taskflow"
  },
  {
    id: 4,
    title: "TaskFlow Dashboard",
    description: "An analytics and task management platform providing real-time data insights.",
    image: "/project2-thumb.png",
    stack: ["TypeScript", "Next.js", "Framer Motion"],
    liveLink: "https://taskflow.example.com",
    // githubLink: "https://github.com/yourname/taskflow"
  }
];

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <h2 className="text-3xl font-bold text-[#222222] mb-12" >
        Projects<span className="">.</span>
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {myProjects.map((project) => (
          <div key={project.id} className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-200">


            <div className="rounded-2xl overflow-hidden mb-6 bg-gray-50 border border-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>


            <h3 className="text-[#222222] font-bold mb-3 md:text-xl">{project.title}</h3>


            <div className="flex gap-4 mb-4">
              {project.stack.map((techName) => (
                <div key={techName} title={techName} className="shadow-sm flex gap-1 items-center border border-gray-300 rounded-lg py-1 px-2 md:py-2 md:px-3 text-gray-700 mb-2">
                  {techIcons[techName] || <span className="text-xs md:text-lg">{techName}</span>}
                </div>
              ))}
            </div>


            <p className="text-gray-600 mb-8 leading-relaxed text-[15px] md:text-[17px]">
              {project.description}
            </p>


            <div className="flex flex-wrap  items-center justify-center ">
              <a
                href={project.liveLink}
                className="flex items-center gap-2 justify-center  bg-black text-white py-3 px-10 md:py-4 md:px-12 rounded-full font-semibold  hover:bg-white hover:text-black hover:border transition text-sm"
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
    </section>
  );
};

export default Projects;