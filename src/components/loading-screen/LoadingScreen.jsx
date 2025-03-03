import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ onComplete }) => {
	const [text, setText] = useState("");
	const fullText = "< Welcome />";

	// used for type-writer effect:
	useEffect(() => {
		let index = 0;
		const interval = setInterval(() => {
			setText(fullText.substring(0, index));
			index++;

			if (index > fullText.length) {
				clearInterval(interval);

				setTimeout(() => {
					onComplete();
				}, 1000);
			}
		}, 190);

		return () => clearInterval(interval);
	}, [onComplete]);

	return (
		<div className="fixed flex flex-col items-center justify-center inset-0 z-50 bg-black text-gray-100">
			{/* Text and Blinker */}
			<div className="mb-4 text-xl lg:text-5xl font-mono font-bold">
				{text} <span className="animate-blink ml-1"> | </span>
			</div>
			{/* Progress Bar */}
			<div className="w-[200px] h-[3px] bg-[#161513] rounded relative overflow-hidden">
				<div className="w-[40%] h-full bg-primary shadow-[0_0_15px_#3b82f6] animate-loading-bar">
					{" "}
				</div>
			</div>
		</div>
	);
};

export default LoadingScreen;
