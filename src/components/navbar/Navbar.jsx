import React, { useRef, useState } from 'react'
import code from '../../assets/code.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='flex static items-center justify-between sm:sticky -top-4 mx-16 my-6 sm:mx-24 sm:my-2 sm:px-4'>
        <img className='w-12 sm:w-14 rounded-full hover:animate-spin' src={code} alt="logo" />
        <img className='w-8 block fixed right-12 sm:hidden' src={menu_open} onClick={openMenu} alt="menu-open" />
        
        <ul ref={menuRef} onClick={closeMenu} className='w-[350px] h-full sm:w-10/12 fixed sm:static sm:flex flex-col sm:flex-row z-[10] sm:z-0 transition-[right] sm:transition-none duration-500 right-[-350px] items-start justify-start sm:justify-center top-0 gap-6 sm:gap-2 my-2 pt-6 bg-black sm:bg-transparent list-none sm:text-xl'>
            <img className='w-5 block sm:hidden relative top-0 left-72' src={menu_close} alt="menu-close" />
            <li className='flex-row pl-12 pb-5 gap-5 text-2xl sm:flex sm:flex-col sm:gap-1 cursor-pointer'><AnchorLink className='text-white decoration-none' offset={50} href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <div className='w-20 sm:w-full flex border-b border-2 rounded border-white sm:border-primary'></div> : <></>}</li>
            <li className='flex-row pl-12 pb-5 gap-5 text-2xl sm:flex sm:flex-col sm:gap-1 cursor-pointer'><AnchorLink className='text-white decoration-none' offset={50} href='#about'><p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <div className='w-28 sm:w-full flex border-b border-2 rounded border-white sm:border-primary'></div> : <></>}</li>
            <li className='flex-row pl-12 pb-5 gap-5 text-2xl sm:flex sm:flex-col sm:gap-1 cursor-pointer'><AnchorLink className='text-white decoration-none' offset={50} href='#services'><p onClick={()=> setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <div className='w-24 sm:w-full flex border-b border-2 rounded border-white sm:border-primary'></div> : <></>}</li>
            <li className='flex-row pl-12 pb-5 gap-5 text-2xl sm:flex sm:flex-col sm:gap-1 cursor-pointer'><AnchorLink className='text-white decoration-none' offset={50} href='#projects'><p onClick={()=> setMenu("projects")}>My Projects</p></AnchorLink>{menu === "projects" ? <div className='w-32 sm:w-full flex border-b border-2 rounded border-white sm:border-primary'></div> : <></>}</li>
            <li className='flex-row pl-12 pb-5 gap-5 text-2xl sm:flex sm:flex-col sm:gap-1 cursor-pointer'><AnchorLink className='text-white decoration-none' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <div className='w-24 sm:w-full flex border-b border-2 rounded border-white sm:border-primary'></div> : <></>}</li>
        </ul>

        <div className='hidden sm:inline px-5 py-3 rounded-3xl bg-primary text-l cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'>
          <AnchorLink className='text-white decoration-none' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>
    </div>
  )
}

export default Navbar