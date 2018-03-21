/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.js_bloglist = {
		attach: function(context, settings) {
			// your code goes here
			if(window.location.href.indexOf("blog") !== -1 || window.location.href.indexOf("resources") !== -1 || window.location.href.indexOf("search") !== -1){
				var buffer = "";
				var foundPrev = false;
				var foundNext = false;
				var counter=0;
				// console.log("running");
				// console.log($(".item-list .page .pages"));
				$(".item-list .page .pages").remove();
				$("#edit-submit-blog-listing").click(function(){
					$(".item-list .page .pages").html("");
				});
				$(".item-list .pager li").each(function(){
					
					if(this.className.indexOf("pages")!==-1 || this.className.indexOf("pager-first")!==-1 || this.className.indexOf("pager-last")!==-1){
						var x=x*2; // do nothing jslint
					} else {
						if(!foundPrev && this.className.indexOf("pager-previous")!==-1){
							foundPrev = true;
						} else if(!foundNext&& this.className.indexOf("pager-next")!==-1){
							foundNext = true;
						} else {
							counter++;
							buffer += this.outerHTML;
						}

					}
					
				});
				// console.log(buffer);
				if(foundPrev === false){
					buffer = "<li class='pager-previous'>PREVIOUS PAGE</li><li class='pages'><ul class='showing_"+counter+"'>" + buffer;
				} else {
					buffer = "<li class='pager-previous'>"+$(".item-list .pager li.pager-previous").html()+"</li><li class='pages'><ul class='showing_"+counter+"'>" + buffer;
				}
				if(foundNext === false){
					buffer += "</ul></li><li class='pager-next'>NEXT PAGE</li>";
				} else {
					buffer += "</ul></li><li class='pager-next'>" +$(".item-list .pager li.pager-next").html()+"</li>";
				}
				$(".item-list .pager").html(buffer);
			}
		}
	};
})(jQuery, Drupal, this, this.document);