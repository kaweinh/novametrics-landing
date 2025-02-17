import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

type Props = {
    activePage: string,
    setActivePage: React.Dispatch<React.SetStateAction<string>>,
    rootPage: string,
    contactOpen: boolean,
    setContactOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Navbar = (props: Props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const pages = [ 'Our Work', 'Publications', 'Team' ]

    const [scrollingDown, setScrollingDown] = React.useState(false);
    const controls = useAnimation();
    const [y, setY] = React.useState(0);

    const handleScroll = () => {
        if (window.scrollY > y && window.scrollY > 10) {
            setScrollingDown(true);
        } else {
            setScrollingDown(false);
        }
        setY(window.scrollY);
    };

    React.useEffect(() => {
        setY(window.scrollY)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ handleScroll ]);

    React.useEffect(() => {
        if (scrollingDown) {
            controls.start({ opacity: 0 });
        } else {
            controls.start({ opacity: 1 });
        }
    }, [scrollingDown, controls]);

    const getIcon = () => { 
        return (
            <Link href='/' className='absolute flex justify-center items-center left-0 z-40'>

                <div 
                    className='w-[29px] h-[26.2px] ml-[20px] lg:ml-[50px] xl:ml-[200px] z-40 bg-no-repeat bg-cover cursor-pointer'
                    style={{ backgroundImage: `url('/components/sh-logo-dull.svg')` }}
                ></div>

                <div className='lg:text-3xl text-2xl text-black font ml-[10px] flex'> 
                
                    Nova 
                    <span className=''>
                        metrics 
                    </span>
                </div>

            </Link>
        )
    }

    const getMobileLinkObject = (pageName: string) => {
        return (
            <Link href={ '/' + pageName.toLowerCase().replace(" ", "") } className='relative h-[3vh] w-full'>
                <div
                    onClick={() => { setMobileMenuOpen( false ) }} 
                    className={ `bg-[url('/components/oceanic.png')] bg-center bg-cover object-cover bg-no-repeat relative z-50 w-full h-full text-left ease-in-out bg-opacity-20 backdrop-blur-xl border-b-[0.1px] border-my-gray-dark font-open-sans hover:bg-zinc-800 cursor-pointer ${ pageName == props.activePage ? 'text-primary-dull font-bold' : 'text-black'}` } >
                    <div className='w-full h-full bg-neutral-gray-light bg-opacity-80 z-30 footer-circles backdrop-blur-2xl p-[4vh] pl-[70px]'>
                        {pageName} 
                    </div>
                </div>
            </Link>
        )
    }

    const getDesktopLinkObject = (pageName: string) => {
        return (
            <div className='flex items-center'>
                <div className='py-3 xl:px-16 lg:px-12 z-40'>
                    <Link href={ '/' + pageName.toLowerCase().replace(" ", "") }>
                        <div>
                            <div 
                                className={ ` hover:font-bold 
                                    ${props.activePage == pageName ? ' font-bold text-primary-dull' :'text-black font-thin'} 
                                cursor-pointer select-none text-lg` } > 
                                {pageName} 
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='ml-auto mr-0 w-[1px] h-[20px] bg-neutral-gray-dark z-40'></div>
            </div>
        )
    }

    return (
        <motion.div 
            initial={{ opacity: 1 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className='block'
        >
            <div className={ `relative text-primary-dull flex w-full h-[70px] justify-center items-center ease-in-out font-mukta-mahee `}>
                <div className="absolute w-full h-full bg-[url('/components/oceanic.png')] bg-center bg-cover object-cover bg-no-repeat z-10">
                    <div className='w-full h-full bg-neutral-gray-light bg-opacity-80 z-30 footer-circles backdrop-blur-2xl'></div>
                </div>

                { getIcon() } 
                
                <div className='z-50 lg:hidden text-primary-dull absolute mr-[10px] mt-[0px] right-0 hover:text-primary-dull cursor-pointer p-5' onClick={() => { setMobileMenuOpen( !mobileMenuOpen )}} >
                    { mobileMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                <div className='lg:w-full hidden lg:flex items-center'>
                    <div className='flex ml-auto mr-[50px] items-center'>
                        {pages.map((pageName, index) => 
                            <div key={index} className=' flex items-center'>
                                { getDesktopLinkObject(pageName)}
                            </div>
                        )}
                    </div>

                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => { props.setContactOpen( !props.contactOpen ) }}
                        className=' bg-primary px-4 h-fit py-2 lg:mr-[50px] xl:mr-[100px] text-white rounded-sm items-center flex text-xl z-40 cursor-pointer select-none ignore-click'
                    >
                        Contact Us
                    </motion.div>
                </div>
            </div>

            { mobileMenuOpen && (
                <div className='relative lg:hidden top-0 left-0 ease-in max-h-[80vh] overflow-y-scroll'>
                    {pages.map((pageName, index) => 
                        <div key={index}>
                            { getMobileLinkObject(pageName) }
                        </div>
                    )}
                    <div
                        onClick={() => { setMobileMenuOpen( false ); props.setContactOpen( !props.contactOpen ) }} 
                        className={ `bg-[url('/components/oceanic.png')] bg-center bg-cover object-cover bg-no-repeat relative z-50 w-full h-full text-left ease-in-out bg-opacity-20 backdrop-blur-xl border-b-[0.1px] border-my-gray-dark font-open-sans hover:bg-zinc-800 cursor-pointer font-bold text-primary` } >
                        <div className='w-full h-full bg-neutral-gray-light bg-opacity-80 z-30 footer-circles backdrop-blur-2xl p-[4vh] pl-[70px]'>
                            Contact Us
                        </div>
                    </div>
                    
                </div>
            )}
       </motion.div>
    )
}

export default Navbar

//<div className='absolute h-full border border-transparent right-0 my-auto px-6 py-2 text-transparent bg-my-purple-medium bg-opacity-50 z-10 blur-lg'> Start free trial </div>
// shadow-[0_0_20px_theme(colors.my-purple-medium)]