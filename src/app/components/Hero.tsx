import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>

        <Image className='w-screen' src={"/images/ban.png"} alt='hero' width={1440} height={716.83}/>
        <Image className='top-[869px] left-[131px] w-screen' src={"/images/banner2.png"} alt='hero1' width={1183} height={685}/>

        <h1 className='py-5 text-nowrap justify-center text-3xl font-bold items-center'>our products</h1>


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

<h1 className='flex justify-center items-center text-lg text-orange-400 my-5'>show more</h1>

<div className="flex justify-between items-start w-full">
  {/* Left side content */}
  <div className="w-[422px] h-[96px] mx-[8rem] my-[5rem]">
    <h1 className="font-extrabold text-3xl">50+ Beautiful rooms inspiration</h1>
    <p className="text-gray-600 mt-2">Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>
    <button className="text-white bg-yellow-700 mt-4 py-2 px-4">Explore more</button>
  </div>

  {/* Right side images */}
  <div className="flex justify-start items-start space-x-5">
  <Image className="w-[404px] h-[582px]" src={"/images/Rectangle 24.png"} alt="banner5" width={404} height={582} />
  <Image className="w-[372px] h-[468px]" src={"/images/Rectangle 25.png"} alt="banner6" width={372} height={468} />
</div>
</div>








        <div className="w-full pt-[30px] md:pt-[67px] pb-[50px] bg-lightBG">
            <div className="text-center relative w-full md:top-5 top-0">
                <h3 className="text-[14px] md:text-[20px] font-semibold text-Gray2">Share your setup with</h3>
                <h2 className="text-[30px] md:text-[40px] font-bold text-Gray1">#FuniroFurniture</h2>
            </div>
            <div className="flex justify-center items-center w-full "
            >
                <Image src="/images/Share.png" width={2000} height={100} alt="images"></Image>

            </div>
        </div>
        </div>
        

 )
}

export default Hero