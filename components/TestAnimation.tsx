import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const TestAnimation = (props: Props) => {
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-my-pink-very-light'>
            <motion.div
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}
                className='w-[200px] h-[200px] bg-my-purple-medium rounded-xl z-10 flex items-center justify-center'
            >
                <motion.div 
                    initial={{ y: 0, scale: 1, rotateZ: 0, rotate: 0 }}
                    animate={{ y: 0, scale: 2, rotateZ: 360, rotate: 180 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}
                    className='absolute w-[100px] h-[100px] bg-my-green-blue-see-thru z-30 rounded-3xl'
                >
            </motion.div>
            </motion.div>

            <motion.div 
                initial={{ y: 0, height: 0 }}
                animate={{ y: 0, height: 100 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}
                className='absolute w-[100px] h-[100px] bg-my-midnight-blue z-0'
            >
            </motion.div>

            <motion.div 
                initial={{ y: 0, width: 0, scale: 1 }}
                animate={{ y: 0, width: 100, scale: 1.5 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}
                className='absolute w-[100px] h-[100px] bg-my-baby-blue z-0'
            >
            </motion.div>

            <motion.div 
                initial={{ y: 0, scale: 1}}
                animate={{ y: 0, scale: 2 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}
                className='absolute w-[100px] h-[100px] bg-my-green-blue-see-thru z-0 rounded-full'
            >
            </motion.div>

            <motion.div 
                initial={{ y: 0, scale: 0, rotateZ: 0, rotate: 0 }}
                animate={{ y: 0, scale: 1, rotateZ: 360, rotate: 180 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}
                className='absolute w-[100px] h-[100px] bg-red-400 z-0 opacity-80'
            >
            </motion.div>
        </div>
    )
}

export default TestAnimation