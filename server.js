var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

console.log('PushBots Task' + port);

mongoose = require('mongoose'),
  PB_Rec = require('./api/models/PushBotsModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pbdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/PushBotsRoutes');
routes(app);

app.listen(port);


console.log('PushBots Task RESTful API server started on: ' + port);
