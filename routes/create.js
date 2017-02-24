/* 
 * Server-side JS module 
 * Currently loads the projectData.json file and separately renders the Create page.
 */

// Get all of our project data
console.log("Loading Create.js");
var projectData = require('../projectData.json');

exports.view = function(req, res) {
	console.log("Exporting Create");
	res.render('create');
};