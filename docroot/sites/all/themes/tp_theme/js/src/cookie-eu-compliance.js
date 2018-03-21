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