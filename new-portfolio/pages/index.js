import { Main } from "next/document";
import Head from "next/head";
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

function index() {
	return (
		<div>
			<Head>
				<title>Ayan Ahmed Portfolio</title>
				<meta name="description" content="Generated by cre" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-white px-10">
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
									href="#"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className="text-center p-10">
						<h2 className="text-5xl py-2 text-fuchsia-800 font-medium">
							Ayan Ahmed
						</h2>
						<h3 className="text-2xl py-2">Junior Software Engineer</h3>
						<p className="text-md py-5 leading-8 text-gray-800">
							A passionate Full-Stack Web Developer. Experience in building web
							applications with JavaScript, Bootstrap, React.js, Node.j and
							among a few other libraries and frameworks.
						</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
						<AiFillTwitterCircle />
						<AiFillLinkedin />
						<AiFillGithub />
					</div>
					<div className="relative mx-auto bg-gradient-to-b from-fuchsia-800 rounded-full w-80 h-80 mt-20 overflow-hidden">
						<Image src={ayan} layout="fill" objectFit="cover" />
					</div>
				</section>

				<section>
					<section className="mt-8">
						<div>
							<h3 className="text-3xl py-1">About Me</h3>
							<p1 className="text-md py-2 leading-8 text-gray-800">
								I'm a web developer with a focus on the{" "}
								<span className="text-fuchsia-800">MERN stack</span>, but still
								continuously learning and exploring other technologies and
								frameworks. I have a background in teaching where I qualified 3
								years ago and have been teaching since. My background involves a
								lot of{" "}
								<span className="text-fuchsia-800">critical thinking</span> and{" "}
								<span className="text-fuchsia-800">problem solving</span>, which
								have been monumental for my coding journey. I recently graduated
								from the University of Birmingham Full-Stack coding bootcamp. I
								am passionate about coding and solving challenges and connecting
								with fellow programmers!
							</p1>
						</div>
					</section>
					<section className="mt-8">
						<h3 className="text-3xl py-1">Group Projects</h3>
						<div className="text-center shadow-lg p-10 rounded-xl my-10">
							<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
								{/* <!--Card 1--> */}
								<div class="rounded overflow-hidden shadow-lg duration-200 ease-in-out transform hover:scale-110">
									<Image
										style={{ cursor: "pointer" }}
										onClick={() => {
											window.location.href =
												"https://theinfamousgrim.github.io/ZenFoci-Lifestyle-App/";
										}}
										src={project1}
										width={50}
										height={50}
										layout="responsive"
									/>
									<div class="px-6 py-4">
										<div class="font-bold text-xl mb-2">ZenFoci</div>
										<p class="text-gray-700 text-base">
											An app, where you can manage meals, groceries, goals and
											healthy habits that you wish to cement in your schedule.
										</p>
									</div>
									<div class="px-6 pt-4 pb-2">
										<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											#HTML
										</span>
										<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											#JavaScript
										</span>
										<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											#Materialize
										</span>
									</div>
								</div>
								{/* <!--Card 2--> */}
								<div class="ml-8 rounded overflow-hidden shadow-lg duration-200 ease-in-out transform hover:scale-110">
									<Image
										style={{ cursor: "pointer" }}
										onClick={() => {
											window.location.href =
												"https://stark-beach-48560.herokuapp.com/";
										}}
										src={project2}
										width={50}
										height={50}
										layout="responsive"
									/>
									<div class="px-6 py-4">
										<div class="font-bold text-xl mb-2">The FootWorks</div>
										<p class="text-gray-700 text-base">
											The Footworks is an e-commerce site dedicated to providing
											the latest, up-to-date quality shoes that are most sought
											after in the market!
										</p>
									</div>
									<div class="px-6 pt-4 pb-2">
										<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											#Javascript
										</span>
										<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											#Node.js
										</span>
										<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											#MySQL
										</span>
										<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											#Bootstrap
										</span>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
			</main>
		</div>
	);
}

export default index;