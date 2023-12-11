'use client';

import React from 'react'
import Navbar from '@/components/Navbar';
import { motion, useScroll, useTransform } from 'framer-motion';
import FlowDiagram from '@/components/FlowDiagram';
import PrettyMatrix from '@/components/PrettyMatrix';
import WsaDemo from '@/components/WsaDemo';
import FunList from '@/components/FunList';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import DropInWords from '@/components/DropInWords';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [activePage, setActivePage] = React.useState('Our Work')
  const [contactOpen, setContactOpen] = React.useState( false )

  const flowLayers = [
    {
      name: 'Data Aquistion Layer',
      nodes: [ 'Nova Web Crawler', 'Satellite Imagery', 'Open-Source Data' ],
      color: 'primary-dull',
    },
    {
      name: 'Virtualized Data Layer',
      nodes: [ 'ETL - Data Processing' ],
      color: 'primary',
    },
    {
      name: 'Persistent Storage Layer',
      nodes: [ 'Persistent Storage' ],
      color: 'primary-soft',
    },
    {
      name: 'Virtualized Analysis Layer',
      nodes: [ 'Data Visualization Dashboards', 'Weak Signal Analysis (WSA)', 'Machine Learning Modeling' ],
      color: 'primary-softer',
    },
    {
      name: 'Client Presentation Layer',
      nodes: [ 'Data-Driven Decision Making', 'Geographically Targeted Interventions' ],
      color: 'primary-light',
    }
  ]

  const bg1Ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress: bg1Progress } = useScroll({ 
    target: bg1Ref, 
    offset: ["start end", "end start"] 
  })

  const bg2Ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress: bg2Progress } = useScroll({ 
    target: bg2Ref, 
    offset: ["start end", "end start"] 
  })
  
    return (
        <div className='flex-col justify-center items-center h-fit w-screen overflow-x-hidden overflow-y-scroll bg-white'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mukta+Mahee:200,300,400,500,600,700"></link>
      
            <div className='w-full fixed z-50 top-0'>
                <Navbar activePage={ activePage } setActivePage={ setActivePage } rootPage='home' contactOpen={contactOpen} setContactOpen={ setContactOpen } />
            </div>

            { contactOpen && (
                <div className='w-full h-full fixed top-0 z-[49]'>
                    <ContactForm contactOpen={contactOpen} setContactOpen={ setContactOpen } />
                </div>
            )}

            <div className='relative w-screen h-fit flex flex-col justify-center items-center font-mukta-mahee'>
                <div className='w-full h-[30vh] lg:h-[40vh] relative overflow-hidden'>
                    <div className='absolute text-3xl lg:text-6xl text-white z-40 top-[50%] left-[20%]'>
                        Our Work
                    </div>

                    <motion.div 
                        style={{ 
                            scale: useTransform(bg1Progress, [0.9, 0], [1, 2])
                        }}
                        ref={ bg1Ref }
                        className="w-full h-full bg-[url('/components/map_header.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                    >
                        <div className='w-full h-full bg-primary-dull bg-opacity-[0.8] backdrop-blur-sm publications-texture'></div>
                    </motion.div>
                </div>

                <div className='w-full h-[30vh] flex justify-center items-center text-xl lg:text-3xl text-black font-semibold lg:px-[20vw] px-[10vw] bg-neutral-white'>
                    <DropInWords />
                </div>

                <FunList />

                <Partners />

                <div className='w-full px-[5vw] lg:px-[10vw] py-[10vh] bg-white flex flex-col'>
                    <div className=' px-[10vw] flex justify-center '>
                        <h1 className=' font-bold text-3xl lg:text-6xl text-primary-dull mb-[5vh]'>
                            Data-To-Decision Architecture 
                        </h1>
                    </div>
                    <FlowDiagram layers={ flowLayers } text_color='white'/>

                    <div className=' text-xl lg:text-3xl text-black font-thin px-[10vw] mt-[5vh]'>
                        Explore our innovative Data-to-Decision Architecture, where sophisticated analysis and insightful modeling converge to deliver empowering results. 
                        With precise synthesis of a problem&apos;s components, this methodology drives impactful decision-making.
                    </div>
                </div>

                <div ref={bg2Ref} className='w-full h-[170vh] lg:h-[150vh] xl:h-[140vh] relative overflow-hidden'>
                    <div className='absolute h-full w-full flex lg:text-3xl text-xl flex-col lg:px-0 px-[10vw] justify-center items-center z-40 font-thin'>
                        <h1 className=' text-white text-3xl lg:text-6xl font-bold '>
                            Weak Signal Analysis
                        </h1>

                        <p className='text-white mt-[5vh] mb-[5vh] lg:px-[20vw]'>
                            Adapted from advanced methodologies originally developed for detecting foreign submarines and clandestine underground nuclear weapon tests, 
                            our proprietary Weak-Signal Analysis is an innovative method that uncovers intricate patterns to deliver predictive insights across vast open-source data.
                        </p>

                        <p className='text-white mb-[5vh] lg:px-[20vw]'>
                            Vast arrays of data are collected, cleaned, and verified to reveal the intricate interplay of indicators that represent populations, regions, and their environments.
                        </p>

                        <p className=' italic mb-[5vh] lg:px-[20vw] text-neutral-gray-light'>
                            Explore the myriad of indicators that characterize a successful environmentally-sustainable business venture in Liberia
                        </p>

                        <div className='w-full flex justify-center items-center text-8xl text-white'>
                            <PrettyMatrix />
                        </div>
                    </div>

                    <motion.div 
                        className="w-full h-full bg-[url('/components/midtest2.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                    >
                        <div className='w-full h-full bg-primary-dark bg-opacity-[0.93] backdrop-blur-sm'></div>
                    </motion.div>
                </div>

                <div className='h-fit w-full'>
                    <WsaDemo />
                </div>

                <Footer fadeColor='white' setContactOpen={ setContactOpen } />
                
            </div>
        </div>  
  )
}
