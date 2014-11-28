var express = require('express');
var app = express();

var request = require('request');

// **********************************************


app.get('/ciudad', function (req, res) {


	//227452418 usuario de linkedin
	//var url = 'https://api.linkedin.com/v1/people::(~,hks0NPUMZF):(first-name,connections)';
	//var url = 'http://www.faroo.com/api?q=iphone&start=1&length=10&l=en&src=news&f=json';

	//http://api.accuweather.com/developers/samples
	var info = 'http://apidev.accuweather.com/locations/v1/search?q=donostia&apikey=meSocYcloNe';
	var request = require('request');
	request({url:info, json:"true"}, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			//res.json(body);
			res.render('listar', body);
		} else {
			res.json({error:"request error"});
		}
	});
});

app.get('/tiempo', function (req, res) {

	var tiempo = 'http://apidev.accuweather.com/currentconditions/v1/2324048.json?language=en&apikey=meSocYcloNe';

	var request = require('request');
	request({url:tiempo, json:"true"}, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.json(body);
		} else {
			res.json({error:"request error"});
		}
	});
});


var server = app.listen(process.env.PORT || 3000, function(){
	console.log('Listening in port %d', server.address().port);
});
