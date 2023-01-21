import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import ayan from "../public/assets/hi.png";
import project1 from "../public/assets/ZenFoci.png";
import project2 from "../public/assets/TheFootWorks.png";
import back from "../public/assets/back.png";
import filmFlix from "../public/assets/FilmFlix.png";
import reactPortfolio1 from "../public/assets/React-Portfolio1.png";

function About() {
	return (
		<div>
			<main className="bg-gray-200 px-10">
				<section className="min-h-screen">
					<nav className="py-10 mb-12 flex justify-between">
						<h1 className="text-xl font-burtons">Ayan Ahmed</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill className="cursor-pointer text-2xl" />
							</li>

							<li>
								<a
									className="bg-gradient-to-r from-gray-300 to-fuchsia-700 text-white px-4 py-2 rounded-md ml-8"
									href="#about"
								>
									About
								</a>
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-gray-300 to-fuchsia-700 text-white px-4 py-2 rounded-md ml-8"
									href="#"
								>
									Projects
								</a>
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-gray-300 to-fuchsia-700 text-white px-4 py-2 rounded-md ml-8"
									href="#"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-gray-300 to-fuchsia-700 text-white px-4 py-2 rounded-md ml-8"
									href="#"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className="text-center p-10 m-7 mb-54 ml-40">
						<div class="text-box">
							<div class="animated-text">
								<p class="text-5xl font-medium text-purple-200">I'M</p>
								<h1 class="text-6xl font-black">AYAN</h1>
								<h3 class="text-3xl font-medium text-purple-200">
									JUNIOR SOFTWARE ENGINEER
								</h3>
							</div>
						</div>
						<div className="relative mx-auto bg-gradient-to-b from-fuchsia-800 rounded-full w-80 h-80 mt-20 overflow-hidden mt-5 ml-50 ">
							<Image src={ayan} layout="fill" objectFit="cover" />
						</div>
					</div>
					<div class="flex justify-center">
						<div class="py-5 leading-8 mr-9 text-gray-800">
							<p className="text-xl text-center font-burtons ">
								A passionate Full-Stack Web Developer. Experience in building
								web applications with JavaScript, Bootstrap, React.js, Node.j
								and among a few other libraries and frameworks.
							</p>
						</div>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
						<AiFillTwitterCircle />
						<AiFillLinkedin />
						<AiFillGithub />
					</div>
					{/* <div className="relative mx-auto bg-gradient-to-b from-fuchsia-800 rounded-full w-80 h-80 mt-20 overflow-hidden">
						<Image src={ayan} layout="fill" objectFit="cover" />
					</div> */}
				</section>

				<section className="mt-8">
					<div>
						<h3 className="text-3xl py-1">About Me</h3>
						<p1 className="text-md py-2 leading-8 text-gray-800 rounded-md">
							I'm a web developer with a focus on the{" "}
							<span className="text-fuchsia-800">MERN stack</span>, but still
							continuously learning and exploring other technologies and
							frameworks. I have a background in teaching where I qualified 3
							years ago and have been teaching since. My background involves a
							lot of <span className="text-fuchsia-800">critical thinking</span>{" "}
							and <span className="text-fuchsia-800">problem solving</span>,
							which have been monumental for my coding journey. I recently
							graduated from the University of Birmingham Full-Stack coding
							bootcamp. I am passionate about coding and solving challenges and
							connecting with fellow programmers!
						</p1>
					</div>
				</section>

				<section>
					<section className="mt-8">
						<h3 className="text-3xl py-1"></h3>
						<div className="text-center shadow-lg p-10 rounded-xl my-10"></div>
					</section>
				</section>
			</main>
		</div>
	);
}

export default About;
