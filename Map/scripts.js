function emulateClick(tabID) {
	jQuery('#'+tabID).trigger('click');
	jQuery('html, body').animate({
      scrollTop: jQuery('.tab-59').offset().top
  }, 800);
	return false;
}