/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_meet_the_team = {
		attach: function(context, settings) {
			$(".member .close").click(function(){
				$(this.parentNode.parentNode).hide();
			});
			$(".member .gridImage").click(function(){
				$(".clickContent").hide();
				$(".clickContent", this.parentNode).show();
				var count = $(".members").attr('data-count')*1;
				var index = $(this).attr('data-index')*1;
				if(count>12){
					if(index< count-6){
						$(".clickContent", this.parentNode).css('margin-top','-550px');
					}	
				}

			});
		}
	};
})(jQuery, Drupal, this, this.document);