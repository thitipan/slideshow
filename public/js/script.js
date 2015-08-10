function rescale() { 
	$('.diy-slideshow').width($(window).width());
	$('.diy-slideshow').height($(window).height());
	$('.diy-slideshow img').each(function() {
		var ratio;
		if($(window).height()/$(this).height() >= $(window).width()/$(this).width())
			ratio = $(window).width() / $(this).width();	
		else
			ratio = $(window).height() / $(this).height();	
		var nh = $(this).height() * ratio;
		var nw = $(this).width() * ratio;
		$(this).height(nh);
		$(this).width(nw);
	});
}
$(window).load(function() {
	$(window).bind('resize', rescale);
	rescale();
});
