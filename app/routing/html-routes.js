//html-routes

// Routes
// =============================================================

// Needs restructuring working on next

app.get('/', function(req, res){
	//res.send("Welcome to the Friend Finder!")
	res.sendFile(path.join(__dirname + '/home.html'));
})

app.get('/surveyPage', function(req, res){
	
	res.sendFile(path.join(__dirname + '/surveyPage.html'));
})
