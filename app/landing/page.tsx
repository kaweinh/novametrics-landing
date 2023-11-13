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

export default function Home() {
  const [activePage, setActivePage] = React.useState('Home')

  return (
    <div className='flex-col justify-center items-center h-fit w-screen overflow-x-hidden overflow-y-auto'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mukta+Mahee:200,300,400,500,600,700"></link>
      
      <div className='w-full fixed z-50 top-0'>
        <Navbar activePage={ activePage } setActivePage={ setActivePage } rootPage='home' />
      </div>

      <TestAnimation />

      <Splash />
      <Features />
      <AboutUs />
      <Vision />
      <Commitment />
      <Partners />

    </div>  
  )
}
