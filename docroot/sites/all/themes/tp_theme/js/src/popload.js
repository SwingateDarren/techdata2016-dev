/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_popload = {
		attach: function(context, settings) {

			function setModalHeights() {
				winWid = $(window).width();
				winH = $(window).height();
				// Set body to be relative first - we may set it to be fixed once a popup is displayed
				$('html').css('overflow', '');

				$('.popup-container:visible, .popup-modal:visible').each(function(index, elem){

					var $contents = $(elem).find('.popup-wrap');

					if($contents.find('> .scrollable').length === 0 )
					{
						$contents.find('> *:not(.close)').wrapAll('<div class="scrollable-content"></div>');
						$contents.find('> .scrollable-content').wrapAll('<div class="scrollable"></div>');
					}

					if($contents.find('.scrollable-content').outerHeight() > winH - 100) {
						$(this).addClass('fullscreen');
						$('html').css('overflow', 'hidden');
					} else {
						$(this).removeClass('fullscreen');
						$('html').css('overflow', '');
					}
				});
			}
var el = document.getElementById("section-541");
if(el){
	if(window.location.href.indexOf("thankyou=1")!==-1){
		el.innerHTML = "<div class='wrapper'><div class='content centered'><div class='text'><h1 class='mpu-header' style='text-align:center'>Thank you for your message</h1><p style='text-align:center'>We will be in contact with you&nbsp;shortly.</p></div></div></div>";
	}
}
			// your code goes here
			// ?utm_source=ExactTarget&utm_campaign=existing_comms&utm_medium=email 
			// console.log(window.location.href);
			if (document.cookie.indexOf('shown=')===-1  && window.location.href.indexOf("?utm_source=ExactTarget&utm_campaign=existing_comms&utm_medium=email")!==-1){
				var d = new Date();
				// cache for 12 hours
			    d.setTime(d.getTime() + (12*3600*1000));
			    var expires = "expires="+ d.toUTCString();
				document.cookie = "shown=1; " + expires+ ";domain="+window.location.host+";path=/";
				$('body').append("<div class='popup-load popup-container'><div class='popup-wrap'><span class='close'></span><div class='field field-name-field-popup field-type-text-long field-label-hidden'><div class='field-items'><div class='field-item even'><h4 style='text-align: center;'>Thank you for joining our Trusted Advisor Hub </h4><p style='text-align: center;'>Explore the world of enterprise mobility management through Tech Data</p></div></div></div></div></div>");
				
				$('.popup-load.popup-container .close').click(function(){
					$(".popup-load").hide();
				});
				$('.popup-load.popup-container a').click(function(){
					
				});

				$('.popup-load').each(function() {
					$('.popup-load.popup-container').fadeIn();
					setModalHeights();
				});
			}
		}
	};
})(jQuery, Drupal, this, this.document);