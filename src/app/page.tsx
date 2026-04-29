// import React from 'react'
// import Header from '../components/Header'
// import {Oswald, Montserrat} from "next/font/google"

// const font= Oswald({
//   subsets:["latin"],
//   weight:'400'
// });
// const mon= Montserrat({
//   subsets:["latin"],
//   weight: "variable",
// });

// const page = () => {
//   return (
//     <div>
//       <h1 className={`${mon.className} text-2xl font-bold`}>Buchi</h1>
//       <p className={font.className}>Testing out some google fonts</p>
//     </div>
//   )
// }

// export default page


import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skillset from '../sections/Skillset'
import Projects from '../sections/Projects'
import Testimonies from '../sections/Testimonies'
import Contact from '../sections/Contact'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skillset/>
      <Projects/>
      <Testimonies/>
      <Contact/>
    </div>
  )
}

export default page
