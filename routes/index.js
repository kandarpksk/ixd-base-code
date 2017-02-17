/* 
 * Server-side JS module 
 * Currently loads the projectData.json file into index.handlebars.
 */

// Get all of our project data
var projectData = require('../projectData.json');

exports.view = function(req, res){
	res.render('index', projectData);
};