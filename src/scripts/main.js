$(function(){

	function paddingHome(){
		var _offset = $('.row').offset().left;
		$('.home__title h4').css({
			'padding-left': _offset+'px'
		});
	}

	paddingHome();

	$(window).on('resize', function(){
		paddingHome();
	});

});