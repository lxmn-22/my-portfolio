import React from 'react'
import project_data from '../../assets/project_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id="projects" className='flex flex-col items-center justify-center gap-12'>
        <div className='relative'>
            <h1 className='px-0 py-3 text-7xl font-semibold border-b'>My Projects</h1>
        </div>

        <div className='grid grid-cols-3 gap-7'>
            {project_data.map((project, index)=> {
                return <img className='box-border w-[419px] h-[280px] transition-0.3s cursor-pointer hover:rounded-xl hover:border-2 hover:border-white transition-0.4s hover:scale-110' key={index} src={project.p_img} alt="project-image" />
            })}
        </div>

        <div className='flex gap-3 items-center rounded-full border-2 border-white text-base px-5 py-3 font-semibold mb-20 transition-0.4s cursor-pointer hover:gap-9 hover:transition-0.6s'>
            <p>Show More</p>
            <img src={arrow_icon} alt="arrow-icon" />
        </div>
    </div>
  )
}

export default Projects