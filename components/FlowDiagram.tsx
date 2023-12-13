import React from 'react'
import { motion } from 'framer-motion'

export type Layer = {
    name: string,
    nodes: Array<string>,
    color: string,
}

type Props = {
    layers: Array<Layer>,
    text_color: string
}

const FlowDiagram = (props: Props) => {
    return (
        <>
            <div className={ `w-full bg-black rounded-3xl overflow-hidden text-${ props.text_color } hidden lg:grid grid-cols-${ props.layers.length.toString() }` }>
                { props.layers.map((layer: Layer, index: number) => (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 * index }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.1 * index, ease: 'easeInOut' }}
                        key={ index } 
                        className={ `relative w-full bg-opacity-50 flex flex-col justify-center py-[30%] items-center bg-${ layer.color }`}
                    >
                        <div className='text-sm italic absolute top-0 mt-[10px] text-center'>
                            { layer.name }
                        </div>

                        { index != props.layers.length - 1 && (
                            <motion.div 
                                initial={{ opacity: 0.5, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1.2 }}
                                transition={{ duration: 1, delay: 1 + 1 * index, ease: 'easeInOut' }}
                                className={` absolute text-4xl xl:text-5xl 2xl:text-6xl z-30 right-[-20px] xl:right-[-30px] text-${ props.text_color } `}>
                                &#x2794;
                            </motion.div>
                        )}


                        { layer.nodes.map((node: string) => (
                            <div key={ node } className={`border-2 border-${ props.text_color } break-words overflow-hidden lg:my-[5px] 2xl:my-[10px] py-[10px] px-[10px] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] rounded-xl text-center `}>
                                { node }
                            </div>
                        ))}

                    </motion.div>
                ))}  
            </div>

            <div className={ `w-full bg-black rounded-3xl overflow-hidden text-${ props.text_color } lg:hidden grid grid-cols-1` }>
                { props.layers.map((layer: Layer, index: number) => (
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        key={ index } 
                        viewport={{ once: true }}
                        className={ `relative w-full min-h-[10vh] bg-opacity-50 flex flex-col justify-center py-[5vh] items-center bg-${ layer.color }`}
                    >
                        <div className='text-sm italic absolute top-0 mt-[10px] text-center'>
                            { layer.name }
                        </div>

                        { index != props.layers.length - 1 && (
                            <motion.div 
                                initial={{ opacity: 0.5, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1.2 }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                                viewport={{ once: true }}
                                className={` absolute text-4xl z-30 bottom-0 text-${ props.text_color } `}>
                                &#x21e3;
                            </motion.div>
                        )}


                        { layer.nodes.map((node: string) => (
                            <div key={ node } className={`border-2 border-${ props.text_color } break-words overflow-hidden py-[10px] px-[10px] w-[70%] my-[2vh] rounded-xl text-center `}>
                                { node }
                            </div>
                        ))}

                    </motion.div>
                ))}  
            </div>

        </>
    )
}

export default FlowDiagram