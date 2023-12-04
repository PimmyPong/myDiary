"use client";

import Month from "./components/Month.jsx";
import Submit from "./components/Submit.jsx";
import Year from "./components/Year.jsx";
import Day from "./components/Day.jsx";
import React, { useState } from "react";

export default function Home() {
	const [month, setMonth] = useState(new Date().getMonth());
	const [year, setYear] = useState(new Date().getFullYear());
	const [day, setDay] = useState(new Date().getDate());
	const [diary, setDiary] = useState({});
	// const [diary, setDiary] = useState({});
	return (
		<div>
			<h1 className="diary">Diary</h1>
			<Month month={month} setMonth={setMonth} />
			<Year year={year} setYear={setYear} />
			<Day day={day} setDay={setDay} month={month} year={year} diary={diary} />
			<Submit
				diary={diary}
				setDiary={setDiary}
				day={day}
				month={month}
				year={year}
			/>
		</div>
	);
}
