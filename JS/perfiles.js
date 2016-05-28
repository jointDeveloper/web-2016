$(function () {
  $.getJSON("/data.json", function (data) {
    var items = []
    data.perfiles.forEach(function (perfil) {
      console.log(perfil.name);
      items.push("<a href="+ perfil.page + "><img class=\"profileItem\" src=" + perfil.img + "></img></a>");
    });

    $( "<div/>", {
      "class": "profileList",
      html: items.join( "" )
    }).appendTo( "nav.container" );
  });
});
