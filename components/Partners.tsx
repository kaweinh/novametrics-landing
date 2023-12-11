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
                className={ `lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat scale-150 `}
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
                    className={ `w-[120px] h-[120px] ${imgTag} mb-8 bg-center bg-contain object-fill bg-no-repeat `}
                ></div>
                <div className='absolute top-[100px] text-black'> Liberia </div>
            </div>
        )   
    } else {
        return (
            <motion.div 
                className={ `lg:w-[120px] lg:h-[120px] w-[60px] h-[60px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat `}
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
            <div ref={bg1Ref} className='w-full h-[90vh] md:h-[120vh] lg:h-[60vh] relative overflow-hidden flex flex-col justify-center items-center'>
                <div className=' absolute text-3xl lg:text-6xl font-bold text-white z-30 top-0 mt-[5vh]'>
                    Proud Partners
                </div>

                <div className='absolute h-full w-full grid-cols-6 justify-center items-center mb-[5%] px-[20vw] hidden lg:grid'>
                    {partners.slice(0, 6).map((partner, index) => (
                        <div key={ partner.name } className='z-20 flex items-center justify-center'>
                            <div className='absolute bg-white bg-opacity-75 lg:w-[110px] lg:h-[110px] xl:w-[8vw] xl:h-[8vw] flex items-center justify-center p-4'>
                                {getLogoSized(partner.name, partner.imgTag)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='absolute h-full w-full grid-cols-5 justify-center items-center mt-[15%] ml-[1%] pl-[22.5vw] pr-[22.5vw] hidden lg:grid'>
                    {partners.slice(6, 12).map((partner, index) => (
                        <div key={index} className=' z-20 flex items-center justify-center p-20'>
                            <div className='absolute bg-white bg-opacity-75 lg:w-[110px] lg:h-[110px] xl:w-[8vw] xl:h-[8vw] flex items-center justify-center p-4'>
                                {getLogoSized(partner.name, partner.imgTag)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='absolute h-full grid grid-cols-3 justify-center items-center lg:hidden z-20 py-[100px] w-[90%]'>
                    {partners.map((partner, index) => (
                        <div key={index} className=' z-20 flex items-center justify-center h-fit'>
                            <div className='bg-white bg-opacity-75 w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] flex items-center justify-center p-2'>
                                {getLogoSized(partner.name, partner.imgTag)}
                            </div>
                        </div>
                    ))}
                </div>

                <motion.div 
                    className="w-full h-full bg-[url('/components/0_0.png')] bg-center bg-cover object-cover bg-no-repeat z-10 "
                >
                    <div className='w-full h-full bg-primary-dark bg-opacity-[0.8] backdrop-blur-lg z-30 partners-circles'></div>
                </motion.div>
            </div>    
        </div>
    )
}

export default Partners