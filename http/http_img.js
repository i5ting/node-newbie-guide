require('http').createServer(function(req,res){
	console.log(req.headers);
	res.writeHead(200,{'content-Type':'image/png'});
	require('fs').createReadStream('image.png').pipe(res);
}).listen(3000);

/*
require('http').createServer(function(req,res){
	res.writeHead(200,{'content-Type':'image/png'});
	var stream = require('fs').createReadStream('image.png');
	stream.on('data',function(data){
		res.write(data);
	});
	stream.on('end',function(){
		res.end();
	});
	res.end('world');
}).listen(3000);*/
