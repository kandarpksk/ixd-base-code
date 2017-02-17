/* 
 * Server-side JS module 
 * Currently loads renders the start page
 * REMOVE Start page in near future.
 */

exports.view = function(req, res) {
	console.log("Starting our journey");
	res.render('start');
};