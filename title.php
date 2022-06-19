// Basic stuff
const headerTarget = document.getElementById("title");
var leads = headerTarget.getAttribute("leads");
if (leads == undefined)
	leads = "";
// Set a cookie to access the js var in php (Stupid bodge, I know)
document.cookie="leads_path="+leads;

headerTarget.innerHTML = 
`
	<div style="display: flex; justify-content: center; margin-top: 30px;
		margin-bottom: 30px; align-items: center;">
		<ul class="navbar" style="float: center;">
			<li>
				<a href="`+ leads + `future.html">future</a>
			</li>
			<li>
				<a href="` + leads + `projects.html">projects</a>
			</li>
			<li class="dropdown special last">
				EXPECT Blog
				<ul class="dropdown-content">
					<?php 
						foreach (new DirectoryIterator('../EXPECT/garden/blogs') as $file) 
						{
								if($file->isDot()) continue;
								print '<li><a href="' . $_COOKIE['leads_path'] . 'blog.php?name='
									. $file->getFilename() . '">' . $file->getFilename() . '</a></li>';
						}
					?>
				</ul>
			</li>
			<li class="sep">
				- // -
			</li>
		</ul>
		<img style="float: center; height: 5vw;
			margin-left:0.3vw; margin-right: 0.3vw;"
			id="logo" onclick="toStart()"></img>
		<ul class="navbar" style="float:center;">
			<li class="sep">
				- // -
			</li>
			<li>
				<a href="` + leads + `pi.html">pi</a>
			</li>
			<li class="last">
				<a href="` + leads + `musictable.html">musictable</a>
			</li>
			<li class="invisible"></li>
		</ul>
	</div>
	<div id="quoteContainer">
		<div id="quote"></div>
	</div>
`
;

function toStart()
{
	let prop_idx = headerTarget.getAttribute("idx");
	if (prop_idx == undefined)
		prop_idx = "../index.php";
	window.location.replace(prop_idx);
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
	"Your one stop shop for the truth of everything!",
	"You will be able to put your own stuff here soon!",
	"Await greatness, visitor"
];

setquote();

var quote_creation_stamp;
// Default argument is random, can be overriden with any value
function setquote(id = Math.floor(Math.random() * quotes.length))
{
	let target = document.getElementById("quoteContainer");
	let elem = document.createElement("span");
	elem.innerHTML = quotes[id];
	elem.setAttribute("onclick", "setquote()");
	elem.setAttribute("style",
	`
	position: relative;
	overflow: hidden;
	white-space: nowrap;
	animation-name: rtl-move;
	animation-duration: 12s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	`);
	elem.setAttribute("id", "quote");
	if (document.getElementById("quote") == undefined)
		target.appendChild(elem);
	else
		target.replaceChild(elem, document.getElementById("quote"));
	quote_creation_stamp = Date.now();
	console.log("Set quote", id + ", on", quote_creation_stamp + "!");
}

///// LOGO STUFF

// Animates the background of the dthub logo to have a soft glow
let logo = document.getElementById("logo");
logo.src = headerTarget.getAttribute("logosrc");
 
// Avoid milisecond glitch on website load
const percentageStep = 0.2, percentageInterval = 15;
const minPercentage = 50, maxPercentage = 75;

let percentage = 50;
let negative = false;
setInterval(() =>
	{
		let ticker = document.getElementById("quote");
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
		// Watch for quote change
		if (Date.now() - quote_creation_stamp > 12000)
			setquote()
	}, percentageInterval);
