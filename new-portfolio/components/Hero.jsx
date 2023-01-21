import React from "react";

function Hero() {
	return (
		<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40" />
			{/* <div className="p-5 text-white z[2] [-10rem] mt-[-10rem]">
				<h2 className="text-5xl font-bold">Heading</h2>
				<h2 className="py-5 text-xl">Message</h2>
				<button className="px-8 py-2 border">Contact</button>
			</div> */}
		</div>
	);
}

export default Hero;
