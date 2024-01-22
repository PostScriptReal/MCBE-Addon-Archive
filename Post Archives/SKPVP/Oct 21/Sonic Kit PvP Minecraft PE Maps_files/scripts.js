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

"use strict";jQuery(document).ready(function($){$('.toggle-search').click(function(){$('.toggle-search').toggleClass('active');$('.search-expand').fadeToggle(250);setTimeout(function(){$('.search-expand input').focus();},300);});$('a#back-to-top').click(function(){$('html, body').animate({scrollTop:0},'slow');return false;});(function(){var $tabsNav=$('.alx-tabs-nav'),$tabsNavLis=$tabsNav.children('li'),$tabsContainer=$('.alx-tabs-container');$tabsNav.each(function(){var $this=$(this);$this.next().children('.alx-tab').stop(true,true).hide().siblings($this.find('a').attr('href')).show();$this.children('li').first().addClass('active').stop(true,true).show();});$tabsNavLis.on('click',function(e){var $this=$(this);$this.siblings().removeClass('active').end().addClass('active');$this.parent().next().children('.alx-tab').stop(true,true).hide().siblings($this.find('a').attr('href')).fadeIn();e.preventDefault();}).children(window.location.hash?'a[href='+window.location.hash+']':'a:first').trigger('click');})();$(".comment-tabs li").click(function(){$(".comment-tabs li").removeClass('active');$(this).addClass("active");$(".comment-tab").hide();var selected_tab=$(this).find("a").attr("href");$(selected_tab).fadeIn();return false;});$('table tr:odd').addClass('alt');$('body').addClass('s1-collapse');$('body').addClass('s2-collapse');$('.s1 .sidebar-toggle').click(function(){$('body').toggleClass('s1-collapse').toggleClass('s1-expand');if($('body').is('.s2-expand')){$('body').toggleClass('s2-expand').toggleClass('s2-collapse');}});$('.s2 .sidebar-toggle').click(function(){$('body').toggleClass('s2-collapse').toggleClass('s2-expand');if($('body').is('.s1-expand')){$('body').toggleClass('s1-expand').toggleClass('s1-collapse');}});$('.nav ul.sub-menu').hide();$('.nav li').hover(function(){$(this).children('ul.sub-menu').slideDown('fast');},function(){$(this).children('ul.sub-menu').hide();});$('.nav-toggle').on('click',function(){slide($('.nav-wrap .nav',$(this).parent()));});function slide(content){var wrapper=content.parent();var contentHeight=content.outerHeight(true);var wrapperHeight=wrapper.height();wrapper.toggleClass('expand');if(wrapper.hasClass('expand')){setTimeout(function(){wrapper.addClass('transition').css('height',contentHeight);},10);}
else{setTimeout(function(){wrapper.css('height',wrapperHeight);setTimeout(function(){wrapper.addClass('transition').css('height',0);},10);},10);}
wrapper.one('transitionEnd webkitTransitionEnd transitionend oTransitionEnd msTransitionEnd',function(){if(wrapper.hasClass('open')){wrapper.removeClass('transition').css('height','auto');}});}});

}
/*
     FILE ARCHIVED ON 16:46:03 Oct 21, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:49:06 Jan 22, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 215.113
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.058
  cdx.remote: 0.055
  esindex: 0.01
  LoadShardBlock: 168.321 (3)
  PetaboxLoader3.datanode: 250.513 (4)
  load_resource: 141.206
  PetaboxLoader3.resolve: 26.847
*/