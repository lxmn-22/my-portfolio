import { useRef, useState, useEffect } from "react";
import code from "../../assets/code.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const sections = ["home", "about", "services", "projects", "contact"];

const Navbar = () => {
	const [menu, setMenu] = useState("home");
	const menuRef = useRef(null);

	const openMenu = () => {
		if (menuRef.current) {
			menuRef.current.style.right = "0";
		}
	};

	const closeMenu = () => {
		if (menuRef.current) {
			menuRef.current.style.right = "-350px";
		}
	};

	// Scroll Detection Logic:
	useEffect(() => {
		// function gets triggered whenever the user scrolls:
		const handleScroll = () => {
			let currentSection = "home";

			// detecting the scroll position:
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			// looping through sections:
			sections.forEach((section) => {
				// finds actual section in the DOM:
				const element = document.getElementById(section);

				if (element) {
					const { top, bottom } = element.getBoundingClientRect();
					const elementTop = window.scrollY + top;
					const elementBottom = window.scrollY + bottom;

					// check if section is in view:
					if (
						scrollPosition >= elementTop &&
						scrollPosition <= elementBottom
					) {
						currentSection = section;
					}
				}
			});
			// update active menu:
			setMenu(currentSection);
		};
		window.addEventListener("scroll", handleScroll);

		// cleaning up: removing event listener
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="flex sticky items-center justify-between top-2 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 my-6 sm:my-2 px-4 sm:px-6 md:px-8 lg:px-10">
			{/* Logo */}
			<img
				className="w-12 sm:w-14 rounded-full hover:animate-spin"
				src={code}
				alt="logo"
			/>

			{/* Menu Open Icon (Visible on Small Screens) */}
			<img
				className="w-8 block fixed right-6 sm:hidden"
				src={menu_open}
				onClick={openMenu}
				alt="menu-open"
			/>

			{/* Menu List */}
			<ul
				ref={menuRef}
				onClick={closeMenu}
				className="w-[350px] h-full sm:w-auto fixed sm:static sm:flex flex-col sm:flex-row z-[10] sm:z-0 transition-[right] sm:transition-none duration-500 right-[-350px] sm:right-0 items-start sm:items-center justify-start sm:justify-center top-0 gap-6 sm:gap-4 md:gap-6 my-2 pt-6 sm:pt-0 bg-black sm:bg-transparent list-none text-xl"
			>
				{/* Menu Close Icon (Visible on Small Screens) */}
				<img
					className="w-5 block sm:hidden absolute top-6 left-72"
					src={menu_close}
					alt="menu-close"
				/>

				{/* Menu Items */}
				{["home", "about", "services", "projects", "contact"].map(
					(item) => (
						<li
							key={item}
							className="flex-row pl-12 md:pl-2 pb-5 sm:pb-0 gap-5 text-2xl sm:text-lg md:text-xl sm:flex sm:flex-col sm:gap-1 cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
						>
							<AnchorLink
								className="text-white decoration-none"
								offset={50}
								href={`#${item}`}
							>
								<p onClick={() => setMenu(item)}>
									{item.charAt(0).toUpperCase() +
										item.slice(1)}
								</p>
							</AnchorLink>
							{menu === item && (
								<div className="w-20 sm:w-full flex border-b border-2 rounded border-white sm:border-primary"></div>
							)}
						</li>
					)
				)}
			</ul>

			{/* Connect Button (Hidden on Small Screens) */}
			<div className="hidden sm:inline px-5 py-3 rounded-3xl bg-primary text-lg sm:text-base cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300">
				<AnchorLink
					className="text-white decoration-none"
					offset={50}
					href="#contact"
				>
					Connect With Me
				</AnchorLink>
			</div>
		</section>
	);
};

export default Navbar;
