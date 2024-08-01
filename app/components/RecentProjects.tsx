"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { projects } from '@/data';
import { FaLocationArrow } from 'react-icons/fa';

const PinContainer = dynamic(() => import('./ui/3d-pin').then((mod) => mod.PinContainer), {
  ssr: false,
});

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h1 className="heading">
        A small selection of {' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={link} href={link}>
              <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                  <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                    <img src="/bg.png" alt="bg-img" className='w-full h-full object-cover' />
                  </div>
                  <img src={img} alt={title} className='z-10 absolute bottom-0 max-w-full max-h-full' />
                </div>
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-center'>
                  {title}
                </h1>
                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-center mt-2'>
                  {des}
                </p>
                <div className="flex items-center justify-between w-full mt-7 mb-3">
                  <div className="flex items-center relative">
                    {iconLists.map((icon, index) => (
                      <div 
                        key={icon} 
                        className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center'
                        style={{
                          marginLeft: index === 0 ? '0px' : '-10px',  // Adjust this value to control overlap
                          zIndex: iconLists.length - index  // Higher index items appear on top
                        }}
                      >
                        <img src={icon} alt={icon} className='p-2' />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                        Check Live Site
                    </p>
                    <FaLocationArrow className='ms-3' color='#cbacf9'/>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects;