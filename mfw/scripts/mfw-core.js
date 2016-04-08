$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 100) {
	    $('header').addClass('mini-me');
    } else {
	    
	    $('header').removeClass('mini-me');
    }
});