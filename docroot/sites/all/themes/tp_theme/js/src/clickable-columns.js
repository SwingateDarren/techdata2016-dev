/**
* @file
* The main JS project file for the theme.
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.clickablecolumns = {
		attach: function(context, settings) {
			$(".clickable").each(function(){
				var links = $("a", this);
				if(links.length === 1){
					$(this).click(function(){
						window.location.href = $(links[0]).attr("href");
					});
				}
			});
		}
	};
})(jQuery, Drupal, this, this.document);
