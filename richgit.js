fetch("https://api.github.com/users/dangertech")
.then(function (response)
{
	return response.json();
})
.then(function (profile)
{
	// Do it again (really shitty, I know, but I'm too lazy to care about asynchronous processes)
	fetch(profile.repos_url)
	.then(function (response) {return response.json();})
	.then(function (repos)
	{
		// Push it to the handleData function!
		handleData(profile, repos);
	});
})
.catch(function (error)
{
	console.log("Error: " + error);
});

function handleData(profile, repos)
{
	var gitloc = document.getElementById("richgit");
	console.log(profile);
	console.log(repos);
	let html = "";
	html += `
	<img style="float: left; border-radius: 50%; width: 30%; max-width: 300px;" src="`+ profile.avatar_url + ` border="3">
	<div style="margin-left: 1cm; margin-top: 1cm; display: inline-block;">
		<gl class="special" style="font-size: 200%; font-weight: bold;">` + profile.name + `</gl>
		<br>
		<p>
			<b>Public Repos:</b> ` + profile.public_repos + "<br>";
	for (let i = 0; i<repos.length; i++)
	{
		html += "<b>> </b> <a href="+ repos[i].html_url + ">" + repos[i].name + "</a> <br>";
	}
	html += `
		</p>
	</div>
	`;
	gitloc.innerHTML = html;
}
