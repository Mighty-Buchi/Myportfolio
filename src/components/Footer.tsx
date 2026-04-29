import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaWhatsapp, FaTelegram, FaLinkedin } from "react-icons/fa";
import Copyright from '../sections/Copyright';

const Footer = () => {
  return (
    <footer className="bg-black text-white min-h-[220px] max-w-[1440px] mx-auto  grid  grid-cols-1 md:grid-cols-3 gap-8 p-5">

      <div className="flex-1 p-4 flex flex-col gap-4 min-w-[300px] md:min-w-0">
        <h1 className="text-xl md:text-2xl font-bold">
          DEVV-<span className="text-blue-600">EL</span>
        </h1>
        <p className="text-white/70 text-sm md:text-base leading-relaxed">
          I build websites and web apps that make an impact—helping businesses grow and users enjoy every interaction.
          Turning ideas into digital experiences that are fast, intuitive, and memorable is what I thrive in.
        </p>
        <div className="flex justify-center items-center gap-4 ">
          <a
            href="https://x.com/Devv_el"
            target="_blank"
            rel="noopener noreferrer"
            className="list-none cursor-pointer hover:text-blue-400 transition-colors">
            <FaTwitter size='1.5em' />
          </a>
          <a
            href="https://github.com/Mighty-Buchi"
            target="_blank"
            rel="noopener noreferrer"
            className="list-none cursor-pointer hover:text-gray-400 transition-colors">
            <FaGithub size='1.5em' />
          </a>
          <a
            href="https://wa.me/2349035631639"
            target="_blank"
            rel="noopener noreferrer"
            className="list-none cursor-pointer hover:text-green-500 transition-colors">
            <FaWhatsapp size='1.5em' />
          </a>
          <a
            href="https://www.linkedin.com/in/buchi-ihiaso-56892737b/"
            target="_blank"
            rel="noopener noreferrer"
            className="list-none cursor-pointer hover:text-blue-500 transition-colors">
            <FaLinkedin size='1.5em' />
          </a>
        </div>
      </div>


      <div className="flex-1 p-4 flex flex-col gap-3 text-center min-w-[150px]">
        <h1 className="text-base md:text-lg font-bold">Quick Links</h1>
        <ul className="space-y-2 list-none">
          <li>
            <Link href="/" className="text-white/70 text-sm hover:text-white hover:scale-110 inline-block transition-all duration-200">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/what" className="text-white/70 text-sm hover:text-white hover:scale-110 inline-block transition-all duration-200">
              WHAT I DO?
            </Link>
          </li>
          <li>
            <Link href="/project" className="text-white/70 text-sm hover:text-white hover:scale-110 inline-block transition-all duration-200">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white/70 text-sm hover:text-white hover:scale-110 inline-block transition-all duration-200">
              LET'S TALK
            </Link>
          </li>
        </ul>
      </div>


      <div className="flex-1 p-4 flex flex-col gap-3 text-center min-w-[150px]">
        <h1 className="text-base md:text-lg font-bold">Niches</h1>
        <ul className="space-y-2 list-none">
          <li>
            <Link href="#" className="text-white/70 text-sm hover:text-white hover:scale-110 inline-block transition-all duration-200">
              Landing Pages
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white/70 text-sm hover:text-white hover:scale-110 inline-block transition-all duration-200">
              Personal Portfolios
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white/70 text-sm hover:text-white hover:scale-110 inline-block transition-all duration-200">
              SAAS Softwares
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white/70 text-sm hover:text-white hover:scale-110 inline-block transition-all duration-200">
              E-commerce Apps
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white/70 text-sm hover:text-white hover:scale-110 inline-block transition-all duration-200">
              Web3 Pages
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-full">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;