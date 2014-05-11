var qs = require('querystring');
require('http').createServer(function(req,res){
	if('/'==req.url){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end([
			'<form method="post" action="/url">',
			'<h1>my form</h1>',
			'<fieldset>',
			'<label>name</label>',
			'<p>what is your name</p>',
			'<input type="text" name="name"/>',
			'<input type="button" value="submit"/>',
			'</form>'
		].join(''));
	}else if('/url'==req.url&&'post'==req.method){
		var body='';
		req.on('data',function(chunk){
			body += chunk;
		});
		req.on('end',function(){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<p>your name is<b>'+ qs.parse(body).name +'</b></p>');

		})

	}else{
		res.writeHead(404);
		res.end('not found');
	}

}).listen(3000);