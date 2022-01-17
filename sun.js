let sun = {"src": "sources/Synthcity.keyed.png", "width": 3840, "height": 1164};
let gradient_diff = 0, gradient_from = 100, gradient_to = 70;
const sunStyle = document.createElement('style');
const body = document.body;


// Actual ease driver
// Is reversed in the calculation to become ease out
function ease_in(time)
{
	return time*time*time;
}

let showUntil = 1;
let mv = sun.height.toString();
let time = 0; // Time in animation
let bg_percent = 100; // How much is dark on the bg
let sunrise = true; // Sun rises (page load)
setInterval(() =>
{
	sunStyle.innerHTML = `
	body
	{
		background-image: linear-gradient(var(--main-bg-color) ` + bg_percent.toString() + `%, #e30088 100%);
	}
	.sun
	{
		padding-top: ` + (sun.height/(sun.width/window.innerWidth)).toString() + `px;
		background-image: url("` + sun.src + `");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center ` + mv.toString() + `px;
	}
	`;
	document.head.appendChild(sunStyle);
	if (time < 1)
	{
		if (sunrise)
		{
			// Easing shit
			time += sun.height/100000;
			mv = sun.height-((1-ease_in(1-time))*sun.height);
			bg_percent = gradient_from-((1-ease_in(1+gradient_diff-time))*(gradient_from-gradient_to));
		}
	}
	else
	{
		// Sunrise completed!
		sunrise = false;
		time = 0;
		bg_percent = gradient_to;
	}
}, 20);
