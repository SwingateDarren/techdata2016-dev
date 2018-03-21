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