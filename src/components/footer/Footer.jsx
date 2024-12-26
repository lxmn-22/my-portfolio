import React from 'react'
import code from '../../assets/code.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='flex flex-col mx-20 mt-28 sm:my-44 gap-8'>
        <div className='flex justify-between'>
            <div>
                <img className='w-12 sm:w-16 rounded-full hover:animate-spin' src={code} alt="footer-logo" />
            </div>

            <div className='flex items-center gap-2 sm:gap-3'>
                <div className='flex gap-2 px-5 sm:px-8 py-2 rounded-full bg-[#32323B] pr-1 sm:pr-9 hover:border-2 hover:border-white'>
                    <img src={user_icon} alt="user-icon" />
                    <input className='outline-none border-none bg-transparent text-[#a0a0a0] text-lg' type="email" placeholder='Enter your email' />
                </div>
                <div className='text-md px-6 py-2 rounded-full bg-primary cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'>Subscribe</div>
            </div>
        </div>
        <hr />
        <div className='flex items-center justify-center text-lg mb-12'>
            <p className=''>© 2024 Laxman Singh Koranga. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer