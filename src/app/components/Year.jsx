"use client";

export default function Year({ year, setYear }) {
	return (
		<div>
			<div className="year-month-button">
				<button onClick={() => setYear(year - 1)}>{"<"}</button>

				<p>{year}</p>

				<button onClick={() => setYear(year + 1)}>{">"}</button>
			</div>
		</div>
	);
}
