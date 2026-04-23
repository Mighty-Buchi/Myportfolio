import React from 'react'
import { RiNextjsFill } from 'react-icons/ri'

interface SkillsProps {
  stack: string;
  icon: React.ReactNode;
}

const Skills = ({ stack, icon }: SkillsProps) => {
  return (
    <div className='shadow-sm flex gap-2 items-center border border-gray-300 rounded-lg py-1 px-3 text-sm text-gray-700 mb-2'>
      <span>{icon}</span>
      <span>{stack}</span>
    </div>
  )
}

export default Skills
