import React from 'react'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedIn_icon from '../../assets/linkedin-box-fill.svg';
import github_icon from '../../assets/github-fill.svg';
import x_icon from '../../assets/twitter-x-fill.svg';

const Contact = () => {
  return (
    <div id="contact" className='flex flex-col items-center justify-center gap-12 mx-20 my-36'>
        <div className='relative'>
            <h1 className='px-0 py-3 text-7xl font-semibold border-b'>Get in touch</h1>
        </div>

        <div className='flex gap-40'>
            <div className='flex flex-col gap-7'>
                <h1 className='text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-700'>Let&apos;s talk</h1>
                <p className='max-w-[550px] text-[#D8D8D8] text-xl leading-8'>I&apos;m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>

                <div className='flex flex-col gap-7 text-[#D8D8D8] text-xl'>
                    <div className='flex items-center gap-5'>
                        <img className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300' src={mail_icon} alt="mail-icon" /><p>laxmankoranga03@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300' src={call_icon} alt="call-icon" /><p>+91 9410996867</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300' src={location_icon} alt="location-icon" /><p>Uttarakhand, India</p>
                    </div>
                    <div className='flex items-center gap-28 text-lg font-medium mb-20'>
                    <div className='flex gap-4 mt-4'>
                        <a href="https://www.linkedin.com/in/laxmankoranga03/" target='_blank' rel="noopener noreferrer">
                            <img className='w-9 h-8 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300' src={linkedIn_icon} alt="linkedIn-icon" />
                        </a>
                        <a href="https://github.com/lxmn-22" target='_blank' rel="noopener noreferrer">
                            <img className='w-9 h-8 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300' src={github_icon} alt="github-icon" />
                        </a>
                        <a href="https://x.com/lxmn22nov" target='_blank' rel="noopener noreferrer">
                            <img className='w-9 h-8 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300' src={x_icon} alt="x_icon" />
                        </a>
                    </div>
                    </div>
                </div>
            </div>

            <form className='flex flex-col items-start gap-7'>
                <label className='text-[#D8D8D8] text-xl font-medium' htmlFor="">Name</label>
                <input className='border-none w-[400px] h-[50px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] text-l' type="text" placeholder='Enter your name' name='name' />
                <label className='text-[#D8D8D8] text-xl font-medium' htmlFor="">Email</label>
                <input className='border-none w-[400px] h-[50px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] text-l' type="email" placeholder='Enter your email' name='email' />
                <label className='text-[#D8D8D8] text-xl font-medium' htmlFor="">Write your message here</label>
                <textarea className='border-none w-[400px] h-[170px] p-5 rounded bg-[#32323c] text-[#A0A0A0] text-l' name="message" rows="12" placeholder='Enter your message'></textarea>
                <button className='border-none text-white rounded-3xl bg-primary text-md px-6 py-2 mb-12 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300' type=''>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact