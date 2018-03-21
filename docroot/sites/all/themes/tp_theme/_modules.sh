#!/bin/bash
#
echo "Downloading TP Boilerplate modules..."

# Define our module sets.
std_modules="adminimal_admin_menu admin_views aet bean better_exposed_filters betterlogin block_class blockgroup blockreference ctools
 clientside_validation content_access context context_condition_admin_theme context_mobile_detect context_query_param context_redirect
 custom_search customerror date devel ds entity entityreference eu_cookie_compliance features field_group fapi_validation hubspot
 image imagecache_actions imce imce_filefield imce_mkdir imce_wysiwyg jquery_update libraries link mailsystem match_redirect menu_attributes
 menu_minipanels metatag mimemail module_filter mollom multiple_selects node_authored_select pager_for_content_type panels
 panels_extra_layouts pathauto plupload redirect regionclass retina_images robotstxt rules search_config seckit select_or_other serial simplenews
 site_verify special_menu_items taxonomy_manager token twitter view_profiles_perms viewreference views webform wysiwyg
 xmlsitemap fast_404 memcache username_enumeration_prevention password_policy"
#oauth
std_modules_en="ctools adminimal_admin_menu admin_views aet bean better_exposed_filters betterlogin block_class blockgroup blockreference
 clientside_validation content_access context context_condition_admin_theme context_mobile_detect context_query_param context_redirect
 custom_search customerror date devel ds entity entityreference eu_cookie_compliance features field_group fapi_validation hubspot
 image imagecache_actions imce imce_filefield imce_mkdir imce_wysiwyg jquery_update libraries link mailsystem match_redirect menu_attributes
 menu_minipanels metatag mimemail module_filter mollom multiple_selects node_authored_select pager_for_content_type panels
 panels_extra_layouts pathauto plupload redirect regionclass retina_images robotstxt rules search_config seckit select_or_other serial simplenews
 site_verify special_menu_items taxonomy_manager token twitter view_profiles_perms viewreference views webform wysiwyg xmlsitemap fast_404"
#oauth
lang_modules="i18n_block translation i18n locale i18n_menu i18n_path i18n_string i18n_translation username_enumeration_prevention password_policy"

angular_modules="angularjs views_json"

# Download the modules.
#
# Check our arguments.
while test $# -gt 0
do
  case "$1" in
  	--std) echo "Installing Standard modules...."
           drush dl $std_modules --yes
           echo "Enabling Standard Modules..."
           drush en $std_modules_en --yes
           ;;
   --std-uninstall)
           echo "Disabling Standard Modules..."
           drush dis $std_modules_en --yes
           echo "UN-Installing Standard modules...."
           drush pm-uninstall $std_modules --yes
           ;;
    --lang) echo "Installing Language modules..."
		# Language install cmd
  ;;
    --angular) echo "Installing AngularJS modules...."
		# Angular install cmd
  ;;
    --*) echo "Module set not configured."
  ;;
    *) echo "$1 is an invalid argument."
  ;;
  esac
  shift
done

#echo "Enabling TP Boilerplate modules..."
