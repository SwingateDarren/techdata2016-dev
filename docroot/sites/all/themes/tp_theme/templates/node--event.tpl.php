<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
$tp_image = tp_fetch($node->field_image,'uri', '');

$field_type = tp_fetch($node->field_country,'taxonomy_term');

?>

<article class="clickable node-<?php echo $node->nid, ' ', (isset($node->field_css)?tp_fetch($node->field_css):''), ' ', $classes; ?> clearfix"<?php print $attributes;?>>
  <div class='wrapper'>
  <div class='location'><?php echo $field_type->name;?></div>
  <img src='<?php print file_create_url( $tp_image )?>'/>
  <div class='date'><?php 
  		$eventDate = tp_fetch($node->field_event_date);
  		// var_dump($node->field_event_date);
  		if($eventDate==""){
  			// if($node->field_date_of_event[LANGUAGE_NONE][0]['value']!==""){
  			// 	print date("M d, Y",strtotime($node->field_date_of_event[LANGUAGE_NONE][0]['value']));
  			// } else {
	  			print "TBA";
	  		// }
  		} else {
  			$eventDate = new Datetime($eventDate,new DateTimeZone(tp_fetch($node->field_event_date,"timezone")));
  			print $eventDate->format("M d,Y");
  		}
  		?></div>
  <h3><?php print $title;?></h3>
  <a href='<?php print $node->field_url[LANGUAGE_NONE][0]['value']?>'>Read more</a>
  <?php tp_boilerplate_edit_btn($node);?>
  </div>

</article>
