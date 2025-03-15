import Services_Data from "../../assets/services_data";

const Services = () => {
	return (
		<section
			id="services"
			className="flex flex-col items-center gap-3 lg:gap-4 lg:py-12 mx-4 sm:mx-20 my-12 xl:my-20"
		>
			{/* Section Title */}
			<div className="">
				<h1 className="px-0 py-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold border-b">
					My Services
				</h1>
			</div>

			{/* Services Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mb-12 xl:mb-32 px-4 sm:px-14 ">
				{Services_Data.map((service, index) => (
					<div
						key={index}
						className="flex flex-col justify-center gap-6 px-6 py-8 sm:px-9 sm:py-9 rounded border-2 cursor-pointer hover:border-blue-400 hover:bg-gradient-to-r from-gray-800 transition-all duration-400 ease-in-out"
					>
						{/* Service Title */}
						<h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-700">
							{service.s_name}
						</h2>

						{/* Service Description */}
						<p className="text-[#d4d4d4] text-xl leading-7 max-w-96 text-justify">
							{service.s_desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
