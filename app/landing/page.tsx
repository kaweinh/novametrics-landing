'use client';

import Image from 'next/image'
import React from 'react'
import Navbar from '@/components/Navbar';
import Splash from '@/components/Splash';
import Features from '@/components/Features';
import AboutUs from '@/components/AboutUs';
import Vision from '@/components/Vision';
import Commitment from '@/components/Commitment';
import Partners from '@/components/Partners';
import TestAnimation from '@/components/TestAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '@/components/Footer';

export default function Home() {
  const [activePage, setActivePage] = React.useState('Home')
  
  const bg1Ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ 
    target: bg1Ref, 
    offset: ["start end", "end start"] 
  })

  return (
    <div className='flex-col justify-center items-center h-fit w-screen overflow-x-hidden overflow-y-scroll'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mukta+Mahee:200,300,400,500,600,700"></link>
      
      <div className='w-full fixed z-50 top-0'>
        <Navbar activePage={ activePage } setActivePage={ setActivePage } rootPage='home' />
      </div>

      <div className='z-30 relative bg-primary-dull bg-opacity-90'>
        <Splash />
      </div>

      <div ref={ bg1Ref }>
        <motion.div 
          className="absolute w-screen h-screen bg-[url('/components/midtest3.png')] bg-cover object-cover bg-no-repeat z-10"
          style={{ 
            //opacity: scrollYProgress,
            //scale: useTransform(scrollYProgress, [0, 1], [1.5, 2])
            scale: 1.5
          }}
        ></motion.div>
      </div>

      <div className='z-20'>
        <Features />
      </div>

      <div className='z-20 relative bg-primary-dull bg-opacity-90'>
        <AboutUs />
      </div>

      <Vision />
      <Commitment />

      <div>
        <Partners />
      </div>

      <div className='w-full h-[10vh] bg-neutral-white'></div>
      
      <Footer fadeColor='neutral-white' />

    </div>  
  )
}
