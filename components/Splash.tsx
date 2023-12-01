import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

const Splash = (props: Props) => {
    return (
        <div 
            className='relative w-screen h-[100vh] rounded-b-[2rem] bg-neutral-white flex flex-col justify-center items-start text-black font-mukta-mahee px-[300px]'   
            style={{ clipPath: 'ellipse(100% 95% at 50% 0%)' }}     
        >
            <div className=' flex justify-center items-center'>
                <div className='flex flex-col mr-[5vw]'>
                    <motion.div
                        className='text-6xl font-bold text-left mb-20 flex flex-col'
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className='mb-4'> 

                            Enhancing 
                            <span className=' text-primary-dull'>
                                &nbsp; Insights 
                            </span> 
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className='mb-4'> 

                            Elevating &nbsp;
                            <span className=' text-primary-softer'>
                                Actions 
                            </span> 
                        </motion.div>
                    </motion.div>

                    <div className='flex justify-center items-center z-40'>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className='py-4 px-4 bg-primary text-white rounded cursor-pointer select-none text-xl w-[210px] font-medium'
                        >
                            Book a Consultation 
                        </motion.div>

                        <Link href="/ourwork">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                className='py-4 px-4 bg-primary-dark text-white text-xl cursor-pointer select-none rounded ml-[50px] w-[210px] font-medium text-center'
                            > 
                                Learn More 
                            </motion.div>
                        </Link>
                    </div>

                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="lg:w-[700px] items-center justify-center z-30 mx-auto"
                >
                    <div className=" relative pb-[100%] flex items-center justify-center">
                        <div className="absolute top-0 w-full h-full items-center flex justify-center">
                            <div className="absolute z-30 w-full h-full">
                                <div className="absolute w-full h-full bg-[url('/components/maze_purr.png')] bg-center bg-contain object-contain bg-no-repeat z-30" ></div>
                            </div>
                        </div>
                    </div>                     
                </motion.div>

            </div>
        </div>
    )
}

export default Splash