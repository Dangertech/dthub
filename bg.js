// Not currently in use atm, I want it to increase
// the bg-strength when the user hovers over a link,
// but I don't know how to access that info with javascript
var root = document.querySelector(':root');

var interval = 100;
setInterval(() =>
	{
		root.style.setProperty('--bg-strength', '20%');

	}, interval);
