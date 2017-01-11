const fs = require('fs');
const profile = JSON.parse(fs.readFileSync('./data/profile.json'));

exports.index = function(req, res) {
  res.render('index', {profiles: profile.profiles});
};
