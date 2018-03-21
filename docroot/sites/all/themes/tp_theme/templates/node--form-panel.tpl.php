<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
module_load_include('inc', 'pathauto');

$additional_classes = implode(' ', array_map(function($el) {
  return pathauto_cleanstring($el);
}, tp_fetch_terms($node->field_additional_classes)));

$rank = tp_fetch($node->field_display_rank);
$tp_field_image_options = tp_fetch($node->field_image_options);
$tp_image = tp_fetch($node->field_image,'uri', '');
$tp_hubspot_code = tp_fetch($node->field_hubspot_form_embed_code);
$tp_body = tp_renderBlocks(tp_fetch($node->body));

if($tp_hubspot_code!=""){
  $tp_body="<div class='body'>$tp_body</div><div class='hubspotForm'>".$tp_hubspot_code."</div>";
}

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
if(in_array('showImagesOnMobile',$tp_field_layout_options)){
 $classes .= " showImagesOnMobile";
}
if(in_array('disablePaddingBottom',$tp_field_layout_options)){
 $classes .= " disablePaddingBottom";
}

if(in_array('disablePaddingTop',$tp_field_layout_options)){
  $classes .= " disablePaddingTop";
}

if(in_array('RenderImageAsBackground',$tp_field_layout_options)){
  $classes .= " HasRenderImageAsBackground";
}


if(in_array('verticalAlignImage',$tp_field_layout_options)){
 $classes .= " verticalAlignImage";
}
if($tp_image!=='' && ($tp_field_image_options == "displayImageOnRight" || $tp_field_image_options == "displayImageOnLeft")){
  $classes .= " image-on-page";
  $cols=' col-2';
}
if(strpos($_SERVER['REQUEST_URI'],"/vendors/cisco")!==false) {

  if("$rank" == "100" ){
    $block = module_invoke('panels_mini', 'block_view', 'related_content_panel');
    if(strlen($block['content'])>0){
      ?><div id="block-panels-mini-related-content-panel" class="block block-panels-mini contextual-links-region first last odd"><?php
      print $block['content'];
      ?></div><?php
    }
  }
}


/* otherwise load normal text image content */



?><div id="<?php echo "section-",$node->nid; ?>" class="node-<?php echo $node->nid,' ',$additional_classes, ' rank-',$rank,' ', (isset($node->field_css)?tp_fetch($node->field_css):''), ' ', $classes,' ',$tp_field_image_options; ?> clearfix"<?php print $attributes;?>
<?php
if($tp_field_image_options=='isBackground' && $tp_image!=''){
  printf(" style=\"background:url('%s') %s no-repeat;background-size:cover;\"",file_create_url( $tp_image ),$tp_background_pos);
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
      printf("<div class='content content-on-right %s'><div class='text'>%s%s%s</div></div>",$cols, $tp_title, $tp_body, tp_boilerplate_get_edit_button($node,"Edit",true));
    } else if($tp_image!=='' && $tp_field_image_options == "displayImageOnRight"){
      printf("<div class='content content-on-left %s'><div class='text'>%s%s%s</div></div>",$cols, $tp_title, $tp_body, tp_boilerplate_get_edit_button($node,"Edit",true));
      if(in_array('RenderImageAsBackground',$tp_field_layout_options) && $tp_image!==''){
        printf("<div class='image-on-right isBackgroundEnabled %s' style='background-image:url(\"%s\");background-size:cover;'></div>", $cols, file_create_url( $tp_image ));
      } else {
        printf("<div class='image-on-right %s'>%s</div>",$cols, theme_image(Array('path' => $tp_image, 'attributes' => Array())));
      }
    }
  else if($tp_image!=='' && $tp_field_image_options == "displayImageAtBottom") {
    printf("<div class='content %s'><div class='text'>%s%s%s</div><div class='image-at-bottom'>%s</div></div>",$cols, $tp_title, $tp_body, tp_boilerplate_get_edit_button($node,"Edit",true), theme_image(Array('path' => $tp_image, 'attributes' => Array())));


  }
    else{
      printf("<div class='content %s'><div class='text'>%s%s%s</div></div>",$cols, $tp_title, $tp_body, tp_boilerplate_get_edit_button($node,"Edit",true));
    }
    // var_dump($tp_field_layout_options);
?>
  </div>
</div>