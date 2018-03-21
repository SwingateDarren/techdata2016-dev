/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.js_tabs = {
		attach: function(context, settings) {
			// your code goes here
			$(".tablist li:first-child").addClass('active');
			$(".tabs li a").each(function(i){
				if(i!==0){
					$('#'+this.href.split('#')[1]).hide();
				} else {
					$(this).addClass('active');
				}
			}).click(function(){
				$(".tabs li a").removeClass('active');
				$(this).addClass('active');
				$(".team-members").hide();
				$('#'+this.href.split('#')[1]).show();
			});

			$("#ActiveTabs").each(function(i){
				$("ul.tablist",this).addClass("tabs-"+$("ul.tablist li",this).length);
				$("ul.tablist li").each(function(){
					var link = $("a",this);
					$(this).attr('data-href',link.attr("href")).html(link.html());
				}).click(function(){
					var tab = $(this).attr('data-href');
					console.log($("#ActiveTabs .active"));
					$("#ActiveTabs .active").removeClass('active');
					$(tab).addClass('active');
					$(this).addClass('active');
				});
				$("#ActiveTabs .tab-1").addClass('active');
			});
			$("#MemberGridTabs").each(function(){
				$(".members").hide();
				$($(".members").get(0)).show();
				$("ul.tablist",this).addClass("tabs-"+$("ul.tablist li",this).length);
				$("ul.tablist li").each(function(){
					var link = $("a",this);
					$(this).attr('data-href',link.attr("href")).html(link.html());
				}).click(function(){
					var tab = $(this).attr('data-href');
					console.log(tab);
					console.log($("#MemberGridTabs .active"));
					$("#MemberGridTabs .active").removeClass('active');
					$(".members").hide();
					$(tab).addClass('active').show();
					$(this).addClass('active');
				
				});
				$("#ActiveTabs .tab-1").addClass('active');
			});
		}
	};
})(jQuery, Drupal, this, this.document);