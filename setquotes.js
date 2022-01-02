const quotes = 
[
	"You could be dead?",
	"This is a <i>very</i> cool quote",
	"Religion is the opium of the people!",
	"Man, I hate JavaScript",
	"Man, I hate 000Webhost, why was I so stupid?",
	"I bet I'm slacking off again",
	"I should really be more productive",
	"Do you have some eggs for my pancakes? And an oven maybe?",
	"Till (the extra l is important) Schweiger is an absolute unit",
	"lesson-controller helps you with nothing at all",
	"Ever played Tic Tac Toe? It's extremely boring!",
	"Now I am become Death, the destroyer of worlds.",
	"Do you want some cookies, my dear?",
	"Disgusting."
];

const target = document.getElementById("quote");

var id = Math.floor(Math.random() * quotes.length);
target.innerHTML += quotes[id];
