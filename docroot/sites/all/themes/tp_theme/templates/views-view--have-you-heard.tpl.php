<div class='latestnews'><?php
foreach($view->result as $index => $record){
  $node = node_load($record->nid);
  
  $tp_image = tp_fetch($node->field_image,'uri', '');
  $tp_body = tp_fetch($node->body);
  $tp_title = $node->title;
  if(strlen($tp_title)>70){
      $tp_title = substr($tp_title,0,65)."...";
  }
  $tp_title = sprintf("<h3>%s</h3>", $tp_title);
  $tp_dateObj = new DateTime();
  $tp_dateObj->setTimestamp($node->created*1);
  $tp_date = $tp_dateObj->format("F j, Y");
  $tp_type = $node->type;
  $term = taxonomy_term_load(tp_fetch($node->field_blog_post_type,'tid'));
  $style=" class='item-".($index%3)."'";
  
  printf("<a href='%s' %s><div class='node-%s node-blog-post clearfix'><div class='wrapper'><div class='image'><div class='bgimg' style='background:url(\"%s\") %s no-repeat;'></div></div><div class='content'><div class='type'>%s</div><div class='text'>%s<div class='date'>%s</div></div></div></div></div></a>",
      url('node/'.$node->nid),
      $style,
      $node->nid,
      file_create_url( $tp_image ),
      "50% 50%",
      ucwords(str_replace('_',' ',$term->name)),
      $tp_title, 
      $tp_date, 
      tp_boilerplate_get_edit_button($node)
  );
}

?></div>