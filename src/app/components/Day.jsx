"use client";

function leapYear(year) {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

export default function Day({ day, setDay, month, year, diary }) {
	const numDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var n = numDays[month];
	if (month == 1 /*february*/) {
		n = leapYear(year) ? 29 : 28;
	}

	const days = [];
	// i ==day 1 to day.length
	for (let i = 1; i <= n; i++) {
		const dayClass = i == day ? "selected-day" : "day";

		days.push(
			<div className={dayClass} onClick={() => setDay(i)}>
				<span>{i}</span>
				{"" + year + month + i in diary && <span>💌</span>}
			</div>
		);
	}

	return <div className="calendar">{days}</div>;
}
