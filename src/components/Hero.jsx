import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div>
              {/* Gradiente de sobreposição */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-20"
        style={{ backgroundImage: `url(${assets.sunset})` }}
      >

      </div>
      
      <div className='w-full h-screen text-white container flex flex-col mx-auto justify-between '>

        <div className=' w-full h-[30rem] flex justify-between'>
            <div className='mt-60 w-full flex justify-between px-5'>
            <div>
                <h1 className='text-3xl '>Porto</h1>
                <p className='text-[5rem] font-semibold'>30º</p>
            </div>
              <div>
                <p>Nuvens</p>
              </div>
            </div>

        </div>

          <div className=" w-full h-[30rem] relative">
           
            <div className="flex gap-10 w-auto justify-center items-center absolute inset-x-0 bottom-12 px-6">

            <div className="bg-gray-500/50 p-5 px-10 rounded flex gap-12">

            <div className='flex flex-col'>
                
                <p className='font-bold text-lg'>65F</p>
                <p>Feels Like</p>
                </div>

                <div className='flex flex-col'>
                <p  className='font-bold text-lg'>20%</p>
                <p>Humidade</p>
                </div>

                <div className='flex flex-col'>
                <p  className='font-bold text-lg'>12Mph</p>
                <p>Força vento</p>
                </div>

            </div>

            </div>

          </div>
       </div>
   
              
               
     



    </div>
  );
};

export default Hero;
