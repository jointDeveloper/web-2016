exports.home = function (req, res) {
  // get db
  res.render('index', {title: "JoinDeveloper"});
}
