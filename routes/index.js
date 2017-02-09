
/*
 * GET home page.
 */

// Get all of our project data
var projectData = require('../projectData.json');
//var data = require('../data.json');

exports.view = function(req, res){
	console.log(projectData);	// Test that we're really reading the data
	res.render('index', projectData);
};