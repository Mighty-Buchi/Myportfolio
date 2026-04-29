import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";

const page = () => {
  return (
    <div className='p-5 py-10 font-bold flex flex-col gap-5'>
      <Link href="/" className='text-white bg-black rounded-2xl p-3 w-50 justify-center items-center flex gap-2'><IoMdArrowRoundBack /> Back to home </Link>
      <p>what i do page...</p>  <br />
      <p>This page is still undergoing some massive developments. please check back later to see the amazing works i have added.</p>
    </div>
  )
}

export default page
