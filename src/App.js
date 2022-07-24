import React from "react";
import Project from "./Review";
// import { FaGithubSquare } from "react-icons/fa";
function App() {
	return (
		<main>
			<section className="container">
				<div className="title">
					<h2>My Projects</h2>
					<div className="underline"></div>
				</div>
				<Project />
			</section>
		</main>
	);
}

export default App;
