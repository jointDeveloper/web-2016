$(function() {
  $(".navbar a").click(function() {
    var id = $(this).attr('href');
    var r = random(0, 255, true);
    var g = random(0, 255, true);
    var b = random(0, 255, true);
    var a = random(0, 1, false);
    $(id).css('background-color', `rgba(${r}, ${g}, ${b}, ${a})`);
  });

  function random(min, max, opt) {
    var ans = Math.random() * (max - min);
    return (opt)? Math.floor(ans) : ans;
  }
});
