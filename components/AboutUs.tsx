import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import SweepReveal from './SweepReveal'
import PartnerTicker from './PartnerTicker'

type Props = {}

const AboutUs = (props: Props) => {

  return (
    <div className='w-full h-fit relative px-[10vw] pb-[20vh] pt-[40vh] flex bg-neutral-white font-mukta-mahee text-my-midnight-blue'
        style={{ 
            clipPath: 'ellipse(100% 95% at 50% 95%)'
        }}   
    >
        <div className='w-[40%] relative'>
            <div className="absolute mix-blend-luminosity rounded-full w-[25vw] h-[50vh] bg-[url('/components/clipartppt.png')] bg-cover object-cover bg-no-repeat z-10"></div>
        </div>

        <div className='w-[60%] flex flex-col'>
            <div className=' text-6xl font-bold text-accent-dark mb-10'> About Us </div>

            <div className='flex text-3xl mt-[0px]'>
                <div className='w-full leading-[5vh]' >
                    <SweepReveal texts={[
                        `Our journey began at Princeton University, where innovative ideas met real-world challenges. Ever-adapting, 
                        our holistic approach harnesses the power of AI and Weak-Signal Analysis to provide the next generation of predictive analytics. 
                        Our data-to-decision (D2D) capabilities ensure that you are always a step ahead, leveraging something.`,
                        
                        `Novametrics is a boutique analytics firm that provides advanced data-to-decision services for government agencies, NGOs, foundations, 
                        impact investment funds, and aid and development groups.`
                    ]}/>
                </div>
            </div>
        </div>

        <div className='absolute top-0 '>
            <PartnerTicker />
        </div>
    </div>
  )
}

export default AboutUs