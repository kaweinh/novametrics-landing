import React from 'react'
import { AnimatePresence, motion, usePresence } from 'framer-motion'
import '../app/globals.css'
import { gsap } from 'gsap';
import Link from 'next/link';

type Props = {
    fadeColor: string,
    setContactOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

type AnimatedSquareProps = {
    delay: number,
    color: string,
}

const Footer = ( { fadeColor, setContactOpen }: Props) => {
    const numRows = 10;
    const numCols = 135;

    const rows = Array.from({ length: numRows }, (_, index) => index + 1);
    const cols = Array.from({ length: numCols }, (_, index) => index + 1);

    const [greenCell, setGreenCell] = React.useState( Array<number>() );
    const [blueCell, setBlueCell] = React.useState( Array<number>() );
    const [darkBlueCell, setDarkBlueCell] = React.useState( Array<number>() )
    const [darkGreenCell, setDarkGreenCell] = React.useState( Array<number>() )  

    // Function to generate a random cell number
    const getRandomCell = () => {
        return Math.floor(Math.random() * numRows * numCols )
    }

    const getRandomSet = () => {
        let randomSet = Array<number>()
        for( let i = 0; i < 10; i++ ) {
            randomSet.push( getRandomCell() )
        }
        return randomSet
    }

    React.useEffect(() => {
        // Function that sets the new sets
        const updateCells = () => {
          setDarkGreenCell(getRandomSet());
        };
      
        const initialDelay = 0;
        const timeout = setTimeout(() => {
          updateCells();
          const interval = setInterval(() => {
            updateCells();
          }, 6000); // Change every 6 seconds
    
          return () => {
            clearInterval(interval);
          };
        }, initialDelay);
        return () => clearTimeout(timeout);
      }, []);

      React.useEffect(() => {
        // Function that sets the new sets
        const updateCells = () => {
          setBlueCell(getRandomSet());
        };
      
        const initialDelay = 1000;
        const timeout = setTimeout(() => {
          updateCells();
          const interval = setInterval(() => {
            updateCells();
          }, 6000); // Change every 6 seconds
    
          return () => {
            clearInterval(interval);
          };
        }, initialDelay);
        return () => clearTimeout(timeout);
      }, []);

      React.useEffect(() => {
        // Function that sets the new sets
        const updateCells = () => {
          setDarkBlueCell(getRandomSet());
        };
      
        const initialDelay = 2000;
        const timeout = setTimeout(() => {
          updateCells();
          const interval = setInterval(() => {
            updateCells();
          }, 6000); // Change every 6 seconds
    
          return () => {
            clearInterval(interval);
          };
        }, initialDelay);
        return () => clearTimeout(timeout);
      }, []);

      React.useEffect(() => {
        // Function that sets the new sets
        const updateCells = () => {
          setGreenCell(getRandomSet());
        };
      
        const initialDelay = 3000;
        const timeout = setTimeout(() => {
          updateCells();
          const interval = setInterval(() => {
            updateCells();
          }, 6000); // Change every 6 seconds
    
          return () => {
            clearInterval(interval);
          };
        }, initialDelay);
        return () => clearTimeout(timeout);
      }, []);

    const getCellDisplay = ( index: number ) => {
        if( greenCell.includes( index ) ) {
            return ( 
                <div className='w-full h-full bg-primary-light opacity-0' style={{ animation: 'fadeInThenOut 3s ease-in-out forwards', animationDelay: (index % 4 ).toString() + 's' }}></div> 
            );
        } else if( darkGreenCell.includes( index ) ) {
            return ( 
                <div className='w-full h-full bg-primary-soft opacity-0' style={{ animation: 'fadeInThenOut 3s ease-in-out forwards', animationDelay: (index % 4 ).toString() + 's' }}></div> 
            );
        } else if( blueCell.includes( index ) ) {
            return ( 
                <div className='w-full h-full bg-primary-softer opacity-0' style={{ animation: 'fadeInThenOut 3s ease-in-out forwards', animationDelay: (index % 4 ).toString() + 's' }}></div> 
            );
        } else if( darkBlueCell.includes( index ) ) {
            return  (
                <div className='w-full h-full bg-primary-dark opacity-0' style={{ animation: 'fadeInThenOut 3s ease-in-out forwards', animationDelay: (index % 4 ).toString() + 's' }}></div> 
            )
        }
    }

    return (
        <div className='relative w-full h-fit font-mukta-mahee text-black'>
            <div className='w-full h-fit flex justify-center items-center text-neutral-gray-dark'>
                <div className="w-full h-[60vh] bg-[url('/components/oceanic.png')] bg-center bg-cover object-cover bg-no-repeat z-10">
                    <div className={ `relative w-full h-full bg-gradient-to-b ${ fadeColor == 'white' ? 'from-white': 'from-neutral-white'} to-my-white-see-thru from-[10%] to-[100%] z-30 backdrop-blur-xl`}>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='absolute w-[100vw] h-[30vh] bg-opacity-30 rounded-xl flex items-center justify-center overflow-hidden z-20'>
                                <div className='relative w-full h-full'>
                                    <div className='animation-squares'></div>
                                </div>
                            </div>

                            <div className='absolute mx-auto lg:h-[20vh] h-[50vh] w-[100vw] flex items-center justify-center z-30'>
                                <table className=' table-fixed border-collapse border border-white xl:text-[0.2rem] text-[0.1rem]'>
                                    <tbody className='hidden lg:table'>
                                        { rows.map(( _, r_index ) => ( 
                                            <tr key={r_index} className=' backdrop-blur-sm'>
                                                { cols.map(( _, c_index ) => ( 
                                                    <td key={ c_index} className='lg:w-[0.75vw] lg:h-[0.75vw] border border-white'>
                                                        {   !greenCell.includes( r_index * numCols + c_index ) && 
                                                            !blueCell.includes( r_index * numCols + c_index ) && 
                                                            !darkGreenCell.includes( r_index * numCols + c_index ) && 
                                                            !darkBlueCell.includes( r_index * numCols + c_index ) && (
                                                            <div 
                                                                key={ c_index } 
                                                                className=' bg-neutral-white w-full h-full bg-opacity-90'
                                                            > </div>
                                                        )}

                                                        { getCellDisplay( r_index * numCols + c_index ) }
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className=' lg:ml-[40vw] flex flex-col items-start justify-center lg:w-[35vw] xl:w-[25vw] mx-[5vw] lg:mr-0 p-6 lg:p-8 bg-white text-black rounded-xl z-40'>
                                <h1 className='xl:text-3xl text-xl font-bold mb-[2vh]'> Let us know how we can help today </h1>

                                <div className='xl:text-xl text-base mb-[2vh] font-thin text-black'>
                                    Together we can make a better world one solution at a time
                                </div>

                                <motion.div 
                                    whileHover={{ scale: 0.98 }}
                                    whileTap={{ scale: 1.02 }}
                                    onClick={ () => { setContactOpen( true ) }}
                                    className='py-4 px-8 w-full text-center bg-primary rounded-sm text-white cursor-pointer select-none font-bold'>
                                    Contact Us
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom-0 w-full'>
                <div className='relative'>
                    <motion.div 
                        className="absolute w-full h-full bg-[url('/components/oceanic.png')] bg-center bg-cover object-cover bg-no-repeat z-10"
                    >
                        <div className='w-full h-full bg-neutral-gray-light bg-opacity-80 z-30 footer-circles backdrop-blur-2xl'></div>
                    </motion.div>
                    
                    <div className='flex flex-col z-30 py-[2vh] px-[10vw] lg:px-[5vw] xl:px-[10vw]'>
                        <div className=' flex justify-center items-center z-30'>
                            <Link href='/'>
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    className="lg:w-[35px] lg:h-[32px] h-[40px] w-[40px] bg-[url('/components/sh-logo-dull.svg')] bg-center bg-contain object-contain bg-no-repeat z-30"
                                ></motion.div>
                            </Link>

                            <div className='absolute xl:w-[30%] lg:w-[30%] lg:mr-[5vw] xl:mr-[10vw] right-0 mt-4 lg:flex justify-end text-base font-thin hidden'>
                                <div className='flex mr-[0.5vw] items-end z-30'>
                                    <Link href='/'>
                                        <motion.div 
                                            whileHover={{
                                                fontWeight: "bold",
                                                color: "#6E7173"
                                            }}
                                            className=' cursor-pointer mr-[2vw]'
                                        > Home </motion.div>
                                    </Link>

                                    <Link href='ourwork'>
                                        <motion.div 
                                            whileHover={{
                                                fontWeight: "bold",
                                                color: "#6E7173"
                                            }}
                                            className=' cursor-pointer mr-[2vw]'
                                        > Our Work </motion.div>
                                    </Link>

                                    <Link href='publications'>
                                        <motion.div 
                                            whileHover={{
                                                fontWeight: "bold",
                                                color: "#6E7173"
                                            }}
                                            className=' cursor-pointer mr-[2vw]'
                                        > Publications </motion.div>
                                    </Link>

                                    <Link href='team'>
                                        <motion.div 
                                            whileHover={{
                                                fontWeight: "bold",
                                                color: "#6E7173"
                                            }}
                                            className=' cursor-pointer'
                                        > Team </motion.div>
                                    </Link>
                                </div>                  
                            </div>
                        </div>

                        <div className='w-full h-[2px] lg:mt-[20px] lg:mb-[20px] mt-[10px] mb-[10px] bg-black z-30'></div>

                        <div className='flex justify-start items-center lg:mb-[20px] mb-[10px] w-full text-base z-30'>
                            <div className=' mx-auto'> Corporate Headquarters: Bethesda, MD </div>
                        </div>

                        <div className='flex items-center z-30'>
                            <div className='ml-0 mr-auto flex'>
                                <div className="w-[20px] h-[20px] bg-[url('/components/copyright.svg')] bg-center bg-contain object-contain bg-no-repeat z-30"></div>
                                <div className=' text-xs lg:text-sm font-thin'> Novametrics LLC. All rights reserved </div>
                            </div>

                            <a href='https://www.linkedin.com/company/novametricsllc/' target='_blank'>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='ml-auto mr-0 cursor-pointer select-none'
                                >
                                    <div className=" w-[50px] h-[50px] bg-[url('/components/linkedin-black.svg')] bg-center bg-contain object-contain bg-no-repeat z-30"></div>
                                </motion.div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer