require('http').createServer(function(req,res){
	res.writeHead(200,{'content-Type':'text/html'});
	res.write('hello ');
	res.write('nihao ');
	setTimeout(function() {
			res.end('world');
		},1100
	)
}).listen(3000);