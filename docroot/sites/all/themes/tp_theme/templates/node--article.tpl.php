<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>

<article class="node-<?php echo $node->nid, ' ', (isset($node->field_css)?tp_fetch($node->field_css):''), ' ', $classes; ?> clearfix"<?php print $attributes;?>>
  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix);?>
      <?php if (!$page && $title): ?>
        <h2<?php print $title_attributes;?>>
          <a href="<?php print $node_url;?>"><?php print $title;?></a>
        </h2>
      <?php endif;?>
      <?php print render($title_suffix);?>
      <?php if ($display_submitted): ?>
        <?php print $user_picture;?>
        <p class="submitted">
          <?php print $submitted;?>
        </p>
      <?php endif;?>
      <?php if ($unpublished): ?>
        <mark class="unpublished"><?php print t('Unpublished');?></mark>
      <?php endif;?>
    </header>
  <?php endif;?>
  <div class="node-content-container">
    <?php
// We hide the comments and links now so that we can render them later.
hide($content['comments']);
hide($content['links']);
hide($content['field_css']);

print render($content);

?>
    <?php // print render($content['links']);?>
    <?php // print render($content['comments']);?>
  </div>
</article>
