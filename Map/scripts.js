function emulateClick(tabID) {
	$('#'+tabID).trigger('click');
	$('html, body').animate({
      scrollTop: $("#tabbed").offset().top
  }, 800);
	return false;
}