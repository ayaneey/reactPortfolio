import Image from "next/image";
import Link from "next/link";
import React from "react";
import filmFlix from "../public/assets/projects/FilmFlix.jpg";
import passwordGen from "../public/assets/projects/PasswordGenerator.jpeg";
import netflixImg from "../public/assets/projects/Netflix-Landing.jpg";
import weatherApp from "../public/assets/projects/ReactWeatherApp.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="uppercase text-xl tracking-widest text-[#7b41a0] font-bold">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="FilmFlix"
						backgroundImg={filmFlix}
						projectUrl="/filmflix"
						tech="React JS"
					/>
					<ProjectItem
						title="Password Generator"
						backgroundImg={passwordGen}
						projectUrl="/password"
						tech="Javascript"
					/>
					<ProjectItem
						title="Netflix App"
						backgroundImg={netflixImg}
						projectUrl="/netflix"
						tech="HTML CSS JS"
					/>
					<ProjectItem
						title="Foreseeit"
						backgroundImg={weatherApp}
						projectUrl="/weather"
						tech="React JS"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
