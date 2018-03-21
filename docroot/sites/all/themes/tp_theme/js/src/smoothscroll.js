/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.smoothscroll = {
		attach: function(context, settings) {
			$(".page-why-tech-data a[href^='#']").click(function() {
				var scrollto = $(this).attr("href");
				console.log(scrollto);
			    $('html, body').animate({
			        scrollTop: parseInt($(scrollto).closest(".views-row").offset().top)
			    }, 500);
			});
		}
	};
})(jQuery, Drupal, this, this.document);