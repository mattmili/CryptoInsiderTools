var path     = require('path');
var express  = require('express');
var app      = express();
var PORT     = process.env.PORT || 8080;
var router   = express.Router();
var request  = require('request');  

// localhost:8080/api/ticker?coin=bitcoin
router.get('/ticker', (req, res) => {
  var coin = req.query.coin;  
  var URL = "https://api.coinmarketcap.com/v1/ticker/"+coin;
  request({
    uri: URL,
    method: "GET",
    timeout: 5000,
  }, function(error, resp, body) {
      
    var jsonObject = JSON.parse(body);
    
    res.send(jsonObject);   
    
  });
});

app.use('/api', router);

// using webpack-dev-server and middleware in development environment
if (process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);  
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html')
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
