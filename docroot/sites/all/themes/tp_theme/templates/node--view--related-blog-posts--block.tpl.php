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
$length =75;
$tp_title = sprintf("<div class='title'>%s</div>",  strlen($title)>$length?substr($title,0,$length)."...":$title);
  $tp_dateObj = new DateTime();
  $tp_dateObj->setTimestamp($node->created*1);
  $tp_date = $tp_dateObj->format("M j, Y");
?><div class="relatedPost clearfix"<?php print $attributes;?>>
  <a href='<?php echo url("node/".$node->nid); ?>'><div class="wrapper">
  <?php
    printf(
      "<div class='image'><div class='bgimg' style='background:url(\"%s\") center center no-repeat'></div></div><div class='content'><div class='content--wrapper'>%s<div class='date'>%s</div></div></div>",
      file_create_url( $tp_image ),
      $tp_title,
      $tp_date
    );
?></div></a>
</div>
