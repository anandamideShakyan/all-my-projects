import React, { useState } from "react";
import projects from "./data";
import { FaChevronLeft, FaChevronRight, FaLink } from "react-icons/fa";
import { useEffect } from "react";

const Review = () => {
	const [index, setIndex] = useState(0);
	const increaseIndex = () => setIndex((index + 1) % projects.length);
	const decreaseIndex = () => {
		if (index === 0) setIndex(projects.length - 1);
		else setIndex(index - 1);
	};
	// useEffect(() => {
	// 	setInterval(() => {
	// 		setIndex((index + 1) % projects.length);
	// 	}, 4000);
	// });
	return (
		<>
			<article className="review">
				<div className="img-container">
					<img
						src={projects[index].image}
						alt={projects[index].name}
						className="person-img"
					/>
					<a href={projects[index].link} target="_blank">
						<span className="quote-icon">
							<FaLink />
						</span>
					</a>
				</div>
				<h4 className="author">{projects[index].name}</h4>
				<h4 className="job">{projects[index].job}</h4>
				<p className="info">{projects[index].text}</p>
				<div className="button-container">
					<button className="prev-btn" onClick={decreaseIndex}>
						<FaChevronLeft />
					</button>

					<button className="next-btn" onClick={increaseIndex}>
						<FaChevronRight />
					</button>
				</div>
			</article>
		</>
	);
};

export default Review;
