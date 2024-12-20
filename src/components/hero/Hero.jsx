import React from 'react'
import profile_img from '../../assets/profile_pic.jpeg'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <img className='w-96 mt-20 rounded-full hover:border-2 hover:boder-solid hover:border-gray-600 transition-transform hover:animate-bounce duration-300 ease-linear transition-all' src={profile_img} alt="profile-image" />
        <h1 className='w-3/4 text-center text-8xl font-semibold'><span className='bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-700'>I&apos;m Laxman Singh Koranga,</span><br />A Software Developer.</h1>
        <p className='w-1/2text-center text-2xl leading-10'>I&apos;m proficient in MERN Stack Developement.</p>

        <div className='flex items-center gap-12 text-lg font-medium mb-20'>
            <div className='px-4 py-2 rounded bg-primary cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'>Connect with me</div>
            <div className='px-4 py-1 rounded border-solid border-2 border-white cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'>My Resume</div>
        </div>
    </div>
  )
}

export default Hero
