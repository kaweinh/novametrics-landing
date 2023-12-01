import React from 'react'
import SweepReveal from './SweepReveal'
import { motion } from "framer-motion";

const Commitment = () => {
    return (
        <div className='w-full h-fit px-[10vw] py-[20vh] flex items-center bg-neutral-white font-mukta-mahee text-black'>
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

            <div className=' flex flex-col ml-[10vw] p-10 bg-white rounded-xl'>
                <div className='text-6xl mb-10 text-primary-soft font-bold'> Values and Integrity </div>
                <div className='w-full text-3xl leading-[5vh]'>
                    <p>
                        Our commitment extends beyond just data; its about trust, understanding, and collaboration.
                    </p>

                    <br></br>
                        This commitment drives us to embrace the subtle complexities and nuances of different environments and challenges, 
                        ensuring our analytical services remain precise and actionable.
                    <p>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Commitment