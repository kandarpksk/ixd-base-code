-/* 
 * Server-side JS module 
 * Currently loads the projectData.json file and separately renders the Settings page.
 */

// Get all of our project data
console.log("Loading Staticpages.js");
var projectData = require('../projectData.json');

exports.viewAboutUs = function(req, res) {
	console.log("Exporting About Us");
	res.render('aboutus');
};

exports.viewFAQ = function(req, res) {
	console.log("Exporting FAQ");
	res.render('faq', projectData);
};

exports.viewContact = function(req, res) {
	console.log("Exporting About Us");
	res.render('contact');
};