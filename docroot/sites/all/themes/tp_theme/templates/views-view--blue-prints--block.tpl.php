<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
?>
<div class="<?php print $classes; ?>">
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <?php print $title; ?>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($header): ?>
    <div class="view-header">
      <?php print $header; ?>
    </div>
  <?php endif; ?>

  <?php if ($exposed): ?>
    <div class="view-filters">
      <?php print $exposed; ?>
    </div>
  <?php endif; ?>

  <?php if ($attachment_before): ?>
    <div class="attachment attachment-before">
      <?php print $attachment_before; ?>
    </div>
  <?php endif; ?>

  <?php if ($rows): ?>
    <div class="view-content">
    <div class="flexsliderlist1">
    <ul class="slides">
      <?php
      $columns = Array("","","");
      $columnIndex = 0;
      $currentPost = 0;
      $splitPost = 6;
      $results = $view->result;
foreach($results as $index => $record){
  $node = node_load($record->nid);
  $tp_title = $node->title;
  $field_image = tp_fetch($node->field_image,'uri');
  $field_internal_image = tp_fetch($node->field_internal_image,'uri');
  $field_feature_image = tp_fetch($node->field_feature_image,'uri');
  $field_body = tp_fetch($node->body);
  $field_url = tp_fetch($node->field_url);
  $field_type = tp_fetch($node->field_resource_type,'taxonomy_term');
  printf(
    "<li class='item'>
      <div class='wrapper'>
            <div class='image'><div style='background:url(%s) %s/cover no-repeat'></div></div>
            <div class='title'>%s</div>
            <div class='buttonlocation'><a class='button-light-small' href='%s'>%s</a></div></div>
        </li>",
        file_create_url($field_image),
        "50% 50%",
        $tp_title,   
        $field_url, 
        getResourceTypeLinkLabel($field_type->name)
      );
    // "<a href='%s'><div class='node-%s node-blog-post clearfix'><div class='type'>%s</div><div class='wrapper'><div class='image' style='background-image:url(\"%s\");'></div><div class='content '><div class='text'>%s<div class='date'>%s</div></div></div></div></div></a>",
    //   url('node/'.$node->nid),
    //   $node->nid,
    //   ucwords(str_replace('_',' ',$term->name)),
    //   file_create_url( $tp_image ),
    //   $tp_title, 
    //   $tp_date, 
    //   tp_boilerplate_get_edit_button($node)
    // );

}

      ?>
      </ul>
      </div>
    </div>
  <?php elseif ($empty): ?>
    <div class="view-empty">
      <?php print $empty; ?>
    </div>
  <?php endif; ?>

  <?php if ($pager): ?>
    <?php print $pager; ?>
  <?php endif; ?>

  <?php if ($attachment_after): ?>
    <div class="attachment attachment-after">
      <?php print $attachment_after; ?>
    </div>
  <?php endif; ?>

  <?php if ($more): ?>
    <?php print $more; ?>
  <?php endif; ?>

  <?php if ($footer): ?>
    <div class="view-footer">
      <?php print $footer; ?>
    </div>
  <?php endif; ?>

  <?php if ($feed_icon): ?>
    <div class="feed-icon">
      <?php print $feed_icon; ?>
    </div>
  <?php endif; ?>

</div><?php /* class view */ ?>
