import React from 'react'
import PartnerTicker from './PartnerTicker'

type Props = {}

const Features = (props: Props) => {
  return (
    <div className="w-full h-fit relative">
        <div className='relative bg-primary-dull bg-opacity-90 backdrop-blur-sm px-[5vw] flex flex-col justify-center items-center w-full h-fit font-mukta-mahee text-neutral-white z-10'>
            <div className=' grid grid-cols-1 lg:grid-cols-3 w-full gap-4'>

                <div className='flex flex-col justify-center items-center px-4'>
                    <div className="lg:w-[7vw] mt-[2vh] items-center justify-center z-30">
                        <div className=" relative pb-[100%] flex items-center justify-center">
                            <div className="absolute top-0 w-full h-full items-center flex justify-center">
                                <div className="absolute z-30 w-full h-full mix-blend-lighten">
                                    <div className="absolute w-full h-full bg-[url('/components/holistic-white.png')] bg-center bg-contain object-contain bg-no-repeat z-30" ></div>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center px-4'>
                    <div className="lg:w-[6vw] items-center justify-center z-30 mt-[65px] mb-[40px]">
                        <div className=" relative pb-[100%] flex items-center justify-center">
                            <div className="absolute top-0 w-full h-full items-center flex justify-center">
                                <div className="absolute z-30 w-full h-full">
                                    <div className="absolute w-full h-full bg-[url('/components/open-source-white.png')] bg-center bg-contain object-contain bg-no-repeat z-30" ></div>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center px-4'>
                    <div className="lg:w-[6vw] items-center justify-center z-30">
                        <div className=" relative pb-[100%] flex items-center justify-center">
                            <div className="absolute top-0 w-full h-full items-center flex justify-center">
                                <div className="absolute z-30 w-full h-full mix-blend-lighten">
                                    <div className="absolute w-full h-full bg-[url('/components/end-to-end-white.png')] bg-center bg-contain object-contain bg-no-repeat z-30" ></div>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>

            <div className=' grid grid-cols-1 lg:grid-cols-3 w-full gap-10 z-20 mb-[2vh]'>
                <div className='flex flex-col justify-start items-center'>
                    <div className=' text-3xl font-semibold mt-[20px] '> Holistic </div>
                    <div className=' text-2xl font-thin mt-[20px]'>
                        Empowered by our proprietary Weak-Signal Analysis and modern artificial intelligence, Novametrics is able to bring a holistic approach to predictive analytics, 
                        allowing clients to respect the nuances of diverse communities 
                    </div>
                </div>

                <div className='flex flex-col justify-start items-center'>
                    <div className=' text-3xl font-semibold mt-[20px] '> Open-Source </div>
                    <div className=' text-2xl font-thin mt-[20px] mb-[55px]'>
                        Leveraging AI/ML and Large Language Models, Novametrics enables clients to tap into the vast sea of open-source data
                    </div>
                </div>

                <div className='flex flex-col justify-start items-center'>
                    <div className=' text-3xl font-semibold mt-[20px] '> End-to-End </div>
                    <div className=' text-2xl font-thin mt-[20px] mb-[65px]'>
                        From data to decision (D2D) Novametrics provides clients with an end-to-end solution, alleviating the burden of intensive data collections and processing
                    </div>
                </div>
            </div>

            <PartnerTicker />
        </div>
    </div>
  )
}

export default Features