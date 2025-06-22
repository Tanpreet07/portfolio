"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

export default function FloatingCard() {

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
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
    variants={container}
      initial="hidden"
      animate="show"
    >
    <motion.div
      variants={fadeUp}
      className="relative"
      style={{
        animation: "floatlinkedin 5s ease-in-out infinite",
        animationDelay: "1.5s",
      }}
    >
      <Card className="max-w-[400px] bg-white dark:bg-[rgb(24,24,27)] rounded-xl shadow-xl p-2 border border-gray-100 dark:border-gray-700">
        <CardHeader className="flex gap-3 mb-1">
          <Image
            className="rounded-full"
            alt="Linkedin logo"
            height={44}
            radius="sm"
            src="/linkedin.png"
            width={44}
          />
          <div className="flex flex-col">
            <p className="text-md">Linkedin</p>
          </div>
        </CardHeader>
        <Divider />
        <CardFooter>
          <Link
            className="text-blue-500 hover:underline mt-1"
            href="https://www.linkedin.com/in/tanpreet-jhally/"
          >
            Visit My Linkedin Profile
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
    <style jsx global>{`
        @keyframes floatlinkedin {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }
      `}</style>
    </motion.div>
  );
}
