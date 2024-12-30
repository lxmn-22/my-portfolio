import React from 'react'
import project_data from '../../assets/project_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import Card from './Card'

const Projects = () => {
  return (
    <div id="projects" className='flex flex-col items-center gap-12 mx-8'>
        <div className='relative'>
            <h1 className='px-0 py-3 text-5xl sm:text-7xl font-semibold border-b sm:mb-8'>My Projects</h1>
        </div>

        <div className='flex flex-wrap justify-between gap-6 px-4 sm:px-28 mb-4'>
            {project_data.map((project, index)=> {
                return <Card 
                    key={index}
                    imageUrl={project.p_img}
                    cardName={project.p_name}
                />    
            })}
        </div>

        <div className='flex gap-3 items-center rounded-full border-2 border-white text-base px-7 py-3 font-semibold transition-0.4s cursor-pointer hover:gap-9 hover:transition-0.6s'>
            <p>Show More</p>
            <img src={arrow_icon} alt="arrow-icon" />
        </div>
    </div>
  )
}

export default Projects