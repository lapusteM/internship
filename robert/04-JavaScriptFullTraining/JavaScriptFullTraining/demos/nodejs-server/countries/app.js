var express = require('express'),
http = require('http'),
path = require('path'),
util = require('util'),
mongo = require('mongodb'),
monk = require('monk'),
mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL || 'localhost:27017/countriesList',
db = monk(mongoUri);

process.env.TZ = 'America/New_York'; //Set default timezone

var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/countries', function(req, res) {
	var collection = db.get("countries");
	collection.find({}, {}, function(e, docs) {
		res.json(docs);
	});
});

app.get("/countries/:code", function(req, res) {
	var country = db.get("countries").find({code: req.params.code}, {w: 1},
		function(err, doc) {
			res.json(doc);
		}
	);
});

app.post("/countries", function(req, res) {
	var country = req.body;
	var collection = db.get("countries");
	collection.insert(country, function (err, doc) {
		if (err) {
			res.json(500, {error: "There was an error adding the country to the database. Please try again later."});
		} else {
			res.json(200, country);
		}
	});
});

app.delete("/countries/:code", function(req, res) {
	var country = db.get("countries").remove({code: req.params.code}, {w: 1},
		function(err, doc) {
			res.json(doc);
		}
	);
});

//collection.update(criteria, update[[, options], callback]);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express is listening on port " + app.get('port'));
});