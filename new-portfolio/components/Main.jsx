import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
	return (
		<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center sm:bg-cover custom-img">
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40" />
			{/* <div className="p-5 text-white z[2] [-10rem] mt-[-10rem]">
			<h2 className="text-5xl font-bold">Heading</h2>
			<h2 className="py-5 text-xl">Message</h2>
			<button className="px-8 py-2 border">Contact</button>
		</div> */}
			<div className="text-center">
				<div class="text-box p-10 m-20 mt-30 ml-30">
					<div class="animated-text">
						<p class="text-8xl font-medium text-purple-200">I'M</p>
						<h1 class="text-9xl font-black">AYAN</h1>
						<h3 class="text-3xl font-medium text-purple-200">
							JUNIOR SOFTWARE ENGINEER
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
