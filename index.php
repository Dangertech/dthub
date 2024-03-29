<!DOCTYPE html>
<html>
	<head>
		<title>dthub</title>
		<link rel="stylesheet" href="style.css">
		<!Makes the title>
		<script src="title.php" defer></script>
		<!Moves the synthetik sun>
		<script src="sun.js" defer></script>
		<!github API>
		<script src="richgit.js" async></script>
	</head>

	<body>
		<!Created by title.js>
		<div id="title" logosrc="sources/dthublogo.png" leads="leads/" idx="index.php"></div>
		<div class="news" title="Real nice BLOGS!" date="2022-06-19">
			Yay, Just select one of the blogs from the new dropdown in the navbar!
			It's easy, it's fun, it's informative! In the first blog, I give a 
			short info on how I set up this system and in the follow-ups, 
			I plan to give
			in-depth information on the development and my though processes 
			on the <a href="https://github.com/Dangertech/expect" target="ur mom">
				EXPECT</a> video game!
		</div>
		<div class="news" title="EXPECT has begun development!" date="2022-05-09">
			EXPECT is a 3-year challenge I was assigned to make a
			<gl>
			free and open source, 
			minimalistic (in the scope of graphics, at least), 
			procedurally generated, open-world, 
			sci-fi cyberpunk traditional roguelike written in C++</gl>.
			You heard me right, it's a <i>video game with an actual
			graphical interface</i>. Wow, that I can experience this miracle.
			It is in the <gl>indev</gl> stage (so not even an alpha yet),
			but you can watch the whole process of me struggling to write
			a framework to support an infinite, feature-filled open world
			almost live on
			<ul>
				<li>
					<a href=https://github.com/Dangertech/expect target="you">https://github.com/Dangertech/expect</a>
				</li>
			</ul>
		</div>
		<div class="news" title="VAINGLORIOUS is out!" date="2022-04-24">
			My newest tool, vainglorious is now available on my github
			profile! Vainglorious is a richly featured <gl>hacking simulator</gl>,
			customizable with all sorts of stuff. 
			<a href="https://github.com/Dangertech/vainglorious">Check it
			out</a> and tell me what you think! This is the last project before
			I move on to something bigger, which I want to announce in this manner
			as well.
			<br>
			<ul>
				<li>
					<a href="leads/projects.html">
						Project page</a>
				</li>
				<li>
					<a href="https://github.com/Dangertech/vainglorious">Github page</a>
				</li>
			<ul>
		</div>
		 
		<p class="center">
			<img src="sources/under_construction.gif" alt="I swear, I'm working so hard right now...">
			<br>
			This website is a task for my CS class. I don't have any prior experience in Web Development
			and actually never wanted to delve into it. You're just writing stuff, and making it look
			fancy and don't actually produce tools that can help in any way. But I'm still putting
			some time into this because a web presence could certainly be useful. It's mostly just
			ads for myself, stuff about me and what I do.
			<br>
			<img src="sources/under_construction.gif" alt="I swear, I'm working so hard right now...">
		</p>
		 
		<h2 class="center hover"><gl>$</gl> dthub --github</h2>
		<p class="center">
		This is the <gl>dead simple</gl> start of my github "rich presence" feature. The endgoal
		is to have a little info box here that shows my latest commit in <i>any</i> of my repos
		and how long ago it were. I need <gl>Authentication</gl> for that (with my account, to get my
		private repos) and I yet have to figure out how to do that without presenting my password
		to you, dear visitor, on a silver tablet.
		</p>
		<! Put in by richgit.js (checks for "richgit" id>
		<div class="center" id="richgit" style="overflow: auto; display: flex; justify-content: center; align-items: center;"></div>
		<br>

		<h2 class="center hover">https://dangers.works</h2>
		<ul class="center hover">
			<li>
				<a href="leads/future.html">/future</a>
			</li>
			<li>
				<a href="leads/projects.html">/projects</a>
			</li>
			<li>
				<a href="leads/pi.html">/pi</a>
			</li>
			<li>
				<a href="leads/musictable.html">/musictable</a>
			</li>
		</ul>
		<p class="center">
			I want to make the link list up here a bit more sexy,
			so it looks like a <gl>real directory tree</gl>.
		</p>
		<h2 class="center hover"><gl>$</gl> dthub --add-ticker-message</h2>
		<p class="center">
			And this is it, ladies and gentlemen, the great social experiment 
			of the millenium (not really, we have 4chan that's definitely 
			grander): A way to submit your own ticker messages that will be displayed
			on this website, with absolutely no profanity filter. The only rule
			is that your submission must be between 4 and 140 characters long
			(sounds familiar, huh?) and mustn't be empty! Your submission will be
			processed and made available instantly to all other visitors of this
			website. Go now, think of something
			funny and put it into the ticker (however, please don't try to exploit
			anything, the input isn't very sanitized).
			<br>
			<br>
			However, please not that I might occasionally go over the message
			list and delete some ticker messages for any reason or no reason at all.
		</p>
		<form class="center" action="/submit_ticker.php" method="get">
			<label for="content"><gl class="special">Ticker submission:</gl></label><br>
			<input type="text" name="content" minlength="4" maxlength="140"
				placeholder="My awesome and definitely not questionable suggestion"><br>
			<input type="submit" value="Send">
		</form>
		<! Set again by the sun.js script>
		<div id="sun" src="sources/Synthcity.keyed.png"></div>
	</body>
</html>

<script>
	let loc = document.getElementsByClassName("news");
	for (let i = 0; i<loc.length; i++)
	{
		
		// Add components
		var wrapper = document.createElement("div"); // Wrapper for title and date
		wrapper.className += "wrapper";
		var title = document.createElement("div");
		title.className += "title";
		var dat = document.createElement("div");
		dat.className += "date";
		var body = document.createElement("p");
		title.innerHTML = loc[i].getAttribute("title");
		dat.innerHTML = loc[i].getAttribute("date");
		body.innerHTML = loc[i].innerHTML;
		body.style.fontSize = "20px";
		/* To avoid having to add a manual 'p'
		 * in every news element
		 */
		loc[i].innerHTML = "";
		loc[i].appendChild(wrapper);
		loc[i].children[0].appendChild(title);
		loc[i].children[0].appendChild(dat);
		loc[i].appendChild(body);
	}
</script>
