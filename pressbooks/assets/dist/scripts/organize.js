!function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}({11:function(e,t,a){e.exports=a("EO+/")},"EO+/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("EbL4"),r=a.n(n),o={oldPart:null,newPart:null,defaultOptions:{revert:!0,helper:"clone",zIndex:2700,distance:3,opacity:.6,placeholder:"ui-state-highlight",connectWith:".chapters",dropOnEmpty:!0,cursor:"crosshair",items:"tbody > tr",start:function(e,t){o.oldPart=t.item.parents("table").attr("id")},stop:function(e,t){o.newPart=t.item.parents("table").attr("id"),o.update(t.item)}},frontMatterOptions:{revert:!0,helper:"clone",zIndex:2700,distance:3,opacity:.6,placeholder:"ui-state-highlight",dropOnEmpty:!0,cursor:"crosshair",items:"tbody > tr",start:function(e,t){},stop:function(e,t){o.fmupdate(t.item)}},backMatterOptions:{revert:!0,helper:"clone",zIndex:2700,distance:3,opacity:.6,placeholder:"ui-state-highlight",dropOnEmpty:!0,cursor:"crosshair",items:"tbody > tr",start:function(e,t){},stop:function(e,t){o.bmupdate(t.item)}},update:function(e){jQuery.ajax({beforeSend:function(){jQuery.blockUI.defaults.applyPlatformOpacityRules=!1,jQuery.blockUI({message:jQuery("#loader.chapter")})},url:ajaxurl,type:"POST",data:{action:"pb_update_chapter",new_part_order:jQuery("#"+o.newPart).sortable("serialize"),old_part_order:jQuery("#"+o.oldPart).sortable("serialize"),new_part:o.newPart.replace(/^part-([0-9]+)$/i,"$1"),old_part:o.oldPart.replace(/^part-([0-9]+)$/i,"$1"),id:jQuery(e).attr("id").replace(/^chapter-([0-9]+)$/i,"$1"),_ajax_nonce:PB_OrganizeToken.orderNonce},cache:!1,dataType:"html",error:function(e,t,a){jQuery("#message").html('<p><strong>There has been an error updating your chapter data. Usually, <a href="'+window.location.href+'">refreshing the page</a> helps.</strong></p>').addClass("error")},success:function(e){"NOCHANGE"===e&&jQuery("#message").html("<p><strong>No changes were registered.</strong></p>").addClass("error")},complete:function(){jQuery.unblockUI()}})},fmupdate:function(e){jQuery.ajax({beforeSend:function(){jQuery.blockUI.defaults.applyPlatformOpacityRules=!1,jQuery.blockUI({message:jQuery("#loader.fm")})},url:ajaxurl,type:"POST",data:{action:"pb_update_front_matter",front_matter_order:jQuery("#front-matter").sortable("serialize"),_ajax_nonce:PB_OrganizeToken.orderNonce},cache:!1,dataType:"html",error:function(e,t,a){jQuery("#message").html('<p><strong>There has been an error updating your front matter data Usually, <a href="'+window.location.href+'">refreshing the page</a> helps.</strong></p>').addClass("error")},success:function(e){"NOCHANGE"===e&&jQuery("#message").html("<p><strong>No changes were registered.</strong></p>").addClass("error")},complete:function(){jQuery.unblockUI()}})},bmupdate:function(e){jQuery.ajax({beforeSend:function(){jQuery.blockUI.defaults.applyPlatformOpacityRules=!1,jQuery.blockUI({message:jQuery("#loader.bm")})},url:ajaxurl,type:"POST",data:{action:"pb_update_back_matter",back_matter_order:jQuery("#back-matter").sortable("serialize"),_ajax_nonce:PB_OrganizeToken.orderNonce},cache:!1,dataType:"html",error:function(e,t,a){jQuery("#message").html('<p><strong>There has been an error updating your back matter data. Usually, <a href="'+window.location.href+'">refreshing the page</a> helps.</strong></p>').addClass("error")},success:function(e){"NOCHANGE"===e&&jQuery("#message").html("<p><strong>No changes were registered.</strong></p>").addClass("error")},complete:function(){jQuery.unblockUI()}})}};jQuery(document).ready(function(e){function t(){var t={action:"pb_update_word_count_for_export",_ajax_nonce:PB_OrganizeToken.wordCountNonce};e.post(ajaxurl,t,function(t){var a=parseInt(e("#wc-selected-for-export").text(),10);new r.a("wc-selected-for-export",a,t,0,2.5,{separator:""}).start()})}e("table.chapters").sortable(o.defaultOptions).disableSelection(),e("table#front-matter").sortable(o.frontMatterOptions).disableSelection(),e("table#back-matter").sortable(o.backMatterOptions).disableSelection(),e("input[name=blog_public]").change(function(){var t=void 0;t=1===parseInt(this.value,10)?1:0,e.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_global_privacy_options",blog_public:t,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){0===t?(e("h4.publicize-alert > span").text(PB_OrganizeToken.private),e("label span.public").css("font-weight","normal"),e("label span.private").css("font-weight","bold"),e(".publicize-alert").removeClass("public").addClass("private")):1===t&&(e("h4.publicize-alert > span").text(PB_OrganizeToken.public),e("label span.public").css("font-weight","bold"),e("label span.private").css("font-weight","normal"),e(".publicize-alert").removeClass("private").addClass("public"))},error:function(e,t,a){}})}),e(".chapter_privacy").change(function(){var t=void 0,a=e(this).parent().prev(".column-status"),n=e(this).attr("id");n=n.split("_"),n=n[n.length-1],t=e(this).is(":checked")?"private":"publish",e.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_privacy_options",post_id:n,post_status:t,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){"private"===t?a.text(PB_OrganizeToken.private):a.text(PB_OrganizeToken.published)},error:function(e,t,a){}})}),e(".chapter_show_title_check").change(function(){var t=void 0,a=e(this).attr("id");a=a.split("_"),a=a[a.length-1],t=e(this).is(":checked")?1:0,e.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_show_title_options",post_id:a,chapter_show_title:t,type:"pb_show_title",_ajax_nonce:PB_OrganizeToken.showTitleNonce}})}),e(".chapter_export_check").change(function(){var a=void 0,n=e(this).attr("id");n=n.split("_"),n=n[n.length-1],a=e(this).is(":checked")?1:0,e.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_export_options",post_id:n,chapter_export:a,type:"pb_export",_ajax_nonce:PB_OrganizeToken.exportNonce},success:function(){t()}})}),e(".fm_privacy").change(function(){var t=void 0,a=e(this).parent().prev(".column-status"),n=e(this).attr("id");n=n.split("_"),n=n[n.length-1],t=e(this).is(":checked")?"private":"publish",e.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_privacy_options",post_id:n,post_status:t,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){"private"===t?a.text(PB_OrganizeToken.private):a.text(PB_OrganizeToken.published)},error:function(e,t,a){}})}),e(".fm_show_title_check").change(function(){var t=void 0,a=e(this).attr("id");a=a.split("_"),a=a[a.length-1],t=e(this).is(":checked")?1:0,e.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_show_title_options",post_id:a,chapter_show_title:t,type:"pb_show_title",_ajax_nonce:PB_OrganizeToken.showTitleNonce}})}),e(".fm_export_check").change(function(){var a=void 0,n=e(this).attr("id");n=n.split("_"),n=n[n.length-1],a=e(this).is(":checked")?1:0,e.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_export_options",post_id:n,chapter_export:a,type:"pb_export",_ajax_nonce:PB_OrganizeToken.exportNonce},success:function(){t()}})}),e(".bm_privacy").change(function(){var t=void 0,a=e(this).parent().prev(".column-status"),n=e(this).attr("id");n=n.split("_"),n=n[n.length-1],t=e(this).is(":checked")?"private":"publish",e.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_privacy_options",post_id:n,post_status:t,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){"private"===t?a.text(PB_OrganizeToken.private):a.text(PB_OrganizeToken.published)},error:function(e,t,a){}})}),e(".bm_show_title_check").change(function(){var t=void 0,a=e(this).attr("id");a=a.split("_"),a=a[a.length-1],t=e(this).is(":checked")?1:0,e.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_show_title_options",post_id:a,chapter_show_title:t,type:"pb_show_title",_ajax_nonce:PB_OrganizeToken.showTitleNonce}})}),e(".bm_export_check").change(function(){var a=void 0,n=e(this).attr("id");n=n.split("_"),n=n[n.length-1],a=e(this).is(":checked")?1:0,e.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_export_options",post_id:n,chapter_export:a,type:"pb_export",_ajax_nonce:PB_OrganizeToken.exportNonce},success:function(){t()}})});var a=[];e("table thead th").click(function(){var t=e(this).index()+1,n=e(this).parents("table").index(),r=n+"_"+t;a[r]?(e(this).parents("table").find("tr td:nth-of-type("+t+")").find("input[type=checkbox]:checked").click(),a[r]=!1):(e(this).parents("table").find("tr td:nth-of-type("+t+")").find("input[type=checkbox]:not(:checked)").click(),a[r]=!0)}),e(window).on("beforeunload",function(){if(e.active>0)return"Changes you made may not be saved..."})})},EbL4:function(e,t,a){var n,r;!function(o,i){n=i,void 0!==(r="function"==typeof n?n.call(t,a,t,e):n)&&(e.exports=r)}(0,function(e,t,a){return function(e,t,a,n,r,o){function i(e){e=e.toFixed(d.decimals),e+="";var t,a,n,r;if(t=e.split("."),a=t[0],n=t.length>1?d.options.decimal+t[1]:"",r=/(\d+)(\d{3})/,d.options.useGrouping)for(;r.test(a);)a=a.replace(r,"$1"+d.options.separator+"$2");return d.options.prefix+a+n+d.options.suffix}function s(e,t,a,n){return a*(1-Math.pow(2,-10*e/n))*1024/1023+t}function c(e){return"number"==typeof e&&!isNaN(e)}for(var l=0,p=["webkit","moz","ms","o"],u=0;u<p.length&&!window.requestAnimationFrame;++u)window.requestAnimationFrame=window[p[u]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[u]+"CancelAnimationFrame"]||window[p[u]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var a=(new Date).getTime(),n=Math.max(0,16-(a-l)),r=window.setTimeout(function(){e(a+n)},n);return l=a+n,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)});var d=this;if(d.version=function(){return"1.8.5"},d.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:i,prefix:"",suffix:""},o&&"object"==typeof o)for(var h in d.options)o.hasOwnProperty(h)&&null!==o[h]&&(d.options[h]=o[h]);""===d.options.separator&&(d.options.useGrouping=!1),d.initialize=function(){return!(!d.initialized&&(d.d="string"==typeof e?document.getElementById(e):e,!d.d||(d.startVal=Number(t),d.endVal=Number(a),!c(d.startVal)||!c(d.endVal)||(d.decimals=Math.max(0,n||0),d.dec=Math.pow(10,d.decimals),d.duration=1e3*Number(r)||2e3,d.countDown=d.startVal>d.endVal,d.frameVal=d.startVal,d.initialized=!0,0))))},d.printValue=function(e){var t=d.options.formattingFn(e);"INPUT"===d.d.tagName?this.d.value=t:"text"===d.d.tagName||"tspan"===d.d.tagName?this.d.textContent=t:this.d.innerHTML=t},d.count=function(e){d.startTime||(d.startTime=e),d.timestamp=e;var t=e-d.startTime;d.remaining=d.duration-t,d.options.useEasing?d.countDown?d.frameVal=d.startVal-d.options.easingFn(t,0,d.startVal-d.endVal,d.duration):d.frameVal=d.options.easingFn(t,d.startVal,d.endVal-d.startVal,d.duration):d.countDown?d.frameVal=d.startVal-(d.startVal-d.endVal)*(t/d.duration):d.frameVal=d.startVal+(d.endVal-d.startVal)*(t/d.duration),d.countDown?d.frameVal=d.frameVal<d.endVal?d.endVal:d.frameVal:d.frameVal=d.frameVal>d.endVal?d.endVal:d.frameVal,d.frameVal=Math.round(d.frameVal*d.dec)/d.dec,d.printValue(d.frameVal),t<d.duration?d.rAF=requestAnimationFrame(d.count):d.callback&&d.callback()},d.start=function(e){d.initialize()&&(d.callback=e,d.rAF=requestAnimationFrame(d.count))},d.pauseResume=function(){d.paused?(d.paused=!1,delete d.startTime,d.duration=d.remaining,d.startVal=d.frameVal,requestAnimationFrame(d.count)):(d.paused=!0,cancelAnimationFrame(d.rAF))},d.reset=function(){d.paused=!1,delete d.startTime,d.initialized=!1,d.initialize()&&(cancelAnimationFrame(d.rAF),d.printValue(d.startVal))},d.update=function(e){d.initialize()&&e!==d.frameVal&&(cancelAnimationFrame(d.rAF),d.paused=!1,delete d.startTime,d.startVal=d.frameVal,d.endVal=Number(e),c(d.endVal)&&(d.countDown=d.startVal>d.endVal,d.rAF=requestAnimationFrame(d.count)))},d.initialize()&&d.printValue(d.startVal)}})}});