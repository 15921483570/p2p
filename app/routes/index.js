//var block = require("./block");


module.exports = function(app){
	
	//block(app);

	app.get('/', function(req, res) {
		res.render('index',{web3: app.get('web3')});  
	});

	app.all('/getBalance/:coin', function(req, res) {
		  var coin = req.params.coin;
		  var Block = app.get('Block');
		  var balance = Block.getBalance(coin);
		  res.json({balance: balance.toNumber()})

	});

	app.all('/coin', function(req, res) {
		res.render('coin');  
	});

	app.all('/coin2', function(req, res) {
		res.render('coin2');  
	});

	app.all('/apply', function(req, res) {
		res.render('apply');  
	});

	app.all('/list', function(req, res) {
		res.render('list');  
	});

	app.get('/home', function(req, res) {
		res.render('home');  
	});

	app.get('/login', function(req, res) {
		res.render('login');  
	});

	app.all('/detail/:id', function(req, res) {
		var trade_id = req.params.id;
		res.render('details', {trade_id: trade_id});  
	});

};


