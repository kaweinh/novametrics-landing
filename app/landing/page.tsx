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
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [activePage, setActivePage] = React.useState('Home')
  const [contactOpen, setContactOpen] = React.useState( false )

  return (
    <div className='relative flex-col justify-center items-center h-fit w-screen overflow-x-hidden overflow-y-scroll'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mukta+Mahee:200,300,400,500,600,700"></link>
      
      <div className='w-full fixed z-50 top-0'>
        <Navbar activePage={ activePage } setActivePage={ setActivePage } rootPage='home' contactOpen={contactOpen} setContactOpen={ setContactOpen } />
      </div>

      { contactOpen && (
        <div className='w-full h-full fixed top-0 z-40'>
          <ContactForm contactOpen={contactOpen} setContactOpen={ setContactOpen } />
        </div>
      )}

      <div className='z-30 relative bg-primary-dull bg-opacity-90 publications-texture'>
        <Splash setContactOpen={ setContactOpen } />
      </div>

      <div>
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

      <div className='z-20 relative bg-primary-dull bg-opacity-90 publications-texture'>
        <AboutUs />
      </div>

      <Vision />
      <Commitment />

      <div>
        <Partners />
      </div>

      <div className='w-full lg:h-[20vh] h-[10vh] bg-neutral-white'></div>
      
      <Footer fadeColor='neutral-white' setContactOpen={ setContactOpen } />

    </div>  
  )
}
