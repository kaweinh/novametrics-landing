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
                <div className='w-full h-[40vh] relative overflow-hidden'>
                    <div className='absolute text-6xl text-white z-40 top-[50%] left-[20%]'>
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

                <div className='w-full h-[40vh] flex justify-center items-center text-3xl text-black font-semibold px-[20vw] bg-neutral-white'>
                    <DropInWords />
                </div>

                <FunList />

                <Partners />

                <div className='w-full px-[10vw] py-[10vh] bg-white flex flex-col'>
                    <div className=' px-[10vw] flex justify-center '>
                        <h1 className=' font-bold text-6xl text-primary-dull mb-[5vh]'>
                            Data-To-Decision Architecture 
                        </h1>
                    </div>
                    <FlowDiagram layers={ flowLayers } text_color='white'/>

                    <div className=' text-3xl text-black font-thin px-[10vw] mt-[5vh]'>
                        Explore our innovative Data-to-Decision Architecture, where sophisticated analysis and insightful modeling converge to empower decision-making with precision-targeted interventions.
                    </div>
                </div>

                <div ref={bg2Ref} className='w-full h-[120vh] relative overflow-hidden'>
                    <div className='absolute h-full w-full flex flex-col justify-center items-center z-40 font-thin'>
                        <h1 className=' text-white text-6xl font-bold '>
                            Weak Signal Analysis
                        </h1>

                        <p className='text-white text-3xl px-[20vw] mt-[5vh] mb-[5vh]'>
                            Adapted from cutting-edge methodologies originally developed for detecting foreign submarines and clandestine underground nuclear weapon tests, 
                            our proprietary Weak-Signal Analysis is an innovative method to uncovering hidden patterns and predictive insights across vast open-source data. 
                        </p>

                        <p className='text-white text-3xl px-[20vw] mb-[5vh]'>
                            Following data acquisition to rigorous processing and quality assurance, the creation of Pearson Correlation Matrices reveal the intricate 
                            interplay of indicators that represent populations, regions, and their environments.
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
