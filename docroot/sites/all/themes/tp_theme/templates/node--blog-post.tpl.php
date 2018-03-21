<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
$tp_image = tp_fetch($node->field_image,'uri', '');
$tp_summary = tp_fetch($node->body,'summary');
$tp_body = tp_renderBlocks(tp_fetch($node->body));
$tp_title = sprintf("<h1 class='section-header'>%s</h1>",  $title);
// print "<pre>";
// var_dump();
// print "</pre>";

?><div class="node-<?php echo $node->nid, ' ', $classes,' '; ?> clearfix"<?php print $attributes;?>>
  <div class="wrapper">
<?php
	// var_dump($node->field_blog_post_type);
// print "<!----- ".$node->field_blog_post_type[LANGUAGE_NONE][0]["taxonomy_term"]->tid." ------>";
	$image = ( $node->field_blog_post_type[LANGUAGE_NONE][0]["taxonomy_term"]->tid != 276 && $node->field_blog_post_type[LANGUAGE_NONE][0]["taxonomy_term"]->tid != 271)? sprintf("<div class='image'><img src='%s'/></div>",file_create_url( $tp_image )):"<div class='spacer'></div>";
  printf("%s<div class='summary'>%s</div>%s<div class='body'>%s</div>",$tp_title,$tp_summary,$image,$tp_body);
?>
  </div>
</div>
