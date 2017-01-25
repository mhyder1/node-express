var morgan = require('morgan'); //logging on server side


var hostname = 'localhost';
var port = 3000;



app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname,function(){
	console.log('Server running at http://'+hostname+':'+port+'/');
});