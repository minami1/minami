var path = require('path');
var express = require('express');
var app = express();
var viewPath = path.join(__dirname,'views');
app.use('/',express.static(viewPath));

var publicPath = path.join(__dirname,'public');
app.use('/public',express.static(publicPath));
app.listen(9999,function(){
	console.log('run 9999');
})
module.exports = app;