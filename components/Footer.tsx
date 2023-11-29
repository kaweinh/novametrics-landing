import React from 'react'
import { AnimatePresence, motion, usePresence } from 'framer-motion'
import '../app/globals.css'
import { gsap } from 'gsap';

type Props = {
    fadeColor: string
}

type FadeProps = {
    color: string
}

const FadeOutBox = ( { color }: FadeProps ) => {    
    if( color == 'blue') {
        return ( <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], transition: {duration: 3, delay: 1 } }}
            className='w-full h-full bg-primary-light bg-opacity-70'>
            </motion.div> 
        );
    } else if( color == 'dark blue') {
        return ( <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], transition: {duration: 3, delay: 1.5 } }}
            className='w-full h-full bg-primary bg-opacity-70'>
            </motion.div> 
        );
    } else if( color == 'green') {
        return ( <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], transition: {duration: 3, delay: 2} }}
            className='w-full h-full bg-accent bg-opacity-70'>
            </motion.div> 
        );
    } else {
        return ( <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], transition: {duration: 3, delay: 0.5 } }}
            className='w-full h-full bg-accent-dark bg-opacity-70'>
            </motion.div> 
        );
    }
}

const Footer = ( { fadeColor }: Props) => {
    const numRows = 10;
    const numCols = 100;

    const rows = Array.from({ length: numRows }, (_, index) => index + 1);
    const cols = Array.from({ length: numCols }, (_, index) => index + 1);

    const [greenCell, setGreenCell] = React.useState(20000);
    const [blueCell, setBlueCell] = React.useState(20000);
    const [darkBlueCell, setDarkBlueCell] = React.useState(20000)
    const [darkGreenCell, setDarkGreenCell] = React.useState(20000)  

    // Function to generate a random cell number
    const getRandomCell = () => {
        return Math.floor(Math.random() * numRows * numCols )
    }
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setGreenCell( getRandomCell() );
        setDarkGreenCell( getRandomCell());
        setBlueCell( getRandomCell());
        setDarkBlueCell( getRandomCell());
      }, 5000); // Change every second
  
      return () => clearInterval(interval);
    }, []);

    const getCellDisplay = ( index: number) => {
        if( greenCell == index ) {
            return <FadeOutBox color='green'/>
        } else if( darkGreenCell == index ) {
            return <FadeOutBox color='dark green'/>
        } else if( blueCell == index ) {
            return <FadeOutBox color='blue'/>
        } else if( darkBlueCell == index ) {
            return <FadeOutBox color='dark blue'/>
        } 
    }

    return (
        <div className='relative w-full h-fit font-mukta-mahee text-black'>
            <div className='w-full h-[60vh] flex justify-center items-center text-neutral-gray-dark'>
                <div className="w-full h-full bg-[url('/components/midtest2.png')] bg-center bg-cover object-cover bg-no-repeat z-10">
                    <div className={ `relative w-full h-full bg-gradient-to-b ${ fadeColor == 'white' ? 'from-white': 'from-neutral-white'} to-my-white-see-thru to-[95%] z-30 backdrop-blur-sm `}>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='absolute w-[100vw] h-[30vh] bg-opacity-30 rounded-xl flex items-center justify-center overflow-hidden z-20'>
                                <div className='relative w-full h-full'>
                                    <div className='animation-squares'></div>
                                </div>
                            </div>

                            <div className='absolute mx-auto h-[20vh] w-[100vw] flex items-center justify-center z-30'>
                                <table className=' table-auto border-collapse border border-white xl:text-[0.2rem] text-[0.1rem]'>
                                    <tbody>
                                        { rows.map(( _, r_index ) => ( 
                                            <tr key={r_index} className=' backdrop-blur-md'>
                                                { cols.map(( _, c_index ) => ( 
                                                    <td key={ c_index} className='w-[1vw] h-[1vw] border-1 border-white'>
                                                        { ![greenCell, blueCell, darkGreenCell, darkBlueCell].includes( r_index * numCols + c_index ) && (
                                                            <div key={ c_index } className=' bg-neutral-white w-full h-full bg-opacity-30'> </div>
                                                        )}

                                                        <AnimatePresence>
                                                            { getCellDisplay( r_index * numCols + c_index ) }
                                                        </AnimatePresence>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className=' ml-[40vw] flex flex-col items-start justify-center w-[30vw] p-10 bg-white rounded-xl z-40'>
                                <h1 className='text-6xl font-bold mb-[2vh]'> Let us know how we can help today </h1>

                                <div className='text-xl mb-[2vh]'>
                                    Together we can make a better world one solution at a time
                                </div>

                                <motion.div 
                                    whileHover={{ scale: 0.98 }}
                                    whileTap={{ scale: 1.02 }}
                                    className='py-4 px-8 w-full text-center bg-black rounded-sm text-neutral-white cursor-pointer select-none font-bold'>
                                    Contact Us
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[23vh]'>
                <motion.div 
                    className="w-full h-full bg-[url('/components/midtest2.png')] bg-center bg-cover object-cover bg-no-repeat z-10"
                >
                    <div className='w-full h-full bg-neutral-gray-light bg-opacity-80 z-30 footer-circles backdrop-blur-2xl'></div>
                </motion.div>
            </div>

            <div className='absolute bottom-0 w-full px-[10vw]'>
                <div className='flex flex-col'>
                    <div className=' flex justify-center items-center'>
                        <div className="w-[50px] h-[50px] bg-[url('/components/sh-logo.svg')] bg-center bg-contain object-contain bg-no-repeat z-30"></div>

                        <div className='absolute w-[20%] mr-[10vw] right-0 flex justify-end text-xl font-thin'>
                            <div className='flex mr-[0.5vw] items-end'>
                                <motion.div 
                                    whileHover={{
                                        fontWeight: "bold",
                                        color: "#6E7173"
                                    }}
                                    className=' cursor-pointer'
                                > Our Work </motion.div>
                                <motion.div 
                                    whileHover={{
                                        fontWeight: "bold",
                                        color: "#6E7173"
                                    }}
                                    className=' cursor-pointer mx-[2vw]'
                                > Publications </motion.div>
                                <motion.div 
                                    whileHover={{
                                        fontWeight: "bold",
                                        color: "#6E7173"
                                    }}
                                    className=' cursor-pointer'
                                > Team </motion.div>
                            </div>                  
                        </div>
                    </div>

                    <div className='w-full h-[2px] mt-[20px] mb-[20px] bg-black'></div>

                    <div className='flex justify-start items-center mb-[20px] w-full'>
                        <div className=' mx-auto'> Corporate Headquarters: Bethesda. MD </div>
                    </div>

                    <div className='flex mb-[20px] items-center'>
                        <div className='ml-0 mr-auto flex'>
                            <div className="w-[20px] h-[20px] bg-[url('/components/copyright.svg')] bg-center bg-contain object-contain bg-no-repeat z-30"></div>
                            <div className=' text-sm font-thin'> Novametrics LLC. All rights reserved </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className='ml-auto mr-0 cursor-pointer select-none'
                        >
                            <div className=" w-[50px] h-[50px] bg-[url('/components/linkedin-black.svg')] bg-center bg-contain object-contain bg-no-repeat z-30"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer