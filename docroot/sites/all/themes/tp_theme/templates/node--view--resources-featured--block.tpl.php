<?php
// $field_image = tp_fetch($node->field_image,'uri');
// $field_internal_image = tp_fetch($node->field_internal_image,'uri');
$field_feature_image = tp_fetch($node->field_feature_image,'uri');
$field_body = tp_fetch($node->body);
$field_url = tp_fetch($node->field_url);
$field_type = tp_fetch($node->field_resource_type,'taxonomy_term');

    echo "<div class='resource-featured clickable' style='background:url(\"",file_create_url( $field_feature_image ), "\") 50% 100% no-repeat;'><div class='content'>";
    printf("<div class='title'>%s</div>",$title);
    printf("<div class='link'><a href='%s'>%s</a></div>",$field_url, getResourceTypeLinkLabel($field_type->name) );
    print tp_boilerplate_get_edit_button($node);
?>
</div></div>