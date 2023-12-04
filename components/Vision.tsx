import React from 'react'
import SweepReveal from './SweepReveal'
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {}

const Vision = (props: Props) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ 
      target: ref, 
      offset: ["start end", "end 0.2"] 
    })

    return (
        <div 
            className="relative w-full h-[80vh] flex justify-center items-center bg-[url('/components/@@@.png')] bg-cover object-cover bg-center bg-no-repeat">
            <motion.div 
                className="absolute w-full h-full bg-[url('/components/@@@.png')] bg-center bg-cover object-cover bg-no-repeat z-10 "
            >
                <div className='w-full h-full bg-primary-dull bg-opacity-[0.95] backdrop-blur-sm publications-texture '></div>
            </motion.div>

            <motion.div 
                ref={ ref } 
                className='absolute w-full h-fit px-[10vw] py-[10vh] flex font-mukta-mahee text-neutral-white z-20'
            >
                <div className='text-3xl text-black w-[75%] p-10 bg-white rounded-xl font-thin'>
                    <div className='text-6xl font-bold text-primary-dull mb-10'>
                        Mission and Vision
                    </div>

                    <div className='leading-[5vh] mb-10'>
                        Novametrics is a boutique analytics firm that provides advanced data-to-decision services for government agencies, 
                        NGOs, foundations, impact investment funds, and aid and development groups.
                    </div>

                    <div className='leading-[5vh]'>
                        We envision a future where analytics is not just about numbers but about understanding the stories behind them. By merging AI&apos;s power with human intuition, 
                        we aim to redefine the realm of data analytics, ensuring strategies that are not only precise but also resonate with the people they impact.
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Vision