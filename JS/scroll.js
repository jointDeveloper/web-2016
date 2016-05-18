$(function() {
	$("#inicio").hover(function() {
		$('.active').removeClass('active');
		$("#nav-inicio").addClass('active');
	}, function() {});

	$("#info").hover(function() {
		$('.active').removeClass('active');
		$("#nav-info").addClass('active');
	}, function() {});

	$("#aptitudes").hover(function() {
		$('.active').removeClass('active');
		$("#nav-aptitudes").addClass('active');
	}, function() {});

	$("#educacion").hover(function() {
		$('.active').removeClass('active');
		$("#nav-educacion").addClass('active');
	}, function() {});

	$("#cursos").hover(function() {
		$('.active').removeClass('active');
		$("#nav-cursos").addClass('active');
	}, function() {});

	$("#proyectosport").hover(function() {
		$('.active').removeClass('active');
		$("#nav-proyectosport").addClass('active');
	}, function() {});

	$("#pasatiempos").hover(function() {
		$('.active').removeClass('active');
		$("#nav-pasatiempos").addClass('active');
	}, function() {});

	$("#articulos").hover(function() {
		$('.active').removeClass('active');
		$("#nav-articulos").addClass('active');
	}, function() {});

	$("#contacto").hover(function() {
		$('.active').removeClass('active');
		$("#nav-contacto").addClass('active');
	}, function() {});
});