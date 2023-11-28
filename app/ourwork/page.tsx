'use client';

import React from 'react'
import Navbar from '@/components/Navbar';
import { motion, useScroll, useTransform } from 'framer-motion';
import FlowDiagram from '@/components/FlowDiagram';
import PrettyMatrix from '@/components/PrettyMatrix';
import WsaDemo from '@/components/WsaDemo';
import FunList from '@/components/FunList';

export default function Home() {
  const [activePage, setActivePage] = React.useState('Our Work')

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
                <Navbar activePage={ activePage } setActivePage={ setActivePage } rootPage='home' />
            </div>

            <div className='relative w-screen h-fit flex flex-col justify-center items-center font-mukta-mahee'>
                <div className='w-full h-[70vh] relative overflow-hidden'>
                    <div className='absolute text-8xl text-white z-40 top-[40%] left-[20%]'>
                        Our Work
                    </div>

                    <motion.div 
                        style={{ 
                            scale: useTransform(bg1Progress, [0.9, 0], [1, 2])
                        }}
                        ref={ bg1Ref }
                        className="w-full h-full bg-[url('/components/midtest.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                    >
                        <div className='w-full h-full bg-primary-dull bg-opacity-[0.87]'></div>
                    </motion.div>
                </div>

                <div className='w-full h-[40vh] flex justify-center items-center text-3xl text-neutral-gray-dark font-semibold px-[20vw] bg-neutral-white'>
                    <div className=''>
                        Central to our approach is the recognition that every population has a complex &nbsp;
                        <span className='bg-gradient-to-r from-my-midnight-blue to-my-purple-medium lg:to-70% bg-clip-text text-transparent'> 
                            mosaic &nbsp;
                        </span> 
                        of characteristics derived from its 
                        <span className=' text-primary-dull'> demographics </span>, 
                        <span className=' text-primary-soft'> geographical location </span>, 
                        <span className=' text-accent-dark'> natural resources </span>, 
                        <span className=' text-accent'> economic activity </span>, 
                        <span className=' text-my-purple-medium'> religious sects </span>, 
                        <span className=' text-orange-300'> ethnic history </span>, 
                        <span className=' text-rose-400'> education levels </span>, 
                        <span className=' text-amber-700'> access to markets </span>, 
                        <span className=' text-sky-400'> sociocultural landscape </span>
                        [unique fabrics].
                    </div>
                </div>

                <FunList />

                <div className='w-full px-[10vw] py-[10vh] bg-white flex flex-col'>
                    <div className=' px-[10vw] flex justify-center '>
                        <h1 className=' font-bold text-6xl text-primary-dark mb-[5vh]'>
                            Data-To-Decision Architecture 
                        </h1>
                    </div>
                    <FlowDiagram layers={ flowLayers } text_color='white'/>

                    <div className=' text-3xl text-primary-dark px-[10vw] mt-[5vh]'>
                        Explore our innovative Data-to-Decision Architecture, where sophisticated analysis and insightful modeling converge to empower decision-making with precision-targeted interventions.
                    </div>
                </div>

                <div ref={bg2Ref} className='w-full h-[120vh] relative overflow-hidden'>
                    <div className='absolute h-full w-full flex flex-col justify-center items-center z-40'>
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
                        style={{ 
                            scaleX: useTransform(bg2Progress, [0, 1], [1, 1.2])
                        }}
                        className="w-full h-full bg-[url('/components/midtest2.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                    >
                        <div className='w-full h-full bg-primary-dark bg-opacity-[0.93]'></div>
                    </motion.div>
                </div>

                <div className='h-fit w-full bg-white'>
                    <WsaDemo />
                </div>

                <div className='w-full h-[50vh]'>

                </div>
                
            </div>
        </div>  
  )
}
