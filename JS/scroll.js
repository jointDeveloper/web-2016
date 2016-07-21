$(function() {
	$(".panel").mouseenter(function() {
		var id = "#nav-" + $(this).attr('id');
		if (id != "#nav-inicio") {
			$('.active').removeClass('active');
			$(id).addClass('active');
		}
	});
});
