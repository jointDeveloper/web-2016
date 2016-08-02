(function ($) {
  $(function () {
    var width = window.screen.width;
    var path = window.location.pathname;

    $.getJSON("../data.json", function (data) {
      var items = [];
      data.perfiles.forEach(function (perfil, index) {
        items.push(`<div class="col-3">
          <div class="container-img description">
            <img class="profileItem"
              id="${perfil.name}"
              src=.${perfil.img}
              onClick=(redirect(".${perfil.page}"))>
            <div class="mascara">
              <h2>${perfil.name}</h2>
              <p>${perfil.description}</p>
              <a href=".${perfil.page}" class="link">Leer mas</a>
              </div>
          </div>
        </div>`
      );

        // if ((index + 1) % 4 == 0) {
        //   items[index] += '<br>';
        // }
      });

      $("<div/>", {
        "class": "profileList row",
        html: items.join("")
      }).appendTo("#integrantes");
    });

    $('.footer').css("bottom", `${-width * 0.6}px`);

    function redirect(url) {
      window.location = url;
    }
  });
})(jQuery);
