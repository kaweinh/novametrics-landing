import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import SweepReveal from './SweepReveal'
import PartnerTicker from './PartnerTicker'

type Props = {}

const AboutUs = (props: Props) => {

  return (
    <div className='w-full h-fit relative px-[3vw] lg:px-[5vw] xl:px-[10vw] py-[100px] lg:pt-[30vh] xl:py-[30vh] flex flex-col lg:flex-row items-center justify-center bg-neutral-white font-mukta-mahee text-black lg:curve-top-desktop curve-top-mobile'>
        <div className='relative mb-10 lg:mb-0 lg:mr-20'>
            <div className=" rounded-full w-[200px] h-[220px] lg:w-[400px] lg:h-[400px] bg-[url('/components/clip_art.png')] bg-cover object-cover bg-no-repeat z-10"></div>
        </div>

        <div className='flex flex-col bg-white rounded-xl p-6 md:p-10'>
            <div className=' xl:text-3xl text-xl font-bold text-primary-dull mb-10'> Novametrics </div>

            <div className='flex xl:text-xl text-base mt-[0px] font-thin'>
                <div className='w-full leading-8 lg:leading-10' >
                    <p>
                        An advanced analytics firm that provides sophisticated data-to-decision services for government agencies, NGOs, foundations, impact investment funds, and aid and development groups.
                    </p>

                    <br></br>

                    <p>
                        Our journey began through a series of advanced research seminars taught at Princeton University. Ever-adapting, our holistic approach exploits 
                        the vast sea of open-source data with the power of AI and Weak-Signal Analysis to provide the next generation of predictive analytics. 
                        Our data-to-decision (D2D) capabilities provide you with the most advanced tools for your decision-making needs. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs