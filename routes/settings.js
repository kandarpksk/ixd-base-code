/* 
 * Server-side JS module 
 * Currently loads the projectData.json file and separately renders the Settings page.
 */

// Get all of our project data
console.log("Loading Settings.js");
var projectData = require('../projectData.json');

exports.view = function(req, res) {
	console.log("Exporting Settings");
	res.render('settings');
};