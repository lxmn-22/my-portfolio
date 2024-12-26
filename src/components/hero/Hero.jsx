import React from 'react'
import profile_img from '../../assets/profile_pic.jpeg'
import linkedIn_icon from '../../assets/linkedin-box-fill.svg';
import github_icon from '../../assets/github-fill.svg';
import x_icon from '../../assets/twitter-x-fill.svg';

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-4 mb-12'>
        <img className='w-[330px] sm:w-96 mt-[60px] sm:mt-10 rounded-full hover:border-2 hover:boder-solid hover:border-gray-600 hover:animate-bounce duration-300 ease-linear transition-all' src={profile_img} alt="profile-image" />
        <h1 className='w-11/12 sm:w-3/4 mt-[24px] sm:mt-0 text-center text-[47px] sm:text-8xl font-semibold'><span className='bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-700'>I&apos;m Laxman Singh Koranga,</span><br />A Software Developer</h1>
        <p className='w-3/5 sm:w-1/2 text-center text-[19px] sm:text-2xl leading-[25px] sm:leading-10'>I&apos;m proficient in MERN Stack Developement.</p>

        <div className='flex flex-col sm:flex-row items-center gap-9 sm:gap-24 text-lg font-medium mt-5 sm:mt-3 mb-4'>
            <div className='flex gap-7 sm:gap-6'>
              <a href="https://www.linkedin.com/in/laxmankoranga03/" target='_blank' rel="noopener noreferrer">
                <img className='w-12 sm:w-10 h-11 sm:h-10 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-200' title="LinkedIn" src={linkedIn_icon} alt="linkedIn-icon" />
              </a>
              <a href="https://github.com/lxmn-22" target='_blank' rel="noopener noreferrer">
                <img className='w-12 sm:w-10 h-11 sm:h-10 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-200' title="Github" src={github_icon} alt="github-icon" />
              </a>
              <a href="https://x.com/lxmn22nov" target='_blank' rel="noopener noreferrer">
                <img className='w-12 sm:w-10 h-11 sm:h-10 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-200' title="X" src={x_icon} alt="x_icon" />
              </a>
            </div>
            <div className='px-12 sm:px-10 py-2 rounded-full border-solid border-2 border-white cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'>My Resume</div>
        </div>
    </div>
  )
}

export default Hero
