$( document ).ready(function() {
	$( '.menu-btn' ).click(function(){
		$( '.menu-block' ).toggleClass('open');
	});
	$( '.menu-close-btn' ).click(function(){
		$( '.menu-block' ).removeClass('open');
	});
});