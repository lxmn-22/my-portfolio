import React from 'react'
import profile_img from '../../assets/profile_pic.jpeg'

const About = () => {
  return (
    <div id="about" className='flex flex-col items-center justify-center gap-12 mx-20 my-4 sm:my-36 mb-24 sm:mb-32'>
        <div className='relative'>
            <h1 className='px-0 text-6xl sm:text-7xl font-semibold border-b sm:mb-2'>About me</h1>
        </div>

        <div className='flex gap-8'>
            {/* <div>
                <img className='hidden sm:inline-flex sm:w-[500px] mt-20 rounded-full border-2 boder-solid border-gray-600' title='Profile-Pic' src={profile_img} alt="profile-img" />
            </div> */}

            <div className='flex flex-col flex-wrap items-center gap-8 sm:py-4'>
                <div className='flex flex-col gap-8 text-xl font-base text-justify'>
                    <p><span className='text-3xl bg-clip-text bg-gradient-to-b from-white to-blue-700 text-transparent'>👉🏼</span> I&apos;m an experienced MERN Stack Developer with skilled in building robust and scalable web applications.</p>
                    <p><span className='text-3xl bg-clip-text bg-gradient-to-b from-white to-blue-700 text-transparent'>👉🏼</span> Creative Designer, technical expertise to create visually appealing and user-friendly interfaces.</p>
                    <p><span className='text-3xl bg-clip-text bg-gradient-to-b from-white to-blue-700 text-transparent'>👉🏼</span> Passionate about developing efficient solutions, staying updated with industry trends and delivering high-quality software.</p>
                </div>
                
                <div className='sm:w-8/12 flex flex-wrap gap-12 sm:gap-14 py-4 sm:py-8'>
                    <div className='hover:scale-150'>  
                        <img className='w-12 rounded-md' title='Java' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='Tailwind-CSS' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='ReactJS' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='JavaScript' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='TypeScript' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    </div>
                    <div className='hover:scale-150'>   
                        <img className='w-12 rounded-md' title='NodeJS' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='NextJS' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='Redux' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='MongoDB' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='Mongoose' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='PostgreSQL' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='Git' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='NPM' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='Postman' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='Docker' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" />
                    </div>
                    <div className='hover:scale-150'>
                        <img className='w-12 rounded-md' title='VS Code' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-wrap sm:flex justify-around gap-12 sm:gap-28'>
            <div className='flex flex-col items-center gap-2.5 hover:scale-110 transition-0.3s'>
                <h1 className='text-5xl font-bold bg-clip-text bg-secondary text-transparent bg-gradient-to-b from-white to-blue-700'>500+</h1>
                <p className='text-xl font-medium'>LEETCODE QUESTIONS SOLVED</p>
            </div>
            
            <div className='flex flex-col items-center gap-2.5 hover:scale-110 transition-0.3s'>
                <h1 className='text-5xl font-bold bg-clip-text bg-secondary text-transparent bg-gradient-to-b from-white to-blue-700'>05+</h1>
                <p className='text-xl font-medium'>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About