(function ($) {
  function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
  }

  function toRgba(rgb, alpha) {
    if(rgb.indexOf('a') == -1){
      var result = rgb.replace(')', ', '+ alpha + ')').replace('rgb', 'rgba');
    }
    return result;
  }

  var color = $('body').css('background-color');
  var body = toRgba(color, 0.05);

  $('html').css('background-color', body);
  $('.circular').css('border-color', color);
  $('.claro, input:focus, .btn').css('background', toRgba(color, 0.3));
  $('.oscuro').css('background', toRgba(color, 0.7));

  // color banner
  $('.banner > a').hover(function () {
    $(this).css('color', color);
  }, function () {
    $(this).css('color', 'white')
  });
})(jQuery);
