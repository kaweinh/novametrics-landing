import React from 'react'
import Footer from './Footer'

type Props = {}

const Partners = (props: Props) => {
    return (
        <div className='w-full h-fit relative'>
            <div className='relative w-full h-fit flex justify-center items-center bg-my-baby-blue font-mukta-mahee text-my-midnight-blue'>
                <div className=' absolute top-0 w-[60%] h-[2px] bg-black'></div>
                <div className=' flex flex-col justify-center items-center px-[10vw] py-[10vh]'>
                    <div className=' text-3xl'>
                        Join the network of organizations that have used our advanced analytics to support their data-to-decision pathways
                    </div>

                    <div className='h-[50vh] flex justify-start items-center text-my-midnight-blue'>
                        <div className=' bg-black bg-opacity-20 px-[400px] py-[100px] backdrop-blur-xl rounded-xl'>
                            <div className=' bg-gradient-to-r from-my-midnight-blue to-my-purple-medium lg:to-80% bg-clip-text text-transparent text-xl tracking-[0.1rem] text-center lg:text-left'> Coming Soon </div>
                        </div>
                    </div>

                    <div className='w-full h-[20vh]'></div>
                </div>
            </div>
                    
            <div className='absolute bottom-0 w-full'>
                <Footer />
            </div>
        </div>
    )
}

export default Partners