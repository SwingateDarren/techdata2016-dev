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

    <div class='homepage-view-first-two'><?php
foreach($view->result as $index => $record){
  $node = node_load($record->nid);
  
  $tp_image = tp_fetch($node->field_image,'uri', '');
  $tp_body = tp_fetch($node->body);
  if(strlen($node->title)>80){
    $tp_title = sprintf("<h3>%s</h3>", substr($node->title,0,75)."...");
  } else {
    $tp_title = sprintf("<h3>%s</h3>", $node->title);
  }
  $tp_summary = tp_fetch($node->body,'summary')  ;
  if(strlen($tp_summary)>80){
    $tp_summary = substr(tp_fetch($node->body,'summary'),0,80)."..."  ;
  } 
  
  $tp_dateObj = new DateTime();
  $tp_dateObj->setTimestamp($node->created*1);
  $tp_date = $tp_dateObj->format("F j, Y");
  $tp_type = $node->type;
  $term = taxonomy_term_load(tp_fetch($node->field_blog_post_type,'tid'));
 
  printf("<a href='%s'><div class='node-%s node-blog-post clearfix'><div class='type'>%s</div><div class='wrapper'><div class='image' style='background-image:url(\"%s\") ;'></div><div class='content'><div class='text'>%s<div class='date'>%s</div></div></div></div></div></a>",
      url('node/'.$node->nid),
      $node->nid,
      ucwords(str_replace('_',' ',$term->name)),
      file_create_url( $tp_image ),
      $tp_title, 
      $tp_date, 
      tp_boilerplate_get_edit_button($node)
  );
}

?></div>
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
