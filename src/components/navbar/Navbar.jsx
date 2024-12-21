import React, { useState } from 'react'
import code from '../../assets/code.png'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='flex items-center justify-between mx-44 my-6'>
        <img className='w-9 rounded-full hover:animate-spin' src={code} alt="logo" />

        <ul className='flex items-center list-none gap-12 text-xl'>
            <li className='flex flex-col gap-1 cursor-pointer'><p onClick={()=> setMenu("home")}>Home</p>{menu === "home" ? <div className='flex border-b border-4 rounded border-primary'></div> : <></>}</li>
            <li className='flex flex-col gap-1 cursor-pointer'><p onClick={()=> setMenu("about")}>About Me</p>{menu === "about" ? <div className='flex border-b border-4 rounded border-primary'></div> : <></>}</li>
            <li className='flex flex-col gap-1 cursor-pointer'><p onClick={()=> setMenu("services")}>Services</p>{menu === "services" ? <div className='flex border-b border-4 rounded border-primary'></div> : <></>}</li>
            <li className='flex flex-col gap-1 cursor-pointer'><p onClick={()=> setMenu("projects")}>My Projects</p>{menu === "projects" ? <div className='flex border-b border-4 rounded border-primary'></div> : <></>}</li>
            <li className='flex flex-col gap-1 cursor-pointer'><p onClick={()=> setMenu("contact")}>Contact</p>{menu === "contact" ? <div className='flex border-b border-4 rounded border-primary'></div> : <></>}</li>
        </ul>

        <div className='px-4 py-2 rounded bg-primary text-l cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'>
            Connect With Me
        </div>
    </div>
  )
}

export default Navbar