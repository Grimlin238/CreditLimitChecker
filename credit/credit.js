var http = require("http")
var advisor = require("advisor")
var qString = require("querystring")
var newPage = ""

function serve(res)

{
	
	var webPage = '<html> <body> <head> <title> Spending less on your credit card is a really good idea. </title> </head> <h1> Are you spending too much? </h1> <form method="post"> <input name="balance" value="balance"> <input name="limit" value="limit"> <input type="submit" value="Get Result"> <input type="reset" value="Clear Form"> </form> </body> </html>';
	
	res.end(webPage);
	
}

http.createServer((req, res) =>

{
	
	if (req.method == "GET")
		
	{
		
		serve(res);
		
	}
	
	else if (req.method == "POST")
		
	{
		
		var data = '';
		
		req.on('data', function(chunk) 
	
	{
		
		data += chunk;
		
	});
	
	req.on('end', function()

{
	
	var params = qString.parse(data);
	
	var advise = new advisor(params.balance, params.limit);
	
	var limit = advise.minimumLimit();
	
newPage += "<html> <body> <h1> Results <h1> <p> The minimum you should be spending is  $" + limit + ". </p> <h2> Additional info. </h2>"
	
	if (advise.spendingTooMuch())
		
	{
		
		newPage += "<p> Your spending too much on your credit card. It is often recommended that you spend under the recommended 30 percent. Paying back your balance before the due date also helps."
		
	}
	
	else 
		
	{
		
		newPage += "<p> You're doing really well. Keep up the good work. Good credit leads to exciting futures. </p>"
		
	}
	
	newPage += "</body> </html>"

	res.end(newPage);
	
});

	}
	
	else
		
	{
		
		console.log(req.method)
		
		res.end();
		
	}
	
}).listen(8080, () =>

{
	
	console.log("The server is listening on port 8080")
	
})