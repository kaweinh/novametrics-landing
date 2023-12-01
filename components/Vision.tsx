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
            className="relative w-full h-full bg-[url('/components/mission-bg.png')] bg-cover object-cover bg-no-repeat">
            <motion.div 
                ref={ ref } 
                className='w-full h-fit p-[10vw] flex flex-col bg-primary-dull font-mukta-mahee text-neutral-white partners-circles bg-opacity-40 backdrop-blur-lg'
            >
                <div className='text-6xl font-bold text-primary-light mb-10'>
                    Mission and Vision
                </div>

                <div className='text-3xl w-[60%] text-white'>
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