/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_template_change_this = {
		attach: function(context, settings) {
			// your code goes here
			$(".talk-to-us").click(function(){
				var formElement = $(".node-form-panel");
				var topPos = formElement.offset().top;
				var value = $("h2",this.parentNode.parentNode).html();
				console.log(value);
				$('html,body').animate({
							scrollTop: topPos
						}, 0, 'swing');
				var selectElement = $(".hs_page_section select").get(0);
				for(var index = 0; index < selectElement.options.length;index++){
					if(selectElement.options[index].value === value){
						selectElement.selectedIndex = index;
					}
				}
				$(selectElement).trigger("change");
				$(".hs_page_section").css("display","none");
			}).each(function(){
				$(this).removeAttr("href");
			});
		}
	};
})(jQuery, Drupal, this, this.document);