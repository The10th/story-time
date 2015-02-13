var main        = require('../server/controllers/main.js');

module.exports = function Routes(app) { 
  app.get('/', function (req, res){ main.index(req,res); });
}