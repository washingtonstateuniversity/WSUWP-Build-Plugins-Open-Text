!function(){"use strict";function e(e,n,t){var i=new c(n);switch(e){case"open":i.open(t);break;case"close":i.close(t);break;case"toggle":i.toggle(t);break;default:h.error("Method "+e+" does not exist on jQuery.sidr")}}function n(e){return"status"===e?d:m[e]?m[e].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof e&&"string"!=typeof e&&e?void p.error("Method "+e+" does not exist on jQuery.sidr"):m.toggle.apply(this,arguments)}function t(e,n){if("function"==typeof n.source){var t=n.source(name);e.html(t)}else if("string"==typeof n.source&&r.isUrl(n.source))y.get(n.source,function(n){e.html(n)});else if("string"==typeof n.source){var i="",o=n.source.split(",");if(y.each(o,function(e,n){i+='<div class="sidr-inner">'+y(n).html()+"</div>"}),n.renaming){var s=y("<div />").html(i);s.find("*").each(function(e,n){var t=y(n);r.addPrefixes(t)}),i=s.html()}e.html(i)}else null!==n.source&&y.error("Invalid Sidr Source");return e}function i(e){var i=r.transitions,o=y.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,timing:"ease",method:"toggle",bind:"touchstart click",onOpen:function(){},onClose:function(){},onOpenEnd:function(){},onCloseEnd:function(){}},e),s=o.name,a=y("#"+s);return 0===a.length&&(a=y("<div />").attr("id",s).appendTo(y("body"))),i.supported&&a.css(i.property,o.side+" "+o.speed/1e3+"s "+o.timing),a.addClass("sidr").addClass(o.side).data({speed:o.speed,side:o.side,body:o.body,displace:o.displace,timing:o.timing,method:o.method,onOpen:o.onOpen,onClose:o.onClose,onOpenEnd:o.onOpenEnd,onCloseEnd:o.onCloseEnd}),a=t(a,o),this.each(function(){var e=y(this),t=e.data("sidr"),i=!1;t||(d.moving=!1,d.opened=!1,e.data("sidr",s),e.bind(o.bind,function(e){e.preventDefault(),i||(i=!0,n(o.method,s),setTimeout(function(){i=!1},100))}))})}var o={};o.classCallCheck=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},o.createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();var s,a,d={moving:!1,opened:!1},r={isUrl:function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},addPrefixes:function(e){this.addPrefix(e,"id"),this.addPrefix(e,"class"),e.removeAttr("style")},addPrefix:function(e,n){var t=e.attr(n);"string"==typeof t&&""!==t&&"sidr-inner"!==t&&e.attr(n,t.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-"+n+"-$1"))},transitions:function(){var e=document.body||document.documentElement,n=e.style,t=!1,i="transition";return i in n?t=!0:function(){var e=["moz","webkit","o","ms"],o=void 0,s=void 0;i=i.charAt(0).toUpperCase()+i.substr(1),t=function(){for(s=0;s<e.length;s++)if((o=e[s])+i in n)return!0;return!1}(),i=t?"-"+o.toLowerCase()+"-"+i.toLowerCase():null}(),{supported:t,property:i}}()},u=jQuery,l="webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",c=function(){function e(n){o.classCallCheck(this,e),this.name=n,this.item=u("#"+n),this.openClass="sidr"===n?"sidr-open":"sidr-open "+n+"-open",this.menuWidth=this.item.outerWidth(!0),this.speed=this.item.data("speed"),this.side=this.item.data("side"),this.displace=this.item.data("displace"),this.timing=this.item.data("timing"),this.method=this.item.data("method"),this.onOpenCallback=this.item.data("onOpen"),this.onCloseCallback=this.item.data("onClose"),this.onOpenEndCallback=this.item.data("onOpenEnd"),this.onCloseEndCallback=this.item.data("onCloseEnd"),this.body=u(this.item.data("body"))}return o.createClass(e,[{key:"getAnimation",value:function(e,n){var t={},i=this.side;return t[i]="open"===e&&"body"===n?this.menuWidth+"px":"close"===e&&"menu"===n?"-"+this.menuWidth+"px":0,t}},{key:"prepareBody",value:function(e){var n="open"===e?"hidden":"";if(this.body.is("body")){var t=u("html"),i=t.scrollTop();t.css("overflow-x",n).scrollTop(i)}}},{key:"openBody",value:function(){if(this.displace){var e=r.transitions,n=this.body;if(e.supported)n.css(e.property,this.side+" "+this.speed/1e3+"s "+this.timing).css(this.side,0).css({width:n.width(),position:"absolute"}),n.css(this.side,this.menuWidth+"px");else{var t=this.getAnimation("open","body");n.css({width:n.width(),position:"absolute"}).animate(t,{queue:!1,duration:this.speed})}}}},{key:"onCloseBody",value:function(){var e=r.transitions,n={width:"",position:"",right:"",left:""};e.supported&&(n[e.property]=""),this.body.css(n).unbind(l)}},{key:"closeBody",value:function(){var e=this;if(this.displace)if(r.transitions.supported)this.body.css(this.side,0).one(l,function(){e.onCloseBody()});else{var n=this.getAnimation("close","body");this.body.animate(n,{queue:!1,duration:this.speed,complete:function(){e.onCloseBody()}})}}},{key:"moveBody",value:function(e){"open"===e?this.openBody():this.closeBody()}},{key:"onOpenMenu",value:function(e){var n=this.name;d.moving=!1,d.opened=n,this.item.unbind(l),this.body.removeClass("sidr-animating").addClass(this.openClass),this.onOpenEndCallback(),"function"==typeof e&&e(n)}},{key:"openMenu",value:function(e){var n=this,t=this.item;if(r.transitions.supported)t.css(this.side,0).one(l,function(){n.onOpenMenu(e)});else{var i=this.getAnimation("open","menu");t.css("display","block").animate(i,{queue:!1,duration:this.speed,complete:function(){n.onOpenMenu(e)}})}}},{key:"onCloseMenu",value:function(e){this.item.css({left:"",right:""}).unbind(l),u("html").css("overflow-x",""),d.moving=!1,d.opened=!1,this.body.removeClass("sidr-animating").removeClass(this.openClass),this.onCloseEndCallback(),"function"==typeof e&&e(name)}},{key:"closeMenu",value:function(e){var n=this,t=this.item;if(r.transitions.supported)t.css(this.side,"").one(l,function(){n.onCloseMenu(e)});else{var i=this.getAnimation("close","menu");t.animate(i,{queue:!1,duration:this.speed,complete:function(){n.onCloseMenu()}})}}},{key:"moveMenu",value:function(e,n){this.body.addClass("sidr-animating"),"open"===e?this.openMenu(n):this.closeMenu(n)}},{key:"move",value:function(e,n){d.moving=!0,this.prepareBody(e),this.moveBody(e),this.moveMenu(e,n)}},{key:"open",value:function(n){var t=this;if(d.opened!==this.name&&!d.moving){if(!1!==d.opened){return void new e(d.opened).close(function(){t.open(n)})}this.move("open",n),this.onOpenCallback()}}},{key:"close",value:function(e){d.opened!==this.name||d.moving||(this.move("close",e),this.onCloseCallback())}},{key:"toggle",value:function(e){d.opened===this.name?this.close(e):this.open(e)}}]),e}(),h=jQuery,p=jQuery,f=["open","close","toggle"],m={};for(s=0;s<f.length;s++)a=f[s],m[a]=function(n){return function(t,i){"function"==typeof t?(i=t,t="sidr"):t||(t="sidr"),e(n,t,i)}}(a);var y=jQuery;jQuery.sidr=n,jQuery.fn.sidr=i}();