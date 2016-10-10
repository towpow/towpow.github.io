function scrollToSection(section){
	 $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 500);
}

