import React from 'react'

import { motion } from 'framer-motion';
import { useOutsideHookBool } from './UseOutside';

type Props = {
    contactOpen: boolean,
    setContactOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ContactForm = (props: Props) => {
    const panelRef = React.useRef(null);
    useOutsideHookBool(panelRef, props.setContactOpen, false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (e.currentTarget.checkValidity()) {
            const formData = {
                name: e.currentTarget.myname.value,
                organization: e.currentTarget.organization.value,
                email: e.currentTarget.email.value,
                message: e.currentTarget.message.value,
            }

            console.log(formData)
        }
    }

    return (
        <div className=' h-screen w-screen fixed flex items-center justify-center z-[49] backdrop-blur-md bg-black bg-opacity-50'>
            <div ref={ panelRef } className=' w-[40vw] h-fit bg-white rounded-xl p-12 font-mukta-mahee text-3xl flex flex-col justify-start items-start text-black font-thin'>
                <h1 className=' text-primary-dull font-bold'> Contact Us </h1>

                <form className='w-full flex-flex-col text-xl mt-[2vh]' onSubmit={handleSubmit}>
                    <div className='flex items-center justify-between mb-[1vh]'>
                        <div className='py-2 mr-[1vw] font-semibold'> Name </div>
                        <input 
                            type="text" 
                            id="myname" 
                            name="myname"
                            placeholder='name' 
                            required
                            className='p-2 w-[60%] text-base rounded-md border-spacing-7 border border-primary-dull-see-thru'
                        />
                    </div>

                    <div className='flex items-center justify-between mb-[1vh]'>
                        <div className='py-2 mr-[1vw] font-semibold'> Organization </div>
                        <input 
                            type="text" 
                            id="organization" 
                            name="organization"
                            placeholder='organization'
                            required 
                            className='w-[60%] text-base p-2 rounded-md border border-primary-dull-see-thru'
                        />
                    </div>

                    <div className='flex items-center justify-between mb-[1vh]'>
                        <div className='py-2 mr-[1vw] font-semibold'> Email </div>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder='email' 
                            required
                            className='w-[60%] text-base p-2 rounded-md border border-primary-dull-see-thru' 
                        />
                    </div>

                    <div className='flex items-start justify-between mb-[5vh]'>
                        <div className='py-2 mr-[1vw] font-semibold'> Message </div>
                        <textarea 
                            id="message"
                            name="message"
                            placeholder='message' 
                            className='w-[60%] h-[200px] text-base p-2 rounded-md border border-primary-dull-see-thru resize-none' 
                        />
                    </div>

                    <motion.button 
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-full h-[6vh] rounded-xl bg-primary text-white font-bold flex justify-center items-center select-none'>
                        <div>
                            Send Message
                        </div>
                    </motion.button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm