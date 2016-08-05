(function ($) {
	$(function () {
		$(".scroll").mouseenter(function () {
			var id = "#nav-" + $(this).attr('id');
			$('.active').removeClass('active');
			$(id).addClass('active');

			if (id == "#nav-inicio" || id == "#nav-info") {
				$("#nombre").css('display', 'none');
				$(".banner a").css('width', '100%');
			}
			else {
				$("#nombre").css('display', 'initial');
				$(".banner a").css('width', '50%');
			}
			if (id == "#nav-inicio") $(".navbar a, .banner a").css('background', 'rgba(0, 0, 0, 0.5)');
			else $(".navbar a, .banner a").css('background', '#444');
		});

		$('a[href^="#"]').on('click', function(ev) {
			var target = $(this.getAttribute('href'));
			if(typeof target !== "undefined") {
				ev.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top
				}, 1000);
			}
		});
	});
})(jQuery);
