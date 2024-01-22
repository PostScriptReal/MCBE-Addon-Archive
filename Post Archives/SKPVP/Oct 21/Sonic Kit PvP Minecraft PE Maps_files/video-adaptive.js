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

jQuery(document).ready(function($){let allVideos=$('article').find("iframe[src*='//web.archive.org/web/20191021164602/https://player.vimeo.com'], iframe[src*='//web.archive.org/web/20191021164602/https://www.youtube.com'], object, embed");allVideos.each(function(){let width=$(this).attr('width');let height=$(this).attr('height');if(typeof width!=='undefined'&&typeof height!=='undefined'){$(this).attr('data-aspectRatio',this.height/this.width).removeAttr('height').removeAttr('width');}});$(window).resize(function(){allVideos.each(function(){let el=$(this);let newWidth=el.parents('article').width();el.width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();});

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
  captures_list: 221.957
  exclusion.robots: 0.077
  exclusion.robots.policy: 0.067
  cdx.remote: 0.065
  esindex: 0.009
  LoadShardBlock: 196.097 (3)
  PetaboxLoader3.datanode: 176.986 (4)
  load_resource: 97.121
  PetaboxLoader3.resolve: 68.742
*/