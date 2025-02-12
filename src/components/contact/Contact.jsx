import React from "react";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedIn_icon from "../../assets/linkedin-box-fill.svg";
import github_icon from "../../assets/github-fill.svg";
import x_icon from "../../assets/twitter-x-fill.svg";

const Contact = () => {
	const [result, setResult] = React.useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending...");
		const formData = new FormData(event.target);

		formData.append("access_key", import.meta.env.VITE_FORMS_ACCESS_KEY);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully.");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<div
			id="contact"
			className="flex flex-col items-start sm:items-center justify-center gap-[50px] sm:gap-12 mx-20 mt-24"
		>
			<div className="relative">
				<h1 className="px-0 py-3 text-5xl sm:text-7xl font-semibold border-b">
					Get in touch
				</h1>
			</div>

			<div className="flex">
				<div className="flex flex-col sm:flex-row sm:gap-48">
					<div className="flex flex-col gap-7 sm:px-8 py-4">
						<h1 className="text-6xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-700">
							Let&apos;s talk
						</h1>
						<p className="max-w-[550px] text-[#D8D8D8] text-justify text-l sm:text-xl leading-8">
							I&apos;m currently available to take on new
							projects, so feel free to send me a message about
							anything that you want me to work on. You can
							contact anytime.
						</p>

						<div className="flex flex-col gap-7 text-[#D8D8D8] text-xl">
							<div className="flex items-center gap-5">
								<img
									className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300"
									title="Email"
									src={mail_icon}
									alt="mail-icon"
								/>
								<p>laxmankoranga03@gmail.com</p>
							</div>
							<div className="flex items-center gap-5">
								<img
									className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300"
									title="Mobile Number"
									src={call_icon}
									alt="call-icon"
								/>
								<p>+91 9410996867</p>
							</div>
							<div className="flex items-center gap-5">
								<img
									className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300"
									title="Location"
									src={location_icon}
									alt="location-icon"
								/>
								<p>Uttarakhand, India</p>
							</div>
							<div className="flex items-center gap-28 text-lg font-medium mb-8">
								<div className="flex gap-4 mt-4">
									<a
										href="https://www.linkedin.com/in/laxmankoranga03/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="w-9 h-8 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300"
											title="LinkedIn"
											src={linkedIn_icon}
											alt="linkedIn-icon"
										/>
									</a>
									<a
										href="https://github.com/lxmn-22"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="w-9 h-8 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300"
											title="Github"
											src={github_icon}
											alt="github-icon"
										/>
									</a>
									<a
										href="https://x.com/lxmn22nov"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="w-9 h-8 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-150 duration-300"
											title="X"
											src={x_icon}
											alt="x_icon"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row mt-8">
						<form
							onSubmit={onSubmit}
							className="flex flex-col items-start gap-7"
						>
							<label
								className="text-[#D8D8D8] text-xl font-medium"
								htmlFor=""
							>
								Name
							</label>
							<input
								className="border-none w-[400px] h-[50px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] text-l"
								type="text"
								placeholder="Enter your name"
								name="name"
							/>
							<label
								className="text-[#D8D8D8] text-xl font-medium"
								htmlFor=""
							>
								Email
							</label>
							<input
								className="border-none w-[400px] h-[50px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] text-l"
								type="email"
								placeholder="Enter your email"
								name="email"
							/>
							<label
								className="text-[#D8D8D8] text-xl font-medium"
								htmlFor=""
							>
								Write your message here
							</label>
							<textarea
								className="border-none w-[400px] h-[170px] p-5 rounded bg-[#32323c] text-[#A0A0A0] text-l"
								name="message"
								rows="12"
								placeholder="Enter your message"
							></textarea>
							<button
								className="border-none text-white rounded-3xl bg-primary text-l px-5 py-3 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
								type="submit"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
