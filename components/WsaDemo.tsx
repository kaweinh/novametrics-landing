import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SweepReveal from './SweepReveal'
import VeBarChart from './VeBarChart'

type Props = {}

const WsaDemo = (props: Props) => {
    const vid1Ref = React.useRef<HTMLVideoElement>(null)
    const vid2Ref = React.useRef<HTMLVideoElement>(null)

    // Function to play or pause both videos
    function playPauseVideos( playing : boolean ) {
        if ( playing && vid1Ref.current && vid2Ref.current ) {
            vid1Ref.current.play();
            vid2Ref.current.play();
        } else {
            if( vid1Ref.current && vid2Ref.current ) {
                vid1Ref.current.pause();
                vid2Ref.current.pause();
            }
        }
    }

    // Function to sync video2 currentTime with video1
    function syncVideos() {
        if ( vid1Ref.current && vid2Ref.current ) {
            vid2Ref.current.currentTime = vid1Ref.current.currentTime;
        }
    }

    React.useEffect(() => {
        // Add event listeners
        if ( vid1Ref.current && vid2Ref.current ) {
            vid1Ref.current.addEventListener('play', () => playPauseVideos(true));
            vid1Ref.current.addEventListener('pause', () => playPauseVideos(false));
            vid1Ref.current.addEventListener('seeked', () => syncVideos());
            setInterval(() => syncVideos(), 1000);
        }

        return () => {
            if ( vid1Ref.current && vid2Ref.current ) {
                vid1Ref.current.removeEventListener('play', () => playPauseVideos(true));
                vid1Ref.current.removeEventListener('pause', () => playPauseVideos(false));
                vid1Ref.current.removeEventListener('seeking', () => syncVideos());
            }
        }
    }, [])

    const bg1Ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress: bg1Progress } = useScroll({ 
      target: bg1Ref, 
      offset: ["start end", "end start"] 
    })

    const bg2Ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress: bg2Progress } = useScroll({ 
      target: bg2Ref, 
      offset: ["start end", "end start"] 
    })

    return (
        <div className='w-full h-fit flex flex-col items-center justify-center'>

            <div className='flex justify-center items-center w-full h-fit bg-white py-[10vh] px-[10vw]'>
                <div className=' flex flex-col items-center justify-start font-mukta-mahee text-3xl text-primary-dark w-[100%]'>
                    <h1 className=' font-bold text-6xl mb-[5vh]'> Separating the Signals from the Noise </h1>

                    <SweepReveal texts={[
                        `Novametrics uses advanced analytics to help organizations navigate the complexities of the modern world. 
                        We provide a range of services, including data collection, analysis, and visualization, to help our clients 
                        make informed decisions and achieve their goals.`
                    ]}/>
                </div>

                <div className='w-full flex flex-col justify-center items-center'>
                    <div className="lg:w-[600px] items-center justify-center z-30 mt-[2vh]" style={{ clipPath: 'polygon(1% 5%, 100% 5%, 100% 97%, 1% 97%)' }}>
                        <div className="relative pb-[29%] flex items-center justify-center">
                            <div className="absolute top-0 w-full h-full items-center flex justify-center">
                                <div className="absolute z-30 w-full h-full">
                                    <div className="absolute z-30 w-full h-full">
                                        <video
                                            ref={vid1Ref}
                                            id='wsa-chart-vid'
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        >
                                            <source src="/animations/wsa_chart.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>                     
                    </div>

                    <div className="lg:w-[700px] mr-[-100px] items-center justify-center z-30 mt-[-150px]" style={{ clipPath: 'polygon(20% 38.5%, 70% 38.5%, 70% 98%, 15% 98%)' }} >
                        <div className=" relative pb-[70%] flex items-center justify-center">
                            <div className="absolute top-0 w-full h-full items-center flex justify-center">
                                <div className="absolute z-30 w-full h-full">
                                    <div className="absolute z-30 w-full h-full">
                                        <video
                                            ref={vid2Ref}
                                            id='wsa-map-vid'
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        >
                                            <source src="/animations/wsa_map_better.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>

            <div ref={bg1Ref} className='w-full h-[3vh] relative overflow-hidden'>
                <motion.div 
                    style={{ 
                        scaleX: useTransform(bg1Progress, [0, 1], [1, 1.5])
                    }}
                    className="w-full h-full bg-[url('/components/@@@.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                >
                    <div className='w-full h-full bg-primary-dark bg-opacity-[0.6]'></div>
                </motion.div>
            </div>

            <div className='flex justify-center items-center px-[10vw] py-[10vh] bg-primary-dark'>
                <div className='mr-auto'>
                    <VeBarChart />
                </div>

                <div className=' flex flex-col font-mukta-mahee text-3xl text-white w-[50%] mr-auto'>
                    <h1 className=' font-bold text-6xl mb-[5vh]'> Hindcasting </h1>

                    <div className=' text-white'>
                        A bunch of text about hind-casting the chart to the right mentioned somehow please and perfectly. Hames and stuff and things and i could go on but I&apos;ll leave it here for now.
                    </div>
                </div>
            </div>

            <div ref={bg2Ref} className='w-full h-[3vh] relative overflow-hidden'>
                <motion.div 
                    style={{ 
                        scaleX: useTransform(bg2Progress, [0, 1], [1, 1.5])
                    }}
                    className="w-full h-full bg-[url('/components/@@@.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                >
                    <div className='w-full h-full bg-primary-dark bg-opacity-[0.6]'></div>
                </motion.div>
            </div>

            <div className='flex justify-center items-center h-fit px-[10vw]'>
                <div className=' flex flex-col font-mukta-mahee text-3xl text-primary-dark w-[60%] mr-auto'>
                    <h1 className=' font-bold text-6xl mb-[5vh]'> Location Specific Policy Intervention </h1>

                    <SweepReveal texts={[
                        `Each country has a unique set of characteristics that influence its development and stability. 
                        Novametrics uses a variety of data sources to understand these characteristics and how they interact
                        with each other. This allows us to identify potential weak signals and provide actionable insights`
                    ]}/>
                </div>

                <div className="lg:w-[400px] items-center justify-center z-30 mx-auto">
                    <div className=" relative pb-[145%] flex items-center justify-center">
                        <div className="absolute top-0 w-full h-full items-center flex justify-center">
                            <div className="absolute z-30 w-full h-full">
                                <div className="absolute z-30 w-full h-full">
                                    <video
                                        id='wsa-map-vid'
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/animations/bangladesh_traffic_white.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>                  
            </div>

        </div>
    )
}

export default WsaDemo