// Basic stuff
const headerTarget = document.getElementById("title");
var leads = headerTarget.getAttribute("leads");
if (leads == undefined)
	leads = "";
console.log(leads);

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
						if (is_dir('../EXPECT/garden/blogs'))
						{
							foreach (new DirectoryIterator('../EXPECT/garden/blogs') as $file) 
							{
									if($file->isDot()) continue;
									// To work around the awfulness of file paths in 
									// webdev, two blog.php instances are at the root (/)
									// AND leads/ (It's very sad, I know)
									print '<li><a href="' . 'blog.php?name='
										. $file->getFilename() . '">' . $file->getFilename() . '</a></li>';
							}
						}
						else
						{
							print '<li>No blogs accessible.</li>';
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
	<?php
		$file = fopen("/var/www/tickermsgs.txt", "r") or die('"Unable to open ticker messages"');
		while (!feof($file))
		{
			$line = fgets($file);
			if ($line != "")
			{
				$line = substr($line, 0, -1);
				echo '`'. $line . '`,';
			}
		}
		echo '""';
		fclose($file);
	?>
];

setquote();

var quote_creation_stamp;
// Default argument is random, can be overriden with any value
function setquote(id = Math.floor(Math.random() * quotes.length))
{
	while (quotes[id] == "")
	{
		id = Math.floor(Math.random() * quotes.length);
	}
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
	animation-duration: 9s;
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
		if (Date.now() - quote_creation_stamp > 9000)
			setquote()
	}, percentageInterval);
