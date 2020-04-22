var alive = prompt("Number of people that are alive")/2;
var total = (prompt("Number of people that have died")/2) + alive;
var CPP = prompt("Number of children per couple") / 2;
var DR = prompt("Percent of people that have children")/100;
var generations = prompt("How many generations to run?");

console.log("Living: " + (alive * 2));
console.log("Ever lived: " + (total * 2));

for (var i = 0; i < generations; i++) {
	total = total + (alive * CPP);
	alive = alive * CPP * DR;
	console.log("------------------------------------")
	console.log("Generation: " + (i + 1))
    console.log("Living: " + (alive * 2));
    console.log("Ever lived: " + (total * 2));
    console.log("Percent of people living: " + (alive / total)*100);
    console.log("Fraction of people living: 1/" + (total / alive));
    console.log("Living * rounded fraction - ever lived: " + ((alive * Math.round(total / alive) * 2) - (total * 2)));
}
