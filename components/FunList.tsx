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
        <div className='relative w-full h-fit py-[10vh] flex flex-col justify-center font-thin items-start text-base xl:text-xl text-black px-[10vw] lg:px-[20vw] bg-gradient-to-b from-white to-neutral-white'>
            <h1 className=' font-bold text-2xl xl:text-4xl text-primary-dull mb-[5vh]'>
                Navigating Global Challenges with Novametrics
            </h1>

            <div className='w-full'>
                <div> Our previous work has assisted a multitude of sectors including: </div> <br></br>
                <ul className='list-decimal list-inside w-full'>
                    <li ref={item1} className='relative font-semibold w-full'> 
                        Security and Peacekeeping 

                        <ul className='list-disc list-inside font-thin'>
                            <li className=' indent-12'> Countering violent extremism </li>
                            <li className=' indent-12'> Conflict mitigation </li>
                        </ul>
                        <br></br>

                        <motion.div
                            style={{ width: useTransform(item1Progress, [0, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary h-[50px] right-[-90%] top-0 hidden lg:flex'
                        ></motion.div>
                    </li>
                    <li ref={item2} className='relative font-semibold'> 
                        Human Rights and Social Welfare 

                        <ul className='list-disc list-inside font-thin'>
                            <li className=' indent-12'> Countering human trafficking </li>
                            <li className=' indent-12'> Combating child labor </li>
                        </ul>
                        <br></br>

                        <motion.div
                            style={{ width: useTransform(item2Progress, [0.25, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary-soft h-[50px] right-[-99%] top-0 hidden lg:flex'
                        ></motion.div>
                    </li>
                    <li ref={item3} className='relative font-semibold'> 
                        Environmental Conservation and Sustainability

                        <ul className='list-disc list-inside font-thin'>
                            <li className=' indent-12'> Preventing illegal fishing </li>
                            <li className=' indent-12'> Fostering environmentally sustainable emerging markets </li>
                        </ul>

                        <motion.div
                            style={{ width: useTransform(item3Progress, [0.5, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary-dark h-[50px] right-[-110%] top-0 hidden lg:flex'
                        ></motion.div>
                        <br></br>
                    </li>
                    <li ref={item4} className='relative font-semibold'> 
                        Infrastructure and Development 

                        <ul className='list-disc list-inside font-thin'>
                            <li className=' indent-12'> Optimizing rural road systems </li>
                            <li className=' indent-12'> Promoting ethical supply chains </li>
                        </ul>

                        <motion.div
                            style={{ width: useTransform(item4Progress, [0.5, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary-softer h-[50px] right-[-100%] top-0 hidden lg:flex'
                        ></motion.div>
                        <br></br>
                    </li>
                    <li ref={item5} className='relative font-semibold'> 
                        Public Health and Safety 

                        <ul className='list-disc list-inside font-thin'>
                            <li className=' indent-12'> Managing outbreaks of infectious disease </li>
                            <li className=' indent-12'> Alleviating child malnutrition </li>
                        </ul>

                        <motion.div
                            style={{ width: useTransform(item5Progress, [0.5, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary-light h-[50px] right-[-95%] top-0 hidden lg:flex'
                        ></motion.div>
                        <br></br>
                    </li>
                    <li ref={item6} className='relative font-semibold'> 
                        Economic Empowerment 

                        <ul className='list-disc list-inside font-thin'>
                            <li className=' indent-12'> Identifying vulnerabilities to poverty traps </li>
                            <li className=' indent-12'> Optimizing social impact investment </li>
                        </ul>   

                        <motion.div
                            style={{ width: useTransform(item6Progress, [0.5, 1], ['0%', '100%']) }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100, bounce: 0.5 }}
                            className='absolute rounded-full bg-primary-dark h-[50px] right-[-105%] top-0 hidden lg:flex'
                        ></motion.div> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FunList