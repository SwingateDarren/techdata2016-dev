<div class="panel-pane pane-block pane-block-11 pane-block hot-picks" data-edit-via-template-file='1'>
	<h2 class="pane-title">Hot picks</h2>
	<div class="row">
		<?php
		$today = new DateTime();
		// var_dump($today);
		$query = new EntityFieldQuery();
		$query->entityCondition('entity_type', 'node')
			->entityCondition('bundle', ['event'], 'IN')
			->propertyCondition('status', NODE_PUBLISHED)
			->fieldCondition('field_event_date','value', $today->format("Y-m-d"),">")
			->fieldOrderBy('field_event_date', 'value', 'DESC')
			// ->addTag('random')
			->range(0, 1);

			// $testDate = new DateTime();
			// $testDate->setTimestamp(strtotime($today->format("Y-m-d")));

		 // print "<pre>[". $today->format("d/m/Y")." => ".strtotime($today->format("Y-m-d")) ." => ". $testDate->format("d/M/Y")."]";
		// var_dump($query);
		// print "</pre>";
		$result = $query->execute();
		if (isset($result['node'])) {
			$items_nids = array_keys($result['node']);
		}
		$items = entity_load('node', $items_nids);
		foreach($items as $index => $record){
			// print_r($record);
			// print "</pre>";
			// $day = "";
			$month = "";
			$eventDate = tp_fetch($record->field_event_date);
  			// var_dump($record);
	  		if($eventDate==""){
	  				// print "TBA";
		  	} else {
	  			$eventDate = new Datetime($eventDate,new DateTimeZone(tp_fetch($record->field_event_date,"timezone")));
	  			$day = $eventDate->format("d");
	  			$month = $eventDate->format("M");
	  		}
			$imageUrl = tp_fetch($record->field_image,"uri",'');
			if($imageUrl!==''){
				$imageUrl = file_create_url($imageUrl);
			}
		?>
			<div class="row-panel-object row-panel-object--event">
				<a href="<?php echo tp_fetch($record->field_url); ?>">
					<div class='type'>Event</div>
					<div class='wrapper'>
						<div class="image">
							<div class='day'><?php echo $day;?></div>
							<div class='month'><?php echo strtoupper($month);?></div>
						</div>
						<div class="content">
							<div class="content--wrapper">
								<div class='title'><?php echo $record->title ;?></div>
								<div class='link'>Learn more</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		<?php
		}
		?>

	</div>
	<div class="row">
		<?php
		$query = new EntityFieldQuery();
		$query->entityCondition('entity_type', 'node')
			->entityCondition('bundle', ['resource'], 'IN')
			->propertyCondition('status', NODE_PUBLISHED)
			// ->fieldCondition('field_display_location', 'tid', $tp_field_location, '=')
			->range(0, 1)
			->addTag('random');

		$result = $query->execute();
		if (isset($result['node'])) {
			$items_nids = array_keys($result['node']);
		}
		$items = entity_load('node', $items_nids);
		foreach($items as $index => $record){
			$imageUrl = tp_fetch($record->field_image,"uri",'');
			if($imageUrl!==''){
				$imageUrl = file_create_url($imageUrl);
			}
			$typeLabel = "";
			$typeID = tp_fetch($record->field_resource_type,"tid",'-1');
			if($typeID!=='-1'){
				$term = taxonomy_term_load($typeID);
				$typeLabel = $term->name;
			}
		?>
			<div class="row-panel-object row-panel-object--resource">
				<a href="<?php echo tp_fetch($record->field_url); ?>">
					<div class='type'><?php echo $typeLabel; ?></div>
					<div class='wrapper'>
						<div class="image">
							<div class="bgimg" style="background:url(<?php echo $imageUrl; ?>) 50% 50%/cover no-repeat;"></div>
						</div>
						<div class="content">
							<div class="content--wrapper">
							<div class='title'><?php
							if(strlen($record->title)>80){
								echo substr($record->title,0,80), "..." ;
							} else {
								echo $record->title;
							}
							?></div></div>
						</div>
					</div>
				</a>
			</div>
		<?php
		}
		?>
	</div>
	<div class="row">
		<?php
		$dataSet = Array();
		$dataSet[count($dataSet)] = Array("title"=>"IBM", "url"=>"/vendors/ibm/why-td-for-ibm", "image"=>"/sites/default/files/vendors/ibm/ibm.png");
		$dataSet[count($dataSet)] = Array("title"=>"MICROSOFT", "url"=>"/vendors/microsoft/why-td-for-ms", "image"=>"/sites/default/files/text_images/microsoft-boxed.png");
		$dataSet[count($dataSet)] = Array("title"=>"CISCO", "url"=>"/vendors/cisco/why-azlan-for-cisco", "image"=>"/sites/default/files/text_images/cisco-distribution-partner-200x200.png");
		$dataSet[count($dataSet)] = Array("title"=>"HPE", "url"=>"/vendors/hpe/why-us", "image"=>"/sites/default/files/vendors/hpe/hpe.png");
		$dataSet[count($dataSet)] = Array("title"=>"MOTOROLA", "url"=>"/vendors/motorola/why-motorola", "image"=>"/sites/all/themes/tp_theme/images/moto-color-logo-124x124.png");
		$randomIndex = rand(0,count($dataSet)-1);
		?>
		<div class="row-panel-object row-panel-object--vendor">
			<a href="<?php echo $dataSet[$randomIndex]["url"]; ?>">
				<div class='type'>Vendor Spotlight</div>
				<div class='wrapper'>
					<div class="image">
						<div class="bgimg" style="background:url(<?php echo $dataSet[$randomIndex]["image"]; ?>) 50% 50%/contain no-repeat;"></div>
					</div>
					<div class="content">
						<div class="content--wrapper">
							<div class='title'>Why Tech Data for <?php echo $dataSet[$randomIndex]["title"] ;?></div>
							<div class='link'>Learn more</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>
<?php
		