<div class="flexslider banner">
  <ul class="slides">
  <?php
$i = 0;
$options = array('absolute' => TRUE);
// $nid = 121; // Node ID
// $url = url('node/' . $nid, $options);
$titles = Array();
foreach ($view->result as $result) {
	$i++;
	$node = node_load($result->nid);
  $rank = tp_fetch($node->field_display_rank);
  $tp_field_image_options = tp_fetch($node->field_image_options);
  $tp_image = tp_fetch($node->field_image,'uri', '');
  $tp_body = tp_fetch($node->body);
  $tp_background_pos = tp_fetch($node->field_background_focal_point);
  $tp_field_layout_options = Array();
  if(isset($node->field_layout_options[LANGUAGE_NONE])){
    for($index =0; $index < count($node->field_layout_options[LANGUAGE_NONE]);$index++){
      $tp_field_layout_options[count($tp_field_layout_options)] = $node->field_layout_options[LANGUAGE_NONE][$index]['value'];
    }
  }
  $background_Y = 0;
  $cols='';
  $tp_title = '';
  if(!in_array('hideTitle', $tp_field_layout_options)){
    $tp_title = sprintf("<h2 class='%s'>%s</h2>", $rank==1?'section-header':'', $title);
  }


  if(in_array('isLightText',$tp_field_layout_options)){
    $classes .= " isLightText";
  } else {
    $classes .= " isDarkText";
  }
  if(in_array('isContained',$tp_field_layout_options)){
    $classes .= " isContained";
  }
  if(!in_array('disableVertical',$tp_field_layout_options)){
    $classes .= " enableVertical";
  }
  if(in_array('bottomBackground',$tp_field_layout_options)){
    $classes .= " bottomBackground";
    $background_Y ="100%";
  }
  if(!in_array('disableCover',$tp_field_layout_options)){
   $classes .= " enableCoverScaling";
  }

  if(in_array('verticalAlignImage',$tp_field_layout_options)){
   $classes .= " verticalAlignImage";
  }
  if($tp_image!=='' && ($tp_field_image_options == "displayImageOnRight" || $tp_field_image_options == "displayImageOnLeft")){
    $classes .= " image-on-page";
    $cols=' col-2';
  }

?>
<li <?php if($i>1) echo 'class="hidden"';?>>
  <div id="node-<?php print $node->nid;?>"  class="node-banner nodebanner-<?php echo $node->nid, ' ', (isset($node->field_css)?tp_fetch($node->field_css):''), ' ', $classes,' ',$tp_field_image_options; ?> clearfix"<?php print $attributes;?>
<?php 
if($tp_field_image_options=='isBackground' && $tp_image!=''){
  printf(" style=\"background:url('%s') %s no-repeat;\"",file_create_url( $tp_image ),$tp_background_pos);
}
?>
>
  <div class="wrapper">
  <?php
    if($tp_image!=='' && $tp_field_image_options == "displayImageOnLeft"){
      if(in_array('RenderImageAsBackground',$tp_field_layout_options) && $tp_image!==''){
        printf("<div class='image-on-left isBackgroundEnabled %s' style='background-image:url(\"%s\");background-size:cover;'></div>", $cols, file_create_url( $tp_image ));
      } else {
        printf("<div class='image-on-left %s'>%s</div>",$cols, theme_image(Array('path' => $tp_image, 'attributes' => Array())));
      }
      printf("<div class='content content-on-right %s'><div class='text'>%s%s%s</div></div>",$cols, $tp_title, $tp_body, tp_boilerplate_get_edit_button($node));
    } else if($tp_image!=='' && $tp_field_image_options == "displayImageOnRight"){
      printf("<div class='content content-on-left %s'><div class='text'>%s%s%s</div></div>",$cols, $tp_title, $tp_body, tp_boilerplate_get_edit_button($node));
      if(in_array('RenderImageAsBackground',$tp_field_layout_options) && $tp_image!==''){
        printf("<div class='image-on-right isBackgroundEnabled %s' style='background-image:url(\"%s\");background-size:cover;'></div>", $cols, file_create_url( $tp_image ));
      } else {
        printf("<div class='image-on-right %s'>%s</div>",$cols, theme_image(Array('path' => $tp_image, 'attributes' => Array())));
      }
    } else{
      printf("<div class='content %s'><div class='text'>%s%s%s</div></div>",$cols, $tp_title, $tp_body, tp_boilerplate_get_edit_button($node));
    }
      // var_dump($tp_field_layout_options);
  ?>
    <meta property="og:image" content="<?php echo file_create_url($tp_image); ?>" />
  </div>
</div>
        </li>
  <?php 
}
?>
  </ul>
<?php
if(count($titles)>0){
?>
<div class='submenu'>
<ol class="flex-menu-nav flex-menu menu-cols-<?php echo count($titles);?>">
<?php
foreach ($titles as $key => $value) {
  printf("<li data-index='%d'><a class='%s'>%s</a></li>",$key,($key==0?"active":""), $value);
}
?></ol>
</div>
<?php
}
?>

</div>
