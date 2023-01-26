import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/new-pic.png";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#7b41a0] font-bold">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="text-md leading-8 text-gray-800">
						I'm a web developer with a focus on the{" "}
						<span className="text-fuchsia-800 font-bold">MERN stack</span>, but
						still continuously learning and exploring other technologies and
						frameworks. I have a background in teaching where I qualified 3
						years ago and have been teaching since. My background involves a lot
						of{" "}
						<span className="text-fuchsia-800 font-bold">
							critical thinking
						</span>{" "}
						and{" "}
						<span className="text-fuchsia-800 font-bold">problem solving</span>,
						which have been monumental for my coding journey. I recently
						graduated from the University of Birmingham Full-Stack coding
						bootcamp. I am passionate about coding and solving challenges and
						connecting with fellow programmers!
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some of my latest projects.
						</p>
					</Link>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={AboutImg} className="rounded-xl" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
