$( document ).ready(function() {
	//menu
	$( '.menu-btn' ).click(function(){
		$( '.menu-block' ).toggleClass( 'open' );
	});
	$( '.menu-close-btn' ).click(function(){
		$( '.menu-block' ).removeClass( 'open' );
	});
	//day-night
	$( '.icons-wrap span' ).click(function(){
		$( '.icons-wrap span' ).removeClass( 'active' );
		$( this ).addClass( 'active' );

		$( '.wrapper' ).removeClass( 'day night' )

		$( this ).hasClass( 'icon-sun' ) ?
			$( '.wrapper' ).addClass( 'day' ) :
			$( '.wrapper' ).addClass( 'night' );
	});
});