"use client";

export default function Submit({ diary, setDiary, year, month, day }) {
	//add "" to convert the numerical values of year, month, and day to strings before concatenation.
	const key = "" + year + month + day;
	if (document.getElementById("note") && !(key in diary)) {
		document.getElementById("note").value = "";
	}

	const entry = diary[key];

	function handleClick(e) {
		if (e.target.value) e.preventDefault();
		const text = document.getElementById("note").value;
		setDiary((prevDiary) =>
			// Create a new object using the spread operator, updating the entry for the current date
			({ ...prevDiary, [key]: text })
		);
	}

	return (
		<div>
			<textarea
				id="note"
				type="text"
				value={diary[key]}
				placeholder="Type something..."
				className={`text-box ${entry ? "turnBlue-textarea" : ""}`}
				disabled={entry}>
				{entry}
			</textarea>

			<br />

			<button className="submit" onClick={handleClick} disabled={entry}>
				Submit
			</button>
		</div>
	);
}
