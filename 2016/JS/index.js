(function ($) {
  $(function () {
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var people = document.getElementById('perfiles');
    var Perfiles = document.querySelector('.Perfiles');

    var perfiles = [];
    var index = 0;
    var size = 0;
    var imageCarousel = null;

    $.getJSON("./data.json", function (data) {
      data.perfiles.forEach(function (perfil) {
        perfiles.push({
          "img": perfil.img,
          "page": perfil.page,
          "name": perfil.name
        });
      });

      view();
      size = perfiles.length;
      imageCarousel = setInterval(moveRight, 2800);
      left.addEventListener('click', moveLeft);
      right.addEventListener('click', moveRight);
      people.addEventListener('click', viewProfile);
    });

    $('.link').click(function () {
      var id = $(this).attr('id');
      var name = "HTML/" + id + ".html";
      if (id != 'perfiles') window.location = name;
    });

    $('.link').hover(function() {
      window.clearInterval(imageCarousel);
    }, function() {
      imageCarousel = setInterval(moveRight, 2800);
    });

    function moveLeft() {
      index--;
      index = (index < 0)? size - 1 : index;
      view();
    }

    function moveRight() {
      index = (index + 1) % size;
      view();
    }

    function view() {
      Perfiles.style['background-image'] = `url(${perfiles[index].img})`;
    }

    function viewProfile(ev) {
      console.log(ev.target.id);
      if (ev.target.id === "perfiles") {
        window.location = perfiles[index].page;
      }
    }
  });
})(jQuery);
