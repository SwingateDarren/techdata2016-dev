<?php
/**
 * @file
 * Returns the HTML for the basic html structure of a single Drupal page.
 */
?><!DOCTYPE html>
<!--[if IEMobile 7]><html class="iem7" <?php print $html_attributes;?>><![endif]-->
<!--[if lte IE 6]><html class="lt-ie9 lt-ie8 lt-ie7" <?php print $html_attributes;?>><![endif]-->
<!--[if (IE 7)&(!IEMobile)]><html class="lt-ie9 lt-ie8" <?php print $html_attributes;?>><![endif]-->
<!--[if IE 8]><html class="lt-ie9" <?php print $html_attributes;?>><![endif]-->
<!--[if IE 9]><html class="lt-ie10" <?php print $html_attributes;?>><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!--><html <?php print $html_attributes . $rdf_namespaces;?>><!--<![endif]-->

<head>
  <?php print $head;?>
  <title><?php print $head_title;?></title>

  <?php if ($default_mobile_metatags): ?>
    <meta name="MobileOptimized" content="width">
    <meta name="HandheldFriendly" content="true">
    <meta name="viewport" content="width=device-width">
  <?php endif;?>
  <meta http-equiv="cleartype" content="on">

  <?php print $styles;?>
  <script>
  var GeoCountry = "<?php echo (isset($_SESSION) && isset($_SESSION['CountryCode'])) ? $_SESSION['CountryCode'] : ''; ?>";
  </script>
  <?php print $scripts;?>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-MNPQ26X');</script>
  <!-- End Google Tag Manager -->

</head>
<body class="<?php print $classes;?>" <?php print $attributes;?>>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MNPQ26X"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <?php if ($skip_link_text && $skip_link_anchor): ?>
      <a href="#<?php print $skip_link_anchor;?>" class="element-invisible element-focusable"><?php print $skip_link_text;?></a>
  <?php endif;?>
  <?php print $page_top;?>
  <?php print $page;?>
  <?php print $page_bottom;?>
  <div class="privacy-panel">
    <div class="wrapper">
      <a target="_blank" href='http://www.techdata.co.uk/Pages/Start.aspx?TemplateID=3&AsClass=&Vendor=&MenuId=3231&ParentMenuId=3230&corpregionid=14&Culture=en-GB&REDIR=1'>Tech Data Privacy Policy</a>
    </div>
  </div>
</body>
</html>
