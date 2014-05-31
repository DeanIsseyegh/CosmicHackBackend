
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongo = require('mongodb')
  , mongo_uri = process.env.MONGOLAB_URI;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.post('/savesurvey', function(req, res){
	console.log("HIT");
	//  console.log("req obj is: ");
	//  console.dir(req.body);

/*	  var request = req.body;

	  mongo.Db.connect(mongo_uri, function (err, db) {
		db.collection('products', function(er, collection) {
			collection.insert(request, {safe: true}, function(er,rs) {
				if (rs) {
					res.send("Inserted Successfully");
					console.log('Inserted into products table!' + rs);
				} else  {
					if (err) {
						console.log('Error: ' + er);
						res.send(err);
					} else {
						console.log("No response from database");
						res.send("No response from insertion query");
					}
				}
			}); //end of collection.insert
		}); //end of db.collection 
	  }); //end of mongo.Db.connect
*/	
	res.send("RESPONDED");
	
	}); //end of post /add
