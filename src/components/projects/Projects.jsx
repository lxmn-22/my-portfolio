import project_data from "../../assets/project_data";
import Card from "./Card";

const Projects = () => {
	return (
		<div id="projects" className="flex flex-col items-center gap-12 mx-8">
			{/* Title Section */}
			<div className="relative">
				<h1 className="px-0 py-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold border-b">
					My Projects
				</h1>
			</div>

			{/* Projects Grid */}
			<div className="grid grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10 px-4 sm:px-14 mb-12">
				{project_data.map((project, index) => (
					<Card
						key={index}
						imageUrl={project.p_img}
						cardName={project.p_name}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
