$(function() {
  var press = false;
  var perfiles = [];
  var index = 0;
  var size = 0;
  var path = window.location.pathname;

  $.getJSON(path + "data.json", function (data) {
    data.perfiles.forEach(function(perfil) {
      perfiles.push({
        "img": path + perfil.img,
        "page": path + 'HTML/' + perfil.page,
        "name": perfil.name
      });
    });
    size = perfiles.length;
  });

  $('.link').click(function() {
    var id = $(this).attr('id');
    var name = path + "HTML/" + id + ".html";
    if (id != 'perfiles') window.location = name;
  });

  $('#left').click(function() {
    press = true;
    index--;
    index = (index < 0)? size - 1 : index;
    $('.Perfiles').css('background-image', `url(${perfiles[index].img})`);
  });

  $('#right').click(function() {
    press = true;
    index = (index + 1) % size;
    $('.Perfiles').css('background-image', `url(${perfiles[index].img})`);
  });
});
