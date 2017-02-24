
/*
 * GET home page.
 */
var closetData = require('../closetdata.json');
var defaultData = require('../default.json');

exports.view = function(req, res){
	console.log(closetData);
	console.log(defaultData);
	// display the dash board 
	res.render('dashboard');
};