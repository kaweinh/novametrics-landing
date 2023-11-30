import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SweepReveal from './SweepReveal'
import VeBarChart from './VeBarChart'

type Props = {}

type ProvinceInfo = {
    name: string,
    imgTag: string,
    mb: string,
    mr: string,
}

const provinces: Array<ProvinceInfo> = [
    { name: 'comilla', imgTag: "bg-[url('/reports/comilla.png')]", mb: 'mb-[25vh]', mr: 'mr-[6.6vw]'  },
    { name: 'coxs_bazar', imgTag: "bg-[url('/reports/coxs_bazar.png')]", mb: 'mb-[7vh]', mr: 'mr-[2.5vw]'  },
    { name: 'gazipur', imgTag: "bg-[url('/reports/gazipur.png')]", mb: 'mb-[31vh]', mr: 'mr-[9.3vw]'  },
    { name: 'jessore', imgTag: "bg-[url('/reports/jessore.png')]", mb: 'mb-[22vh]', mr: 'mr-[15vw]'  },
    { name: 'joypurhat', imgTag: "bg-[url('/reports/joypurhat.png')]", mb: 'mb-[40vh]', mr: 'mr-[15vw]'  },
    { name: 'rajashahi', imgTag: "bg-[url('/reports/rajashahi.png')]", mb: 'mb-[35vh]', mr: 'mr-[33vh]' },
]

const WsaDemo = (props: Props) => {
    const vid1Ref = React.useRef<HTMLVideoElement>(null)
    const vid2Ref = React.useRef<HTMLVideoElement>(null)

    const [ activeProvince, setProvince ] = React.useState('comilla')

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

    const getProvincePin = ( info: ProvinceInfo ) => {
        if( info.name == activeProvince ) {
            return (
                <div className={ `absolute lg:w-[50px] bottom-[-2vh] right-[-0.5vw] ${info.mr} ${info.mb} items-center justify-center z-50 mx-auto `}>
                    <div className=" relative pb-[300%] flex items-center justify-center">
                        <div className="absolute top-0 w-full h-full items-center flex justify-center">
                            <div className={ `w-full h-full bg-[url('/components/pin.svg')] bg-center bg-contain object-fill bg-no-repeat`}> </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <motion.div 
                    whileHover={{ scale: 1.5 }}
                    onClick={() => { setProvince(info.name) }}
                    className={ `absolute lg:w-[30px] bottom-0 right-0 ${info.mr} ${info.mb} items-center cursor-pointer justify-center z-50 mx-auto `}>
                    <div className=" relative pb-[300%] flex items-center justify-center">
                        <div className="absolute top-0 w-full h-full items-center flex justify-center">
                            <div className={ `w-full h-full bg-[url('/components/pin.png')] bg-center bg-contain object-fill bg-no-repeat`}> </div>
                        </div>
                    </div>
                </motion.div>
            )
        }
    }

    return (
        <div className='w-full h-fit flex flex-col items-center justify-center'>

            <div className='flex justify-center items-center w-full h-fit bg-white py-[10vh] px-[10vw]'>
                <div className=' flex flex-col items-center justify-start font-mukta-mahee text-3xl text-primary-dark w-[100%]'>
                    <h1 className=' font-bold text-6xl mb-[5vh]'> Amplifying Signals Below the Noise </h1>

                    <SweepReveal texts={[
                        `Advanced AI and machine learning algorithms are used to amplify weak signals and distill clarity from the noise, bringing critical insights to the forefront of decision-making.`
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
                    <h1 className=' font-bold text-6xl mb-[5vh]'> Predictive Power for Proactive Strategies </h1>

                    <div className=' text-white'>
                        Hindcasting sharpens our predictive models, instilling confidence with historical validation to shape strategic foresight.
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

            <div className=' relative flex justify-center items-center h-fit px-[10vw] py-[10vh]'>
                <div className=' flex flex-col font-mukta-mahee text-3xl text-primary-dark w-[60%] mr-auto'>
                    <h1 className=' font-bold text-6xl mb-[5vh]'> Geographically Targeted Interventions </h1>

                    <SweepReveal texts={[
                        `
                        By deciphering unique local dynamics, Novametrics delivers geographically targeted interventions that inform and shape strategic policy for sustainable impact and development.
                        `
                    ]}/>
                </div>

                <div className="absolute lg:w-[180px] bottom-0 right-0 mr-[30vw] items-center justify-center z-50 mx-auto">
                    <div className=" relative pb-[200%] flex items-center justify-center">
                        <div className="absolute top-0 w-full h-full items-center flex justify-center">
                            <div className={ `w-full h-full bg-[url('/reports/${activeProvince}.png')] bg-center bg-contain object-fill bg-no-repeat `}> </div>
                        </div>
                    </div>
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

                        { provinces.map((province, index) => (
                            getProvincePin(province)
                        ))}
                    </div>   
                </div>                  
            </div>

        </div>
    )
}

export default WsaDemo