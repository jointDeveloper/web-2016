$(function() {
  $('.link').click(function() {
    var name = "HTML/" + $(this).attr('id') + ".html";
    window.location = name;
  });
});
