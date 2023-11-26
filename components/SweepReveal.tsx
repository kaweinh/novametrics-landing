import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
    texts: Array<string>,
}

const SweepReveal = ( { texts }: Props ) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ 
      target: ref, 
      offset: ["start end", "end 0.4"] 
    })

    return (
        <div>
            <div ref={ ref } className='relative'>     
                <motion.div 
                    style={{ 
                        clipPath: useTransform(
                            scrollYProgress, [0, 0.1, 0.95, 1], 
                            [  
                                'polygon(0 0, 1% 0, 1% 100%, 0% 100%)',
                                'polygon(31% 0, 0 0, 0 100%, 8% 100%)',
                                'polygon(100% 0, 0 0, 0 100%, 74% 100%)',
                                'polygon(100% 0, 0 0, 0 100%, 100% 100%)'
                            ])
                    }}
                    className=' text-primary-dark absolute'
                >
                    { texts.map((item, i) => 
                        <div key={i}>
                            {item}
                            <br></br>
                            <br></br>
                        </div>
                    )}
                </motion.div>

                <motion.div 
                    style={{ 
                        clipPath: useTransform(
                            scrollYProgress, [1, 0.95, 0.1, 0], 
                            [  
                                'polygon(100% 0, 99% 0, 99% 100%, 100% 100%)',
                                'polygon(100% 0, 92% 0, 69% 100%, 100% 100%)',
                                'polygon(100% 0, 16% 0, 0 100%, 100% 100%)',
                                'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                            ])
                    }}
                    className=' text-neutral-gray-light opacity-40 absolute'
                >
                    { texts.map((item, i) => 
                        <div key={i}>
                            {item}
                            <br></br>
                            <br></br>
                        </div>
                    )}
                </motion.div>
            </div>

            <div className='text-transparent'>
                { texts.map((item, i) => 
                    <div key={i}>
                        {item}
                        <br></br>
                        <br></br>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SweepReveal