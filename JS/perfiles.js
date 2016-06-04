$(function () {
  var path = window.location.pathname;
  $.getJSON("/Aprendizaje-Web/data.json", function (data) {
    var items = [];
    data.perfiles.forEach(function (perfil, index) {
      items.push(`<div class="container-img description">
                    <img class="profileItem"
                       id="${perfil.name}"
                       src=${perfil.img}
                       onClick=(redirect("${perfil.page}"))>
                    </img>
                    <div class="mascara">
                      <h2>${perfil.name}</h2>
                      <p>${perfil.description}</p>
                      <a href="${perfil.page}" class="link">Leer mas</a>
                    </div>
                  </div>`
                );

      if ((index + 1) % 3 == 0) {
        items[index] += '<br>';
      }
    });

    $("<div/>", {
      "class": "profileList",
      html: items.join("")
    }).appendTo("nav");
  });
});

function redirect(url) {
  window.location = url;
}
