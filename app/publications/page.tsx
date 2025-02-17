'use client';

import React from 'react'
import Navbar from '@/components/Navbar';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Home() {
    const [activePage, setActivePage] = React.useState('Publications')
    const [contactOpen, setContactOpen] = React.useState( false )

    const bg1Ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress: bg1Progress } = useScroll({ 
        target: bg1Ref, 
        offset: ["start end", "end start"] 
    })

    const getPdfObject = (pdfUrl: string, coverUrl: string, borderColor: string, contained: boolean, blank: boolean = false) => {
        if( blank ) {
            return (
                <div 
                    className={ `relative h-[50vh] w-full border-2 border-black bg-neutral-gray-dark bg-opacity-30 rounded-2xl overflow-hidden bg-contain object-fill bg-no-repeat `}
                    style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0, 0.75)' }}
                >
                </div>
            )
        }

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
                            className='absolute z-20 w-full h-full bg-primary-light cursor-pointer bg-opacity-[0.5] backdrop-blur-sm flex justify-center items-center publications-texture'
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
                            className='absolute z-20 w-full h-full bg-primary-light cursor-pointer bg-opacity-[0.5] backdrop-blur-sm flex justify-center items-center publications-texture'
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
                <Navbar activePage={ activePage } setActivePage={ setActivePage } rootPage='home' contactOpen={contactOpen} setContactOpen={ setContactOpen } />
            </div>

            { contactOpen && (
                <div className='w-full h-full fixed top-0 z-[49]'>
                    <ContactForm contactOpen={contactOpen} setContactOpen={ setContactOpen } />
                </div>
            )}

            <div className='relative w-screen h-fit flex flex-col justify-center items-center font-mukta-mahee'>
                <div className='w-full h-[30vh] lg:h-[40vh] relative overflow-hidden'>
                    <div className='absolute xl:text-5xl text-3xl text-white z-40 top-[50%] left-[20%]'>
                        Publications
                    </div>

                    <motion.div 
                        style={{ 
                            scale: useTransform(bg1Progress, [0.9, 0], [1, 2])
                        }}
                        ref={ bg1Ref }
                        className="w-full h-full bg-[url('/components/abstract.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                    >
                        <div className='w-full h-full bg-primary-dull bg-opacity-[0.8] backdrop-blur-lg publications-texture'></div>
                    </motion.div>
                </div>

                <div className='w-full py-[10vh] flex justify-center items-center text-base xl:text-2xl text-black font-semibold lg:px-[20vw] px-[10vw] bg-neutral-white'>
                    Discover a glimpse into Novametrics&apos; expertise through our featured publications, showcasing a snapshot of our extensive research 
                    and innovative analytical solutions
                </div>

                <div className='w-full h-fit py-[20vh] px-[10vw] bg-gradient-to-b from-white to-neutral-white justify-center items-center text-white font-mukta-mahee text-3xl hidden lg:flex'>
                    <div className='w-full grid grid-cols-3 gap-8'>
                        <div className='flex flex-col gap-8 mt-[20vh]'>
                            { getPdfObject("/publications/pdfs/tip.pdf", "bg-[url('/publications/covers/tip.jpg')]", 'primary-dull', false) }
                            { getPdfObject("/publications/pdfs/ctip_laos.pdf", "bg-[url('/publications/covers/ctip_laos.png')]", 'primary-dull', false) }
                        </div>

                        <div className='flex flex-col gap-8'>
                            { getPdfObject("/publications/pdfs/jid.pdf", "bg-[url('/publications/covers/jid.jpg')]", 'primary-dull', false) }
                            { getPdfObject("/publications/pdfs/ctip_bangladesh.pdf", "bg-[url('/publications/covers/ctip_bangladesh.png')]", 'primary-dull', false) }
                        </div>

                        <div className='flex flex-col gap-8 mt-[20vh]'>
                            { getPdfObject("/publications/pdfs/ctip_philippines.pdf", "bg-[url('/publications/covers/ctip_philippines.png')]", 'primary-dull', false) }
                            { getPdfObject("/publications/pdfs/geotimes.pdf", "bg-[url('/publications/covers/geotimes.png')]", 'primary-dull', false) }
                        </div>
                    </div>
                </div>

                <div className='w-full h-fit py-[10vh] px-[10vw] bg-gradient-to-b from-white to-neutral-white justify-center items-center text-white font-mukta-mahee text-3xl flex lg:hidden'>
                    <div className='w-full grid grid-cols-1 gap-8'>
                        <div className='flex flex-col gap-8'>
                            { getPdfObject("/publications/pdfs/jid.pdf", "bg-[url('/publications/covers/jid.png')]", 'primary-dull', true) }
                            { getPdfObject("/publications/pdfs/ctip_bangladesh.pdf", "bg-[url('/publications/covers/ctip_bangladesh.png')]", 'primary-dull', false) }
                            { getPdfObject("/publications/pdfs/tip.pdf", "bg-[url('/publications/covers/tip.png')]", 'primary-dull', false) }
                            { getPdfObject("/publications/pdfs/ctip_laos.pdf", "bg-[url('/publications/covers/ctip_laos.png')]", 'primary-dull', false) }
                            { getPdfObject("/publications/pdfs/ctip_philippines.pdf", "bg-[url('/publications/covers/ctip_philippines.png')]", 'primary-dull', false) }
                            { getPdfObject("/publications/pdfs/geotimes.pdf", "bg-[url('/publications/covers/geotimes.png')]", 'primary-dull', false) }
                        </div>
                    </div>
                </div>

                <Footer fadeColor='neutral-white' setContactOpen={ setContactOpen } />
            </div>
        </div>  
    )
}
