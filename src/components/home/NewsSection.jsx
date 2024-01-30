import React from 'react'

const NewsSection = () => {
  return (
    <section className='2xl:px-52 md:px-28 px-3 w-full flex h-96'>
        <div className='w-2/3 h-full '>
            <h2 className='font-bold text-lg border-l-4 border-red-400 pl-1'>News</h2>
        </div>
        <div className='w-1/3 bg-gray-200'></div>
    </section>
  )
}

export default NewsSection