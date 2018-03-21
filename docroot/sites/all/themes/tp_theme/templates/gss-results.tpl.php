<?php

/**
 * @file search-results.tpl.php
 * Default theme implementation for displaying search results.
 *
 * This template collects each invocation of theme_gss_result(). This and
 * the child template are dependant to one another sharing the markup for
 * definition lists.
 *
 * Note that modules may implement their own search type and theme function
 * completely bypassing this template.
 *
 * Available variables:
 * - $search_results: All results as it is rendered through
 *   search-result.tpl.php
 *
 * @see template_preprocess_gss_results()
 */
?>
<div class='results-container'>
<?php if ($search_results): ?>
  <h2><?php print t('Search results');?></h2>
  <ol class="search-results <?php print $module;?>-results">
    <?php print $search_results;?>
  </ol>
  <?php print $pager;?>
<?php else: ?>
  <h2><?php print t('Your search yielded no results');?></h2>
<?php endif;?>
</div>
