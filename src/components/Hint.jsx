import React from 'react'

const Hint = () => {
  return (
    <div className='text-primary font-geologica font-bold flex flex-col gap-2 justify-center items-center'>
      <h2>Potential Word:</h2>
      <div className="flex justify-center items-center gap-1">
        <div className='flex w-[50px] h-[50px] border-solid border-black/70 border-[1px] bg-secondary rounded-md justify-center items-center'>
          <h1 className='bg-transparent text-black font-geologica text-[26px] font-bold'>A</h1>
        </div>
        <div className='flex w-[50px] h-[50px] border-solid border-black/70 border-[1px] bg-secondary rounded-md justify-center items-center'>
          <h1 className='bg-transparent text-black font-geologica text-[26px] font-bold'>P</h1>
        </div>
        <div className='flex w-[50px] h-[50px] border-solid border-black/70 border-[1px] bg-secondary rounded-md justify-center items-center'>
          <h1 className='bg-transparent text-black font-geologica text-[26px] font-bold'>R</h1>
        </div>
        <div className='flex w-[50px] h-[50px] border-solid border-black/70 border-[1px] bg-secondary rounded-md justify-center items-center'>
          <h1 className='bg-transparent text-black font-geologica text-[26px] font-bold'>I</h1>
        </div>
        <div className='flex w-[50px] h-[50px] border-solid border-black/70 border-[1px] bg-secondary rounded-md justify-center items-center'>
          <h1 className='bg-transparent text-black font-geologica text-[26px] font-bold'>L</h1>
        </div>
      </div>
    </div>
  )
}

export default Hint