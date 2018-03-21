/**
* @file
* The main JS project file for the theme.
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.clickablecolumns = {
		attach: function(context, settings) {
			$(".clickable").each(function(){
				var links = $("a", this);
				if(links.length === 1){
					$(this).click(function(){
						window.location.href = $(links[0]).attr("href");
					});
				}
			});
		}
	};
})(jQuery, Drupal, this, this.document);

/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.cookieEUCompliance = {
		attach: function(context, settings) {
			var euCompliance = $('#euCompliance');
			var statement = [];
			var englishStatement= {
				Request : "We use cookies on this site to enhance your user experience. By clicking any link on this page you are giving your consent for us to set cookies.",
				Confirm : "Thankyou, You can now hide this message or find out more about cookies.",
				PrivacyTxt : "Privacy Policy",
				PrivacyURI : "http://www.techdata.co.uk/Pages/Start.aspx?TemplateID=3&AsClass=&Vendor=&MenuId=3231&ParentMenuId=3230&corpregionid=14&Culture=en-GB&REDIR=1",
				Domain: ".techdata.com",
				okBtnTxt  : "OK"
			};
			var englishStatementTest= {
				Request : "We use cookies on this site to enhance your user experience. By clicking any link on this page you are giving your consent for us to set cookies.",
				Confirm : "Thankyou, You can now hide this message or find out more about cookies.",
				PrivacyTxt : "Privacy Policy",
				PrivacyURI : "http://www.techdata.co.uk/Pages/Start.aspx?TemplateID=3&AsClass=&Vendor=&MenuId=3231&ParentMenuId=3230&corpregionid=14&Culture=en-GB&REDIR=1",
				Domain: ".tp-demo.co.uk",
				okBtnTxt  : "OK"
			};
			var englishStatementDev= {
				Request : "We use cookies on this site to enhance your user experience. By clicking any link on this page you are giving your consent for us to set cookies.",
				Confirm : "Thankyou, You can now hide this message or find out more about cookies.",
				PrivacyTxt : "Privacy Policy",
				PrivacyURI : "http://www.techdata.co.uk/Pages/Start.aspx?TemplateID=3&AsClass=&Vendor=&MenuId=3231&ParentMenuId=3230&corpregionid=14&Culture=en-GB&REDIR=1",
				Domain: ".devcloud.acquia-sites.com",
				okBtnTxt  : "OK"
			};

			statement['www.techdata.com'] = englishStatement;
			statement['techdata.com'] = englishStatement;
			statement['techdata2016tdmmpmcfc8.devcloud.acquia-sites.com'] = englishStatementDev;
			statement['en-gb.techdata-local.tp-demo.co.uk'] = englishStatementTest;
			statement['en-gb.techdata-dev.tp-demo.co.uk'] = englishStatementTest;
			statement['en-gb.techdata-staging.tp-demo.co.uk'] = englishStatementTest;
			$('#euCompliance').hide();
			if(euCompliance.length>0 && document.cookie.indexOf('euCompliance=1')===-1){
				if(statement[window.location.host]){
					$('#euCompliance').html('<div class="wrapper"><div class="message">'+statement[window.location.host].Request + ' <a target="_blank" href="'+statement[window.location.host].PrivacyURI + '">'+statement[window.location.host].PrivacyTxt + '</a> <button class="euCookieOkBtn">'+statement[window.location.host].okBtnTxt+'</button></div></div>').show();
					$('#euCompliance').show();
					$(".euCookieOkBtn").click(function(){
						var d = new Date();
					    d.setTime(d.getTime() + (365*86400000));
					    var expires = "expires="+ d.toUTCString();
					    // console.log("euCompliance=1; " + expires+ ";domain="+statement[window.location.host].Domain+";path=/");
					    document.cookie = "euCompliance=1; " + expires+ ";domain="+statement[window.location.host].Domain+";path=/";
					    $('#euCompliance').hide();
					});
				}
			}
			
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.flexslider = {
		attach: function(context, settings) {
			var $window = $(window),
      		flexslider = { vars:{} };
			function getGridSize() {
				console.log(window.innerWidth);
				return (window.innerWidth < 600) ? 1 : (window.innerWidth < 1000) ? 2 : 3;
			}
			$('.flexslider').each(function(){
				if($(".submenu",this)){
					$(this).flexslider({
						slideshowSpeed: 15000,
						// itemWidth: 1200,
						// itemMargin: 0,
						// animation: 'slide',
						// animationLoop: true,
					});
					$(this).flexslider("stop");
				} else if($(".item",this)){
					$(this).flexslider({
						slideshowSpeed: 15000,
						itemWidth: 350,
						// itemMargin: 0,
						// animation: 'slide',
						// animationLoop: true,
					});
					$(this).flexslider("stop");
				} else {
					if(this.className.indexOf('disabled') === -1){
						$(this).flexslider({
							slideshowSpeed: 15000,
							// itemWidth: 1200,
							// itemMargin: 0,
							// animation: 'slide',
							// animationLoop: true,
						});
					}
				}
			});
			$('.flexsliderlist1').flexslider({
				slideshowSpeed: 15000,
			    animation: "slide",
				animationLoop: true,
			    itemWidth: 390,
			    itemMargin: 20,
			    minItems: getGridSize(),
			    maxItems: getGridSize(),
			}).each(function(){
				$window.resize(function() {
				    var gridSize = getGridSize();
				 
				    flexslider.vars.minItems = gridSize;
				    flexslider.vars.maxItems = gridSize;
				});

			});
			$('.flexsliderlist').flexslider({
				slideshowSpeed: 15000,
				itemWidth: 300,
				itemMargin: 0,
				animation: 'slide',
				animationLoop: true,
			});
			$(".submenu .flex-menu-nav li").click(function(){
				$(this.parentNode.parentNode.parentNode).flexslider($(this).attr('data-index')*1);
				$(".submenu .flex-menu-nav li a").removeClass('active');
				$("a",this).addClass('active');
			});
			 
		}
	};
})(jQuery, Drupal, this, this.document);
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
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_blog_filter_change = {
		attach: function(context, settings) {
			$(".form-item-field-solution-tid option:nth-child(1)").html("Solutions");
			$(".form-item-field-content-level-tid option:nth-child(1)").html("Level");
			$(".form-item-field-blog-post-type-tid option:nth-child(1)").html("Type");
			$(".form-item-field-resource-type-tid option:nth-child(1)").html("Type");
			$(".form-item-field-vendor-tid option:nth-child(1)").html("Vendor");
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.js_bloglist = {
		attach: function(context, settings) {
			// your code goes here
			if(window.location.href.indexOf("blog") !== -1 || window.location.href.indexOf("resources") !== -1 || window.location.href.indexOf("search") !== -1){
				var buffer = "";
				var foundPrev = false;
				var foundNext = false;
				var counter=0;
				// console.log("running");
				// console.log($(".item-list .page .pages"));
				$(".item-list .page .pages").remove();
				$("#edit-submit-blog-listing").click(function(){
					$(".item-list .page .pages").html("");
				});
				$(".item-list .pager li").each(function(){
					
					if(this.className.indexOf("pages")!==-1 || this.className.indexOf("pager-first")!==-1 || this.className.indexOf("pager-last")!==-1){
						var x=x*2; // do nothing jslint
					} else {
						if(!foundPrev && this.className.indexOf("pager-previous")!==-1){
							foundPrev = true;
						} else if(!foundNext&& this.className.indexOf("pager-next")!==-1){
							foundNext = true;
						} else {
							counter++;
							buffer += this.outerHTML;
						}

					}
					
				});
				// console.log(buffer);
				if(foundPrev === false){
					buffer = "<li class='pager-previous'>PREVIOUS PAGE</li><li class='pages'><ul class='showing_"+counter+"'>" + buffer;
				} else {
					buffer = "<li class='pager-previous'>"+$(".item-list .pager li.pager-previous").html()+"</li><li class='pages'><ul class='showing_"+counter+"'>" + buffer;
				}
				if(foundNext === false){
					buffer += "</ul></li><li class='pager-next'>NEXT PAGE</li>";
				} else {
					buffer += "</ul></li><li class='pager-next'>" +$(".item-list .pager li.pager-next").html()+"</li>";
				}
				$(".item-list .pager").html(buffer);
			}
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.js_homepage_filter_menu = {
		attach: function(context, settings) {
				$(".homepage .region-pre-content .rank-1 .content ul li").click(function(){
					window.location.href = $("a", this).attr("href");
				});
				if(window.location.href.indexOf("filter=")!==-1){
					var filterId = window.location.href.split("filter=")[1];
					var found = false;
					$(".homepage .region-pre-content .rank-1 .content ul li").each(function(){
						var linkId = $("a", this).attr("href").split("filter=")[1];
						if(filterId === linkId){
							$(this).addClass("active");
							found = true;
						}
					});
					// if(!found){
					// 	$($(".homepage .region-pre-content .rank-1 .content ul li").get(0)).addClass("active");
					// }
				} 
				// else {
				// 	console.log("no filter");
				// 	$($(".homepage .region-pre-content .rank-1 .content ul li").get(0)).addClass("active");
				// }
			
		}
	};
})(jQuery, Drupal, this, this.document);
/**
 * @file
 * An tempalte for creating new code blocks from
 */
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_ineedto = {
		attach: function(context, settings) {
			if (window.location.href.indexOf('i-need-to') !== -1) {
				var options ="";
				var dataSet = [
					{url: "/i-need-to/manage-mobile-applications#section-131", label: "Manage mobile apps" },
					{url: "/i-need-to/manage-mobile-applications#section-146", label: "Manage data access and compliance" },
					{url: "/i-need-to/manage-mobile-applications#section-156", label: "Manage mobile workforces" },
					{url: "/i-need-to/manage-mobile-applications#section-151", label: "Manage mobile applications across multiple devices and platforms" },
					{url: "/i-need-to/manage-mobile-applications#section-161", label: "Secure mobile apps" },

					{url: "/i-need-to/manage-mobile-access-to-content#section-276", label: "Manage mobile content" },
					{url: "/i-need-to/manage-mobile-access-to-content#section-281", label: "Provide offline access to mobile content" },
					{url: "/i-need-to/manage-mobile-access-to-content#section-296", label: "Secure mobile content" },

					{url: "/i-need-to/manage-mobile-devices#section-246", label: "Manage mobile devices" },
					{url: "/i-need-to/manage-mobile-devices#section-246", label: "Manage bring your own device practices" },
					{url: "/i-need-to/manage-mobile-devices#section-256", label: "Manage corporate devices" },
					{url: "/i-need-to/manage-mobile-devices#section-261", label: "Support multiple operating systems" },
					{url: "/i-need-to/manage-mobile-devices#section-266", label: "Secure mobile devices" },

					{url: "/i-need-to/identify-the-right-emm-infrastructure#section-76", label: "Identify the right enterprise mobility management (EMM) infrastructure" },
					{url: "/i-need-to/identify-the-right-emm-infrastructure#section-86", label: "Learn about Tech Data Cloud" },

					{url: "/i-need-to/drive-business-value#section-26", label: "Drive business value" },
					{url: "/i-need-to/drive-business-value#section-31", label: "Increase productivity" },
					{url: "/i-need-to/drive-business-value#section-41", label: "Improve employee satisfaction" },

					{url: "/i-need-to/create-a-software-defined-network#section-2506", label: "Create software-defined networks for your customers" },
					{url: "/i-need-to/create-a-software-defined-network#section-2506", label: "What is driving your customers to ask about software-defined networking (SDN)?"},
					{url: "/i-need-to/create-a-software-defined-network#section-2511", label: "I need to improve my current network infrastructure"},
					{url: "/i-need-to/create-a-software-defined-network#section-2516", label: "I need to reduce operational costs"},
					{url: "/i-need-to/create-a-software-defined-network#section-2521", label: "I need to speed up the provisioning of network services"},
					{url: "/i-need-to/create-a-software-defined-network#section-2526", label: "I need to program applications directly to network resources"},
					{url: "/i-need-to/create-a-software-defined-network#section-2531", label: "I need to tighten my network's security in line with GDPR"},

					{url: "/i-need-to/create-a-software-defined-storage-environment#section-2596", label: "Give your customers more freedom with software-defined storage"},
					{url: "/i-need-to/create-a-software-defined-storage-environment#section-2596", label: "What is driving your customers to ask about software-defined storage (SDS)?"},
					{url: "/i-need-to/create-a-software-defined-storage-environment#section-2606", label: "I need to increase the availability of my machines"},
					{url: "/i-need-to/create-a-software-defined-storage-environment#section-2666", label: "I need to add more performance to already existing environments"},
					{url: "/i-need-to/create-a-software-defined-storage-environment#section-2671", label: "I need to move away from my legacy models towards the cloud"},
					{url: "/i-need-to/create-a-software-defined-storage-environment#section-2676", label: "I need to more easily manage multiple environments and deployments"},
					{url: "/i-need-to/create-a-software-defined-storage-environment#section-2681", label: "I need to scale my business up and down"},

					{url: "/i-need-to/create-virtualised-servers#section-2591", label: "Eliminate the constraints of physical hardware for your customers."},
					{url: "/i-need-to/create-virtualised-servers#section-2591", label: "What is driving your customers to ask about server virtualisation?"},
					{url: "/i-need-to/create-virtualised-servers#section-2611", label: "I need to reduce hardware vendor lock-in"},
					{url: "/i-need-to/create-virtualised-servers#section-2711", label: "I need to speed up server provisioning"},
					{url: "/i-need-to/create-virtualised-servers#section-2716", label: "I need to extend the life of legacy applications"},
					{url: "/i-need-to/create-virtualised-servers#section-2721", label: "I need to take the first step to the private cloud"},
					{url: "/i-need-to/create-virtualised-servers#section-2726", label: "I need to increase application uptime"},

					{url: "/i-need-to/create-a-hyper-converged-infrastructure#section-2586", label: "Bring together all the important IT trends for your customers."},
					{url: "/i-need-to/create-a-hyper-converged-infrastructure#section-2586", label: "What is driving your customers to ask about hyperconvergence?"},
					{url: "/i-need-to/create-a-hyper-converged-infrastructure#section-2601", label: "I need to reduce the number of suppliers in my data centre"},
					{url: "/i-need-to/create-a-hyper-converged-infrastructure#section-2621", label: "I need to scale out my resource to meet business demands"},
					{url: "/i-need-to/create-a-hyper-converged-infrastructure#section-2626", label: "I need to achieve predictable scalability"},
					{url: "/i-need-to/create-a-hyper-converged-infrastructure#section-2631", label: "I need to protect data at all times"}
				];
				dataSet.sort(function(a,b){
					return a.label <= b.label? -1:1;
				});
				for(var index=0; index< dataSet.length;index++){
					options += "<option value='"+dataSet[index].url+"'>"+dataSet[index].label+"</option>";
				}
				
				$(".flexslider.banner .flex-active-slide .wrapper .content .text").append('<div id="questions"><form><select id="combobox"><option value="">Select one...</option>'+options+'</select></form></div>');
				$.widget("custom.combobox", {
					_create: function() {
						this.wrapper = $("<span>")
							.addClass("custom-combobox")
							.insertAfter(this.element);

						this.element.hide();
						this._createAutocomplete();
						// this._createShowAllButton();
					},

					_createAutocomplete: function() {
						var selected = this.element.children(":selected"),
							value = selected.val() ? selected.text() : "";

						this.input = $("<input>")
							.appendTo(this.wrapper)
							.val(value)
							.attr("title", "")
							.attr("placeholder", "")
							.addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default")
							.autocomplete({
								delay: 0,
								minLength: 0,
								source: $.proxy(this, "_source")
							})
							.tooltip({
								classes: {
									"ui-tooltip": "ui-state-highlight"
								}
							});

						this._on(this.input, {
							autocompleteselect: function(event, ui) {
								ui.item.option.selected = true;
								// console.log(event);
								// console.log(ui.item.option.value);
								window.location.href = ui.item.option.value;
								// this._trigger("select", event, {
								// 	item: ui.item.option
								// });
							},

							autocompletechange: "_removeIfInvalid"
						});
					},
					
					_createShowAllButton: function() {
						/* 
						var input = this.input,
							wasOpen = false;

						$("<a>")
							.attr("tabIndex", -1)
							.attr("title", "Show All Items")
							.tooltip()
							.appendTo(this.wrapper)
							.button({
								icons: {
									primary: "ui-icon-triangle-1-s"
								},
								text: false
							})
							.removeClass("ui-corner-all")
							.addClass("custom-combobox-toggle ui-corner-right")
							.on("mousedown", function() {
								wasOpen = input.autocomplete("widget").is(":visible");
							})
							.on("click", function() {
								input.trigger("focus");

								// Close if already visible
								if (wasOpen) {
									return;
								}

								// Pass empty string as value to search for, displaying all results
								input.autocomplete("search", "");
							});
							/* */
					},

					_source: function(request, response) {
						var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
						response(this.element.children("option").map(function() {
							var text = $(this).text();
							if (this.value && (!request.term || matcher.test(text))) {
								return {
									label: text,
									value: text,
									option: this
								};
							}
						}));
					},

					_removeIfInvalid: function(event, ui) {

						// Selected an item, nothing to do
						if (ui.item) {
							return;
						}

						// Search for a match (case-insensitive)
						var value = this.input.val(),
							valueLowerCase = value.toLowerCase(),
							valid = false;
						this.element.children("option").each(function() {
							if ($(this).text().toLowerCase() === valueLowerCase) {
								this.selected = valid = true;
								return false;
							}
						});

						// Found a match, nothing to do
						if (valid) {
							return;
						}

						// Remove invalid value
						this.input
							.val("")
							.attr("title", value + " didn't match any item")
							.tooltip("open");
						this.element.val("");
						this._delay(function() {
							this.input.tooltip("close").attr("title", "");
						}, 2500);
						this.input.autocomplete("instance").term = "";
					},

					_destroy: function() {
						this.wrapper.remove();
						this.element.show();
					}
				});
				$( "#combobox" ).combobox();
				var index=0;
					
				var placeholder = function(){
					var message = 'My customer needs to...';
					var currentPlaceHolder = $("#questions input").attr("placeholder");
					if(currentPlaceHolder !== message){
						index++;
						var value = message.substr(0,currentPlaceHolder.length+1);
						if(index===2){
							value += "_";
							index=0;
						}
						$("#questions input").attr("placeholder", value);	
						setTimeout(placeholder,100);							
					} else {
						$("#questions input").attr("placeholder", message);	
					
					}
				};
				setTimeout(placeholder,100);
			}
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_meet_the_team = {
		attach: function(context, settings) {
			$(".member .close").click(function(){
				$(this.parentNode.parentNode).hide();
			});
			$(".member .gridImage").click(function(){
				$(".clickContent").hide();
				$(".clickContent", this.parentNode).show();
				var count = $(".members").attr('data-count')*1;
				var index = $(this).attr('data-index')*1;
				if(count>12){
					if(index< count-6){
						$(".clickContent", this.parentNode).css('margin-top','-550px');
					}	
				}

			});
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.js_tabs = {
		attach: function(context, settings) {
			// your code goes here
			$(".tablist li:first-child").addClass('active');
			$(".tabs li a").each(function(i){
				if(i!==0){
					$('#'+this.href.split('#')[1]).hide();
				} else {
					$(this).addClass('active');
				}
			}).click(function(){
				$(".tabs li a").removeClass('active');
				$(this).addClass('active');
				$(".team-members").hide();
				$('#'+this.href.split('#')[1]).show();
			});

			$("#ActiveTabs").each(function(i){
				$("ul.tablist",this).addClass("tabs-"+$("ul.tablist li",this).length);
				$("ul.tablist li").each(function(){
					var link = $("a",this);
					$(this).attr('data-href',link.attr("href")).html(link.html());
				}).click(function(){
					var tab = $(this).attr('data-href');
					console.log($("#ActiveTabs .active"));
					$("#ActiveTabs .active").removeClass('active');
					$(tab).addClass('active');
					$(this).addClass('active');
				});
				$("#ActiveTabs .tab-1").addClass('active');
			});
			$("#MemberGridTabs").each(function(){
				$(".members").hide();
				$($(".members").get(0)).show();
				$("ul.tablist",this).addClass("tabs-"+$("ul.tablist li",this).length);
				$("ul.tablist li").each(function(){
					var link = $("a",this);
					$(this).attr('data-href',link.attr("href")).html(link.html());
				}).click(function(){
					var tab = $(this).attr('data-href');
					console.log(tab);
					console.log($("#MemberGridTabs .active"));
					$("#MemberGridTabs .active").removeClass('active');
					$(".members").hide();
					$(tab).addClass('active').show();
					$(this).addClass('active');
				
				});
				$("#ActiveTabs .tab-1").addClass('active');
			});
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_template_change_this = {
		attach: function(context, settings) {
			// your code goes here
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.menu = {
		attach: function(context, settings) {
			$('.menu .side-menu').text('');
			$('header .menu .side-menu').click(function() {
				// console.log("click hamburger");
				$('html,body').animate({
							scrollTop: 0
						}, 0, 'swing');
				$('.hamburger-menu').toggle();
				$('#block-system-main-menu').toggleClass('showHamburger');
			});
			// $("#block-panels-mini-hamburger-menu").hover(function(){},function(){
			// 	$(this).hide();
			// });
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_popload = {
		attach: function(context, settings) {

			function setModalHeights() {
				winWid = $(window).width();
				winH = $(window).height();
				// Set body to be relative first - we may set it to be fixed once a popup is displayed
				$('html').css('overflow', '');

				$('.popup-container:visible, .popup-modal:visible').each(function(index, elem){

					var $contents = $(elem).find('.popup-wrap');

					if($contents.find('> .scrollable').length === 0 )
					{
						$contents.find('> *:not(.close)').wrapAll('<div class="scrollable-content"></div>');
						$contents.find('> .scrollable-content').wrapAll('<div class="scrollable"></div>');
					}

					if($contents.find('.scrollable-content').outerHeight() > winH - 100) {
						$(this).addClass('fullscreen');
						$('html').css('overflow', 'hidden');
					} else {
						$(this).removeClass('fullscreen');
						$('html').css('overflow', '');
					}
				});
			}
var el = document.getElementById("section-541");
if(el){
	if(window.location.href.indexOf("thankyou=1")!==-1){
		el.innerHTML = "<div class='wrapper'><div class='content centered'><div class='text'><h1 class='mpu-header' style='text-align:center'>Thank you for your message</h1><p style='text-align:center'>We will be in contact with you&nbsp;shortly.</p></div></div></div>";
	}
}
			// your code goes here
			// ?utm_source=ExactTarget&utm_campaign=existing_comms&utm_medium=email 
			// console.log(window.location.href);
			if (document.cookie.indexOf('shown=')===-1  && window.location.href.indexOf("?utm_source=ExactTarget&utm_campaign=existing_comms&utm_medium=email")!==-1){
				var d = new Date();
				// cache for 12 hours
			    d.setTime(d.getTime() + (12*3600*1000));
			    var expires = "expires="+ d.toUTCString();
				document.cookie = "shown=1; " + expires+ ";domain="+window.location.host+";path=/";
				$('body').append("<div class='popup-load popup-container'><div class='popup-wrap'><span class='close'></span><div class='field field-name-field-popup field-type-text-long field-label-hidden'><div class='field-items'><div class='field-item even'><h4 style='text-align: center;'>Thank you for joining our Trusted Advisor Hub </h4><p style='text-align: center;'>Explore the world of enterprise mobility management through Tech Data</p></div></div></div></div></div>");
				
				$('.popup-load.popup-container .close').click(function(){
					$(".popup-load").hide();
				});
				$('.popup-load.popup-container a').click(function(){
					
				});

				$('.popup-load').each(function() {
					$('.popup-load.popup-container').fadeIn();
					setModalHeights();
				});
			}
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* The Google Site Search code.
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_search = {
		attach: function(context, settings) {
			// var searchType = 'gss'; // google Site Search
			// if(window.location.href.indexOf('?test=search')){
			// 	var searchType = 'node'; // debug version
			// }
			// // console.log(searchType);
			// $("#block-search-form form").submit(function(){
			// 	// console.log("Search - form submitted")
			// 	$('#load-results').html("<div class='results-container'><h2>Please wait while we find your results</h2></div>");
			// 	loadSearchResults('/search/'+searchType+'/'+$("#edit-search-block-form--2").val())
			// 	return false;
			// });

			// function loadSearchResults(path){
			// 	// console.log("Search - loading URL : "+path);
			// 	$('#load-results div.results-container').html("<h2>Please wait while we find your results</h2>");
			// 	$('#load-results').load(
			// 		path + ' #main .content div.results-container', 
			// 		function(data){
			// 			$(".results-container h2").html("Search results - displaying "+ $("ol.search-results li").length+ " results");
			// 			//example of callback
			// 			// console.log('Search - loaded content '+data.length+' bytes')
			// 			$('#load-results .pager li a').each(function(){
			// 				var path = $(this).attr('href');
			// 				$(this).attr('href','#');
			// 				$(this).click(function(){
			// 					loadSearchResults(path);
			// 				});
			// 				// console.log($(this).attr('href'));
			// 			})
			// 		}
			// 	);
			// }
		}
	};
})(jQuery, Drupal, this, this.document);
/**
 * @file
 * An tempalte for creating new code blocks from
 */
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_side_buttons = {
		attach: function(context, settings) {
			// your code goes here
			$(document).ready(function() {
				var prevPos = 0;
				/**
				 * Global window scroll function.
				 */
				scrollTimer('#tab_side_buttons','right');
				// scrollHeader();

				$(window).scroll(function() {
					var hamburgerExists = $(".showHamburger").length === 1 ? true : false;
					if(!hamburgerExists){
						if($(window).scrollTop()>124){
							$("#header").addClass('fixed');
						} else {
							$("#header").removeClass('fixed');
						}
						if (prevPos > $(window).scrollTop()){
							// console.log('Up ' + prevPos + ', ' + $(window).scrollTop() );
							$("#header").addClass('visible');
						} else {
							$("#header").removeClass('visible');
						}
						prevPos = $(window).scrollTop();
						scrollTimer('#tab_side_buttons','right');
						// scrollHeader();
					}
				});
			});

			function scrollTimer(id,side) {
				var objOff = { left:'-900px'};
				var objOn = { left:'-163px'};
				if (side==='right'){
					objOff = { right:'-900px'};
					objOn = { right:'-163px'};
				}
				$(id).css(objOff, 300).addClass(side);
				// Clear the timer when scrolling.
				clearTimeout($.data(this, 'scrollTimer_'+id));
				// Set timeout on the scroll timer.
				$.data(this, 'scrollTimer_'+id, setTimeout(function() {
					// When scrolling stops
					$(id).css(objOn);
				}, 300));
				$(id).show();
			}

			function scrollHeader() {
				var objOff = { top:'-900px'};
				var objOn = { top:'0px'};
				if($("body").get(0).className.indexOf(" logged-in ")>-1){
					objOn = { top:'38px'};
				}
				var hamburgerExists = $(".showHamburger").length === 1 ? true : false;
				if(!hamburgerExists){
					if($(window).scrollTop()>400){
						$("#header").css(objOn, 300);
						$(".hamburger-menu").hide();
						// Clear the timer when scrolling.
						clearTimeout($.data(this, 'scrollTimer_header'));
						// Set timeout on the scroll timer.
						$.data(this, 'scrollTimer_header', setTimeout(function() {
							// When scrolling stops
							$("#header").css(objOn);
						}, 300));
						$("#header").show();
					} else {
						$("#header").css(objOn);
					}
				}
				
			}
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.smoothscroll = {
		attach: function(context, settings) {
			$(".page-why-tech-data a[href^='#']").click(function() {
				var scrollto = $(this).attr("href");
				console.log(scrollto);
			    $('html, body').animate({
			        scrollTop: parseInt($(scrollto).closest(".views-row").offset().top)
			    }, 500);
			});
		}
	};
})(jQuery, Drupal, this, this.document);
/**
 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 Social Shares Javascript
 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_social_shares = {
		attach: function(context, settings) {
			function populateShareLinks() {
				var clientToken = "CubiksOnline";
				// Check if the links are there.
				if ($('.social-share').length) {
					// Get current URL.
					var curUrl = window.location.href;
					var pageTitle = $(document).find('h1').text();
					// Urls
					var linkedinShare = 'https://www.linkedin.com/shareArticle?mini=true&url=' + curUrl;
					var twitterShare = 'https://twitter.com/home?status=' + pageTitle + ' - ' + curUrl + ' - @'+clientToken;
					var googleShare = 'https://plus.google.com/share?url=' + curUrl;
					var facebookShare = 'https://www.facebook.com/sharer/sharer.php?u=' + curUrl;
					// Set urls.
					$('div.social-share .social-share.linkedin').attr({target: 'nw', 'href': linkedinShare});
					$('div.social-share .social-share.twitter').attr({target: 'nw', 'href': twitterShare});
					$('div.social-share .social-share.google').attr({target: 'nw', 'href': googleShare});
					$('div.social-share .social-share.facebook').attr({target: 'nw', 'href': facebookShare});
				}
			}
			$(document).ready(function(){
				populateShareLinks();
				if($("#copyshares").length === 1){
					$("#copyshares").html($("footer .social-pages").html());
				}
			});
		}
	};
})(jQuery, Drupal, this, this.document);
/**
 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 Stat Widget Javascript
 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/

(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.statWidgetObject = {
		attach: function(context, settings) {
			// console.log('Stat Widget loading');
			var StatWidget = {
				count:0,
				elements:[],
				Add:function(el){
					//console.log(el.id)
					if( el.id+''==='undefined' || el.id+''==='' ){
						el.id='StatWidgetCounter'+(StatWidget.count++);
					}
					$(el).attr('data-status','initialised');
					StatWidget.elements[el.id] = {
						element:el,
						status:'initialised',
						isVisible:StatWidget.isElementVisible(el)
					};
				},
				Check:function(){
					// console.log('checking ');
				},
				Update:function(){
					var found = false;
					$(".statwidget[data-status!='started']").each(function(obj){
						if(StatWidget.isElementVisible(this)){
							$(this).attr('data-status','started');
							// // get two data variables from page
							var dataEndValue = $(this).attr('data-end')*1;
							// console.log(dataEndValue);
							var dataValue = $(this).attr('data-value')*1;
							var currentValue = $("span.value",this).html()*1;
							var dataStepValue = $(this).attr('data-step')*1;
							var decimals=0;
							var options = {
								useEasing : true,
								useGrouping : true,
								separator : ',',
								decimal : '.',
								startVal:0.0,
								endVal: dataEndValue,
								prefix : '',
								suffix : ''
							};
							if((dataEndValue+"").indexOf(".")>0){
								decimals=1;
								// console.log(dataEndValue);
								// console.log(options);
							}
							var countUpElement = new CountUp($(".value",this).get(0), 0, dataEndValue, decimals, 2.5, options);
							countUpElement.start();

						}
					});
				},
				isElementVisible :function (elementToBeChecked) {
					var TopView = $(window).scrollTop();
					var BotView = TopView + $(window).height();
					var TopElement = $(elementToBeChecked).offset().top;
					var BotElement = TopElement + $(elementToBeChecked).height();
					return ((BotElement <= BotView) && (TopElement >= TopView));
				}
			};

			$(document).ready(function(){
				$('.statwidget').each(function(obj){
					StatWidget.Add(this);
				});
			});

			window.addEventListener('scroll',function(){
				StatWidget.Update();
			},true);
			/*

			countUp.js
			by @inorganik

			*/

			// target = id of html element or var of previously selected html element where counting occurs
			// startVal = the value you want to begin at
			// endVal = the value you want to arrive at
			// decimals = number of decimal places, default 0
			// duration = duration of animation in seconds, default 2
			// options = optional object of options (see below)

			var CountUp = function(target, startVal, endVal, decimals, duration, options) {

				// make sure requestAnimationFrame and cancelAnimationFrame are defined
				// polyfill for browsers without native support
				// by Opera engineer Erik Möller
				var lastTime = 0;
				var vendors = ['webkit', 'moz', 'ms', 'o'];
				for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
					window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
					window.cancelAnimationFrame =
					window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
				}
				if (!window.requestAnimationFrame) {
					window.requestAnimationFrame = function(callback, element) {
						var currTime = new Date().getTime();
						var timeToCall = Math.max(0, 16 - (currTime - lastTime));
						var id = window.setTimeout(function() { callback(currTime + timeToCall); },
						timeToCall);
						lastTime = currTime + timeToCall;
						return id;
					};
				}
				if (!window.cancelAnimationFrame) {
					window.cancelAnimationFrame = function(id) {
						clearTimeout(id);
					};
				}

				// default options
				this.options = {
					useEasing : true, // toggle easing
					useGrouping : true, // 1,000,000 vs 1000000
					separator : ',', // character to use as a separator
					decimal : '.' // character to use as a decimal
				};
				// extend default options with passed options object
				for (var key in options) {
					if (options.hasOwnProperty(key)) {
						this.options[key] = options[key];
					}
				}
				if (this.options.separator === '') { this.options.useGrouping = false; }
				if (!this.options.prefix) { this.options.prefix = ''; }
				if (!this.options.suffix) { this.options.suffix = ''; }

				this.d = (typeof target === 'string') ? document.getElementById(target) : target;
				this.startVal = Number(startVal);
				if (isNaN(startVal)) { this.startVal = Number(startVal.match(/[\d]+/g).join('')); }// strip non-numerical characters
				this.endVal = Number(endVal);
				if (isNaN(endVal)) { this.endVal = Number(endVal.match(/[\d]+/g).join('')); } // strip non-numerical characters
				this.countDown = (this.startVal > this.endVal);
				this.frameVal = this.startVal;
				this.decimals = Math.max(0, decimals || 0);
				this.dec = Math.pow(10, this.decimals);
				this.duration = Number(duration) * 1000 || 2000;
				var self = this;

				this.version = function () { return '1.5.3'; };

				// Print value to target
				this.printValue = function(value) {
					var result = (!isNaN(value)) ? self.formatNumber(value) : '--';
					if (self.d.tagName === 'INPUT') {
						this.d.value = result;
					}
					else if (self.d.tagName === 'text') {
						this.d.textContent = result;
					}
					else {
						this.d.innerHTML = result;
					}
				};

				// Robert Penner's easeOutExpo
				this.easeOutExpo = function(t, b, c, d) {
					return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
				};
				this.count = function(timestamp) {

					if (!self.startTime) { self.startTime = timestamp; }

					self.timestamp = timestamp;

					var progress = timestamp - self.startTime;
					self.remaining = self.duration - progress;

					// to ease or not to ease
					if (self.options.useEasing) {
						if (self.countDown) {
							self.frameVal = self.startVal - self.easeOutExpo(progress, 0, self.startVal - self.endVal, self.duration);
						} else {
							self.frameVal = self.easeOutExpo(progress, self.startVal, self.endVal - self.startVal, self.duration);
						}
					} else {
						if (self.countDown) {
							self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration));
						} else {
							self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
						}
					}

					// don't go past endVal since progress can exceed duration in the last frame
					if (self.countDown) {
						self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
					} else {
						self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
					}

					// decimal
					self.frameVal = Math.round(self.frameVal*self.dec)/self.dec;

					// format and print value
					self.printValue(self.frameVal);

					// whether to continue
					if (progress < self.duration) {
						self.rAF = requestAnimationFrame(self.count);
					} else {
						if (self.callback) { self.callback();}
					}
				};
				// start your animation
				this.start = function(callback) {
					self.callback = callback;
					// make sure values are valid
					if (!isNaN(self.endVal) && !isNaN(self.startVal) && self.startVal !== self.endVal) {
						self.rAF = requestAnimationFrame(self.count);
					} else {
						console.log('countUp error: startVal or endVal is not a number');
						self.printValue(endVal);
					}
					return false;
				};
				// toggles pause/resume animation
				this.pauseResume = function() {
					if (!self.paused) {
						self.paused = true;
						cancelAnimationFrame(self.rAF);
					} else {
						self.paused = false;
						delete self.startTime;
						self.duration = self.remaining;
						self.startVal = self.frameVal;
						requestAnimationFrame(self.count);
					}
				};
				// reset to startVal so animation can be run again
				this.reset = function() {
					self.paused = false;
					delete self.startTime;
					self.startVal = startVal;
					cancelAnimationFrame(self.rAF);
					self.printValue(self.startVal);
				};
				// pass a new endVal and start animation
				this.update = function (newEndVal) {
					cancelAnimationFrame(self.rAF);
					self.paused = false;
					delete self.startTime;
					self.startVal = self.frameVal;
					self.endVal = Number(newEndVal);
					self.countDown = (self.startVal > self.endVal);
					self.rAF = requestAnimationFrame(self.count);
				};
				this.formatNumber = function(nStr) {
					nStr = nStr.toFixed(self.decimals);
					nStr += '';
					var x, x1, x2, rgx;
					x = nStr.split('.');
					x1 = x[0];
					x2 = x.length > 1 ? self.options.decimal + x[1] : '';
					rgx = /(\d+)(\d{3})/;
					if (self.options.useGrouping) {
						while (rgx.test(x1)) {
							x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
						}
					}
					return self.options.prefix + x1 + x2 + self.options.suffix;
				};

				// format startVal on initialization
				self.printValue(self.startVal);
			};

		}
	};
})(jQuery, Drupal, this, this.document);
/**
* @file
* An tempalte for creating new code blocks from
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_template_change_this = {
		attach: function(context, settings) {
			// your code goes here
			$(".talk-to-us").click(function(){
				var formElement = $(".node-form-panel");
				var topPos = formElement.offset().top;
				var value = $("h2",this.parentNode.parentNode).html();
				console.log(value);
				$('html,body').animate({
							scrollTop: topPos
						}, 0, 'swing');
				var selectElement = $(".hs_page_section select").get(0);
				for(var index = 0; index < selectElement.options.length;index++){
					if(selectElement.options[index].value === value){
						selectElement.selectedIndex = index;
					}
				}
				$(selectElement).trigger("change");
				$(".hs_page_section").css("display","none");
			}).each(function(){
				$(this).removeAttr("href");
			});
		}
	};
})(jQuery, Drupal, this, this.document);
/**
* Video player v2.0
* 
* Add a class of "videoplayer" to any element and an attribute "data-video-url" 
* with the url of the video to embed.
* 
* Usage Example <div class="videoplayer" data-video-url="...">...</div>
* 
*/
(function($, Drupal, window, document, undefined) {

	Drupal.behaviors.tp_videoplayerInstance = {
		attach: function(context, settings) {
			// your code goes here
			var tp_videoplayer = { 
	
				IdCounter:0,
	
				QueueWidget:null,
	
				ElementsOnPage:[],
	
				LookUpUrls:[],
	
				init:function(){
					var listOfVideoRequests = $(".videoplayer");

					tp_videoplayer.QueueWidget = $(".videoplayerwidget");
					
					if(tp_videoplayer.QueueWidget.length === 0 ){
		            
		                $("body").append("<div class='videoplayerwidget'></div>");
		            
		                tp_videoplayer.QueueWidget = $(".videoplayerwidget");
		            
		            }

					tp_videoplayer.processVideoRequests(listOfVideoRequests);

					listOfVideoRequests.on('click',tp_videoplayer.play);

					tp_videoplayer.render();
					
					$("#video-close").click(tp_videoplayer.close);
				
				},
				play:function(){

					var id = this.id.split('-')[2];

					$(".videoplayerwidget").show();

					$(".videoplayerwidget .video-instance").hide();

					$('.videoplayerwidget #video-player-'+id).show();

					$("#video-close").attr('data-playing',id);

				},
				close:function(){

					var id = $(this).attr('data-playing');

					var videoWidget = $(".videoplayerwidget");

					$('#video-player-'+id).html(tp_videoplayer.ElementsOnPage[id]);

					videoWidget.hide();

					tp_videoplayer.cancelBubble();

					return false;

				},
				cancelBubble:function (e) {
					var evt = e ? e:window.event;
					if (evt.stopPropagation)    {
						evt.stopPropagation();
					}
					if (evt.cancelBubble!==null) {
						evt.cancelBubble = true;
					}
				},
				processVideoRequests:function(listofRequests){
					
					listofRequests.each(function(){
						console.log(this);
						if($(this).attr('data-processed')!==1){

							$(this).attr('data-processed',1);
							var url = $(this).attr("data-video-url");
							console.log("find data attribute");
							console.log(url);
							if(url===undefined){
								var url = this.className.split(' ')[1];
							}
 							tp_videoplayer.TestAndEmbed(this,url);				
						
						}
					});

				},
				TestAndEmbed:function(target,url){
					if(tp_videoplayer.LookUpUrls.indexOf(url)===-1){
				
						tp_videoplayer.LookUpUrls[tp_videoplayer.LookUpUrls.length] = url;
				
						tp_videoplayer.IdCounter++;
				
						$(target).attr('id','videoInstance-'+Math.random()+'-'+tp_videoplayer.IdCounter);
						if(url.indexOf("?")===-1){
							url+="?";
						}
						tp_videoplayer.ElementsOnPage[tp_videoplayer.IdCounter] = '<iframe width="100%" height="600px" src="' + url + '&autoplay=0" frameborder="0" allowfullscreen></iframe>';
				
					} else {
						$(target).attr('id','videoInstance-'+Math.random()+'-'+(tp_videoplayer.LookUpUrls.indexOf(url)+1));
					}
				},
				render:function(){
					//console.log('rendering');
					var buffer =  '<div class="video">';
						buffer += '  <div class="overlay"><a class="close" id="video-close"><img src="/sites/all/themes/tp_theme/images/icons/close.png"/></a>';
						buffer += '    <div class="player">';
						for(var instanceId in tp_videoplayer.ElementsOnPage){
							if (tp_videoplayer.ElementsOnPage.hasOwnProperty(instanceId)) {
								buffer += '<div class="video-instance" id="video-player-'+instanceId+'">' + tp_videoplayer.ElementsOnPage[instanceId]+'</div>';
							}
						}
						buffer += '    </div>';
						buffer += '  </div>';
						buffer += '</div>';
					tp_videoplayer.QueueWidget.append(buffer);
				}
			};

			tp_videoplayer.init();
		}
	};
})(jQuery, Drupal, this, this.document);
