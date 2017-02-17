/* 
 * Server-side JS module 
 * Currently renders the login page.
 */

exports.view = function(req, res) {
	console.log("Going to login page");
	res.render('login');
};