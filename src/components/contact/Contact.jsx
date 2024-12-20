import React from 'react'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12 mx-20 my-36'>
        <div className='relative'>
            <h1 className='px-0 py-3 text-7xl font-semibold border-b'>Get in touch</h1>
        </div>

        <div className='flex gap-40'>
            <div className='flex flex-col gap-7'>
                <h1 className='text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-700'>Let&apos;s talk</h1>
                <p className='max-w-[550px] text-[#D8D8D8] text-xl leading-8'>I&apos;m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>

                <div className='flex flex-col gap-7 text-[#D8D8D8] text-xl'>
                    <div className='flex items-center gap-5'>
                        <img src={mail_icon} alt="mail-icon" /><p>laxmankoranga03@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={call_icon} alt="call-icon" /><p>+91 9410996867</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={location_icon} alt="location-icon" /><p>Uttarakhand, India</p>
                    </div>
                </div>
            </div>

            <form className='flex flex-col items-start gap-7'>
                <label className='text-[#D8D8D8] text-xl font-medium' htmlFor="">Your Name</label>
                <input className='border-none w-[400px] h-[50px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] text-l' type="text" placeholder='Enter your name' name='name' />
                <label className='text-[#D8D8D8] text-xl font-medium' htmlFor="">Your Email</label>
                <input className='border-none w-[400px] h-[50px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] text-l' type="email" placeholder='Enter your email' name='email' />
                <label className='text-[#D8D8D8] text-xl font-medium' htmlFor="">Write your message here</label>
                <textarea className='border-none w-[400px] h-[170px] p-5 rounded bg-[#32323c] text-[#A0A0A0] text-l' name="message" rows="12" placeholder='Enter your message'></textarea>
                <button className='border-none text-white rounded bg-primary text-base px-6 py-1 mb-12 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300' type=''>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact