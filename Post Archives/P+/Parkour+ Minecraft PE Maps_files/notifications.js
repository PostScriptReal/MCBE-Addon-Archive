var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function($){var postID=notification_vars.postID;var isSubscribed=false;var onesignalId=null;if(typeof OneSignal!=='undefined'){OneSignal.push(function(){OneSignal.getUserId(function(userId){if(userId){onesignalId=userId;isSubscribed=true;OneSignal.getTags(function(tags){if(postID in tags){subscribeUser();}});}});});}
let isiPhone=(navigator.userAgent.match(/iPhone/i)!==null);if(isiPhone){$('#subscribe-button').siblings('.tip').text("This feature doesn't work for iOS devices.");}
$('#subscribe-button').click(function(event){if(isSubscribed){subscribeUser();return;}
event.preventDefault();if(typeof OneSignal!=='undefined'){OneSignal.push(function(){OneSignal.getUserId(function(userId){if(userId){onesignalId=userId;isSubscribed=true;$('#subscribe-button').trigger('click');}else{$('#subscribe-button').siblings('.tip').text('Turn on browser notifications to subscribe');OneSignal.showNativePrompt();}});});}});function subscribeUser(){$('#subscribe-button').toggleClass('active');if($('#subscribe-button').hasClass('active')){$('#subscribe-button').html('<i class="far fa-bell"></i>Subscribed');$('#subscribe-button').siblings('.tip').text('You are subscribed!');saveToDb(true);OneSignal.sendTag(postID,postID);}else{$('#subscribe-button').html('<i class="far fa-bell"></i>Subscribe');$('#subscribe-button').siblings('.tip').text('You are unsubscribed');saveToDb(false);OneSignal.deleteTag(postID,postID);}
if(onesignalId==null){$(this).siblings('.tip').first().fadeIn(0).delay(3000).fadeOut();}}
function saveToDb(create){if(create){$.ajax({type:'POST',url:notification_vars.ajaxUrl,data:{action:'create_subscription',onesignalId:onesignalId,postId:notification_vars.postID,uid:notification_vars.uid,},success:function(response){console.log('user and post saved');}});}else{$.ajax({type:'POST',url:notification_vars.ajaxUrl,data:{action:'delete_subscription',onesignalId:onesignalId,postId:notification_vars.postID,},success:function(response){console.log('subscription deleted');}});}}});

}
/*
     FILE ARCHIVED ON 18:03:27 Nov 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:42:23 Jan 22, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 329.215
  exclusion.robots: 0.091
  exclusion.robots.policy: 0.081
  cdx.remote: 0.065
  esindex: 0.01
  LoadShardBlock: 293.292 (3)
  PetaboxLoader3.datanode: 426.857 (4)
  load_resource: 387.752
  PetaboxLoader3.resolve: 231.358
*/