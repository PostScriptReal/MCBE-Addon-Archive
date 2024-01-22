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

jQuery(document).ready(function($){let url=document.location.href;let currendID=getCommentIdFromUrl(url);if(currendID>0){let el=document.getElementById("comment-"+currendID)
console.log(el)
if(el!=null){el.classList.add('selected-comment');console.log('not empty')}}
function getCommentIdFromUrl(url){return((url&&/#comment-(\d+)$/.test(url))||(location.hash&&/^#comment-(\d+)$/.test(location.hash)))&&RegExp.$1;}});

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
  captures_list: 102.96
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  cdx.remote: 0.055
  esindex: 0.01
  LoadShardBlock: 77.296 (3)
  PetaboxLoader3.datanode: 126.886 (4)
  load_resource: 86.251
  PetaboxLoader3.resolve: 29.047
*/