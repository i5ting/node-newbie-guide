require('http').createServer(function(req,res){
	res.writeHead(200,{'content-Type':'text/html'});
	res.end('hello world');
}).listen(3000);