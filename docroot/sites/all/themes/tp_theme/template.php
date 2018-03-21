<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */
function tp_fetch($field,$attr='value',$alt=''){
	if (isset($field[LANGUAGE_NONE])){
		return $field[LANGUAGE_NONE][0][$attr];
	} else {
		return $alt;
	}
}
function tp_fetch_terms($field){
	$results = Array();
	if (isset($field[LANGUAGE_NONE])){
		for($index=0; $index < count($field[LANGUAGE_NONE]); $index++){
			$results[count($results)] = $field[LANGUAGE_NONE][$index]['taxonomy_term']->name;
		}
	}
	return $results;
}
function getResourceTypeLinkLabel($str){
  $returnData = 'READ MORE';
  if($str === "Video"){
    $returnData = "WATCH NOW";
  }
  return $returnData;
}

function tp_boilerplate_preprocess_node(&$vars) {
	$checks = Array(
		'client' => Array('preview'),
	);

	if (isset($checks[$vars['node']->type]) && in_array($vars['view_mode'], $checks[$vars['node']->type])) {
		$vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__' . $vars['view_mode'];
	}
}

/**
 * THe custom callback for our dynamic form.
 * @param  [type] $value_array [Array of the users answers]
 * @return [type]              [Bool - 0,1,2 Depending on answers]
 */
function tp_boilerplate_custom_validation_callback($value_array) {

}
/**
 * Our filter callback function.
 */
function tp_renderBlocks($text) {

  if (preg_match_all("/\[block:([^=\\]]+)=?([^\\]]*)?\]/i", $text, $match)) {

    $output = array();
    foreach ($match[2] as $key => $value) {
		$raw_tags[] = $match[0][$key];
		$module = $match[1][$key];
		$delta = $match[2][$key];
		$parts = explode('-',$delta);
		$block = module_invoke('webform', 'block_view', 'client-block-'.$parts[2]);
		$output= render($block['content']);
    }
    return str_replace($raw_tags, $output, $text);
  }
  return $text;
}
/**
 * tp_theme_render_default is a function to pull out the first value of $content if
 * it exists and the default string if it doesn't
 * @param  Array $data    Array containing possible data
 * @param  Mixed $field   Key of the array
 * @param  Mixed $default Default String
 */
function tp_boilerplate_render_default($data, $field, $default = '') {
	print render(tp_boilerplate_get_value($data, $field, $default));
}

/**
 * tp_theme_get_value is a function to get the value at index
 * @param  Array $data    Array containing possible data
 * @param  Mixed $field   Key of the array
 * @param  Mixed $default Default String
 */
function tp_boilerplate_get_value($data, $field, $default = '') {
	return isset($data[$field]) ? $data[$field]['#items'][0]['value'] : $default;
}
/**
 * tp_theme_get_value is a function to get the value at index
 * @param  Array $data    Array containing possible data
 * @param  Mixed $field   Key of the array
 * @param  Mixed $default Default String
 */
function tp_boilerplate_render_image($data, $field, $index = 0, $className = null) {
	if (isset($data[$field]) && isset($data[$field][$index])) {
		if (!is_null($className)) {
			printf("<div class='%s'>", $className);
		}
		print render($data[$field][$index]);
		if (!is_null($className)) {
			print "</div>";
		}
	}
}

/**
 * tp_theme_get_value is a function to get the value at index
 * @param  Array $data    Array containing possible data
 * @param  Mixed $field   Key of the array
 * @param  Mixed $default Default String
 */
function tp_boilerplate_edit_btn($node, $label = "Edit") {
	if (node_access('update', $node)): ?>
  <span class="edit-btn"><?php print l(t($label), 'node/' . $node->nid . '/edit', array('query' => array('destination' => current_path())));?></span>
  <?php endif;

}
/**
 * tp_theme_get_value is a function to get the value at index
 * @param  Array $data    Array containing possible data
 * @param  Mixed $field   Key of the array
 * @param  Mixed $default Default String
 */
function tp_boilerplate_get_edit_button($node, $label = "Edit", $isCloneable=false,$cloneLabel = "Clone") {
	if (node_access('update', $node)) {
		if(!$isCloneable){
			return '<span class="edit-btn">' . l(t($label), 'node/' . $node->nid . '/edit', array('query' => array('destination' => current_path()))) . '</span>';
		} else {
			return '<span class="edit-btn">' . l(t($label), 'node/' . $node->nid . '/edit', array('query' => array('destination' => current_path()))) . '</span> <span class="edit-btn">' . l( t( $cloneLabel ), 'node/' . $node->nid . '/clone/confirm', array('query' => array('destination' => current_path()))) . '</span>';
		}
	}
}

/**
 * tp_theme_get_value is a function to get the value at index
 * @param  Array $data    Array containing possible data
 * @param  Mixed $field   Key of the array
 * @param  Mixed $default Default String
 */
function tp_boilerplate_blockedit_btn($block_id,$is_admin=false, $label = "Edit") {
	if ($is_admin){
	?>
	  <span class="edit-btn"><?php print l(t($label), '/admin/structure/block/manage/block/' . $block_id . '/configure', array('query' => array('destination' => current_path())));?></span>
	  <?php
	}
// endif;

}

function tp_boilerplate_form_alter(&$form, &$form_state, $form_id) {
// Subscription form
	if ($form_id == 'simplenews_block_form_1') {
		// if(!user_is_logged_in()){
		//   $form['mail']['#attributes']['class'][] = 'none-subscribed-input';
		// } else {
		//   // $form['submit']['#attributes']['class'][] = 'subscribed-btn';
		// }

		// Check if form input has a value & add a class
		if ($form['submit']['#value'] == 'Subscribe') {
			$form['submit']['#attributes']['class'][] = 'subscribe-btn';
			$form['submit']['#attributes']['placeholder'] = 'Subscribe';
		} else {
			$form['submit']['#attributes']['class'][] = 'unsubscribe-btn';
			$form['submit']['#attributes']['placeholder'] = 'Unsubscribe';
		}
	}
}

/*
 **	Added overrides to theme functions for the show more module because it is throwing an
 **	error over a missing "element" value
 */
function tp_boilerplate_pager_next($variables) {

	$text = $variables['text'];
	$element = $variables['element'] ?: 0;
	$interval = $variables['interval'];
	$parameters = $variables['parameters'];
	global $pager_page_array, $pager_total;
	$output = '';

	// If we are anywhere but the last page
	if ($pager_page_array[$element] < ($pager_total[$element] - 1)) {
		$page_new = pager_load_array($pager_page_array[$element] + $interval, $element, $pager_page_array);
		// If the next page is the last page, mark the link as such.
		if ($page_new[$element] == ($pager_total[$element] - 1)) {
			$output = theme('pager_last', array('text' => $text, 'element' => $element, 'parameters' => $parameters));
		} else {
			// The next page is not the last page.
			$output = theme('pager_link', array('text' => $text, 'page_new' => $page_new, 'element' => $element, 'parameters' => $parameters));
		}
	}

	return $output;
}

function tp_boilerplate_pager_show_more($vars) {
	global $pager_total;

	$element = $vars['element'] ?: 0;
	$parameters = $vars['parameters'];

	$pager_classes = array('pager', 'pager-show-more');

	$pager_next = theme('pager_next',
		array(
			'text' => $vars['show_more_text'],
			'element' => $element,
			'interval' => 1,
			'parameters' => $parameters,
		)
	);
	if (empty($pager_next)) {
		$pager_next = empty($vars['show_more_empty_text']) ? '&nbsp;' : check_plain($vars['show_more_empty_text']);
		$pager_classes[] = 'pager-show-more-empty';
	}

	if ($pager_total[$element] > 1) {
		$items[] = array(
			'class' => array('pager-show-more-next'),
			'data' => $pager_next,
		);
		return theme('item_list',
			array(
				'items' => $items,
				'title' => NULL,
				'type' => 'ul',
				'attributes' => array('class' => $pager_classes),
			)
		);
	}
}

function render_insight_cta_cta($entity, $ctaOffset) {
	$term = taxonomy_term_load(isset($entity->field_type_of_cta_resource[LANGUAGE_NONE]) ? $entity->field_type_of_cta_resource[LANGUAGE_NONE][0]['tid'] : -1);
	return sprintf(
		"<div id='node-%d' class='cta-embedded cta-item cta-embedded-%d'><div class='img' style='background-image:url(%s);'></div><div class='text'><div class='type'>%s</div><div class='title'>%s</div><div class='buttons'><a href='%s' class='button button-cta'>%s</a>%s</div></div></div>",
		$entity->nid,
		$ctaOffset,
		isset($entity->field_image[LANGUAGE_NONE]) ? file_create_url($entity->field_image[LANGUAGE_NONE][0]['uri']) : '',
		strtoupper($term->name),
		$entity->title,
		$entity->field_action_link[LANGUAGE_NONE][0]['url'],
		$entity->field_action_link[LANGUAGE_NONE][0]['title'],
		tp_boilerplate_get_edit_button($entity)
	);

}
function render_insight_cta_event($entity, $ctaOffset) {
	$term = taxonomy_term_load(isset($entity->field_type_of_cta_resource[LANGUAGE_NONE]) ? $entity->field_type_of_cta_resource[LANGUAGE_NONE][0]['tid'] : -1);
	return sprintf(
		"<div id='node-%d' class='cta-embedded cta-event cta-embedded-%d'><div class='img' style='background-image:url(%s);'></div><div class='text'><div class='type'>%s</div><div class='title'>%s</div><div class='buttons'><a href='%s' class='button button-cta'>%s</a>%s</div></div></div>",
		$entity->nid,
		$ctaOffset,
		isset($entity->field_image[LANGUAGE_NONE]) ? file_create_url($entity->field_image[LANGUAGE_NONE][0]['uri']) : '',
		strtoupper($term->name),
		$entity->title,
		$entity->field_action_link[LANGUAGE_NONE][0]['url'],
		$entity->field_action_link[LANGUAGE_NONE][0]['title'],
		tp_boilerplate_get_edit_button($entity)
	);

}
function render_insight_cta_post($entity, $ctaOffset) {
	$term = taxonomy_term_load(isset($entity->field_insight_type[LANGUAGE_NONE]) ? $entity->field_insight_type[LANGUAGE_NONE][0]['tid'] : -1);
	return sprintf(
		"<div id='node-%d' class='cta-embedded cta-insight cta-embedded-%d'><div class='img' style='background-image:url(%s);'></div><div class='text'><div class='type'>%s</div><div class='title'>%s</div><div class='buttons'><a href='%s' class='button button-cta'>%s</a>%s</div></div></div>",
		$entity->nid,
		$ctaOffset,
		//	$entity->field_action_link[LANGUAGE_NONE][0]['url'],
		isset($entity->field_image[LANGUAGE_NONE]) ? file_create_url($entity->field_image[LANGUAGE_NONE][0]['uri']) : '',
		strtoupper($term->name),
		$entity->title,
		url("node/" . $entity->nid),
		t("Read more"),
		tp_boilerplate_get_edit_button($entity)

	);

}

function tp_boilerplate_cta_check_type($node, $ctaOffset) {
	$type = $node->field_embedded_ctas[LANGUAGE_NONE][$ctaOffset]['entity']->type;
	if ($type == "insight_post") {
		return render_insight_cta_post($node->field_embedded_ctas[LANGUAGE_NONE][$ctaOffset]['entity'], $ctaOffset);
	} else if ($type == "cta") {
		return render_insight_cta_cta($node->field_embedded_ctas[LANGUAGE_NONE][$ctaOffset]['entity'], $ctaOffset);
	} else {
		// var_dump($node->field_embedded_ctas[LANGUAGE_NONE][$ctaOffset]['entity']->type);
		return render_insight_cta_event($node->field_embedded_ctas[LANGUAGE_NONE][$ctaOffset]['entity'], $ctaOffset);
	}
}

function tp_boilerplate_render_body_with_embedded_ctas($node) {
	$ctaOffset = 0;
	$buffer = str_replace(Array('<hr/>', '<hr />'), '<hr>', isset($node->body[LANGUAGE_NONE]) ? $node->body[LANGUAGE_NONE][0]["value"] : "");
	// var_dump(strpos($buffer, "<hr>"));
	if (strpos($buffer, "<hr>") !== false) {
		$aBuffer = explode("<hr>", $buffer);
		$newBuffer = $aBuffer[0];
		for ($index = 1; $index < count($aBuffer); $index++) {
			// add next 2 cta's
			$renderedCTA = "";
			if (count($node->field_embedded_ctas[LANGUAGE_NONE]) > $ctaOffset) {
				$renderedCTA .= tp_boilerplate_cta_check_type($node, $ctaOffset);
				$ctaOffset++;
			}
			if (count($node->field_embedded_ctas[LANGUAGE_NONE]) > $ctaOffset) {
				$renderedCTA .= tp_boilerplate_cta_check_type($node, $ctaOffset);
				$ctaOffset++;

			}
			$newBuffer .= sprintf("<div class='cta-embedded-row'>%s<div class='clearfix'></div></div>",
				$renderedCTA
			);
			// add next buffer block
			$newBuffer .= $aBuffer[$index];
		}

		$buffer = $newBuffer;
	}
	printf("<div class='content'>%s</div>", $buffer);
}

function tp_boilerplate_clone_block() {}
function tp_boilerplate_clone_node($original_node, $language) {
	$nid = $original_node->nid;
	unset($original_node->nid);
	$original_node->language = $language;
	$original_node->tnid = $nid;
	node_save($original_node);

}
function tp_boilerplate_css_alter(&$css) {
	global $language;

	if (file_exists(__DIR__ . "/css/styles-" . $language->language . ".css")) {
		$css["sites/all/themes/tp_theme/css/styles-" . $language->language . ".css"] = $css["sites/all/themes/tp_theme/css/styles.css"];
		$css["sites/all/themes/tp_theme/css/styles-" . $language->language . ".css"]['data'] = "sites/all/themes/tp_theme/css/styles-" . $language->language . ".css";
		$css = array_diff_key($css, Array("sites/all/themes/tp_theme/css/styles.css" => 1));
	}
	list( $ignore, $primaryPath, $secondaryPath ) = explode("/",$_SERVER['REQUEST_URI']);
	if($primaryPath=="vendors"){
		$lang = $language->language;
		if($language->language=="en"){
			$lang = "en-gb";
		}

		if (file_exists(__DIR__ . "/css/vendor-" . $secondaryPath . "-" . $lang . ".css")) {
			$css["sites/all/themes/tp_theme/css/vendor-" . $secondaryPath . "-" . $lang . ".css"] = Array(
				"group" => 100,
				"every_page" => true,
				"media" => "all",
				"type" => "file",
				"weight" => 0.001,
				"preprocess" => true,
				"data" => "sites/all/themes/tp_theme/system.messages.css",
				"browsers" => array(
					"IE" => true,
					"!IE" => true
				)
			);

			$css["sites/all/themes/tp_theme/css/vendor-" . $secondaryPath . "-" . $lang . ".css"]['data'] = "sites/all/themes/tp_theme/css/vendor-" . $secondaryPath . "-" . $lang . ".css";
			// var_dump($css["sites/all/themes/tp_theme/css/vendor-" . $secondaryPath . "-" . $lang . ".css"]);
		} else{
		//	 print "not found ". __DIR__ . "/css/vendor-" . $secondaryPath . "-" . $lang . ".css\n";
		}
	}
	if($primaryPath=="microsoft-surface-hub-welcome-pack"){
		$lang = $language->language;
		if($language->language=="en"){
			$lang = "en-gb";
		}
		if (file_exists(__DIR__ . "/css/vendor-microsoft-" . $lang . ".css")) {
			$css["sites/all/themes/tp_theme/css/vendor-microsoft-" . $lang . ".css"] = Array(
				"group" => 100,
				"every_page" => true,
				"media" => "all",
				"type" => "file",
				"weight" => 0.001,
				"preprocess" => true,
				"data" => "sites/all/themes/tp_theme/system.messages.css",
				"browsers" => array(
					"IE" => true,
					"!IE" => true
				)
			);

			$css["sites/all/themes/tp_theme/css/vendor-microsoft-" . $lang . ".css"]['data'] = "sites/all/themes/tp_theme/css/vendor-microsoft-" . $lang . ".css";
			// var_dump($css["sites/all/themes/tp_theme/css/vendor-microsoft-" . $lang . ".css"]);
		}
	}
	// var_dump($css);
	// exit();
}


function generateCalendar($sDay,$eDay,$sMonth,$eMonth,$sYear,$eYear){
	$sDay*=1;
	$eDay*=1;
	$startOfMOnth = new DateTime("01 $sMonth $sYear");
	$firstDayOfWeek=$startOfMOnth->format('w');
	$numberOfDays = $startOfMOnth->format('t');
	// error_log($firstDayOfWeek." ".$numberOfDays ." -> $sDay,$eDay,$sMonth,$eMonth,$sYear,$eYear");
	$buffer ="<table class='calendar-widget'>";
	$buffer .="<thead><tr><td id='calendar-prev'><img src='/sites/all/themes/tp_theme/images/arrow-grey-left.png'/></td><td id='calendar-label' colspan='5'>$sMonth $sYear</td><td id='calendar-next'><img src='/sites/all/themes/tp_theme/images/arrow-grey-right.png'/></td></tr></thead>\n";
	$buffer .="<tbody><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";
	$buffer .="<tr>\n";
	$rows=1;
	$DayOfWeek=0;
	// add empty days to start of calendar
	for ($index=0;$index<$firstDayOfWeek;$index++){
		$DayOfWeek++;
		$buffer .="<td>&nbsp;</td>";
	}
	for ($index=1;$index<=$numberOfDays;$index++){
		$DayOfWeek++;
		if($DayOfWeek==8){
			$DayOfWeek = 1;
			$buffer .="</tr>\n<tr>";
			$rows++;
		}
		$class='';
		// error_log("($sDay<=$index && $eDay>=$index)");
		if($sDay<=$index && $eDay>=$index){
			$class='active';
		}
		$buffer .="<td class='$class'>$index</td>";
	}
	// add spacing to end of calendar
	for ($index=1;$index<=7-$DayOfWeek;$index++){
		$buffer .="<td>&nbsp;</td>";
	}
	if($rows<6){
		for ($index=$rows;$index<6;$index++){
			$buffer .="<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
		}
	}
	$buffer .= "</tr></tbody></table>";

	// error_log($buffer);
	return $buffer;
}
