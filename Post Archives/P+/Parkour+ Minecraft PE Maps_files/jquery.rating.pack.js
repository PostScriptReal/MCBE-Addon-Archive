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

;if(window.jQuery)(function($){if((!$.support.opacity&&!$.support.style))try{document.execCommand("BackgroundImageCache",false,true)}catch(e){};$.fn.rating=function(options){if(this.length==0)return this;if(typeof arguments[0]=='string'){if(this.length>1){var args=arguments;return this.each(function(){$.fn.rating.apply($(this),args);});};$.fn.rating[arguments[0]].apply(this,$.makeArray(arguments).slice(1)||[]);return this;};var options=$.extend({},$.fn.rating.options,options||{});$.fn.rating.calls++;this.not('.star-rating-applied').addClass('star-rating-applied').each(function(){var control,input=$(this);var eid=(this.name||'unnamed-rating').replace(/\[|\]/g,'_').replace(/^\_+|\_+$/g,'');var context=$(this.form||document.body);var raters=context.data('rating');if(!raters||raters.call!=$.fn.rating.calls)raters={count:0,call:$.fn.rating.calls};var rater=raters[eid]||context.data('rating'+eid);if(rater)control=rater.data('rating');if(rater&&control)
control.count++;else{control=$.extend({},options||{},($.metadata?input.metadata():($.meta?input.data():null))||{},{count:0,stars:[],inputs:[]});control.serial=raters.count++;rater=$('<span class="star-rating-control"/>');input.before(rater);rater.addClass('rating-to-be-drawn');if(input.attr('disabled')||input.hasClass('disabled'))control.readOnly=true;if(input.hasClass('required'))control.required=true;rater.append(control.cancel=$('<div class="rating-cancel"><a title="'+control.cancel+'">'+control.cancelValue+'</a></div>').on('mouseover',function(){$(this).rating('drain');$(this).addClass('star-rating-hover');}).on('mouseout',function(){$(this).rating('draw');$(this).removeClass('star-rating-hover');}).on('click',function(){$(this).rating('select');}).data('rating',control));};var star=$('<div role="text" aria-label="'+this.title+'" class="star-rating rater-'+control.serial+'"><a title="'+(this.title||this.value)+'">'+this.value+'</a></div>');rater.append(star);if(this.id)star.attr('id',this.id);if(this.className)star.addClass(this.className);if(control.half)control.split=2;if(typeof control.split=='number'&&control.split>0){var stw=($.fn.width?star.width():0)||control.starWidth;var spi=(control.count%control.split),spw=Math.floor(stw/control.split);star.width(spw).find('a').css({'margin-left':'-'+(spi*spw)+'px'})};if(control.readOnly)
star.addClass('star-rating-readonly');else
star.addClass('star-rating-live').on('mouseover',function(){$(this).rating('fill');$(this).rating('focus');}).on('mouseout',function(){$(this).rating('draw');$(this).rating('blur');}).on('click',function(){$(this).rating('select');});if(this.checked)control.current=star;if(this.nodeName=="A"){if($(this).hasClass('selected'))
control.current=star;};input.hide();input.on('change.rating',function(event){if(event.selfTriggered)return false;$(this).rating('select');});star.data('rating.input',input.data('rating.star',star));control.stars[control.stars.length]=star[0];control.inputs[control.inputs.length]=input[0];control.rater=raters[eid]=rater;control.context=context;input.data('rating',control);rater.data('rating',control);star.data('rating',control);context.data('rating',raters);context.data('rating'+eid,rater);});$('.rating-to-be-drawn').rating('draw').removeClass('rating-to-be-drawn');return this;};$.extend($.fn.rating,{calls:0,focus:function(){var control=this.data('rating');if(!control)return this;if(!control.focus)return this;var input=$(this).data('rating.input')||$(this.tagName=='INPUT'?this:null);if(control.focus)control.focus.apply(input[0],[input.val(),$('a',input.data('rating.star'))[0]]);},blur:function(){var control=this.data('rating');if(!control)return this;if(!control.blur)return this;var input=$(this).data('rating.input')||$(this.tagName=='INPUT'?this:null);if(control.blur)control.blur.apply(input[0],[input.val(),$('a',input.data('rating.star'))[0]]);},fill:function(){var control=this.data('rating');if(!control)return this;if(control.readOnly)return;this.rating('drain');this.prevAll().addBack().filter('.rater-'+control.serial).addClass('star-rating-hover');},drain:function(){var control=this.data('rating');if(!control)return this;if(control.readOnly)return;control.rater.children().filter('.rater-'+control.serial).removeClass('star-rating-on').removeClass('star-rating-hover');},draw:function(){var control=this.data('rating');if(!control)return this;this.rating('drain');var current=$(control.current);var starson=current.length?current.prevAll().addBack().filter('.rater-'+control.serial):null;if(starson)starson.addClass('star-rating-on');control.cancel[control.readOnly||control.required?'hide':'show']();this.siblings()[control.readOnly?'addClass':'removeClass']('star-rating-readonly');},select:function(value,wantCallBack){var control=this.data('rating');if(!control)return this;if(control.readOnly)return;control.current=null;if(typeof value!='undefined'||this.length>1){if(typeof value=='number')
return $(control.stars[value]).rating('select',undefined,wantCallBack);if(typeof value=='string'){$.each(control.stars,function(){if($(this).data('rating.input').val()==value)$(this).rating('select',undefined,wantCallBack);});return this;};}
else{control.current=this[0].tagName=='INPUT'?this.data('rating.star'):(this.is('.rater-'+control.serial)?this:null);};this.data('rating',control);this.rating('draw');var current=$(control.current?control.current.data('rating.input'):null);var lastipt=$(control.inputs).filter(':checked');var deadipt=$(control.inputs).not(current);deadipt.prop('checked',false);current.prop('checked',true);$(current.length?current:lastipt).trigger({type:'change',selfTriggered:true});if((wantCallBack||wantCallBack==undefined)&&control.callback)control.callback.apply(current[0],[current.val(),$('a',control.current)[0]]);return this;},readOnly:function(toggle,disable){var control=this.data('rating');if(!control)return this;control.readOnly=toggle||toggle==undefined?true:false;if(disable)$(control.inputs).attr("disabled","disabled");else $(control.inputs).removeAttr("disabled");this.data('rating',control);this.rating('draw');},disable:function(){this.rating('readOnly',true,true);},enable:function(){this.rating('readOnly',false,false);}});$.fn.rating.options={cancel:'Cancel Rating',cancelValue:'',split:0,starWidth:16};})(jQuery);

}
/*
     FILE ARCHIVED ON 18:03:29 Nov 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:42:23 Jan 22, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 81.875
  exclusion.robots: 0.082
  exclusion.robots.policy: 0.071
  cdx.remote: 0.079
  esindex: 0.01
  LoadShardBlock: 36.908 (3)
  PetaboxLoader3.datanode: 66.611 (5)
  load_resource: 81.717 (2)
  PetaboxLoader3.resolve: 47.675 (2)
*/