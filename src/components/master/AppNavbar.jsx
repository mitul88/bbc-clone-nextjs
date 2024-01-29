'use client'
import { categories } from '@/mock/categoryList'
import { FaUser, FaSearch } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";
import React, { useState } from 'react'
import Link from 'next/link';


export const AppNavbar = () => {
    const [showAllCat, setShowAllCat] = useState(false);
    const handleShowAllCat = () => {
        setShowAllCat(!showAllCat)
    }
  return (
    <div className='bg-black w-full 2xl:px-52 px-28  py-5 flex items-center justify-between'>
        <div className='flex'>
            <div className="bg-white font-bold px-3 py-2">B</div>
            <div className="bg-white bg-white font-bold px-3 py-2 mx-2">B</div>
            <div className="bg-white bg-white font-bold px-3 py-2">C</div>
        </div>

        <button className='flex items-center bg-[#07192B] pr-24 py-2'>
            <FaUser className='text-white mx-2'/>
            <p className="text-lg text-white">Sign in</p>
        </button>

        <nav className='text-white flex items-center justify-between text-sm 2xl:text-lg'>
            <Link href="/" className='mr-3'>Home</Link>
            {categories.slice(0, 8).map((category, index)=> {
                return (
                    <Link href={`/category/${category["title"]}`} key={category.id} className='mr-3'> {category["title"]} </Link>
                )
            })}

            <button>
                <BiDotsHorizontal className='text-white' onClick={handleShowAllCat}/>
            </button>

        </nav>

        <button className='flex items-center bg-[#07192B] pr-24 py-2'>
            <FaSearch  className='text-white mx-2'/>
            <p className="text-lg text-white  ">Search BBC</p>
        </button>
    </div>
  )
}
