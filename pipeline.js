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
		},
		{
			title: "schreps", link: "https://github.com/Dangertech/schreps", attributes: "JavaScript Screeps",
			description:
			`
			This is my bot for the MMO colony game <a href="https://screeps.com">Screeps</a>.
			`
		}
	];

var todo =
	[
		{
			title: "LIFELINE", link: null, attributes: "- a week is a lifetime", description:
			`
			A macabre diary application, displaying how much of your life you have already used up, 
			how long you still have left to live, and a chart showing every week in your life 
			you already lived, inspired by 
			<a href="https://shop-eu.kurzgesagt.org/products/lifespan-calendar-poster?userselect=1">kurzgesagt</a>.
			`
		},
		{
			title: "A Voxel game in which you build a society from scratch", link: null, attributes: 
			"C++ 3D Game", description:
			`
				The Idea is very rough, but it is supposed to be a 
				city builder/simulation which takes on progressively larger scale.
				You start in a dead universe, as a 3d character, on a large floating
				rock once called earth. You are an <em>immortal being with otherwise
				human powers</em> that lives since the 21st Century, now finally
				pulling itself up to <gl>rebuild the universe</gl>. You start by building small
				machines enabling you to do basic things like terraforming a few voxels
				at a time, creating energy and food. Then you <gl>clone your first human </gl>and
				create a society. You <em>can</em> then switch into a top-down view of your
				planet, terraform at larger scale and manage multiple buildings at once.
				Then you develop <gl>spacefaring</gl>, extending to other planets, eventually
				<gl>conquering entire galaxies</gl>. You complete the game by building an artifact
				that can <gl>create another universe</gl>, 
				and create a new savefile. 
				<br>
				Pretty ambitious, I know. I would want to create an own engine for this game
				to enable a high-performance simulation of possibly complex societies and machinery,
				all set in a voxel world where you can modify every single one of the infinite
				amount of voxels in an infinite universe.
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
			boxType = "box-green move-stripes";
			break;
		case "todo":
			boxType = "box-orange";
			break;
		default:
			console.log("ERROR IN PIPELINE: WRONG ARGUMENT PROVIDED TO formatEntry()");
	}
	let html = "";
	html += "<div class=\"" + boxType + "\">";
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
html += "<h3 style=\"text-align: center;\">Done</h3>"
	 + "<div>";
for (let i in done)
	html += formatEntry(done[i], "done");
html += "</div><h3 style=\"text-align: center;\">Doing</h3><div>";
for (let i in doing)
	html += formatEntry(doing[i], "doing");
html += "</div><h3 style=\"text-align: center;\">To-Do</h3><div>";
for (let i in todo)
	html += formatEntry(todo[i], "todo");

pipeloc.innerHTML = html;
