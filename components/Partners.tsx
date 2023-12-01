import React from 'react'
import Footer from './Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { partners, PartnerInfo } from './PartnerTicker'

type Props = {}

export const getLogoSized = (logo: string, imgTag: string) => {
    if( logo == 'World Bank') {
        return (
            <motion.div 
                whileHover={{ scale: 1 }}
                className={ `w-[250px] h-[250px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat `}
            ></motion.div>
        )
    } else if( logo == "Children's Investment Fund Foundation") {
        return (
            <motion.div 
                whileHover={{ scale: 1 }}
                className={ `w-[200px] h-[200px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat `}
            ></motion.div>
        )
    } else if( logo == "United Nations Foundation" ) { 
        return (
            <motion.div 
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1.2 }}
                className={ `w-[100px] h-[100px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat scale-150 `}
            ></motion.div>
        )       
    } if ( logo == 'UNODC' ) { 
        return (
            <motion.div 
                initial={{ scale: 1.5 }}
                whileHover={{ scale: 1.5 }}
                className={ `w-[100px] h-[100px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat scale-150 `}
            ></motion.div>
        )      
    } else {
        return (
            <motion.div 
                whileHover={{ scale: 1 }}
                className={ `w-[100px] h-[100px] ${imgTag} bg-center bg-contain object-fill bg-no-repeat `}
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
            <div ref={bg1Ref} className='w-full h-[60vh] relative overflow-hidden flex flex-col justify-center items-center'>
                <div className=' absolute text-6xl bold text-white z-30 top-0 mt-[5vh]'>
                    Proud Partners
                </div>

                <div className='absolute h-full w-full grid grid-cols-6 justify-center items-center mb-[5%] px-[20vw]'>
                    {partners.slice(0, 6).map((partner, index) => (
                        <div key={ partner.name } className='z-20 flex items-center justify-center'>
                            <div className='absolute bg-white bg-opacity-75 w-[8vw] h-[8vw] flex items-center justify-center p-2'>
                                {getLogoSized(partner.name, partner.imgTag)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='absolute h-full w-full grid grid-cols-5 justify-center items-center mt-[15%] ml-[1%] px-[23vw]'>
                    {partners.slice(6, 12).map((partner, index) => (
                        <div key={index} className=' z-20 flex items-center justify-center p-20'>
                            <div className='absolute bg-white bg-opacity-75 w-[8vw] h-[8vw] flex items-center justify-center p-2'>
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