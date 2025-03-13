/* eslint-disable react/prop-types */
const Card = ({ image, cardName, link }) => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<div className="relative w-auto h-auto sm:w-[419px] sm:h-[280px] overflow-hidden rounded-lg shadow-lg group cursor-pointer hover:border-2 hover:border-slate-800">
				{/* Image */}
				<img
					src={image}
					alt={cardName}
					className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
				/>

				{/* Overlay */}
				<div className="absolute inset-x-0 bottom-0 h-1/4 bg-black bg-opacity-60 flex items-end justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
					<span className="text-white text-sm sm:text-2xl font-semibold mb-1 sm:mb-4">
						{cardName}
					</span>
				</div>
			</div>
		</a>
	);
};

export default Card;
