<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>
<div id="page" class="top">
  <header class="header" id="header">

    <?php print render($page['header']);?>
      
<?php
// Render the sidebars to see if there's anything in them.
$sidebar_first = render($page['sidebar_first']);
$sidebar_second = render($page['sidebar_second']);

?>
  </header>
  <div class="page-body clear-head">
    <?php print render($page['pre_content']);?>
    <div id="main">
      <?php if ($sidebar_first ): ?>
        <aside class="sidebars sidebar-first">
          <?php print $sidebar_first;?>
        </aside>
      <?php endif;?>
      <div class="column content" role="main">
        <?php print render($page['highlighted']);?>
        <?php print render($title_suffix);?>
        <?php print render($tabs);?>
        <?php print render($page['help']);?>
        <?php if ($action_links): ?>
          <ul class="action-links"><?php print render($action_links);?></ul>
        <?php endif;?>
        <?php print render($page['content']);?>
        <?php //print $feed_icons;?>
      </div>
      <?php if ($sidebar_second): ?>
        <aside class="sidebars sidebar-second">
          <?php print $sidebar_second;?>
        </aside>
      <?php endif;?>
    </div>
    <?php print render($page['post_content']);?>
    <?php print render($page['footer']);?>


    <div class="videoplayerwidget"></div>
    <?php
global $language;
global $conf;
?>
  </div>
</div>
<div id='euCompliance'></div>
<?php print render($page['bottom']);?>
<?php if ($messages): ?>
<div class="drupal-messages">
  <?php print $messages;?>
</div>
<?php endif;?>
<?php
// if (isset($conf['analytics']) && isset($conf['analytics'][$language->language])) {
	?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-108250720-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-108250720-1');
</script>

<?php 
//}
?>