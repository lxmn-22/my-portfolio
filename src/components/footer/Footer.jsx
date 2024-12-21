import React from 'react'
import code from '../../assets/code.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='flex flex-col mx-20 my-44 gap-8'>
        <div className='flex justify-between'>
            <div>
                <img className='w-16 rounded-full hover:animate-spin' src={code} alt="footer-logo" />
            </div>

            <div className='flex items-center gap-3'>
                <div className='flex gap-2 px-8 py-2 rounded-full bg-[#32323B] pr-9 hover:border-2 hover:border-white'>
                    <img src={user_icon} alt="user-icon" />
                    <input className='outline-none border-none bg-transparent text-[#a0a0a0] text-lg' type="email" placeholder='Enter your email' />
                </div>
                <div className='text-md px-6 py-2 rounded bg-primary cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'>Subscribe</div>
            </div>
        </div>
        <hr />
        <div className='flex justify-between text-lg'>
            <p>© 2024 Laxman Singh Koranga. All rights reserved.</p>

            <div className='flex gap-14 mb-12'>
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer