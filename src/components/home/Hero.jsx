import React from 'react'

const Hero = () => {
  return (
    <section className='text-black 2xl:px-52 md:px-28 px-3'>
        <div className='w-full hidden md:flex justify-between items-center py-3'>
            <h2 className='font-bold text-xl'>Welcome to BBC.com</h2>
            <h2 className='font-bold text-xl text-gray-500'>Tuesday, 30 Janauary 2024</h2>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 md: grid-rows-4 lg:grid-rows-2 gap-3 md:gap-4 h-96 mt-3 md:mt-0'>
            <div className="col-span-2 row-span-2 bg-black"></div>
            <div className='bg-black'></div>
            <div className='bg-black'></div>
            <div className='bg-black'></div>
            <div className='bg-black'></div>
        </div>
    </section>
  )
}

export default Hero