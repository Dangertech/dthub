var done = 
	[
		{
			title: "tictactoe-ncurses", link: "https://github.com/Dangertech/tictactoe-ncurses", 
			attributes: "C++", description:
			`
			An overengineered tic-tac-toe game written in C++ utilizing the ncurses library
			`
		},
		{
			title: "lesson-controller", link: "https://github.com/Dangertech/lesson-controller",
			attributes: "C++", description:
			`
			Software to manage static timetables, like in school. 
			Intended to be easily parsable by scripts to let ones computer 
			react dynamically to the current lesson. I myself want to use it 
			for assigning my homework the right lesson tag and due dates automatically.
			`
		},
		{
			title: "userlog", link: "https://github.com/Dangertech/userlog",
			attributes: "C++", description:
			`
			I wrote this because of my Raspberry Pi. You see, the Pi is supposed 
			to act as a server to my data, constantly running scripts to 
			synchronize itself with the internet (for example, I currently 
			let it synchronize my OneDrive account every 3600 seconds). 
			When I let it run for a few days without supervision I need to be 
			able to understand what and when happened when I come back and 
			notice that it doesn't work anymore. So, more specifically, 
			I needed something to <gl>write data to a file</gl> and it 
			seemed as there was <gl>no good software</gl> that did this yet, so I wrote it myself. 
			`
		},
		{
			title: "shitty-aoc-2021", link: "https://github.com/Dangertech/shitty-aoc-2021", attributes: "C++", description:
			`
			(Available, but I take no responsibility)
			`
		},
		{
			title: "dthub", link: "https://github.com/Dangertech/dthub", attributes: "website", description:
			`
			This is the code of this website, you can see the end product here;
			It looks good and all, but especially the JavaScript Scripts are 
			really inefficient in places. Caution is advised.
			`
		}
	];

var doing =
	[
		{
			title: "vainglorious", link: null, attributes: "C++ hackerman", description:
			`
			This was previously known on my website as "hackerman". I strayed away from
			this name because I liked the obscure meaning of this word as 'bragging with 
			something you don't have' and it fits the context perfectly: Of course no one
			is a real "hacker" that can type with 300 WPM, slashing around on their keyboard
			while epic stuff scrolls across their screen. But vainglorious wants to be 
			a pretty good simulation of all the exaggerated stuff you see on TV.
			`
		}
	];

function formatEntry(entry, type)
{
	// Decide variables based on type
	let boxType = "";
	switch(type)
	{
		case "done":
			boxType = "box-blue";
			break;
		case "doing":
			boxType = "box-green";
			break;
		case "todo":
			boxType = "box-orange";
			break;
		default:
			console.log("ERROR IN PIPELINE: WRONG ARGUMENT PROVIDED TO formatEntry()");
	}
	let html = "";
	html += "<div class=\"box-blue\">";
	// Title
	if (entry.link != null && entry.link != undefined)
		html += "<a class=\"pipe\" href=\"" + entry.link + "\">" + entry.title + "</a> "; 
	else
		html += "<pipe class=\"title\">" + entry.title + "</pipe> "; 
	// Attributes
	html += "<pipe class=\"attribute\">" + entry.attributes + "</pipe>";
	 
	html += "<br>";
	 
	// Description
	html += "<pipe class=\"Description\">" + entry.description + "</pipe>";
	html += "</div>";
	return html;
}
// Start putting items into document
let pipeloc = document.getElementById("pipeline");
let html = "";
html += "<div>";
for (let i = 0; i<done.length; i++)
{
	html += formatEntry(done[i], "done");
}
html += "</div>";

pipeloc.innerHTML = html;
