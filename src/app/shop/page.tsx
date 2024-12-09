import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa';



const page = () => {
  return (
    <div className=''>
    <div className="relative">
    <Image className="w-screen" src={"/images/s1.png"} alt="img1" width={1440} height={316} />
    
    <div className="absolute inset-0 flex flex-col justify-center items-center font-bold  space-y-2">
        <h1 className='text-2xl'>Shop</h1>
        <Link href="/">
        <p>Home</p>
        </Link>
        <Link href="/shop">
        <p>Shop</p>
        </Link>
    </div>
</div>




    <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
      {/* Filter and Results Info Section */}
      <div className="flex items-center">
        {/* Filter Button */}
        <button className="flex items-center bg-white border border-gray-300 px-3 py-2 text-gray-600 rounded hover:bg-gray-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 14.414V19a1 1 0 01-1 1H9a1 1 0 01-1-1v-4.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          Filter
        </button>
        {/* Results Info */}
        <span className="ml-6 text-gray-600">Showing 1-16 of 32 results</span>
      </div>

      {/* Sort By Section */}
      <div className="flex items-center">
        <label htmlFor="sort" className="mr-2 text-gray-600">
          Sort by
        </label>
        <select
          id="sort"
        //   value={sortOption}
        //   onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded bg-white text-gray-600"
        >
          <option value="Default">Default</option>
          {/* Add more sort options here */}
        </select>
      </div>
    </div>  





<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]'>
  <div>
    <Image src={"/images/image1.png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Syltherine</h1>
    <p className='text-gray-500 ml-4'>stylish cafe chair</p>
    <h1 className='ml-3'>Rp 2.500.000  
      <del className='text-gray-500'>Rp 3.500.000</del>
    </h1>
  </div>

  <div>
    <Image src={"/images/image1.png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Syltherine</h1>
    <p className='text-gray-500 ml-4'>stylish cafe chair</p>
    <h1 className='ml-3'>Rp 2.500.000  
      <del className='text-gray-500'>Rp 3.500.000</del>
    </h1>
  </div>

  <div>
    <Image src={"/images/images (1).png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Lolito</h1>
    <p className='text-gray-500 ml-4'>luxury big sale</p>
    <h1 className='ml-3'>Rp 2.500.000  
      <del className='text-gray-500'>Rp 3.500.000</del>
    </h1>
  </div>

  <div>
    <Image src={"/images/images (2).png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Respira</h1>
    <p className='text-gray-500 ml-4'>bar table and stool</p>
    <h1 className='ml-3'>Rp 2.500.000  
      <del className='text-gray-500'>Rp 3.500.000</del>
    </h1>
  </div>
</div>



<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]'>
  <div>
    <Image src={"/images/images (3).png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Grifo</h1>
    <p className='text-gray-500 ml-4'>Night lamp</p>
    <h1 className='ml-3'>Rp 1.500.000  
    </h1>
  </div>

  <div>
    <Image src={"/images/images (4).png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Muggo</h1>
    <p className='text-gray-500 ml-4'>small mug</p>
    <h1 className='ml-3'>Rp 150.000  
    </h1>
  </div>

  <div>
    <Image src={"/images/images (5).png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Pingky</h1>
    <p className='text-gray-500 ml-4'>cute bed set</p>
    <h1 className='ml-3'>Rp 7.500.000  
      <del className='text-gray-500'>Rp 14.000.000</del>
    </h1>
  </div>

  <div>
    <Image src={"/images/image 9.png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>potty</h1>
    <p className='text-gray-500 ml-4'>Minimolist flower pot</p>
    <h1 className='ml-3'>Rp 500.000  
    </h1>
  </div>
</div>



<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]'>
  <div>
    <Image src={"/images/image1.png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Syltherine</h1>
    <p className='text-gray-500 ml-4'>stylish cafe chair</p>
    <h1 className='ml-3'>Rp 2.500.000  
      <del className='text-gray-500'>Rp 3.500.000</del>
    </h1>
  </div>

  <div>
    <Image src={"/images/image1.png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Syltherine</h1>
    <p className='text-gray-500 ml-4'>stylish cafe chair</p>
    <h1 className='ml-3'>Rp 2.500.000  
      <del className='text-gray-500'>Rp 3.500.000</del>
    </h1>
  </div>

  <div>
    <Image src={"/images/images (1).png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Lolito</h1>
    <p className='text-gray-500 ml-4'>luxury big sale</p>
    <h1 className='ml-3'>Rp 2.500.000  
      <del className='text-gray-500'>Rp 3.500.000</del>
    </h1>
  </div>

  <div>
    <Image src={"/images/images (2).png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Respira</h1>
    <p className='text-gray-500 ml-4'>bar table and stool</p>
    <h1 className='ml-3'>Rp 2.500.000  
      <del className='text-gray-500'>Rp 3.500.000</del>
    </h1>
  </div>
</div>



<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]'>
  <div>
    <Image src={"/images/images (3).png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Grifo</h1>
    <p className='text-gray-500 ml-4'>Night lamp</p>
    <h1 className='ml-3'>Rp 1.500.000  
    </h1>
  </div>

  <div>
    <Image src={"/images/images (4).png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Muggo</h1>
    <p className='text-gray-500 ml-4'>small mug</p>
    <h1 className='ml-3'>Rp 150.000  
    </h1>
  </div>

  <div>
    <Image src={"/images/images (5).png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>Pingky</h1>
    <p className='text-gray-500 ml-4'>cute bed set</p>
    <h1 className='ml-3'>Rp 7.500.000  
      <del className='text-gray-500'>Rp 14.000.000</del>
    </h1>
  </div>

  <div>
    <Image src={"/images/image 9.png"} alt='hero2' width={285} height={301}/>
    <h1 className='font-bold text-[24px]'>potty</h1>
    <p className='text-gray-500 ml-4'>Minimolist flower pot</p>
    <h1 className='ml-3'>Rp 500.000  
    </h1>
  </div>
</div>


<Image className='w-screen' src={"/images/Frame 161.png"} alt='img2' width={1440} height={270}/>
</div>

   
  )
}

export default page
