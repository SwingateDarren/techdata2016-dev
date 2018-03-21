/**
 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 Social Shares Javascript
 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_social_shares = {
		attach: function(context, settings) {
			function populateShareLinks() {
				var clientToken = "CubiksOnline";
				// Check if the links are there.
				if ($('.social-share').length) {
					// Get current URL.
					var curUrl = window.location.href;
					var pageTitle = $(document).find('h1').text();
					// Urls
					var linkedinShare = 'https://www.linkedin.com/shareArticle?mini=true&url=' + curUrl;
					var twitterShare = 'https://twitter.com/home?status=' + pageTitle + ' - ' + curUrl + ' - @'+clientToken;
					var googleShare = 'https://plus.google.com/share?url=' + curUrl;
					var facebookShare = 'https://www.facebook.com/sharer/sharer.php?u=' + curUrl;
					// Set urls.
					$('div.social-share .social-share.linkedin').attr({target: 'nw', 'href': linkedinShare});
					$('div.social-share .social-share.twitter').attr({target: 'nw', 'href': twitterShare});
					$('div.social-share .social-share.google').attr({target: 'nw', 'href': googleShare});
					$('div.social-share .social-share.facebook').attr({target: 'nw', 'href': facebookShare});
				}
			}
			$(document).ready(function(){
				populateShareLinks();
				if($("#copyshares").length === 1){
					$("#copyshares").html($("footer .social-pages").html());
				}
			});
		}
	};
})(jQuery, Drupal, this, this.document);