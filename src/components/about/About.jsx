import { useState } from "react";
import aboutMe from "../../assets/about-me.png";
import { Code, GraduationCap, Briefcase, Heart } from "lucide-react";

const About = () => {
	const [activeTab, setActiveTab] = useState("about");

	return (
		<section
			id="about"
			className="flex flex-col items-center gap-3 lg:gap-4 lg:py-12 mx-4 sm:mx-20 my-12 xl:my-20"
		>
			<div className="container mx-auto px-4 md:px-6 max-w-7xl">
				<div className="flex flex-col items-center text-center gap-4 mb-12">
					<h1 className="py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold border-b tracking-tight shadow-lg">
						About me
					</h1>
					<p className="text-gray-300 text-lg max-w-5xl mx-auto font-extralight tracking-wide">
						A passionate software developer with a fresh perspective
						and eagerness to learn and grow in the tech industry.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div className="relative w-full max-w-md mx-auto md:max-w-full">
						<div className="relative h-96 w-full overflow-hidden rounded">
							<img
								src={aboutMe}
								alt="Profile Image"
								className="object-cover w-full h-full"
							/>
						</div>
						<div className="absolute -bottom-10 -right-6 bg-primary text-white px-4 py-2 rounded shadow-lg text-sm md:text-base">
							<p className="font-semibold">02+ Years Learning</p>
							<p className="text-sm">Coding Experience</p>
						</div>
					</div>

					<div>
						{/* Custom Tabs */}
						<div className="w-full">
							{/* Tab Navigation */}
							<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
								{[
									{
										id: "about",
										icon: Code,
										color: "text-primary",
										label: "About",
									},
									{
										id: "education",
										icon: GraduationCap,
										color: "text-orange-400",
										label: "Education",
									},
									{
										id: "experience",
										icon: Briefcase,
										color: "text-green-600",
										label: "Experience",
									},
									{
										id: "interests",
										icon: Heart,
										color: "text-red-600",
										label: "Interests",
									},
								].map((tab) => (
									<button
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={`flex items-center gap-2 px-3 py-2 text-sm md:text-lg border-b-4 transition-all ${
											activeTab === tab.id
												? `${tab.color} border-current`
												: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
										}`}
									>
										<tab.icon
											className={`h-5 w-5 ${tab.color}`}
										/>
										<span className="hidden sm:inline">
											{tab.label}
										</span>
									</button>
								))}
							</div>

							{/* Tab Content */}
							{activeTab === "about" && (
								<div className="space-y-4">
									<h3 className="text-xl md:text-2xl font-bold tracking-wider">
										Who am I?
									</h3>
									<p className="text-justify text-gray-300 tracking-wide font-extralight">
										I&apos;m a fresh software developer with
										a strong foundation in modern web
										technologies. My journey in programming
										began during my college years, where I
										discovered my passion for creating
										elegant solutions to complex problems.
									</p>
									<p className="text-justify text-gray-300 tracking-wide font-extralight">
										I specialize in front-end development
										with React & Next.js, but also
										comfortable working with back-end
										technologies. I&apos;m a quick learner
										who thrives in collaborative
										environments & constantly seeks to
										expand my knowledge & skills.
									</p>
									<div className="grid grid-cols-2 gap-4 mt-6">
										<div className="p-4 rounded bg-gray-800 border border-gray-700 shadow-sm">
											<h4 className="font-medium mb-2">
												Frontend
											</h4>
											<p className="text-sm text-gray-300 font-extralight">
												React, Next.js, Tailwind,
												Recoil, Redux
											</p>
										</div>
										<div className="p-4 rounded bg-gray-800 border border-gray-700 shadow-sm">
											<h4 className="font-medium mb-2">
												Backend
											</h4>
											<p className="text-sm text-gray-300 font-extralight">
												Node.js, Express, MongoDB,
												Mongoose, PostgreSQL, Prisma
											</p>
										</div>
										<div className="p-4 rounded bg-gray-800 border border-gray-700 shadow-sm">
											<h4 className="font-medium mb-2">
												Tools
											</h4>
											<p className="text-sm text-gray-300 font-extralight">
												Git, Figma, Docker, Postman, VS
												Code
											</p>
										</div>
										<div className="p-4 rounded bg-gray-800 border border-gray-700 shadow-sm">
											<h4 className="font-medium mb-2">
												Languages
											</h4>
											<p className="text-sm text-gray-300 font-extralight">
												Java, Python, JavaScript,
												Typescript
											</p>
										</div>
									</div>
								</div>
							)}

							{activeTab === "education" && (
								<div className="space-y-6">
									<h3 className="text-xl md:text-2xl font-bold tracking-wider">
										My Education
									</h3>
									<div className="space-y-3">
										<div className="flex gap-4 p-3 rounded bg-gray-800 border border-gray-700 shadow-sm">
											<div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
												<GraduationCap className="h-6 w-6 text-white" />
											</div>
											<div>
												<h4 className="font-medium text-lg tracking-wider">
													Master of Computer
													Applications - MCA
												</h4>
												<p className="text-gray-300">
													Uttaranchal University,
													Present
												</p>
												<p className="text-justify mt-2 font-extralight">
													Coursework included Data
													Introduction to Data
													Science, Python Programming,
													Artificial Intelligence,
													Financial Accounting and
													Advanced Web Applications.
												</p>
											</div>
										</div>

										<div className="flex gap-4 p-3 rounded bg-gray-800 border border-gray-700 shadow-sm">
											<div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
												<GraduationCap className="h-6 w-6 text-white" />
											</div>
											<div>
												<h4 className="font-medium text-lg tracking-wide">
													Bachelor of Computer
													Applications - BCA
												</h4>
												<p className="text-gray-300">
													DIT University, 2021 - 24
												</p>
												<p className="text-justify mt-2 font-extralight">
													Coursework included Data
													Structures & Algorithms,
													COA, Computer Networks,
													Database Systems and
													Software Engineering.
												</p>
											</div>
										</div>

										<div className="flex gap-4 p-3 rounded bg-gray-800 border border-gray-700 shadow-sm">
											<div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
												<Code className="h-6 w-6 text-white" />
											</div>
											<div>
												<h4 className="font-medium text-lg tracking-wide">
													COHORT 3.0
												</h4>
												<p className="text-gray-300">
													Harkirat Singh - 100xDevs,
													2024
												</p>
												<p className="text-justify mt-2 font-extralight tracking-wide">
													Intensive 12-weeks(approx.)
													program focused on MERN
													Stack, Web3, DevOps
													including React, Node.js,
													Tailwind, Node.js, Express,
													Mongoose, MongoDB, Prisma,
													PostgreSQL, AWS, CI/CD and
													Docker.
												</p>
											</div>
										</div>
									</div>
								</div>
							)}

							{activeTab === "experience" && (
								<div className="space-y-6">
									<h3 className="text-xl md:text-2xl font-bold tracking-wider">
										My Experience
									</h3>
									<div className="space-y-3">
										<div className="flex gap-4 p-4 rounded bg-gray-800 border border-gray-700 shadow-sm">
											<div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
												<Briefcase className="h-6 w-6 bg-primary text-white" />
											</div>
											<div>
												<h4 className="font-medium text-lg tracking-wide">
													Web Development Intern
												</h4>
												<p className="text-xm text-gray-400 tracking-wide">
													Tech Solutions Inc., Summer
													2024
												</p>
												<p className="text-justify mt-2 font-extralight tracking-wide">
													Assisted in developing
													responsive web applications
													using React. Collaborated
													with senior developers to
													implement new features and
													fix bugs.
												</p>
											</div>
										</div>

										<div className="flex gap-4 p-4 rounded bg-gray-800 border border-gray-700 shadow-sm">
											<div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
												<Code className="h-6 w-6 bg-primary text-white" />
											</div>
											<div>
												<h4 className="font-medium text-lg tracking-wide">
													Software Engineering Lite
													Job Simulation
												</h4>
												<p className="text-xm text-gray-400 tracking-wide">
													JPMorgan Chase & Co. :
													Forage - July 2024
												</p>
												<p className="text-justify mt-2 font-extralight tracking-wide">
													Completed the process of
													completing an engineering
													ticket for a system in the
													credit-card rewards
													department of JPMorgan Chase
													& Co.
												</p>
											</div>
										</div>
									</div>
								</div>
							)}

							{activeTab === "interests" && (
								<div className="space-y-4">
									<h3 className="text-xl md:text-2xl font-bold tracking-wider">
										My Interests
									</h3>
									<p className="text-gray-300 tracking-wide">
										Beyond coding, I have a variety of
										interests that keep me balanced and
										inspired:
									</p>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
										<div className="bg-gray-800 p-4 rounded border border-gray-700 shadow-sm">
											<div className="flex items-start gap-3">
												<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="22"
														height="22"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="text-white"
													>
														<path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
														<circle
															cx="17"
															cy="7"
															r="5"
														/>
													</svg>
												</div>
												<div>
													<h4 className="font-medium tracking-wide mb-1">
														Open Source
													</h4>
													<p className="text-justify text-sm text-gray-300 tracking-wide font-light">
														Contributing to open
														source projects &
														learning from the
														community.
													</p>
												</div>
											</div>
										</div>
										<div className="bg-gray-800 p-4 rounded border border-gray-700 shadow-sm">
											<div className="flex items-start gap-3">
												<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="22"
														height="22"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="text-white"
													>
														<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
														<path d="M15 5.764v15" />
														<path d="M9 3.236v15" />
													</svg>
												</div>
												<div>
													<h4 className="font-medium tracking-wide mb-1">
														Travel
													</h4>
													<p className="text-sm text-justify text-gray-300 font-light tracking-wide">
														Exploring new places &
														experiencing different
														cultures.
													</p>
												</div>
											</div>
										</div>
										<div className="bg-gray-800 p-4 rounded border border-gray-700 shadow-sm">
											<div className="flex items-start gap-3">
												<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="22"
														height="22"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="text-white"
													>
														<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
														<circle
															cx="12"
															cy="13"
															r="3"
														/>
													</svg>
												</div>
												<div>
													<h4 className="font-medium tracking-wide mb-1">
														Photography
													</h4>
													<p className="text-sm text-justify text-gray-300 font-light tracking-wide">
														Capturing moments,
														improving my visual
														storytelling skills.
													</p>
												</div>
											</div>
										</div>
										<div className="bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700 shadow-sm">
											<div className="flex items-start gap-3">
												<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="22"
														height="22"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="text-white"
													>
														<path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" />
														<path d="M15 14a5 5 0 0 0-7.584 2" />
														<path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />
													</svg>
												</div>
												<div>
													<h4 className="font-medium tracking-wide mb-1">
														Fitness
													</h4>
													<p className="text-sm text-justify text-gray-300 font-light tracking-wide">
														Staying active through
														running, hiking &
														strength training.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
