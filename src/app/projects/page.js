"use client"
import React from 'react'
import {Card, CardHeader, Image,} from "@heroui/react"
import Link from "next/link";
import { motion } from 'framer-motion';
const page = () => {

    const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0,
      },
    },
  };

  const fadefirstright = {
    hidden: { opacity: 0, x: -800 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };
  const fadefirstleft = {
    hidden: { opacity: 0, x: 800 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };
  const fadesecondright = {
    hidden: { opacity: 0, x: -800 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };
  const fadesecondleft = {
    hidden: { opacity: 0, x: 800 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      {/* Projects Title - Responsive */}
      <div className='flex justify-center items-center mt-4 sm:mt-6 lg:mt-8 mb-6 sm:mb-8 lg:mb-12'>
        <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center'>
          PROJECTS
        </span>
      </div>

      {/* Projects Grid - Fully Responsive */}
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto px-2 sm:px-4 overflow-hidden'
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Project 1 - Code Of War */}
        <motion.a 
          variants={fadefirstright} 
          href="https://feedback-system-rt.vercel.app/" 
          className="block w-full h-[200px] sm:h-[220px] lg:h-[250px] rounded-lg hover:scale-105 transition-transform duration-500 group"
        >
          <Card className='rounded-lg h-full'>
            <CardHeader className="absolute z-10 top-1 flex-col items-start bg-black/20 rounded-t-lg">
              <h4 className="text-gray-300 font-medium text-lg sm:text-xl lg:text-2xl">
                Code Of War
              </h4>
              <p className="text-xs sm:text-sm text-white/60 uppercase font-bold">
                Click to open project
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="code of war image"
              className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src="/codeofwar.png"
            />
          </Card>
        </motion.a>

        {/* Project 2 - Feedback System */}
        <motion.a 
          variants={fadefirstleft} 
          href="https://feedback-system-rt.vercel.app/" 
          className="block w-full h-[200px] sm:h-[220px] lg:h-[250px] rounded-lg hover:scale-105 transition-transform duration-500 group"
        >
          <Card className='rounded-lg h-full'>
            <CardHeader className="absolute z-10 top-1 flex-col items-start bg-white/80 rounded-t-lg">
              <h4 className="text-black font-medium text-lg sm:text-xl lg:text-2xl">
                Feedback System
              </h4>
              <p className="text-xs sm:text-sm text-black/70 uppercase font-bold">
                Click to open project
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="feedback system image"
              className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src="/feedbacksystem.png"
            />
          </Card>
        </motion.a>

        {/* Project 3 - Quick Chat */}
        <motion.a 
          variants={fadesecondright} 
          href="https://quick-chat-eight.vercel.app/" 
          className="block w-full h-[200px] sm:h-[220px] lg:h-[250px] rounded-lg hover:scale-105 transition-transform duration-500 group"
        >
          <Card className='rounded-lg h-full'>
            <CardHeader className="absolute z-10 top-1 flex-col items-start bg-black/20 rounded-t-lg">
              <h4 className="text-gray-300 font-medium text-lg sm:text-xl lg:text-2xl">
                Quick Chat
              </h4>
              <p className="text-xs sm:text-sm text-white/60 uppercase font-bold">
                Click to open project
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Quick chat image"
              className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src="/quickchat.png"
            />
          </Card>
        </motion.a>

        {/* Project 4 - Music App */}
        <motion.a 
          variants={fadesecondleft} 
          href="https://tanpreet07.github.io/Online-Music-Web-App/" 
          className="block w-full h-[200px] sm:h-[220px] lg:h-[250px] rounded-lg hover:scale-105 transition-transform duration-500 group"
        >
          <Card className='rounded-lg h-full'>
            <CardHeader className="absolute z-10 top-1 flex-col items-start bg-black/20 rounded-t-lg">
              <h4 className="text-gray-300 font-medium text-lg sm:text-xl lg:text-2xl">
                Music App
              </h4>
              <p className="text-xs sm:text-sm text-white/60 uppercase font-bold">
                Click to open project
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Music App"
              className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src="/musicapp.png"
            />
          </Card>
        </motion.a>
      </motion.div>
    </div>
  )
}

export default page