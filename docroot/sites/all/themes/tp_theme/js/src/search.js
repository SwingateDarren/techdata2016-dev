/**
* @file
* The Google Site Search code.
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_search = {
		attach: function(context, settings) {
			// var searchType = 'gss'; // google Site Search
			// if(window.location.href.indexOf('?test=search')){
			// 	var searchType = 'node'; // debug version
			// }
			// // console.log(searchType);
			// $("#block-search-form form").submit(function(){
			// 	// console.log("Search - form submitted")
			// 	$('#load-results').html("<div class='results-container'><h2>Please wait while we find your results</h2></div>");
			// 	loadSearchResults('/search/'+searchType+'/'+$("#edit-search-block-form--2").val())
			// 	return false;
			// });

			// function loadSearchResults(path){
			// 	// console.log("Search - loading URL : "+path);
			// 	$('#load-results div.results-container').html("<h2>Please wait while we find your results</h2>");
			// 	$('#load-results').load(
			// 		path + ' #main .content div.results-container', 
			// 		function(data){
			// 			$(".results-container h2").html("Search results - displaying "+ $("ol.search-results li").length+ " results");
			// 			//example of callback
			// 			// console.log('Search - loaded content '+data.length+' bytes')
			// 			$('#load-results .pager li a').each(function(){
			// 				var path = $(this).attr('href');
			// 				$(this).attr('href','#');
			// 				$(this).click(function(){
			// 					loadSearchResults(path);
			// 				});
			// 				// console.log($(this).attr('href'));
			// 			})
			// 		}
			// 	);
			// }
		}
	};
})(jQuery, Drupal, this, this.document);