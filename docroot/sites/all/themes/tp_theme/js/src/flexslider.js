/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.flexslider = {
		attach: function(context, settings) {
			var $window = $(window),
      		flexslider = { vars:{} };
			function getGridSize() {
				console.log(window.innerWidth);
				return (window.innerWidth < 600) ? 1 : (window.innerWidth < 1000) ? 2 : 3;
			}
			$('.flexslider').each(function(){
				if($(".submenu",this)){
					$(this).flexslider({
						slideshowSpeed: 15000,
						// itemWidth: 1200,
						// itemMargin: 0,
						// animation: 'slide',
						// animationLoop: true,
					});
					$(this).flexslider("stop");
				} else if($(".item",this)){
					$(this).flexslider({
						slideshowSpeed: 15000,
						itemWidth: 350,
						// itemMargin: 0,
						// animation: 'slide',
						// animationLoop: true,
					});
					$(this).flexslider("stop");
				} else {
					if(this.className.indexOf('disabled') === -1){
						$(this).flexslider({
							slideshowSpeed: 15000,
							// itemWidth: 1200,
							// itemMargin: 0,
							// animation: 'slide',
							// animationLoop: true,
						});
					}
				}
			});
			$('.flexsliderlist1').flexslider({
				slideshowSpeed: 15000,
			    animation: "slide",
				animationLoop: true,
			    itemWidth: 390,
			    itemMargin: 20,
			    minItems: getGridSize(),
			    maxItems: getGridSize(),
			}).each(function(){
				$window.resize(function() {
				    var gridSize = getGridSize();
				 
				    flexslider.vars.minItems = gridSize;
				    flexslider.vars.maxItems = gridSize;
				});

			});
			$('.flexsliderlist').flexslider({
				slideshowSpeed: 15000,
				itemWidth: 300,
				itemMargin: 0,
				animation: 'slide',
				animationLoop: true,
			});
			$(".submenu .flex-menu-nav li").click(function(){
				$(this.parentNode.parentNode.parentNode).flexslider($(this).attr('data-index')*1);
				$(".submenu .flex-menu-nav li a").removeClass('active');
				$("a",this).addClass('active');
			});
			 
		}
	};
})(jQuery, Drupal, this, this.document);