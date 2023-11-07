import React from 'react'

const Commitment = () => {
    return (
        <div className='w-full h-fit p-[10vw] flex flex-col bg-my-baby-blue font-mukta-mahee text-my-midnight-blue'>
            <div className="lg:w-[600px] items-center justify-center z-30">
                <div className=" relative pb-[100%] flex items-center justify-center">
                    <div className="absolute top-0 w-full h-full items-center flex justify-center">
                        <div className="absolute z-30 w-full h-full">
                            <div className="absolute w-full h-full bg-[url('/components/greg-goated-pic-3x.png')] bg-center bg-contain object-contain bg-no-repeat z-30" ></div>
                        </div>
                    </div>
                </div>                     
            </div>

            <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-[200px] text-3xl mt-[50px]'>
                <div className='leading-[5vh]'>
                    Our commitment extends beyond just data; its about trust, understanding, and collaboration. 
                </div>

                <div className='leading-[5vh]'>
                    This commitment drives us to embrace the subtle complexities and nuances of different environments and challenges, ensuring our analytical services remain precise and actionable.                 
                </div>
            </div>
        </div>
    )
}

export default Commitment