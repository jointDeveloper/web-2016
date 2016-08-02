(function ($) {
  function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
  }
  //alert(hexToRgb(003355));
  var color = $('body').attr('background-color');
  alert(color);

})(jQuery);
