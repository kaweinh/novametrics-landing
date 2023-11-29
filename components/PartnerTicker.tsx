import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Props = {}

export type PartnerInfo = {
    name: string,
    imgTag: string,
    linkUrl: string
}

export const partners: Array<PartnerInfo> = [
    { name: 'Pew Charitable Trusts', imgTag: "bg-[url('/partner-logos/pew_transparent.png')]", linkUrl: ''}, 
    { name: 'United Nations', imgTag: "bg-[url('/partner-logos/un_Transparent.png')]", linkUrl: ''}, 
    { name: 'USAID', imgTag: "bg-[url('/partner-logos/usaid_Transparent.png')]", linkUrl: ''}, 
    { name: 'Walmart Foundation', imgTag: "bg-[url('/partner-logos/walmart_foundation.png')]", linkUrl: ''}, 
    { name: 'World Bank', imgTag: "bg-[url('/partner-logos/worldbank_Transparent.png')]", linkUrl: ''}, 
    { name: 'UNDP', imgTag: "bg-[url('/partner-logos/undp_Transparent.png')]", linkUrl: ''}, 
    { name: 'United Nations Foundation', imgTag: "bg-[url('/partner-logos/unf.png')]", linkUrl: ''}, 
    { name: 'UNODC', imgTag: "bg-[url('/partner-logos/unodc.png')]", linkUrl: ''}, 
    { name: 'Liberia', imgTag: "bg-[url('/partner-logos/liberia.svg')]", linkUrl: ''}, 
    { name: "Children's Investment Fund Foundation", imgTag: "bg-[url('/partner-logos/ciff_Transparent.png')]", linkUrl: ''}, 
    { name: 'Global Fund to End Modern Slavery', imgTag: "bg-[url('/partner-logos/gftems.png')]", linkUrl: ''}, 
//    { name: 'Global Partnership for Sustainable Development Data', imgTag: "bg-[url('/partner-logos/gpfsdd.jpg')]", linkUrl: ''}, 
] 

export const getLogoSized = (logo: string, imgTag: string) => {
    if( logo == 'World Bank') {
        return (
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className={ `w-[200px] h-[150px] mx-[1vw] ${imgTag} bg-center bg-contain object-fill bg-no-repeat `}
            ></motion.div>
        )
    } else if( logo == "Children's Investment Fund Foundation") {
        return (
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className={ `w-[200px] h-[100px] mx-[2vw] ${imgTag} bg-center bg-contain object-fill bg-no-repeat `}
            ></motion.div>
        )
    } else {
        return (
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className={ `w-[100px] h-[100px] mx-[3vw] ${imgTag} bg-center bg-contain object-fill bg-no-repeat `}
            ></motion.div>
        )
    }
}

const PartnerTicker = (props: Props) => {

    return (
        <motion.div 
            initial={{ x: 600 }}
            animate={{ x: -300 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="flex justify-center items-center w-[200vw] z-30 bg-white bg-opacity-50"
        >
            {partners.map((partner, index) => (
                <div key={index} className=''>
                    { getLogoSized(partner.name, partner.imgTag) }
                </div>
            ))}
        </motion.div>
    )
}

export default PartnerTicker