import React from 'react'
import profile_img from '../../assets/profile_pic.jpeg'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12 mx-20 my-36'>
        <div className='relative'>
            <h1 className='px-0 py-3 text-7xl font-semibold border-b'>About me</h1>
        </div>

        <div className='flex gap-8'>
            <div>
                <img className='w-80 mt-20 rounded-full border-2 boder-solid border-gray-600' src={profile_img} alt="profile-img" />
            </div>

            <div className='flex flex-col gap-20'>
                <div className='flex flex-col gap-5 text-xl font-base'>
                    <p><span className='bg-clip-text bg-gradient-to-b from-white to-blue-700 text-transparent'>👉🏼</span> I&apos;m an experienced MERN Stack Developer with skilled in building robust and scalable web applications.</p>
                    <p><span className='bg-clip-text bg-gradient-to-b from-white to-blue-700 text-transparent'>👉🏼</span> Creative Designer, technical expertise to create visually appealing and user-friendly interfaces.</p>
                    <p><span className='bg-clip-text bg-gradient-to-b from-white to-blue-700 text-transparent'>👉🏼</span> Passionate about developing efficient solutions, staying updated with industry trends and delivering high-quality software.</p>
                </div>

                <div className='flex gap-28'>
                    <div className='flex flex-col gap-3'>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-tailwind text-transparent hover:scale-110 hover:border hover:border-tailwind hover:rounded hover:px-2'>Tailwind-CSS</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-react text-transparent hover:scale-110 hover:border hover:border-react hover:rounded hover:px-2'>ReactJS</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-js text-transparent hover:scale-110 hover:border hover:border-js hover:rounded hover:px-2'>JavaScript</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-ts text-transparent hover:scale-110 hover:border hover:border-ts hover:rounded hover:px-2'>TypeScript</p></div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-node text-transparent hover:scale-110 hover:border hover:border-node hover:rounded hover:px-2'>ExpressJS</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-node text-transparent hover:scale-110 hover:border hover:border-node hover:rounded hover:px-2'>NodeJS</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-white text-transparent hover:scale-110 hover:border hover:border-white hover:rounded hover:px-2'>NextJS</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-redux text-transparent hover:scale-110 hover:border hover:border-redux hover:rounded hover:px-2'>Redux</p></div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-mongo text-transparent hover:scale-110 hover:border hover:border-mongo hover:rounded hover:px-2'>MongoDB</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-mongoose text-transparent hover:scale-110 hover:border hover:border-mongoose hover:rounded hover:px-2'>Mongoose</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-postgreSQL text-transparent hover:scale-110 hover:border hover:border-postgreSQL hover:rounded hover:px-2'>PostgreSQL</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-git text-transparent hover:scale-110 hover:border hover:border-git hover:rounded hover:px-2'>Git & Github</p></div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-git text-transparent hover:scale-110 hover:border hover:border-git hover:rounded hover:px-2'>NPM</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-git text-transparent hover:scale-110 hover:border hover:border-git hover:rounded hover:px-2'>Postman</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-tailwind text-transparent hover:scale-110 hover:border hover:border-tailwind hover:rounded hover:px-2'>Docker</p></div>
                        <div><p className='min-w-48 text-2xl font-medium bg-clip-text bg-white hover:bg-tailwind text-transparent hover:scale-110 hover:border hover:border-tailwind hover:rounded hover:px-2'>VS Code</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex w-1/2 justify-around mb-20'>
            <div className='flex flex-col items-center gap-2.5 hover:scale-110 transition-0.3s'>
                <h1 className='text-5xl font-bold bg-clip-text bg-secondary text-transparent bg-gradient-to-b from-white to-blue-700'>500+</h1>
                <p className='text-xl font-medium'>LEETCODE QUESTIONS</p>
            </div>
            
            <div className='flex flex-col items-center gap-2.5 hover:scale-110 transition-0.3s'>
                <h1 className='text-5xl font-bold bg-clip-text bg-secondary text-transparent bg-gradient-to-b from-white to-blue-700'>5+</h1>
                <p className='text-xl font-medium'>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About