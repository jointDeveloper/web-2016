(function ($) {
  function changeHeight(element) {
    let $el = $(element);
    let maxHeight = 0;
    // alert("hola");
    for (let i = 0; i < $el.length; i++) {
      // alert($el.length);
      let height = Number($($el[i]).css('height').split('px')[0]);
      maxHeight = Math.max(maxHeight, height);
    }

    for (let i = 0; i < $el.length; i++) {
      $($el[i]).css('height', `${maxHeight}px`);
    }
  }
  changeHeight('.portafolio .card-img');
  changeHeight('.portafolio .card-img img');

})(jQuery);
