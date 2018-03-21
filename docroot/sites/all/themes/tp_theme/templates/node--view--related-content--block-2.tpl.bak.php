<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
$tp_image = tp_fetch($node->field_image,'uri', '');
$tp_body = tp_fetch($node->body);
$tp_title = sprintf("<h3>%s</h3>", $title);
$tp_summary = tp_fetch($node->body,'summary');
  $tp_dateObj = new DateTime();
  $tp_dateObj->setTimestamp($node->created*1);
  $tp_date = $tp_dateObj->format("M j, Y H:ia");

$tp_type = $node->type;
?>


<a href='<?php echo url('node/'.$node->nid)?>'><div class="node-<?php echo $node->nid, ' ', (isset($node->field_css)?tp_fetch($node->field_css):''), ' ', $classes; ?> clearfix"<?php print $attributes;?>>
  <div class='type'><?php echo ucwords(str_replace('_',' ',$tp_type));?></div>
  <div class="wrapper">

<?php
    if($tp_image!==''){
      printf("<div class='image' style='background-image:url(\"%s\");'></div>", file_create_url( $tp_image ));
      printf("<div class='content '><div class='text'>%s<div class='summary'>%s</div><div class='date'>%s</div></div></div>", $tp_title, $tp_summary, $tp_date, tp_boilerplate_get_edit_button($node));
    }
?>
  </div>
</div></a>
<?php 
//var_dump($node);