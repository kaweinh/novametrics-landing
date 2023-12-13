import React from 'react'
import Footer from './Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { partners, PartnerInfo } from './PartnerTicker'

type Props = {}

export const getLogoSized = (logo: string, imgTag: string) => {
    if( logo == 'World Bank') {
        return (
            <motion.div 
                className={ `w-[260px] h-[260px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat `}
            ></motion.div>
        )
    } else if( logo == "Children's Investment Fund Foundation") {
        return (
            <motion.div 
                className={ `w-[200px] h-[200px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat `}
            ></motion.div>
        )
    } else if( logo == "United Nations Foundation" ) { 
        return (
            <motion.div 
                className={ `lg:w-[60px] lg:h-[60px] w-[60px] h-[60px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat scale-150 `}
            ></motion.div>
        )       
    } else if ( logo == 'UNODC' ) { 
        return (
            <motion.div 
                className={ `w-[100px] h-[100px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat scale-150 `}
            ></motion.div>
        )      
    } else if ( logo == 'Liberia' ) {
        return (
            <div className='relative flex justify-center items-center'>
                <div 
                    className={ `w-[60px] h-[60px] xl:w-[110px] xl:h-[110px] lg:w-[80px] lg:h-[80px] ${imgTag} mb-8 bg-center bg-contain object-fill bg-no-repeat `}
                ></div>
                <div className='absolute xl:top-[90px] lg:top-[70px] top-[50px] text-black'> Liberia </div>
            </div>
        )   
    } else {
        return (
            <motion.div 
                className={ `lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat `}
            ></motion.div>
        )
    }
}

const Partners = (props: Props) => {
    const bg1Ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress: bg1Progress } = useScroll({ 
      target: bg1Ref, 
      offset: ["start end", "end start"] 
    })

    return (
        <div className='w-full h-fit relative'>
            <div ref={bg1Ref} className='w-full px-[3vw] lg:px-[5vw] xl:px-[10vw] py-[10vh] relative overflow-hidden flex flex-col justify-center items-center'>
                <div className='text-xl xl:text-3xl font-bold text-white z-30 mb-10'>
                    Proud Partners
                </div>

                <div className='lg:flex lg:flex-col hidden h-full w-full z-30'>

                    <div className=' w-full flex justify-center items-center '>
                        {partners.slice(0, 6).map((partner, index) => (
                            <div key={ partner.name } className='z-20 flex items-center justify-center'>
                                <div className='p-4'>
                                    <div className='bg-white bg-opacity-75 lg:w-[100px] lg:h-[100px] xl:w-[130px] xl:h-[130px] flex items-center justify-center p-4'>
                                        {getLogoSized(partner.name, partner.imgTag)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className=' w-full flex justify-center items-center'>
                        {partners.slice(6, 12).map((partner, index) => (
                            <div key={ partner.name } className='z-20 flex items-center justify-center'>
                                <div className='p-4'>
                                    <div className='bg-white bg-opacity-75 lg:w-[100px] lg:h-[100px] xl:w-[130px] xl:h-[130px] flex items-center justify-center p-4'>
                                        {getLogoSized(partner.name, partner.imgTag)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='h-full grid grid-cols-3 grid-rows-4 gap-6 justify-center items-center lg:hidden z-20'>
                    {partners.map((partner, index) => (
                        <div key={index} className=' z-20 flex items-center justify-center h-fit'>
                            <div className='bg-white bg-opacity-75 w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] flex items-center justify-center p-2'>
                                {getLogoSized(partner.name, partner.imgTag)}
                            </div>
                        </div>
                    ))}
                </div>

                <motion.div 
                    className="absolute w-full h-full bg-[url('/components/0_0.png')] bg-center bg-cover object-cover bg-no-repeat z-10 "
                >
                    <div className='w-full h-full bg-primary-dark bg-opacity-[0.8] backdrop-blur-lg z-30 partners-circles'></div>
                </motion.div>
            </div>    
        </div>
    )
}

export default Partners