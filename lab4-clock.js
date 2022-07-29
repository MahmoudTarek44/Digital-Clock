// problem 2:

setInterval(setTime, 1000);
function setTime() {
	var currentTime = new Date();
	var year = currentTime.getFullYear();
	var day = currentTime.getDay();
	var month = currentTime.getMonth();
	var monthList = [
		"January.",
		"February.",
		"March.",
		"April.",
		"May",
		"June.",
		"Julu.",
		"August.",
		"September.",
		"October.",
		"November.",
		"December.",
	];
	var currentMonth = monthList[month];

	var hours = currentTime.getHours();
	var mins = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var dayTime = "Am";

	if (hours > 12) {
		hours -= 12;
		dayTime = "Pm";
	}
	if (hours == 0) {
		hours = 12;
		dayTime = "Am";
	}
	hours = hours < 10 ? "0" + hours : hours;
	mins = mins < 10 ? "0" + mins : mins;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	var timeNow = hours + ":" + mins + ":" + seconds + " " + dayTime;
	var dateNow = day + " " + currentMonth + ", " + year;
	document.getElementById("time").innerHTML = timeNow;
	document.getElementById("date").innerHTML = dateNow;
}
setTime();
