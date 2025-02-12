const About = () => {
	return (
		<div
			id="about"
			className="flex flex-col items-center justify-center gap-12 mx-4 sm:mx-20 my-4 sm:my-36 mb-24 sm:mb-32"
		>
			{/* Section Title */}
			<div className="relative">
				<h1 className="px-0 py-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold border-b">
					About me
				</h1>
			</div>

			{/* About Content */}
			<div className="flex flex-col sm:flex-row gap-8 w-full max-w-6xl">
				{/* About Description */}
				<div className="flex flex-col items-center gap-8 sm:py-4">
					<div className="flex flex-col gap-8 text-xl font-base text-justify">
						{[
							"I'm an experienced MERN Stack Developer with skilled in building robust and scalable web applications.",
							"Creative Designer, technical expertise to create visually appealing and user-friendly interfaces.",
							"Passionate about developing efficient solutions, staying updated with industry trends and delivering high-quality software.",
						].map((text, index) => (
							<p key={index}>
								<span className="text-3xl bg-clip-text bg-gradient-to-b from-white to-blue-700 text-transparent">
									👉🏼
								</span>{" "}
								{text}
							</p>
						))}
					</div>

					{/* Tech Stack Icons */}
					<div className="grid grid-cols-6 md:grid-cols-9 gap-12 sm:gap-18 py-4 sm:py-8">
						{[
							{
								title: "Java",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg",
							},
							{
								title: "Tailwind-CSS",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
							},
							{
								title: "ReactJS",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
							},
							{
								title: "JavaScript",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
							},
							{
								title: "TypeScript",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
							},
							{
								title: "NodeJS",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
							},
							{
								title: "NextJS",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
							},
							{
								title: "Redux",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
							},
							{
								title: "MongoDB",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
							},
							{
								title: "Mongoose",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg",
							},
							{
								title: "PostgreSQL",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg",
							},
							{
								title: "Git",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
							},
							{
								title: "NPM",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
							},
							{
								title: "Postman",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
							},
							{
								title: "Docker",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
							},
							{
								title: "VS Code",
								src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg",
							},
						].map((icon, index) => (
							<div
								key={index}
								className="hover:scale-150 transition-transform duration-200"
							>
								<img
									className="w-12 rounded-md"
									title={icon.title}
									src={icon.src}
									alt={icon.title}
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Statistics */}
			<div className="flex flex-wrap justify-center gap-12 sm:gap-28">
				{[
					{ value: "500+", label: "LEETCODE QUESTIONS SOLVED" },
					{ value: "05+", label: "PROJECTS COMPLETED" },
				].map((stat, index) => (
					<div
						key={index}
						className="flex flex-col items-center gap-2.5 hover:scale-110 transition-transform duration-300"
					>
						<h1 className="text-5xl font-bold bg-clip-text bg-secondary text-transparent bg-gradient-to-b from-white to-blue-700">
							{stat.value}
						</h1>
						<p className="text-xl font-medium">{stat.label}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default About;
