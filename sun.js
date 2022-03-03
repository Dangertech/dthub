let sun = {"src": document.getElementById("sun").getAttribute("src"), "width": 3840, "height": 1164};
let gradient_diff = 0, gradient_from = 100, gradient_to = 70;
let wobble_min = 20;
const sunStyle = document.createElement('style');


// Actual ease driver
// Is reversed in the calculation to become ease out
function ease_in(time)
{
	return time*time*time;
}

// Write to the document
function apply(mv, bg_percent, mySun)
{
	sunStyle.innerHTML = `
	body
	{
		background-image: linear-gradient(var(--main-bg-color) ` + bg_percent.toString() + `%, #e30088 100%);
	}
	#sun
	{
		padding-top: ` + (mySun.height/(mySun.width/window.innerWidth)).toString() + `px;
		background-image: url("` + mySun.src + `");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center ` + mv.toString() + `px;
	}
	`;
	document.head.appendChild(sunStyle);

}

var time = 0; // Time in animation
var mv = sun.height;
var bg_percent = 100; // How much is dark on the bg

var riseRunner, shineRunner; // Access to the running intervals
function rise()
{
	if (time < 1)
	{
			// Easing shit
			time += sun.height/100000;
			mv = sun.height-((1-ease_in(1-time))*sun.height);
			bg_percent = gradient_from-((1-ease_in(1+gradient_diff-time))*(gradient_from-gradient_to));
	}
	else
	{
		console.log("Sunrise complete!");
		time = 0;
		mv = 0;
		bg_percent = gradient_to;
		clearInterval(riseRunner);
		setInterval(shine, 20);
	}
	// Write
	apply(mv, bg_percent, sun);
}

var back = false;
function shine()
{
	// Just reverse time if animation should play backwards
	if (!back)
		time += sun.height/200000;
	else
		time -= sun.height/200000;
	 
	if (time < 0.5)
		mv = (ease_in(time*2)*0.5)*wobble_min;
	else
		mv = (1-ease_in((1-time)*2)*0.5) * wobble_min;
	 
	if (time > 1)
	{
		back = true;
		time = 1;
	}
	else if (time < 0)
	{
		back = false;
		time = 0;
	}
	// Write
	apply(mv, bg_percent, sun);
}


// rise() then executes shine()
riseRunner = setInterval(rise, 20);
