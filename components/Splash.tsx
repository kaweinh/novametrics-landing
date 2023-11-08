import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Splash = (props: Props) => {
    return (
        <div className='relative w-screen h-screen bg-white flex justify-center items-center text-my-midnight-blue font-mukta-mahee'>

            <div className="lg:w-[60vw] mb-[8vh] items-center justify-center mr-auto ml-[4vw]">
                <div className=" relative pb-[75%] flex items-center justify-center">
                    <div className='absolute text-[90px] font-bold mt-[68%] left-0 ml-[14%] z-20' >
                        Novametrics
                    </div>

                    <div className="absolute top-0 w-full h-full items-center flex justify-center z-10">
                        <div className="absolute z-30 w-full h-full mix-blend-lighten">
                            <video
                                id='splash-vid'
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/animations/grid-splash.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>                     
            </div>

            <div className="absolute lg:w-[40vw] items-center justify-center right-0 mr-[5vw] z-30 opacity-50">
                <div className=" relative pb-[100%] flex items-center justify-center">
                    <div className="absolute top-0 w-full h-full items-center flex justify-center">
                        <div className="absolute z-30 w-full h-full mix-blend-lighten">
                            <video
                                id='neural-vid'
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/animations/neural-net.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>                     
            </div>

            <div className='absolute flex justify-center items-center z-40 left-0 mt-[18%] ml-[20%]'>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className='py-4 px-4 bg-my-purple-medium text-my-baby-blue rounded-xl cursor-pointer select-none text-xl w-[210px] font-medium'
                >
                     Book a Consultation 
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className='py-4 px-4 bg-my-midnight-blue text-my-baby-blue text-xl cursor-pointer select-none rounded-xl ml-[50px] w-[210px] font-medium text-center'
                > 
                    Learn More 
                </motion.div>
            </div>
        </div>
    )
}

export default Splash