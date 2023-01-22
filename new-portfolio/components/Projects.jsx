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
import weatherApp from "../public/assets/Weather-App.png";

function Projects() {
	return (
		<div>
			<div>
				<main className="bg-gray-200 px-10">
					{/* <section className="min-h-screen"></section> */}

					<section className="mt-8"></section>

					<section>
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
												The Footworks is an e-commerce site dedicated to
												providing the latest, up-to-date quality shoes that are
												most sought after in the market!
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
					<section>
						<div>
							<h3 className="text-3xl py-1">Personal Projects</h3>
							<div className="text-center shadow-lg p-10 rounded-xl my-10">
								<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
									{/* <!--Project 1--> */}
									<div class="rounded overflow-hidden shadow-lg duration-200 ease-in-out transform hover:scale-110">
										<Image
											style={{ cursor: "pointer" }}
											onClick={() => {
												window.location.href =
													"https://github.com/ayaneey/FilmFlix";
											}}
											src={filmFlix}
											width={120}
											height={90}
											layout="responsive"
										/>
										<div class="px-6 py-4">
											<div class="font-bold text-xl mb-2">FilmFlix</div>
											<p class="text-gray-700 text-base">
												An app, built using the TMDB api where you can access
												all the latest trending movies daily or weekly! The app
												is designed to be user-friendly, making the experience
												for the user transparent and enduring.
											</p>
										</div>
										<div class="px-6 pt-4 pb-2">
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
												#React
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
												#JavaScript
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
												#Material-Ui
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
												#CSS
											</span>
										</div>
									</div>
									{/* <!--Project 2--> */}
									<div class="ml-8 rounded overflow-hidden shadow-lg duration-200 ease-in-out transform hover:scale-110">
										<Image
											style={{ cursor: "pointer" }}
											onClick={() => {
												window.location.href =
													"https://ayaneey.github.io/ayaneey-react-portfolio/";
											}}
											src={reactPortfolio1}
											width={120}
											height={90}
											layout="responsive"
										/>
										<div class="px-6 py-4">
											<div class="font-bold text-xl mb-2">The FootWorks</div>
											<p class="text-gray-700 text-base">
												A react single-page application portfolio encompassing a
												range of projects of deployed projects showcasing a
												breadth of skills.
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
									{/* <!--Project 3--> */}
									<div class="ml-8 rounded overflow-hidden shadow-lg duration-200 ease-in-out transform hover:scale-110">
										<Image
											style={{ cursor: "pointer" }}
											onClick={() => {
												window.location.href =
													"https://ayaneey.github.io/Scope-Weather/";
											}}
											src={weatherApp}
											width={120}
											height={90}
											layout="responsive"
										/>
										<div class="px-6 py-4">
											<div class="font-bold text-xl mb-2">Scope Weather</div>
											<p class="text-gray-700 text-base">
												Scope Weather app is a simplistic app that provides
												weather and weather forecast for 5 days in the week. It
												includes a search functionality. As such, they should be
												able get a glimpse of real-time updates on their desired
												location.
											</p>
										</div>
										<div class="px-6 pt-4 pb-2">
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
												#Javascript
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
												#Html
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
												#Bootstrap
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section></section>
				</main>
			</div>
		</div>
	);
}

export default Projects;
