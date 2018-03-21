/**
 * @file
 * An tempalte for creating new code blocks from
 */
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_side_buttons = {
		attach: function(context, settings) {
			// your code goes here
			$(document).ready(function() {
				var prevPos = 0;
				/**
				 * Global window scroll function.
				 */
				scrollTimer('#tab_side_buttons','right');
				// scrollHeader();

				$(window).scroll(function() {
					var hamburgerExists = $(".showHamburger").length === 1 ? true : false;
					if(!hamburgerExists){
						if($(window).scrollTop()>124){
							$("#header").addClass('fixed');
						} else {
							$("#header").removeClass('fixed');
						}
						if (prevPos > $(window).scrollTop()){
							// console.log('Up ' + prevPos + ', ' + $(window).scrollTop() );
							$("#header").addClass('visible');
						} else {
							$("#header").removeClass('visible');
						}
						prevPos = $(window).scrollTop();
						scrollTimer('#tab_side_buttons','right');
						// scrollHeader();
					}
				});
			});

			function scrollTimer(id,side) {
				var objOff = { left:'-900px'};
				var objOn = { left:'-163px'};
				if (side==='right'){
					objOff = { right:'-900px'};
					objOn = { right:'-163px'};
				}
				$(id).css(objOff, 300).addClass(side);
				// Clear the timer when scrolling.
				clearTimeout($.data(this, 'scrollTimer_'+id));
				// Set timeout on the scroll timer.
				$.data(this, 'scrollTimer_'+id, setTimeout(function() {
					// When scrolling stops
					$(id).css(objOn);
				}, 300));
				$(id).show();
			}

			function scrollHeader() {
				var objOff = { top:'-900px'};
				var objOn = { top:'0px'};
				if($("body").get(0).className.indexOf(" logged-in ")>-1){
					objOn = { top:'38px'};
				}
				var hamburgerExists = $(".showHamburger").length === 1 ? true : false;
				if(!hamburgerExists){
					if($(window).scrollTop()>400){
						$("#header").css(objOn, 300);
						$(".hamburger-menu").hide();
						// Clear the timer when scrolling.
						clearTimeout($.data(this, 'scrollTimer_header'));
						// Set timeout on the scroll timer.
						$.data(this, 'scrollTimer_header', setTimeout(function() {
							// When scrolling stops
							$("#header").css(objOn);
						}, 300));
						$("#header").show();
					} else {
						$("#header").css(objOn);
					}
				}
				
			}
		}
	};
})(jQuery, Drupal, this, this.document);