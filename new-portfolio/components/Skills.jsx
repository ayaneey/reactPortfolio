import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import MongoDB from "../public/assets/skills/MongoDB.png";
import RestAPI from "../public/assets/skills/RestAPI.png";

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="uppercase text-xl tracking-widest text-[#7b41a0] font-bold">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Html} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Css} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Javascript} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={ReactImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Tailwind} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={MongoDB} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>MongoDB</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Github} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Github</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={RestAPI} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Rest API</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
