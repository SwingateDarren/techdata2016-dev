/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.js_homepage_filter_menu = {
		attach: function(context, settings) {
				$(".homepage .region-pre-content .rank-1 .content ul li").click(function(){
					window.location.href = $("a", this).attr("href");
				});
				if(window.location.href.indexOf("filter=")!==-1){
					var filterId = window.location.href.split("filter=")[1];
					var found = false;
					$(".homepage .region-pre-content .rank-1 .content ul li").each(function(){
						var linkId = $("a", this).attr("href").split("filter=")[1];
						if(filterId === linkId){
							$(this).addClass("active");
							found = true;
						}
					});
					// if(!found){
					// 	$($(".homepage .region-pre-content .rank-1 .content ul li").get(0)).addClass("active");
					// }
				} 
				// else {
				// 	console.log("no filter");
				// 	$($(".homepage .region-pre-content .rank-1 .content ul li").get(0)).addClass("active");
				// }
			
		}
	};
})(jQuery, Drupal, this, this.document);