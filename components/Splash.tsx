import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
    setContactOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Splash = (props: Props) => {
    return (
        <div 
            className='relative w-screen lg:h-screen h-[90vh] rounded-b-[2rem] bg-neutral-white flex flex-col justify-center lg:items-start items-center text-black font-mukta-mahee lg:px-[10vw] 2xl:px-[16vw] px-[10px] curve-bottom-mobile lg:curve-bottom-desktop'      
        >
            <div className=' flex flex-col lg:flex-row justify-center items-center mb-8 lg:mb-0'>
                <div className='flex flex-col lg:mr-[5vw]'>
                    <motion.div
                        className='xl:text-6xl lg:text-5xl text-3xl font-bold text-left lg:mb-20 flex flex-col'
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className='mb-4'> 

                            Enhancing <span className=' text-primary-soft'>Insights</span>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className='mb-4'> 
                            Elevating <span className=' text-primary-softer'>Actions</span>
                        </motion.div>
                    </motion.div>

                    <div className='lg:flex justify-center items-center z-40 hidden'>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={ () => { props.setContactOpen( true ) }}
                            className='py-4 px-4 bg-primary text-white rounded cursor-pointer select-none text-base lg:w-[210px] w-[160px] font-medium text-center'
                        >
                            Book a Consultation 
                        </motion.div>

                        <Link href="/ourwork">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                className='py-4 px-4 bg-white text-black text-base cursor-pointer select-none rounded lg:ml-[50px] lg:w-[210px] w-[160px] font-medium text-center'
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
                    className="2xl:w-[700px] xl:w-[600px] lg:w-[500px] md:w-[350px] w-[250px] items-center justify-center z-30 mx-auto mb-[20px] lg:mb-0"
                >
                    <div className=" relative pb-[100%] flex items-center justify-center">
                        <div className="absolute top-0 w-full h-full items-center flex justify-center">
                            <div className="absolute z-30 w-full h-full">
                                <div className="absolute w-full h-full bg-[url('/components/maze_purr_better.png')] bg-center bg-contain object-contain bg-no-repeat z-30" ></div>
                            </div>
                        </div>
                    </div>                     
                </motion.div>


                <div className='flex justify-center items-center z-40 lg:hidden'>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={ () => { props.setContactOpen( true ) }}
                        className='py-4 px-4 bg-primary lg:hidden text-white rounded cursor-pointer select-none text-base lg:w-[210px] w-[160px] mr-[20px] font-medium text-center'
                    >
                        Contact Us 
                    </motion.div>

                    <Link href="/ourwork">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className='py-4 px-4 bg-white text-black text-base cursor-pointer select-none rounded lg:ml-[50px] lg:w-[210px] w-[160px] font-medium text-center'
                        > 
                            Learn More 
                        </motion.div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Splash