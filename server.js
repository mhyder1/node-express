var express = require('express');
var morgan = require('morgan'); //logging on server side
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');

var app = express();

var hostname = 'localhost';
var port = 3000;

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);

app.listen(port, hostname,function(){
	console.log('Server running at http://'+hostname+':'+port+'/');
});