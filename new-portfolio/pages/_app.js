import "../styles/globals.css";
import "./index.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Hero />
			<Navbar />
			<About />
			<Projects />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
