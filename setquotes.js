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
	"Disgusting.",
	"<gl>WATCH AS THE <i>SYNTHETIK SUN</i> RISES!</gl>",
	"SYNTHETIK SUN",
	"<i>Hail the glow cloud</i>",
	"You are nothing. I am nothing. Let's be blissfully nothing.",
	"Wow, how did you get into <i>that</i> part of the internet!?",
	"These modern fears won't hold you down",
	"<i>SWOOSH</i>",
	"Dude, how cool would be an ARG on this website?",
	"\"He puts dollar signs in front of his headings. That must mean he likes capitalism!\"",
	"<i>Swooooooosh</i>",
	"Viva La Resistance!",
	"Who knows if I don't watch your webcam right now? Better close that website...",
	"Life is like flavored candles,... uh, nevermind."
];

const target = document.getElementById("quote");

setquote();

// Default argument is random, can be overriden with any value
function setquote(id = Math.floor(Math.random() * quotes.length))
{
	console.log(id);
	target.innerHTML = quotes[id];
}
