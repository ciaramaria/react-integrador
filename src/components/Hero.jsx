import React, { useState } from 'react';
import Input from './Input';
import { useSelector } from 'react-redux';
import { popularsales, topratesales } from '../data/data.js';
import InputComponent from './InputComponent';
import Rendericer from './Rendericer';



const Hero = ({ heroapi: {title, subtitle, btntext, img, } }) => {
 



  return (
    <>
      
    <div className='relative h-auto w-auto flex flex-col bg '>
        <div className='relative opacity-100 z-200 grid items-center justify-items-center '>
            <div className='grid items-center justify-items-center mt-10 md:mt-24'>
            <h1 className='text-3xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-950 text-center '>{title}</h1>
            <h1 className='text-2xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-900 text-center '>{subtitle}</h1>
                
           
                <button className='button-theme bg-black shadow-black-100	rounded-lg my-5 '>{btntext}  </button>






                {/* <div className="pumba-container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Hero Section</h1>
      <InputComponent
        ifExists={false}
        id={id}
        color="from-sky-600 to-indigo-600"
        shadow="shadow-lg shadow-blue-500"
        title={title}
        text={text}
        img={img}
        btn=""
        rating=""
        price={price}
      />
    </div> */}













                
            </div>
            <div className='flex items-center '>

                <img 
                src={img} 
                alt="hero-img/img" 
                className='w-auto h-[20vh] lg:h-[55vh] md:h-[40vh] sm:h-[15vh] xsm:h-[10vh] ' />
                
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Hero