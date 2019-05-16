//JS HERE 

var path = require('path');



function htmlRoutes(app) {

 
  app.get('/', function (req, res) {
    console.log('path', path.join(__dirname + '/../public/home.html'))
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

 app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}

module.exports = htmlRoutes;