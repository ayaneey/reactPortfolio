import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Ayan Ahmed | Full-Stack Developer</title>
				<link
					rel="icon"
					type="image/x-icon"
					href="/assets/ayan-favicon.png"
				></link>
				<meta
					name="description"
					content="I’m a full-stack developer specialising in building web applications."
				/>
			</Head>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
