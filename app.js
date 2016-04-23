var config = require('./.app_config');
var mysql = require('mysql');
var express = require('express');

var pool = mysql.createPool({
	host : config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.database,
	connectionLimit: config.mysql.connectionLimit
});

var app = express();

app.use(express.static('public'));

var requestCount = 0;
app.get("/family", function(req, resp) {
	console.log('Handling request...\t' + ++requestCount);

	pool.query('SELECT * FROM family', function(err, rows, fields) {
		resp.json(rows);
	});

});

console.log("Listening on port 3000");
app.listen(3000);

