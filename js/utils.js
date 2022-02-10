
$(document).ready(function()
{

	var logo = $('.logo');
	var submenu1 = $('#linav');
	var header = $('.header');

	$(submenu1).hover(function()
	{
		if($(window).scrollTop() > 100){

			logo.removeClass('imgScrolled');
			header.removeClass('scrolled');
		}
	}, function(){
		if($(window).scrollTop() > 100){

			logo.addClass('imgScrolled');
			header.addClass('scrolled');
		}
	});
	
	
	
	var logo = $('.logo');
	var submenu2 = $('#linav2');
	var header = $('.header');

	$(submenu2).hover(function()
	{
		if($(window).scrollTop() > 100){
			logo.removeClass('imgScrolled');
			header.removeClass('scrolled');
		}
	}, function(){
		if($(window).scrollTop() > 100){
			logo.addClass('imgScrolled');
			header.addClass('scrolled');
		}
	});



	$('section.awSlider .carousel').carousel({
		pause: "hover",
	  interval: 2000
	});

	var startImage = $('section.awSlider .item.active > img').attr('src');
	$('section.awSlider').append('<img src="' + startImage + '">');

	$('section.awSlider .carousel').on('slid.bs.carousel', function () {
	 var bscn = $(this).find('.item.active > img').attr('src');
		$('section.awSlider > img').attr('src',bscn);
	});

});