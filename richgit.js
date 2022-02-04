fetch("https://api.github.com/users/dangertech")
.then(function (response)
{
	return response.json();
})
.then(function (myJson)
{
	// Push it to the handleData function!
	handleData(myJson);
})
.catch(function (error)
{
	console.log("Error: " + error);
});

function handleData(data)
{
	console.log(data);
	console.log(data.name);
}
