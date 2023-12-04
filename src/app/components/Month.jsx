"use client";

export default function Month({ month, setMonth }) {
	const monthName = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	function handlePrevMonth() {
		if (month > 0) setMonth(month - 1);
	}

	function handleNextMonth() {
		if (month < 11) setMonth(month + 1);
	}

	return (
		<div>
			<div className="year-month-button">
				<button disabled={month < 1} onClick={handlePrevMonth}>
					{"<"}
				</button>

				<p>{monthName[month]}</p>

				<button disabled={month > 10} onClick={handleNextMonth}>
					{">"}
				</button>
			</div>
		</div>
	);
}
