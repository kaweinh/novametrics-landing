import React from 'react'
import SweepReveal from './SweepReveal'
import { motion } from "framer-motion";

const Commitment = () => {
    return (
        <div className='w-full h-fit p-[10vw] flex bg-neutral-white font-mukta-mahee text-my-midnight-blue'>
            <div className=' flex '>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="lg:w-[600px] items-center justify-center z-30"
                >
                    <div className=" relative pb-[100%] flex items-center justify-center">
                        <div className="absolute top-0 w-full h-full items-center flex justify-center">
                            <div className="absolute z-30 w-full h-full">
                                <div className="absolute w-full h-full bg-[url('/components/greg-goated-pic-3x.png')] bg-center bg-contain object-contain bg-no-repeat z-30" ></div>
                            </div>
                        </div>
                    </div>                     
                </motion.div>
            </div>

            <div className=' flex flex-col ml-[10vw]'>
                <div className='text-6xl mb-10 text-accent-dark font-bold'> Values and Integrity </div>
                <div className='w-full text-3xl'>
                    <div className='leading-[5vh]'>
                        <SweepReveal texts={[
                            `Our commitment extends beyond just data; its about trust, understanding, and collaboration.`,
                            
                            `This commitment drives us to embrace the subtle complexities and nuances of different environments and challenges, 
                            ensuring our analytical services remain precise and actionable.`
                        ]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commitment