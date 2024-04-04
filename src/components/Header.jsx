// eslint-disable-next-line no-unused-vars
import React from 'react'

import { logo } from "../assets/"

const Header = () => {
  return (
    <div className='py-[5vh] flex justify-center items-center gap-1'>
      <h2 className='text-primary font-geologica font-bold text-[28px]'>scramble</h2>
      <img src={logo} alt="logo" className='h-[40px] w-full'/>
    </div>
  )
}

export default Header