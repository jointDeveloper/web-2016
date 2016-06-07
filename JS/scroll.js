$(function() {
	$(".scroll").hover(function() {
		var id = "#nav-" + $(this).attr('id');
		$('.active').removeClass('active');
		$(id).addClass('active');
	}, function() {});
});
