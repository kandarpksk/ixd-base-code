/* 
 * Server-side JS module 
 * Currently loads the projectData.json file into index.handlebars.
 */

// Get all of our project data
console.log("Loading Index.js");
var projectData = require('../projectData.json');
console.log("Successfully loaded Index.js");

exports.view = function(req, res){
	console.log("Rendering Index");
	res.render('index', projectData);
};