<?php
$field_image = tp_fetch($node->field_image,'uri');
$field_internal_image = tp_fetch($node->field_internal_image,'uri');
$field_feature_image = tp_fetch($node->field_feature_image,'uri');
$field_body = tp_fetch($node->body);
$field_url = tp_fetch($node->field_url);
$field_type = tp_fetch($node->field_resource_type,'taxonomy_term');
$field_do_not_contain_image‎ = tp_fetch($node->field_do_not_contain_image);
?>
<div class='resource clickable<?php
if(strtolower($field_type->name)=='video'){
  echo " videoplayer' data-video-url='",$field_url, "'";
}
?>
'>
  <div class='images'>
    <?php 
     printf("<div class='cover' style='background:url(%s) %s no-repeat;background-size:%s;%s'></div>", file_create_url( $field_image ),"50% 50%",(
      $field_do_not_contain_image‎=="1"?"cover":"contain"),"width:100%;height:inherit");
    if(strtolower($field_type->name)!='video' && $field_internal_image != '' ){
      printf("<div class='internal'><img src=\"%s\"/></div>", file_create_url( $field_internal_image ));
    }
  ?>
  </div>
  <div class='content'><div class="content-wrapper">
  <?php
    printf("<div class='title'>%s</div>", ((strlen($title) > 80) ? substr($title,0,80).'...' : $title));
    printf("<div class='body'>%s</div>", ((strlen($field_body) > 80) ? substr($field_body,0,80).'...' : $field_body));
    if(strtolower($field_type->name)=='video'){
      printf("<div class='link'><i>%s</i></div>", getResourceTypeLinkLabel($field_type->name) );
    } else {
      printf("<div class='link'><a href='%s'>%s</a></div>",$field_url, getResourceTypeLinkLabel($field_type->name) );
    }
    print tp_boilerplate_get_edit_button($node);
  ?>
    </div>
  </div>
</div>