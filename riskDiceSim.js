var rounds = prompt("Number of rounds");
var consoleOutput = prompt("With large numbers of rounds (probably anything over 500) the console output for individual rounds tends to lag. If you want each individual round to be output to the console, type \"1\". If you want to disable console output for individual rounds, type \"0\"");
var dWins = 0;
var oWins = 0;
var splitWins = 0;
var dRolls = [1,1];
var oRolls = [1,1,1];

Array.prototype.swap = function(x,y){
	var a = this[x];
	this[x] = this[y];
	this[y] = a;
}


for (var i = rounds; i > 0; i--) {
	dRolls[0] = Math.ceil(Math.random() * 6);
	dRolls[1] = Math.ceil(Math.random() * 6);
	oRolls[0] = Math.ceil(Math.random() * 6);
	oRolls[1] = Math.ceil(Math.random() * 6);
	oRolls[2] = Math.ceil(Math.random() * 6);
	if (dRolls[0] < dRolls[1]) {
		dRolls.swap(0,1);
	}
	for (var j = 1; j >= 0; j--) {
		if (oRolls[0] < oRolls[1]) {
			oRolls.swap(0,1);
		}
		if (oRolls[1] < oRolls[2]) {
			oRolls.swap(1,2);
		}
	}
	if(consoleOutput > 0) {
	    console.log("defense rolls: " + dRolls);
	    console.log("offense rolls: " + oRolls);
	}
	if ( (oRolls[0] > dRolls[0]) | (oRolls[1] > dRolls[1]) ) {
		if ( (oRolls[0] > dRolls[0]) && (oRolls[1] > dRolls[1]) ) {
			oWins++;
			if(consoleOutput > 0) {
			    console.log("offense wins")
		    }
		} 
		else {
			splitWins++;
			if(consoleOutput > 0) {
			    console.log("a tie")
		    }
		}
	} 
	else {
		dWins++;
		if(consoleOutput > 0) {
		    console.log("defense wins")
	    }
	}
}

console.log("offense wins: " + oWins);
console.log("defense wins: " + dWins);
console.log("ties: " + splitWins);