"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState, useCallback } from "react";
import FloatingCard from "./components/FloatingCard";
import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardFooter,
  Divider,
  Image,
} from "@heroui/react";
export default function Home() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  const phrases = [
    "Full Stack Web Developer",
    "Next.js | React.js | Node.js | Express.js | MongoDB",
  ];

  const handleTyping = useCallback(() => {
    const currentPhrase = phrases[phase];

    if (isDeleting) {
      // Deleting text
      setText(currentPhrase.substring(0, text.length - 1));
      setTypingSpeed(30);
    } else {
      // Typing text
      setText(currentPhrase.substring(0, text.length + 1));
      setTypingSpeed(30);
    }

    // Check if we've finished typing the current phrase
    if (!isDeleting && text === currentPhrase) {
      // Pause at end of typing
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      // Switch to next phrase after deleting
      setIsDeleting(false);
      setPhase((phase + 1) % phrases.length);
    }
  }, [text, isDeleting, phase, phrases]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);

    const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };


  return (
    <div className="dark dark:bg-black dark:text-white bg-white text-black min-h-screen">
      {/* Header - Responsive Navigation */}
      <div className="mt-2 mx-auto w-[95%] sm:w-[90%] flex justify-between items-center px-2 sm:px-0">
        <div className="">
          <Link href='/' className="cursor-pointer">
            <Image 
              src="/logo.png" 
              width={80} 
              height={80} 
              className="dark:invert-0 invert border-none sm:w-[100px] sm:h-[100px]"
            />
          </Link>
        </div>
        <div className="">
          <ul className="flex items-center space-x-2 sm:space-x-4 text-sm sm:text-base">
            <li className="cursor-pointer"><Link href='/about'>About</Link></li>
            <li className="cursor-pointer"><Link href='/skills'>Skills</Link></li>
            <li className="cursor-pointer"><Link href='/projects'>Projects</Link></li>
            <li className="cursor-pointer">
              <Link href='https://github.com/Tanpreet07'>
                <svg height="24" viewBox="0 0 24 24" width="24" className="text-default-800 sm:w-[30px] sm:h-[30px]">
                  <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" fill="currentColor"></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content - Responsive Layout */}
      <div>
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-12 justify-center lg:justify-around items-center gap-6 lg:gap-3 min-h-[70vh] px-4 sm:px-6">
          {/* Left Section - Hero Content */}
          <motion.div
            className="flex flex-col gap-4 w-full lg:w-[52%] text-center lg:text-left order-1 lg:order-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeUp}
              className="dark:text-white tracking-tight inline font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[75px] bg-clip-text text-black bg-gradient-to-b from-white to-gray-300">
              Hi, I&#39;m <span className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-3xl sm:text-4xl md:text-5xl lg:text-[75px] bg-clip-text text-transparent bg-gradient-to-b">Tanpreet</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-xl lg:text-2xl font-mono min-h-[1.5em]">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
              Full Stack Web Developer with hands-on experience in building end-to-end web applications using the MERN stack. Focused on performance, scalability, and clean architecture.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
              I love solving real-world problems through clean and efficient code.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/projects"
                className="relative inline-flex items-center text-medium no-underline transition duration-300 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl w-full sm:w-auto text-center justify-center"
              >
                Explore Projects
              </Link>
              <Link
                href="/Tanpreet_CV.pdf"
                className="relative inline-flex items-center text-medium no-underline transition duration-300 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl w-full sm:w-auto text-center justify-center"
              >
                Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Contact Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show" 
            className="w-full lg:w-auto order-2 lg:order-2 flex flex-col items-center"
          >
            <motion.p 
              variants={fadeUp} 
              className="text-xl sm:text-[25px] relative font-bold text-center mb-6 lg:mb-8"
              style={{
                animation: "floatp 7s ease-in-out infinite",
                animationDelay: "1.5s",
              }}
            >
              Connect With Me
            </motion.p>
            
            {/* Contact Cards Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* LinkedIn Card */}
              <div className="flex justify-center">
                <FloatingCard/>
              </div>

              {/* Email Card */}
              <motion.div
                variants={fadeUp}
                className="bg-white dark:bg-[rgb(24,24,27)] rounded-xl shadow-xl p-2 border border-gray-100 dark:border-gray-700 max-w-sm mx-auto"
                style={{
                  animation: "float1 7s ease-in-out infinite",
                  animationDelay: "0.5s",
                }}
              >
                <Card>
                  <CardHeader className="flex gap-3 mb-1">
                    <Image
                      className="rounded-full"
                      alt="Gmail logo"
                      height={44}
                      radius="sm"
                      src="/email.png"
                      width={44}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">Email</p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardFooter>
                    <Link
                      className="text-blue-500 hover:underline mt-1"
                      href="mailto:tanpreetjhally300@gmail.com?subject=Hello Tanpreet&body=Hi Tanpreet,%0D%0AI found your portfolio and wanted to reach out..."
                    >
                      Send Me an Email
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>

            {/* GitHub Card - Centered below */}
            <motion.div
              variants={fadeUp}
              className="bg-white w-full max-w-[250px] mx-auto mt-4 lg:mt-2 dark:bg-[rgb(24,24,27)] rounded-xl shadow-xl p-2 border border-gray-100 dark:border-gray-700"
              style={{
                animation: "float2 5s infinite",
                animationDelay: "0.2s",
              }}
            >
              <Card>
                <CardHeader className="flex gap-3 mb-1">
                  <svg height="44" viewBox="0 0 24 24" width="44" className="text-default-800">
                    <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" fill="currentColor"></path>
                  </svg>
                  <div className="flex flex-col">
                    <p className="text-md">GitHub</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardFooter>
                  <Link
                    className="text-blue-500 hover:underline mt-1"
                    href="https://github.com/Tanpreet07"
                  >
                    Visit My GitHub Profile
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }
        @keyframes floatp {
          0%,
          100% {
            transform: translateY(2px);
          }
          50% {
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
}

