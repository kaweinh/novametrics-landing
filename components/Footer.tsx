import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='relative w-full h-fit font-mukta-mahee text-black border'>
            <div className='absolute bottom-0 w-full px-[10vw]'>
                <div className='flex flex-col'>
                    <div className=' flex justify-center items-center'>
                        <div className="w-[50px] h-[50px] bg-[url('/components/logo-black.svg')] bg-center bg-contain object-contain bg-no-repeat z-30"></div>
                    </div>

                    <div className='w-full h-[2px] mt-[20px] mb-[20px] bg-black'></div>

                    <div className='flex justify-start items-center mb-[20px] w-full'>
                        <div className=' mx-auto'> Corporate Headquarters: Bethesda. MD </div>
                    </div>

                    <div className='flex mb-[20px] items-center'>
                        <div className='ml-0 mr-auto flex'>
                            <div className="w-[20px] h-[20px] bg-[url('/components/copyright.svg')] bg-center bg-contain object-contain bg-no-repeat z-30"></div>
                            <div className=' text-sm font-thin'> Novametrics LLC. All rights reserved </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className='ml-auto mr-0 cursor-pointer select-none'
                        >
                            <div className=" w-[50px] h-[50px] bg-[url('/components/linkedin-black.svg')] bg-center bg-contain object-contain bg-no-repeat z-30"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer