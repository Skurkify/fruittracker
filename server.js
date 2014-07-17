var express = require('express'),
	app = express();

app.get('/fruitcount', function(req, res){
  res.json({
  	count: 5
  });
});

app.listen(3000);