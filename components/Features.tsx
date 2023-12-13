import React from 'react'
import PartnerTicker from './PartnerTicker'

type Props = {}

const Features = (props: Props) => {
  return (
    <div className="w-full h-fit relative">
        <div className='relative bg-primary-dull bg-opacity-90 backdrop-blur-sm px-[5vw] flex flex-col justify-center items-center w-full h-fit font-mukta-mahee text-white z-10'>
            <div className='absolute w-full h-full publications-texture'></div>

            <div className='hidden lg:grid grid-cols-1 lg:grid-cols-3 w-full gap-4'>

                <div className='flex flex-col justify-center items-center px-4'>
                    <div className="lg:w-[11vw] mt-[2vh] items-center justify-center z-30">
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
                    <div className="lg:w-[11vw] items-center justify-center z-30">
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

            <div className=' grid grid-cols-1 lg:grid-cols-3 w-full gap-10 z-20 lg:mb-[2vh]'>
                <div className='flex flex-col justify-start items-center'>
                    <div className='flex flex-col justify-center items-center px-4'>
                        <div className="lg:hidden md:w-[20vw] w-[40vw] items-center justify-center z-30">
                            <div className=" relative pb-[100%] flex items-center justify-center">
                                <div className="absolute top-0 w-full h-full items-center flex justify-center">
                                    <div className="absolute z-30 w-full h-full mix-blend-lighten">
                                        <div className="absolute w-full h-full bg-[url('/components/holistic-white.png')] bg-center bg-contain object-contain bg-no-repeat z-30" ></div>
                                    </div>
                                </div>
                            </div>                     
                        </div>
                    </div>

                    <div className=' text-xl xl:text-3xl font-semibold mt-[20px] '> Holistic </div>
                    <div className=' xl:text-xl text-base font-thin mt-[20px]'>
                        Empowered by our proprietary Weak-Signal Analysis and modern artificial intelligence, Novametrics is able to bring a holistic approach to predictive analytics, 
                        allowing you to identify customized solutions for complex challenges.
                    </div>
                </div>

                <div className='flex flex-col justify-start items-center mt-0'>
                    <div className=' lg:hidden flex flex-col justify-center items-center px-4'>
                        <div className="w-[20vw] md:w-[10vw] mt-[5vh] items-center justify-center z-30">
                            <div className=" relative pb-[100%] flex items-center justify-center">
                                <div className="absolute top-0 w-full h-full items-center flex justify-center">
                                    <div className="absolute z-30 w-full h-full">
                                        <div className="absolute w-full h-full bg-[url('/components/open-source-white.png')] bg-center bg-contain object-contain bg-no-repeat z-30" ></div>
                                    </div>
                                </div>
                            </div>                     
                        </div>
                    </div>

                    <div className=' text-xl xl:text-3xl font-semibold mt-[20px] '> Open-Source </div>
                    <div className=' xl:text-xl text-base font-thin mt-[20px] mb-[55px]'>
                        Leveraging AI/ML and Large Language Models, Novametrics enables you to tap into the vast sea of open-source data and identify new opportunities and innovative strategies. 
                    </div>
                </div>

                <div className='flex flex-col justify-start items-center'>
                    <div className='lg:hidden flex flex-col justify-center items-center px-4'>
                        <div className="w-[40vw] md:w-[20vw] items-center justify-center z-30">
                            <div className=" relative pb-[100%] flex items-center justify-center">
                                <div className="absolute top-0 w-full h-full items-center flex justify-center">
                                    <div className="absolute z-30 w-full h-full mix-blend-lighten">
                                        <div className="absolute w-full h-full bg-[url('/components/end-to-end-white.png')] bg-center bg-contain object-contain bg-no-repeat z-30" ></div>
                                    </div>
                                </div>
                            </div>                     
                        </div>
                    </div>

                    <div className=' text-xl xl:text-3xl font-semibold mt-[20px] '> End-to-End </div>
                    <div className=' xl:text-xl text-base font-thin mt-[20px] mb-[65px]'>
                        From data to decision (D2D) Novametrics provides clients with an end-to-end solution, alleviating the burden of intensive data collection and processing to support your decision-making processes
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features