import React from 'react'
import profile_img from '../../assets/profile_pic.jpeg'

const About = () => {
  return (
    <div id="about" className='flex flex-col items-center justify-center gap-12 mx-20 my-36'>
        <div className='relative'>
            <h1 className='px-0 py-3 text-7xl font-semibold border-b'>About me</h1>
        </div>

        <div className='flex gap-8'>
            <div>
                <img className='w-80 mt-20 rounded-full border-2 boder-solid border-gray-600' src={profile_img} alt="profile-img" />
            </div>

            <div className='flex flex-col items-center gap-20'>
                <div className='flex flex-col gap-5 text-xl font-base'>
                    <p><span className='bg-clip-text bg-gradient-to-b from-white to-blue-700 text-transparent'>👉🏼</span> I&apos;m an experienced MERN Stack Developer with skilled in building robust and scalable web applications.</p>
                    <p><span className='bg-clip-text bg-gradient-to-b from-white to-blue-700 text-transparent'>👉🏼</span> Creative Designer, technical expertise to create visually appealing and user-friendly interfaces.</p>
                    <p><span className='bg-clip-text bg-gradient-to-b from-white to-blue-700 text-transparent'>👉🏼</span> Passionate about developing efficient solutions, staying updated with industry trends and delivering high-quality software.</p>
                </div>

                <div className='flex gap-20'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-14 mb-6'>
                            <div className='hover:scale-150'>  
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                            </div>
                            <div className='hover:scale-150'>   
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                            </div>
                        </div>

                        <div className='flex flex-row gap-14 mb-6'>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" />
                            </div>
                            <div className='hover:scale-150'>
                                <img className='w-12 rounded-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex w-1/2 justify-around mb-20'>
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