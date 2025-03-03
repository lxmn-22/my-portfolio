import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import LoadingScreen from "./components/loading-screen/LoadingScreen";
import { useState } from "react";

const App = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div>
			{!isLoaded && (
				<LoadingScreen onComplete={() => setIsLoaded(true)} />
			)}
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
