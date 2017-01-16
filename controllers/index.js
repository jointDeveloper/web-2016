const profile = require('../data/profile.json');
const event = require('../data/event.json');

exports.index = function(req, res) {
  const profiles = profile.profiles[0];
  // console.log(profiles[0]["john"].name);
  // for (i in profiles[0]) {
  //   console.log(i);
  // }
  const next = event.next;
  const charla = event.charlas;
  // console.log(events);

  res.render('index', {profiles: profiles, next: next, charlas: charla});
};
