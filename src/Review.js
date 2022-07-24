import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, setIndex] = useState(0);
	const increaseIndex = () => setIndex((index + 1) % people.length);
	const decreaseIndex = () => {
		if (index === 0) setIndex(people.length - 1);
		else setIndex(index - 1);
	};
	return (
		<>
			<article className="review">
				<div className="img-container">
					<img
						src={people[index].image}
						alt={people[index].name}
						className="person-img"
					/>
					<span className="quote-icon">
						<FaQuoteRight />
					</span>
				</div>
				<h4 className="author">{people[index].name}</h4>
				<h4 className="job">{people[index].job}</h4>
				<p className="info">{people[index].text}</p>
				<div className="button-container">
					<button className="prev-btn" onClick={decreaseIndex}>
						<FaChevronLeft />
					</button>

					<button className="next-btn" onClick={increaseIndex}>
						<FaChevronRight />
					</button>
				</div>
				<button
					className="random-btn"
					onClick={() =>
						setIndex(Math.floor(Math.random() * people.length))
					}
				>
					Surprise Me
				</button>
			</article>
		</>
	);
};

export default Review;
