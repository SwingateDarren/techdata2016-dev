/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_blog_filter_change = {
		attach: function(context, settings) {
			$(".form-item-field-solution-tid option:nth-child(1)").html("Solutions");
			$(".form-item-field-content-level-tid option:nth-child(1)").html("Level");
			$(".form-item-field-blog-post-type-tid option:nth-child(1)").html("Type");
			$(".form-item-field-resource-type-tid option:nth-child(1)").html("Type");
			$(".form-item-field-vendor-tid option:nth-child(1)").html("Vendor");
		}
	};
})(jQuery, Drupal, this, this.document);