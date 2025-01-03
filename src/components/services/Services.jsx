import React from 'react'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id="services" className='flex flex-col items-center justify-center gap-12 mx-20 my-12'>
        <div className='relative'>
            <h1 className='px-0 py-3 text-5xl sm:text-7xl font-semibold border-b sm:mb-8'>My Services</h1>
        </div>

        <div className='flex flex-wrap gap-4 sm:gap-10 mb-12 px-14'>
            {Services_Data.map((service, index)=> {
                return <div className='flex flex-col justify-center gap-6 px-9 py-9 rounded-xl border-2 cursor-pointer hover:border-2 hover:bg-gradient-to-r from-gray-800 hover:border-blue-400 transition-0.4s' key={index}>
                    {/* <h3 className='text-3xl font-semibold'>{service.s_no}</h3> */}
                    <h2 className='text-4xl font-extrabold bg-clip-text bg-secondary text-transparent bg-gradient-to-b from-white to-blue-700'>{service.s_name}</h2>
                    <p className='text-[#d4d4d4] text-xl leading-7 max-w-96 text-justify'>{service.s_desc}</p>
                    <div className='flex gap-4 items-center mt-4'>
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow-icon" />
                    </div>
                </div>
                })
            }
        </div>
    </div>
  )
}

export default Services