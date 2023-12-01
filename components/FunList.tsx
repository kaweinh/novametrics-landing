import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Props = {}

const FunList = (props: Props) => {
    const item1 = React.useRef<HTMLLIElement>(null)
    const { scrollYProgress: item1Progress } = useScroll({ 
      target: item1, 
      offset: ["start end", "end center"] 
    })

    const item2 = React.useRef<HTMLLIElement>(null)
    const { scrollYProgress: item2Progress } = useScroll({ 
      target: item2, 
      offset: ["start end", "end center"] 
    })

    const item3 = React.useRef<HTMLLIElement>(null)
    const { scrollYProgress: item3Progress } = useScroll({ 
      target: item3, 
      offset: ["start end", "end center"] 
    })

    const item4 = React.useRef<HTMLLIElement>(null)
    const { scrollYProgress: item4Progress } = useScroll({ 
      target: item4, 
      offset: ["start end", "end center"] 
    })

    const item5 = React.useRef<HTMLLIElement>(null)
    const { scrollYProgress: item5Progress } = useScroll({ 
      target: item5, 
      offset: ["start end", "end center"] 
    })

    const item6 = React.useRef<HTMLLIElement>(null)
    const { scrollYProgress: item6Progress } = useScroll({ 
      target: item6, 
      offset: ["start end", "end center"] 
    })

    return (
        <div className='relative w-full h-fit py-[10vh] flex flex-col justify-center items-start text-3xl text-black font-semibold px-[20vw] bg-gradient-to-b from-white to-neutral-white'>
            <h1 className=' font-bold text-5xl text-primary-dull mb-[5vh]'>
                Navigating Global Challenges with Novametrics
            </h1>

            <div>
                <div> Our previous work has assisted a multitude of sectors including: </div> <br></br>
                <ul className='list-decimal list-inside'>
                    <li ref={item1} className='relative'> 
                        Security and Peacekeeping 

                        <ul className='list-disc list-inside'>
                            <li className=' indent-12'> Countering Violent Extremism </li>
                            <li className=' indent-12'> Conflict Mitigation </li>
                        </ul>
                        <br></br>

                        <motion.div
                            style={{ width: useTransform(item1Progress, [0, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary h-[70px] right-[-120%] top-0'
                        ></motion.div>
                    </li>
                    <li ref={item2} className='relative'> 
                        Human Rights and Social Welfare 

                        <ul className='list-disc list-inside'>
                            <li className=' indent-12'> Countering Human Trafficking </li>
                            <li className=' indent-12'> Combating Child Labor </li>
                        </ul>
                        <br></br>

                        <motion.div
                            style={{ width: useTransform(item2Progress, [0.25, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary-soft h-[70px] right-[-140%] top-0'
                        ></motion.div>
                    </li>
                    <li ref={item3} className='relative'> 
                        Environmental Conservation and Sustainability

                        <ul className='list-disc list-inside'>
                            <li className=' indent-12'> Preventing Illegal Fishing </li>
                            <li className=' indent-12'> Fostering Environmentally Sustainable Emerging Markets </li>
                        </ul>

                        <motion.div
                            style={{ width: useTransform(item3Progress, [0.5, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary-dark h-[70px] right-[-160%] top-0'
                        ></motion.div>
                        <br></br>
                    </li>
                    <li ref={item4} className='relative'> 
                        Infrastructure and Development 

                        <ul className='list-disc list-inside'>
                            <li className=' indent-12'> Optimizing Rural Road Systems </li>
                            <li className=' indent-12'> Promoting Ethical Supply Chains </li>
                        </ul>

                        <motion.div
                            style={{ width: useTransform(item4Progress, [0.5, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary-softer h-[70px] right-[-150%] top-0'
                        ></motion.div>
                        <br></br>
                    </li>
                    <li ref={item5} className='relative'> 
                        Public Health and Safety 

                        <ul className='list-disc list-inside'>
                            <li className=' indent-12'> Managing Outbreaks of Infectious Disease </li>
                            <li className=' indent-12'> Alleviating Child Malnutrition </li>
                        </ul>

                        <motion.div
                            style={{ width: useTransform(item5Progress, [0.5, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary-light h-[70px] right-[-135%] top-0'
                        ></motion.div>
                        <br></br>
                    </li>
                    <li ref={item6} className='relative'> 
                        Economic Empowerment 

                        <ul className='list-disc list-inside'>
                            <li className=' indent-12'> Identifying Vulnerabilities to Poverty Traps </li>
                            <li className=' indent-12'> Optimizing Social impact Investment </li>
                        </ul>   

                        <motion.div
                            style={{ width: useTransform(item6Progress, [0.5, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary-dark h-[70px] right-[-125%] top-0'
                        ></motion.div> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FunList