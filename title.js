// Basic stuff
const headerTarget = document.getElementById("title");

headerTarget.innerHTML = `<img id="logo" onclick="toStart()"></img><div id="quote"></div>`;

function toStart()
{
	window.location.replace("../index.html");
}
// QUOTES
const quotes = 
[
	"You could be dead?",
	"This is a <i>very</i> cool quote",
	"Religion is the opium of the people!",
	"Man, I hate JavaScript",
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
	"Life is like flavored candles,... uh, nevermind.",
	"This is war. I will reign superior over your filthy little child games",
	"You can't defeat <i>me</i>!",
	"The communists have declared war on me. I must defend myself!",
	"*<i>has impostor syndrome</i>*",
	"Your one stop shop for the truth of everything!"
];

setquote();

// Default argument is random, can be overriden with any value
function setquote(id = Math.floor(Math.random() * quotes.length))
{

	let elem = document.createElement("div");
	elem.innerHTML = quotes[id];
	elem.setAttribute("class", "center");
	elem.style = "text-align: center; color: #ffffff";
	elem.setAttribute("onclick", "setquote()");
	elem.setAttribute("id", "quote");
	if (document.getElementById("quote") == undefined)
		headerTarget.appendChild(elem);
	else
		headerTarget.replaceChild(elem, document.getElementById("quote"));
	console.log("Set quote", id + "!");
}

///// LOGO STUFF

// Animates the background of the dthub logo to have a soft glow
let logo = document.getElementById("logo");
logo.setAttribute("class", "marginauto");
logo.src = headerTarget.getAttribute("logosrc");
logo.style.maxHeight = "88px";
logo.style.marginTop = "30px";
// Avoid milisecond glitch on website load

const percentageStep = 1, percentageInterval = 100;
const minPercentage = 50, maxPercentage = 75;

let percentage = 50;
let negative = false;
setInterval(() =>
	{

		if (negative == false)
		{
			percentage += percentageStep;
		}
		else
		{
			percentage -= percentageStep;
		}
		 
		//Edit the style
		logo.style.backgroundImage = 'radial-gradient(purple, transparent ' + percentage.toString() + '%)';
		if (percentage >= maxPercentage)
			negative = true;
		else if (percentage <= minPercentage)
		{
			negative = false;
		}
	}, percentageInterval);
