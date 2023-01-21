import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons";

function Navbar() {
	return (
		<div>
			<div>
				<Link href="/">
					<h1>Ayan</h1>
				</Link>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/#about">About</Link>
					</li>
					<li>
						<Link href="/projects">Projects</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>

				{/* Mobile Button */}
				<div>
					<AiOutlineMenu size={20} />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
