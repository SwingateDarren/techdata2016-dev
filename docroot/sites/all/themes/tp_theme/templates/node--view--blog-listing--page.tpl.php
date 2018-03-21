<?php
$tp_image = tp_fetch($node->field_image,'uri', '');
$tp_body = tp_fetch($node->body);
$tp_title = sprintf("<h3>%s</h3>", $title);
$tp_summary = "Nam liber tempor cum soluta nobis eleifend...";
$tp_date = "August 18, 2016 10:44am";
$tp_type = "News";//$node->type;
?>
<a href='<?php echo url('node/'.$node->nid)?>'><div class="node-<?php echo $node->nid, ' ', (isset($node->field_css)?tp_fetch($node->field_css):''), ' ', $classes; ?> clearfix"<?php print $attributes;?>>
  <div class='type'><?php echo ucwords(str_replace('_',' ',$tp_type));?></div>
  <div class="wrapper">

<?php
    if($tp_image!==''){
      printf("<div class='image' style='background-image:url(\"%s\");'></div>", file_create_url( $tp_image ));
      printf("<div class='content '><div class='text'>%s<div class='date'>%s</div></div></div>", $tp_title, $tp_date, tp_boilerplate_get_edit_button($node));
    }
?>
  </div>
</div></a>

