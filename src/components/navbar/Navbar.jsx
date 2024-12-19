import React from 'react'
import code from '../../assets/code.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-44 my-6'>
        <img className='w-9 rounded-full hover:animate-spin' src={code} alt="logo" />

        <ul className='flex items-center list-none gap-12 text-xl'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>

        <div className='px-4 py-2 rounded bg-primary text-l cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'>
            Connect With Me
        </div>
    </div>
  )
}

export default Navbar