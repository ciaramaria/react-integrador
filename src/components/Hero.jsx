import React from 'react';
import SocialLink from './utils/SocialLink.jsx';

const Hero = ({ heroapi: {title, subtitle, btntext, img, sociallinks} }) => {
  
  return (
    <>
    <div className='relative h-auto w-auto flex flex-col '>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-center pumba-container'>
            <div className='grid items-center justify-items-center mt-28 md:mt-24'>
            <h1 className='text-5xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-950 text-center'>{title}</h1>
            <h1 className='text-5xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-900 text-center'>{subtitle}</h1>
                <button className='button-theme bg-green-200 shadow-black-100	rounded-lg my-5 '>{btntext}</button>
            </div>
            <div className='grid items-center absolute top-[33vh] lg:top-[27vh] left-0 gap-4'>
              {sociallinks?.map((val, i) => (
                <SocialLink
                  key={i}
                  icon={val.icon}
                />
              ))}
            </div>
            <div className='flex items-center'>
                <img 
                src={img} 
                alt="hero-img/img" 
                className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21bh] xsm:h-[19vh] transitions-theme -rotate-[15deg] hover:rotate-0 cursor-pointer object-fill' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero