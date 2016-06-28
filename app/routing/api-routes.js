//api-routes
// Needs restructuring working on next


app.get('/api/friends', function(req, res){
	//res.send("Welcome to the Friend Finder!")
	res.sendFile(path.join(__dirname + '/.html'));
})

app.post('api/friends', function(req, res){
	//res.send("Welcome to the Friend Finder!")
	res.sendFile(path.join(__dirname + '/home.html'));
})

