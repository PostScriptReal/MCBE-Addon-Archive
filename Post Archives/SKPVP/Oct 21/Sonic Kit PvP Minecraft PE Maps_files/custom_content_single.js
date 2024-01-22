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

(function($){const spoilerLinesLimit=10;const spoilerSymbolsLimit=350;$(document).ready(function(){viewSpoiler();$('.spoiler-link').on('click','a',function(event){event.preventDefault();let changeLog=$(this).parents('.changelog-header').siblings('.changelog.active');let icon=$(this).find('i');if(icon.hasClass('fa-angle-down')){icon.removeClass('fa-angle-down');icon.addClass('fa-angle-up');changeLog.css("height","");changeLog.css("overflow","");}else{icon.removeClass('fa-angle-up');icon.addClass('fa-angle-down');viewSpoiler();}});$('#version-select').on('change',function(event){event.preventDefault();$('.spoiler-link').hide();let version=this.value;let target=$('#changelogs').find("[data-version='"+version+"']");let changeLog=$('.changelog.active');changeLog.css("height","");changeLog.css("overflow","");$(changeLog).removeClass('active');$(target).addClass('active');viewSpoiler();});function viewSpoiler(){let changeLog=$('.changelog.active');let spoilerLink=$('.spoiler-link');let newText=$(changeLog).text().replace(/\s/g,'');let divHeight=parseInt(changeLog.css("height"));let lineHeight=parseInt(changeLog.css("line-height"));let lines=divHeight/lineHeight;if(newText.length>spoilerSymbolsLimit){let newLines=Math.ceil(lines*spoilerSymbolsLimit/newText.length);if(newLines>spoilerLinesLimit){newLines=spoilerLinesLimit;}
let newHeight=newLines*lineHeight;spoilerLink.show();changeLog.css("height",newHeight);changeLog.css("overflow","hidden");}else if(lines>spoilerLinesLimit){let newHeight=lineHeight*spoilerLinesLimit;spoilerLink.show();changeLog.css("height",newHeight);changeLog.css("overflow","hidden");}}
$('#download-list a').click(function(event){console.log('click');sendAddCountDownloads(this.href);});function sendAddCountDownloads(link){$.ajax({type:"POST",url:Param.ajaxUrl,data:{action:"add_count_to_download_files",postId:Param.postId,link:link,},success:function(response){}});}});})(jQuery);

}
/*
     FILE ARCHIVED ON 16:46:02 Oct 21, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:49:01 Jan 22, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 101.345
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.074
  cdx.remote: 0.069
  esindex: 0.011
  LoadShardBlock: 52.77 (3)
  PetaboxLoader3.datanode: 66.143 (4)
  load_resource: 47.439
  PetaboxLoader3.resolve: 31.099
*/