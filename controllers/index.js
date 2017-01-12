const fs = require('fs');
const profile = JSON.parse(fs.readFileSync('./data/profile.json'));

exports.index = function(req, res) {
  const profiles = profile.profiles;
  // console.log(profiles[0]);
  // console.log(profiles[0]["john"].name);
  // for (i in profiles[0]) {
  //   console.log(i);
  // }

  res.render('index', {profiles: profiles[0]});
};
