/* 
 * Server-side JS module 
 * Currently loads the projectData.json file into index.handlebars.
 */

// Get all of our project data
console.log("Loading Home.js");
var projectData = require('../projectData.json');

exports.view = function(req, res){
	console.log("Rendering Home");
	res.render('home', projectData);
};