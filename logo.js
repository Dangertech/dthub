// Adds a softly glowing animation to the --blink-percentage variable
// I should think about making it more modular
var root = document.querySelector(':root');
var percentage = 50, percentageStep = 1, percentageInterval = 100;
var negative = false;
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
		 
		root.style.setProperty('--blink-percentage', percentage.toString() + '%');
		 
		if (percentage >= 75)
			negative = true;
		else if (percentage <= 50)
		{
			negative = false;
		}
	}, percentageInterval);
