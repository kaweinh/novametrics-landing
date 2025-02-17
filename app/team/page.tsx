'use client';

import React from 'react'
import Navbar from '@/components/Navbar';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

type MemberInfo = {
    name: string,
    title: string,
    imgTag: string,
    linkUrl: string
}

const members: Array<MemberInfo> = [
    { name: 'Dr. Gregory van der Vink', title: 'FOUNDER', imgTag: "bg-[url('/team/greg.jpg')]", linkUrl: 'https://www.linkedin.com/in/gregory-van-der-vink-2808228b/'},
    { name: 'James Phillips', title: 'CEO', imgTag: "bg-[url('/team/james.png')]", linkUrl: 'https://www.linkedin.com/in/james-phillips8/'},
    { name: 'Erica Phillips', title: 'SENIOR PROGRAM COORDINATOR', imgTag: "bg-[url('/team/erica.png')]", linkUrl: 'https://www.linkedin.com/in/erica-p867/'},
    { name: 'Dr. Jeffrey Park', title: 'SENIOR ADVISOR', imgTag: "bg-[url('/team/jeffrey.jpg')]", linkUrl: 'https://www.linkedin.com/in/jeffreyparkyalegeo/'},
    { name: 'Katherine Carlson', title: 'SENIOR DATA ANALYST', imgTag: "bg-[url('/team/katie.jpg')]", linkUrl: 'https://www.linkedin.com/in/katie-carlson-65447412a/'},
    { name: 'Kurt Weinheimer', title: 'SENIOR SCIENTIST', imgTag: "bg-[url('/team/kurt.jpg')]", linkUrl: 'https://www.linkedin.com/in/kurtweinheimer/'},
]

export default function Home() {
    const [activePage, setActivePage] = React.useState('Team')
    const [contactOpen, setContactOpen] = React.useState( false )

    const bg1Ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress: bg1Progress } = useScroll({ 
        target: bg1Ref, 
        offset: ["start end", "end start"] 
    })

    const getPersonObject = (  coverUrl: string, borderColor: string ) => {
        return (
            <div 
                className={ `relative w-[100px] h-[100px] lg:h-[140px] lg:w-[140px] rounded-full ${coverUrl} border-2 border-${borderColor} rounded-2xl overflow-hidden bg-cover object-cover bg-no-repeat `}
                style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0, 1)' }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className='absolute z-20 w-full h-full bg-primary-light cursor-pointer bg-opacity-[0.5] backdrop-blur-sm flex justify-center items-center publications-texture'
                >
                    <div className="w-[40px] h-[40px] bg-[url('/components/linkedin-black.svg')] bg-contain object-fill bg-center "></div>
                </motion.div>
            </div>
        )
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
                        Leadership Team
                    </div>

                    <motion.div 
                        style={{ 
                            scale: useTransform(bg1Progress, [0.9, 0], [1, 2])
                        }}
                        ref={ bg1Ref }
                        className="w-full h-full bg-[url('/components/team.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                    >
                        <div className='w-full h-full bg-primary-dull bg-opacity-[0.85] backdrop-blur-md publications-texture'></div>
                    </motion.div>
                </div>

                <div className='w-full h-fit lg:py-[20vh] lg:px-[10vw] xl:px-[10vw] py-[10vh] pl-[5vw] pr-[10vw] bg-neutral-white flex justify-center items-center text-black font-mukta-mahee text-3xl'>
                    <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-20 lg:gap-y-32 justify-center items-center'>
                        { members.map((member) => (
                            <a key={member.name} href={`${member.linkUrl}`} target='_blank'>
                                <div className='grid grid-cols-2 cursor-pointer'>
                                    
                                    <div className='flex justify-center items-center'>
                                        { getPersonObject(member.imgTag, 'neutral-white') }
                                    </div>

                                    <div className='flex flex-col justify-center items-center'>
                                        <div className='text-center text-xl font-semibold my-4'>
                                            { member.name }
                                        </div>

                                        <div className='text-center text-lg font-light tracking-[0.3rem]'>
                                            { member.title }
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <Footer fadeColor='neutral-white' setContactOpen={ setContactOpen } />

            </div>
        </div>  
    )
}
