//server.js
// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//create a server

var server = http.createServer(handleRequest);


function handleRequest(request, response){
	//response.end('It Works! Path Hit:' + request.url);
	var url_parts = url.parse(request.url);

	switch (url_parts.pathname){
		case '/'
		display_home(url_parts.pathname, request, response);
		break;
		case '/surveyPage':
		display_surveyPage(url_parts.pathname, request, response);
		break;
		
	}
}
// still need to find way to connect pages

function display_home(url, request, response){
	var myHTML = '<html>';
	myHTML += '<body><h1>HomePage, Welcome<h1>';
	myHTML += "<a href='/surveyPage'>Survey</a>";
	myHTML += '</body></html>';

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(myHTML);
}

function display_surveyPage(url, request, response){
	var myHTML = '<html>';
	myHTML += '<body><h1>Survey<h1>';
	myHTML += "<a href='/home'>Go Home</a>";
	myHTML += '</body></html>';

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(myHTML);
}

//route to external .js pages

require('./app/routing/html-routes.js')(app);

require('./app/routing/api-routes.js')(app);




// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})