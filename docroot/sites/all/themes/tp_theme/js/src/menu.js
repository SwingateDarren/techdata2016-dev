/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.menu = {
		attach: function(context, settings) {
			$('.menu .side-menu').text('');
			$('header .menu .side-menu').click(function() {
				// console.log("click hamburger");
				$('html,body').animate({
							scrollTop: 0
						}, 0, 'swing');
				$('.hamburger-menu').toggle();
				$('#block-system-main-menu').toggleClass('showHamburger');
			});
			// $("#block-panels-mini-hamburger-menu").hover(function(){},function(){
			// 	$(this).hide();
			// });
		}
	};
})(jQuery, Drupal, this, this.document);