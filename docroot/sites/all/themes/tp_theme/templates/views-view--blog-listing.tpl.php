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
      <?php
      $columns = Array("","","");
      $columnIndex = 0;
      $currentPost = 0;
      $splitPost = 6;
      $results = $view->result;
foreach($results as $index => $record){
  $node = node_load($record->nid);
  $tp_image = tp_fetch($node->field_image,'uri', '');
  $tp_body = tp_fetch($node->body);
  $tp_title = sprintf("<h3>%s</h3>", $node->title);
  $tp_summary = tp_fetch($node->body,'summary');;
  $tp_date = "August 18, 2016 10:44am";
  $tp_dateObj = new DateTime();
  $tp_dateObj->setTimestamp($node->created*1);
  $tp_date = $tp_dateObj->format("F j, Y H:ia");
  $tp_type = $node->type;
  $term = taxonomy_term_load(tp_fetch($node->field_blog_post_type,'tid'));
  $columns[$columnIndex] .= sprintf(
    "<a href='%s'><div class='node-%s node-blog-post clearfix'><div class='type'>%s</div><div class='wrapper'><div class='image' style='background-image:url(\"%s\");'></div><div class='content '><div class='text'>%s<div class='date'>%s</div></div></div></div></div></a>",
      url('node/'.$node->nid),
      $node->nid,
      ucwords(str_replace('_',' ',$term->name)),
      file_create_url( $tp_image ),
      $tp_title, 
      $tp_date, 
      tp_boilerplate_get_edit_button($node)
    );
    $currentPost++;    
  if($currentPost==$splitPost){
    $columnIndex++;
  }

}

      ?>
      <div class="dataset first">
        <div class='wrapper'>
          <?php echo $columns[0];?>
        </div>
      </div>
      <div class="blockdata">
        <div class='wrapper'>
          <div class="content">
            <div class="text">
                <?php
                  $block = module_invoke('block', 'block_view','41');
                  echo render($block['content']);
                ?>
            </div>
          </div>
        </div>
      </div>
      <div class="dataset second">
        <div class='wrapper'>
          <?php echo $columns[1];?>
        </div>
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
