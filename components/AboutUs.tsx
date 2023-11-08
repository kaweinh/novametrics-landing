import React from 'react'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className='w-full h-fit p-[10vw] flex flex-col bg-my-baby-purple font-mukta-mahee text-my-midnight-blue'>
        <div className='flex items-center'>
            <div className="lg:w-[20vw] items-center justify-center z-20">
                <div className=" relative pb-[20%] flex items-center justify-center">
                    <div className="absolute top-0 w-full h-full items-center flex justify-center">
                        <div className="absolute z-30 w-full h-full mix-blend-lighten">
                            <video
                                id='about-us-vid'
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/animations/about-us-typed.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>                     
            </div>

            <div className='ml-auto mr-[5vw]'>
                <div className="lg:w-[20vw] items-center justify-center z-20">
                    <div className=" relative pb-[100%] flex items-center justify-center">
                        <div className="absolute top-0 w-full h-full items-center flex justify-center">
                            <div className="absolute z-30 w-full h-full">
                                <video
                                    id='about-us-vid'
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/animations/grid-circles.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>                     
                </div>
            </div>
        </div>

        <div className=' flex text-3xl mt-[50px]'>
            <div className='w-[60%] leading-[5vh]'>
                Our journey began at Princeton University, where innovative ideas met real-world challenges. Ever-adapting, our holistic approach harnesses the power of AI and 
                Weak-Signal Analysis to provide the next generation of predictive analytics. Our data-to-decision (D2D) capabilities ensure that you are always a step ahead, leveraging 
            </div>

            <div className=' mt-[60px] w-[35%] ml-[5%] leading-[5vh]'>
                Novametrics is a boutique analytics firm that provides advanced data-to-decision services for government agencies, NGOs, foundations, impact investment funds, and aid and development groups.
            </div>
        </div>
    </div>
  )
}

export default AboutUs