<?php 
global $viewCounter;
if(!isset($viewCounter)){
  $viewCounter=1;
}
?>
<div id="members-<?php echo $viewCounter;?>" class='members clearfix' data-count="<?php echo count($view->result); ?>"><?php
$viewCounter++;
foreach($view->result as $index => $record){
  $node = node_load($record->nid);
  
  $tp_image = tp_fetch($node->field_image,'uri', '');
  $tp_body = tp_fetch($node->body);
  $tp_job_title = tp_fetch($node->field_job_title);
  $tp_title = $node->title;
  $tp_email =  tp_fetch($node->field_email);
  if($tp_email!=''){
  	$tp_email = sprintf("<a href='mailto:%s'>%s</a>",$tp_email,$tp_email);
  }
  $style=" class='item-".($index)."'";
  
  printf("
  	<div class='node-%s member member-%d' data-index='%d'>
  		<div class='gridImage' style='background:url(\"%s\") 0 0 no-repeat'><div class='hover'><div class='wrapper'><div class='name'><span>%s</span></div><div class='jobtitle'>%s</div></div></div></div>
  		<div class='clickContent'>
  			<div class='image' style='background:url(\"%s\") 0 0 no-repeat'></div>
  			<div class='information'>
	  			<div class='close'><img src='/sites/all/themes/tp_theme/images/cross.png'/></div>
	  			<div class='name'>%s</div>
	  			<div class='jobtitle'>%s</div>
	  			<div class='text'>%s</div>
	  			<div class='email'>%s</div>
	  		</div>
  			%s
  		</div>
	</div>",
      $node->nid,
      $index+1,
      $index+1,
      file_create_url( $tp_image ),
      $tp_title,
      $tp_job_title, 
      file_create_url( $tp_image ),
      $tp_title,
      $tp_job_title, 
      $tp_body, 
      $tp_email, 
      tp_boilerplate_get_edit_button($node)
  );
}

?></div>
