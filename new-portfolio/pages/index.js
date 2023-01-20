import { Main } from "next/document";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

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
						<h1 className="text-xl">Ayan Ahmed</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill className="cursor-pointer text-2xl" />
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-gray-300 to-slate-400 text-white px-4 py-2 rounded-md ml-8"
									href="#"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
				</section>
			</main>
		</div>
	);
}

export default index;
