import React from 'react'
import SweepReveal from './SweepReveal'
import { motion } from "framer-motion";

const Commitment = () => {
    return (
        <div className='w-full h-fit px-[3vw] lg:px-[5vw] xl:px-[10vw] py-[10vh] flex flex-col lg:flex-row items-center bg-neutral-white font-mukta-mahee text-black'>
            <div className=' flex lg:mr-20'>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="xl:w-[400px] lg:w-[300px] md:w-[400px] w-[300px] items-center justify-center z-30"
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

            <div className=' flex flex-col lg:w-full p-6 md:p-10 bg-white rounded-xl font-thin'>
                <div className='xl:text-4xl text-2xl mb-10 text-primary-dull font-bold'> Values and Integrity </div>
                <div className='w-full xl:text-xl text-base '>
                    <p className='leading-8 lg:leading-10'>
                        Our commitment extends beyond just data; its about trust, understanding, and collaboration.
                    </p>

                    <br></br>
                    <p className='leading-8 lg:leading-10'>
                        This commitment drives us to embrace the subtle complexities and nuances of different environments and challenges, 
                        ensuring our analytical services remain precise and actionable.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Commitment