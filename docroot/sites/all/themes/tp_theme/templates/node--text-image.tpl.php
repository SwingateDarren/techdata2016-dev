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
$tp_body = tp_renderBlocks(tp_fetch($node->body));
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

/* Check if this is a related content module */


if(@$node->field_is_a_content_block[LANGUAGE_NONE][0]['value']) {
  $old_tp_title  = $tp_title;
  $old_tp_body = $tp_body;

  $tp_field_location = @$node->field_display_location[LANGUAGE_NONE][0]['tid'] ?: 0;
  $news_items_nids = [];
  $query = new EntityFieldQuery();
  $query->entityCondition('entity_type', 'node')
    ->entityCondition('bundle', ['blog_post', 'resource'], 'IN')
    ->propertyCondition('status', NODE_PUBLISHED)
    ->fieldCondition('field_display_location', 'tid', $tp_field_location, '=')
    ->range(0, 3)
    ->addTag('random');

  $result = $query->execute();
  if (isset($result['node'])) {
    $news_items_nids = array_keys($result['node']);
  }


  // Fill up remaining slots with random result
  // if (count($news_items_nids) < 3) {
  //   $query = new EntityFieldQuery();
  //   $query->entityCondition('entity_type', 'node')
  //     ->entityCondition('bundle', ['blog_post', 'resource'], 'IN')
  //     ->propertyCondition('status', NODE_PUBLISHED)
  //     ->range(0, 3 - count($news_items_nids))
  //     ->addTag('random');

  //   if (count($news_items_nids)) {
  //     $query->propertyCondition('nid', $news_items_nids, 'NOT IN');
  //   }


  //   $result = $query->execute();

  //   if (isset($result['node'])) {
  //     $news_items_nids = array_merge($news_items_nids, array_keys($result['node']));
  //   }
  // }
  $orginalNode = $node;

  $news_items = entity_load('node', $news_items_nids);
  $key = 1;
  $buffer ="";
  foreach ($news_items as $item) {
    $item = node_load($item->nid);
    $tp_image = tp_fetch($item->field_image, 'uri', '');
    if ($tp_image === '') {
      $tp_image = tp_fetch($item->field_feature_image, 'uri', '');
    }
    $tp_body = tp_fetch($item->body);
    $tp_title = sprintf("<h3>%s</h3>", $item->title);
    $tp_summary = tp_fetch($item->body, 'summary');
    $tp_dateObj = new DateTime();
    $tp_dateObj->setTimestamp($item->created * 1);
    $tp_date = $tp_dateObj->format("M j, Y H:ia");
    $field_url = tp_fetch($item->field_url);
    $tp_type = $item->type;
    $isVideo = false;
    if(tp_fetch($item->field_resource_type,"tid",-1) === "86"){
      $isVideo = true;
    }
    // print "<pre>";
    // var_dump($item);
    // print "</pre>";
    if ($tp_image !== '') {
      // $tp_image  = sprintf("<div class='image' style='background-image:url(\"%s\");'></div>", file_create_url($tp_image));
      $tp_image  = sprintf("<div class='image'><div style='background:url(\"%s\") %s/cover no-repeat;'></div></div>", 
        file_create_url( $tp_image ),
        "50% 50%"
      );
      $tp_image .= sprintf("<div class='content '><div class='text'>%s<div class='summary'>%s</div><div class='date'>%s</div></div></div>", $tp_title, $tp_summary, $tp_date, tp_boilerplate_get_edit_button($item));
    }
    if($isVideo){
      $buffer .= sprintf("<div class='views-row views-row-" . ($key) . "'><div class='videoplayer' data-video-url='%s'><div class='node-%s clearfix' %s><div class='type'>Video</div><div class='wrapper'>%s</div></div></div></div>",
        $field_url,
        ($item->nid.' '. (isset($item->field_css) ? tp_fetch($item->field_css) : ''). ' node-' . (str_replace('_', '-', $tp_type))),
        $attributes,
        $tp_image
      );
    } else {
      $buffer .= sprintf("<div class='views-row views-row-" . ($key) . "'><a href='%s'><div class='node-%s clearfix' %s><div class='type'>%s</div><div class='wrapper'>%s</div></div></a></div>",
        ($tp_type === "resource" ? $field_url : url('node/' . $item->nid)),
        ($item->nid.' '. (isset($item->field_css) ? tp_fetch($item->field_css) : ''). ' node-' . (str_replace('_', '-', $tp_type))),
        $attributes,
        ucwords(str_replace('_', ' ', $tp_type)),
        $tp_image
      );
    }
    $key++;
  }
  if($buffer !== ""){
    echo "<div id='block-panels-mini-related-content-panel' class='related-content-generic {$additional_classes}'><div class='view-content'>";
    printf("<h3 class='text section-header'>%s</h3>", $orginalNode->title);
    printf("<div class='content %s'><div class='text'>%s%s%s</div></div>", $cols, $old_tp_title, $old_tp_body, tp_boilerplate_get_edit_button($orginalNode,"Edit",true));
    echo $buffer, "</div></div>";
  }
  print  "<!-- nothing to display -->";
  return;
} else {

/* otherwise load normal text image content */



?><div id="<?php echo "section-",$node->nid; ?>" class="node-<?php echo $node->nid,' ',$additional_classes, ' rank-',$rank,' ', (isset($node->field_css)?tp_fetch($node->field_css):''), ' ', $classes,' ',$tp_field_image_options; ?> clearfix"<?php print $attributes;?>
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
<?php 
}
?>