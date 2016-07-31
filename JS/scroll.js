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
	});
})(jQuery);
