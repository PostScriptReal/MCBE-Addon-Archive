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

(function($){$(document).ready(function($){dialog=$("#confirm-comment-reply").dialog({autoOpen:false,width:'auto',modal:true,resizable:false,buttons:{Submit:function(){sendReportComment($(this).data('commentid'),$(this).find("#report-text").val());}},close:function(){grecaptcha.reset();$("#error-text").remove();$(this).find("#report-text").val('');dialog.dialog("close");}});dialoge=$("#report-message").dialog({autoOpen:false,width:350,modal:true,resizable:false,open:function(){dialog.dialog("close");},close:function(){$(this).find("#report-text").val('');dialog.dialog("close");}});function sendReportComment(commentId,report_text){let captcha=grecaptcha.getResponse();$.ajax({type:'POST',url:reports.ajaxUrl,dataType:"json",data:{action:"comment_report",commentId:commentId,username:reports.username,user_id:reports.user_id,report_text:report_text,post_id:reports.post_id,captcha:captcha},success:function(response){if(response.data.state=='error'){$("#error-text").text(response.data.message);}else{let message=response.data.message;dialoge.html(message);dialoge.dialog("open");grecaptcha.reset();}}});}
$('#commentlist-container').on("click",".commentlist .report-comment",function(e){e.preventDefault();let reply=$(this).parent().parent().find(".reply").find(".comment-reply-link");let commentId=reply.data('commentid');dialog.data('commentid',commentId).dialog("open");});$('#close').click(function(e){e.preventDefault();$('#confirm-comment-reply').dialog('close');});});})(jQuery);

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
  captures_list: 157.769
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.056
  cdx.remote: 0.056
  esindex: 0.01
  LoadShardBlock: 132.633 (3)
  PetaboxLoader3.datanode: 84.839 (4)
  PetaboxLoader3.resolve: 119.769 (2)
  load_resource: 74.23
*/