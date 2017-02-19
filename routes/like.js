var likedata = require('../like.json');


exports.view = function(req, res){
  res.render('like', likedata);
};