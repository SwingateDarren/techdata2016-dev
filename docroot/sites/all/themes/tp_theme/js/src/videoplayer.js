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
