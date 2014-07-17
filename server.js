var express = require('express'),
	_ = require('lodash'),
	app = express();


var fruits = [
	{
		name: "apple",
		count: 53
	},
	{
		name: "peach",
		count: 500
	},
	{
		name: "orange",
		count: 50
	}
];

app.get('/fruitcount', function(req, res){
	var fruitName = req.query.name,
		fruit = null;

	fruit = _.find(fruits, function(fruit){
		return fruit.name === fruitName;
	});

	var results = _.chain(fruits)
	.filter(function(fruit){
		return fruit.count > 50;
	})
	.map(function(fruit){
		return {
			displayText: "The count for this fruit is " + fruit.count
		};
	})
	.value();

	if(fruit){
		res.json({
			count: fruit.count,
			otherStuff: results
		});
		return;
	}

	res.json({
		error: true,
		message: "Fruit not found"
	});
});

app.listen(3000);