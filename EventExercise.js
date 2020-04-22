var isBlue = false;
var button = document.querySelector("button");

button.addEventListener("click", function() {
	if(isBlue) {
		document.body.style.background = "white";
	}
	else {
		document.body.style.background = "blue";
	}
	isBlue = !isBlue;
})