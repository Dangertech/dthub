// Animates the background of the dthub logo to have a soft glow
const style = document.createElement('style');

const percentageStep = 1, percentageInterval = 100;
const minPercentage = 50, maxPercentage = 75;

var percentage = 50;
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
		 
		//Edit the style
		style.innerHTML = `
		img.radial-bg
		{
			background-image: radial-gradient(purple, transparent ` + percentage.toString() + `%);
		}; `;
		// Put it into the document
		document.head.appendChild(style);
		if (percentage >= maxPercentage)
			negative = true;
		else if (percentage <= minPercentage)
		{
			negative = false;
		}
	}, percentageInterval);
