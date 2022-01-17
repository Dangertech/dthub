// Animates the background of the dthub logo to have a soft glow
const logo_style = document.createElement('style');

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
		logo_style.innerHTML = `
		img.radial-bg
		{
			background-image: radial-gradient(purple, transparent ` + percentage.toString() + `%);
		}; `;
		// Put it into the document
		document.head.appendChild(logo_style);
		if (percentage >= maxPercentage)
			negative = true;
		else if (percentage <= minPercentage)
		{
			negative = false;
		}
	}, percentageInterval);
