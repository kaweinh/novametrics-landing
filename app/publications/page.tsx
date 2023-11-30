'use client';

import React from 'react'
import Navbar from '@/components/Navbar';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '@/components/Footer';

export default function Home() {
    const [activePage, setActivePage] = React.useState('Publications')

    const bg1Ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress: bg1Progress } = useScroll({ 
        target: bg1Ref, 
        offset: ["start end", "end start"] 
    })

    const getPdfObject = (pdfUrl: string, coverUrl: string, borderColor: string, contained: boolean ) => {
        if( contained ) {
            return (
                <div 
                    className={ `relative h-[50vh] w-full ${coverUrl} bg-white border-2 border-${borderColor} rounded-2xl overflow-hidden bg-contain object-fill bg-no-repeat `}
                    style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0, 0.75)' }}
                >
                    <a href={`${pdfUrl}`} target='_blank'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className='absolute z-20 w-full h-full bg-accent-light cursor-pointer bg-opacity-[0.5] backdrop-blur-sm flex justify-center items-center publications-texture'
                        >
                            <div className="w-[40px] h-[40px] bg-[url('/components/new_tab_icon.png')] bg-contain object-fill bg-center"></div>
                        </motion.div>
                    </a>
                </div>
            )
        } else {
            return (
                <div 
                    className={ `relative h-[50vh] w-full ${coverUrl} border-2 border-${borderColor} rounded-2xl overflow-hidden bg-cover object-cover bg-no-repeat `}
                    style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0, 0.75)' }}
                >
                    <a href={`${pdfUrl}`} target='_blank'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className='absolute z-20 w-full h-full bg-accent-light cursor-pointer bg-opacity-[0.5] backdrop-blur-sm flex justify-center items-center publications-texture'
                        >
                            <div className="w-[40px] h-[40px] bg-[url('/components/new_tab_icon.png')] bg-contain object-fill bg-center "></div>
                        </motion.div>
                    </a>
                </div>
            )
        }
    }

    return (
        <div className='flex-col justify-center items-center h-fit w-screen overflow-x-hidden overflow-y-scroll bg-white'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mukta+Mahee:200,300,400,500,600,700"></link>
      
            <div className='w-full fixed z-50 top-0'>
                <Navbar activePage={ activePage } setActivePage={ setActivePage } rootPage='home' />
            </div>

            <div className='relative w-screen h-fit flex flex-col justify-center items-center font-mukta-mahee'>
                <div className='w-full h-[70vh] relative overflow-hidden'>
                    <div className='absolute text-8xl text-white z-40 top-[40%] left-[20%]'>
                        Publications
                    </div>

                    <motion.div 
                        style={{ 
                            scale: useTransform(bg1Progress, [0.9, 0], [1, 2])
                        }}
                        ref={ bg1Ref }
                        className="w-full h-full bg-[url('/components/abstract.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                    >
                        <div className='w-full h-full bg-accent-dark bg-opacity-[0.7] backdrop-blur-lg publications-texture'></div>
                    </motion.div>
                </div>

                <div className='w-full h-fit py-[20vh] px-[10vw] bg-neutral-white flex justify-center items-center text-white font-mukta-mahee text-3xl'>
                    <div className='w-full grid grid-cols-3 gap-8'>
                        <div className='flex flex-col gap-8 mt-[20vh]'>
                            { getPdfObject("/publications/pdfs/tip.pdf", "bg-[url('/publications/covers/tip.png')]", 'primary-light', false) }
                            { getPdfObject("/publications/pdfs/jid.pdf", "bg-[url('/publications/covers/jid.png')]", 'primary-soft', true) }
                        </div>

                        <div className='flex flex-col gap-8'>
                            { getPdfObject("/publications/pdfs/ctip_bangladesh.pdf", "bg-[url('/publications/covers/ctip_bangladesh.png')]", 'primary', false) }
                            { getPdfObject("/publications/pdfs/ctip_philippines.pdf", "bg-[url('/publications/covers/ctip_philippines.png')]", 'primary', false) }
                            { getPdfObject("/publications/pdfs/ctip_laos.pdf", "bg-[url('/publications/covers/ctip_laos.png')]", 'primary', false) }
                        </div>

                        <div className='flex flex-col gap-8 mt-[20vh]'>
                            { getPdfObject("/publications/pdfs/cve_bangladesh.pdf", "bg-[url('/publications/covers/cve_bangladesh.png')]", 'primary', false) }
                            { getPdfObject("/publications/pdfs/cve_philippines.pdf", "bg-[url('/publications/covers/cve_philippines.png')]", 'primary', false) }
                        </div>
                    </div>
                </div>

                <Footer fadeColor='neutral-white' />
            </div>
        </div>  
    )
}
