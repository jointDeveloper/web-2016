$(function() {
  $(".navbar a").click(function() {
    var id = $(this).attr('href');
    //alert(id);
    if (id == "#inicio") {
      $(".navbar a").css('background', 'transparent');
      $(".banner a").css('background', 'transparent');
      $("#nombre").css('display', 'none');
      $(this).css('color', '#fff');
    }
    else {
      $(".navbar a").css('background', '#444');
      $(".banner a").css('background', '#444');
      $("#nombre").css('display', '');
    }

    /*var r = random(0, 255, true);
    var g = random(0, 255, true);
    var b = random(0, 255, true);
    var a = random(0, 1, false);
    $(this).css('color', `rgba(${r}, ${g}, ${b}, ${a})`);*/

  });

  function random(min, max, opt) {
    var ans = Math.random() * (max - min);
    return (opt)? Math.floor(ans) : ans;
  }
});
