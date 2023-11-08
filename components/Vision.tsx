import React from 'react'

type Props = {}

const Vision = (props: Props) => {
    return (
        <div className='w-full h-fit p-[10vw] flex flex-col bg-my-baby-yellow font-mukta-mahee text-my-midnight-blue'>
            <div className='text-[80px] font-bold'>
                Mission and Vision
            </div>

            <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-[100px] text-3xl mt-[50px]'>
                <div className='leading-[5vh]'>
                    Novametrics is committed to fostering a world where data analytics and strategic planning honor the intricate tapestry of global communities, 
                    offering bespoke solutions that respect the unique needs and potentials of each society.
                </div>

                <div className='leading-[5vh]'>
                    We envision a future where analytics is not just about numbers but about understanding the stories behind them. By merging AI&apos;s power with human intuition, 
                    we aim to redefine the realm of data analytics, ensuring strategies that are not only precise but also resonate with the people they impact.
                </div>
            </div>
        </div>
    )
}

export default Vision