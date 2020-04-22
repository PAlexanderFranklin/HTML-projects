var movies = [];
var prefixes = ["red ","blue ","yellow ",
                "power ","super ","speedy ",
                "the last ","the first "];
var names = ["cars","knights","men",
             "dwarves","atom smasher","pump stack",
             "fluffy wamblers","dragon"];
var amount = Math.floor(Math.random()*15);

for (var i = 0; i < amount; i++) {
	var a = new Object();
	movies.unshift(a)
	movies[0].name = (prefixes[Math.floor(Math.random() * prefixes.length)]
	                 + names[Math.floor(Math.random() * names.length)]);
	movies[0].rating = (Math.floor(Math.random() * 11) * 0.5);
	movies[0].watched = Math.random() < 0.5;
}

for (var i = 0; i < movies.length; i++) {
	if (movies[i].watched) {
		var a = "You have seen "; 
	}
	else {
		var a = "You have not seen ";
	}
	var b = "\"" + movies[i].name + "\"";
	var c = " - " + movies[i].rating + " stars";
	console.log(a + b + c);
}