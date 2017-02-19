var closetdata = require('../closetdata.json');

exports.view = function(req, res){
  res.render('closet', closetdata);
};