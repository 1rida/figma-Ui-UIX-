import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
       <h1 className='bg-pink-100 py-[20px] text-2xl flex items-center px-3'>|  Asgaard sofa</h1>

       <Image src={"/images/Group 103.png"} alt='img4' width={1440} height={820}/>



    </div>
  )
}

export default page