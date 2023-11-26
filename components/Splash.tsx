import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Splash = (props: Props) => {
    return (
        <div className='relative w-screen h-screen bg-white flex flex-col justify-center items-start text-my-midnight-blue font-mukta-mahee px-[300px]'>

            <motion.div
                className='text-6xl font-bold text-left mb-20'
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className='mb-4'> 

                    Enhancing &nbsp;
                    <span className=' bg-gradient-to-r from-primary-soft to-primary-soft lg:to-50% bg-clip-text text-transparent text-center lg:text-left'>
                        Insights 
                    </span> 
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='mb-4'> 

                    Elevating &nbsp;
                    <span className=' bg-gradient-to-r from-accent to-accent lg:to-50% bg-clip-text text-transparent text-center lg:text-left'>
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
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className='py-4 px-4 bg-accent-dark text-white text-xl cursor-pointer select-none rounded ml-[50px] w-[210px] font-medium text-center'
                > 
                    Learn More 
                </motion.div>
            </div>
        </div>
    )
}

export default Splash