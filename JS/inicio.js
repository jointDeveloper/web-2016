$(function() {
  $(".navbar a").click(function() {
    var id = $(this).attr('href');
    //alert(id);
    if (id == "#inicio") {
      $(".navbar a, .banner a").css('background', 'transparent');
      $(".navbar a").css('font-weight', '700');
      $("#nombre").css('display', 'none');
      $(this).css('color', '#fff');
    }
    else {
      $(".navbar a, .banner a").css('background', '#444');
      $(".navbar a").css('font-weight', '500');
      $(this).css('color', '#fff');
      $(this).css('background', '#f06292');
      $("#nombre").css('display', '');
    }
  });
});
