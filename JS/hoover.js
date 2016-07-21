(function($) {
	$(function() {
		$('.group').click(function() {
			$('.active').removeClass('active');
			$(this).addClass('active');
		});
	});
})(jQuery);
