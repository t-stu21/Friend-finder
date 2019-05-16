var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var apiRoutes = require('../Friend-finder/app/routing/api-routes');
var htmlRoutes = require('../Friend-finder/app/routing/html-routes');

var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
console.log('file', path.join(__dirname + '/app/public/css'))
app.use('/static', express.static(path.join(__dirname + '/app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

apiRoutes(app); 
htmlRoutes(app); 

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});