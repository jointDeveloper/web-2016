$(function() {
  $(".group").click(function() {
    var id = $(this).attr('href');
    //alert(id);

    if (id == "#inicio" || id == "#info") {
      $("#nombre").css('display', 'none');
      $(".banner a").css('width', '100%');
    }
    else {
      $("#nombre").css('display', 'initial');
      $(".banner a").css('width', '50%');
    }
			if (id == "#nav-inicio") $(".navbar a, .banner a").css('background', 'rgba(0, 0, 0, 0.5)');
    else $(".navbar a, .banner a").css('background', '#444');

  });
});
