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
    { name: 'comilla', imgTag: "bg-[url('/reports/comilla.png')]", mb: 'mb-[62%]', mr: 'mr-[32%]'  },
    { name: 'coxs_bazar', imgTag: "bg-[url('/reports/coxs_bazar.png')]", mb: 'mb-[18%]', mr: 'mr-[13%]'  },
    { name: 'gazipur', imgTag: "bg-[url('/reports/gazipur.png')]", mb: 'mb-[77%]', mr: 'mr-[44%]'  },
    { name: 'jessore', imgTag: "bg-[url('/reports/jessore.png')]", mb: 'mb-[55%]', mr: 'mr-[72%]'  },
    { name: 'joypurhat', imgTag: "bg-[url('/reports/joypurhat.png')]", mb: 'mb-[100%]', mr: 'mr-[72%]'  },
    { name: 'rajashahi', imgTag: "bg-[url('/reports/rajashahi.png')]", mb: 'mb-[86%]', mr: 'mr-[82%]' },
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
                <div key={ info.name } className={ `absolute w-[30px] xl:w-[50px] right-[-4px] bottom-[-4px] xl:bottom-[-20px] xl:right-[-9px] ${info.mr} ${info.mb} items-center justify-center z-50 mx-auto `}>
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
                    key={ info.name }
                    whileHover={{ scale: 1.5 }}
                    onClick={() => { setProvince(info.name) }}
                    className={ `absolute w-[20px] xl:w-[30px] bottom-0 right-0 ${info.mr} ${info.mb} items-center cursor-pointer justify-center z-50 mx-auto `}>
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
        <div className='w-full h-fit flex flex-col items-center justify-center font-thin font-mukta-mahee'>

            <div className='flex flex-col lg:flex-row justify-center items-center w-full h-fit bg-white py-[10vh] px-[5vw] lg:px-[10vw]'>
                <div className=' flex flex-col items-start justify-start text-base xl:text-xl text-primary-dull lg:mr-10'>
                    <h1 className=' font-bold text-2xl xl:text-4xl lg:text-left text-center'> Amplifying Signals Below the Noise </h1>

                    <p className=' text-black leading-8 lg:leading-10 mt-10'>
                        Advanced AI and machine learning algorithms are used to amplify weak signals and separate the most influential factors out from the noise of data, 
                        bringing critical insights to the forefront of decision-making. 
                    </p>

                    <p className=' text-primary-soft text-base mt-10 leading-8 lg:leading-10 '>
                        See here how the Weak-Signals are separated from the noise to identify vulnerable regions to Boko Haram breeding grounds in Nigeria.
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className="2xl:w-[600px] xl:w-[400px] w-[300px] mt-[50px] items-center justify-center z-30 lg:mt-[2vh]" style={{ clipPath: 'polygon(2.5% 5%, 100% 5%, 100% 95.5%, 2.5% 95.5%)' }}>
                        <div className="relative pb-[29%] flex items-center justify-center">
                            <div className="absolute top-0 w-full h-full items-center flex justify-center">
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
                                        <source src="/animations/wsa_chart_merged.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>                     
                    </div>

                    <div className="xl:w-[700px] lg:w-[400px] lg:mr-[-100px] mr-[-50px] w-[300px] items-center justify-center z-30 mt-[-50px] xl:mt-[-150px]" style={{ clipPath: 'polygon(18.5% 38.5%, 70% 38.5%, 70% 100%, 15% 100%)' }} >
                        <div className=" relative pb-[70%] flex items-center justify-center">
                            <div className="absolute top-0 w-full h-full items-center flex justify-center">
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
                                        <source src="/animations/wsa_map_merged.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>

            <div ref={bg1Ref} className='w-full h-[2vh] relative overflow-hidden'>
                <motion.div 
                    className="w-full h-full bg-[url('/components/oceanic.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                >
                    <div className='w-full h-full bg-primary-dark bg-opacity-[0.6] backdrop-blur-md'></div>
                </motion.div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center px-[5vw] lg:px-[10vw] py-[10vh] w-full bg-primary-dark'>

                <div className='mb-10 lg:hidden flex flex-col font-mukta-mahee justify-center items-center xl:text-xl text-base text-white w-full lg:w-[50%] mr-auto'>
                    <h1 className=' font-bold text-2xl xl:text-4xl text-center'> Predictive Power for Proactive Strategies </h1>

                    <div className=' text-white mt-10 leading-8 lg:leading-10 '>
                        Hindcasting allows us to evaluate the uncertainty associated with our predictive capabilities and provide quantitative assessments of confidence levels.
                    </div>

                    <p className=' text-primary-light text-base mt-10 leading-8 lg:leading-10'>
                        See here how open-source data on violent extremism in the Philippines is used to validate Novametrics predictive models
                    </p>
                </div>

                <div className=''>
                    <VeBarChart />
                </div>

                <div className=' flex-col font-mukta-mahee xl:text-xl text-base text-white hidden lg:flex ml-10'>
                    <h1 className=' font-bold text-2xl xl:text-4xl'> Predictive Power for Proactive Strategies </h1>

                    <div className=' text-white mt-10 leading-8 lg:leading-10 '>
                        Hindcasting allows us to evaluate the uncertainty associated with our predictive capabilities and provide quantitative assessments of confidence levels.
                    </div>

                    <p className=' text-primary-light text-base mt-10 leading-8 lg:leading-10'>
                        See here how open-source data on violent extremism in the Philippines is used to validate Novametrics predictive models
                    </p>
                </div>
            </div>

            <div ref={bg2Ref} className='w-full h-[2vh] relative overflow-hidden'>
                <motion.div 
                    className="w-full h-full bg-[url('/components/oceanic.png')] bg-center bg-cover object-cover bg-no-repeat z-20"
                >
                    <div className='w-full h-full bg-primary-dark bg-opacity-[0.6] backdrop-blur-md'></div>
                </motion.div>
            </div>

            <div className=' relative flex flex-col lg:flex-row justify-center items-center h-fit px-[5vw] lg:px-[10vw] py-[10vh]'>
                <div className=' flex flex-col font-mukta-mahee text-base xl:text-xl text-primary-dull w-full lg:w-[60%] mr-auto'>
                    <h1 className=' font-bold xl:text-4xl text-2xl text-center lg:text-left'> Geographically Targeted Interventions </h1>

                    <p className=' text-black mt-10 leading-8 lg:leading-10'>
                        Through analysis that outlines the interconnected factors of a community, Novametrics delivers geographically targeted interventions that inform and 
                        shape strategic policy for sustainable impact and development.
                    </p>

                    <p className=' text-sm xl:text-lg text-black font-semibold bg-gradient-to-r from-primary-soft to-primary-light p-10 rounded-xl leading-8 lg:leading-10 mt-10'>
                        Click through an interactive map of Bangladesh to unveil province-specific policy reports, informed by predictive vulnerability insights and historic trafficking 
                        routes, for geographically-targeted interventions.
                    </p>
                </div>

                <div className="xl:w-[300px] 2xl:w-[400px] lg:mt-0 mt-[50px] w-[200px] items-center justify-center z-30 mx-auto">
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

                        <div className="absolute w-[100px] md:w-[120px] xl:w-[150px] 2xl:w-[180px] top-[70%] right-[60%] items-center justify-center z-40">
                            <div className=" relative pb-[130%] flex items-center justify-center">
                                <div className="absolute top-0 w-full h-full items-center flex justify-center">
                                    <div className={ `w-full h-full bg-[url('/reports/${activeProvince}.png')] bg-center bg-contain object-fill bg-no-repeat `} style={{ boxShadow: '0px 0px 10px rgba(0,0,0, 0.75)' }}> </div>
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