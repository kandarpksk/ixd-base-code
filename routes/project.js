// Get all of our project data
var projectData = require('../projectData.json');

exports.viewProject = function(req, res) {
	/* Find and return the correct object */
	var name = req.params.name;
	var objIndex;
	if (name == "Amazing Park Playground") {
		objIndex = 0;
	}
	else {
		objIndex = 1;
	}

	var imageURL = projectData['highlightProjects'][objIndex]['imageURL']
	var shortDesc = projectData['highlightProjects'][objIndex]['shortDescription']
	var desc = projectData['highlightProjects'][objIndex]['description']

	res.render('project', {
		'projectName': name,
		'projectImgUrl': imageURL,
		'projectShortDesc': shortDesc,
		'projectDesc': desc
	});
};