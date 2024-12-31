import React from 'react'

const Card = ({ imageUrl, cardName }) => {
  return (
    <div className="relative w-[150px] h-[100px] sm:w-[419px] sm:h-[280px] overflow-hidden rounded-lg shadow-lg group cursor-pointer hover:border-2 hover:border-slate-800">
      {/* Image */}
      <img
        src={imageUrl}
        alt={cardName}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black bg-opacity-60 flex items-end justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-white text-sm sm:text-2xl font-semibold mb-1 sm:mb-4">{cardName}</span>
      </div>
    </div>
  )
}

export default Card