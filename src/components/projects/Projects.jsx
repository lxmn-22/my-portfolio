import project_data from "../../assets/project_data";
import Card from "./Card";

const Projects = () => {
	return (
		<section
			id="projects"
			className="flex flex-col items-center gap-3 lg:gap-4 lg:py-12 mx-4 sm:mx-20 my-12 xl:my-20"
		>
			{/* Title Section */}
			<div className="">
				<h1 className="px-0 py-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold border-b">
					My Projects
				</h1>
			</div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-4 sm:px-14 mb-12">
				{project_data.map((project, index) => (
					<Card
						key={index}
						image={project.p_img}
						cardName={project.p_name}
						link={project.p_link}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
