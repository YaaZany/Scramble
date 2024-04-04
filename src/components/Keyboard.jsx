// eslint-disable-next-line no-unused-vars
import React from 'react'

const Keyboard = () => {
  return (
    /* A whole Keyboard layout */
    <div className='font-geologica font-bold w-full px-3 flex flex-col gap-1 items-center'>
      {/* First Row */}
      <div className='flex flex-row justify-evenly w-[390px] text-center gap-1'>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>Q</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>W</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>E</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>R</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>T</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>Y</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>U</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>I</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>O</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>P</button>
      </div>
      {/* Second Row */}
      <div className='flex flex-row justify-evenly w-[350px] text-center gap-1'>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>A</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>S</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>D</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>F</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>G</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>H</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>J</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>K</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>L</button>
      </div>
      {/* Third Row */}
      <div className='flex flex-row justify-evenly w-full text-center gap-1'>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>ENTER</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>Z</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>X</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>C</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>V</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>B</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>N</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>M</button>
        <button className='border-solid border-black/70 border-[2px] bg-secondary rounded-md items-center flex cursor-pointer min-h-[46px] justify-center p-[3px] w-full'>Backspace</button>
      </div>
    </div>
  )
}

export default Keyboard