
/*
 * GET home page.
 */

// Get all of our project data
var projectData = require('../projectData.json');

exports.view = function(req, res){
	res.render('index', projectData);
};