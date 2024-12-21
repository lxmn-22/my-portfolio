import React, { useState } from 'react'
import code from '../../assets/code.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='flex items-center justify-between mx-44 my-6'>
        <img className='w-9 rounded-full hover:animate-spin' src={code} alt="logo" />

        <ul className='flex items-center list-none gap-12 text-xl'>
            <li className='flex flex-col gap-1 cursor-pointer'><AnchorLink className='text-white decoration-none' offset={50} href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <div className='flex border-b border-4 rounded border-primary'></div> : <></>}</li>
            <li className='flex flex-col gap-1 cursor-pointer'><AnchorLink className='text-white decoration-none' offset={50} href='#about'><p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <div className='flex border-b border-4 rounded border-primary'></div> : <></>}</li>
            <li className='flex flex-col gap-1 cursor-pointer'><AnchorLink className='text-white decoration-none' offset={50} href='#services'><p onClick={()=> setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <div className='flex border-b border-4 rounded border-primary'></div> : <></>}</li>
            <li className='flex flex-col gap-1 cursor-pointer'><AnchorLink className='text-white decoration-none' offset={50} href='#projects'><p onClick={()=> setMenu("projects")}>My Projects</p></AnchorLink>{menu === "projects" ? <div className='flex border-b border-4 rounded border-primary'></div> : <></>}</li>
            <li className='flex flex-col gap-1 cursor-pointer'><AnchorLink className='text-white decoration-none' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <div className='flex border-b border-4 rounded border-primary'></div> : <></>}</li>
        </ul>

        <div className='px-4 py-2 rounded bg-primary text-l cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'>
          <AnchorLink className='text-white decoration-none' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
            
        </div>
    </div>
  )
}

export default Navbar