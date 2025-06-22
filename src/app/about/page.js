"use client"
import React from 'react'
import { Image } from '@heroui/react'
const page = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8'>
      <div className='bg-[rgb(24,24,27)] w-full max-w-6xl rounded-lg min-h-[80vh] flex flex-col'>
        {/* Header */}
        <h4 className='text-2xl sm:text-3xl lg:text-4xl text-white text-center mt-4 sm:mt-6 lg:mt-8 font-bold mb-4 sm:mb-6 lg:mb-8'>
          About Me
        </h4>
        
        {/* Content Container */}
        <div className='flex-1 flex flex-col lg:flex-row items-center lg:items-stretch px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8'>
          
          {/* Text Content */}
          <div className='w-full lg:w-1/2 text-white flex flex-col justify-center order-2 lg:order-1 mt-6 lg:mt-0'>
            <div className='space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0'>
              
              <p className='text-sm sm:text-base lg:text-[17px] leading-relaxed'>
                I&#39;m Tanpreet, a passionate Full Stack Web Developer with expertise in the MERN stack — MongoDB, Express.js, React, Node.js and Next.js. I enjoy building scalable, high-performance web applications with clean, maintainable code.
              </p>
              
              <p className='text-sm sm:text-base lg:text-[17px] leading-relaxed'>
                With hands-on experience in both frontend and backend development, I focus on delivering seamless user experiences and efficient server-side logic. I love solving real-world problems through code and always strive to write optimized, production-ready solutions.
              </p>
              
              <p className='text-sm sm:text-base lg:text-[17px] leading-relaxed'>
                I&#39;m a strong believer in continuous learning, clean architecture, and collaboration. Whether it&#39;s creating dynamic interfaces or architecting RESTful APIs, I&#39;m always up for a challenge.
              </p>
              
              <p className='text-base sm:text-lg lg:text-[20px] font-semibold text-center lg:text-left mt-6 lg:mt-8'>
                Let&#39;s Create Something Unforgettable
              </p>
              
            </div>
          </div>
          
          {/* Avatar Section */}
          <div className='w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2'>
            <div className='bg-white rounded-full flex items-center justify-center p-1 shadow-xl'>
              <Image
                src="/myavatar.jpg"
                alt="Tanpreet's Avatar"
                width={150}
                height={150}
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-[200px] lg:h-[200px] rounded-full shadow-lg object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default page
