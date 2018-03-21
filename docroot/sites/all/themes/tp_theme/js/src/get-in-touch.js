/**
 * @file
 * The main JS project file for the theme.
 */
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_get_in_touch = {
		attach: function(context, settings) {
			// todo
			$(window).scroll(function() {

			});

			// $(document).ready(function() {
			$('.getintouch').click(function() {
				var footer = document.getElementById('footer');
				$('html,body').animate({
					scrollTop: $(footer).offset().top - 140
				}, 900, 'swing');

			});

			// hide edit options on large desktops (< 1200 show) else make visible when ctrl is held
			if ($(document).width() >= 1200) {
				$(document).on("keyup", function(eventobject) {
					if (eventobject.which === 16) {
						$('body').toggleClass('showEditOptions');
					}
				});
			} else {
				$('body').addClass('showEditOptions');
			}
			$("#edit-search-block-form--2").attr('placeholder','Search');
			// });
			// $("a").each(function(){
			// 	if(this.href.indexOf("http://content.techdata.co.uk/")!==-1){
			// 		this.href= this.href.split("content.techdata.co.uk").join("techdata-co-uk-2628398.hs-sites.com");
			// 	}
			// });
			if(false && window.location.href.indexOf('contact-us')>-1){
				var oldURL = document.referrer;
				var vendors = [];
				vendors[vendors.length] = {
					vendor: "Microsoft",
					regexRules : {
						'vendors/microsoft/why-td-for-ms/solution/emm' : "EM+S",
						'vendors/microsoft/why-td-for-ms/solution/public-sector' : "Public Sector",
						'vendors/microsoft/why-td-for-ms/solution/csp' : "CSP",
						'microsoft':""
					}
				};


				vendors[vendors.length] = {
					vendor: "Oracle",
					regexRules :{
						"oracle":""
					}
				};
				vendors[vendors.length] = {
					vendor: "IBM",
					regexRules :{
						"vendors/ibm/why-td-for-ibm/solution/blockchain":"Blockchain",
						"vendors/ibm/why-td-for-ibm/solution/watson":"Watson",
						"vendors/ibm/why-td-for-ibm/solution/software-defined-storage":"Software Defined Storage",
						"vendors/ibm/why-td-for-ibm/products/storage":"Storage",
						"vendors/ibm/why-td-for-ibm/products/power-systems":"Power Systems",
						"vendors/ibm/why-td-for-ibm/products/hpc":"HPC",
						"vendors/ibm/why-td-for-ibm/products/software":"Software",
						"vendors/ibm/why-td-for-ibm/products/maintenance":"Maintenance",
						"vendors/ibm/why-td-for-ibm/products/finance":"Finance",
						"vendors/ibm/why-td-for-ibm/products/spectrum-virtualize":"Spectrum Virtualize",
						"vendors/ibm/why-td-for-ibm/products/spectrum-control":"Spectrum Control",
						"vendors/ibm/why-td-for-ibm/products/cloud-object-storage":"Cloud Object Storage",
						"ibm":""
					}
				};
				vendors[vendors.length] = {
					vendor: "Cisco",
					regexRules :{
						"vendors/cisco/compute":"Compute",
						"vendors/cisco/cisco-one-for-data":"Cisco One for Data",
						"vendors/cisco/routers":"Routers",
						"vendors/cisco/switches":"Switches",
						"vendors/cisco/wireless":"Wireless",
						"vendors/cisco/sdn":"SDN",
						"Cisco":""
					}
				};
				vendors[vendors.length] = {
					vendor: "VMware",
					regexRules :{
						"vendors/vmware/airwatch":"AirWatch",
						"vendors/vmware/workspace-one":"Workspace ONE",
						"vendors/vmware/nsx":"NSX",
						"vendors/vmware/vsan":"vSan",
						"vendors/vmware/vsphere-with-operations-management":"Vsphere with Operations Management",
						"vendors/vmware/vrealize-automation":"vRealize Automation",
						"vendors/vmware/horizon":"Horizon",
						"vendors/vmware/vrealize-operations":"vRealize Operations",
						"vmware":""
					}
				};
				vendors[vendors.length] = {
					vendor: "HPE",
					regexRules :{
						"vendors/hpe/products/oneview":"Products - OneView",
						"vendors/hpe/products/oneview-for-vmware":"Products - OneView for VMWare",
						"vendors/hpe/products/3par":"Products - 3par",
						"vendors/hpe/products/synergy":"Products - Synergy",
						"vendors/hpe/products/hyper-converged":"Products - Hyper Converged",
						"vendors/hpe/products/store-virtual-vsa":"Products - Store Virtual VSA",
						"hpe":""
					}
				};
				vendors[vendors.length] = {
					vendor: "BlackBerry",
					regexRules :{
						"vendors/blackberry/product":"BlackBerry Secure Suite 2016",
						"blackberry":""
					}
				};
				vendors[vendors.length] = {
					vendor: "Citrix",
					regexRules :{
						"vendors/citrix/product":"XenMobile",
						"citrix":""
					}
				};
				var found = false;
				var vendorLabel = "";
				var vendorSolution = "";
				for (var index =0 ; index < vendors.length ; index++ ){
					for (var rule in vendors[index].regexRules ){
						if(!found && oldURL.indexOf(rule)>-1){
							found = true;
							vendorLabel = vendors[index].vendor ;
							vendorSolution = vendors[index].regexRules[rule] ;
						}
					}
				}
				$("input[name='submitted[vendor]']").val(vendorLabel);
				$("input[name='submitted[solution]']").val(vendorSolution);
			}
		}
	};
})(jQuery, Drupal, this, this.document);