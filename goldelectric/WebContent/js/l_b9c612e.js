;/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
;/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/uxsolutions/bootstrap-datepicker/
 * Demo: https://eternicode.github.io/bootstrap-datepicker/
 * Docs: https://bootstrap-datepicker.readthedocs.org/
 * =========================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function(factory){
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('common:static/lib/jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){
	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method, deprecationMsg){
		return function(){
			if (deprecationMsg !== undefined) {
				$.fn.datepicker.deprecated(deprecationMsg);
			}

			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
          // Use date arithmetic to allow dates with different times to match
          if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000*60*60*24)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$.data(element, 'datepicker', this);
		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		if (this.component && this.component.length === 0)
			this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}

		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		if (this.o.calendarWeeks) {
			this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear')
				.attr('colspan', function(i, val){
					return Number(val) + 1;
				});
		}

		this._process_options({
			startDate: this._o.startDate,
			endDate: this._o.endDate,
			daysOfWeekDisabled: this.o.daysOfWeekDisabled,
			daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
			datesDisabled: this.o.datesDisabled
		});

		this._allow_update = false;
		this.setViewMode(this.o.startView);
		this._allow_update = true;

		this.fillDow();
		this.fillMonths();

		this.update();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view){
			$.each(DPGlobal.viewModes, function(i, viewMode){
				if (view === i || $.inArray(view, viewMode.names) !== -1){
					view = i;
					return false;
				}
			});

			return view;
		},

		_resolveDaysOfWeek: function(daysOfWeek){
			if (!$.isArray(daysOfWeek))
				daysOfWeek = daysOfWeek.split(/[,\s]*/);
			return $.map(daysOfWeek, Number);
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView);
			o.minViewMode = this._resolveViewName(o.minViewMode);
			o.maxViewMode = this._resolveViewName(o.maxViewMode);

			// Check view is between min and max
			o.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled||[]);
			o.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted||[]);

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = o.datesDisabled.split(',');
			}
			o.datesDisabled = $.map(o.datesDisabled, function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {
				o.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);
			} else if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            // component: input + button
            else if (this.component && this.inputField.length) {
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[this.picker, '.prev, .next', {
					click: $.proxy(this.navArrowsClick, this)
				}],
				[this.picker, '.day:not(.disabled)', {
					click: $.proxy(this.dayCellClick, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.isInline
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				viewMode: this.viewMode,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					} else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (this.inputField.prop('disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline || !this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.setViewMode(this.o.startView);

			if (this.o.forceParse && this.inputField.val())
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(e){
			var dateString;
			if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types
				&& $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {
				dateString = e.originalEvent.clipboardData.getData('text/plain');
			} else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			} else {
				return;
			}
			this.setDate(dateString);
			this.update();
			e.preventDefault();
		},

		_utc_to_local: function(utc){
			if (!utc) {
				return utc;
			}

			var local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));

			if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {
				local = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));
			}

			return local;
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (selected_date !== undefined) {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			this.inputField.val('');
			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.setDates.apply(this, $.map(args, this._utc_to_local));
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			return this;
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [0];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left;
			var top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					if (this.o.rtl) {
						// Default to right
						this.picker.addClass('datepicker-orient-right');
					} else {
						// Default to left
						this.picker.addClass('datepicker-orient-left');
					}
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top')) + 6;
			else
				top += height + 11;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			} else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.o.updateViewDate) {
				if (this.dates.length)
					this.viewDate = new Date(this.dates.get(-1));
				else if (this.viewDate < this.o.startDate)
					this.viewDate = new Date(this.o.startDate);
				else if (this.viewDate > this.o.endDate)
					this.viewDate = new Date(this.o.endDate);
				else
					this.viewDate = this.o.defaultViewDate;
			}

			if (fromArgs){
				// setting date by clicking
				this.setValue();
				this.element.change();
			}
			else if (this.dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates) && fromArgs) {
					this._trigger('changeDate');
					this.element.change();
				}
			}
			if (!this.dates.length && oldDates.length) {
				this._trigger('clearDate');
				this.element.change();
			}

			this.fill();
			return this;
		},

		fillDow: function(){
      if (this.o.showWeekDays) {
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
      }
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '';
			var focused;
			for (var i = 0; i < 12; i++){
				focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = UTCToday();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with UTC today, not local today
			if (this.o.todayHighlight && isUTCEquals(date, today)) {
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');
			}
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, year, startYear, endYear, beforeFn){
			var html = '';
			var step = factor / 10;
			var view = this.picker.find(selector);
			var startVal = Math.floor(year / factor) * factor;
			var endVal = startVal + step * 9;
			var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;
			var selected = $.map(this.dates, function(d){
				return Math.floor(d.getUTCFullYear() / step) * step;
			});

			var classes, tooltip, before;
			for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {
				classes = [cssClass];
				tooltip = null;

				if (currVal === startVal - step) {
					classes.push('old');
				} else if (currVal === endVal + step) {
					classes.push('new');
				}
				if ($.inArray(currVal, selected) !== -1) {
					classes.push('active');
				}
				if (currVal < startYear || currVal > endYear) {
					classes.push('disabled');
				}
				if (currVal === focusedVal) {
				  classes.push('focused');
        }

				if (beforeFn !== $.noop) {
					before = beforeFn(new Date(currVal, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof before === 'boolean') {
						before = {enabled: before};
					} else if (typeof before === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
			}

			view.find('.datepicker-switch').text(startVal + '-' + endVal);
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
						.css('display', this.o.todayBtn === true || this.o.todayBtn === 'linked' ? 'table-cell' : 'none');
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.css('display', this.o.clearBtn === true ? 'table-cell' : 'none');
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month, 0),
				day = prevMonth.getUTCDate();
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var weekDay, clsName;
			while (prevMonth.valueOf() < nextMonth){
				weekDay = prevMonth.getUTCDay();
				if (weekDay === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek = (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				var content = prevMonth.getUTCDate();

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
					if (before.content)
						content = before.content;
				}

				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
				//Fallback to unique function for older jquery versions
				if ($.isFunction($.uniqueSort)) {
					clsName = $.uniqueSort(clsName);
				} else {
					clsName = $.unique(clsName);
				}

				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + ' data-date="' + prevMonth.getTime().toString() + '">' + content + '</td>');
				tooltip = null;
				if (weekDay === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
			}
			this.picker.find('.datepicker-days tbody').html(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('tbody span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				var that = this;
				$.each(months, function(i, month){
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				prevIsDisabled,
				nextIsDisabled,
				factor = 1;
			switch (this.viewMode){
				case 4:
					factor *= 10;
					/* falls through */
				case 3:
					factor *= 10;
					/* falls through */
				case 2:
					factor *= 10;
					/* falls through */
				case 1:
					prevIsDisabled = Math.floor(year / factor) * factor < startYear;
					nextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;
					break;
				case 0:
					prevIsDisabled = year <= startYear && month < startMonth;
					nextIsDisabled = year >= endYear && month > endMonth;
					break;
			}

			this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);
			this.picker.find('.next').toggleClass('disabled', nextIsDisabled);
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode){
				this.setViewMode(this.viewMode + 1);
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.setViewMode(0);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a month, year, decade, century
				if (target.hasClass('month')
						|| target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					if (this.viewMode === 1){
						month = target.parent().find('span').index(target);
						year = this.viewDate.getUTCFullYear();
						this.viewDate.setUTCMonth(month);
					} else {
						month = 0;
						year = Number(target.text());
						this.viewDate.setUTCFullYear(year);
					}

					this._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);

					if (this.viewMode === this.o.minViewMode){
						this._setDate(UTCDate(year, month, day));
					} else {
						this.setViewMode(this.viewMode - 1);
						this.fill();
					}
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				this._focused_from.focus();
			}
			delete this._focused_from;
		},

		dayCellClick: function(e){
			var $target = $(e.currentTarget);
			var timestamp = $target.data('date');
			var date = new Date(timestamp);

			if (this.o.updateViewDate) {
				if (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {
					this._trigger('changeYear', this.viewDate);
				}

				if (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {
					this._trigger('changeMonth', this.viewDate);
				}
			}
			this._setDate(date);
		},

		// Clicked on prev or next
		navArrowsClick: function(e){
			var $target = $(e.currentTarget);
			var dir = $target.hasClass('prev') ? -1 : 1;
			if (this.viewMode !== 0){
				dir *= DPGlobal.viewModes[this.viewMode].navStep * 12;
			}
			this.viewDate = this.moveMonth(this.viewDate, dir);
			this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);
			this.fill();
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if ((!which && this.o.updateViewDate) || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			this.inputField.trigger('change');
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					} else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					} else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					} else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				this.inputField.trigger('change');
			}
		},

		setViewMode: function(viewMode){
			this.viewMode = viewMode;
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
      this._trigger('changeViewMode', new Date(this.viewDate));
		}
	};

	var DateRangePicker = function(element, options){
		$.data(element, 'datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		this.keepEmptyValues = options.keepEmptyValues;
		delete options.keepEmptyValues;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $.data(i, 'datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		clearDates: function(){
			$.each(this.pickers, function(i, p){
				p.clearDates();
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $.data(e.target, 'datepicker');

			if (dp === undefined) {
				return;
			}

			var new_date = dp.getUTCDate(),
				keep_empty_values = this.keepEmptyValues,
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate() && (p === dp || !keep_empty_values))
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			} else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		destroy: function(){
			$.map(this.pickers, function(p){ p.destroy(); });
			$(this.inputs).off('changeDate', this.dateUpdated);
			delete this.element.data().datepicker;
		},
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keepEmptyValues: false,
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		updateViewDate: true,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&lt;',
			rightArrow: '&gt;'
		},
    showWeekDays: true
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		viewModes: [
			{
				names: ['days', 'month'],
				clsName: 'days',
				e: 'changeMonth'
			},
			{
				names: ['months', 'year'],
				clsName: 'months',
				e: 'changeYear',
				navStep: 1
			},
			{
				names: ['years', 'decade'],
				clsName: 'years',
				e: 'changeDecade',
				navStep: 10
			},
			{
				names: ['decades', 'century'],
				clsName: 'decades',
				e: 'changeCentury',
				navStep: 100
			},
			{
				names: ['centuries', 'millennium'],
				clsName: 'centuries',
				e: 'changeMillennium',
				navStep: 1000
			}
		],
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
				return format.toValue(date, format, language);
			var fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				parts, part, dir, i, fn;
			if (date in dateAliases){
				date = dateAliases[date];
			}
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(date)){
				parts = date.match(/([\-+]\d+)([dmwy])/gi);
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = parts[i].match(/([\-+]\d+)([dmwy])/i);
					dir = Number(part[1]);
					fn = fn_map[part[2].toLowerCase()];
					date = Datepicker.prototype[fn](date, dir);
				}
				return Datepicker.prototype._zero_utc_time(date);
			}

			parts = date && date.match(this.nonpunctuation) || [];

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['yy'] = setters_map['yyyy'];
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">'+defaults.templates.leftArrow+'</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">'+defaults.templates.rightArrow+'</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.7.1';

	$.fn.datepicker.deprecated = function(msg){
		var console = window.console;
		if (console && console.warn) {
			console.warn('DEPRECATED: ' + msg);
		}
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));
;/**
 * Simplified Chinese translation for bootstrap-datepicker
 * Yuan Cheung <advanimal@gmail.com>
 */

;(function($){
	$.fn.datepicker.dates['zh-CN'] = {
		days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
		daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
		daysMin:  ["日", "一", "二", "三", "四", "五", "六"],
		months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
		today: "今日",
		clear: "清除",
		format: "yyyy年mm月dd日",
		titleFormat: "yyyy年mm月",
		weekStart: 1
	};
}(jQuery));
;!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.echarts=e()}(this,function(){var t,e;!function(){function i(t,e){if(!e)return t;if(0===t.indexOf(".")){var i=e.split("/"),n=t.split("/"),r=i.length-1,a=n.length,o=0,s=0;t:for(var l=0;a>l;l++)switch(n[l]){case"..":if(!(r>o))break t;o++,s++;break;case".":s++;break;default:break t}return i.length=r-o,n=n.slice(s),i.concat(n).join("/")}return t}function n(t){function e(e,o){if("string"==typeof e){var s=n[e];return s||(s=a(i(e,t)),n[e]=s),s}e instanceof Array&&(o=o||function(){},o.apply(this,r(e,o,t)))}var n={};return e}function r(e,n,r){for(var s=[],l=o[r],u=0,c=Math.min(e.length,n.length);c>u;u++){var h,f=i(e[u],r);switch(f){case"require":h=l&&l.require||t;break;case"exports":h=l.exports;break;case"module":h=l;break;default:h=a(f)}s.push(h)}return s}function a(t){var e=o[t];if(!e)throw new Error("No "+t);if(!e.defined){var i=e.factory,n=i.apply(this,r(e.deps||[],i,t));"undefined"!=typeof n&&(e.exports=n),e.defined=1}return e.exports}var o={};e=function(t,e,i){o[t]={id:t,deps:e,factory:i,defined:0,exports:{},require:n(t)}},t=n("")}();var i="moveTo",n="__dirty",r="transform",a="../../echarts",o="retrieve",s="category",l="dataToCoord",u="dimensions",c="getAxis",h="dataToPoint",f="../../util/graphic",d="parsePercent",p="getItemModel",v="rotation",m="inside",g="stroke",y="lineWidth",_="applyTransform",x="getItemGraphicEl",b="normal",w="ecModel",M="getShallow",S="getItemVisual",T="getName",C="ordinal",P="getBaseAxis",L="createElement",A="undefined",k="getExtent",z="getTicks",D="contain",I="coordinateSystem",O="opacity",E="position",R="center",B="middle",N="getBoundingRect",G="getFont",F="textAlign",V="textStyle",H="removeAll",q="inherits",W="indexOf",U="filter",Z="number",j="function",X="isArray",Y="replace",$="zlevel",Q="setStyle",K="traverse",J="dataIndex",te="target",ee="mouseout",ie="splice",ne="series",re="length",ae="defaults",oe="extend",se="remove",le="isObject",ue="getData",ce="eachSeries",he="update",fe="create",de="height",pe="bottom",ve="ignore",me="storage",ge="canvasSupported",ye="getHeight",_e="getWidth",xe="getModel",be="animation",we="resize",Me="string",Se="prototype",Te="toLowerCase",Ce="zrender/core/util",Pe="zrender/core/env",Le="require";e("echarts/echarts",[Le,Pe,"./model/Global","./ExtensionAPI","./CoordinateSystem","./model/OptionManager","./model/Component","./model/Series","./view/Component","./view/Chart","./util/graphic","zrender",Ce,"zrender/tool/color","zrender/mixin/Eventful","zrender/core/timsort","./visual/seriesColor","./preprocessor/backwardCompat","./loading/default","./data/List","./model/Model","./util/number","./util/format","zrender/core/matrix","zrender/core/vector"],function(t){function e(t){return function(e,i,n){e=e&&e[Te](),A[Se][t].call(this,e,i,n)}}function i(){A.call(this)}function n(t,e,n){function r(t,e){return t.prio-e.prio}n=n||{},typeof e===Me&&(e=Ee[e]),this.id,this.group,this._dom=t,this._zr=C.init(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio}),this._theme=P.clone(e),this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._api=new y(this),this._coordSysMgr=new _,A.call(this),this._messageCenter=new i,this._initEvents(),this[we]=P.bind(this[we],this),this._pendingActions=[],k(Oe,r),k(De,r),this._zr[be].on("frame",this._onframe,this)}function r(t,e){var i=this._model;i&&i.eachComponent({mainType:"series",query:e},function(n){var r=this._chartsMap[n.__viewId];r&&r.__alive&&r[t](n,i,this._api,e)},this)}function a(t,e,i){var n=this._api;z(this._componentsViews,function(r){var a=r.__model;r[t](a,e,n,i),p(a,r)},this),e[ce](function(r){var a=this._chartsMap[r.__viewId];a[t](r,e,n,i),p(r,a),d(r,a)},this),f(this._zr,e)}function o(t,e){for(var i="component"===t,n=i?this._componentsViews:this._chartsViews,r=i?this._componentsMap:this._chartsMap,a=this._zr,o=0;o<n[re];o++)n[o].__alive=!1;e[i?"eachComponent":ce](function(t,o){if(i){if(t===ne)return}else o=t;var s=o.id+"_"+o.type,l=r[s];if(!l){var u=b.parseClassType(o.type),c=i?M.getClass(u.main,u.sub):S.getClass(u.sub);if(!c)return;l=new c,l.init(e,this._api),r[s]=l,n.push(l),a.add(l.group)}o.__viewId=s,l.__alive=!0,l.__id=s,l.__model=o},this);for(var o=0;o<n[re];){var s=n[o];s.__alive?o++:(a[se](s.group),s.dispose(e,this._api),n[ie](o,1),delete r[s.__id])}}function s(t,e){z(De,function(i){i.func(t,e)})}function l(t){var e={};t[ce](function(t){var i=t.get("stack"),n=t[ue]();if(i&&"list"===n.type){var r=e[i];r&&(n.stackedOn=r),e[i]=n}})}function u(t,e){var i=this._api;z(Oe,function(n){n.isLayout&&n.func(t,i,e)})}function c(t,e){var i=this._api;t.clearColorPalette(),t[ce](function(t){t.clearColorPalette()}),z(Oe,function(n){n.func(t,i,e)})}function h(t,e){var i=this._api;z(this._componentsViews,function(n){var r=n.__model;n.render(r,t,i,e),p(r,n)},this),z(this._chartsViews,function(t){t.__alive=!1},this),t[ce](function(n){var r=this._chartsMap[n.__viewId];r.__alive=!0,r.render(n,t,i,e),r.group.silent=!!n.get("silent"),p(n,r),d(n,r)},this),f(this._zr,t),z(this._chartsViews,function(e){e.__alive||e[se](t,i)},this)}function f(t,e){var i=t[me],n=0;i[K](function(t){t.isGroup||n++}),n>e.get("hoverLayerThreshold")&&!m.node&&i[K](function(t){t.isGroup||(t.useHoverLayer=!0)})}function d(t,e){var i=0;e.group[K](function(t){"group"===t.type||t[ve]||i++});var n=+t.get("progressive"),r=i>t.get("progressiveThreshold")&&n&&!m.node;r&&e.group[K](function(t){t.isGroup||(t.progressive=r?Math.floor(i++/n):-1,r&&t.stopAnimation(!0))});var a=t.get("blendMode")||null;e.group[K](function(t){t.isGroup||t[Q]("blend",a)})}function p(t,e){var i=t.get("z"),n=t.get($);e.group[K](function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=n&&(t[$]=n))})}function v(t){function e(t,e){for(var i=0;i<t[re];i++){var n=t[i];n[a]=e}}var i=0,n=1,r=2,a="__connectUpdateStatus";P.each(ze,function(o,s){t._messageCenter.on(s,function(o){if(Ne[t.group]&&t[a]!==i){var s=t.makeActionFromEvent(o),l=[];for(var u in Be){var c=Be[u];c!==t&&c.group===t.group&&l.push(c)}e(l,i),z(l,function(t){t[a]!==n&&t.dispatchAction(s)}),e(l,r)}})})}var m=t(Pe),g=t("./model/Global"),y=t("./ExtensionAPI"),_=t("./CoordinateSystem"),x=t("./model/OptionManager"),b=t("./model/Component"),w=t("./model/Series"),M=t("./view/Component"),S=t("./view/Chart"),T=t("./util/graphic"),C=t("zrender"),P=t(Ce),L=t("zrender/tool/color"),A=t("zrender/mixin/Eventful"),k=t("zrender/core/timsort"),z=P.each,D=1e3,I=5e3,O=1e3,E=2e3,R=3e3,B=4e3,N=5e3,G="__flag_in_main_process",F="_hasGradientOrPatternBg",V="_optionUpdated";i[Se].on=e("on"),i[Se].off=e("off"),i[Se].one=e("one"),P.mixin(i,A);var H=n[Se];H._onframe=function(){this[V]&&(this[G]=!0,Le.prepareAndUpdate.call(this),this[G]=!1,this[V]=!1)},H.getDom=function(){return this._dom},H.getZr=function(){return this._zr},H.setOption=function(t,e,i){if(this[G]=!0,!this._model||e){var n=new x(this._api),r=this._theme,a=this._model=new g(null,null,r,n);a.init(null,null,r,n)}this._model.setOption(t,Ie),i?this[V]=!0:(Le.prepareAndUpdate.call(this),this._zr.refreshImmediately(),this[V]=!1),this[G]=!1,this._flushPendingActions()},H.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},H[xe]=function(){return this._model},H.getOption=function(){return this._model&&this._model.getOption()},H[_e]=function(){return this._zr[_e]()},H[ye]=function(){return this._zr[ye]()},H.getRenderedCanvas=function(t){if(m[ge]){t=t||{},t.pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor");var e=this._zr,i=e[me].getDisplayList();return P.each(i,function(t){t.stopAnimation(!0)}),e.painter.getRenderedCanvas(t)}},H.getDataURL=function(t){t=t||{};var e=t.excludeComponents,i=this._model,n=[],r=this;z(e,function(t){i.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group[ve]||(n.push(e),e.group[ve]=!0)})});var a=this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return z(n,function(t){t.group[ve]=!1}),a},H.getConnectedDataURL=function(t){if(m[ge]){var e=this.group,i=Math.min,n=Math.max,r=1/0;if(Ne[e]){var a=r,o=r,s=-r,l=-r,u=[],c=t&&t.pixelRatio||1;for(var h in Be){var f=Be[h];if(f.group===e){var d=f.getRenderedCanvas(P.clone(t)),p=f.getDom().getBoundingClientRect();a=i(p.left,a),o=i(p.top,o),s=n(p.right,s),l=n(p[pe],l),u.push({dom:d,left:p.left,top:p.top})}}a*=c,o*=c,s*=c,l*=c;var v=s-a,g=l-o,y=P.createCanvas();y.width=v,y[de]=g;var _=C.init(y);return z(u,function(t){var e=new T.Image({style:{x:t.left*c-a,y:t.top*c-o,image:t.dom}});_.add(e)}),_.refreshImmediately(),y.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}};var Le={update:function(t){var e=this._model,i=this._api,n=this._coordSysMgr,r=this._zr;if(e){e.restoreData(),n[fe](this._model,this._api),s.call(this,e,i),l.call(this,e),n[he](e,i),c.call(this,e,t),h.call(this,e,t);var a=e.get("backgroundColor")||"transparent",o=r.painter;if(o.isSingleCanvas&&o.isSingleCanvas())r.configLayer(0,{clearColor:a});else{if(!m[ge]){var u=L.parse(a);a=L.stringify(u,"rgb"),0===u[3]&&(a="transparent")}a.colorStops||a.image?(r.configLayer(0,{clearColor:a}),this[F]=!0,this._dom.style.background="transparent"):(this[F]&&r.configLayer(0,{clearColor:null}),this[F]=!1,this._dom.style.background=a)}}},updateView:function(t){var e=this._model;e&&(e[ce](function(t){t[ue]().clearAllVisual()}),c.call(this,e,t),a.call(this,"updateView",e,t))},updateVisual:function(t){var e=this._model;e&&(e[ce](function(t){t[ue]().clearAllVisual()}),c.call(this,e,t),a.call(this,"updateVisual",e,t))},updateLayout:function(t){var e=this._model;e&&(u.call(this,e,t),a.call(this,"updateLayout",e,t))},highlight:function(t){r.call(this,"highlight",t)},downplay:function(t){r.call(this,"downplay",t)},prepareAndUpdate:function(t){var e=this._model;o.call(this,"component",e),o.call(this,"chart",e),Le[he].call(this,t)}};H[we]=function(){this[G]=!0,this._zr[we]();var t=this._model&&this._model.resetOption("media");Le[t?"prepareAndUpdate":he].call(this),this._loadingFX&&this._loadingFX[we](),this[G]=!1,this._flushPendingActions()},H.showLoading=function(t,e){if(P[le](t)&&(e=t,t=""),t=t||"default",this.hideLoading(),Re[t]){var i=Re[t](this._api,e),n=this._zr;this._loadingFX=i,n.add(i)}},H.hideLoading=function(){this._loadingFX&&this._zr[se](this._loadingFX),this._loadingFX=null},H.makeActionFromEvent=function(t){var e=P[oe]({},t);return e.type=ze[t.type],e},H.dispatchAction=function(t,e){var i=ke[t.type];if(i){var n=i.actionInfo,r=n[he]||he;if(this[G])return void this._pendingActions.push(t);this[G]=!0;var a=[t],o=!1;t.batch&&(o=!0,a=P.map(t.batch,function(e){return e=P[ae](P[oe]({},e),t),e.batch=null,e}));for(var s,l=[],u="highlight"===t.type||"downplay"===t.type,c=0;c<a[re];c++){var h=a[c];s=i.action(h,this._model),s=s||P[oe]({},h),s.type=n.event||s.type,l.push(s),u&&Le[r].call(this,h)}"none"===r||u||(this[V]?(Le.prepareAndUpdate.call(this,t),this[V]=!1):Le[r].call(this,t)),s=o?{type:n.event||t.type,batch:l}:l[0],this[G]=!1,!e&&this._messageCenter.trigger(s.type,s),this._flushPendingActions()}},H._flushPendingActions=function(){for(var t=this._pendingActions;t[re];){var e=t.shift();this.dispatchAction(e)}},H.on=e("on"),H.off=e("off"),H.one=e("one");var Ae=["click","dblclick","mouseover",ee,"mousemove","mousedown","mouseup","globalout"];H._initEvents=function(){z(Ae,function(t){this._zr.on(t,function(e){var i=this[xe](),n=e[te];if(n&&null!=n[J]){var r=n.dataModel||i.getSeriesByIndex(n.seriesIndex),a=r&&r.getDataParams(n[J],n.dataType)||{};a.event=e,a.type=t,this.trigger(t,a)}else n&&n.eventData&&this.trigger(t,n.eventData)},this)},this),z(ze,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},H.isDisposed=function(){return this._disposed},H.clear=function(){this.setOption({series:[]},!0)},H.dispose=function(){if(!this._disposed){this._disposed=!0;var t=this._api,e=this._model;z(this._componentsViews,function(i){i.dispose(e,t)}),z(this._chartsViews,function(i){i.dispose(e,t)}),this._zr.dispose(),delete Be[this.id]}},P.mixin(n,A);var ke=[],ze={},De=[],Ie=[],Oe=[],Ee={},Re={},Be={},Ne={},Ge=new Date-0,Fe=new Date-0,Ve="_echarts_instance_",He={version:"3.2.3",dependencies:{zrender:"3.1.3"}};He.init=function(t,e,i){var r=new n(t,e,i);return r.id="ec_"+Ge++,Be[r.id]=r,t.setAttribute&&t.setAttribute(Ve,r.id),v(r),r},He.connect=function(t){if(P[X](t)){var e=t;t=null,P.each(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+Fe++,P.each(e,function(e){e.group=t})}return Ne[t]=!0,t},He.disConnect=function(t){Ne[t]=!1},He.dispose=function(t){P.isDom(t)?t=He.getInstanceByDom(t):typeof t===Me&&(t=Be[t]),t instanceof n&&!t.isDisposed()&&t.dispose()},He.getInstanceByDom=function(t){var e=t.getAttribute(Ve);return Be[e]},He.getInstanceById=function(t){return Be[t]},He.registerTheme=function(t,e){Ee[t]=e},He.registerPreprocessor=function(t){Ie.push(t)},He.registerProcessor=function(t,e){typeof t===j&&(e=t,t=D),De.push({prio:t,func:e})},He.registerAction=function(t,e,i){typeof e===j&&(i=e,e="");var n=P[le](t)?t.type:[t,t={event:e}][0];t.event=(t.event||n)[Te](),e=t.event,ke[n]||(ke[n]={action:i,actionInfo:t}),ze[e]=n},He.registerCoordinateSystem=function(t,e){_.register(t,e)},He.registerLayout=function(t,e){typeof t===j&&(e=t,t=O),Oe.push({prio:t,func:e,isLayout:!0})},He.registerVisual=function(t,e){typeof t===j&&(e=t,t=R),Oe.push({prio:t,func:e})},He.registerLoading=function(t,e){Re[t]=e};var qe=b.parseClassType;return He.extendComponentModel=function(t,e){var i=b;if(e){var n=qe(e);i=b.getClass(n.main,n.sub,!0)}return i[oe](t)},He.extendComponentView=function(t,e){var i=M;if(e){var n=qe(e);i=M.getClass(n.main,n.sub,!0)}return i[oe](t)},He.extendSeriesModel=function(t,e){var i=w;if(e){e="series."+e[Y]("series.","");var n=qe(e);i=w.getClass(n.main,n.sub,!0)}return i[oe](t)},He.extendChartView=function(t,e){var i=S;if(e){e[Y]("series.","");var n=qe(e);i=S.getClass(n.main,!0)}return i[oe](t)},He.setCanvasCreator=function(t){P.createCanvas=t},He.registerVisual(E,t("./visual/seriesColor")),He.registerPreprocessor(t("./preprocessor/backwardCompat")),He.registerLoading("default",t("./loading/default")),He.registerAction({type:"highlight",event:"highlight",update:"highlight"},P.noop),He.registerAction({type:"downplay",event:"downplay",update:"downplay"},P.noop),He.List=t("./data/List"),He.Model=t("./model/Model"),He.graphic=t("./util/graphic"),He[Z]=t("./util/number"),He.format=t("./util/format"),He.matrix=t("zrender/core/matrix"),He.vector=t("zrender/core/vector"),He.color=t("zrender/tool/color"),He.util={},z(["map","each",U,W,q,"reduce",U,"bind","curry",X,"isString",le,"isFunction",oe,ae],function(t){He.util[t]=P[t]}),He.PRIORITY={PROCESSOR:{FILTER:D,STATISTIC:I},VISUAL:{LAYOUT:O,GLOBAL:E,CHART:R,COMPONENT:B,BRUSH:N}},He}),e("echarts/chart/line",[Le,Ce,"../echarts","./line/LineSeries","./line/LineView","../visual/symbol","../layout/points","../processor/dataSample","../component/grid"],function(t){var e=t(Ce),i=t("../echarts"),n=i.PRIORITY;t("./line/LineSeries"),t("./line/LineView"),i.registerVisual(e.curry(t("../visual/symbol"),"line","circle","line")),i.registerLayout(e.curry(t("../layout/points"),"line")),i.registerProcessor(n.PROCESSOR.STATISTIC,e.curry(t("../processor/dataSample"),"line")),t("../component/grid")}),e("echarts/chart/bar",[Le,Ce,"../coord/cartesian/Grid","./bar/BarSeries","./bar/BarView","../layout/barGrid","../echarts","../component/grid"],function(t){var e=t(Ce);t("../coord/cartesian/Grid"),t("./bar/BarSeries"),t("./bar/BarView");var i=t("../layout/barGrid"),n=t("../echarts");n.registerLayout(e.curry(i,"bar")),n.registerVisual(function(t){t.eachSeriesByType("bar",function(t){var e=t[ue]();e.setVisual("legendSymbol","roundRect")})}),t("../component/grid")}),e("echarts/component/title",[Le,"../echarts","../util/graphic","../util/layout"],function(t){var e=t("../echarts"),i=t("../util/graphic"),n=t("../util/layout");e.extendComponentModel({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),e.extendComponentView({type:"title",render:function(t,e,r){if(this.group[H](),t.get("show")){var a=this.group,o=t[xe](V),s=t[xe]("subtextStyle"),l=t.get(F),u=t.get("textBaseline"),c=new i.Text({style:{text:t.get("text"),textFont:o[G](),fill:o.getTextColor()},z2:10}),h=c[N](),f=t.get("subtext"),d=new i.Text({style:{text:f,textFont:s[G](),fill:s.getTextColor(),y:h[de]+t.get("itemGap"),textBaseline:"top"},z2:10}),p=t.get("link"),v=t.get("sublink");c.silent=!p,d.silent=!v,p&&c.on("click",function(){window.open(p,"_"+t.get(te))}),v&&d.on("click",function(){window.open(v,"_"+t.get("subtarget"))}),a.add(c),f&&a.add(d);var m=a[N](),g=t.getBoxLayoutParams();g.width=m.width,g[de]=m[de];var y=n.getLayoutRect(g,{width:r[_e](),height:r[ye]()},t.get("padding"));l||(l=t.get("left")||t.get("right"),l===B&&(l=R),"right"===l?y.x+=y.width:l===R&&(y.x+=y.width/2)),u||(u=t.get("top")||t.get(pe),u===R&&(u=B),u===pe?y.y+=y[de]:u===B&&(y.y+=y[de]/2),u=u||"top"),a.attr(E,[y.x,y.y]);var _={textAlign:l,textVerticalAlign:u};c[Q](_),d[Q](_),m=a[N]();var x=y.margin,b=t.getItemStyle(["color",O]);b.fill=t.get("backgroundColor");var w=new i.Rect({shape:{x:m.x-x[3],y:m.y-x[0],width:m.width+x[1]+x[3],height:m[de]+x[0]+x[2]},style:b,silent:!0});i.subPixelOptimizeRect(w),a.add(w)}}})}),e("echarts/chart/pie",[Le,Ce,"../echarts","./pie/PieSeries","./pie/PieView","../action/createDataSelectAction","../visual/dataColor","./pie/pieLayout","../processor/dataFilter"],function(t){var e=t(Ce),i=t("../echarts");t("./pie/PieSeries"),t("./pie/PieView"),t("../action/createDataSelectAction")("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),i.registerVisual(e.curry(t("../visual/dataColor"),"pie")),i.registerLayout(e.curry(t("./pie/pieLayout"),"pie")),i.registerProcessor(e.curry(t("../processor/dataFilter"),"pie"))}),e("echarts/component/grid",[Le,"../util/graphic",Ce,"../echarts","../coord/cartesian/Grid","./axis"],function(t){var e=t("../util/graphic"),i=t(Ce),n=t("../echarts");t("../coord/cartesian/Grid"),t("./axis"),n.extendComponentView({type:"grid",render:function(t){this.group[H](),t.get("show")&&this.group.add(new e.Rect({shape:t[I].getRect(),style:i[ae]({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0}))}}),n.registerPreprocessor(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})})}),e("echarts/component/legend",[Le,"./legend/LegendModel","./legend/legendAction","./legend/LegendView","../echarts","./legend/legendFilter"],function(t){t("./legend/LegendModel"),t("./legend/legendAction"),t("./legend/LegendView");var e=t("../echarts");e.registerProcessor(t("./legend/legendFilter"))}),e("echarts/component/tooltip",[Le,"./tooltip/TooltipModel","./tooltip/TooltipView","../echarts"],function(t){t("./tooltip/TooltipModel"),t("./tooltip/TooltipView"),t("../echarts").registerAction({type:"showTip",event:"showTip",update:"none"},function(){}),t("../echarts").registerAction({type:"hideTip",event:"hideTip",update:"none"},function(){})}),e("echarts/component/markPoint",[Le,"./marker/MarkPointModel","./marker/MarkPointView","../echarts"],function(t){t("./marker/MarkPointModel"),t("./marker/MarkPointView"),t("../echarts").registerPreprocessor(function(t){t.markPoint=t.markPoint||{}})}),e("zrender/vml/vml",[Le,"./graphic","../zrender","./Painter"],function(t){t("./graphic"),t("../zrender").registerPainter("vml",t("./Painter"))}),e("echarts/scale/Time",[Le,Ce,"../util/number","../util/format","./Interval"],function(t){var e=t(Ce),i=t("../util/number"),n=t("../util/format"),r=t("./Interval"),a=r[Se],o=Math.ceil,s=Math.floor,l=1e3,u=60*l,c=60*u,h=24*c,f=function(t,e,i,n){for(;n>i;){var r=i+n>>>1;t[r][2]<e?i=r+1:n=r}return i},d=r[oe]({type:"time",getLabel:function(t){var e=this._stepLvl,i=new Date(t);return n.formatTime(e[0],i)},niceExtent:function(t,e,n){var r=this._extent;if(r[0]===r[1]&&(r[0]-=h,r[1]+=h),r[1]===-1/0&&1/0===r[0]){var a=new Date;r[1]=new Date(a.getFullYear(),a.getMonth(),a.getDate()),r[0]=r[1]-h}this.niceTicks(t);var l=this._interval;e||(r[0]=i.round(s(r[0]/l)*l)),n||(r[1]=i.round(o(r[1]/l)*l))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0],r=n/t,a=p[re],l=f(p,r,0,a),u=p[Math.min(l,a-1)],c=u[2];if("year"===u[0]){var h=n/c,d=i.nice(h/t,!0);c*=d}var v=[o(e[0]/c)*c,s(e[1]/c)*c];this._stepLvl=u,this._interval=c,this._niceExtent=v},parse:function(t){return+i.parseDate(t)}});e.each([D,"normalize"],function(t){d[Se][t]=function(e){return a[t].call(this,this.parse(e))}});var p=[["hh:mm:ss",1,l],["hh:mm:ss",5,5*l],["hh:mm:ss",10,10*l],["hh:mm:ss",15,15*l],["hh:mm:ss",30,30*l],["hh:mm\nMM-dd",1,u],["hh:mm\nMM-dd",5,5*u],["hh:mm\nMM-dd",10,10*u],["hh:mm\nMM-dd",15,15*u],["hh:mm\nMM-dd",30,30*u],["hh:mm\nMM-dd",1,c],["hh:mm\nMM-dd",2,2*c],["hh:mm\nMM-dd",6,6*c],["hh:mm\nMM-dd",12,12*c],["MM-dd\nyyyy",1,h],["week",7,7*h],["month",1,31*h],["quarter",3,380*h/4],["half-year",6,380*h/2],["year",1,380*h]];return d[fe]=function(){return new d},d}),e("echarts/scale/Log",[Le,Ce,"./Scale","../util/number","./Interval"],function(t){var e=t(Ce),i=t("./Scale"),n=t("../util/number"),r=t("./Interval"),a=i[Se],o=r[Se],s=Math.floor,l=Math.ceil,u=Math.pow,c=Math.log,h=i[oe]({type:"log",base:10,getTicks:function(){return e.map(o[z].call(this),function(t){return n.round(u(this.base,t))},this)},getLabel:o.getLabel,scale:function(t){return t=a.scale.call(this,t),u(this.base,t)},setExtent:function(t,e){var i=this.base;t=c(t)/c(i),e=c(e)/c(i),o.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=a[k].call(this);return e[0]=u(t,e[0]),e[1]=u(t,e[1]),e},unionExtent:function(t){var e=this.base;t[0]=c(t[0])/c(e),t[1]=c(t[1])/c(e),a.unionExtent.call(this,t)},niceTicks:function(t){t=t||10;var e=this._extent,i=e[1]-e[0];if(!(1/0===i||0>=i)){var r=n.quantity(i),a=t/i*r;for(.5>=a&&(r*=10);!isNaN(r)&&Math.abs(r)<1&&Math.abs(r)>0;)r*=10;var o=[n.round(l(e[0]/r)*r),n.round(s(e[1]/r)*r)];this._interval=r,this._niceExtent=o}},niceExtent:o.niceExtent});return e.each([D,"normalize"],function(t){h[Se][t]=function(e){return e=c(e)/c(this.base),a[t].call(this,e)}}),h[fe]=function(){return new h},h}),e(Pe,[],function(){function t(t){var e={},i={},n=t.match(/Firefox\/([\d.]+)/),r=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),a=t.match(/Edge\/([\d.]+)/);return n&&(i.firefox=!0,i.version=n[1]),r&&(i.ie=!0,i.version=r[1]),r&&(i.ie=!0,i.version=r[1]),a&&(i.edge=!0,i.version=a[1]),{browser:i,os:e,node:!1,canvasSupported:document[L]("canvas").getContext?!0:!1,touchEventsSupported:"ontouchstart"in window&&!i.ie&&!i.edge,pointerEventsSupported:"onpointerdown"in window&&(i.edge||i.ie&&i.version>=10)}}var e={};return e=typeof navigator===A?{browser:{},os:{},node:!0,canvasSupported:!0}:t(navigator.userAgent)}),e("echarts/model/Global",[Le,Ce,"../util/model","./Model","./Component","./globalDefault","./mixin/colorPalette"],function(t){function e(t,e){for(var i in e)y.hasClass(i)||("object"==typeof e[i]?t[i]=t[i]?u.merge(t[i],e[i],!1):u.clone(e[i]):null==t[i]&&(t[i]=e[i]))}function i(t){t=t,this.option={},this.option[x]=1,this._componentsMap={},this._seriesIndices=null,e(t,this._theme.option),u.merge(t,_,!1),this.mergeOption(t)}function n(t,e){u[X](e)||(e=e?[e]:[]);var i={};return f(e,function(e){i[e]=(t[e]||[]).slice()}),i}function r(t,e){var i={};f(e,function(t){var e=t.exist;e&&(i[e.id]=t)}),f(e,function(e){var n=e.option;if(u.assert(!n||null==n.id||!i[n.id]||i[n.id]===e,"id duplicates: "+(n&&n.id)),n&&null!=n.id&&(i[n.id]=e),g(n)){var r=a(t,n,e.exist);e.keyInfo={mainType:t,subType:r}}}),f(e,function(t){var e=t.exist,n=t.option,r=t.keyInfo;if(g(n)){if(r.name=null!=n.name?n.name+"":e?e.name:"\x00-",e)r.id=e.id;else if(null!=n.id)r.id=n.id+"";else{var a=0;do r.id="\x00"+r.name+"\x00"+a++;while(i[r.id])}i[r.id]=t}})}function a(t,e,i){var n=e.type?e.type:i?i.subType:y.determineSubType(t,e);return n}function o(t){return p(t,function(t){return t.componentIndex})||[]}function s(t,e){return e.hasOwnProperty("subType")?d(t,function(t){return t.subType===e.subType}):t}function l(t){}var u=t(Ce),c=t("../util/model"),h=t("./Model"),f=u.each,d=u[U],p=u.map,v=u[X],m=u[W],g=u[le],y=t("./Component"),_=t("./globalDefault"),x="\x00_ec_inner",b=h[oe]({constructor:b,init:function(t,e,i,n){i=i||{},this.option=null,this._theme=new h(i),this._optionManager=n},setOption:function(t,e){u.assert(!(x in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption()},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var r=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(r)):i.call(this,r),e=!0}if(("timeline"===t||"media"===t)&&this.restoreData(),!t||"recreate"===t||"timeline"===t){var a=n.getTimelineOption(this);a&&(this.mergeOption(a),e=!0)}if(!t||"recreate"===t||"media"===t){var o=n.getMediaOption(this,this._api);o[re]&&f(o,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){function e(e,s){var l=c.normalizeToArray(t[e]),h=c.mappingToExists(a[e],l);r(e,h);var d=n(a,s);i[e]=[],a[e]=[],f(h,function(t,n){var r=t.exist,o=t.option;if(u.assert(g(o)||r,"Empty component definition"),o){var s=y.getClass(e,t.keyInfo.subType,!0);if(r&&r instanceof s)r.mergeOption(o,this),r.optionUpdated(o,!1);else{var l=u[oe]({dependentModels:d,componentIndex:n},t.keyInfo);r=new s(o,this,this,l),r.init(o,this,this,l),r.optionUpdated(null,!0)}}else r.mergeOption({},this),r.optionUpdated({},!1);a[e][n]=r,i[e][n]=r.option},this),e===ne&&(this._seriesIndices=o(a[ne]))}var i=this.option,a=this._componentsMap,s=[];f(t,function(t,e){null!=t&&(y.hasClass(e)?s.push(e):i[e]=null==i[e]?u.clone(t):u.merge(i[e],t,!0))}),y.topologicalTravel(s,y.getAllClassMainTypes(),e,this),this._seriesIndices=this._seriesIndices||[]},getOption:function(){var t=u.clone(this.option);return f(t,function(e,i){if(y.hasClass(i)){for(var e=c.normalizeToArray(e),n=e[re]-1;n>=0;n--)c.isIdInner(e[n])&&e[ie](n,1);t[i]=e}}),delete t[x],t},getTheme:function(){return this._theme},getComponent:function(t,e){var i=this._componentsMap[t];return i?i[e||0]:void 0},queryComponents:function(t){var e=t.mainType;if(!e)return[];var i=t.index,n=t.id,r=t.name,a=this._componentsMap[e];if(!a||!a[re])return[];var o;if(null!=i)v(i)||(i=[i]),o=d(p(i,function(t){return a[t]}),function(t){return!!t});else if(null!=n){var l=v(n);o=d(a,function(t){return l&&m(n,t.id)>=0||!l&&t.id===n})}else if(null!=r){var u=v(r);o=d(a,function(t){return u&&m(r,t.name)>=0||!u&&t.name===r})}else o=a;return s(o,t)},findComponents:function(t){function e(t){var e=r+"Index",i=r+"Id",n=r+"Name";return t&&(t.hasOwnProperty(e)||t.hasOwnProperty(i)||t.hasOwnProperty(n))?{mainType:r,index:t[e],id:t[i],name:t[n]}:null}function i(e){return t[U]?d(e,t[U]):e}var n=t.query,r=t.mainType,a=e(n),o=a?this.queryComponents(a):this._componentsMap[r];return i(s(o,t))},eachComponent:function(t,e,i){var n=this._componentsMap;if(typeof t===j)i=e,e=t,f(n,function(t,n){f(t,function(t,r){e.call(i,n,t,r)})});else if(u.isString(t))f(n[t],e,i);else if(g(t)){var r=this.findComponents(t);f(r,e,i)}},getSeriesByName:function(t){var e=this._componentsMap[ne];return d(e,function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap[ne][t]},getSeriesByType:function(t){var e=this._componentsMap[ne];return d(e,function(e){return e.subType===t})},getSeries:function(){return this._componentsMap[ne].slice()},eachSeries:function(t,e){l(this),f(this._seriesIndices,function(i){var n=this._componentsMap[ne][i];t.call(e,n,i)},this)},eachRawSeries:function(t,e){f(this._componentsMap[ne],t,e)},eachSeriesByType:function(t,e,i){l(this),f(this._seriesIndices,function(n){var r=this._componentsMap[ne][n];r.subType===t&&e.call(i,r,n)},this)},eachRawSeriesByType:function(t,e,i){return f(this.getSeriesByType(t),e,i)},isSeriesFiltered:function(t){return l(this),u[W](this._seriesIndices,t.componentIndex)<0},filterSeries:function(t,e){l(this);var i=d(this._componentsMap[ne],t,e);this._seriesIndices=o(i)},restoreData:function(){var t=this._componentsMap;this._seriesIndices=o(t[ne]);var e=[];f(t,function(t,i){e.push(i)}),y.topologicalTravel(e,y.getAllClassMainTypes(),function(e){f(t[e],function(t){t.restoreData()})})}});return u.mixin(b,t("./mixin/colorPalette")),b}),e("echarts/CoordinateSystem",[Le],function(){function t(){this._coordinateSystems=[]}var e={};return t[Se]={constructor:t,create:function(t,i){var n=[];for(var r in e){var a=e[r][fe](t,i);a&&(n=n.concat(a))}this._coordinateSystems=n},update:function(t,e){for(var i=this._coordinateSystems,n=0;n<i[re];n++)i[n][he]&&i[n][he](t,e)}},t.register=function(t,i){e[t]=i},t.get=function(t){return e[t]},t}),e("echarts/ExtensionAPI",[Le,Ce],function(t){function e(t){i.each(n,function(e){this[e]=i.bind(t[e],t)},this)}var i=t(Ce),n=["getDom","getZr",_e,ye,"dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL",xe,"getOption"];return e}),e("echarts/model/OptionManager",[Le,Ce,"../util/model","./Component"],function(t){function e(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function i(t,e,i){var n,r,a=[],o=[],l=t.timeline;if(t.baseOption&&(r=t.baseOption),(l||t.options)&&(r=r||{},a=(t.options||[]).slice()),t.media){r=r||{};var u=t.media;c(u,function(t){t&&t.option&&(t.query?o.push(t):n||(n=t))})}return r||(r=t),r.timeline||(r.timeline=l),c([r].concat(a).concat(s.map(o,function(t){return t.option})),function(t){c(e,function(e){e(t,i)})}),{baseOption:r,timelineOptions:a,mediaDefault:n,mediaList:o}}function n(t,e,i){var n={width:e,height:i,aspectratio:e/i},a=!0;return s.each(t,function(t,e){var i=e.match(p);if(i&&i[1]&&i[2]){var o=i[1],s=i[2][Te]();r(n[s],t,o)||(a=!1)}}),a}function r(t,e,i){return"min"===i?t>=e:"max"===i?e>=t:t===e}function a(t,e){return t.join(",")===e.join(",")}function o(t,e){e=e||{},c(e,function(e,i){if(null!=e){var n=t[i];if(u.hasClass(i)){e=l.normalizeToArray(e),n=l.normalizeToArray(n);var r=l.mappingToExists(n,e);t[i]=f(r,function(t){return t.option&&t.exist?d(t.exist,t.option,!0):t.exist||t.option})}else t[i]=d(n,e,!0)}})}var s=t(Ce),l=t("../util/model"),u=t("./Component"),c=s.each,h=s.clone,f=s.map,d=s.merge,p=/^(min|max)?(.+)$/;return e[Se]={constructor:e,setOption:function(t,e){t=h(t,!0);var n=this._optionBackup,r=i.call(this,t,e,!n);this._newBaseOption=r.baseOption,n?(o(n.baseOption,r.baseOption),r.timelineOptions[re]&&(n.timelineOptions=r.timelineOptions),r.mediaList[re]&&(n.mediaList=r.mediaList),r.mediaDefault&&(n.mediaDefault=r.mediaDefault)):this._optionBackup=r},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=f(e.timelineOptions,h),this._mediaList=f(e.mediaList,h),this._mediaDefault=h(e.mediaDefault),this._currentMediaIndices=[],h(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,i=this._timelineOptions;if(i[re]){var n=t.getComponent("timeline");n&&(e=h(i[n.getCurrentIndex()],!0))}return e},getMediaOption:function(){var t=this._api[_e](),e=this._api[ye](),i=this._mediaList,r=this._mediaDefault,o=[],s=[];if(!i[re]&&!r)return s;for(var l=0,u=i[re];u>l;l++)n(i[l].query,t,e)&&o.push(l);return!o[re]&&r&&(o=[-1]),o[re]&&!a(o,this._currentMediaIndices)&&(s=f(o,function(t){return h(-1===t?r.option:i[t].option)})),this._currentMediaIndices=o,s}},e}),e("echarts/model/Component",[Le,"./Model",Ce,"../util/component","../util/clazz","../util/layout","./mixin/boxLayout"],function(t){function e(t){var e=[];return n.each(l.getClassesByMainType(t),function(t){r.apply(e,t[Se].dependencies||[])}),n.map(e,function(t){return o.parseClassType(t).main
})}var i=t("./Model"),n=t(Ce),r=Array[Se].push,a=t("../util/component"),o=t("../util/clazz"),s=t("../util/layout"),l=i[oe]({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,r,o){i.call(this,t,e,r,o),n[oe](this,o),this.uid=a.getUID("componentModel")},init:function(t,e,i){this.mergeDefaultAndTheme(t,i)},mergeDefaultAndTheme:function(t,e){var i=this.layoutMode,r=i?s.getLayoutParams(t):{},a=e.getTheme();n.merge(t,a.get(this.mainType)),n.merge(t,this.getDefaultOption()),i&&s.mergeLayoutParam(t,r,i)},mergeOption:function(t){n.merge(this.option,t,!0);var e=this.layoutMode;e&&s.mergeLayoutParam(this.option,t,e)},optionUpdated:function(){},getDefaultOption:function(){if(!this.hasOwnProperty("__defaultOption")){for(var t=[],e=this.constructor;e;){var i=e[Se].defaultOption;i&&t.push(i),e=e.superClass}for(var r={},a=t[re]-1;a>=0;a--)r=n.merge(r,t[a],!0);this.__defaultOption=r}return this.__defaultOption}});return o.enableClassManagement(l,{registerWhenExtend:!0}),a.enableSubTypeDefaulter(l),a.enableTopologicalTravel(l,e),n.mixin(l,t("./mixin/boxLayout")),l}),e("echarts/model/Series",[Le,Ce,"../util/format","../util/model","./Component","./mixin/colorPalette",Pe],function(t){var e=t(Ce),i=t("../util/format"),n=t("../util/model"),r=t("./Component"),a=t("./mixin/colorPalette"),o=t(Pe),s=i.encodeHTML,l=i.addCommas,u=r[oe]({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.normal.color",init:function(t,e,i){this.seriesIndex=this.componentIndex,this.mergeDefaultAndTheme(t,i),this._dataBeforeProcessed=this.getInitialData(t,i),this._data=this._dataBeforeProcessed.cloneShallow()},mergeDefaultAndTheme:function(t,i){e.merge(t,i.getTheme().get(this.subType)),e.merge(t,this.getDefaultOption()),n.defaultEmphasis(t.label,n.LABEL_OPTIONS),this.fillDataTextStyle(t.data)},mergeOption:function(t,i){t=e.merge(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.getInitialData(t,i);n&&(this._data=n,this._dataBeforeProcessed=n.cloneShallow())},fillDataTextStyle:function(t){if(t)for(var e=0;e<t[re];e++)t[e]&&t[e].label&&n.defaultEmphasis(t[e].label,n.LABEL_OPTIONS)},getInitialData:function(){},getData:function(t){return null==t?this._data:this._data.getLinkedData(t)},setData:function(t){this._data=t},getRawData:function(){return this._dataBeforeProcessed},coordDimToDataDim:function(t){return[t]},dataDimToCoordDim:function(t){return t},getBaseAxis:function(){var t=this[I];return t&&t[P]&&t[P]()},formatTooltip:function(t,n){function r(t){return e.map(t,function(t,e){var r=a.getDimensionInfo(e),o=r&&r.type;return o===C?t:"time"===o?n?"":i.formatTime("yyyy/mm/dd hh:mm:ss",t):l(t)})[U](function(t){return!!t}).join(", ")}var a=this._data,o=this.getRawValue(t),u=e[X](o)?r(o):l(o),c=a[T](t),h=a[S](t,"color"),f='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+h+'"></span>',d=this.name;return"\x00-"===d&&(d=""),n?f+s(this.name)+" : "+u:(d&&s(d)+"<br />")+f+(c?s(c)+" : "+u:u)},ifEnableAnimation:function(){if(o.node)return!1;var t=this[M](be);return t&&this[ue]().count()>this[M]("animationThreshold")&&(t=!1),t},restoreData:function(){this._data=this._dataBeforeProcessed.cloneShallow()},getColorFromPalette:function(t,e){var i=this[w],n=a.getColorFromPalette.call(this,t,e);return n||(n=i.getColorFromPalette(t,e)),n},getAxisTooltipDataIndex:null});return e.mixin(u,n.dataFormatMixin),e.mixin(u,a),u}),e("echarts/view/Component",[Le,"zrender/container/Group","../util/component","../util/clazz"],function(t){var e=t("zrender/container/Group"),i=t("../util/component"),n=t("../util/clazz"),r=function(){this.group=new e,this.uid=i.getUID("viewComponent")};r[Se]={constructor:r,init:function(){},render:function(){},dispose:function(){}};var a=r[Se];return a.updateView=a.updateLayout=a.updateVisual=function(){},n.enableClassExtend(r),n.enableClassManagement(r,{registerWhenExtend:!0}),r}),e("echarts/view/Chart",[Le,"zrender/container/Group","../util/component","../util/clazz"],function(t){function e(){this.group=new r,this.uid=a.getUID("viewChart")}function i(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)i(t.childAt(n),e)}function n(t,e,n){var r=e&&e[J],a=e&&e.name;if(null!=r)for(var o=r instanceof Array?r:[r],s=0,l=o[re];l>s;s++)i(t[x](o[s]),n);else if(a)for(var u=a instanceof Array?a:[a],s=0,l=u[re];l>s;s++){var r=t.indexOfName(u[s]);i(t[x](r),n)}else t.eachItemGraphicEl(function(t){i(t,n)})}var r=t("zrender/container/Group"),a=t("../util/component"),o=t("../util/clazz");e[Se]={type:"chart",init:function(){},render:function(){},highlight:function(t,e,i,r){n(t[ue](),r,"emphasis")},downplay:function(t,e,i,r){n(t[ue](),r,b)},remove:function(){this.group[H]()},dispose:function(){}};var s=e[Se];return s.updateView=s.updateLayout=s.updateVisual=function(t,e,i,n){this.render(t,e,i,n)},o.enableClassExtend(e),o.enableClassManagement(e,{registerWhenExtend:!0}),e}),e("zrender/zrender",[Le,"./core/guid","./core/env","./Handler","./Storage","./animation/Animation","./dom/HandlerProxy","./Painter"],function(t){function e(t){delete c[t]}var i=t("./core/guid"),n=t("./core/env"),r=t("./Handler"),a=t("./Storage"),o=t("./animation/Animation"),s=t("./dom/HandlerProxy"),l=!n[ge],u={canvas:t("./Painter")},c={},h={};h.version="3.1.3",h.init=function(t,e){var n=new f(i(),t,e);return c[n.id]=n,n},h.dispose=function(t){if(t)t.dispose();else{for(var e in c)c[e].dispose();c={}}return h},h.getInstance=function(t){return c[t]},h.registerPainter=function(t,e){u[t]=e};var f=function(t,e,i){i=i||{},this.dom=e,this.id=t;var c=this,h=new a,f=i.renderer;if(l){if(!u.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");f="vml"}else f&&u[f]||(f="canvas");var d=new u[f](e,h,i);this[me]=h,this.painter=d;var p=n.node?null:new s(d.getViewportRoot());this.handler=new r(h,d,p),this[be]=new o({stage:{update:function(){c._needsRefresh&&c.refreshImmediately(),c._needsRefreshHover&&c.refreshHoverImmediately()}}}),this[be].start(),this._needsRefresh;var v=h.delFromMap,m=h.addToMap;h.delFromMap=function(t){var e=h.get(t);v.call(h,t),e&&e.removeSelfFromZr(c)},h.addToMap=function(t){m.call(h,t),t.addSelfToZr(c)}};return f[Se]={constructor:f,getId:function(){return this.id},add:function(t){this[me].addRoot(t),this._needsRefresh=!0},remove:function(t){this[me].delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer(t,e),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(){this.painter[we](),this.handler[we]()},clearAnimation:function(){this[be].clear()},getWidth:function(){return this.painter[_e]()},getHeight:function(){return this.painter[ye]()},pathToImage:function(t,e,n){var r=i();return this.painter.pathToImage(r,t,e,n)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},on:function(t,e,i){this.handler.on(t,e,i)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this[me].delRoot(),this.painter.clear()},dispose:function(){this[be].stop(),this.clear(),this[me].dispose(),this.painter.dispose(),this.handler.dispose(),this[be]=this[me]=this.painter=this.handler=null,e(this.id)}},h}),e("echarts/util/graphic",[Le,Ce,"zrender/tool/path","zrender/graphic/Path","zrender/tool/color","zrender/core/matrix","zrender/core/vector","zrender/graphic/Gradient","zrender/container/Group","zrender/graphic/Image","zrender/graphic/Text","zrender/graphic/shape/Circle","zrender/graphic/shape/Sector","zrender/graphic/shape/Ring","zrender/graphic/shape/Polygon","zrender/graphic/shape/Polyline","zrender/graphic/shape/Rect","zrender/graphic/shape/Line","zrender/graphic/shape/BezierCurve","zrender/graphic/shape/Arc","zrender/graphic/CompoundPath","zrender/graphic/LinearGradient","zrender/graphic/RadialGradient","zrender/core/BoundingRect"],function(t){function e(t){return null!=t&&"none"!=t}function i(t){return typeof t===Me?T.lift(t,-.1):t}function n(t){if(t.__hoverStlDirty){var n=t.style[g],r=t.style.fill,a=t.__hoverStl;a.fill=a.fill||(e(r)?i(r):null),a[g]=a[g]||(e(n)?i(n):null);var o={};for(var s in a)a.hasOwnProperty(s)&&(o[s]=t.style[s]);t.__normalStl=o,t.__hoverStlDirty=!1}}function r(t){t.__isHover||(n(t),t.useHoverLayer?t.__zr&&t.__zr.addHover(t,t.__hoverStl):(t[Q](t.__hoverStl),t.z2+=1),t.__isHover=!0)}function a(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t[Q](e),t.z2-=1),t.__isHover=!1}}function o(t){"group"===t.type?t[K](function(t){"group"!==t.type&&r(t)}):r(t)}function s(t){"group"===t.type?t[K](function(t){"group"!==t.type&&a(t)}):a(t)}function l(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&n(t)}function u(){!this.__isEmphasis&&o(this)}function c(){!this.__isEmphasis&&s(this)}function h(){this.__isEmphasis=!0,o(this)}function f(){this.__isEmphasis=!1,s(this)}function d(t,e,i,n,r,a){typeof r===j&&(a=r,r=null);var o=n&&(n.ifEnableAnimation?n.ifEnableAnimation():n[M](be));if(o){var s=t?"Update":"",l=n&&n[M]("animationDuration"+s),u=n&&n[M]("animationEasing"+s),c=n&&n[M]("animationDelay"+s);typeof c===j&&(c=c(r)),l>0?e.animateTo(i,l,c||0,u,a):(e.attr(i),a&&a())}else e.attr(i),a&&a()}var p=t(Ce),x=t("zrender/tool/path"),w=Math.round,S=t("zrender/graphic/Path"),T=t("zrender/tool/color"),C=t("zrender/core/matrix"),P=t("zrender/core/vector"),L=(t("zrender/graphic/Gradient"),{});return L.Group=t("zrender/container/Group"),L.Image=t("zrender/graphic/Image"),L.Text=t("zrender/graphic/Text"),L.Circle=t("zrender/graphic/shape/Circle"),L.Sector=t("zrender/graphic/shape/Sector"),L.Ring=t("zrender/graphic/shape/Ring"),L.Polygon=t("zrender/graphic/shape/Polygon"),L.Polyline=t("zrender/graphic/shape/Polyline"),L.Rect=t("zrender/graphic/shape/Rect"),L.Line=t("zrender/graphic/shape/Line"),L.BezierCurve=t("zrender/graphic/shape/BezierCurve"),L.Arc=t("zrender/graphic/shape/Arc"),L.CompoundPath=t("zrender/graphic/CompoundPath"),L.LinearGradient=t("zrender/graphic/LinearGradient"),L.RadialGradient=t("zrender/graphic/RadialGradient"),L.BoundingRect=t("zrender/core/BoundingRect"),L.extendShape=function(t){return S[oe](t)},L.extendPath=function(t,e){return x.extendFromString(t,e)},L.makePath=function(t,e,i,n){var r=x.createFromString(t,e),a=r[N]();if(i){var o=a.width/a[de];if(n===R){var s,l=i[de]*o;l<=i.width?s=i[de]:(l=i.width,s=l/o);var u=i.x+i.width/2,c=i.y+i[de]/2;i.x=u-l/2,i.y=c-s/2,i.width=l,i[de]=s}this.resizePath(r,i)}return r},L.mergePath=x.mergePath,L.resizePath=function(t,e){if(t[_]){var i=t[N](),n=i.calculateTransform(e);t[_](n)}},L.subPixelOptimizeLine=function(t){var e=L.subPixelOptimize,i=t.shape,n=t.style[y];return w(2*i.x1)===w(2*i.x2)&&(i.x1=i.x2=e(i.x1,n,!0)),w(2*i.y1)===w(2*i.y2)&&(i.y1=i.y2=e(i.y1,n,!0)),t},L.subPixelOptimizeRect=function(t){var e=L.subPixelOptimize,i=t.shape,n=t.style[y],r=i.x,a=i.y,o=i.width,s=i[de];return i.x=e(i.x,n,!0),i.y=e(i.y,n,!0),i.width=Math.max(e(r+o,n,!1)-i.x,0===o?0:1),i[de]=Math.max(e(a+s,n,!1)-i.y,0===s?0:1),t},L.subPixelOptimize=function(t,e,i){var n=w(2*t);return(n+w(e))%2===0?n/2:(n+(i?1:-1))/2},L.setHoverStyle=function(t,e){"group"===t.type?t[K](function(t){"group"!==t.type&&l(t,e)}):l(t,e),t.on("mouseover",u).on(ee,c),t.on("emphasis",h).on(b,f)},L.setText=function(t,e,i){var n=e[M](E)||m,r=n[W](m)>=0?"white":i,a=e[xe](V);p[oe](t,{textDistance:e[M]("distance")||5,textFont:a[G](),textPosition:n,textFill:a.getTextColor()||r})},L.updateProps=function(t,e,i,n,r){d(!0,t,e,i,n,r)},L.initProps=function(t,e,i,n,r){d(!1,t,e,i,n,r)},L.getTransform=function(t,e){for(var i=C.identity([]);t&&t!==e;)C.mul(i,t.getLocalTransform(),i),t=t.parent;return i},L[_]=function(t,e,i){return i&&(e=C.invert([],e)),P[_]([],t,e)},L.transformDirection=function(t,e,i){var n=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-n:"right"===t?n:0,"top"===t?-r:t===pe?r:0];return a=L[_](a,e,i),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?pe:"top"},L.groupTransition=function(t,e,i){function n(t){var e={};return t[K](function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}function r(t){var e={position:P.clone(t[E]),rotation:t[v]};return t.shape&&(e.shape=p[oe]({},t.shape)),e}if(t&&e){var a=n(t);e[K](function(t){if(!t.isGroup&&t.anid){var e=a[t.anid];if(e){var n=r(t);t.attr(r(e)),L.updateProps(t,n,i,t[J])}}})}},L}),e(Ce,[Le],function(){function t(e){if("object"==typeof e&&null!==e){var i=e;if(e instanceof Array){i=[];for(var n=0,r=e[re];r>n;n++)i[n]=t(e[n])}else if(!w(e)&&!M(e)){i={};for(var a in e)e.hasOwnProperty(a)&&(i[a]=t(e[a]))}return i}return e}function e(i,n,r){if(!b(n)||!b(i))return r?t(n):i;for(var a in n)if(n.hasOwnProperty(a)){var o=i[a],s=n[a];!b(s)||!b(o)||y(s)||y(o)||M(s)||M(o)||w(s)||w(o)?!r&&a in i||(i[a]=t(n[a],!0)):e(o,s,r)}return i}function i(t,i){for(var n=t[0],r=1,a=t[re];a>r;r++)n=e(n,t[r],i);return n}function n(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function r(t,e,i){for(var n in e)e.hasOwnProperty(n)&&(i?null!=e[n]:null==t[n])&&(t[n]=e[n]);return t}function a(){return document[L]("canvas")}function o(){return P||(P=B.createCanvas().getContext("2d")),P}function s(t,e){if(t){if(t[W])return t[W](e);for(var i=0,n=t[re];n>i;i++)if(t[i]===e)return i}return-1}function l(t,e){function i(){}var n=t[Se];i[Se]=e[Se],t[Se]=new i;for(var r in n)t[Se][r]=n[r];t[Se].constructor=t,t.superClass=e}function u(t,e,i){t=Se in t?t[Se]:t,e=Se in e?e[Se]:e,r(t,e,i)}function c(t){return t?typeof t==Me?!1:typeof t[re]==Z:void 0}function h(t,e,i){if(t&&e)if(t.forEach&&t.forEach===D)t.forEach(e,i);else if(t[re]===+t[re])for(var n=0,r=t[re];r>n;n++)e.call(i,t[n],n,t);else for(var a in t)t.hasOwnProperty(a)&&e.call(i,t[a],a,t)}function f(t,e,i){if(t&&e){if(t.map&&t.map===E)return t.map(e,i);for(var n=[],r=0,a=t[re];a>r;r++)n.push(e.call(i,t[r],r,t));return n}}function d(t,e,i,n){if(t&&e){if(t.reduce&&t.reduce===R)return t.reduce(e,i,n);for(var r=0,a=t[re];a>r;r++)i=e.call(n,i,t[r],r,t);return i}}function p(t,e,i){if(t&&e){if(t[U]&&t[U]===I)return t[U](e,i);for(var n=[],r=0,a=t[re];a>r;r++)e.call(i,t[r],r,t)&&n.push(t[r]);return n}}function v(t,e,i){if(t&&e)for(var n=0,r=t[re];r>n;n++)if(e.call(i,t[n],n,t))return t[n]}function m(t,e){var i=O.call(arguments,2);return function(){return t.apply(e,i.concat(O.call(arguments)))}}function g(t){var e=O.call(arguments,1);return function(){return t.apply(this,e.concat(O.call(arguments)))}}function y(t){return"[object Array]"===k.call(t)}function _(t){return typeof t===j}function x(t){return"[object String]"===k.call(t)}function b(t){var e=typeof t;return e===j||!!t&&"object"==e}function w(t){return!!A[k.call(t)]}function M(t){return t&&1===t.nodeType&&typeof t.nodeName==Me}function S(){for(var t=0,e=arguments[re];e>t;t++)if(null!=arguments[t])return arguments[t]}function T(){return Function.call.apply(O,arguments)}function C(t,e){if(!t)throw new Error(e)}var P,A={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1},k=Object[Se].toString,z=Array[Se],D=z.forEach,I=z[U],O=z.slice,E=z.map,R=z.reduce,B={inherits:l,mixin:u,clone:t,merge:e,mergeAll:i,extend:n,defaults:r,getContext:o,createCanvas:a,indexOf:s,slice:T,find:v,isArrayLike:c,each:h,map:f,reduce:d,filter:p,bind:m,curry:g,isArray:y,isString:x,isObject:b,isFunction:_,isBuildInObject:w,isDom:M,retrieve:S,assert:C,noop:function(){}};return B}),e("zrender/tool/color",[Le],function(){function t(t){return t=Math.round(t),0>t?0:t>255?255:t}function e(t){return t=Math.round(t),0>t?0:t>360?360:t}function i(t){return 0>t?0:t>1?1:t}function n(e){return t(e[re]&&"%"===e.charAt(e[re]-1)?parseFloat(e)/100*255:parseInt(e,10))}function r(t){return i(t[re]&&"%"===t.charAt(t[re]-1)?parseFloat(t)/100:parseFloat(t))}function a(t,e,i){return 0>i?i+=1:i>1&&(i-=1),1>6*i?t+(e-t)*i*6:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t}function o(t,e,i){return t+(e-t)*i}function s(t){if(t){t+="";var e=t[Y](/ /g,"")[Te]();if(e in g)return g[e].slice();if("#"!==e.charAt(0)){var i=e[W]("("),a=e[W](")");if(-1!==i&&a+1===e[re]){var o=e.substr(0,i),s=e.substr(i+1,a-(i+1)).split(","),u=1;switch(o){case"rgba":if(4!==s[re])return;u=r(s.pop());case"rgb":if(3!==s[re])return;return[n(s[0]),n(s[1]),n(s[2]),u];case"hsla":if(4!==s[re])return;return s[3]=r(s[3]),l(s);case"hsl":if(3!==s[re])return;return l(s);default:return}}}else{if(4===e[re]){var c=parseInt(e.substr(1),16);if(!(c>=0&&4095>=c))return;return[(3840&c)>>4|(3840&c)>>8,240&c|(240&c)>>4,15&c|(15&c)<<4,1]}if(7===e[re]){var c=parseInt(e.substr(1),16);if(!(c>=0&&16777215>=c))return;return[(16711680&c)>>16,(65280&c)>>8,255&c,1]}}}}function l(e){var i=(parseFloat(e[0])%360+360)%360/360,n=r(e[1]),o=r(e[2]),s=.5>=o?o*(n+1):o+n-o*n,l=2*o-s,u=[t(255*a(l,s,i+1/3)),t(255*a(l,s,i)),t(255*a(l,s,i-1/3))];return 4===e[re]&&(u[3]=e[3]),u}function u(t){if(t){var e,i,n=t[0]/255,r=t[1]/255,a=t[2]/255,o=Math.min(n,r,a),s=Math.max(n,r,a),l=s-o,u=(s+o)/2;if(0===l)e=0,i=0;else{i=.5>u?l/(s+o):l/(2-s-o);var c=((s-n)/6+l/2)/l,h=((s-r)/6+l/2)/l,f=((s-a)/6+l/2)/l;n===s?e=f-h:r===s?e=1/3+c-f:a===s&&(e=2/3+h-c),0>e&&(e+=1),e>1&&(e-=1)}var d=[360*e,i,u];return null!=t[3]&&d.push(t[3]),d}}function c(t,e){var i=s(t);if(i){for(var n=0;3>n;n++)i[n]=0>e?i[n]*(1-e)|0:(255-i[n])*e+i[n]|0;return m(i,4===i[re]?"rgba":"rgb")}}function h(t){var e=s(t);return e?((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1):void 0}function f(e,i,n){if(i&&i[re]&&e>=0&&1>=e){n=n||[0,0,0,0];var r=e*(i[re]-1),a=Math.floor(r),s=Math.ceil(r),l=i[a],u=i[s],c=r-a;return n[0]=t(o(l[0],u[0],c)),n[1]=t(o(l[1],u[1],c)),n[2]=t(o(l[2],u[2],c)),n[3]=t(o(l[3],u[3],c)),n}}function d(e,n,r){if(n&&n[re]&&e>=0&&1>=e){var a=e*(n[re]-1),l=Math.floor(a),u=Math.ceil(a),c=s(n[l]),h=s(n[u]),f=a-l,d=m([t(o(c[0],h[0],f)),t(o(c[1],h[1],f)),t(o(c[2],h[2],f)),i(o(c[3],h[3],f))],"rgba");return r?{color:d,leftIndex:l,rightIndex:u,value:a}:d}}function p(t,i,n,a){return t=s(t),t?(t=u(t),null!=i&&(t[0]=e(i)),null!=n&&(t[1]=r(n)),null!=a&&(t[2]=r(a)),m(l(t),"rgba")):void 0}function v(t,e){return t=s(t),t&&null!=e?(t[3]=i(e),m(t,"rgba")):void 0}function m(t,e){var i=t[0]+","+t[1]+","+t[2];return("rgba"===e||"hsva"===e||"hsla"===e)&&(i+=","+t[3]),e+"("+i+")"}var g={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};return{parse:s,lift:c,toHex:h,fastMapToColor:f,mapToColor:d,modifyHSL:p,modifyAlpha:v,stringify:m}}),e("echarts/visual/seriesColor",[Le,"zrender/graphic/Gradient"],function(t){var e=t("zrender/graphic/Gradient");return function(t){function i(i){var n=(i.visualColorAccessPath||"itemStyle.normal.color").split("."),r=i[ue](),a=i.get(n)||i.getColorFromPalette(i.get("name"));r.setVisual("color",a),t.isSeriesFiltered(i)||(typeof a!==j||a instanceof e||r.each(function(t){r.setItemVisual(t,"color",a(i.getDataParams(t)))}),r.each(function(t){var e=r[p](t),i=e.get(n,!0);null!=i&&r.setItemVisual(t,"color",i)}))}t.eachRawSeries(i)}}),e("zrender/mixin/Eventful",[Le],function(){var t=Array[Se].slice,e=function(){this._$handlers={}};return e[Se]={constructor:e,one:function(t,e,i){var n=this._$handlers;if(!e||!t)return this;n[t]||(n[t]=[]);for(var r=0;r<n[t][re];r++)if(n[t][r].h===e)return this;return n[t].push({h:e,one:!0,ctx:i||this}),this},on:function(t,e,i){var n=this._$handlers;if(!e||!t)return this;n[t]||(n[t]=[]);for(var r=0;r<n[t][re];r++)if(n[t][r].h===e)return this;return n[t].push({h:e,one:!1,ctx:i||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t][re]},off:function(t,e){var i=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(i[t]){for(var n=[],r=0,a=i[t][re];a>r;r++)i[t][r].h!=e&&n.push(i[t][r]);i[t]=n}i[t]&&0===i[t][re]&&delete i[t]}else delete i[t];return this},trigger:function(e){if(this._$handlers[e]){var i=arguments,n=i[re];n>3&&(i=t.call(i,1));for(var r=this._$handlers[e],a=r[re],o=0;a>o;){switch(n){case 1:r[o].h.call(r[o].ctx);break;case 2:r[o].h.call(r[o].ctx,i[1]);break;case 3:r[o].h.call(r[o].ctx,i[1],i[2]);break;default:r[o].h.apply(r[o].ctx,i)}r[o].one?(r[ie](o,1),a--):o++}}return this},triggerWithContext:function(e){if(this._$handlers[e]){var i=arguments,n=i[re];n>4&&(i=t.call(i,1,i[re]-1));for(var r=i[i[re]-1],a=this._$handlers[e],o=a[re],s=0;o>s;){switch(n){case 1:a[s].h.call(r);break;case 2:a[s].h.call(r,i[1]);break;case 3:a[s].h.call(r,i[1],i[2]);break;default:a[s].h.apply(r,i)}a[s].one?(a[ie](s,1),o--):s++}}return this}},e}),e("zrender/core/timsort",[],function(){function t(t){for(var e=0;t>=l;)e|=1&t,t>>=1;return t+e}function e(t,e,n,r){var a=e+1;if(a===n)return 1;if(r(t[a++],t[e])<0){for(;n>a&&r(t[a],t[a-1])<0;)a++;i(t,e,a)}else for(;n>a&&r(t[a],t[a-1])>=0;)a++;return a-e}function i(t,e,i){for(i--;i>e;){var n=t[e];t[e++]=t[i],t[i--]=n}}function n(t,e,i,n,r){for(n===e&&n++;i>n;n++){for(var a,o=t[n],s=e,l=n;l>s;)a=s+l>>>1,r(o,t[a])<0?l=a:s=a+1;var u=n-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=o}}function r(t,e,i,n,r,a){var o=0,s=0,l=1;if(a(t,e[i+r])>0){for(s=n-r;s>l&&a(t,e[i+r+l])>0;)o=l,l=(l<<1)+1,0>=l&&(l=s);l>s&&(l=s),o+=r,l+=r}else{for(s=r+1;s>l&&a(t,e[i+r-l])<=0;)o=l,l=(l<<1)+1,0>=l&&(l=s);l>s&&(l=s);var u=o;o=r-l,l=r-u}for(o++;l>o;){var c=o+(l-o>>>1);a(t,e[i+c])>0?o=c+1:l=c}return l}function a(t,e,i,n,r,a){var o=0,s=0,l=1;if(a(t,e[i+r])<0){for(s=r+1;s>l&&a(t,e[i+r-l])<0;)o=l,l=(l<<1)+1,0>=l&&(l=s);l>s&&(l=s);var u=o;o=r-l,l=r-u}else{for(s=n-r;s>l&&a(t,e[i+r+l])>=0;)o=l,l=(l<<1)+1,0>=l&&(l=s);l>s&&(l=s),o+=r,l+=r}for(o++;l>o;){var c=o+(l-o>>>1);a(t,e[i+c])<0?l=c:o=c+1}return l}function o(t,e){function i(t,e){f[y]=t,d[y]=e,y+=1}function n(){for(;y>1;){var t=y-2;if(t>=1&&d[t-1]<=d[t]+d[t+1]||t>=2&&d[t-2]<=d[t]+d[t-1])d[t-1]<d[t+1]&&t--;else if(d[t]>d[t+1])break;s(t)}}function o(){for(;y>1;){var t=y-2;t>0&&d[t-1]<d[t+1]&&t--,s(t)}}function s(i){var n=f[i],o=d[i],s=f[i+1],u=d[i+1];d[i]=o+u,i===y-3&&(f[i+1]=f[i+2],d[i+1]=d[i+2]),y--;var c=a(t[s],t,n,o,0,e);n+=c,o-=c,0!==o&&(u=r(t[n+o-1],t,s,u,u-1,e),0!==u&&(u>=o?l(n,o,s,u):h(n,o,s,u)))}function l(i,n,o,s){var l=0;for(l=0;n>l;l++)_[l]=t[i+l];var c=0,h=o,f=i;if(t[f++]=t[h++],0!==--s){if(1===n){for(l=0;s>l;l++)t[f+l]=t[h+l];return void(t[f+s]=_[c])}for(var d,v,m,g=p;;){d=0,v=0,m=!1;do if(e(t[h],_[c])<0){if(t[f++]=t[h++],v++,d=0,0===--s){m=!0;break}}else if(t[f++]=_[c++],d++,v=0,1===--n){m=!0;break}while(g>(d|v));if(m)break;do{if(d=a(t[h],_,c,n,0,e),0!==d){for(l=0;d>l;l++)t[f+l]=_[c+l];if(f+=d,c+=d,n-=d,1>=n){m=!0;break}}if(t[f++]=t[h++],0===--s){m=!0;break}if(v=r(_[c],t,h,s,0,e),0!==v){for(l=0;v>l;l++)t[f+l]=t[h+l];if(f+=v,h+=v,s-=v,0===s){m=!0;break}}if(t[f++]=_[c++],1===--n){m=!0;break}g--}while(d>=u||v>=u);if(m)break;0>g&&(g=0),g+=2}if(p=g,1>p&&(p=1),1===n){for(l=0;s>l;l++)t[f+l]=t[h+l];t[f+s]=_[c]}else{if(0===n)throw new Error;for(l=0;n>l;l++)t[f+l]=_[c+l]}}else for(l=0;n>l;l++)t[f+l]=_[c+l]}function h(i,n,o,s){var l=0;for(l=0;s>l;l++)_[l]=t[o+l];var c=i+n-1,h=s-1,f=o+s-1,d=0,v=0;if(t[f--]=t[c--],0!==--n){if(1===s){for(f-=n,c-=n,v=f+1,d=c+1,l=n-1;l>=0;l--)t[v+l]=t[d+l];return void(t[f]=_[h])}for(var m=p;;){var g=0,y=0,x=!1;do if(e(_[h],t[c])<0){if(t[f--]=t[c--],g++,y=0,0===--n){x=!0;break}}else if(t[f--]=_[h--],y++,g=0,1===--s){x=!0;break}while(m>(g|y));if(x)break;do{if(g=n-a(_[h],t,i,n,n-1,e),0!==g){for(f-=g,c-=g,n-=g,v=f+1,d=c+1,l=g-1;l>=0;l--)t[v+l]=t[d+l];if(0===n){x=!0;break}}if(t[f--]=_[h--],1===--s){x=!0;break}if(y=s-r(t[c],_,0,s,s-1,e),0!==y){for(f-=y,h-=y,s-=y,v=f+1,d=h+1,l=0;y>l;l++)t[v+l]=_[d+l];if(1>=s){x=!0;break}}if(t[f--]=t[c--],0===--n){x=!0;break}m--}while(g>=u||y>=u);if(x)break;0>m&&(m=0),m+=2}if(p=m,1>p&&(p=1),1===s){for(f-=n,c-=n,v=f+1,d=c+1,l=n-1;l>=0;l--)t[v+l]=t[d+l];t[f]=_[h]}else{if(0===s)throw new Error;for(d=f-(s-1),l=0;s>l;l++)t[d+l]=_[l]}}else for(d=f-(s-1),l=0;s>l;l++)t[d+l]=_[l]}var f,d,p=u,v=0,m=c,g=0,y=0;v=t[re],2*c>v&&(m=v>>>1);var _=[];g=120>v?5:1542>v?10:119151>v?19:40,f=[],d=[],this.mergeRuns=n,this.forceMergeRuns=o,this.pushRun=i}function s(i,r,a,s){a||(a=0),s||(s=i[re]);var u=s-a;if(!(2>u)){var c=0;if(l>u)return c=e(i,a,s,r),void n(i,a,s,a+c,r);var h=new o(i,r),f=t(u);do{if(c=e(i,a,s,r),f>c){var d=u;d>f&&(d=f),n(i,a,a+d,a+c,r),c=d}h.pushRun(a,c),h.mergeRuns(),u-=c,a+=c}while(0!==u);h.forceMergeRuns()}}var l=32,u=7,c=256;return s}),e("echarts/preprocessor/backwardCompat",[Le,Ce,"./helper/compatStyle"],function(t){function e(t,e){e=e.split(",");for(var i=t,n=0;n<e[re]&&(i=i&&i[e[n]],null!=i);n++);return i}function i(t,e,i,n){e=e.split(",");for(var r,a=t,o=0;o<e[re]-1;o++)r=e[o],null==a[r]&&(a[r]={}),a=a[r];(n||null==a[e[o]])&&(a[e[o]]=i)}function n(t){u(o,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}var r=t(Ce),a=t("./helper/compatStyle"),o=[["x","left"],["y","top"],["x2","right"],["y2",pe]],s=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],l=["bar","boxplot","candlestick","chord","effectScatter","funnel","gauge","lines","graph","heatmap","line","map","parallel","pie","radar","sankey","scatter","treemap"],u=r.each;return function(t){u(t[ne],function(t){if(r[le](t)){var o=t.type;if(a(t),("pie"===o||"gauge"===o)&&null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===o){var s=e(t,"pointer.color");null!=s&&i(t,"itemStyle.normal.color",s)}for(var u=0;u<l[re];u++)if(l[u]===t.type){n(t);break}}}),t.dataRange&&(t.visualMap=t.dataRange),u(s,function(e){var i=t[e];i&&(r[X](i)||(i=[i]),u(i,function(t){n(t)}))})}}),e("echarts/loading/default",[Le,"../util/graphic",Ce],function(t){var e=t("../util/graphic"),i=t(Ce),n=Math.PI;return function(t,r){r=r||{},i[ae](r,{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var a=new e.Rect({style:{fill:r.maskColor},zlevel:r[$],z:1e4}),o=new e.Arc({shape:{startAngle:-n/2,endAngle:-n/2+.1,r:10},style:{stroke:r.color,lineCap:"round",lineWidth:5},zlevel:r[$],z:10001}),s=new e.Rect({style:{fill:"none",text:r.text,textPosition:"right",textDistance:10,textFill:r.textColor},zlevel:r[$],z:10001});o.animateShape(!0).when(1e3,{endAngle:3*n/2}).start("circularInOut"),o.animateShape(!0).when(1e3,{startAngle:3*n/2}).delay(300).start("circularInOut");var l=new e.Group;return l.add(o),l.add(s),l.add(a),l[we]=function(){var e=t[_e]()/2,i=t[ye]()/2;o.setShape({cx:e,cy:i});var n=o.shape.r;s.setShape({x:e-n,y:i-n,width:2*n,height:2*n}),a.setShape({x:0,y:0,width:t[_e](),height:t[ye]()})},l[we](),l}}),e("echarts/util/number",[Le],function(){function t(t){return t[Y](/^\s+/,"")[Y](/\s+$/,"")}var e={},i=1e-4;return e.linearMap=function(t,e,i,n){var r=e[1]-e[0],a=i[1]-i[0];if(0===r)return 0===a?i[0]:(i[0]+i[1])/2;if(n)if(r>0){if(t<=e[0])return i[0];if(t>=e[1])return i[1]}else{if(t>=e[0])return i[0];if(t<=e[1])return i[1]}else{if(t===e[0])return i[0];if(t===e[1])return i[1]}return(t-e[0])/r*a+i[0]},e[d]=function(e,i){switch(e){case R:case B:e="50%";break;case"left":case"top":e="0%";break;case"right":case pe:e="100%"}return typeof e===Me?t(e).match(/%$/)?parseFloat(e)/100*i:parseFloat(e):null==e?0/0:+e},e.round=function(t,e){return null==e&&(e=10),+(+t).toFixed(e)},e.asc=function(t){return t.sort(function(t,e){return t-e}),t},e.getPrecision=function(t){if(t=+t,isNaN(t))return 0;for(var e=1,i=0;Math.round(t*e)/e!==t;)e*=10,i++;return i},e.getPrecisionSafe=function(t){var e=t.toString(),i=e[W](".");return 0>i?0:e[re]-1-i},e.getPixelPrecision=function(t,e){var i=Math.log,n=Math.LN10,r=Math.floor(i(t[1]-t[0])/n),a=Math.round(i(Math.abs(e[1]-e[0]))/n);return Math.max(-r+a,0)},e.MAX_SAFE_INTEGER=9007199254740991,e.remRadian=function(t){var e=2*Math.PI;return(t%e+e)%e},e.isRadianAroundZero=function(t){return t>-i&&i>t},e.parseDate=function(t){if(t instanceof Date)return t;
if(typeof t===Me){var e=new Date(t);return isNaN(+e)&&(e=new Date(new Date(t[Y](/-/g,"/"))-new Date("1970/01/01"))),e}return new Date(Math.round(t))},e.quantity=function(t){return Math.pow(10,Math.floor(Math.log(t)/Math.LN10))},e.nice=function(t,i){var n,r=e.quantity(t),a=t/r;return n=i?1.5>a?1:2.5>a?2:4>a?3:7>a?5:10:1>a?1:2>a?2:3>a?3:5>a?5:10,n*r},e}),e("echarts/model/Model",[Le,Ce,"../util/clazz","./mixin/lineStyle","./mixin/areaStyle","./mixin/textStyle","./mixin/itemStyle"],function(t){function e(t,e,i){this.parentModel=e,this[w]=i,this.option=t}var i=t(Ce),n=t("../util/clazz");e[Se]={constructor:e,init:null,mergeOption:function(t){i.merge(this.option,t,!0)},get:function(t,e){if(!t)return this.option;typeof t===Me&&(t=t.split("."));for(var i=this.option,n=this.parentModel,r=0;r<t[re]&&(!t[r]||(i=i&&"object"==typeof i?i[t[r]]:null,null!=i));r++);return null==i&&n&&!e&&(i=n.get(t)),i},getShallow:function(t,e){var i=this.option,n=null==i?i:i[t],r=this.parentModel;return null==n&&r&&!e&&(n=r[M](t)),n},getModel:function(t,i){var n=this.get(t,!0),r=this.parentModel,a=new e(n,i||r&&r[xe](t),this[w]);return a},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){var t=this.constructor;return new t(i.clone(this.option))},setReadOnly:function(t){n.setReadOnly(this,t)}},n.enableClassExtend(e);var r=i.mixin;return r(e,t("./mixin/lineStyle")),r(e,t("./mixin/areaStyle")),r(e,t("./mixin/textStyle")),r(e,t("./mixin/itemStyle")),e}),e("echarts/util/format",[Le,Ce,"./number","zrender/contain/text"],function(t){var e=t(Ce),i=t("./number"),n=t("zrender/contain/text"),r={};r.addCommas=function(t){return isNaN(t)?"-":(t=(t+"").split("."),t[0][Y](/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t[re]>1?"."+t[1]:""))},r.toCamelCase=function(t){return t[Te]()[Y](/-(.)/g,function(t,e){return e.toUpperCase()})},r.normalizeCssArray=function(t){var e=t[re];return typeof t===Z?[t,t,t,t]:2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t},r.encodeHTML=function(t){return String(t)[Y](/&/g,"&amp;")[Y](/</g,"&lt;")[Y](/>/g,"&gt;")[Y](/"/g,"&quot;")[Y](/'/g,"&#39;")};var a=["a","b","c","d","e","f","g"],o=function(t,e){return"{"+t+(null==e?"":e)+"}"};r.formatTpl=function(t,i){e[X](i)||(i=[i]);var n=i[re];if(!n)return"";for(var r=i[0].$vars||[],s=0;s<r[re];s++){var l=a[s];t=t[Y](o(l),o(l,0))}for(var u=0;n>u;u++)for(var c=0;c<r[re];c++)t=t[Y](o(a[c],u),i[u][r[c]]);return t};var s=function(t){return 10>t?"0"+t:t};return r.formatTime=function(t,e){("week"===t||"month"===t||"quarter"===t||"half-year"===t||"year"===t)&&(t="MM-dd\nyyyy");var n=i.parseDate(e),r=n.getFullYear(),a=n.getMonth()+1,o=n.getDate(),l=n.getHours(),u=n.getMinutes(),c=n.getSeconds();return t=t[Y]("MM",s(a))[Te]()[Y]("yyyy",r)[Y]("yy",r%100)[Y]("dd",s(o))[Y]("d",o)[Y]("hh",s(l))[Y]("h",l)[Y]("mm",s(u))[Y]("m",u)[Y]("ss",s(c))[Y]("s",c)},r.capitalFirst=function(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t},r.truncateText=n.truncateText,r}),e("zrender/core/matrix",[],function(){var t=typeof Float32Array===A?Array:Float32Array,e={create:function(){var i=new t(6);return e.identity(i),i},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},mul:function(t,e,i){var n=e[0]*i[0]+e[2]*i[1],r=e[1]*i[0]+e[3]*i[1],a=e[0]*i[2]+e[2]*i[3],o=e[1]*i[2]+e[3]*i[3],s=e[0]*i[4]+e[2]*i[5]+e[4],l=e[1]*i[4]+e[3]*i[5]+e[5];return t[0]=n,t[1]=r,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t},translate:function(t,e,i){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+i[0],t[5]=e[5]+i[1],t},rotate:function(t,e,i){var n=e[0],r=e[2],a=e[4],o=e[1],s=e[3],l=e[5],u=Math.sin(i),c=Math.cos(i);return t[0]=n*c+o*u,t[1]=-n*u+o*c,t[2]=r*c+s*u,t[3]=-r*u+c*s,t[4]=c*a+u*l,t[5]=c*l-u*a,t},scale:function(t,e,i){var n=i[0],r=i[1];return t[0]=e[0]*n,t[1]=e[1]*r,t[2]=e[2]*n,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*r,t},invert:function(t,e){var i=e[0],n=e[2],r=e[4],a=e[1],o=e[3],s=e[5],l=i*o-a*n;return l?(l=1/l,t[0]=o*l,t[1]=-a*l,t[2]=-n*l,t[3]=i*l,t[4]=(n*s-o*r)*l,t[5]=(a*r-i*s)*l,t):null}};return e}),e("zrender/core/vector",[],function(){var t=typeof Float32Array===A?Array:Float32Array,e={create:function(e,i){var n=new t(2);return null==e&&(e=0),null==i&&(i=0),n[0]=e,n[1]=i,n},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t},clone:function(e){var i=new t(2);return i[0]=e[0],i[1]=e[1],i},set:function(t,e,i){return t[0]=e,t[1]=i,t},add:function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t},scaleAndAdd:function(t,e,i,n){return t[0]=e[0]+i[0]*n,t[1]=e[1]+i[1]*n,t},sub:function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t},len:function(t){return Math.sqrt(this.lenSquare(t))},lenSquare:function(t){return t[0]*t[0]+t[1]*t[1]},mul:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t},div:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t},normalize:function(t,i){var n=e.len(i);return 0===n?(t[0]=0,t[1]=0):(t[0]=i[0]/n,t[1]=i[1]/n),t},distance:function(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))},distanceSquare:function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])},negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},lerp:function(t,e,i,n){return t[0]=e[0]+n*(i[0]-e[0]),t[1]=e[1]+n*(i[1]-e[1]),t},applyTransform:function(t,e,i){var n=e[0],r=e[1];return t[0]=i[0]*n+i[2]*r+i[4],t[1]=i[1]*n+i[3]*r+i[5],t},min:function(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t},max:function(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t}};return e[re]=e.len,e.lengthSquare=e.lenSquare,e.dist=e.distance,e.distSquare=e.distanceSquare,e}),e("echarts/chart/line/LineSeries",[Le,"../helper/createListFromArray","../../model/Series"],function(t){var e=t("../helper/createListFromArray"),i=t("../../model/Series");return i[oe]({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,i){return e(t.data,this,i)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{normal:{position:"top"}},lineStyle:{normal:{width:2,type:"solid"}},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:!1,connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}})}),e("echarts/chart/line/LineView",[Le,Ce,"../helper/SymbolDraw","../helper/Symbol","./lineAnimationDiff",f,"./poly","../../view/Chart"],function(t){function e(t,e){if(t[re]===e[re]){for(var i=0;i<t[re];i++){var n=t[i],r=e[i];if(n[0]!==r[0]||n[1]!==r[1])return}return!0}}function i(t){return typeof t===Z?t:t?.3:0}function n(t){var e=t.getGlobalExtent();if(t.onBand){var i=t.getBandWidth()/2-1,n=e[1]>e[0]?1:-1;e[0]+=n*i,e[1]-=n*i}return e}function r(t){return t>=0?1:-1}function a(t,e){var i=t[P](),n=t.getOtherAxis(i),a=i.onZero?0:n.scale[k]()[0],o=n.dim,s="x"===o||"radius"===o?1:0;return e.mapArray([o],function(n,l){for(var u,c=e.stackedOn;c&&r(c.get(o,l))===r(n);){u=c;break}var f=[];return f[s]=e.get(i.dim,l),f[1-s]=u?u.get(o,l,!0):a,t[h](f)},!0)}function o(t,e){return null!=e[J]?e[J]:null!=e.name?t.indexOfName(e.name):void 0}function s(t,e,i){var r=n(t[c]("x")),a=n(t[c]("y")),o=t[P]().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(a[0],a[1]),u=Math.max(r[0],r[1])-s,h=Math.max(a[0],a[1])-l,f=i.get("lineStyle.normal.width")||2,d=i.get("clipOverflow")?f/2:Math.max(u,h);o?(l-=d,h+=2*d):(s-=d,u+=2*d);var p=new M.Rect({shape:{x:s,y:l,width:u,height:h}});return e&&(p.shape[o?"width":de]=0,M.initProps(p,{shape:{width:u,height:h}},i)),p}function d(t,e,i){var n=t.getAngleAxis(),r=t.getRadiusAxis(),a=r[k](),o=n[k](),s=Math.PI/180,l=new M.Sector({shape:{cx:t.cx,cy:t.cy,r0:a[0],r:a[1],startAngle:-o[0]*s,endAngle:-o[1]*s,clockwise:n.inverse}});return e&&(l.shape.endAngle=-o[0]*s,M.initProps(l,{shape:{endAngle:-o[1]*s}},i)),l}function p(t,e,i){return"polar"===t.type?d(t,e,i):s(t,e,i)}function v(t,e,i){for(var n=e[P](),r="x"===n.dim||"radius"===n.dim?0:1,a=[],o=0;o<t[re]-1;o++){var s=t[o+1],l=t[o];a.push(l);var u=[];switch(i){case"end":u[r]=s[r],u[1-r]=l[1-r],a.push(u);break;case B:var c=(l[r]+s[r])/2,h=[];u[r]=h[r]=c,u[1-r]=l[1-r],h[1-r]=s[1-r],a.push(u),a.push(h);break;default:u[r]=l[r],u[1-r]=s[1-r],a.push(u)}}return t[o]&&a.push(t[o]),a}function m(t,e){return Math.max(Math.min(t,e[1]),e[0])}function g(t,e){var i=t.getVisual("visualMeta");if(i&&i[re]){for(var n,r=i[re]-1;r>=0;r--)if(i[r].dimension<2){n=i[r];break}if(n&&"cartesian2d"===e.type){var a=n.dimension,o=t[u][a],s=t.getDataExtent(o),h=n.stops,f=[];h[0].interval&&h.sort(function(t,e){return t.interval[0]-e.interval[0]});var d=h[0],p=h[h[re]-1],v=d.interval?m(d.interval[0],s):d.value,g=p.interval?m(p.interval[1],s):p.value,y=g-v;if(0===y)return t[S](0,"color");for(var r=0;r<h[re];r++)if(h[r].interval){if(h[r].interval[1]===h[r].interval[0])continue;f.push({offset:(m(h[r].interval[0],s)-v)/y,color:h[r].color},{offset:(m(h[r].interval[1],s)-v)/y,color:h[r].color})}else f.push({offset:(h[r].value-v)/y,color:h[r].color});var _=new M.LinearGradient(0,0,0,0,f,!0),x=e[c](o),b=Math.round(x.toGlobalCoord(x[l](v))),w=Math.round(x.toGlobalCoord(x[l](g)));return _[o]=b,_[o+"2"]=w,_}}}var y=t(Ce),_=t("../helper/SymbolDraw"),b=t("../helper/Symbol"),w=t("./lineAnimationDiff"),M=t(f),T=t("./poly"),L=t("../../view/Chart");return L[oe]({type:"line",init:function(){var t=new M.Group,e=new _;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,n,r){var o=t[I],s=this.group,l=t[ue](),u=t[xe]("lineStyle.normal"),c=t[xe]("areaStyle.normal"),h=l.mapArray(l.getItemLayout,!0),f="polar"===o.type,d=this._coordSys,m=this._symbolDraw,_=this._polyline,x=this._polygon,b=this._lineGroup,w=t.get(be),M=!c.isEmpty(),S=a(o,l),T=t.get("showSymbol"),C=T&&!f&&!t.get("showAllSymbol")&&this._getSymbolIgnoreFunc(l,o),P=this._data;P&&P.eachItemGraphicEl(function(t,e){t.__temp&&(s[se](t),P.setItemGraphicEl(e,null))}),T||m[se](),s.add(b);var L=!f&&t.get("step");_&&d.type===o.type&&L===this._step?(M&&!x?x=this._newPolygon(h,S,o,w):x&&!M&&(b[se](x),x=this._polygon=null),b.setClipPath(p(o,!1,t)),T&&m.updateData(l,C),l.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),e(this._stackedOnPoints,S)&&e(this._points,h)||(w?this._updateAnimation(l,S,o,r,L):(L&&(h=v(h,o,L),S=v(S,o,L)),_.setShape({points:h}),x&&x.setShape({points:h,stackedOnPoints:S})))):(T&&m.updateData(l,C),L&&(h=v(h,o,L),S=v(S,o,L)),_=this._newPolyline(h,o,w),M&&(x=this._newPolygon(h,S,o,w)),b.setClipPath(p(o,!0,t)));var A=g(l,o)||l.getVisual("color");_.useStyle(y[ae](u.getLineStyle(),{fill:"none",stroke:A,lineJoin:"bevel"}));var k=t.get("smooth");if(k=i(t.get("smooth")),_.setShape({smooth:k,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),x){var z=l.stackedOn,D=0;if(x.useStyle(y[ae](c.getAreaStyle(),{fill:A,opacity:.7,lineJoin:"bevel"})),z){var O=z.hostModel;D=i(O.get("smooth"))}x.setShape({smooth:k,stackedOnSmooth:D,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=l,this._coordSys=o,this._stackedOnPoints=S,this._points=h,this._step=L},highlight:function(t,e,i,n){var r=t[ue](),a=o(r,n);if(!(a instanceof Array)&&null!=a&&a>=0){var s=r[x](a);if(!s){var l=r.getItemLayout(a);s=new b(r,a),s[E]=l,s.setZ(t.get($),t.get("z")),s[ve]=isNaN(l[0])||isNaN(l[1]),s.__temp=!0,r.setItemGraphicEl(a,s),s.stopSymbolAnimation(!0),this.group.add(s)}s.highlight()}else L[Se].highlight.call(this,t,e,i,n)},downplay:function(t,e,i,n){var r=t[ue](),a=o(r,n);if(null!=a&&a>=0){var s=r[x](a);s&&(s.__temp?(r.setItemGraphicEl(a,null),this.group[se](s)):s.downplay())}else L[Se].downplay.call(this,t,e,i,n)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup[se](e),e=new T.Polyline({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var i=this._polygon;return i&&this._lineGroup[se](i),i=new T.Polygon({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(i),this._polygon=i,i},_getSymbolIgnoreFunc:function(t,e){var i=e.getAxesByScale(C)[0];return i&&i.isLabelIgnored?y.bind(i.isLabelIgnored,i):void 0},_updateAnimation:function(t,e,i,n,r){var a=this._polyline,o=this._polygon,s=t.hostModel,l=w(this._data,t,this._stackedOnPoints,e,this._coordSys,i),u=l.current,c=l.stackedOnCurrent,h=l.next,f=l.stackedOnNext;r&&(u=v(l.current,i,r),c=v(l.stackedOnCurrent,i,r),h=v(l.next,i,r),f=v(l.stackedOnNext,i,r)),a.shape.__points=l.current,a.shape.points=u,M.updateProps(a,{shape:{points:h}},s),o&&(o.setShape({points:u,stackedOnPoints:c}),M.updateProps(o,{shape:{points:h,stackedOnPoints:f,__points:l.next}},s));for(var d=[],p=l.status,m=0;m<p[re];m++){var g=p[m].cmd;if("="===g){var y=t[x](p[m].idx1);y&&d.push({el:y,ptIdx:m})}}a.animators&&a.animators[re]&&a.animators[0].during(function(){for(var t=0;t<d[re];t++){var e=d[t].el;e.attr(E,a.shape.__points[d[t].ptIdx])}})},remove:function(){var t=this.group,e=this._data;this._lineGroup[H](),this._symbolDraw[se](!0),e&&e.eachItemGraphicEl(function(i,n){i.__temp&&(t[se](i),e.setItemGraphicEl(n,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}})}),e("echarts/data/List",[Le,"../model/Model","./DataDiffer",Ce,"../util/model"],function(t){function e(t){return h[X](t)||(t=[t]),t}function i(t,e){var i=t[u],n=new g(h.map(i,t.getDimensionInfo,t),t.hostModel);m(n,t);for(var r=n._storage={},a=t._storage,o=0;o<i[re];o++){var s=i[o],l=a[s];r[s]=h[W](e,s)>=0?new l.constructor(a[s][re]):a[s]}return n}var n=A,r=typeof window===A?global:window,a=typeof r.Float64Array===n?Array:r.Float64Array,o=typeof r.Int32Array===n?Array:r.Int32Array,s={"float":a,"int":o,ordinal:Array,number:Array,time:Array},l=t("../model/Model"),c=t("./DataDiffer"),h=t(Ce),f=t("../util/model"),d=h[le],v=["stackedOn","hasItemOption","_nameList","_idList","_rawData"],m=function(t,e){h.each(v.concat(e.__wrappedMethods||[]),function(i){e.hasOwnProperty(i)&&(t[i]=e[i])}),t.__wrappedMethods=e.__wrappedMethods},g=function(t,e){t=t||["x","y"];for(var i={},n=[],r=0;r<t[re];r++){var a,o={};typeof t[r]===Me?(a=t[r],o={name:a,stackable:!1,type:"number"}):(o=t[r],a=o.name,o.type=o.type||Z),n.push(a),i[a]=o}this[u]=n,this._dimensionInfos=i,this.hostModel=e,this.dataType,this.indices=[],this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this.stackedOn=null,this._visual={},this._layout={},this._itemVisuals=[],this._itemLayouts=[],this._graphicEls=[],this._rawData,this._extent},y=g[Se];y.type="list",y.hasItemOption=!0,y.getDimension=function(t){return isNaN(t)||(t=this[u][t]||t),t},y.getDimensionInfo=function(t){return h.clone(this._dimensionInfos[this.getDimension(t)])},y.initData=function(t,e,i){t=t||[],this._rawData=t;var n=this._storage={},r=this.indices=[],a=this[u],o=t[re],l=this._dimensionInfos,c=[],h={};e=e||[];for(var d=0;d<a[re];d++){var p=l[a[d]],v=s[p.type];n[a[d]]=new v(o)}var m=this;i||(m.hasItemOption=!1),i=i||function(t,e,i,n){var r=f.getDataItemValue(t);return f.isDataItemOption(t)&&(m.hasItemOption=!0),f.converDataValue(r instanceof Array?r[n]:r,l[e])};for(var g=0;g<t[re];g++){for(var y=t[g],_=0;_<a[re];_++){var x=a[_],b=n[x];b[g]=i(y,x,g,_)}r.push(g)}for(var d=0;d<t[re];d++){e[d]||t[d]&&null!=t[d].name&&(e[d]=t[d].name);var w=e[d]||"",M=t[d]&&t[d].id;!M&&w&&(h[w]=h[w]||0,M=w,h[w]>0&&(M+="__ec__"+h[w]),h[w]++),M&&(c[d]=M)}this._nameList=e,this._idList=c},y.count=function(){return this.indices[re]},y.get=function(t,e,i){var n=this._storage,r=this.indices[e];if(null==r)return 0/0;var a=n[t]&&n[t][r];if(i){var o=this._dimensionInfos[t];if(o&&o.stackable)for(var s=this.stackedOn;s;){var l=s.get(t,e);(a>=0&&l>0||0>=a&&0>l)&&(a+=l),s=s.stackedOn}}return a},y.getValues=function(t,e,i){var n=[];h[X](t)||(i=e,e=t,t=this[u]);for(var r=0,a=t[re];a>r;r++)n.push(this.get(t[r],e,i));return n},y.hasValue=function(t){for(var e=this[u],i=this._dimensionInfos,n=0,r=e[re];r>n;n++)if(i[e[n]].type!==C&&isNaN(this.get(e[n],t)))return!1;return!0},y.getDataExtent=function(t,e){t=this.getDimension(t);var i=this._storage[t],n=this.getDimensionInfo(t);e=n&&n.stackable&&e;var r,a=(this._extent||(this._extent={}))[t+!!e];if(a)return a;if(i){for(var o=1/0,s=-1/0,l=0,u=this.count();u>l;l++)r=this.get(t,l,e),o>r&&(o=r),r>s&&(s=r);return this._extent[t+!!e]=[o,s]}return[1/0,-1/0]},y.getSum=function(t,e){var i=this._storage[t],n=0;if(i)for(var r=0,a=this.count();a>r;r++){var o=this.get(t,r,e);isNaN(o)||(n+=o)}return n},y[W]=function(t,e){var i=this._storage,n=i[t],r=this.indices;if(n)for(var a=0,o=r[re];o>a;a++){var s=r[a];if(n[s]===e)return a}return-1},y.indexOfName=function(t){for(var e=this.indices,i=this._nameList,n=0,r=e[re];r>n;n++){var a=e[n];if(i[a]===t)return n}return-1},y.indexOfRawIndex=function(t){for(var e=this.indices,i=0,n=e[re]-1;n>=i;){var r=(i+n)/2|0;if(e[r]<t)i=r+1;else{if(!(e[r]>t))return r;n=r-1}}return-1},y.indexOfNearest=function(t,e,i,n){var r=this._storage,a=r[t];null==n&&(n=1/0);var o=-1;if(a)for(var s=Number.MAX_VALUE,l=0,u=this.count();u>l;l++){var c=e-this.get(t,l,i),h=Math.abs(c);n>=c&&(s>h||h===s&&c>0)&&(s=h,o=l)}return o},y.getRawIndex=function(t){var e=this.indices[t];return null==e?-1:e},y.getRawDataItem=function(t){return this._rawData[this.getRawIndex(t)]},y[T]=function(t){return this._nameList[this.indices[t]]||""},y.getId=function(t){return this._idList[this.indices[t]]||this.getRawIndex(t)+""},y.each=function(t,i,n,r){typeof t===j&&(r=n,n=i,i=t,t=[]),t=h.map(e(t),this.getDimension,this);var a=[],o=t[re],s=this.indices;r=r||this;for(var l=0;l<s[re];l++)switch(o){case 0:i.call(r,l);break;case 1:i.call(r,this.get(t[0],l,n),l);break;case 2:i.call(r,this.get(t[0],l,n),this.get(t[1],l,n),l);break;default:for(var u=0;o>u;u++)a[u]=this.get(t[u],l,n);a[u]=l,i.apply(r,a)}},y.filterSelf=function(t,i,n,r){typeof t===j&&(r=n,n=i,i=t,t=[]),t=h.map(e(t),this.getDimension,this);var a=[],o=[],s=t[re],l=this.indices;r=r||this;for(var u=0;u<l[re];u++){var c;if(1===s)c=i.call(r,this.get(t[0],u,n),u);else{for(var f=0;s>f;f++)o[f]=this.get(t[f],u,n);o[f]=u,c=i.apply(r,o)}c&&a.push(l[u])}return this.indices=a,this._extent={},this},y.mapArray=function(t,e,i,n){typeof t===j&&(n=i,i=e,e=t,t=[]);var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},i,n),r},y.map=function(t,n,r,a){t=h.map(e(t),this.getDimension,this);var o=i(this,t),s=o.indices=this.indices,l=o._storage,u=[];return this.each(t,function(){var e=arguments[arguments[re]-1],i=n&&n.apply(this,arguments);if(null!=i){typeof i===Z&&(u[0]=i,i=u);for(var r=0;r<i[re];r++){var a=t[r],o=l[a],c=s[e];o&&(o[c]=i[r])}}},r,a),o},y.downSample=function(t,e,n,r){for(var a=i(this,[t]),o=this._storage,s=a._storage,l=this.indices,u=a.indices=[],c=[],h=[],f=Math.floor(1/e),d=s[t],p=this.count(),v=0;v<o[t][re];v++)s[t][v]=o[t][v];for(var v=0;p>v;v+=f){f>p-v&&(f=p-v,c[re]=f);for(var m=0;f>m;m++){var g=l[v+m];c[m]=d[g],h[m]=g}var y=n(c),g=h[r(c,y)||0];d[g]=y,u.push(g)}return a},y[p]=function(t){var e=this.hostModel;return t=this.indices[t],new l(this._rawData[t],e,e&&e[w])},y.diff=function(t){var e=this._idList,i=t&&t._idList;return new c(t?t.indices:[],this.indices,function(t){return i[t]||t+""},function(t){return e[t]||t+""})},y.getVisual=function(t){var e=this._visual;return e&&e[t]},y.setVisual=function(t,e){if(d(t))for(var i in t)t.hasOwnProperty(i)&&this.setVisual(i,t[i]);else this._visual=this._visual||{},this._visual[t]=e},y.setLayout=function(t,e){if(d(t))for(var i in t)t.hasOwnProperty(i)&&this.setLayout(i,t[i]);else this._layout[t]=e},y.getLayout=function(t){return this._layout[t]},y.getItemLayout=function(t){return this._itemLayouts[t]},y.setItemLayout=function(t,e,i){this._itemLayouts[t]=i?h[oe](this._itemLayouts[t]||{},e):e},y.clearItemLayouts=function(){this._itemLayouts[re]=0},y[S]=function(t,e,i){var n=this._itemVisuals[t],r=n&&n[e];return null!=r||i?r:this.getVisual(e)},y.setItemVisual=function(t,e,i){var n=this._itemVisuals[t]||{};if(this._itemVisuals[t]=n,d(e))for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);else n[e]=i},y.clearAllVisual=function(){this._visual={},this._itemVisuals=[]};var _=function(t){t.seriesIndex=this.seriesIndex,t[J]=this[J],t.dataType=this.dataType};return y.setItemGraphicEl=function(t,e){var i=this.hostModel;e&&(e[J]=t,e.dataType=this.dataType,e.seriesIndex=i&&i.seriesIndex,"group"===e.type&&e[K](_,e)),this._graphicEls[t]=e},y[x]=function(t){return this._graphicEls[t]},y.eachItemGraphicEl=function(t,e){h.each(this._graphicEls,function(i,n){i&&t&&t.call(e,i,n)})},y.cloneShallow=function(){var t=h.map(this[u],this.getDimensionInfo,this),e=new g(t,this.hostModel);return e._storage=this._storage,m(e,this),e.indices=this.indices.slice(),this._extent&&(e._extent=h[oe]({},this._extent)),e},y.wrapMethod=function(t,e){var i=this[t];typeof i===j&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=i.apply(this,arguments);return e.apply(this,[t].concat(h.slice(arguments)))})},y.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],y.CHANGABLE_METHODS=["filterSelf"],g}),e("echarts/visual/symbol",[Le],function(){return function(t,e,i,n){n.eachRawSeriesByType(t,function(t){var r=t[ue](),a=t.get("symbol")||e,o=t.get("symbolSize");r.setVisual({legendSymbol:i||a,symbol:a,symbolSize:o}),n.isSeriesFiltered(t)||(typeof o===j&&r.each(function(e){var i=t.getRawValue(e),n=t.getDataParams(e);r.setItemVisual(e,"symbolSize",o(i,n))}),r.each(function(t){var e=r[p](t),i=e[M]("symbol",!0),n=e[M]("symbolSize",!0);null!=i&&r.setItemVisual(t,"symbol",i),null!=n&&r.setItemVisual(t,"symbolSize",n)}))})}}),e("echarts/layout/points",[Le],function(){return function(t,e){e.eachSeriesByType(t,function(t){var e=t[ue](),i=t[I];if(i){var n=i[u];"singleAxis"===i.type?e.each(n[0],function(t,n){e.setItemLayout(n,isNaN(t)?[0/0,0/0]:i[h](t))}):e.each(n,function(t,n,r){e.setItemLayout(r,isNaN(t)||isNaN(n)?[0/0,0/0]:i[h]([t,n]))},!0)}})}}),e("echarts/coord/cartesian/Grid",[Le,"exports","../../util/layout","../../coord/axisHelper",Ce,"./Cartesian2D","./Axis2D","./GridModel","../../CoordinateSystem"],function(t){function e(t,e){return t.findGridModel()===e}function i(t){var e,i=t.model,n=i.getFormattedLabels(),r=1,a=n[re];a>40&&(r=Math.ceil(a/40));for(var o=0;a>o;o+=r)if(!t.isLabelIgnored(o)){var s=i.getTextRect(n[o]);e?e.union(s):e=s}return e}function n(t,e,i){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,i),this._model=t}function r(t,e){var i=t[k](),n=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return n-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return n-t+e}}function a(t,e){return f.map(_,function(i){var n=e.queryComponents({mainType:i,index:t.get(i+"Index"),id:t.get(i+"Id")})[0];return n})}function o(t){return"cartesian2d"===t.get(I)}var l=t("../../util/layout"),h=t("../../coord/axisHelper"),f=t(Ce),d=t("./Cartesian2D"),p=t("./Axis2D"),v=f.each,m=h.ifAxisCrossZero,g=h.niceScaleExtent;t("./GridModel");var y=n[Se];y.type="grid",y.getRect=function(){return this._rect},y[he]=function(t,e){function i(t){var e=n[t];for(var i in e){var r=e[i];if(r&&(r.type===s||!m(r)))return!0}return!1}var n=this._axesMap;this._updateScale(t,this._model),v(n.x,function(t){g(t,t.model)}),v(n.y,function(t){g(t,t.model)}),v(n.x,function(t){i("y")&&(t.onZero=!1)}),v(n.y,function(t){i("x")&&(t.onZero=!1)}),this[we](this._model,e)},y[we]=function(t,e){function n(){v(o,function(t){var e=t.isHorizontal(),i=e?[0,a.width]:[0,a[de]],n=t.inverse?1:0;t.setExtent(i[n],i[1-n]),r(t,e?a.x:a.y)})}var a=l.getLayoutRect(t.getBoxLayoutParams(),{width:e[_e](),height:e[ye]()});this._rect=a;var o=this._axesList;n(),t.get("containLabel")&&(v(o,function(t){if(!t.model.get("axisLabel.inside")){var e=i(t);if(e){var n=t.isHorizontal()?de:"width",r=t.model.get("axisLabel.margin");a[n]-=e[n]+r,"top"===t[E]?a.y+=e[de]+r:"left"===t[E]&&(a.x+=e.width+r)}}}),n())},y[c]=function(t,e){var i=this._axesMap[t];if(null!=i){if(null==e)for(var n in i)return i[n];return i[e]}},y.getCartesian=function(t,e){if(null!=t&&null!=e){var i="x"+t+"y"+e;return this._coordsMap[i]}for(var n=0,r=this._coordsList;n<r[re];n++)if(r[n][c]("x").index===t||r[n][c]("y").index===e)return r[n]},y._initCartesian=function(t,i){function n(n){return function(l,u){if(e(l,t,i)){var c=l.get(E);"x"===n?"top"!==c&&c!==pe&&(c=pe,r[c]&&(c="top"===c?pe:"top")):"left"!==c&&"right"!==c&&(c="left",r[c]&&(c="left"===c?"right":"left")),r[c]=!0;var f=new p(n,h.createScaleByModel(l),[0,0],l.get("type"),c),d=f.type===s;f.onBand=d&&l.get("boundaryGap"),f.inverse=l.get("inverse"),f.onZero=l.get("axisLine.onZero"),l.axis=f,f.model=l,f.grid=this,f.index=u,this._axesList.push(f),a[n][u]=f,o[n]++}}}var r={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},o={x:0,y:0};return i.eachComponent("xAxis",n("x"),this),i.eachComponent("yAxis",n("y"),this),o.x&&o.y?(this._axesMap=a,void v(a.x,function(t,e){v(a.y,function(i,n){var r="x"+e+"y"+n,a=new d(r);a.grid=this,this._coordsMap[r]=a,this._coordsList.push(a),a.addAxis(t),a.addAxis(i)},this)},this)):(this._axesMap={},void(this._axesList=[]))},y._updateScale=function(t,i){function n(t,e,i){v(i.coordDimToDataDim(e.dim),function(i){e.scale.unionExtent(t.getDataExtent(i,e.scale.type!==C))})}f.each(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t[ce](function(r){if(o(r)){var s=a(r,t),l=s[0],u=s[1];if(!e(l,i,t)||!e(u,i,t))return;var h=this.getCartesian(l.componentIndex,u.componentIndex),f=r[ue](),d=h[c]("x"),p=h[c]("y");"list"===f.type&&(n(f,d,r),n(f,p,r))}},this)};var _=["xAxis","yAxis"];return n[fe]=function(t,e){var i=[];return t.eachComponent("grid",function(r,a){var o=new n(r,t,e);o.name="grid_"+a,o[we](r,e),r[I]=o,i.push(o)}),t[ce](function(e){if(o(e)){var i=a(e,t),n=i[0],r=i[1],s=n.findGridModel(),l=s[I];e[I]=l.getCartesian(n.componentIndex,r.componentIndex)}}),i},n[u]=d[Se][u],t("../../CoordinateSystem").register("cartesian2d",n),n}),e("echarts/processor/dataSample",[],function(){var t={average:function(t){for(var e=0,i=0,n=0;n<t[re];n++)isNaN(t[n])||(e+=t[n],i++);return 0===i?0/0:e/i},sum:function(t){for(var e=0,i=0;i<t[re];i++)e+=t[i]||0;return e},max:function(t){for(var e=-1/0,i=0;i<t[re];i++)t[i]>e&&(e=t[i]);return e},min:function(t){for(var e=1/0,i=0;i<t[re];i++)t[i]<e&&(e=t[i]);return e},nearest:function(t){return t[0]}},e=function(t){return Math.round(t[re]/2)};return function(i,n){n.eachSeriesByType(i,function(i){var n=i[ue](),r=i.get("sampling"),a=i[I];if("cartesian2d"===a.type&&r){var o=a[P](),s=a.getOtherAxis(o),l=o[k](),u=l[1]-l[0],c=Math.round(n.count()/u);if(c>1){var h;typeof r===Me?h=t[r]:typeof r===j&&(h=r),h&&(n=n.downSample(s.dim,1/c,h,e),i.setData(n))}}},this)}}),e("echarts/chart/bar/BarSeries",[Le,"../../model/Series","../helper/createListFromArray"],function(t){var e=t("../../model/Series"),i=t("../helper/createListFromArray");return e[oe]({type:"series.bar",dependencies:["grid","polar"],getInitialData:function(t,e){return i(t.data,this,e)},getMarkerPosition:function(t){var e=this[I];if(e){var i=e[h](t,!0),n=this[ue](),r=n.getLayout("offset"),a=n.getLayout("size"),o=e[P]().isHorizontal()?0:1;return i[o]+=r+a/2,i}return[0/0,0/0]},brushSelector:"rect",defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,itemStyle:{normal:{},emphasis:{}}}})}),e("echarts/chart/bar/BarView",[Le,Ce,f,"../../model/Model","./barItemStyle",a],function(t){function e(t,e){var i=t.width>0?1:-1,n=t[de]>0?1:-1;e=Math.min(e,Math.abs(t.width),Math.abs(t[de])),t.x+=i*e/2,t.y+=n*e/2,t.width-=i*e,t[de]-=n*e}var i=t(Ce),n=t(f);return i[oe](t("../../model/Model")[Se],t("./barItemStyle")),t(a).extendChartView({type:"bar",render:function(t,e,i){var n=t.get(I);return"cartesian2d"===n&&this._renderOnCartesian(t,e,i),this.group},_renderOnCartesian:function(t){function r(r,a){var s=o.getItemLayout(r),l=o[p](r).get(f)||0;e(s,l);var u=new n.Rect({shape:i[oe]({},s)});if(h){var d=u.shape,v=c?de:"width",m={};d[v]=0,m[v]=s[v],n[a?"updateProps":"initProps"](u,{shape:m},t,r)}return u}var a=this.group,o=t[ue](),s=this._data,l=t[I],u=l[P](),c=u.isHorizontal(),h=t.get(be),f=["itemStyle",b,"barBorderWidth"];o.diff(s).add(function(t){if(o.hasValue(t)){var e=r(t);o.setItemGraphicEl(t,e),a.add(e)}})[he](function(i,l){var u=s[x](l);if(!o.hasValue(i))return void a[se](u);u||(u=r(i,!0));var c=o.getItemLayout(i),h=o[p](i).get(f)||0;e(c,h),n.updateProps(u,{shape:c},t,i),o.setItemGraphicEl(i,u),a.add(u)})[se](function(e){var i=s[x](e);i&&(i.style.text="",n.updateProps(i,{shape:{width:0}},t,e,function(){a[se](i)}))}).execute(),this._updateStyle(t,o,c),this._data=o},_updateStyle:function(t,e,r){function a(t,e,i,r,a){n.setText(t,e,i),t.text=r,"outside"===t.textPosition&&(t.textPosition=a)}e.eachItemGraphicEl(function(s,l){var u=e[p](l),c=e[S](l,"color"),h=e[S](l,O),f=e.getItemLayout(l),d=u[xe]("itemStyle.normal"),v=u[xe]("itemStyle.emphasis").getBarItemStyle();s.setShape("r",d.get("barBorderRadius")||0),s.useStyle(i[ae]({fill:c,opacity:h},d.getBarItemStyle()));var m=r?f[de]>0?pe:"top":f.width>0?"left":"right",g=u[xe]("label.normal"),y=u[xe]("label.emphasis"),_=s.style;g.get("show")?a(_,g,c,i[o](t.getFormattedLabel(l,b),t.getRawValue(l)),m):_.text="",y.get("show")?a(v,y,c,i[o](t.getFormattedLabel(l,"emphasis"),t.getRawValue(l)),m):v.text="",n.setHoverStyle(s,v)})},remove:function(t){var e=this.group;t.get(be)?this._data&&this._data.eachItemGraphicEl(function(i){i.style.text="",n.updateProps(i,{shape:{width:0}},t,i[J],function(){e[se](i)})}):e[H]()}})}),e("echarts/layout/barGrid",[Le,Ce,"../util/number"],function(t){function e(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex}function i(t){return t.dim+t.index}function n(t){var n={};a.each(t,function(t){var r=t[ue](),a=t[I],o=a[P](),l=o[k](),c=o.type===s?o.getBandWidth():Math.abs(l[1]-l[0])/r.count(),h=n[i(o)]||{bandWidth:c,remainedWidth:c,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},f=h.stacks;n[i(o)]=h;var d=e(t);f[d]||h.autoWidthCount++,f[d]=f[d]||{width:0,maxWidth:0};var p=u(t.get("barWidth"),c),v=u(t.get("barMaxWidth"),c),m=t.get("barGap"),g=t.get("barCategoryGap");p&&!f[d].width&&(p=Math.min(h.remainedWidth,p),f[d].width=p,h.remainedWidth-=p),v&&(f[d].maxWidth=v),null!=m&&(h.gap=m),null!=g&&(h.categoryGap=g)});var r={};return a.each(n,function(t,e){r[e]={};var i=t.stacks,n=t.bandWidth,o=u(t.categoryGap,n),s=u(t.gap,1),l=t.remainedWidth,c=t.autoWidthCount,h=(l-o)/(c+(c-1)*s);h=Math.max(h,0),a.each(i,function(t){var e=t.maxWidth;!t.width&&e&&h>e&&(e=Math.min(e,l),l-=e,t.width=e,c--)}),h=(l-o)/(c+(c-1)*s),h=Math.max(h,0);var f,d=0;a.each(i,function(t){t.width||(t.width=h),f=t,d+=t.width*(1+s)}),f&&(d-=f.width*s);var p=-d/2;a.each(i,function(t,i){r[e][i]=r[e][i]||{offset:p,width:t.width},p+=t.width*(1+s)})}),r}function r(t,r){var o=n(a[U](r.getSeriesByType(t),function(t){return!r.isSeriesFiltered(t)&&t[I]&&"cartesian2d"===t[I].type})),s={};r.eachSeriesByType(t,function(t){var n=t[ue](),r=t[I],a=r[P](),u=e(t),c=o[i(a)][u],h=c.offset,f=c.width,d=r.getOtherAxis(a),p=t.get("barMinHeight")||0,v=a.onZero?d.toGlobalCoord(d[l](0)):d.getGlobalExtent()[0],m=r.dataToPoints(n,!0);s[u]=s[u]||[],n.setLayout({offset:h,size:f}),n.each(d.dim,function(t,e){if(!isNaN(t)){s[u][e]||(s[u][e]={p:v,n:v});var i,r,a,o,l=t>=0?"p":"n",c=m[e],g=s[u][e][l];d.isHorizontal()?(i=g,r=c[1]+h,a=c[0]-g,o=f,Math.abs(a)<p&&(a=(0>a?-1:1)*p),s[u][e][l]+=a):(i=c[0]+h,r=g,a=f,o=c[1]-g,Math.abs(o)<p&&(o=(0>=o?-1:1)*p),s[u][e][l]+=o),n.setItemLayout(e,{x:i,y:r,width:a,height:o})}},!0)},this)}var a=t(Ce),o=t("../util/number"),u=o[d];return r}),e("echarts/util/layout",[Le,Ce,"zrender/core/BoundingRect","./number","./format"],function(t){function e(t,e,i,n,r){var a=0,o=0;null==n&&(n=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var c,h,f=l[E],d=l[N](),p=e.childAt(u+1),v=p&&p[N]();if("horizontal"===t){var m=d.width+(v?-v.x+d.x:0);c=a+m,c>n||l.newline?(a=0,c=m,o+=s+i,s=d[de]):s=Math.max(s,d[de])
}else{var g=d[de]+(v?-v.y+d.y:0);h=o+g,h>r||l.newline?(a+=s+i,o=0,h=g,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=a,f[1]=o,"horizontal"===t?a=c+i:o=h+i)})}var i=t(Ce),n=t("zrender/core/BoundingRect"),r=t("./number"),a=t("./format"),o=r[d],s=i.each,l={},u=["left","right","top",pe,"width",de];return l.box=e,l.vbox=i.curry(e,"vertical"),l.hbox=i.curry(e,"horizontal"),l.getAvailableSize=function(t,e,i){var n=e.width,r=e[de],s=o(t.x,n),l=o(t.y,r),u=o(t.x2,n),c=o(t.y2,r);return(isNaN(s)||isNaN(parseFloat(t.x)))&&(s=0),(isNaN(u)||isNaN(parseFloat(t.x2)))&&(u=n),(isNaN(l)||isNaN(parseFloat(t.y)))&&(l=0),(isNaN(c)||isNaN(parseFloat(t.y2)))&&(c=r),i=a.normalizeCssArray(i||0),{width:Math.max(u-s-i[1]-i[3],0),height:Math.max(c-l-i[0]-i[2],0)}},l.getLayoutRect=function(t,e,i){i=a.normalizeCssArray(i||0);var r=e.width,s=e[de],l=o(t.left,r),u=o(t.top,s),c=o(t.right,r),h=o(t[pe],s),f=o(t.width,r),d=o(t[de],s),p=i[2]+i[0],v=i[1]+i[3],m=t.aspect;switch(isNaN(f)&&(f=r-c-v-l),isNaN(d)&&(d=s-h-p-u),isNaN(f)&&isNaN(d)&&(m>r/s?f=.8*r:d=.8*s),null!=m&&(isNaN(f)&&(f=m*d),isNaN(d)&&(d=f/m)),isNaN(l)&&(l=r-c-f-v),isNaN(u)&&(u=s-h-d-p),t.left||t.right){case R:l=r/2-f/2-i[3];break;case"right":l=r-f-v}switch(t.top||t[pe]){case B:case R:u=s/2-d/2-i[0];break;case pe:u=s-d-p}l=l||0,u=u||0,isNaN(f)&&(f=r-l-(c||0)),isNaN(d)&&(d=s-u-(h||0));var g=new n(l+i[3],u+i[0],f,d);return g.margin=i,g},l.positionGroup=function(t,e,n,r){var a=t[N]();e=i[oe](i.clone(e),{width:a.width,height:a[de]}),e=l.getLayoutRect(e,n,r),t.attr(E,[e.x-a.x,e.y-a.y])},l.mergeLayoutParam=function(t,e,n){function r(i){var r={},l=0,u={},c=0,h=n.ignoreSize?1:2;if(s(i,function(e){u[e]=t[e]}),s(i,function(t){a(e,t)&&(r[t]=u[t]=e[t]),o(r,t)&&l++,o(u,t)&&c++}),c!==h&&l){if(l>=h)return r;for(var f=0;f<i[re];f++){var d=i[f];if(!a(r,d)&&a(t,d)){r[d]=t[d];break}}return r}return u}function a(t,e){return t.hasOwnProperty(e)}function o(t,e){return null!=t[e]&&"auto"!==t[e]}function l(t,e,i){s(t,function(t){e[t]=i[t]})}!i[le](n)&&(n={});var u=["width","left","right"],c=[de,"top",pe],h=r(u),f=r(c);l(u,t,h),l(c,t,f)},l.getLayoutParams=function(t){return l.copyLayoutParams({},t)},l.copyLayoutParams=function(t,e){return e&&t&&s(u,function(i){e.hasOwnProperty(i)&&(t[i]=e[i])}),t},l}),e("echarts/chart/pie/PieView",[Le,f,Ce,"../../view/Chart"],function(t){function e(t,e,n,r){var a=e[ue](),o=this[J],s=a[T](o),l=e.get("selectedOffset");r.dispatchAction({type:"pieToggleSelect",from:t,name:s,seriesId:e.id}),a.each(function(t){i(a[x](t),a.getItemLayout(t),e.isSelected(a[T](t)),l,n)})}function i(t,e,i,n,r){var a=(e.startAngle+e.endAngle)/2,o=Math.cos(a),s=Math.sin(a),l=i?n:0,u=[o*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr(E,u)}function n(t,e){function i(){o[ve]=o.hoverIgnore,s[ve]=s.hoverIgnore}function n(){o[ve]=o.normalIgnore,s[ve]=s.normalIgnore}a.Group.call(this);var r=new a.Sector({z2:2}),o=new a.Polyline,s=new a.Text;this.add(r),this.add(o),this.add(s),this.updateData(t,e,!0),this.on("emphasis",i).on(b,n).on("mouseover",i).on(ee,n)}function r(t,e,i,n,r){var a=n[xe](V),l=r===m||"inner"===r;return{fill:a.getTextColor()||(l?"#fff":t[S](e,"color")),opacity:t[S](e,O),textFont:a[G](),text:s[o](t.hostModel.getFormattedLabel(e,i),t[T](e))}}var a=t(f),s=t(Ce),l=n[Se];l.updateData=function(t,e,n){function r(){l.stopAnimation(!0),l.animateTo({shape:{r:h.r+10}},300,"elasticOut")}function o(){l.stopAnimation(!0),l.animateTo({shape:{r:h.r}},300,"elasticOut")}var l=this.childAt(0),u=t.hostModel,c=t[p](e),h=t.getItemLayout(e),f=s[oe]({},h);f.label=null,n?(l.setShape(f),l.shape.endAngle=h.startAngle,a.updateProps(l,{shape:{endAngle:h.endAngle}},u,e)):a.updateProps(l,{shape:f},u,e);var d=c[xe]("itemStyle"),v=t[S](e,"color");l.useStyle(s[ae]({lineJoin:"bevel",fill:v},d[xe](b).getItemStyle())),l.hoverStyle=d[xe]("emphasis").getItemStyle(),i(this,t.getItemLayout(e),c.get("selected"),u.get("selectedOffset"),u.get(be)),l.off("mouseover").off(ee).off("emphasis").off(b),c.get("hoverAnimation")&&u.ifEnableAnimation()&&l.on("mouseover",r).on(ee,o).on("emphasis",r).on(b,o),this._updateLabel(t,e),a.setHoverStyle(this)},l._updateLabel=function(t,e){var i=this.childAt(1),n=this.childAt(2),o=t.hostModel,s=t[p](e),l=t.getItemLayout(e),u=l.label,c=t[S](e,"color");a.updateProps(i,{shape:{points:u.linePoints||[[u.x,u.y],[u.x,u.y],[u.x,u.y]]}},o,e),a.updateProps(n,{style:{x:u.x,y:u.y}},o,e),n.attr({style:{textVerticalAlign:u.verticalAlign,textAlign:u[F],textFont:u.font},rotation:u[v],origin:[u.x,u.y],z2:10});var h=s[xe]("label.normal"),f=s[xe]("label.emphasis"),d=s[xe]("labelLine.normal"),m=s[xe]("labelLine.emphasis"),g=h.get(E)||f.get(E);n[Q](r(t,e,b,h,g)),n[ve]=n.normalIgnore=!h.get("show"),n.hoverIgnore=!f.get("show"),i[ve]=i.normalIgnore=!d.get("show"),i.hoverIgnore=!m.get("show"),i[Q]({stroke:c,opacity:t[S](e,O)}),i[Q](d[xe]("lineStyle").getLineStyle()),n.hoverStyle=r(t,e,"emphasis",f,g),i.hoverStyle=m[xe]("lineStyle").getLineStyle();var y=d.get("smooth");y&&y===!0&&(y=.4),i.setShape({smooth:y})},s[q](n,a.Group);var u=t("../../view/Chart")[oe]({type:"pie",init:function(){var t=new a.Group;this._sectorGroup=t},render:function(t,i,r,a){if(!a||a.from!==this.uid){var o=t[ue](),l=this._data,u=this.group,c=i.get(be),h=!l,f=s.curry(e,this.uid,t,c,r),d=t.get("selectedMode");if(o.diff(l).add(function(t){var e=new n(o,t);h&&e.eachChild(function(t){t.stopAnimation(!0)}),d&&e.on("click",f),o.setItemGraphicEl(t,e),u.add(e)})[he](function(t,e){var i=l[x](e);i.updateData(o,t),i.off("click"),d&&i.on("click",f),u.add(i),o.setItemGraphicEl(t,i)})[se](function(t){var e=l[x](t);u[se](e)}).execute(),c&&h&&o.count()>0){var p=o.getItemLayout(0),v=Math.max(r[_e](),r[ye]())/2,m=s.bind(u.removeClipPath,u);u.setClipPath(this._createClipPath(p.cx,p.cy,v,p.startAngle,p.clockwise,m,t))}this._data=o}},_createClipPath:function(t,e,i,n,r,o,s){var l=new a.Sector({shape:{cx:t,cy:e,r0:0,r:i,startAngle:n,endAngle:n,clockwise:r}});return a.initProps(l,{shape:{endAngle:n+(r?1:-1)*Math.PI*2}},s,o),l}});return u}),e("echarts/chart/pie/PieSeries",[Le,"../../data/List",Ce,"../../util/model","../../data/helper/completeDimensions","../../component/helper/selectableMixin",a],function(t){var e=t("../../data/List"),i=t(Ce),n=t("../../util/model"),r=t("../../data/helper/completeDimensions"),o=t("../../component/helper/selectableMixin"),s=t(a).extendSeriesModel({type:"series.pie",init:function(t){s.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._dataBeforeProcessed},this.updateSelectedMap(t.data),this._defaultLabelLine(t)},mergeOption:function(t){s.superCall(this,"mergeOption",t),this.updateSelectedMap(this.option.data)},getInitialData:function(t){var i=r(["value"],t.data),n=new e(i,this);return n.initData(t.data),n},getDataParams:function(t){var e=this._data,i=s.superCall(this,"getDataParams",t),n=e.getSum("value");return i.percent=n?+(e.get("value",t)/n*100).toFixed(2):0,i.$vars.push("percent"),i},_defaultLabelLine:function(t){n.defaultEmphasis(t.labelLine,["show"]);var e=t.labelLine[b],i=t.labelLine.emphasis;e.show=e.show&&t.label[b].show,i.show=i.show&&t.label.emphasis.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,avoidLabelOverlap:!0,label:{normal:{rotate:!1,show:!0,position:"outer"},emphasis:{}},labelLine:{normal:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}}},itemStyle:{normal:{borderWidth:1},emphasis:{}},animationEasing:"cubicOut",data:[]}});return i.mixin(s,o),s}),e("echarts/action/createDataSelectAction",[Le,"../echarts",Ce],function(t){var e=t("../echarts"),i=t(Ce);return function(t,n){i.each(n,function(i){i[he]="updateView",e.registerAction(i,function(e,n){var r={};return n.eachComponent({mainType:"series",subType:t,query:e},function(t){t[i.method]&&t[i.method](e.name);var n=t[ue]();n.each(function(e){var i=n[T](e);r[i]=t.isSelected(i)||!1})}),{name:e.name,selected:r}})})}}),e("echarts/processor/dataFilter",[],function(){return function(t,e){var i=e.findComponents({mainType:"legend"});i&&i[re]&&e.eachSeriesByType(t,function(t){var e=t[ue]();e.filterSelf(function(t){for(var n=e[T](t),r=0;r<i[re];r++)if(!i[r].isSelected(n))return!1;return!0},this)},this)}}),e("echarts/chart/pie/pieLayout",[Le,"../../util/number","./labelLayout",Ce],function(t){var e=t("../../util/number"),i=e[d],n=t("./labelLayout"),r=t(Ce),a=2*Math.PI,o=Math.PI/180;return function(t,s,l){s.eachSeriesByType(t,function(t){var s=t.get(R),u=t.get("radius");r[X](u)||(u=[0,u]),r[X](s)||(s=[s,s]);var c=l[_e](),h=l[ye](),f=Math.min(c,h),d=i(s[0],c),p=i(s[1],h),v=i(u[0],f/2),m=i(u[1],f/2),g=t[ue](),y=-t.get("startAngle")*o,_=t.get("minAngle")*o,x=g.getSum("value"),b=Math.PI/(x||g.count())*2,w=t.get("clockwise"),M=t.get("roseType"),S=g.getDataExtent("value");S[0]=0;var T=a,C=0,P=y,L=w?1:-1;if(g.each("value",function(t,i){var n;n="area"!==M?0===x?b:t*b:a/(g.count()||1),_>n?(n=_,T-=_):C+=t;var r=P+L*n;g.setItemLayout(i,{angle:n,startAngle:P,endAngle:r,clockwise:w,cx:d,cy:p,r0:v,r:M?e.linearMap(t,S,[v,m]):m}),P=r},!0),a>T)if(.001>=T){var A=a/g.count();g.each(function(t){var e=g.getItemLayout(t);e.startAngle=y+L*t*A,e.endAngle=y+L*(t+1)*A})}else b=T/C,P=y,g.each("value",function(t,e){var i=g.getItemLayout(e),n=i.angle===_?_:t*b;i.startAngle=P,i.endAngle=P+L*n,P+=n});n(t,m,c,h)})}}),e("echarts/visual/dataColor",[Le],function(){return function(t,e){var i={};e.eachRawSeriesByType(t,function(t){var n=t.getRawData(),r={};if(!e.isSeriesFiltered(t)){var a=t[ue]();a.each(function(t){var e=a.getRawIndex(t);r[e]=t}),n.each(function(e){var o=n[p](e),s=r[e],l=null!=s&&a[S](s,"color",!0);if(l)n.setItemVisual(e,"color",l);else{var u=o.get("itemStyle.normal.color")||t.getColorFromPalette(n[T](e),i);n.setItemVisual(e,"color",u),null!=s&&a.setItemVisual(s,"color",u)}})}})}}),e("echarts/component/axis",[Le,"../coord/cartesian/AxisModel","./axis/AxisView"],function(t){t("../coord/cartesian/AxisModel"),t("./axis/AxisView")}),e("echarts/component/legend/LegendModel",[Le,Ce,"../../model/Model",a],function(t){var e=t(Ce),i=t("../../model/Model"),n=t(a).extendComponentModel({type:"legend",dependencies:[ne],layoutMode:{type:"box",ignoreSize:!0},init:function(t,e,i){this.mergeDefaultAndTheme(t,i),t.selected=t.selected||{}},mergeOption:function(t){n.superCall(this,"mergeOption",t)},optionUpdated:function(){this._updateData(this[w]);var t=this._data;if(t[0]&&"single"===this.get("selectedMode")){for(var e=!1,i=0;i<t[re];i++){var n=t[i].get("name");if(this.isSelected(n)){this.select(n),e=!0;break}}!e&&this.select(t[0].get("name"))}},_updateData:function(t){var n=e.map(this.get("data")||[],function(t){return(typeof t===Me||typeof t===Z)&&(t={name:t}),new i(t,this,this[w])},this);this._data=n;var r=e.map(t.getSeries(),function(t){return t.name});t[ce](function(t){if(t.legendDataProvider){var e=t.legendDataProvider();r=r.concat(e.mapArray(e[T]))}}),this._availableNames=r},getData:function(){return this._data},select:function(t){var i=this.option.selected,n=this.get("selectedMode");if("single"===n){var r=this._data;e.each(r,function(t){i[t.get("name")]=!1})}i[t]=!0},unSelect:function(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1)},toggleSelected:function(t){var e=this.option.selected;t in e||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},isSelected:function(t){var i=this.option.selected;return!(t in i&&!i[t])&&e[W](this._availableNames,t)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:"top",align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}});return n}),e("echarts/component/legend/legendAction",[Le,a,Ce],function(t){function e(t,e,i){var r,a={},o="toggleSelected"===t;return i.eachComponent("legend",function(i){o&&null!=r?i[r?"select":"unSelect"](e.name):(i[t](e.name),r=i.isSelected(e.name));var s=i[ue]();n.each(s,function(t){var e=t.get("name");if("\n"!==e&&""!==e){var n=i.isSelected(e);a[e]=e in a?a[e]&&n:n}})}),{name:e.name,selected:a}}var i=t(a),n=t(Ce);i.registerAction("legendToggleSelect","legendselectchanged",n.curry(e,"toggleSelected")),i.registerAction("legendSelect","legendselected",n.curry(e,"select")),i.registerAction("legendUnSelect","legendunselected",n.curry(e,"unSelect"))}),e("echarts/component/legend/LegendView",[Le,Ce,"../../util/symbol",f,"../helper/listComponent",a],function(t){function e(t,e){e.dispatchAction({type:"legendToggleSelect",name:t})}function i(t,e,i){var n=i.getZr()[me].getDisplayList()[0];n&&n.useHoverLayer||t.get("legendHoverLink")&&i.dispatchAction({type:"highlight",seriesName:t.name,name:e})}function n(t,e,i){var n=i.getZr()[me].getDisplayList()[0];n&&n.useHoverLayer||t.get("legendHoverLink")&&i.dispatchAction({type:"downplay",seriesName:t.name,name:e})}var r=t(Ce),o=t("../../util/symbol"),s=t(f),l=t("../helper/listComponent"),u=r.curry;return t(a).extendComponentView({type:"legend",init:function(){this._symbolTypeStore={}},render:function(t,a,o){var c=this.group;if(c[H](),t.get("show")){var h=t.get("selectedMode"),f=t.get("align");"auto"===f&&(f="right"===t.get("left")&&"vertical"===t.get("orient")?"right":"left");var d={};r.each(t[ue](),function(r){var l=r.get("name");if(""===l||"\n"===l)return void c.add(new s.Group({newline:!0}));var p=a.getSeriesByName(l)[0];if(!d[l])if(p){var v=p[ue](),m=v.getVisual("color");typeof m===j&&(m=m(p.getDataParams(0)));var g=v.getVisual("legendSymbol")||"roundRect",y=v.getVisual("symbol"),_=this._createItem(l,r,t,g,y,f,m,h);_.on("click",u(e,l,o)).on("mouseover",u(i,p,"",o)).on(ee,u(n,p,"",o)),d[l]=!0}else a.eachRawSeries(function(a){if(!d[l]&&a.legendDataProvider){var s=a.legendDataProvider(),c=s.indexOfName(l);if(0>c)return;var p=s[S](c,"color"),v="roundRect",m=this._createItem(l,r,t,v,null,f,p,h);m.on("click",u(e,l,o)).on("mouseover",u(i,a,l,o)).on(ee,u(n,a,l,o)),d[l]=!0}},this)},this),l.layout(c,t,o),l.addBackground(c,t)}},_createItem:function(t,e,i,n,a,l,u,c){var h=i.get("itemWidth"),f=i.get("itemHeight"),d=i.get("inactiveColor"),p=i.isSelected(t),v=new s.Group,m=e[xe](V),g=e.get("icon"),y=e[xe]("tooltip");if(n=g||n,v.add(o.createSymbol(n,0,0,h,f,p?u:d)),!g&&a&&(a!==n||"none"==a)){var _=.8*f;"none"===a&&(a="circle"),v.add(o.createSymbol(a,(h-_)/2,(f-_)/2,_,_,p?u:d))}var x="left"===l?h+5:-5,b=l,w=i.get("formatter"),M=t;typeof w===Me&&w?M=w[Y]("{name}",t):typeof w===j&&(M=w(t));var S=new s.Text({style:{text:M,x:x,y:f/2,fill:p?m.getTextColor():d,textFont:m[G](),textAlign:b,textVerticalAlign:"middle"}});v.add(S);var T=new s.Rect({shape:v[N](),invisible:!0,tooltip:y.get("show")?r[oe]({content:t,formatter:function(){return t},formatterParams:{componentType:"legend",legendIndex:i.componentIndex,name:t,$vars:["name"]}},y.option):null});return v.add(T),v.eachChild(function(t){t.silent=!0}),T.silent=!c,this.group.add(v),s.setHoverStyle(v),v}})}),e("echarts/component/legend/legendFilter",[],function(){return function(t){var e=t.findComponents({mainType:"legend"});e&&e[re]&&t.filterSeries(function(t){for(var i=0;i<e[re];i++)if(!e[i].isSelected(t.name))return!1;return!0})}}),e("echarts/component/tooltip/TooltipModel",[Le,a],function(t){t(a).extendComponentModel({type:"tooltip",defaultOption:{zlevel:0,z:8,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove",alwaysShowContent:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:!0,animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",lineStyle:{color:"#555",width:1,type:"solid"},crossStyle:{color:"#555",width:1,type:"dashed",textStyle:{}},shadowStyle:{color:"rgba(150,150,150,0.3)"}},textStyle:{color:"#fff",fontSize:14}}})}),e("echarts/component/marker/MarkPointModel",[Le,"./MarkerModel"],function(t){return t("./MarkerModel")[oe]({type:"markPoint",defaultOption:{zlevel:0,z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{normal:{show:!0,position:"inside"},emphasis:{show:!0}},itemStyle:{normal:{borderWidth:2}}}})}),e("echarts/component/marker/MarkPointView",[Le,"../../chart/helper/SymbolDraw",Ce,"../../util/number","../../data/List","./markerHelper","./MarkerView"],function(t){function e(t,e,i){var n=e[I];t.each(function(r){var o,s=t[p](r),l=a[d](s.get("x"),i[_e]()),c=a[d](s.get("y"),i[ye]());if(isNaN(l)||isNaN(c)){if(e.getMarkerPosition)o=e.getMarkerPosition(t.getValues(t[u],r));else if(n){var f=t.get(n[u][0],r),v=t.get(n[u][1],r);o=n[h]([f,v])}}else o=[l,c];isNaN(l)||(o[0]=l),isNaN(c)||(o[1]=c),t.setItemLayout(r,o)})}function i(t,e,i){var n;n=t?r.map(t&&t[u],function(t){var i=e[ue]().getDimensionInfo(e.coordDimToDataDim(t)[0])||{};return i.name=t,i}):[{name:"value",type:"float"}];var a=new o(n,i),l=r.map(i.get("data"),r.curry(s.dataTransform,e));return t&&(l=r[U](l,r.curry(s.dataFilter,t))),a.initData(l,null,t?s.dimValueGetter:function(t){return t.value}),a}var n=t("../../chart/helper/SymbolDraw"),r=t(Ce),a=t("../../util/number"),o=t("../../data/List"),s=t("./markerHelper");t("./MarkerView")[oe]({type:"markPoint",updateLayout:function(t,i,n){i[ce](function(t){var i=t.markPointModel;i&&(e(i[ue](),t,n),this.markerGroupMap[t.name].updateLayout(i))},this)},renderSeries:function(t,r,a,o){var s=t[I],l=t.name,u=t[ue](),c=this.markerGroupMap,h=c[l];h||(h=c[l]=new n);var f=i(s,t,r);r.setData(f),e(r[ue](),t,o),f.each(function(t){var e=f[p](t),i=e[M]("symbolSize");typeof i===j&&(i=i(r.getRawValue(t),r.getDataParams(t))),f.setItemVisual(t,{symbolSize:i,color:e.get("itemStyle.normal.color")||u.getVisual("color"),symbol:e[M]("symbol")})}),h.updateData(f),this.group.add(h.group),f.eachItemGraphicEl(function(t){t[K](function(t){t.dataModel=r})}),h.__keep=!0,h.group.silent=r.get("silent")||t.get("silent")}})}),e("zrender/vml/graphic",[Le,"../core/env","../core/vector","../core/BoundingRect","../core/PathProxy","../tool/color","../contain/text","../graphic/mixin/RectText","../graphic/Displayable","../graphic/Image","../graphic/Text","../graphic/Path","../graphic/Gradient","./core"],function(t){if(!t("../core/env")[ge]){var e=t("../core/vector"),i=t("../core/BoundingRect"),n=t("../core/PathProxy").CMD,a=t("../tool/color"),o=t("../contain/text"),s=t("../graphic/mixin/RectText"),l=t("../graphic/Displayable"),u=t("../graphic/Image"),c=t("../graphic/Text"),h=t("../graphic/Path"),f=t("../graphic/Gradient"),d=t("./core"),p=Math.round,v=Math.sqrt,m=Math.abs,x=Math.cos,w=Math.sin,M=Math.max,S=e[_],T=",",C="progid:DXImageTransform.Microsoft",P=21600,A=P/2,k=1e5,z=1e3,D=function(t){t.style.cssText="position:absolute;left:0;top:0;width:1px;height:1px;",t.coordsize=P+","+P,t.coordorigin="0,0"},I=function(t){return String(t)[Y](/&/g,"&amp;")[Y](/"/g,"&quot;")},E=function(t,e,i){return"rgb("+[t,e,i].join(",")+")"},G=function(t,e){e&&t&&e.parentNode!==t&&t.appendChild(e)},V=function(t,e){e&&t&&e.parentNode===t&&t.removeChild(e)},H=function(t,e,i){return(parseFloat(t)||0)*k+(parseFloat(e)||0)*z+i},q=function(t,e){return typeof t===Me?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t},W=function(t,e,i){var n=a.parse(e);i=+i,isNaN(i)&&(i=1),n&&(t.color=E(n[0],n[1],n[2]),t[O]=i*n[3])},Z=function(t){var e=a.parse(t);return[E(e[0],e[1],e[2]),e[3]]},j=function(t,e,i){var n=e.fill;if(null!=n)if(n instanceof f){var a,o=0,s=[0,0],l=0,u=1,c=i[N](),h=c.width,d=c[de];if("linear"===n.type){a="gradient";var p=i[r],v=[n.x*h,n.y*d],m=[n.x2*h,n.y2*d];p&&(S(v,v,p),S(m,m,p));var g=m[0]-v[0],y=m[1]-v[1];o=180*Math.atan2(g,y)/Math.PI,0>o&&(o+=360),1e-6>o&&(o=0)}else{a="gradientradial";var v=[n.x*h,n.y*d],p=i[r],_=i.scale,x=h,b=d;s=[(v[0]-c.x)/x,(v[1]-c.y)/b],p&&S(v,v,p),x/=_[0]*P,b/=_[1]*P;var w=M(x,b);l=0/w,u=2*n.r/w-l}var T=n.colorStops.slice();T.sort(function(t,e){return t.offset-e.offset});for(var C=T[re],L=[],A=[],k=0;C>k;k++){var z=T[k],D=Z(z.color);A.push(z.offset*u+l+" "+D[0]),(0===k||k===C-1)&&L.push(D)}if(C>=2){var I=L[0][0],E=L[1][0],R=L[0][1]*e[O],B=L[1][1]*e[O];t.type=a,t.method="none",t.focus="100%",t.angle=o,t.color=I,t.color2=E,t.colors=A.join(","),t[O]=B,t.opacity2=R}"radial"===a&&(t.focusposition=s.join(","))}else W(t,n,e[O])},X=function(t,e){null!=e.lineDash&&(t.dashstyle=e.lineDash.join(" ")),null==e[g]||e[g]instanceof f||W(t,e[g],e[O])},Q=function(t,e,i,n){var r="fill"==e,a=t.getElementsByTagName(e)[0];null!=i[e]&&"none"!==i[e]&&(r||!r&&i[y])?(t[r?"filled":"stroked"]="true",i[e]instanceof f&&V(t,a),a||(a=d.createNode(e)),r?j(a,i,n):X(a,i),G(t,a)):(t[r?"filled":"stroked"]="false",V(t,a))},K=[[],[],[]],J=function(t,e){var i,r,a,o,s,l,u=n.M,c=n.C,h=n.L,f=n.A,d=n.Q,m=[];for(o=0;o<t[re];){switch(a=t[o++],r="",i=0,a){case u:r=" m ",i=1,s=t[o++],l=t[o++],K[0][0]=s,K[0][1]=l;break;case h:r=" l ",i=1,s=t[o++],l=t[o++],K[0][0]=s,K[0][1]=l;break;case d:case c:r=" c ",i=3;var g,y,_=t[o++],b=t[o++],M=t[o++],C=t[o++];a===d?(g=M,y=C,M=(M+2*_)/3,C=(C+2*b)/3,_=(s+2*_)/3,b=(l+2*b)/3):(g=t[o++],y=t[o++]),K[0][0]=_,K[0][1]=b,K[1][0]=M,K[1][1]=C,K[2][0]=g,K[2][1]=y,s=g,l=y;break;case f:var L=0,k=0,z=1,D=1,I=0;e&&(L=e[4],k=e[5],z=v(e[0]*e[0]+e[1]*e[1]),D=v(e[2]*e[2]+e[3]*e[3]),I=Math.atan2(-e[1]/D,e[0]/z));var O=t[o++],E=t[o++],R=t[o++],B=t[o++],N=t[o++]+I,G=t[o++]+N+I;o++;var F=t[o++],V=O+x(N)*R,H=E+w(N)*B,_=O+x(G)*R,b=E+w(G)*B,q=F?" wa ":" at ";Math.abs(V-_)<1e-10&&(Math.abs(G-N)>.01?F&&(V+=270/P):Math.abs(H-E)<1e-10?F&&O>V||!F&&V>O?b-=270/P:b+=270/P:F&&E>H||!F&&H>E?_+=270/P:_-=270/P),m.push(q,p(((O-R)*z+L)*P-A),T,p(((E-B)*D+k)*P-A),T,p(((O+R)*z+L)*P-A),T,p(((E+B)*D+k)*P-A),T,p((V*z+L)*P-A),T,p((H*D+k)*P-A),T,p((_*z+L)*P-A),T,p((b*D+k)*P-A)),s=_,l=b;break;case n.R:var W=K[0],U=K[1];W[0]=t[o++],W[1]=t[o++],U[0]=W[0]+t[o++],U[1]=W[1]+t[o++],e&&(S(W,W,e),S(U,U,e)),W[0]=p(W[0]*P-A),U[0]=p(U[0]*P-A),W[1]=p(W[1]*P-A),U[1]=p(U[1]*P-A),m.push(" m ",W[0],T,W[1]," l ",U[0],T,W[1]," l ",U[0],T,U[1]," l ",W[0],T,U[1]);break;case n.Z:m.push(" x ")}if(i>0){m.push(r);for(var Z=0;i>Z;Z++){var j=K[Z];e&&S(j,j,e),m.push(p(j[0]*P-A),T,p(j[1]*P-A),i-1>Z?T:"")}}}return m.join("")};h[Se].brushVML=function(t){var e=this.style,i=this._vmlEl;i||(i=d.createNode("shape"),D(i),this._vmlEl=i),Q(i,"fill",e,this),Q(i,g,e,this);var n=this[r],a=null!=n,o=i.getElementsByTagName(g)[0];if(o){var s=e[y];if(a&&!e.strokeNoScale){var l=n[0]*n[3]-n[1]*n[2];s*=v(m(l))}o.weight=s+"px"}var u=this.path;this.__dirtyPath&&(u.beginPath(),this.buildPath(u,this.shape),u.toStatic(),this.__dirtyPath=!1),i.path=J(u.data,this[r]),i.style.zIndex=H(this[$],this.z,this.z2),G(t,i),e.text?this.drawRectText(t,this[N]()):this.removeRectText(t)},h[Se].onRemove=function(t){V(t,this._vmlEl),this.removeRectText(t)},h[Se].onAdd=function(t){G(t,this._vmlEl),this.appendRectText(t)};var te=function(t){return"object"==typeof t&&t.tagName&&"IMG"===t.tagName.toUpperCase()};u[Se].brushVML=function(t){var e,i,n=this.style,a=n.image;if(te(a)){var o=a.src;if(o===this._imageSrc)e=this._imageWidth,i=this._imageHeight;else{var s=a.runtimeStyle,l=s.width,u=s[de];s.width="auto",s[de]="auto",e=a.width,i=a[de],s.width=l,s[de]=u,this._imageSrc=o,this._imageWidth=e,this._imageHeight=i}a=o}else a===this._imageSrc&&(e=this._imageWidth,i=this._imageHeight);if(a){var c=n.x||0,h=n.y||0,f=n.width,m=n[de],g=n.sWidth,y=n.sHeight,_=n.sx||0,x=n.sy||0,b=g&&y,w=this._vmlEl;w||(w=d.doc[L]("div"),D(w),this._vmlEl=w);var P,A=w.style,k=!1,z=1,I=1;if(this[r]&&(P=this[r],z=v(P[0]*P[0]+P[1]*P[1]),I=v(P[2]*P[2]+P[3]*P[3]),k=P[1]||P[2]),k){var E=[c,h],R=[c+f,h],B=[c,h+m],F=[c+f,h+m];S(E,E,P),S(R,R,P),S(B,B,P),S(F,F,P);var V=M(E[0],R[0],B[0],F[0]),q=M(E[1],R[1],B[1],F[1]),W=[];W.push("M11=",P[0]/z,T,"M12=",P[2]/I,T,"M21=",P[1]/z,T,"M22=",P[3]/I,T,"Dx=",p(c*z+P[4]),T,"Dy=",p(h*I+P[5])),A.padding="0 "+p(V)+"px "+p(q)+"px 0",A[U]=C+".Matrix("+W.join("")+", SizingMethod=clip)"}else P&&(c=c*z+P[4],h=h*I+P[5]),A[U]="",A.left=p(c)+"px",A.top=p(h)+"px";var Z=this._imageEl,j=this._cropEl;Z||(Z=d.doc[L]("div"),this._imageEl=Z);var X=Z.style;if(b){if(e&&i)X.width=p(z*e*f/g)+"px",X[de]=p(I*i*m/y)+"px";else{var Y=new Image,Q=this;Y.onload=function(){Y.onload=null,e=Y.width,i=Y[de],X.width=p(z*e*f/g)+"px",X[de]=p(I*i*m/y)+"px",Q._imageWidth=e,Q._imageHeight=i,Q._imageSrc=a},Y.src=a}j||(j=d.doc[L]("div"),j.style.overflow="hidden",this._cropEl=j);var K=j.style;K.width=p((f+_*f/g)*z),K[de]=p((m+x*m/y)*I),K[U]=C+".Matrix(Dx="+-_*f/g*z+",Dy="+-x*m/y*I+")",j.parentNode||w.appendChild(j),Z.parentNode!=j&&j.appendChild(Z)}else X.width=p(z*f)+"px",X[de]=p(I*m)+"px",w.appendChild(Z),j&&j.parentNode&&(w.removeChild(j),this._cropEl=null);var J="",ee=n[O];1>ee&&(J+=".Alpha(opacity="+p(100*ee)+") "),J+=C+".AlphaImageLoader(src="+a+", SizingMethod=scale)",X[U]=J,w.style.zIndex=H(this[$],this.z,this.z2),G(t,w),n.text&&this.drawRectText(t,this[N]())}},u[Se].onRemove=function(t){V(t,this._vmlEl),this._vmlEl=null,this._cropEl=null,this._imageEl=null,this.removeRectText(t)},u[Se].onAdd=function(t){G(t,this._vmlEl),this.appendRectText(t)};var ee,ie=b,ne={},ae=0,oe=100,se=document[L]("div"),le=function(t){var e=ne[t];if(!e){ae>oe&&(ae=0,ne={});var i,n=se.style;try{n.font=t,i=n.fontFamily.split(",")[0]}catch(r){}e={style:n.fontStyle||ie,variant:n.fontVariant||ie,weight:n.fontWeight||ie,size:0|parseFloat(n.fontSize||12),family:i||"Microsoft YaHei"},ne[t]=e,ae++}return e};o.measureText=function(t,e){var i=d.doc;ee||(ee=i[L]("div"),ee.style.cssText="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;",d.doc.body.appendChild(ee));try{ee.style.font=e}catch(n){}return ee.innerHTML="",ee.appendChild(i.createTextNode(t)),{width:ee.offsetWidth}};for(var ue=new i,ce=function(t,e,i,n){var a=this.style,s=a.text;if(s){var l,u,c=a[F],h=le(a.textFont),f=h.style+" "+h.variant+" "+h.weight+" "+h.size+'px "'+h.family+'"',v=a.textBaseline,m=a.textVerticalAlign;i=i||o[N](s,f,c,v);var y=this[r];if(y&&!n&&(ue.copy(e),ue[_](y),e=ue),n)l=e.x,u=e.y;else{var x=a.textPosition,b=a.textDistance;if(x instanceof Array)l=e.x+q(x[0],e.width),u=e.y+q(x[1],e[de]),c=c||"left",v=v||"top";else{var w=o.adjustTextPositionOnRect(x,e,i,b);l=w.x,u=w.y,c=c||w[F],v=v||w.textBaseline}}if(m){switch(m){case B:u-=i[de]/2;break;case pe:u-=i[de]}v="top"}var M=h.size;switch(v){case"hanging":case"top":u+=M/1.75;break;case B:break;default:u-=M/2.25}switch(c){case"left":break;case R:l-=i.width/2;break;case"right":l-=i.width}var C,P,L,A=d.createNode,k=this._textVmlEl;k?(L=k.firstChild,C=L.nextSibling,P=C.nextSibling):(k=A("line"),C=A("path"),P=A("textpath"),L=A("skew"),P.style["v-text-align"]="left",D(k),C.textpathok=!0,P.on=!0,k.from="0 0",k.to="1000 0.05",G(k,L),G(k,C),G(k,P),this._textVmlEl=k);var z=[l,u],E=k.style;y&&n?(S(z,z,y),L.on=!0,L.matrix=y[0].toFixed(3)+T+y[2].toFixed(3)+T+y[1].toFixed(3)+T+y[3].toFixed(3)+",0,0",L.offset=(p(z[0])||0)+","+(p(z[1])||0),L.origin="0 0",E.left="0px",E.top="0px"):(L.on=!1,E.left=p(l)+"px",E.top=p(u)+"px"),P[Me]=I(s);try{P.style.font=f}catch(V){}Q(k,"fill",{fill:n?a.fill:a.textFill,opacity:a[O]},this),Q(k,g,{stroke:n?a[g]:a.textStroke,opacity:a[O],lineDash:a.lineDash},this),k.style.zIndex=H(this[$],this.z,this.z2),G(t,k)}},he=function(t){V(t,this._textVmlEl),this._textVmlEl=null},fe=function(t){G(t,this._textVmlEl)},ve=[s,l,u,h,c],me=0;me<ve[re];me++){var ye=ve[me][Se];ye.drawRectText=ce,ye.removeRectText=he,ye.appendRectText=fe}c[Se].brushVML=function(t){var e=this.style;e.text?this.drawRectText(t,{x:e.x||0,y:e.y||0,width:0,height:0},this[N](),!0):this.removeRectText(t)},c[Se].onRemove=function(t){this.removeRectText(t)},c[Se].onAdd=function(t){this.appendRectText(t)}}}),e("zrender/vml/Painter",[Le,"../core/log","./core"],function(t){function e(t){return parseInt(t,10)}function i(t,e){o.initVML(),this.root=t,this[me]=e;var i=document[L]("div"),n=document[L]("div");i.style.cssText="display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",n.style.cssText="position:absolute;left:0;top:0;",t.appendChild(i),this._vmlRoot=n,this._vmlViewport=i,this[we]();var r=e.delFromMap,a=e.addToMap;e.delFromMap=function(t){var i=e.get(t);r.call(e,t),i&&i.onRemove&&i.onRemove(n)},e.addToMap=function(t){t.onAdd&&t.onAdd(n),a.call(e,t)},this._firstPaint=!0}function r(t){return function(){a('In IE8.0 VML mode painter not support method "'+t+'"')}}var a=t("../core/log"),o=t("./core");i[Se]={constructor:i,getViewportRoot:function(){return this._vmlViewport},refresh:function(){var t=this[me].getDisplayList(!0,!0);this._paintList(t)},_paintList:function(t){for(var e=this._vmlRoot,i=0;i<t[re];i++){var r=t[i];r.invisible||r[ve]?(r.__alreadyNotVisible||r.onRemove(e),r.__alreadyNotVisible=!0):(r.__alreadyNotVisible&&r.onAdd(e),r.__alreadyNotVisible=!1,r[n]&&(r.beforeBrush&&r.beforeBrush(),(r.brushVML||r.brush).call(r,e),r.afterBrush&&r.afterBrush())),r[n]=!1}this._firstPaint&&(this._vmlViewport.appendChild(e),this._firstPaint=!1)},resize:function(){var t=this._getWidth(),e=this._getHeight();if(this._width!=t&&this._height!=e){this._width=t,this._height=e;var i=this._vmlViewport.style;i.width=t+"px",i[de]=e+"px"}},dispose:function(){this.root.innerHTML="",this._vmlRoot=this._vmlViewport=this[me]=null},getWidth:function(){return this._width},getHeight:function(){return this._height},clear:function(){this.root.removeChild(this.vmlViewport)},_getWidth:function(){var t=this.root,i=t.currentStyle;return(t.clientWidth||e(i.width))-e(i.paddingLeft)-e(i.paddingRight)|0},_getHeight:function(){var t=this.root,i=t.currentStyle;return(t.clientHeight||e(i[de]))-e(i.paddingTop)-e(i.paddingBottom)|0}};for(var s=["getLayer","insertLayer","eachLayer","eachBuildinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],l=0;l<s[re];l++){var u=s[l];i[Se][u]=r(u)}return i}),e("echarts/component/tooltip/TooltipView",[Le,"./TooltipContent",f,Ce,"../../util/format","../../util/number",Pe,"../../model/Model",a],function(t){function e(t,e){if(!t||!e)return!1;var i=z.round;return i(t[0])===i(e[0])&&i(t[1])===i(e[1])}function n(t,e,i,n){return{x1:t,y1:e,x2:i,y2:n}}function o(t,e,i,n){return{x:t,y:e,width:i,height:n}}function l(t,e,i,n,r,a){return{cx:t,cy:e,r0:i,r:n,startAngle:r,endAngle:a,clockwise:!0}}function v(t,e,i,n,r){var a=i.clientWidth,o=i.clientHeight,s=20;return t+a+s>n?t-=a+s:t+=s,e+o+s>r?e-=o+s:e+=s,[t,e]}function y(t,e,i){var n=i.clientWidth,r=i.clientHeight,a=5,o=0,s=0,l=e.width,u=e[de];switch(t){case m:o=e.x+l/2-n/2,s=e.y+u/2-r/2;break;case"top":o=e.x+l/2-n/2,s=e.y-r-a;break;case pe:o=e.x+l/2-n/2,s=e.y+u+a;break;case"left":o=e.x-n-a,s=e.y+u/2-r/2;break;case"right":o=e.x+l+a,s=e.y+u/2-r/2}return[o,s]}function b(t,e,n,a,o,s,l){var u=l[_e](),c=l[ye](),h=s&&s[N]().clone();if(s&&h[_](s[r]),typeof t===j&&(t=t([e,n],o,a.el,h)),L[X](t))e=D(t[0],u),n=D(t[1],c);else if(typeof t===Me&&s){var f=y(t,h,a.el);e=f[0],n=f[1]}else{var f=v(e,n,a.el,u,c);e=f[0],n=f[1]}a[i](e,n)}function M(t){var e=t[I],i=t.get("tooltip.trigger",!0);return!(!e||"cartesian2d"!==e.type&&"polar"!==e.type&&"singleAxis"!==e.type||"item"===i)}var S=t("./TooltipContent"),C=t(f),L=t(Ce),A=t("../../util/format"),z=t("../../util/number"),D=z[d],O=t(Pe),R=t("../../model/Model");t(a).extendComponentView({type:"tooltip",_axisPointers:{},init:function(t,e){if(!O.node){var i=new S(e.getDom(),e);this._tooltipContent=i,e.on("showTip",this._manuallyShowTip,this),e.on("hideTip",this._manuallyHideTip,this)}},render:function(t,e,i){if(!O.node){this.group[H](),this._axisPointers={},this._tooltipModel=t,this._ecModel=e,this._api=i,this._lastHover={};var n=this._tooltipContent;n[he](),n.enterable=t.get("enterable"),this._alwaysShowContent=t.get("alwaysShowContent"),this._seriesGroupByAxis=this._prepareAxisTriggerData(t,e);var r=this._crossText;if(r&&this.group.add(r),null!=this._lastX&&null!=this._lastY){var a=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){a._manuallyShowTip({x:a._lastX,y:a._lastY})})}var o=this._api.getZr();o.off("click",this._tryShow),o.off("mousemove",this._mousemove),o.off(ee,this._hide),o.off("globalout",this._hide),"click"===t.get("triggerOn")?o.on("click",this._tryShow,this):(o.on("mousemove",this._mousemove,this),o.on(ee,this._hide,this),o.on("globalout",this._hide,this))
}},_mousemove:function(t){var e=this._tooltipModel.get("showDelay"),i=this;clearTimeout(this._showTimeout),e>0?this._showTimeout=setTimeout(function(){i._tryShow(t)},e):this._tryShow(t)},_manuallyShowTip:function(t){if(t.from!==this.uid){var e=this._ecModel,i=t.seriesIndex,n=t[J],a=e.getSeriesByIndex(i),o=this._api;if(null==t.x||null==t.y){if(a||e[ce](function(t){M(t)&&!a&&(a=t)}),a){var s=a[ue]();null==n&&(n=s.indexOfName(t.name));var l,c,f=s[x](n),d=a[I];if(d&&d[h]){var p=d[h](s.getValues(L.map(d[u],function(t){return a.coordDimToDataDim(t)[0]}),n,!0));l=p&&p[0],c=p&&p[1]}else if(f){var v=f[N]().clone();v[_](f[r]),l=v.x+v.width/2,c=v.y+v[de]/2}null!=l&&null!=c&&this._tryShow({offsetX:l,offsetY:c,target:f,event:{}})}}else{var f=o.getZr().handler.findHover(t.x,t.y);this._tryShow({offsetX:t.x,offsetY:t.y,target:f,event:{}})}}},_manuallyHideTip:function(t){t.from!==this.uid&&this._hide()},_prepareAxisTriggerData:function(t,e){var i={};return e[ce](function(t){if(M(t)){var e,n,r=t[I];"cartesian2d"===r.type?(e=r[P](),n=e.dim+e.index):"singleAxis"===r.type?(e=r[c](),n=e.dim+e.type):(e=r[P](),n=e.dim+r.name),i[n]=i[n]||{coordSys:[],series:[]},i[n].coordSys.push(r),i[n][ne].push(t)}},this),i},_tryShow:function(t){var e=t[te],i=this._tooltipModel,n=i.get("trigger"),r=this._ecModel,a=this._api;if(i)if(this._lastX=t.offsetX,this._lastY=t.offsetY,e&&null!=e[J]){var o=e.dataModel||r.getSeriesByIndex(e.seriesIndex),s=e[J],l=o[ue]()[p](s);"axis"===(l.get("tooltip.trigger")||n)?this._showAxisTooltip(i,r,t):(this._ticket="",this._hideAxisPointer(),this._resetLastHover(),this._showItemTooltipContent(o,s,e.dataType,t)),a.dispatchAction({type:"showTip",from:this.uid,dataIndex:e[J],seriesIndex:e.seriesIndex})}else if(e&&e.tooltip){var u=e.tooltip;if(typeof u===Me){var c=u;u={content:c,formatter:c}}var h=new R(u,i),f=h.get("content"),d=Math.random();this._showTooltipContent(h,f,h.get("formatterParams")||{},d,t.offsetX,t.offsetY,e,a)}else"item"===n?this._hide():this._showAxisTooltip(i,r,t),"cross"===i.get("axisPointer.type")&&a.dispatchAction({type:"showTip",from:this.uid,x:t.offsetX,y:t.offsetY})},_showAxisTooltip:function(t,i,n){var r=t[xe]("axisPointer"),a=r.get("type");if("cross"===a){var o=n[te];if(o&&null!=o[J]){var s=i.getSeriesByIndex(o.seriesIndex),l=o[J];this._showItemTooltipContent(s,l,o.dataType,n)}}this._showAxisPointer();var c=!0;L.each(this._seriesGroupByAxis,function(t){var i=t.coordSys,o=i[0],s=[n.offsetX,n.offsetY];if(!o.containPoint(s))return void this._hideAxisPointer(o.name);c=!1;var l=o[u],f=o.pointToData(s,!0);s=o[h](f);var d=o[P](),p=r.get("axis");"auto"===p&&(p=d.dim);var v=!1,m=this._lastHover;if("cross"===a)e(m.data,f)&&(v=!0),m.data=f;else{var g=L[W](l,p);m.data===f[g]&&(v=!0),m.data=f[g]}"cartesian2d"!==o.type||v?"polar"!==o.type||v?"singleAxis"!==o.type||v||this._showSinglePointer(r,o,p,s):this._showPolarPointer(r,o,p,s):this._showCartesianPointer(r,o,p,s),"cross"!==a&&this._dispatchAndShowSeriesTooltipContent(o,t[ne],s,f,v)},this),this._tooltipModel.get("show")||this._hideAxisPointer(),c&&this._hide()},_showCartesianPointer:function(t,e,i,r){function a(i,r,a){var o="x"===i?n(r[0],a[0],r[0],a[1]):n(a[0],r[1],a[1],r[1]),s=u._getPointerElement(e,t,i,o);C.subPixelOptimizeLine({shape:o,style:s.style}),d?C.updateProps(s,{shape:o},t):s.attr({shape:o})}function l(i,n,r){var a=e[c](i),s=a.getBandWidth(),l=r[1]-r[0],h="x"===i?o(n[0]-s/2,r[0],s,l):o(r[0],n[1]-s/2,l,s),f=u._getPointerElement(e,t,i,h);d?C.updateProps(f,{shape:h},t):f.attr({shape:h})}var u=this,h=t.get("type"),f=e[P](),d="cross"!==h&&f.type===s&&f.getBandWidth()>20;if("cross"===h)a("x",r,e[c]("y").getGlobalExtent()),a("y",r,e[c]("x").getGlobalExtent()),this._updateCrossText(e,r,t);else{var p=e[c]("x"===i?"y":"x"),v=p.getGlobalExtent();"cartesian2d"===e.type&&("line"===h?a:l)(i,r,v)}},_showSinglePointer:function(t,e,i,r){function a(i,r,a){var s=e[c](),l=s.orient,h="horizontal"===l?n(r[0],a[0],r[0],a[1]):n(a[0],r[1],a[1],r[1]),f=o._getPointerElement(e,t,i,h);u?C.updateProps(f,{shape:h},t):f.attr({shape:h})}var o=this,l=t.get("type"),u="cross"!==l&&e[P]().type===s,h=e.getRect(),f=[h.y,h.y+h[de]];a(i,r,f)},_showPolarPointer:function(t,e,i,r){function a(i,r,a){var o,s=e.pointToCoord(r);if("angle"===i){var l=e.coordToPoint([a[0],s[1]]),c=e.coordToPoint([a[1],s[1]]);o=n(l[0],l[1],c[0],c[1])}else o={cx:e.cx,cy:e.cy,r:s[0]};var h=u._getPointerElement(e,t,i,o);p?C.updateProps(h,{shape:o},t):h.attr({shape:o})}function o(i,n,r){var a,o=e[c](i),s=o.getBandWidth(),h=e.pointToCoord(n),f=Math.PI/180;a="angle"===i?l(e.cx,e.cy,r[0],r[1],(-h[1]-s/2)*f,(-h[1]+s/2)*f):l(e.cx,e.cy,h[0]-s/2,h[0]+s/2,0,2*Math.PI);var d=u._getPointerElement(e,t,i,a);p?C.updateProps(d,{shape:a},t):d.attr({shape:a})}var u=this,h=t.get("type"),f=e.getAngleAxis(),d=e.getRadiusAxis(),p="cross"!==h&&e[P]().type===s;if("cross"===h)a("angle",r,d[k]()),a("radius",r,f[k]()),this._updateCrossText(e,r,t);else{var v=e[c]("radius"===i?"angle":"radius"),m=v[k]();("line"===h?a:o)(i,r,m)}},_updateCrossText:function(t,e,i){var n=i[xe]("crossStyle"),r=n[xe](V),a=this._tooltipModel,o=this._crossText;o||(o=this._crossText=new C.Text({style:{textAlign:"left",textVerticalAlign:"bottom"}}),this.group.add(o));var l=t.pointToData(e),h=t[u];l=L.map(l,function(e,i){var n=t[c](h[i]);return e=n.type===s||"time"===n.type?n.scale.getLabel(e):A.addCommas(e.toFixed(n.getPixelPrecision()))}),o[Q]({fill:r.getTextColor()||n.get("color"),textFont:r[G](),text:l.join(", "),x:e[0]+5,y:e[1]-5}),o.z=a.get("z"),o[$]=a.get($)},_getPointerElement:function(t,e,i,n){var r=this._tooltipModel,a=r.get("z"),o=r.get($),s=this._axisPointers,l=t.name;if(s[l]=s[l]||{},s[l][i])return s[l][i];var u=e.get("type"),c=e[xe](u+"Style"),h="shadow"===u,f=c[h?"getAreaStyle":"getLineStyle"](),d="polar"===t.type?h?"Sector":"radius"===i?"Circle":"Line":h?"Rect":"Line";h?f[g]=null:f.fill=null;var p=s[l][i]=new C[d]({style:f,z:a,zlevel:o,silent:!0,shape:n});return this.group.add(p),p},_dispatchAndShowSeriesTooltipContent:function(t,e,i,n,r){var a=this._tooltipModel,o=t[P](),l="x"===o.dim||"radius"===o.dim?0:1,u=L.map(e,function(t){return{seriesIndex:t.seriesIndex,dataIndex:t.getAxisTooltipDataIndex?t.getAxisTooltipDataIndex(t.coordDimToDataDim(o.dim),n,o):t[ue]().indexOfNearest(t.coordDimToDataDim(o.dim)[0],n[l],!1,o.type===s?.5:null)}}),c=this._lastHover,h=this._api;if(c.payloadBatch&&!r&&h.dispatchAction({type:"downplay",batch:c.payloadBatch}),r||(h.dispatchAction({type:"highlight",batch:u}),c.payloadBatch=u),h.dispatchAction({type:"showTip",dataIndex:u[0][J],seriesIndex:u[0].seriesIndex,from:this.uid}),o&&a.get("showContent")&&a.get("show")){var f=L.map(e,function(t,e){return t.getDataParams(u[e][J])});if(r)b(a.get(E),i[0],i[1],this._tooltipContent,f,null,h);else{var d=u[0][J],p="time"===o.type?o.scale.getLabel(n[l]):e[0][ue]()[T](d),v=(p?p+"<br />":"")+L.map(e,function(t,e){return t.formatTooltip(u[e][J],!0)}).join("<br />"),m="axis_"+t.name+"_"+d;this._showTooltipContent(a,v,f,m,i[0],i[1],null,h)}}},_showItemTooltipContent:function(t,e,i,n){var r=this._api,a=t[ue](i),o=a[p](e),s=o.get("tooltip",!0);if(typeof s===Me){var l=s;s={formatter:l}}var u=this._tooltipModel,c=t[xe]("tooltip",u),h=new R(s,c,c[w]),f=t.getDataParams(e,i),d=t.formatTooltip(e,!1,i),v="item_"+t.name+"_"+e;this._showTooltipContent(h,d,f,v,n.offsetX,n.offsetY,n[te],r)},_showTooltipContent:function(t,e,i,n,r,a,o,s){if(this._ticket="",t.get("showContent")&&t.get("show")){var l=this._tooltipContent,u=t.get("formatter"),c=t.get(E),h=e;if(u)if(typeof u===Me)h=A.formatTpl(u,i);else if(typeof u===j){var f=this,d=n,p=function(t,e){t===f._ticket&&(l.setContent(e),b(c,r,a,l,i,o,s))};f._ticket=d,h=u(i,d,p)}l.show(t),l.setContent(h),b(c,r,a,l,i,o,s)}},_showAxisPointer:function(t){if(t){var e=this._axisPointers[t];e&&L.each(e,function(t){t.show()})}else this.group.eachChild(function(t){t.show()}),this.group.show()},_resetLastHover:function(){var t=this._lastHover;t.payloadBatch&&this._api.dispatchAction({type:"downplay",batch:t.payloadBatch}),this._lastHover={}},_hideAxisPointer:function(t){if(t){var e=this._axisPointers[t];e&&L.each(e,function(t){t.hide()})}else this.group.children()[re]&&this.group.hide()},_hide:function(){clearTimeout(this._showTimeout),this._hideAxisPointer(),this._resetLastHover(),this._alwaysShowContent||this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")),this._api.dispatchAction({type:"hideTip",from:this.uid}),this._lastX=this._lastY=null},dispose:function(t,e){if(!O.node){var i=e.getZr();this._tooltipContent.hide(),i.off("click",this._tryShow),i.off("mousemove",this._mousemove),i.off(ee,this._hide),i.off("globalout",this._hide),e.off("showTip",this._manuallyShowTip),e.off("hideTip",this._manuallyHideTip)}}})}),e("echarts/scale/Interval",[Le,"../util/number","../util/format","./Scale"],function(t){var e=t("../util/number"),i=t("../util/format"),n=t("./Scale"),r=Math.floor,a=Math.ceil,o=e.getPrecisionSafe,s=e.round,l=n[oe]({type:"interval",_interval:0,setExtent:function(t,e){var i=this._extent;isNaN(t)||(i[0]=parseFloat(t)),isNaN(e)||(i[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),l[Se].setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval||this.niceTicks(),this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice()},getTicks:function(){this._interval||this.niceTicks();var t=this._interval,e=this._extent,i=[],n=1e4;if(t){var r=this._niceExtent,a=o(t)+2;e[0]<r[0]&&i.push(e[0]);for(var l=r[0];l<=r[1];)if(i.push(l),l=s(l+t,a),i[re]>n)return[];e[1]>r[1]&&i.push(e[1])}return i},getTicksLabels:function(){for(var t=[],e=this[z](),i=0;i<e[re];i++)t.push(this.getLabel(e[i]));return t},getLabel:function(t){return i.addCommas(t)},niceTicks:function(t){t=t||5;var i=this._extent,n=i[1]-i[0];if(isFinite(n)){0>n&&(n=-n,i.reverse());var l=s(e.nice(n/t,!0),Math.max(o(i[0]),o(i[1]))+2),u=o(l)+2,c=[s(a(i[0]/l)*l,u),s(r(i[1]/l)*l,u)];this._interval=l,this._niceExtent=c}},niceExtent:function(t,e,i){var n=this._extent;if(n[0]===n[1])if(0!==n[0]){var o=n[0];i?n[0]-=o/2:(n[1]+=o/2,n[0]-=o/2)}else n[1]=1;var l=n[1]-n[0];isFinite(l)||(n[0]=0,n[1]=1),this.niceTicks(t);var u=this._interval;e||(n[0]=s(r(n[0]/u)*u)),i||(n[1]=s(a(n[1]/u)*u))}});return l[fe]=function(){return new l},l}),e("echarts/scale/Scale",[Le,"../util/clazz"],function(t){function e(){this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}var i=t("../util/clazz"),n=e[Se];return n.parse=function(t){return t},n[D]=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},n.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},n.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},n.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},n[k]=function(){return this._extent.slice()},n.setExtent=function(t,e){var i=this._extent;isNaN(t)||(i[0]=t),isNaN(e)||(i[1]=e)},n.getTicksLabels=function(){for(var t=[],e=this[z](),i=0;i<e[re];i++)t.push(this.getLabel(e[i]));return t},i.enableClassExtend(e),i.enableClassManagement(e,{registerWhenExtend:!0}),e}),e("echarts/util/model",[Le,"./format","./number","../model/Model",Ce],function(t){var e=t("./format"),i=t("./number"),n=t("../model/Model"),r=t(Ce),a={};return a.normalizeToArray=function(t){return t instanceof Array?t:null==t?[]:[t]},a.defaultEmphasis=function(t,e){if(t){var i=t.emphasis=t.emphasis||{},n=t[b]=t[b]||{};r.each(e,function(t){var e=r[o](i[t],n[t]);null!=e&&(i[t]=e)})}},a.LABEL_OPTIONS=[E,"show",V,"distance","formatter"],a.getDataItemValue=function(t){return t&&(null==t.value?t:t.value)},a.isDataItemOption=function(t){return r[le](t)&&!(t instanceof Array)},a.converDataValue=function(t,e){var n=e&&e.type;return n===C?t:("time"!==n||isFinite(t)||null==t||"-"===t||(t=+i.parseDate(t)),null==t||""===t?0/0:+t)},a.createDataFormatModel=function(t,e){var i=new n;return r.mixin(i,a.dataFormatMixin),i.seriesIndex=e.seriesIndex,i.name=e.name||"",i.mainType=e.mainType,i.subType=e.subType,i[ue]=function(){return t},i},a.dataFormatMixin={getDataParams:function(t,e){var i=this[ue](e),n=this.seriesIndex,r=this.name,a=this.getRawValue(t,e),o=i.getRawIndex(t),s=i[T](t,!0),l=i.getRawDataItem(t);return{componentType:this.mainType,componentSubType:this.subType,seriesType:this.mainType===ne?this.subType:null,seriesIndex:n,seriesName:r,name:s,dataIndex:o,data:l,dataType:e,value:a,color:i[S](t,"color"),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,i,n,r){i=i||b;var a=this[ue](n),o=a[p](t),s=this.getDataParams(t,n);null!=r&&s.value instanceof Array&&(s.value=s.value[r]);var l=o.get(["label",i,"formatter"]);return typeof l===j?(s.status=i,l(s)):typeof l===Me?e.formatTpl(l,s):void 0},getRawValue:function(t,e){var i=this[ue](e),n=i.getRawDataItem(t);return null!=n?!r[le](n)||n instanceof Array?n:n.value:void 0},formatTooltip:r.noop},a.mappingToExists=function(t,e){e=(e||[]).slice();var i=r.map(t||[],function(t){return{exist:t}});return r.each(e,function(t,n){if(r[le](t)){for(var o=0;o<i[re];o++)if(!i[o].option&&null!=t.id&&i[o].exist.id===t.id+"")return i[o].option=t,void(e[n]=null);for(var o=0;o<i[re];o++){var s=i[o].exist;if(!(i[o].option||null!=s.id&&null!=t.id||null==t.name||a.isIdInner(t)||a.isIdInner(s)||s.name!==t.name+""))return i[o].option=t,void(e[n]=null)}}}),r.each(e,function(t){if(r[le](t)){for(var e=0;e<i[re];e++){var n=i[e].exist;if(!i[e].option&&!a.isIdInner(n)&&null==t.id){i[e].option=t;break}}e>=i[re]&&i.push({option:t})}}),i},a.isIdInner=function(t){return r[le](t)&&t.id&&0===(t.id+"")[W]("\x00_ec_\x00")},a.compressBatches=function(t,e){function i(t,e,i){for(var n=0,r=t[re];r>n;n++)for(var o=t[n].seriesId,s=a.normalizeToArray(t[n][J]),l=i&&i[o],u=0,c=s[re];c>u;u++){var h=s[u];l&&l[h]?l[h]=null:(e[o]||(e[o]={}))[h]=1}}function n(t,e){var i=[];for(var r in t)if(t.hasOwnProperty(r)&&null!=t[r])if(e)i.push(+r);else{var a=n(t[r],!0);a[re]&&i.push({seriesId:r,dataIndex:a})}return i}var r={},o={};return i(t||[],r),i(e||[],o,r),[n(r),n(o)]},a}),e("echarts/model/globalDefault",[],function(){var t="";return typeof navigator!==A&&(t=navigator.platform||""),{color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],textStyle:{fontFamily:t.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:!0,animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3}}),e("echarts/model/mixin/colorPalette",[],function(){return{clearColorPalette:function(){this._colorIdx=0,this._colorNameMap={}},getColorFromPalette:function(t,e){e=e||this;var i=e._colorIdx||0,n=e._colorNameMap||(e._colorNameMap={});if(n[t])return n[t];var r=this.get("color",!0)||[];if(r[re]){var a=r[i];return t&&(n[t]=a),e._colorIdx=(i+1)%r[re],a}}}}),e("zrender/tool/path",[Le,"../graphic/Path","../core/PathProxy","./transformPath","../core/matrix"],function(t){function e(t,e,i,n,r,a,o,s,l,u,p){var g=l*(d/180),y=f(g)*(t-i)/2+h(g)*(e-n)/2,_=-1*h(g)*(t-i)/2+f(g)*(e-n)/2,x=y*y/(o*o)+_*_/(s*s);x>1&&(o*=c(x),s*=c(x));var b=(r===a?-1:1)*c((o*o*s*s-o*o*_*_-s*s*y*y)/(o*o*_*_+s*s*y*y))||0,w=b*o*_/s,M=b*-s*y/o,S=(t+i)/2+f(g)*w-h(g)*M,T=(e+n)/2+h(g)*w+f(g)*M,C=m([1,0],[(y-w)/o,(_-M)/s]),P=[(y-w)/o,(_-M)/s],L=[(-1*y-w)/o,(-1*_-M)/s],A=m(P,L);v(P,L)<=-1&&(A=d),v(P,L)>=1&&(A=0),0===a&&A>0&&(A-=2*d),1===a&&0>A&&(A+=2*d),p.addData(u,S,T,o,s,C,A,g,a)}function i(t){if(!t)return[];var i,n=t[Y](/-/g," -")[Y](/  /g," ")[Y](/ /g,",")[Y](/,,/g,",");for(i=0;i<u[re];i++)n=n[Y](new RegExp(u[i],"g"),"|"+u[i]);var r,a=n.split("|"),s=0,l=0,c=new o,h=o.CMD;for(i=1;i<a[re];i++){var f,d=a[i],p=d.charAt(0),v=0,m=d.slice(1)[Y](/e,-/g,"e-").split(",");m[re]>0&&""===m[0]&&m.shift();for(var g=0;g<m[re];g++)m[g]=parseFloat(m[g]);for(;v<m[re]&&!isNaN(m[v])&&!isNaN(m[0]);){var y,_,x,b,w,M,S,T=s,C=l;switch(p){case"l":s+=m[v++],l+=m[v++],f=h.L,c.addData(f,s,l);break;case"L":s=m[v++],l=m[v++],f=h.L,c.addData(f,s,l);break;case"m":s+=m[v++],l+=m[v++],f=h.M,c.addData(f,s,l),p="l";break;case"M":s=m[v++],l=m[v++],f=h.M,c.addData(f,s,l),p="L";break;case"h":s+=m[v++],f=h.L,c.addData(f,s,l);break;case"H":s=m[v++],f=h.L,c.addData(f,s,l);break;case"v":l+=m[v++],f=h.L,c.addData(f,s,l);break;case"V":l=m[v++],f=h.L,c.addData(f,s,l);break;case"C":f=h.C,c.addData(f,m[v++],m[v++],m[v++],m[v++],m[v++],m[v++]),s=m[v-2],l=m[v-1];break;case"c":f=h.C,c.addData(f,m[v++]+s,m[v++]+l,m[v++]+s,m[v++]+l,m[v++]+s,m[v++]+l),s+=m[v-2],l+=m[v-1];break;case"S":y=s,_=l;var P=c.len(),L=c.data;r===h.C&&(y+=s-L[P-4],_+=l-L[P-3]),f=h.C,T=m[v++],C=m[v++],s=m[v++],l=m[v++],c.addData(f,y,_,T,C,s,l);break;case"s":y=s,_=l;var P=c.len(),L=c.data;r===h.C&&(y+=s-L[P-4],_+=l-L[P-3]),f=h.C,T=s+m[v++],C=l+m[v++],s+=m[v++],l+=m[v++],c.addData(f,y,_,T,C,s,l);break;case"Q":T=m[v++],C=m[v++],s=m[v++],l=m[v++],f=h.Q,c.addData(f,T,C,s,l);break;case"q":T=m[v++]+s,C=m[v++]+l,s+=m[v++],l+=m[v++],f=h.Q,c.addData(f,T,C,s,l);break;case"T":y=s,_=l;var P=c.len(),L=c.data;r===h.Q&&(y+=s-L[P-4],_+=l-L[P-3]),s=m[v++],l=m[v++],f=h.Q,c.addData(f,y,_,s,l);break;case"t":y=s,_=l;var P=c.len(),L=c.data;r===h.Q&&(y+=s-L[P-4],_+=l-L[P-3]),s+=m[v++],l+=m[v++],f=h.Q,c.addData(f,y,_,s,l);break;case"A":x=m[v++],b=m[v++],w=m[v++],M=m[v++],S=m[v++],T=s,C=l,s=m[v++],l=m[v++],f=h.A,e(T,C,s,l,M,S,x,b,w,f,c);break;case"a":x=m[v++],b=m[v++],w=m[v++],M=m[v++],S=m[v++],T=s,C=l,s+=m[v++],l+=m[v++],f=h.A,e(T,C,s,l,M,S,x,b,w,f,c)}}("z"===p||"Z"===p)&&(f=h.Z,c.addData(f)),r=f}return c.toStatic(),c}function r(t,e){var n,r=i(t);return e=e||{},e.buildPath=function(t){t.setData(r.data),n&&s(t,n);var e=t.getContext();e&&t.rebuildPath(e)},e[_]=function(t){n||(n=l[fe]()),l.mul(n,t,n),this.dirty(!0)},e}var a=t("../graphic/Path"),o=t("../core/PathProxy"),s=t("./transformPath"),l=t("../core/matrix"),u=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],c=Math.sqrt,h=Math.sin,f=Math.cos,d=Math.PI,p=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},v=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(p(t)*p(e))},m=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(v(t,e))};return{createFromString:function(t,e){return new a(r(t,e))},extendFromString:function(t,e){return a[oe](r(t,e))},mergePath:function(t,e){for(var i=[],r=t[re],o=0;r>o;o++){var s=t[o];s[n]&&s.buildPath(s.path,s.shape,!0),i.push(s.path)}var l=new a(e);return l.buildPath=function(t){t.appendPath(i);var e=t.getContext();e&&t.rebuildPath(e)},l}}}),e("zrender/graphic/Gradient",[Le],function(){var t=function(t){this.colorStops=t||[]};return t[Se]={constructor:t,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}},t}),e("zrender/graphic/Path",[Le,"./Displayable","../core/util","../core/PathProxy","../contain/path","./Pattern"],function(t){function e(t){i.call(this,t),this.path=new o}var i=t("./Displayable"),a=t("../core/util"),o=t("../core/PathProxy"),s=t("../contain/path"),l=t("./Pattern"),u=l[Se].getCanvasPattern,c=Math.abs;return e[Se]={constructor:e,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var i=this.style,r=this.path,a=i.hasStroke(),o=i.hasFill(),s=i.fill,l=i[g],c=o&&!!s.colorStops,h=a&&!!l.colorStops,f=o&&!!s.image,d=a&&!!l.image;if(i.bind(t,this,e),this.setTransform(t),this[n]){var p=this[N]();c&&(this._fillGradient=i.getGradient(t,s,p)),h&&(this._strokeGradient=i.getGradient(t,l,p))}c?t.fillStyle=this._fillGradient:f&&(t.fillStyle=u.call(s,t)),h?t.strokeStyle=this._strokeGradient:d&&(t.strokeStyle=u.call(l,t));var v=i.lineDash,m=i.lineDashOffset,y=!!t.setLineDash,_=this.getGlobalScale();r.setScale(_[0],_[1]),this.__dirtyPath||v&&!y&&a?(r=this.path.beginPath(t),v&&!y&&(r.setLineDash(v),r.setLineDashOffset(m)),this.buildPath(r,this.shape,!1),this.__dirtyPath=!1):(t.beginPath(),this.path.rebuildPath(t)),o&&r.fill(t),v&&y&&(t.setLineDash(v),t.lineDashOffset=m),a&&r[g](t),v&&y&&t.setLineDash([]),this.restoreTransform(t),(i.text||0===i.text)&&this.drawRectText(t,this[N]())},buildPath:function(){},getBoundingRect:function(){var t=this._rect,e=this.style,i=!t;if(i){var r=this.path;this.__dirtyPath&&(r.beginPath(),this.buildPath(r,this.shape,!1)),t=r[N]()}if(this._rect=t,e.hasStroke()){var a=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this[n]||i){a.copy(t);var o=e[y],s=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(o=Math.max(o,this.strokeContainThreshold||4)),s>1e-10&&(a.width+=o/s,a[de]+=o/s,a.x-=o/s/2,a.y-=o/s/2)}return a}return t},contain:function(t,e){var i=this.transformCoordToLocal(t,e),n=this[N](),r=this.style;if(t=i[0],e=i[1],n[D](t,e)){var a=this.path.data;if(r.hasStroke()){var o=r[y],l=r.strokeNoScale?this.getLineScale():1;if(l>1e-10&&(r.hasFill()||(o=Math.max(o,this.strokeContainThreshold)),s.containStroke(a,o/l,t,e)))return!0}if(r.hasFill())return s[D](a,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this[n]=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):i[Se].attrKV.call(this,t,e)},setShape:function(t,e){var i=this.shape;if(i){if(a[le](t))for(var n in t)i[n]=t[n];else i[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this[r];return t&&c(t[0]-1)>1e-10&&c(t[3]-1)>1e-10?Math.sqrt(c(t[0]*t[3]-t[2]*t[1])):1}},e[oe]=function(t){var i=function(i){e.call(this,i),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var r=this.shape;for(var a in n)!r.hasOwnProperty(a)&&n.hasOwnProperty(a)&&(r[a]=n[a])}t.init&&t.init.call(this,i)};a[q](i,e);for(var n in t)"style"!==n&&"shape"!==n&&(i[Se][n]=t[n]);return i},a[q](e,i),e}),e("zrender/graphic/Image",[Le,"./Displayable","../core/BoundingRect","../core/util","../core/LRU"],function(t){function e(t){i.call(this,t)}var i=t("./Displayable"),n=t("../core/BoundingRect"),r=t("../core/util"),a=t("../core/LRU"),o=new a(50);return e[Se]={constructor:e,type:"image",brush:function(t,e){var i,n=this.style,r=n.image;if(n.bind(t,this,e),i=typeof r===Me?this._image:r,!i&&r){var a=o.get(r);if(!a)return i=new Image,i.onload=function(){i.onload=null;for(var t=0;t<a.pending[re];t++)a.pending[t].dirty()},a={image:i,pending:[this]},i.src=r,o.put(r,a),void(this._image=i);if(i=a.image,this._image=i,!i.width||!i[de])return void a.pending.push(this)}if(i){var s=n.width||i.width,l=n[de]||i[de],u=n.x||0,c=n.y||0;if(!i.width||!i[de])return;if(this.setTransform(t),n.sWidth&&n.sHeight){var h=n.sx||0,f=n.sy||0;t.drawImage(i,h,f,n.sWidth,n.sHeight,u,c,s,l)}else if(n.sx&&n.sy){var h=n.sx,f=n.sy,d=s-h,p=l-f;t.drawImage(i,h,f,d,p,u,c,s,l)}else t.drawImage(i,u,c,s,l);null==n.width&&(n.width=s),null==n[de]&&(n[de]=l),this.restoreTransform(t),null!=n.text&&this.drawRectText(t,this[N]())}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new n(t.x||0,t.y||0,t.width||0,t[de]||0)),this._rect}},r[q](e,i),e}),e("zrender/graphic/Text",[Le,"./Displayable","../core/util","../contain/text"],function(t){var e=t("./Displayable"),i=t("../core/util"),n=t("../contain/text"),r=function(t){e.call(this,t)};return r[Se]={constructor:r,type:"text",brush:function(t,e){var i=this.style,r=i.x||0,a=i.y||0,o=i.text;if(null!=o&&(o+=""),i.bind(t,this,e),o){this.setTransform(t);var s,l=i[F],u=i.textFont||i.font;if(i.textVerticalAlign){var c=n[N](o,u,i[F],"top");switch(s=B,i.textVerticalAlign){case B:a-=c[de]/2-c.lineHeight/2;break;case pe:a-=c[de]-c.lineHeight/2;break;default:a+=c.lineHeight/2}}else s=i.textBaseline;t.font=u||"12px sans-serif",t[F]=l||"left",t[F]!==l&&(t[F]="left"),t.textBaseline=s||"alphabetic",t.textBaseline!==s&&(t.textBaseline="alphabetic");for(var h=n.measureText("国",t.font).width,f=o.split("\n"),d=0;d<f[re];d++)i.hasFill()&&t.fillText(f[d],r,a),i.hasStroke()&&t.strokeText(f[d],r,a),a+=h;this.restoreTransform(t)}},getBoundingRect:function(){if(!this._rect){var t=this.style,e=t.textVerticalAlign,i=n[N](t.text+"",t.textFont||t.font,t[F],e?"top":t.textBaseline);switch(e){case B:i.y-=i[de]/2;break;case pe:i.y-=i[de]}i.x+=t.x||0,i.y+=t.y||0,this._rect=i}return this._rect}},i[q](r,e),r}),e("zrender/container/Group",[Le,"../core/util","../Element","../core/BoundingRect"],function(t){var e=t("../core/util"),i=t("../Element"),r=t("../core/BoundingRect"),a=function(t){t=t||{},i.call(this,t);for(var e in t)this[e]=t[e];this._children=[],this.__storage=null,this[n]=!0};return a[Se]={constructor:a,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,i=0;i<e[re];i++)if(e[i].name===t)return e[i]},childCount:function(){return this._children[re]},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var i=this._children,n=i[W](e);n>=0&&(i[ie](n,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent[se](t),t.parent=this;var e=this.__storage,i=this.__zr;e&&e!==t.__storage&&(e.addToMap(t),t instanceof a&&t.addChildrenToStorage(e)),i&&i.refresh()},remove:function(t){var i=this.__zr,n=this.__storage,r=this._children,o=e[W](r,t);return 0>o?this:(r[ie](o,1),t.parent=null,n&&(n.delFromMap(t.id),t instanceof a&&t.delChildrenFromStorage(n)),i&&i.refresh(),this)},removeAll:function(){var t,e,i=this._children,n=this.__storage;for(e=0;e<i[re];e++)t=i[e],n&&(n.delFromMap(t.id),t instanceof a&&t.delChildrenFromStorage(n)),t.parent=null;return i[re]=0,this},eachChild:function(t,e){for(var i=this._children,n=0;n<i[re];n++){var r=i[n];t.call(e,r,n)}return this},traverse:function(t,e){for(var i=0;i<this._children[re];i++){var n=this._children[i];t.call(e,n),"group"===n.type&&n[K](t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children[re];e++){var i=this._children[e];t.addToMap(i),i instanceof a&&i.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children[re];e++){var i=this._children[e];t.delFromMap(i.id),i instanceof a&&i.delChildrenFromStorage(t)}},dirty:function(){return this[n]=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,i=new r(0,0,0,0),n=t||this._children,a=[],o=0;o<n[re];o++){var s=n[o];if(!s[ve]&&!s.invisible){var l=s[N](),u=s.getLocalTransform(a);u?(i.copy(l),i[_](u),e=e||i.clone(),e.union(i)):(e=e||l.clone(),e.union(l))}}return e||i}},e[q](a,i),a}),e("zrender/graphic/shape/Circle",[Le,"../Path"],function(t){return t("../Path")[oe]({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t[i](e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}})}),e("zrender/graphic/shape/Sector",[Le,"../Path"],function(t){return t("../Path")[oe]({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},buildPath:function(t,e){var n=e.cx,r=e.cy,a=Math.max(e.r0||0,0),o=Math.max(e.r,0),s=e.startAngle,l=e.endAngle,u=e.clockwise,c=Math.cos(s),h=Math.sin(s);t[i](c*a+n,h*a+r),t.lineTo(c*o+n,h*o+r),t.arc(n,r,o,s,l,!u),t.lineTo(Math.cos(l)*a+n,Math.sin(l)*a+r),0!==a&&t.arc(n,r,a,l,s,u),t.closePath()}})}),e("zrender/graphic/shape/Ring",[Le,"../Path"],function(t){return t("../Path")[oe]({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,r=e.cy,a=2*Math.PI;t[i](n+e.r,r),t.arc(n,r,e.r,0,a,!1),t[i](n+e.r0,r),t.arc(n,r,e.r0,0,a,!0)}})}),e("zrender/graphic/shape/Polygon",[Le,"../helper/poly","../Path"],function(t){var e=t("../helper/poly");return t("../Path")[oe]({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,i){e.buildPath(t,i,!0)}})}),e("zrender/graphic/shape/Rect",[Le,"../helper/roundRect","../Path"],function(t){var e=t("../helper/roundRect");return t("../Path")[oe]({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,i){var n=i.x,r=i.y,a=i.width,o=i[de];i.r?e.buildPath(t,i):t.rect(n,r,a,o),t.closePath()}})}),e("zrender/graphic/shape/Polyline",[Le,"../helper/poly","../Path"],function(t){var e=t("../helper/poly");return t("../Path")[oe]({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,i){e.buildPath(t,i,!1)}})}),e("zrender/graphic/shape/Line",[Le,"../Path"],function(t){return t("../Path")[oe]({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,r=e.y1,a=e.x2,o=e.y2,s=e.percent;0!==s&&(t[i](n,r),1>s&&(a=n*(1-s)+a*s,o=r*(1-s)+o*s),t.lineTo(a,o))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}})}),e("zrender/graphic/shape/BezierCurve",[Le,"../../core/curve","../../core/vector","../Path"],function(t){function e(t,e,i){var n=t.cpx2,r=t.cpy2;return null===n||null===r?[(i?c:l)(t.x1,t.cpx1,t.cpx2,t.x2,e),(i?c:l)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(i?u:s)(t.x1,t.cpx1,t.x2,e),(i?u:s)(t.y1,t.cpy1,t.y2,e)]}var n=t("../../core/curve"),r=t("../../core/vector"),a=n.quadraticSubdivide,o=n.cubicSubdivide,s=n.quadraticAt,l=n.cubicAt,u=n.quadraticDerivativeAt,c=n.cubicDerivativeAt,h=[];return t("../Path")[oe]({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,r=e.y1,s=e.x2,l=e.y2,u=e.cpx1,c=e.cpy1,f=e.cpx2,d=e.cpy2,p=e.percent;0!==p&&(t[i](n,r),null==f||null==d?(1>p&&(a(n,u,s,p,h),u=h[1],s=h[2],a(r,c,l,p,h),c=h[1],l=h[2]),t.quadraticCurveTo(u,c,s,l)):(1>p&&(o(n,u,f,s,p,h),u=h[1],f=h[2],s=h[3],o(r,c,d,l,p,h),c=h[1],d=h[2],l=h[3]),t.bezierCurveTo(u,c,f,d,s,l)))},pointAt:function(t){return e(this.shape,t,!1)},tangentAt:function(t){var i=e(this.shape,t,!0);return r.normalize(i,i)}})}),e("zrender/graphic/shape/Arc",[Le,"../Path"],function(t){return t("../Path")[oe]({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,r=e.cy,a=Math.max(e.r,0),o=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(o),c=Math.sin(o);t[i](u*a+n,c*a+r),t.arc(n,r,a,o,s,!l)}})}),e("zrender/graphic/CompoundPath",[Le,"./Path"],function(t){var e=t("./Path");return e[oe]({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,i=0;i<e[re];i++)t=t||e[i].__dirtyPath;this.__dirtyPath=t,this[n]=this[n]||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),i=0;i<t[re];i++)t[i].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var i=e.paths||[],n=0;n<i[re];n++)i[n].buildPath(t,i[n].shape,!0)},afterBrush:function(){for(var t=this.shape.paths,e=0;e<t[re];e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),e[Se][N].call(this)}})}),e("zrender/graphic/LinearGradient",[Le,"../core/util","./Gradient"],function(t){var e=t("../core/util"),i=t("./Gradient"),n=function(t,e,n,r,a,o){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==r?0:r,this.type="linear",this.global=o||!1,i.call(this,a)};return n[Se]={constructor:n},e[q](n,i),n}),e("zrender/graphic/RadialGradient",[Le,"../core/util","./Gradient"],function(t){var e=t("../core/util"),i=t("./Gradient"),n=function(t,e,n,r,a){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=a||!1,i.call(this,r)};return n[Se]={constructor:n},e[q](n,i),n}),e("zrender/contain/text",[Le,"../core/util","../core/BoundingRect"],function(t){function e(t,e){var i=t+":"+e;if(s[i])return s[i];for(var n=(t+"").split("\n"),r=0,a=0,o=n[re];o>a;a++)r=Math.max(d.measureText(n[a],e).width,r);return l>u&&(l=0,s={}),l++,s[i]=r,r}function i(t,i,n,r){var a=((t||"")+"").split("\n")[re],o=e(t,i),s=e("国",i),l=a*s,u=new h(0,0,o,l);switch(u.lineHeight=s,r){case pe:case"alphabetic":u.y-=s;break;case B:u.y-=s/2
}switch(n){case"end":case"right":u.x-=u.width;break;case R:u.x-=u.width/2}return u}function n(t,e,i,n){var r=e.x,a=e.y,o=e[de],s=e.width,l=i[de],u=o/2-l/2,c="left";switch(t){case"left":r-=n,a+=u,c="right";break;case"right":r+=n+s,a+=u,c="left";break;case"top":r+=s/2,a-=n+l,c=R;break;case pe:r+=s/2,a+=o+n,c=R;break;case m:r+=s/2,a+=u,c=R;break;case"insideLeft":r+=n,a+=u,c="left";break;case"insideRight":r+=s-n,a+=u,c="right";break;case"insideTop":r+=s/2,a+=n,c=R;break;case"insideBottom":r+=s/2,a+=o-l-n,c=R;break;case"insideTopLeft":r+=n,a+=n,c="left";break;case"insideTopRight":r+=s-n,a+=n,c="right";break;case"insideBottomLeft":r+=n,a+=o-l-n;break;case"insideBottomRight":r+=s-n,a+=o-l-n,c="right"}return{x:r,y:a,textAlign:c,textBaseline:"top"}}function r(t,i,n,r,o){if(!i)return"";o=o||{},r=f(r,"...");for(var s=f(o.maxIterations,2),l=f(o.minChar,0),u=e("国",n),c=e("a",n),h=f(o.placeholder,""),d=i=Math.max(0,i-1),p=0;l>p&&d>=c;p++)d-=c;var v=e(r);v>d&&(r="",v=0),d=i-v;for(var m=(t+"").split("\n"),p=0,g=m[re];g>p;p++){var y=m[p],_=e(y,n);if(!(i>=_)){for(var x=0;;x++){if(d>=_||x>=s){y+=r;break}var b=0===x?a(y,d,c,u):_>0?Math.floor(y[re]*d/_):0;y=y.substr(0,b),_=e(y,n)}""===y&&(y=h),m[p]=y}}return m.join("\n")}function a(t,e,i,n){for(var r=0,a=0,o=t[re];o>a&&e>r;a++){var s=t.charCodeAt(a);r+=s>=0&&127>=s?i:n}return a}var s={},l=0,u=5e3,c=t("../core/util"),h=t("../core/BoundingRect"),f=c[o],d={getWidth:e,getBoundingRect:i,adjustTextPositionOnRect:n,truncateText:r,measureText:function(t,e){var i=c.getContext();return i.font=e||"12px sans-serif",i.measureText(t)}};return d}),e("zrender/core/BoundingRect",[Le,"./vector","./matrix"],function(t){function e(t,e,i,n){this.x=t,this.y=e,this.width=i,this[de]=n}var i=t("./vector"),n=t("./matrix"),r=i[_],a=Math.min,o=Math.abs,s=Math.max;return e[Se]={constructor:e,union:function(t){var e=a(t.x,this.x),i=a(t.y,this.y);this.width=s(t.x+t.width,this.x+this.width)-e,this[de]=s(t.y+t[de],this.y+this[de])-i,this.x=e,this.y=i},applyTransform:function(){var t=[],e=[];return function(i){i&&(t[0]=this.x,t[1]=this.y,e[0]=this.x+this.width,e[1]=this.y+this[de],r(t,t,i),r(e,e,i),this.x=a(t[0],e[0]),this.y=a(t[1],e[1]),this.width=o(e[0]-t[0]),this[de]=o(e[1]-t[1]))}}(),calculateTransform:function(t){var e=this,i=t.width/e.width,r=t[de]/e[de],a=n[fe]();return n.translate(a,a,[-e.x,-e.y]),n.scale(a,a,[i,r]),n.translate(a,a,[t.x,t.y]),a},intersect:function(t){var e=this,i=e.x,n=e.x+e.width,r=e.y,a=e.y+e[de],o=t.x,s=t.x+t.width,l=t.y,u=t.y+t[de];return!(o>n||i>s||l>a||r>u)},contain:function(t,e){var i=this;return t>=i.x&&t<=i.x+i.width&&e>=i.y&&e<=i.y+i[de]},clone:function(){return new e(this.x,this.y,this.width,this[de])},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this[de]=t[de]}},e}),e("echarts/coord/axisHelper",[Le,"../scale/Ordinal","../scale/Interval","../scale/Time","../scale/Log","../scale/Scale","../util/number",Ce,"zrender/contain/text"],function(t){var e=t("../scale/Ordinal"),i=t("../scale/Interval");t("../scale/Time"),t("../scale/Log");var n=t("../scale/Scale"),r=t("../util/number"),a=t(Ce),o=t("zrender/contain/text"),l={};return l.getScaleExtent=function(t,e){var i=t.scale,n=i[k](),o=n[1]-n[0];if(i.type===C)return isFinite(o)?n:[0,0];var s=e.getMin?e.getMin():e.get("min"),l=e.getMax?e.getMax():e.get("max"),u=e.getNeedCrossZero?e.getNeedCrossZero():!e.get("scale"),c=e.get("boundaryGap");a[X](c)||(c=[c||0,c||0]),c[0]=r[d](c[0],1),c[1]=r[d](c[1],1);var h=!0,f=!0;return null==s&&(s=n[0]-c[0]*o,h=!1),null==l&&(l=n[1]+c[1]*o,f=!1),"dataMin"===s&&(s=n[0]),"dataMax"===l&&(l=n[1]),u&&(s>0&&l>0&&!h&&(s=0),0>s&&0>l&&!f&&(l=0)),[s,l]},l.niceScaleExtent=function(t,e){var i=t.scale,n=l.getScaleExtent(t,e),r=null!=(e.getMin?e.getMin():e.get("min")),a=null!=(e.getMax?e.getMax():e.get("max")),o=e.get("splitNumber");"log"===i.type&&(i.base=e.get("logBase")),i.setExtent(n[0],n[1]),i.niceExtent(o,r,a);var s=e.get("minInterval");if(isFinite(s)&&!r&&!a&&"interval"===i.type){var u=i.getInterval(),c=Math.max(Math.abs(u),s)/u;n=i[k](),i.setExtent(c*n[0],n[1]*c),i.niceExtent(o)}var u=e.get("interval");null!=u&&i.setInterval&&i.setInterval(u)},l.createScaleByModel=function(t,r){if(r=r||t.get("type"))switch(r){case s:return new e(t.getCategories(),[1/0,-1/0]);case"value":return new i;default:return(n.getClass(r)||i)[fe](t)}},l.ifAxisCrossZero=function(t){var e=t.scale[k](),i=e[0],n=e[1];return!(i>0&&n>0||0>i&&0>n)},l.getAxisLabelInterval=function(t,e,i,n){var r,a=0,s=0,l=1;e[re]>40&&(l=Math.floor(e[re]/40));for(var u=0;u<t[re];u+=l){var c=t[u],h=o[N](e[u],i,R,"top");h[n?"x":"y"]+=c,h[n?"width":de]*=1.3,r?r.intersect(h)?(s++,a=Math.max(a,s)):(r.union(h),s=0):r=h.clone()}return 0===a&&l>1?l:(a+1)*l-1},l.getFormattedLabels=function(t,e){var i=t.scale,n=i.getTicksLabels(),r=i[z]();return typeof e===Me?(e=function(t){return function(e){return t[Y]("{value}",e)}}(e),a.map(n,e)):typeof e===j?a.map(r,function(n,r){return e(t.type===s?i.getLabel(n):n,r)},this):n},l}),e("echarts/coord/cartesian/Cartesian2D",[Le,Ce,"./Cartesian"],function(t){function e(t){n.call(this,t)}var i=t(Ce),n=t("./Cartesian");return e[Se]={constructor:e,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale(C)[0]||this.getAxesByScale("time")[0]||this[c]("x")},containPoint:function(t){var e=this[c]("x"),i=this[c]("y");return e[D](e.toLocalCoord(t[0]))&&i[D](i.toLocalCoord(t[1]))},containData:function(t){return this[c]("x").containData(t[0])&&this[c]("y").containData(t[1])},dataToPoints:function(t,e){return t.mapArray(["x","y"],function(t,e){return this[h]([t,e])},e,this)},dataToPoint:function(t,e){var i=this[c]("x"),n=this[c]("y");return[i.toGlobalCoord(i[l](t[0],e)),n.toGlobalCoord(n[l](t[1],e))]},pointToData:function(t,e){var i=this[c]("x"),n=this[c]("y");return[i.coordToData(i.toLocalCoord(t[0]),e),n.coordToData(n.toLocalCoord(t[1]),e)]},getOtherAxis:function(t){return this[c]("x"===t.dim?"y":"x")}},i[q](e,n),e}),e("echarts/coord/cartesian/Axis2D",[Le,Ce,"../Axis","./axisLabelInterval"],function(t){var e=t(Ce),i=t("../Axis"),n=t("./axisLabelInterval"),r=function(t,e,n,r,a){i.call(this,t,e,n),this.type=r||"value",this[E]=a||pe};return r[Se]={constructor:r,index:0,onZero:!1,model:null,isHorizontal:function(){var t=this[E];return"top"===t||t===pe},getGlobalExtent:function(){var t=this[k]();return t[0]=this.toGlobalCoord(t[0]),t[1]=this.toGlobalCoord(t[1]),t},getLabelInterval:function(){var t=this._labelInterval;return t||(t=this._labelInterval=n(this)),t},isLabelIgnored:function(t){if(this.type===s){var e=this.getLabelInterval();return typeof e===j&&!e(t,this.scale.getLabel(t))||t%(e+1)}},toLocalCoord:null,toGlobalCoord:null},e[q](r,i),r}),e("echarts/coord/cartesian/GridModel",[Le,"./AxisModel","../../model/Component"],function(t){t("./AxisModel");var e=t("../../model/Component");return e[oe]({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}})}),e("echarts/util/clazz",[Le,Ce],function(t){function e(t,e){var i=n.slice(arguments,2);return this.superClass[Se][e].apply(t,i)}function i(t,e,i){return this.superClass[Se][e].apply(t,i)}var n=t(Ce),r={},a=".",o="___EC__COMPONENT__CONTAINER___",s=r.parseClassType=function(t){var e={main:"",sub:""};return t&&(t=t.split(a),e.main=t[0]||"",e.sub=t[1]||""),e};return r.enableClassExtend=function(t){t.$constructor=t,t[oe]=function(t){var r=this,a=function(){t.$constructor?t.$constructor.apply(this,arguments):r.apply(this,arguments)};return n[oe](a[Se],t),a[oe]=this[oe],a.superCall=e,a.superApply=i,n[q](a,this),a.superClass=r,a}},r.enableClassManagement=function(t,e){function i(t){var e=r[t.main];return e&&e[o]||(e=r[t.main]={},e[o]=!0),e}e=e||{};var r={};if(t.registerClass=function(t,e){if(e)if(e=s(e),e.sub){if(e.sub!==o){var n=i(e);n[e.sub]=t}}else r[e.main]=t;return t},t.getClass=function(t,e,i){var n=r[t];if(n&&n[o]&&(n=e?n[e]:null),i&&!n)throw new Error("Component "+t+"."+(e||"")+" not exists. Load it first.");return n},t.getClassesByMainType=function(t){t=s(t);var e=[],i=r[t.main];return i&&i[o]?n.each(i,function(t,i){i!==o&&e.push(t)}):e.push(i),e},t.hasClass=function(t){return t=s(t),!!r[t.main]},t.getAllClassMainTypes=function(){var t=[];return n.each(r,function(e,i){t.push(i)}),t},t.hasSubTypes=function(t){t=s(t);var e=r[t.main];return e&&e[o]},t.parseClassType=s,e.registerWhenExtend){var a=t[oe];a&&(t[oe]=function(e){var i=a.call(this,e);return t.registerClass(i,e.type)})}return t},r.setReadOnly=function(){},r}),e("echarts/model/mixin/lineStyle",[Le,"./makeStyleMapper"],function(t){var e=t("./makeStyleMapper")([[y,"width"],[g,"color"],[O],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]);return{getLineStyle:function(t){var i=e.call(this,t),n=this.getLineDash();return n&&(i.lineDash=n),i},getLineDash:function(){var t=this.get("type");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[2,2]}}}),e("echarts/model/mixin/areaStyle",[Le,"./makeStyleMapper"],function(t){return{getAreaStyle:t("./makeStyleMapper")([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],[O],["shadowColor"]])}}),e("echarts/model/mixin/textStyle",[Le,"zrender/contain/text"],function(t){function e(t,e){return t&&t[M](e)}var i=t("zrender/contain/text");return{getTextColor:function(){var t=this[w];return this[M]("color")||t&&t.get("textStyle.color")},getFont:function(){var t=this[w],i=t&&t[xe](V);return[this[M]("fontStyle")||e(i,"fontStyle"),this[M]("fontWeight")||e(i,"fontWeight"),(this[M]("fontSize")||e(i,"fontSize")||12)+"px",this[M]("fontFamily")||e(i,"fontFamily")||"sans-serif"].join(" ")},getTextRect:function(t){var e=this.get(V)||{};return i[N](t,this[G](),e.align,e.baseline)},truncateText:function(t,e,n,r){return i.truncateText(t,e,this[G](),n,r)}}}),e("echarts/model/mixin/itemStyle",[Le,"./makeStyleMapper"],function(t){var e=t("./makeStyleMapper")([["fill","color"],[g,"borderColor"],[y,"borderWidth"],[O],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]);return{getItemStyle:function(t){var i=e.call(this,t),n=this.getBorderLineDash();return n&&(i.lineDash=n),i},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}}}),e("zrender/core/PathProxy",[Le,"./curve","./vector","./bbox","./BoundingRect","../config"],function(t){var e=t("./curve"),n=t("./vector"),r=t("./bbox"),a=t("./BoundingRect"),o=t("../config").devicePixelRatio,s={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},l=[],u=[],c=[],h=[],f=Math.min,d=Math.max,p=Math.cos,v=Math.sin,m=Math.sqrt,y=Math.abs,_=typeof Float32Array!=A,x=function(){this.data=[],this._len=0,this._ctx=null,this._xi=0,this._yi=0,this._x0=0,this._y0=0,this._ux=0,this._uy=0};return x[Se]={constructor:x,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=y(1/o/t)||0,this._uy=y(1/o/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._len=0,this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(s.M,t,e),this._ctx&&this._ctx[i](t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var i=y(t-this._xi)>this._ux||y(e-this._yi)>this._uy||this._len<5;return this.addData(s.L,t,e),this._ctx&&i&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),i&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,i,n,r,a){return this.addData(s.C,t,e,i,n,r,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,i,n,r,a):this._ctx.bezierCurveTo(t,e,i,n,r,a)),this._xi=r,this._yi=a,this},quadraticCurveTo:function(t,e,i,n){return this.addData(s.Q,t,e,i,n),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,i,n):this._ctx.quadraticCurveTo(t,e,i,n)),this._xi=i,this._yi=n,this},arc:function(t,e,i,n,r,a){return this.addData(s.A,t,e,i,i,n,r-n,0,a?0:1),this._ctx&&this._ctx.arc(t,e,i,n,r,a),this._xi=p(r)*i+t,this._xi=v(r)*i+t,this},arcTo:function(t,e,i,n,r){return this._ctx&&this._ctx.arcTo(t,e,i,n,r),this},rect:function(t,e,i,n){return this._ctx&&this._ctx.rect(t,e,i,n),this.addData(s.R,t,e,i,n),this},closePath:function(){this.addData(s.Z);var t=this._ctx,e=this._x0,i=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,i),t.closePath()),this._xi=e,this._yi=i,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t[g](),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,i=0;i<t[re];i++)e+=t[i];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t[re];this.data&&this.data[re]==e||!_||(this.data=new Float32Array(e));for(var i=0;e>i;i++)this.data[i]=t[i];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t[re],i=0,n=this._len,r=0;e>r;r++)i+=t[r].len();_&&this.data instanceof Float32Array&&(this.data=new Float32Array(n+i));for(var r=0;e>r;r++)for(var a=t[r].data,o=0;o<a[re];o++)this.data[n++]=a[o];this._len=n},addData:function(t){var e=this.data;this._len+arguments[re]>e[re]&&(this._expandData(),e=this.data);for(var i=0;i<arguments[re];i++)e[this._len++]=arguments[i];this._prevCmd=t},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,r,a=this._dashSum,o=this._dashOffset,s=this._lineDash,l=this._ctx,u=this._xi,c=this._yi,h=t-u,p=e-c,v=m(h*h+p*p),g=u,y=c,_=s[re];for(h/=v,p/=v,0>o&&(o=a+o),o%=a,g-=o*h,y-=o*p;h>0&&t>=g||0>h&&g>=t||0==h&&(p>0&&e>=y||0>p&&y>=e);)r=this._dashIdx,n=s[r],g+=h*n,y+=p*n,this._dashIdx=(r+1)%_,h>0&&u>g||0>h&&g>u||p>0&&c>y||0>p&&y>c||l[r%2?i:"lineTo"](h>=0?f(g,t):d(g,t),p>=0?f(y,e):d(y,e));h=g-t,p=y-e,this._dashOffset=-m(h*h+p*p)},_dashedBezierTo:function(t,n,r,a,o,s){var l,u,c,h,f,d=this._dashSum,p=this._dashOffset,v=this._lineDash,g=this._ctx,y=this._xi,_=this._yi,x=e.cubicAt,b=0,w=this._dashIdx,M=v[re],S=0;for(0>p&&(p=d+p),p%=d,l=0;1>l;l+=.1)u=x(y,t,r,o,l+.1)-x(y,t,r,o,l),c=x(_,n,a,s,l+.1)-x(_,n,a,s,l),b+=m(u*u+c*c);for(;M>w&&(S+=v[w],!(S>p));w++);for(l=(S-p)/b;1>=l;)h=x(y,t,r,o,l),f=x(_,n,a,s,l),w%2?g[i](h,f):g.lineTo(h,f),l+=v[w]/b,w=(w+1)%M;w%2!==0&&g.lineTo(o,s),u=o-h,c=s-f,this._dashOffset=-m(u*u+c*c)},_dashedQuadraticTo:function(t,e,i,n){var r=i,a=n;i=(i+2*t)/3,n=(n+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,i,n,r,a)},toStatic:function(){var t=this.data;t instanceof Array&&(t[re]=this._len,_&&(this.data=new Float32Array(t)))},getBoundingRect:function(){l[0]=l[1]=c[0]=c[1]=Number.MAX_VALUE,u[0]=u[1]=h[0]=h[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,i=0,o=0,f=0,d=0;d<t[re];){var m=t[d++];switch(1==d&&(e=t[d],i=t[d+1],o=e,f=i),m){case s.M:o=t[d++],f=t[d++],e=o,i=f,c[0]=o,c[1]=f,h[0]=o,h[1]=f;break;case s.L:r.fromLine(e,i,t[d],t[d+1],c,h),e=t[d++],i=t[d++];break;case s.C:r.fromCubic(e,i,t[d++],t[d++],t[d++],t[d++],t[d],t[d+1],c,h),e=t[d++],i=t[d++];break;case s.Q:r.fromQuadratic(e,i,t[d++],t[d++],t[d],t[d+1],c,h),e=t[d++],i=t[d++];break;case s.A:var g=t[d++],y=t[d++],_=t[d++],x=t[d++],b=t[d++],w=t[d++]+b,M=(t[d++],1-t[d++]);1==d&&(o=p(b)*_+g,f=v(b)*x+y),r.fromArc(g,y,_,x,b,w,M,c,h),e=p(w)*_+g,i=v(w)*x+y;break;case s.R:o=e=t[d++],f=i=t[d++];var S=t[d++],T=t[d++];r.fromLine(o,f,o+S,f+T,c,h);break;case s.Z:e=o,i=f}n.min(l,l,c),n.max(u,u,h)}return 0===d&&(l[0]=l[1]=u[0]=u[1]=0),new a(l[0],l[1],u[0]-l[0],u[1]-l[1])},rebuildPath:function(t){for(var e,n,r,a,o,l,u=this.data,c=this._ux,h=this._uy,f=this._len,d=0;f>d;){var m=u[d++];switch(1==d&&(r=u[d],a=u[d+1],e=r,n=a),m){case s.M:e=r=u[d++],n=a=u[d++],t[i](r,a);break;case s.L:o=u[d++],l=u[d++],(y(o-r)>c||y(l-a)>h||d===f-1)&&(t.lineTo(o,l),r=o,a=l);break;case s.C:t.bezierCurveTo(u[d++],u[d++],u[d++],u[d++],u[d++],u[d++]),r=u[d-2],a=u[d-1];break;case s.Q:t.quadraticCurveTo(u[d++],u[d++],u[d++],u[d++]),r=u[d-2],a=u[d-1];break;case s.A:var g=u[d++],_=u[d++],x=u[d++],b=u[d++],w=u[d++],M=u[d++],S=u[d++],T=u[d++],C=x>b?x:b,P=x>b?1:x/b,L=x>b?b/x:1,A=Math.abs(x-b)>.001,k=w+M;A?(t.translate(g,_),t.rotate(S),t.scale(P,L),t.arc(0,0,C,w,k,1-T),t.scale(1/P,1/L),t.rotate(-S),t.translate(-g,-_)):t.arc(g,_,C,w,k,1-T),1==d&&(e=p(w)*x+g,n=v(w)*b+_),r=p(k)*x+g,a=v(k)*b+_;break;case s.R:e=r=u[d],n=a=u[d+1],t.rect(u[d++],u[d++],u[d++],u[d++]);break;case s.Z:t.closePath(),r=e,a=n}}}},x.CMD=s,x}),e("echarts/component/marker/MarkerModel",[Le,"../../util/model",Ce,Pe,"../../util/format",a],function(t){function e(t){i.defaultEmphasis(t.label,i.LABEL_OPTIONS)}var i=t("../../util/model"),n=t(Ce),r=t(Pe),o=t("../../util/format"),s=o.addCommas,l=o.encodeHTML,u=t(a).extendComponentModel({type:"marker",dependencies:[ne,"grid","polar","geo"],init:function(t,e,i,n){this.mergeDefaultAndTheme(t,i),this.mergeOption(t,i,n.createdBySelf,!0)},ifEnableAnimation:function(){if(r.node)return!1;var t=this.__hostSeries;return this[M](be)&&t&&t.ifEnableAnimation()},mergeOption:function(t,i,r,a){var o=this.constructor,s=this.mainType+"Model";r||i[ce](function(t){var r=t.get(this.mainType),l=t[s];if(!r||!r.data)return void(t[s]=null);if(l)l.mergeOption(r,i,!0);else{a&&e(r),n.each(r.data,function(t){t instanceof Array?(e(t[0]),e(t[1])):e(t)});var u={mainType:this.mainType,seriesIndex:t.seriesIndex,name:t.name,createdBySelf:!0};l=new o(r,this,i,u),l.__hostSeries=t}t[s]=l},this)},formatTooltip:function(t){var e=this[ue](),i=this.getRawValue(t),r=n[X](i)?n.map(i,s).join(", "):s(i),a=e[T](t),o=this.name;return(null!=i||a)&&(o+="<br />"),a&&(o+=l(a),null!=i&&(o+=" : ")),null!=i&&(o+=r),o},getData:function(){return this._data},setData:function(t){this._data=t}});return n.mixin(u,i.dataFormatMixin),u}),e("zrender/tool/transformPath",[Le,"../core/PathProxy","../core/vector"],function(t){function e(t,e){var n,l,u,c,h,f,d=t.data,p=i.M,v=i.C,m=i.L,g=i.R,y=i.A,_=i.Q;for(u=0,c=0;u<d[re];){switch(n=d[u++],c=u,l=0,n){case p:l=1;break;case m:l=1;break;case v:l=3;break;case _:l=2;break;case y:var x=e[4],b=e[5],w=o(e[0]*e[0]+e[1]*e[1]),M=o(e[2]*e[2]+e[3]*e[3]),S=s(-e[1]/M,e[0]/w);d[u++]+=x,d[u++]+=b,d[u++]*=w,d[u++]*=M,d[u++]+=S,d[u++]+=S,u+=2,c=u;break;case g:f[0]=d[u++],f[1]=d[u++],r(f,f,e),d[c++]=f[0],d[c++]=f[1],f[0]+=d[u++],f[1]+=d[u++],r(f,f,e),d[c++]=f[0],d[c++]=f[1]}for(h=0;l>h;h++){var f=a[h];f[0]=d[u++],f[1]=d[u++],r(f,f,e),d[c++]=f[0],d[c++]=f[1]}}}var i=t("../core/PathProxy").CMD,n=t("../core/vector"),r=n[_],a=[[],[],[]],o=Math.sqrt,s=Math.atan2;return e}),e("zrender/graphic/mixin/RectText",[Le,"../../contain/text","../../core/BoundingRect"],function(t){function e(t,e){return typeof t===Me?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}var i=t("../../contain/text"),n=t("../../core/BoundingRect"),a=new n,o=function(){};return o[Se]={constructor:o,drawRectText:function(t,n,o){var s=this.style,l=s.text;if(null!=l&&(l+=""),l){t.save();var u,c,h=s.textPosition,f=s.textDistance,d=s[F],p=s.textFont||s.font,v=s.textBaseline,m=s.textVerticalAlign;o=o||i[N](l,p,d,v);var g=this[r];if(s.textTransform?this.setTransform(t):g&&(a.copy(n),a[_](g),n=a),h instanceof Array){if(u=n.x+e(h[0],n.width),c=n.y+e(h[1],n[de]),d=d||"left",v=v||"top",m){switch(m){case B:c-=o[de]/2-o.lineHeight/2;break;case pe:c-=o[de]-o.lineHeight/2;break;default:c+=o.lineHeight/2}v=B}}else{var y=i.adjustTextPositionOnRect(h,n,o,f);u=y.x,c=y.y,d=d||y[F],v=v||y.textBaseline}t[F]=d||"left",t.textBaseline=v||"alphabetic";var x=s.textFill,b=s.textStroke;x&&(t.fillStyle=x),b&&(t.strokeStyle=b),t.font=p||"12px sans-serif",t.shadowBlur=s.textShadowBlur,t.shadowColor=s.textShadowColor||"transparent",t.shadowOffsetX=s.textShadowOffsetX,t.shadowOffsetY=s.textShadowOffsetY;var w=l.split("\n");s.textRotation&&(g&&t.translate(g[4],g[5]),t.rotate(s.textRotation),g&&t.translate(-g[4],-g[5]));for(var M=0;M<w[re];M++)x&&t.fillText(w[M],u,c),b&&t.strokeText(w[M],u,c),c+=o.lineHeight;t.restore()}}},o}),e("zrender/graphic/Displayable",[Le,"../core/util","./Style","../Element","./mixin/RectText"],function(t){function e(t){t=t||{},a.call(this,t);for(var e in t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new r(t.style),this._rect=null,this.__clipPaths=[]}var i=t("../core/util"),r=t("./Style"),a=t("../Element"),o=t("./mixin/RectText");return e[Se]={constructor:e,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:-1,beforeBrush:function(){},afterBrush:function(){},brush:function(){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var i=this.transformCoordToLocal(t,e),n=this[N]();return n[D](i[0],i[1])},dirty:function(){this[n]=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?a[Se].attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new r(t),this.dirty(!1),this}},i[q](e,a),i.mixin(e,o),e}),e("zrender/contain/path",[Le,"../core/PathProxy","./line","./cubic","./quadratic","./arc","./util","../core/curve","./windingLine"],function(t){function e(t,e){return Math.abs(t-e)<g}function i(){var t=_[0];_[0]=_[1],_[1]=t}function n(t,e,n,r,a,o,s,l,u,c){if(c>e&&c>r&&c>o&&c>l||e>c&&r>c&&o>c&&l>c)return 0;var h=d.cubicRootAt(e,r,o,l,c,y);if(0===h)return 0;for(var f,p,v=0,m=-1,g=0;h>g;g++){var x=y[g],b=0===x||1===x?.5:1,w=d.cubicAt(t,n,a,s,x);u>w||(0>m&&(m=d.cubicExtrema(e,r,o,l,_),_[1]<_[0]&&m>1&&i(),f=d.cubicAt(e,r,o,l,_[0]),m>1&&(p=d.cubicAt(e,r,o,l,_[1]))),v+=2==m?x<_[0]?e>f?b:-b:x<_[1]?f>p?b:-b:p>l?b:-b:x<_[0]?e>f?b:-b:f>l?b:-b)}return v}function r(t,e,i,n,r,a,o,s){if(s>e&&s>n&&s>a||e>s&&n>s&&a>s)return 0;var l=d.quadraticRootAt(e,n,a,s,y);if(0===l)return 0;var u=d.quadraticExtremum(e,n,a);if(u>=0&&1>=u){for(var c=0,h=d.quadraticAt(e,n,a,u),f=0;l>f;f++){var p=0===y[f]||1===y[f]?.5:1,v=d.quadraticAt(t,i,r,y[f]);o>v||(c+=y[f]<u?e>h?p:-p:h>a?p:-p)}return c}var p=0===y[0]||1===y[0]?.5:1,v=d.quadraticAt(t,i,r,y[0]);return o>v?0:e>a?p:-p}function a(t,e,i,n,r,a,o,s){if(s-=e,s>i||-i>s)return 0;var l=Math.sqrt(i*i-s*s);y[0]=-l,y[1]=l;var u=Math.abs(n-r);if(1e-4>u)return 0;if(1e-4>u%m){n=0,r=m;var c=a?1:-1;return o>=y[0]+t&&o<=y[1]+t?c:0}if(a){var l=n;n=f(r),r=f(l)}else n=f(n),r=f(r);n>r&&(r+=m);for(var h=0,d=0;2>d;d++){var p=y[d];if(p+t>o){var v=Math.atan2(s,p),c=a?1:-1;0>v&&(v=m+v),(v>=n&&r>=v||v+m>=n&&r>=v+m)&&(v>Math.PI/2&&v<1.5*Math.PI&&(c=-c),h+=c)}}return h}function o(t,i,o,l,f){for(var d=0,m=0,g=0,y=0,_=0,x=0;x<t[re];){var b=t[x++];switch(b===s.M&&x>1&&(o||(d+=p(m,g,y,_,l,f))),1==x&&(m=t[x],g=t[x+1],y=m,_=g),b){case s.M:y=t[x++],_=t[x++],m=y,g=_;break;case s.L:if(o){if(v(m,g,t[x],t[x+1],i,l,f))return!0}else d+=p(m,g,t[x],t[x+1],l,f)||0;m=t[x++],g=t[x++];break;case s.C:if(o){if(u.containStroke(m,g,t[x++],t[x++],t[x++],t[x++],t[x],t[x+1],i,l,f))return!0}else d+=n(m,g,t[x++],t[x++],t[x++],t[x++],t[x],t[x+1],l,f)||0;m=t[x++],g=t[x++];break;case s.Q:if(o){if(c.containStroke(m,g,t[x++],t[x++],t[x],t[x+1],i,l,f))return!0}else d+=r(m,g,t[x++],t[x++],t[x],t[x+1],l,f)||0;m=t[x++],g=t[x++];break;case s.A:var w=t[x++],M=t[x++],S=t[x++],T=t[x++],C=t[x++],P=t[x++],L=(t[x++],1-t[x++]),A=Math.cos(C)*S+w,k=Math.sin(C)*T+M;x>1?d+=p(m,g,A,k,l,f):(y=A,_=k);var z=(l-w)*T/S+w;if(o){if(h.containStroke(w,M,T,C,C+P,L,i,z,f))return!0}else d+=a(w,M,T,C,C+P,L,z,f);m=Math.cos(C+P)*S+w,g=Math.sin(C+P)*T+M;break;case s.R:y=m=t[x++],_=g=t[x++];var D=t[x++],I=t[x++],A=y+D,k=_+I;if(o){if(v(y,_,A,_,i,l,f)||v(A,_,A,k,i,l,f)||v(A,k,y,k,i,l,f)||v(y,k,y,_,i,l,f))return!0}else d+=p(A,_,A,k,l,f),d+=p(y,k,y,_,l,f);break;case s.Z:if(o){if(v(m,g,y,_,i,l,f))return!0}else d+=p(m,g,y,_,l,f);m=y,g=_}}return o||e(g,_)||(d+=p(m,g,y,_,l,f)||0),0!==d}var s=t("../core/PathProxy").CMD,l=t("./line"),u=t("./cubic"),c=t("./quadratic"),h=t("./arc"),f=t("./util").normalizeRadian,d=t("../core/curve"),p=t("./windingLine"),v=l.containStroke,m=2*Math.PI,g=1e-4,y=[-1,-1,-1],_=[-1,-1];return{contain:function(t,e,i){return o(t,0,!1,e,i)},containStroke:function(t,e,i,n){return o(t,e,!0,i,n)}}}),e("zrender/vml/core",[Le,"exports","module","../core/env"],function(t,e,i){if(!t("../core/env")[ge]){var n,r="urn:schemas-microsoft-com:vml",a=window,o=a.document,s=!1;try{!o.namespaces.zrvml&&o.namespaces.add("zrvml",r),n=function(t){return o[L]("<zrvml:"+t+' class="zrvml">')}}catch(l){n=function(t){return o[L]("<"+t+' xmlns="'+r+'" class="zrvml">')}}var u=function(){if(!s){s=!0;var t=o.styleSheets;t[re]<31?o.createStyleSheet().addRule(".zrvml","behavior:url(#default#VML)"):t[0].addRule(".zrvml","behavior:url(#default#VML)")}};i.exports={doc:o,initVML:u,createNode:n}}}),e("zrender/graphic/Pattern",[Le],function(){var t=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};return t[Se].getCanvasPattern=function(t){return this._canvasPattern||(this._canvasPattern=t.createPattern(this.image,this.repeat))},t}),e("echarts/scale/Ordinal",[Le,Ce,"./Scale"],function(t){var e=t(Ce),i=t("./Scale"),n=i[Se],r=i[oe]({type:"ordinal",init:function(t,e){this._data=t,this._extent=e||[0,t[re]-1]},parse:function(t){return typeof t===Me?e[W](this._data,t):Math.round(t)},contain:function(t){return t=this.parse(t),n[D].call(this,t)&&null!=this._data[t]},normalize:function(t){return n.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(n.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,i=e[0];i<=e[1];)t.push(i),i++;return t},getLabel:function(t){return this._data[t]},count:function(){return this._extent[1]-this._extent[0]+1},niceTicks:e.noop,niceExtent:e.noop});return r[fe]=function(){return new r},r}),e("echarts/model/mixin/makeStyleMapper",[Le,Ce],function(t){var e=t(Ce);return function(t){for(var i=0;i<t[re];i++)t[i][1]||(t[i][1]=t[i][0]);return function(i){for(var n={},r=0;r<t[re];r++){var a=t[r][1];if(!(i&&e[W](i,a)>=0)){var o=this[M](a);null!=o&&(n[t[r][0]]=o)}}return n}}}),e("zrender/core/bbox",[Le,"./vector","./curve"],function(t){var e=t("./vector"),i=t("./curve"),n={},r=Math.min,a=Math.max,o=Math.sin,s=Math.cos,l=e[fe](),u=e[fe](),c=e[fe](),h=2*Math.PI;n.fromPoints=function(t,e,i){if(0!==t[re]){var n,o=t[0],s=o[0],l=o[0],u=o[1],c=o[1];for(n=1;n<t[re];n++)o=t[n],s=r(s,o[0]),l=a(l,o[0]),u=r(u,o[1]),c=a(c,o[1]);e[0]=s,e[1]=u,i[0]=l,i[1]=c}},n.fromLine=function(t,e,i,n,o,s){o[0]=r(t,i),o[1]=r(e,n),s[0]=a(t,i),s[1]=a(e,n)};var f=[],d=[];return n.fromCubic=function(t,e,n,o,s,l,u,c,h,p){var v,m=i.cubicExtrema,g=i.cubicAt,y=m(t,n,s,u,f);for(h[0]=1/0,h[1]=1/0,p[0]=-1/0,p[1]=-1/0,v=0;y>v;v++){var _=g(t,n,s,u,f[v]);h[0]=r(_,h[0]),p[0]=a(_,p[0])}for(y=m(e,o,l,c,d),v=0;y>v;v++){var x=g(e,o,l,c,d[v]);h[1]=r(x,h[1]),p[1]=a(x,p[1])}h[0]=r(t,h[0]),p[0]=a(t,p[0]),h[0]=r(u,h[0]),p[0]=a(u,p[0]),h[1]=r(e,h[1]),p[1]=a(e,p[1]),h[1]=r(c,h[1]),p[1]=a(c,p[1])},n.fromQuadratic=function(t,e,n,o,s,l,u,c){var h=i.quadraticExtremum,f=i.quadraticAt,d=a(r(h(t,n,s),1),0),p=a(r(h(e,o,l),1),0),v=f(t,n,s,d),m=f(e,o,l,p);u[0]=r(t,s,v),u[1]=r(e,l,m),c[0]=a(t,s,v),c[1]=a(e,l,m)},n.fromArc=function(t,i,n,r,a,f,d,p,v){var m=e.min,g=e.max,y=Math.abs(a-f);if(1e-4>y%h&&y>1e-4)return p[0]=t-n,p[1]=i-r,v[0]=t+n,void(v[1]=i+r);if(l[0]=s(a)*n+t,l[1]=o(a)*r+i,u[0]=s(f)*n+t,u[1]=o(f)*r+i,m(p,l,u),g(v,l,u),a%=h,0>a&&(a+=h),f%=h,0>f&&(f+=h),a>f&&!d?f+=h:f>a&&d&&(a+=h),d){var _=f;f=a,a=_}for(var x=0;f>x;x+=Math.PI/2)x>a&&(c[0]=s(x)*n+t,c[1]=o(x)*r+i,m(p,c,p),g(v,c,v))},n}),e("zrender/core/curve",[Le,"./vector"],function(t){function e(t){return t>-x&&x>t}function i(t){return t>x||-x>t}function n(t,e,i,n,r){var a=1-r;return a*a*(a*t+3*r*e)+r*r*(r*n+3*a*i)}function r(t,e,i,n,r){var a=1-r;return 3*(((e-t)*a+2*(i-e)*r)*a+(n-i)*r*r)}function a(t,i,n,r,a,o){var s=r+3*(i-n)-t,l=3*(n-2*i+t),u=3*(i-t),c=t-a,h=l*l-3*s*u,f=l*u-9*s*c,d=u*u-3*l*c,p=0;if(e(h)&&e(f))if(e(l))o[0]=0;else{var v=-u/l;v>=0&&1>=v&&(o[p++]=v)}else{var m=f*f-4*h*d;if(e(m)){var g=f/h,v=-l/s+g,x=-g/2;v>=0&&1>=v&&(o[p++]=v),x>=0&&1>=x&&(o[p++]=x)}else if(m>0){var b=_(m),S=h*l+1.5*s*(-f+b),T=h*l+1.5*s*(-f-b);S=0>S?-y(-S,M):y(S,M),T=0>T?-y(-T,M):y(T,M);var v=(-l-(S+T))/(3*s);v>=0&&1>=v&&(o[p++]=v)}else{var C=(2*h*l-3*s*f)/(2*_(h*h*h)),P=Math.acos(C)/3,L=_(h),A=Math.cos(P),v=(-l-2*L*A)/(3*s),x=(-l+L*(A+w*Math.sin(P)))/(3*s),k=(-l+L*(A-w*Math.sin(P)))/(3*s);v>=0&&1>=v&&(o[p++]=v),x>=0&&1>=x&&(o[p++]=x),k>=0&&1>=k&&(o[p++]=k)}}return p}function o(t,n,r,a,o){var s=6*r-12*n+6*t,l=9*n+3*a-3*t-9*r,u=3*n-3*t,c=0;if(e(l)){if(i(s)){var h=-u/s;h>=0&&1>=h&&(o[c++]=h)}}else{var f=s*s-4*l*u;if(e(f))o[0]=-s/(2*l);else if(f>0){var d=_(f),h=(-s+d)/(2*l),p=(-s-d)/(2*l);h>=0&&1>=h&&(o[c++]=h),p>=0&&1>=p&&(o[c++]=p)}}return c}function s(t,e,i,n,r,a){var o=(e-t)*r+t,s=(i-e)*r+e,l=(n-i)*r+i,u=(s-o)*r+o,c=(l-s)*r+s,h=(c-u)*r+u;a[0]=t,a[1]=o,a[2]=u,a[3]=h,a[4]=h,a[5]=c,a[6]=l,a[7]=n}function l(t,e,i,r,a,o,s,l,u,c,h){var f,d,p,v,m,y=.005,x=1/0;S[0]=u,S[1]=c;for(var w=0;1>w;w+=.05)T[0]=n(t,i,a,s,w),T[1]=n(e,r,o,l,w),v=g(S,T),x>v&&(f=w,x=v);x=1/0;for(var M=0;32>M&&!(b>y);M++)d=f-y,p=f+y,T[0]=n(t,i,a,s,d),T[1]=n(e,r,o,l,d),v=g(T,S),d>=0&&x>v?(f=d,x=v):(C[0]=n(t,i,a,s,p),C[1]=n(e,r,o,l,p),m=g(C,S),1>=p&&x>m?(f=p,x=m):y*=.5);return h&&(h[0]=n(t,i,a,s,f),h[1]=n(e,r,o,l,f)),_(x)}function u(t,e,i,n){var r=1-n;return r*(r*t+2*n*e)+n*n*i}function c(t,e,i,n){return 2*((1-n)*(e-t)+n*(i-e))}function h(t,n,r,a,o){var s=t-2*n+r,l=2*(n-t),u=t-a,c=0;if(e(s)){if(i(l)){var h=-u/l;h>=0&&1>=h&&(o[c++]=h)}}else{var f=l*l-4*s*u;if(e(f)){var h=-l/(2*s);h>=0&&1>=h&&(o[c++]=h)}else if(f>0){var d=_(f),h=(-l+d)/(2*s),p=(-l-d)/(2*s);h>=0&&1>=h&&(o[c++]=h),p>=0&&1>=p&&(o[c++]=p)}}return c}function f(t,e,i){var n=t+i-2*e;return 0===n?.5:(t-e)/n}function d(t,e,i,n,r){var a=(e-t)*n+t,o=(i-e)*n+e,s=(o-a)*n+a;r[0]=t,r[1]=a,r[2]=s,r[3]=s,r[4]=o,r[5]=i}function p(t,e,i,n,r,a,o,s,l){var c,h=.005,f=1/0;S[0]=o,S[1]=s;for(var d=0;1>d;d+=.05){T[0]=u(t,i,r,d),T[1]=u(e,n,a,d);var p=g(S,T);f>p&&(c=d,f=p)}f=1/0;for(var v=0;32>v&&!(b>h);v++){var m=c-h,y=c+h;T[0]=u(t,i,r,m),T[1]=u(e,n,a,m);var p=g(T,S);if(m>=0&&f>p)c=m,f=p;else{C[0]=u(t,i,r,y),C[1]=u(e,n,a,y);var x=g(C,S);1>=y&&f>x?(c=y,f=x):h*=.5}}return l&&(l[0]=u(t,i,r,c),l[1]=u(e,n,a,c)),_(f)}var v=t("./vector"),m=v[fe],g=v.distSquare,y=Math.pow,_=Math.sqrt,x=1e-8,b=1e-4,w=_(3),M=1/3,S=m(),T=m(),C=m();return{cubicAt:n,cubicDerivativeAt:r,cubicRootAt:a,cubicExtrema:o,cubicSubdivide:s,cubicProjectPoint:l,quadraticAt:u,quadraticDerivativeAt:c,quadraticRootAt:h,quadraticExtremum:f,quadraticSubdivide:d,quadraticProjectPoint:p}}),e("zrender/config",[],function(){var t=1;typeof window!==A&&(t=Math.max(window.devicePixelRatio||1,1));var e={debugMode:0,devicePixelRatio:t};return e}),e("zrender/Element",[Le,"./core/guid","./mixin/Eventful","./mixin/Transformable","./mixin/Animatable","./core/util"],function(t){var e=t("./core/guid"),i=t("./mixin/Eventful"),n=t("./mixin/Transformable"),a=t("./mixin/Animatable"),o=t("./core/util"),s=function(t){n.call(this,t),i.call(this,t),a.call(this,t),this.id=t.id||e()};return s[Se]={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var i=this[r];i||(i=this[r]=[1,0,0,1,0,0]),i[4]+=t,i[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(){},attrKV:function(t,e){if(t===E||"scale"===t||"origin"===t){if(e){var i=this[t];i||(i=this[t]=[]),i[0]=e[0],i[1]=e[1]}}else this[t]=e},hide:function(){this[ve]=!0,this.__zr&&this.__zr.refresh()},show:function(){this[ve]=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if(typeof t===Me)this.attrKV(t,e);else if(o[le](t))for(var i in t)t.hasOwnProperty(i)&&this.attrKV(i,t[i]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)
},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var i=0;i<e[re];i++)t[be].addAnimator(e[i]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var i=0;i<e[re];i++)t[be].removeAnimator(e[i]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},o.mixin(s,a),o.mixin(s,n),o.mixin(s,i),s}),e("zrender/graphic/Style",[Le],function(){function t(t,e,i){var n=e.x,r=e.x2,a=e.y,o=e.y2;e.global||(n=n*i.width+i.x,r=r*i.width+i.x,a=a*i[de]+i.y,o=o*i[de]+i.y);var s=t.createLinearGradient(n,a,r,o);return s}function e(t,e,i){var n=i.width,r=i[de],a=Math.min(n,r),o=e.x,s=e.y,l=e.r;e.global||(o=o*n+i.x,s=s*r+i.y,l*=a);var u=t.createRadialGradient(o,s,0,o,s,l);return u}var i=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],n=function(t){this.extendFrom(t)};n[Se]={constructor:n,fill:"#000000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,textFill:"#000",textStroke:null,textPosition:"inside",textBaseline:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textTransform:!1,textRotation:0,blend:null,bind:function(t,e,n){for(var r=this,a=n&&n.style,o=!a,s=0;s<i[re];s++){var l=i[s],u=l[0];(o||r[u]!==a[u])&&(t[u]=r[u]||l[1])}if((o||r.fill!==a.fill)&&(t.fillStyle=r.fill),(o||r[g]!==a[g])&&(t.strokeStyle=r[g]),(o||r[O]!==a[O])&&(t.globalAlpha=null==r[O]?1:r[O]),(o||r.blend!==a.blend)&&(t.globalCompositeOperation=r.blend||"source-over"),this.hasStroke()){var c=r[y];t[y]=c/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this[g];return null!=t&&"none"!==t&&this[y]>0},extendFrom:function(t,e){if(t){var i=this;for(var n in t)!t.hasOwnProperty(n)||!e&&i.hasOwnProperty(n)||(i[n]=t[n])}},set:function(t,e){typeof t===Me?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(i,n,r){for(var a="radial"===n.type?e:t,o=a(i,n,r),s=n.colorStops,l=0;l<s[re];l++)o.addColorStop(s[l].offset,s[l].color);return o}};for(var r=n[Se],a=0;a<i[re];a++){var o=i[a];o[0]in r||(r[o[0]]=o[1])}return n.getGradient=r.getGradient,n}),e("echarts/coord/cartesian/Cartesian",[Le,Ce],function(t){function e(t){return this._axes[t]}var i=t(Ce),n=function(t){this._axes={},this._dimList=[],this.name=t||""};return n[Se]={constructor:n,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return i.map(this._dimList,e,this)},getAxesByScale:function(t){return t=t[Te](),i[U](this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,l)},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var i=this._dimList,n=t instanceof Array?[]:{},r=0;r<i[re];r++){var a=i[r],o=this._axes[a];n[a]=o[e](t[a])}return n}},n}),e("echarts/util/component",[Le,Ce,"./clazz"],function(t){var e=t(Ce),i=t("./clazz"),n=i.parseClassType,r=0,a={},o="_";return a.getUID=function(t){return[t||"",r++,Math.random()].join(o)},a.enableSubTypeDefaulter=function(t){var e={};return t.registerSubTypeDefaulter=function(t,i){t=n(t),e[t.main]=i},t.determineSubType=function(i,r){var a=r.type;if(!a){var o=n(i).main;t.hasSubTypes(i)&&e[o]&&(a=e[o](r))}return a},t},a.enableTopologicalTravel=function(t,i){function n(t){var n={},o=[];return e.each(t,function(s){var l=r(n,s),u=l.originalDeps=i(s),c=a(u,t);l.entryCount=c[re],0===l.entryCount&&o.push(s),e.each(c,function(t){e[W](l.predecessor,t)<0&&l.predecessor.push(t);var i=r(n,t);e[W](i.successor,t)<0&&i.successor.push(s)})}),{graph:n,noEntryList:o}}function r(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function a(t,i){var n=[];return e.each(t,function(t){e[W](i,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,i,r,a){function o(t){u[t].entryCount--,0===u[t].entryCount&&c.push(t)}function s(t){h[t]=!0,o(t)}if(t[re]){var l=n(i),u=l.graph,c=l.noEntryList,h={};for(e.each(t,function(t){h[t]=!0});c[re];){var f=c.pop(),d=u[f],p=!!h[f];p&&(r.call(a,f,d.originalDeps.slice()),delete h[f]),e.each(d.successor,p?s:o)}e.each(h,function(){throw new Error("Circle dependency may exists")})}}},a}),e("echarts/model/mixin/boxLayout",[Le],function(){return{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get(pe),width:this.get("width"),height:this.get(de)}}}}),e("zrender/core/guid",[],function(){var t=2311;return function(){return t++}}),e("zrender/mixin/Transformable",[Le,"../core/matrix","../core/vector"],function(t){function e(t){return t>o||-o>t}var i=t("../core/matrix"),n=t("../core/vector"),a=i.identity,o=5e-5,s=function(t){t=t||{},t[E]||(this[E]=[0,0]),null==t[v]&&(this[v]=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},l=s[Se];l[r]=null,l.needLocalTransform=function(){return e(this[v])||e(this[E][0])||e(this[E][1])||e(this.scale[0]-1)||e(this.scale[1]-1)},l.updateTransform=function(){var t=this.parent,e=t&&t[r],n=this.needLocalTransform(),o=this[r];return n||e?(o=o||i[fe](),n?this.getLocalTransform(o):a(o),e&&(n?i.mul(o,t[r],o):i.copy(o,t[r])),this[r]=o,this.invTransform=this.invTransform||i[fe](),void i.invert(this.invTransform,o)):void(o&&a(o))},l.getLocalTransform=function(t){t=t||[],a(t);var e=this.origin,n=this.scale,r=this[v],o=this[E];return e&&(t[4]-=e[0],t[5]-=e[1]),i.scale(t,t,n),r&&i.rotate(t,t,r),e&&(t[4]+=e[0],t[5]+=e[1]),t[4]+=o[0],t[5]+=o[1],t},l.setTransform=function(t){var e=this[r],i=t.dpr||1;e?t.setTransform(i*e[0],i*e[1],i*e[2],i*e[3],i*e[4],i*e[5]):t.setTransform(i,0,0,i,0,0)},l.restoreTransform=function(t){var e=(this[r],t.dpr||1);t.setTransform(e,0,0,e,0,0)};var u=[];return l.decomposeTransform=function(){if(this[r]){var t=this.parent,n=this[r];t&&t[r]&&(i.mul(u,t.invTransform,n),n=u);var a=n[0]*n[0]+n[1]*n[1],o=n[2]*n[2]+n[3]*n[3],s=this[E],l=this.scale;e(a-1)&&(a=Math.sqrt(a)),e(o-1)&&(o=Math.sqrt(o)),n[0]<0&&(a=-a),n[3]<0&&(o=-o),s[0]=n[4],s[1]=n[5],l[0]=a,l[1]=o,this[v]=Math.atan2(-n[1]/o,n[0]/a)}},l.getGlobalScale=function(){var t=this[r];if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),i=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(i=-i),[e,i]},l.transformCoordToLocal=function(t,e){var i=[t,e],r=this.invTransform;return r&&n[_](i,i,r),i},l.transformCoordToGlobal=function(t,e){var i=[t,e],a=this[r];return a&&n[_](i,i,a),i},s}),e("echarts/coord/Axis",[Le,"../util/number",Ce],function(t){function e(t,e){var i=t[1]-t[0],n=e,r=i/n/2;t[0]+=r,t[1]-=r}var i=t("../util/number"),n=i.linearMap,r=t(Ce),a=[0,1],o=function(t,e,i){this.dim=t,this.scale=e,this._extent=i||[0,0],this.inverse=!1,this.onBand=!1};return o[Se]={constructor:o,contain:function(t){var e=this._extent,i=Math.min(e[0],e[1]),n=Math.max(e[0],e[1]);return t>=i&&n>=t},containData:function(t){return this[D](this[l](t))},getExtent:function(){var t=this._extent.slice();return t},getPixelPrecision:function(t){return i.getPixelPrecision(t||this.scale[k](),this._extent)},setExtent:function(t,e){var i=this._extent;i[0]=t,i[1]=e},dataToCoord:function(t,i){var r=this._extent,o=this.scale;return t=o.normalize(t),this.onBand&&o.type===C&&(r=r.slice(),e(r,o.count())),n(t,a,r,i)},coordToData:function(t,i){var r=this._extent,o=this.scale;this.onBand&&o.type===C&&(r=r.slice(),e(r,o.count()));var s=n(t,r,a,i);return this.scale.scale(s)},getTicksCoords:function(t){if(this.onBand&&!t){for(var e=this.getBands(),i=[],n=0;n<e[re];n++)i.push(e[n][0]);return e[n-1]&&i.push(e[n-1][1]),i}return r.map(this.scale[z](),this[l],this)},getLabelsCoords:function(){return r.map(this.scale[z](),this[l],this)},getBands:function(){for(var t=this[k](),e=[],i=this.scale.count(),n=t[0],r=t[1],a=r-n,o=0;i>o;o++)e.push([a*o/i+n,a*(o+1)/i+n]);return e},getBandWidth:function(){var t=this._extent,e=this.scale[k](),i=e[1]-e[0]+(this.onBand?1:0);0===i&&(i=1);var n=Math.abs(t[1]-t[0]);return Math.abs(n)/i}},o}),e("zrender/mixin/Animatable",[Le,"../animation/Animator","../core/util","../core/log"],function(t){var e=t("../animation/Animator"),i=t("../core/util"),n=i.isString,r=i.isFunction,a=i[le],o=t("../core/log"),s=function(){this.animators=[]};return s[Se]={constructor:s,animate:function(t,n){var r,a=!1,s=this,l=this.__zr;if(t){var u=t.split("."),c=s;a="shape"===u[0];for(var h=0,f=u[re];f>h;h++)c&&(c=c[u[h]]);c&&(r=c)}else r=s;if(!r)return void o('Property "'+t+'" is not existed in element '+s.id);var d=s.animators,p=new e(r,n);return p.during(function(){s.dirty(a)}).done(function(){d[ie](i[W](d,p),1)}),d.push(p),l&&l[be].addAnimator(p),p},stopAnimation:function(t){for(var e=this.animators,i=e[re],n=0;i>n;n++)e[n].stop(t);return e[re]=0,this},animateTo:function(t,e,i,a,o){function s(){u--,u||o&&o()}n(i)?(o=a,a=i,i=0):r(a)?(o=a,a="linear",i=0):r(i)?(o=i,i=0):r(e)?(o=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,i,a,o);var l=this.animators.slice(),u=l[re];u||o&&o();for(var c=0;c<l[re];c++)l[c].done(s).start(a)},_animateToShallow:function(t,e,n,r,o){var s={},l=0;for(var u in n)if(null!=e[u])a(n[u])&&!i.isArrayLike(n[u])?this._animateToShallow(t?t+"."+u:u,e[u],n[u],r,o):(s[u]=n[u],l++);else if(null!=n[u])if(t){var c={};c[t]={},c[t][u]=n[u],this.attr(c)}else this.attr(u,n[u]);return l>0&&this.animate(t,!1).when(null==r?500:r,s).delay(o||0),this}},s}),e("echarts/coord/cartesian/axisLabelInterval",[Le,Ce,"../axisHelper"],function(t){var e=t(Ce),i=t("../axisHelper");return function(t){var n=t.model,r=n[xe]("axisLabel"),a=r.get("interval");return t.type!==s||"auto"!==a?"auto"===a?0:a:i.getAxisLabelInterval(e.map(t.scale[z](),t[l],t),n.getFormattedLabels(),r[xe](V)[G](),t.isHorizontal())}}),e("zrender/animation/Animator",[Le,"./Clip","../tool/color","../core/util"],function(t){function e(t,e){return t[e]}function i(t,e,i){t[e]=i}function n(t,e,i){return(e-t)*i+t}function r(t,e,i){return i>.5?e:t}function a(t,e,i,r,a){var o=t[re];if(1==a)for(var s=0;o>s;s++)r[s]=n(t[s],e[s],i);else for(var l=t[0][re],s=0;o>s;s++)for(var u=0;l>u;u++)r[s][u]=n(t[s][u],e[s][u],i)}function o(t,e,i){var n=t[re],r=e[re];if(n!==r){var a=n>r;if(a)t[re]=r;else for(var o=n;r>o;o++)t.push(1===i?e[o]:g.call(e[o]))}for(var s=t[0]&&t[0][re],o=0;o<t[re];o++)if(1===i)isNaN(t[o])&&(t[o]=e[o]);else for(var l=0;s>l;l++)isNaN(t[o][l])&&(t[o][l]=e[o][l])}function s(t,e,i){if(t===e)return!0;var n=t[re];if(n!==e[re])return!1;if(1===i){for(var r=0;n>r;r++)if(t[r]!==e[r])return!1}else for(var a=t[0][re],r=0;n>r;r++)for(var o=0;a>o;o++)if(t[r][o]!==e[r][o])return!1;return!0}function l(t,e,i,n,r,a,o,s,l){var c=t[re];if(1==l)for(var h=0;c>h;h++)s[h]=u(t[h],e[h],i[h],n[h],r,a,o);else for(var f=t[0][re],h=0;c>h;h++)for(var d=0;f>d;d++)s[h][d]=u(t[h][d],e[h][d],i[h][d],n[h][d],r,a,o)}function u(t,e,i,n,r,a,o){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*o+(-3*(e-i)-2*s-l)*a+s*r+e}function c(t){if(m(t)){var e=t[re];if(m(t[0])){for(var i=[],n=0;e>n;n++)i.push(g.call(t[n]));return i}return g.call(t)}return t}function h(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function f(t,e,i,c,f){var v=t._getter,g=t._setter,y="spline"===e,_=c[re];if(_){var x,b=c[0].value,w=m(b),M=!1,S=!1,T=w&&m(b[0])?2:1;c.sort(function(t,e){return t.time-e.time}),x=c[_-1].time;for(var C=[],P=[],L=c[0].value,A=!0,k=0;_>k;k++){C.push(c[k].time/x);var z=c[k].value;if(w&&s(z,L,T)||!w&&z===L||(A=!1),L=z,typeof z==Me){var D=p.parse(z);D?(z=D,M=!0):S=!0}P.push(z)}if(!A){for(var I=P[_-1],k=0;_-1>k;k++)w?o(P[k],I,T):!isNaN(P[k])||isNaN(I)||S||M||(P[k]=I);w&&o(v(t._target,f),I,T);var O,E,R,B,N,G,F=0,V=0;if(M)var H=[0,0,0,0];var q=function(t,e){var i;if(0>e)i=0;else if(V>e){for(O=Math.min(F+1,_-1),i=O;i>=0&&!(C[i]<=e);i--);i=Math.min(i,_-2)}else{for(i=F;_>i&&!(C[i]>e);i++);i=Math.min(i-1,_-2)}F=i,V=e;var o=C[i+1]-C[i];if(0!==o)if(E=(e-C[i])/o,y)if(B=P[i],R=P[0===i?i:i-1],N=P[i>_-2?_-1:i+1],G=P[i>_-3?_-1:i+2],w)l(R,B,N,G,E,E*E,E*E*E,v(t,f),T);else{var s;if(M)s=l(R,B,N,G,E,E*E,E*E*E,H,1),s=h(H);else{if(S)return r(B,N,E);s=u(R,B,N,G,E,E*E,E*E*E)}g(t,f,s)}else if(w)a(P[i],P[i+1],E,v(t,f),T);else{var s;if(M)a(P[i],P[i+1],E,H,1),s=h(H);else{if(S)return r(P[i],P[i+1],E);s=n(P[i],P[i+1],E)}g(t,f,s)}},W=new d({target:t._target,life:x,loop:t._loop,delay:t._delay,onframe:q,ondestroy:i});return e&&"spline"!==e&&(W.easing=e),W}}}var d=t("./Clip"),p=t("../tool/color"),v=t("../core/util"),m=v.isArrayLike,g=Array[Se].slice,y=function(t,n,r,a){this._tracks={},this._target=t,this._loop=n||!1,this._getter=r||e,this._setter=a||i,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};return y[Se]={when:function(t,e){var i=this._tracks;for(var n in e){if(!i[n]){i[n]=[];var r=this._getter(this._target,n);if(null==r)continue;0!==t&&i[n].push({time:0,value:c(r)})}i[n].push({time:t,value:e[n]})}return this},during:function(t){return this._onframeList.push(t),this},_doneCallback:function(){this._tracks={},this._clipList[re]=0;for(var t=this._doneList,e=t[re],i=0;e>i;i++)t[i].call(this)},start:function(t){var e,i=this,n=0,r=function(){n--,n||i._doneCallback()};for(var a in this._tracks){var o=f(this,t,r,this._tracks[a],a);o&&(this._clipList.push(o),n++,this[be]&&this[be].addClip(o),e=o)}if(e){var s=e.onframe;e.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList[re];n++)i._onframeList[n](t,e)}}return n||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,i=this[be],n=0;n<e[re];n++){var r=e[n];t&&r.onframe(this._target,1),i&&i.removeClip(r)}e[re]=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}},y}),e("zrender/core/log",[Le,"../config"],function(t){var e=t("../config");return function(){if(0!==e.debugMode)if(1==e.debugMode)for(var t in arguments)throw new Error(arguments[t]);else if(e.debugMode>1)for(var t in arguments)console.log(arguments[t])}}),e("echarts/coord/cartesian/AxisModel",[Le,"../../model/Component",Ce,"../axisModelCreator","../axisModelCommonMixin"],function(t){function e(t,e){return e.type||(e.data?s:"value")}var i=t("../../model/Component"),n=t(Ce),r=t("../axisModelCreator"),a=i[oe]({type:"cartesian2dAxis",axis:null,init:function(){a.superApply(this,"init",arguments),this._resetRange()},mergeOption:function(){a.superApply(this,"mergeOption",arguments),this._resetRange()},restoreData:function(){a.superApply(this,"restoreData",arguments),this._resetRange()},setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},getMin:function(){var t=this.option;return null!=t.rangeStart?t.rangeStart:t.min},getMax:function(){var t=this.option;return null!=t.rangeEnd?t.rangeEnd:t.max},getNeedCrossZero:function(){var t=this.option;return null!=t.rangeStart||null!=t.rangeEnd?!1:!t.scale},findGridModel:function(){return this[w].queryComponents({mainType:"grid",index:this.get("gridIndex"),id:this.get("gridId")})[0]},_resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}});n.merge(a[Se],t("../axisModelCommonMixin"));var o={offset:0};return r("x",a,e,o),r("y",a,e,o),a}),e("zrender/animation/Clip",[Le,"./easing"],function(t){function e(t){this._target=t[te],this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null==t.loop?!1:t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart}var i=t("./easing");return e[Se]={constructor:e,step:function(t){this._initialized||(this._startTime=t+this._delay,this._initialized=!0);var e=(t-this._startTime)/this._life;if(!(0>e)){e=Math.min(e,1);var n=this.easing,r=typeof n==Me?i[n]:n,a=typeof r===j?r(e):e;return this.fire("frame",a),1==e?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}},restart:function(t){var e=(t-this._startTime)%this._life;this._startTime=t-e+this.gap,this._needsRemove=!1},fire:function(t,e){t="on"+t,this[t]&&this[t](this._target,e)}},e}),e("echarts/coord/axisModelCreator",[Le,"./axisDefault",Ce,"../model/Component","../util/layout"],function(t){var e=t("./axisDefault"),i=t(Ce),n=t("../model/Component"),r=t("../util/layout"),a=["value",s,"time","log"];return function(t,o,s,l){i.each(a,function(n){o[oe]({type:t+"Axis."+n,mergeDefaultAndTheme:function(e,a){var o=this.layoutMode,l=o?r.getLayoutParams(e):{},u=a.getTheme();i.merge(e,u.get(n+"Axis")),i.merge(e,this.getDefaultOption()),e.type=s(t,e),o&&r.mergeLayoutParam(e,l,o)},defaultOption:i.mergeAll([{},e[n+"Axis"],l],!0)})}),n.registerSubTypeDefaulter(t+"Axis",i.curry(s,t))}}),e("echarts/coord/axisModelCommonMixin",[Le,Ce,"./axisHelper"],function(t){function e(t){return r[le](t)&&null!=t.value?t.value:t}function i(){return this.get("type")===s&&r.map(this.get("data"),e)}function n(){return a.getFormattedLabels(this.axis,this.get("axisLabel.formatter"))}var r=t(Ce),a=t("./axisHelper");return{getFormattedLabels:n,getCategories:i}}),e("zrender/animation/easing",[],function(){var t={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),-(i*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/n)))},elasticOut:function(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/n)+1)},elasticInOut:function(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?-.5*i*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/n):i*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/n)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?.5*t*t*((e+1)*t-e):.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(e){return 1-t.bounceOut(1-e)},bounceOut:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(e){return.5>e?.5*t.bounceIn(2*e):.5*t.bounceOut(2*e-1)+.5}};return t}),e("echarts/coord/axisDefault",[Le,Ce],function(t){var e=t(Ce),i={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisLine:{show:!0,onZero:!0,lineStyle:{color:"#333",width:1,type:"solid"}},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},n=e.merge({boundaryGap:!0,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},i),r=e.merge({boundaryGap:[0,0],splitNumber:5},i),a=e[ae]({scale:!0,min:"dataMin",max:"dataMax"},r),o=e[ae]({logBase:10},r);return o.scale=!0,{categoryAxis:n,valueAxis:r,timeAxis:a,logAxis:o}}),e("zrender/contain/line",[],function(){return{containStroke:function(t,e,i,n,r,a,o){if(0===r)return!1;var s=r,l=0,u=t;if(o>e+s&&o>n+s||e-s>o&&n-s>o||a>t+s&&a>i+s||t-s>a&&i-s>a)return!1;if(t===i)return Math.abs(a-t)<=s/2;l=(e-n)/(t-i),u=(t*n-i*e)/(t-i);var c=l*a-o+u,h=c*c/(l*l+1);return s/2*s/2>=h}}}),e("zrender/contain/cubic",[Le,"../core/curve"],function(t){var e=t("../core/curve");return{containStroke:function(t,i,n,r,a,o,s,l,u,c,h){if(0===u)return!1;var f=u;if(h>i+f&&h>r+f&&h>o+f&&h>l+f||i-f>h&&r-f>h&&o-f>h&&l-f>h||c>t+f&&c>n+f&&c>a+f&&c>s+f||t-f>c&&n-f>c&&a-f>c&&s-f>c)return!1;var d=e.cubicProjectPoint(t,i,n,r,a,o,s,l,c,h,null);return f/2>=d}}}),e("zrender/contain/arc",[Le,"./util"],function(t){var e=t("./util").normalizeRadian,i=2*Math.PI;return{containStroke:function(t,n,r,a,o,s,l,u,c){if(0===l)return!1;var h=l;u-=t,c-=n;var f=Math.sqrt(u*u+c*c);if(f-h>r||r>f+h)return!1;if(Math.abs(a-o)%i<1e-4)return!0;if(s){var d=a;a=e(o),o=e(d)}else a=e(a),o=e(o);a>o&&(o+=i);var p=Math.atan2(c,u);return 0>p&&(p+=i),p>=a&&o>=p||p+i>=a&&o>=p+i}}}),e("zrender/contain/quadratic",[Le,"../core/curve"],function(t){var e=t("../core/curve");return{containStroke:function(t,i,n,r,a,o,s,l,u){if(0===s)return!1;var c=s;if(u>i+c&&u>r+c&&u>o+c||i-c>u&&r-c>u&&o-c>u||l>t+c&&l>n+c&&l>a+c||t-c>l&&n-c>l&&a-c>l)return!1;var h=e.quadraticProjectPoint(t,i,n,r,a,o,l,u,null);return c/2>=h}}}),e("zrender/contain/util",[Le],function(){var t=2*Math.PI;return{normalizeRadian:function(e){return e%=t,0>e&&(e+=t),e}}}),e("zrender/contain/windingLine",[],function(){return function(t,e,i,n,r,a){if(a>e&&a>n||e>a&&n>a)return 0;if(n===e)return 0;var o=e>n?1:-1,s=(a-e)/(n-e);(1===s||0===s)&&(o=e>n?.5:-.5);var l=s*(i-t)+t;return l>r?o:0}}),e("zrender/core/LRU",[Le],function(){var t=function(){this.head=null,this.tail=null,this._len=0},e=t[Se];e.insert=function(t){var e=new i(t);return this.insertEntry(e),e},e.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,this.tail=t):this.head=this.tail=t,this._len++},e[se]=function(t){var e=t.prev,i=t.next;e?e.next=i:this.head=i,i?i.prev=e:this.tail=e,t.next=t.prev=null,this._len--},e.len=function(){return this._len};var i=function(t){this.value=t,this.next,this.prev},n=function(e){this._list=new t,this._map={},this._maxSize=e||10},r=n[Se];return r.put=function(t,e){var i=this._list,n=this._map;if(null==n[t]){var r=i.len();if(r>=this._maxSize&&r>0){var a=i.head;i[se](a),delete n[a.key]}var o=i.insert(e);o.key=t,n[t]=o}},r.get=function(t){var e=this._map[t],i=this._list;return null!=e?(e!==i.tail&&(i[se](e),i.insertEntry(e)),e.value):void 0},r.clear=function(){this._list.clear(),this._map={}},n}),e("echarts/chart/helper/createListFromArray",[Le,"../../data/List","../../data/helper/completeDimensions",Ce,"../../util/model","../../CoordinateSystem"],function(t){function e(t){for(var e=0;e<t[re]&&null==t[e];)e++;return t[e]}function i(t){var i=e(t);return null!=i&&!h[X](p(i))}function n(t,e,n){t=t||[];var r=e.get(I),a=m[r],s=d.get(r),g=a&&a(t,e,n),y=g&&g[u];y||(y=s&&s[u]||["x","y"],y=c(y,t,y.concat(["value"])));var _=g?g.categoryIndex:-1,x=new l(y,e),b=o(g,t),w={},M=_>=0&&i(t)?function(t,e,i,n){return f.isDataItemOption(t)&&(x.hasItemOption=!0),n===_?i:v(p(t),y[n])}:function(t,e,i,n){var r=p(t),a=v(r&&r[n],y[n]);f.isDataItemOption(t)&&(x.hasItemOption=!0);var o=g&&g.categoryAxesModels;return o&&o[e]&&typeof a===Me&&(w[e]=w[e]||o[e].getCategories(),a=h[W](w[e],a),0>a&&!isNaN(a)&&(a=+a)),a};return x.hasItemOption=!1,x.initData(t,b,M),x}function r(t){return t!==s&&"time"!==t}function a(t){return t===s?C:"time"===t?"time":"float"}function o(t,e){var i,n=[],r=t&&t[u][t.categoryIndex];if(r&&(i=t.categoryAxesModels[r.name]),i){var a=i.getCategories();if(a){var o=e[re];if(h[X](e[0])&&e[0][re]>1){n=[];for(var s=0;o>s;s++)n[s]=a[e[s][t.categoryIndex||0]]}else n=a.slice(0)}}return n}var l=t("../../data/List"),c=t("../../data/helper/completeDimensions"),h=t(Ce),f=t("../../util/model"),d=t("../../CoordinateSystem"),p=f.getDataItemValue,v=f.converDataValue,m={cartesian2d:function(t,e,i){var n=h.map(["xAxis","yAxis"],function(t){return i.queryComponents({mainType:t,index:e.get(t+"Index"),id:e.get(t+"Id")})[0]}),o=n[0],l=n[1],u=o.get("type"),f=l.get("type"),d=[{name:"x",type:a(u),stackable:r(u)},{name:"y",type:a(f),stackable:r(f)}],p=u===s,v=f===s;c(d,t,["x","y","z"]);var m={};return p&&(m.x=o),v&&(m.y=l),{dimensions:d,categoryIndex:p?0:v?1:-1,categoryAxesModels:m}},polar:function(t,e,i){var n=i.queryComponents({mainType:"polar",index:e.get("polarIndex"),id:e.get("polarId")})[0],o=n.findAxisModel("angleAxis"),l=n.findAxisModel("radiusAxis"),u=l.get("type"),h=o.get("type"),f=[{name:"radius",type:a(u),stackable:r(u)},{name:"angle",type:a(h),stackable:r(h)}],d=h===s,p=u===s;c(f,t,["radius","angle","value"]);var v={};return p&&(v.radius=l),d&&(v.angle=o),{dimensions:f,categoryIndex:d?1:p?0:-1,categoryAxesModels:v}},geo:function(t){return{dimensions:c([{name:"lng"},{name:"lat"}],t,["lng","lat","value"])}}};return n}),e("zrender/graphic/helper/poly",[Le,"./smoothSpline","./smoothBezier"],function(t){var e=t("./smoothSpline"),n=t("./smoothBezier");return{buildPath:function(t,r,a){var o=r.points,s=r.smooth;if(o&&o[re]>=2){if(s&&"spline"!==s){var l=n(o,s,a,r.smoothConstraint);t[i](o[0][0],o[0][1]);for(var u=o[re],c=0;(a?u:u-1)>c;c++){var h=l[2*c],f=l[2*c+1],d=o[(c+1)%u];t.bezierCurveTo(h[0],h[1],f[0],f[1],d[0],d[1])}}else{"spline"===s&&(o=e(o,a)),t[i](o[0][0],o[0][1]);for(var c=1,p=o[re];p>c;c++)t.lineTo(o[c][0],o[c][1])}a&&t.closePath()}}}}),e("zrender/Handler",[Le,"./core/util","./mixin/Draggable","./mixin/Eventful"],function(t){function e(t,e,i){return{type:t,event:i,target:e,cancelBubble:!1,offsetX:i.zrX,offsetY:i.zrY,gestureEvent:i.gestureEvent,pinchX:i.pinchX,pinchY:i.pinchY,pinchScale:i.pinchScale,wheelDelta:i.zrDelta}}function i(){}function n(t,e,i){if(t[t.rectHover?"rectContain":D](e,i)){for(var n=t;n;){if(n.silent||n.clipPath&&!n.clipPath[D](e,i))return!1;n=n.parent}return!0}return!1}var r=t("./core/util"),a=t("./mixin/Draggable"),o=t("./mixin/Eventful");i[Se].dispose=function(){};var s=["click","dblclick","mousewheel",ee,"mouseup","mousedown","mousemove"],l=function(t,e,n){o.call(this),this[me]=t,this.painter=e,n=n||new i,this.proxy=n,n.handler=this,this._hovered,this._lastTouchMoment,this._lastX,this._lastY,a.call(this),r.each(s,function(t){n.on&&n.on(t,this[t],this)},this)};return l[Se]={constructor:l,mousemove:function(t){var e=t.zrX,i=t.zrY,n=this.findHover(e,i,null),r=this._hovered,a=this.proxy;this._hovered=n,a.setCursor&&a.setCursor(n?n.cursor:"default"),r&&n!==r&&r.__zr&&this.dispatchToElement(r,ee,t),this.dispatchToElement(n,"mousemove",t),n&&n!==r&&this.dispatchToElement(n,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,ee,t),this.trigger("globalout",{event:t})},resize:function(){this._hovered=null},dispatch:function(t,e){var i=this[t];i&&i.call(this,e)},dispose:function(){this.proxy.dispose(),this[me]=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,i,n){for(var r="on"+i,a=e(i,t,n),o=t;o&&(o[r]&&(a.cancelBubble=o[r].call(o,a)),o.trigger(i,a),o=o.parent,!a.cancelBubble););a.cancelBubble||(this.trigger(i,a),this.painter&&this.painter.eachOtherLayer(function(t){typeof t[r]==j&&t[r].call(t,a),t.trigger&&t.trigger(i,a)}))},findHover:function(t,e,i){for(var r=this[me].getDisplayList(),a=r[re]-1;a>=0;a--)if(!r[a].silent&&r[a]!==i&&!r[a][ve]&&n(r[a],t,e))return r[a]}},r.each(["click","mousedown","mouseup","mousewheel","dblclick"],function(t){l[Se][t]=function(e){var i=this.findHover(e.zrX,e.zrY,null);if("mousedown"===t)this._downel=i,this._upel=i;else if("mosueup"===t)this._upel=i;else if("click"===t&&this._downel!==this._upel)return;this.dispatchToElement(i,t,e)}}),r.mixin(l,o),r.mixin(l,a),l}),e("zrender/Storage",[Le,"./core/util","./core/env","./container/Group","./core/timsort"],function(t){function e(t,e){return t[$]===e[$]?t.z===e.z?t.z2-e.z2:t.z-e.z:t[$]-e[$]}var i=t("./core/util"),r=t("./core/env"),a=t("./container/Group"),o=t("./core/timsort"),s=function(){this._elements={},this._roots=[],this._displayList=[],this._displayListLen=0};return s[Se]={constructor:s,traverse:function(t,e){for(var i=0;i<this._roots[re];i++)this._roots[i][K](t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var i=this._roots,n=this._displayList,a=0,s=i[re];s>a;a++)this._updateAndAddDisplayable(i[a],null,t);n[re]=this._displayListLen,r[ge]&&o(n,e)},_updateAndAddDisplayable:function(t,e,i){if(!t[ve]||i){t.beforeUpdate(),t[n]&&t[he](),t.afterUpdate();var r=t.clipPath;if(r&&(r.parent=t,r.updateTransform(),e?(e=e.slice(),e.push(r)):e=[r]),t.isGroup){for(var a=t._children,o=0;o<a[re];o++){var s=a[o];t[n]&&(s[n]=!0),this._updateAndAddDisplayable(s,e,i)}t[n]=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){this._elements[t.id]||(t instanceof a&&t.addChildrenToStorage(this),this.addToMap(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(var e=0;e<this._roots[re];e++){var n=this._roots[e];n instanceof a&&n.delChildrenFromStorage(this)}return this._elements={},this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var e=0,r=t[re];r>e;e++)this.delRoot(t[e]);else{var o;o=typeof t==Me?this._elements[t]:t;var s=i[W](this._roots,o);s>=0&&(this.delFromMap(o.id),this._roots[ie](s,1),o instanceof a&&o.delChildrenFromStorage(this))}},addToMap:function(t){return t instanceof a&&(t.__storage=this),t.dirty(!1),this._elements[t.id]=t,this},get:function(t){return this._elements[t]},delFromMap:function(t){var e=this._elements,i=e[t];return i&&(delete e[t],i instanceof a&&(i.__storage=null)),this},dispose:function(){this._elements=this._renderList=this._roots=null},displayableSortFunc:e},s}),e("zrender/animation/Animation",[Le,"../core/util","../core/event","./requestAnimationFrame","./Animator"],function(t){var e=t("../core/util"),i=t("../core/event").Dispatcher,n=t("./requestAnimationFrame"),r=t("./Animator"),a=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,i.call(this)};return a[Se]={constructor:a,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t[be]=this;for(var e=t.getClips(),i=0;i<e[re];i++)this.addClip(e[i])},removeClip:function(t){var i=e[W](this._clips,t);i>=0&&this._clips[ie](i,1)},removeAnimator:function(t){for(var e=t.getClips(),i=0;i<e[re];i++)this.removeClip(e[i]);t[be]=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,i=this._clips,n=i[re],r=[],a=[],o=0;n>o;o++){var s=i[o],l=s.step(t);l&&(r.push(l),a.push(s))}for(var o=0;n>o;)i[o]._needsRemove?(i[o]=i[n-1],i.pop(),n--):o++;n=r[re];for(var o=0;n>o;o++)a[o].fire(r[o]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage[he]&&this.stage[he]()},_startLoop:function(){function t(){e._running&&(n(t),!e._paused&&e._update())}var e=this;this._running=!0,n(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)
},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},animate:function(t,e){e=e||{};var i=new r(t,e.loop,e.getter,e.setter);return i}},e.mixin(a,i),a}),e("zrender/dom/HandlerProxy",[Le,"../core/event","../core/util","../mixin/Eventful","../core/env","../core/GestureMgr"],function(t){function e(t){return"mousewheel"===t&&c.browser.firefox?"DOMMouseScroll":t}function i(t,e,i){var n=t._gestureMgr;"start"===i&&n.clear();var r=n.recognize(e,t.handler.findHover(e.zrX,e.zrY,null),t.dom);if("end"===i&&n.clear(),r){var a=r.type;e.gestureEvent=a,t.handler.dispatchToElement(r[te],a,r.event)}}function n(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function r(){return c.touchEventsSupported}function a(t){function e(t,e){return function(){return e._touching?void 0:t.apply(e,arguments)}}for(var i=0;i<g[re];i++){var n=g[i];t._handlers[n]=l.bind(y[n],t)}for(var i=0;i<m[re];i++){var n=m[i];t._handlers[n]=e(y[n],t)}}function o(t){function i(i,n){l.each(i,function(i){f(t,e(i),n._handlers[i])},n)}u.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new h,this._handlers={},a(this),r()&&i(g,this),i(m,this)}var s=t("../core/event"),l=t("../core/util"),u=t("../mixin/Eventful"),c=t("../core/env"),h=t("../core/GestureMgr"),f=s.addEventListener,d=s.removeEventListener,p=s.normalizeEvent,v=300,m=["click","dblclick","mousewheel",ee,"mouseup","mousedown","mousemove"],g=["touchstart","touchend","touchmove"],y={mousemove:function(t){t=p(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){t=p(this.dom,t);var e=t.toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger(ee,t)},touchstart:function(t){t=p(this.dom,t),this._lastTouchMoment=new Date,i(this,t,"start"),y.mousemove.call(this,t),y.mousedown.call(this,t),n(this)},touchmove:function(t){t=p(this.dom,t),i(this,t,"change"),y.mousemove.call(this,t),n(this)},touchend:function(t){t=p(this.dom,t),i(this,t,"end"),y.mouseup.call(this,t),+new Date-this._lastTouchMoment<v&&y.click.call(this,t),n(this)}};l.each(["click","mousedown","mouseup","mousewheel","dblclick"],function(t){y[t]=function(e){e=p(this.dom,e),this.trigger(t,e)}});var _=o[Se];return _.dispose=function(){for(var t=m.concat(g),i=0;i<t[re];i++){var n=t[i];d(this.dom,e(n),this._handlers[n])}},_.setCursor=function(t){this.dom.style.cursor=t||"default"},l.mixin(o,u),o}),e("zrender/Painter",[Le,"./config","./core/util","./core/log","./core/BoundingRect","./core/timsort","./Layer","./animation/requestAnimationFrame","./graphic/Image"],function(t){function e(t){return parseInt(t,10)}function i(t){return t?t.isBuildin?!0:typeof t[we]!==j||typeof t.refresh!==j?!1:!0:!1}function a(t){t.__unusedCount++}function o(t){1==t.__unusedCount&&t.clear()}function s(t,e,i){return b.copy(t[N]()),t[r]&&b[_](t[r]),w.width=e,w[de]=i,!b.intersect(w)}function l(t,e){if(t==e)return!1;if(!t||!e||t[re]!==e[re])return!0;for(var i=0;i<t[re];i++)if(t[i]!==e[i])return!0}function u(t,e){for(var i=0;i<t[re];i++){var n=t[i],r=n.path;n.setTransform(e),r.beginPath(e),n.buildPath(r,n.shape),e.clip(),n.restoreTransform(e)}}function c(t,e){var i=document[L]("div"),n=i.style;return n[E]="relative",n.overflow="hidden",n.width=t+"px",n[de]=e+"px",i}var h=t("./config"),f=t("./core/util"),d=t("./core/log"),p=t("./core/BoundingRect"),m=t("./core/timsort"),g=t("./Layer"),y=t("./animation/requestAnimationFrame"),x=5,b=new p(0,0,0,0),w=new p(0,0,0,0),M=function(t,e,i){var n=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();i=i||{},this.dpr=i.devicePixelRatio||h.devicePixelRatio,this._singleCanvas=n,this.root=t;var r=t.style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this[me]=e;var a=this._zlevelList=[],o=this._layers={};if(this._layerConfig={},n){var s=t.width,l=t[de];this._width=s,this._height=l;var u=new g(t,this,1);u.initContext(),o[0]=u,a.push(0)}else{this._width=this._getWidth(),this._height=this._getHeight();var f=this._domRoot=c(this._width,this._height);t.appendChild(f)}this.pathToImage=this._createPathToImage(),this._progressiveLayers=[],this._hoverlayer,this._hoverElements=[]};return M[Se]={constructor:M,isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._singleCanvas?this._layers[0].dom:this._domRoot},refresh:function(t){var e=this[me].getDisplayList(!0),i=this._zlevelList;this._paintList(e,t);for(var n=0;n<i[re];n++){var r=i[n],a=this._layers[r];!a.isBuildin&&a.refresh&&a.refresh()}return this.refreshHover(),this._progressiveLayers[re]&&this._startProgessive(),this},addHover:function(t,e){if(!t.__hoverMir){var i=new t.constructor({style:t.style,shape:t.shape});i.__from=t,t.__hoverMir=i,i[Q](e),this._hoverElements.push(i)}},removeHover:function(t){var e=t.__hoverMir,i=this._hoverElements,n=f[W](i,e);n>=0&&i[ie](n,1),t.__hoverMir=null},clearHover:function(){for(var t=this._hoverElements,e=0;e<t[re];e++){var i=t[e].__from;i&&(i.__hoverMir=null)}t[re]=0},refreshHover:function(){var t=this._hoverElements,e=t[re],i=this._hoverlayer;if(i&&i.clear(),e){m(t,this[me].displayableSortFunc),i||(i=this._hoverlayer=this.getLayer(1e5));var n={};i.ctx.save();for(var a=0;e>a;){var o=t[a],s=o.__from;s&&s.__zr?(a++,s.invisible||(o[r]=s[r],o.invTransform=s.invTransform,o.__clipPaths=s.__clipPaths,this._doPaintEl(o,i,!0,n))):(t[ie](a,1),s.__hoverMir=null,e--)}i.ctx.restore()}},_startProgessive:function(){function t(){i===e._progressiveToken&&e[me]&&(e._doPaintList(e[me].getDisplayList()),e._furtherProgressive?(e._progress++,y(t)):e._progressiveToken=-1)}var e=this;if(e._furtherProgressive){var i=e._progressiveToken=+new Date;e._progress++,y(t)}},_clearProgressive:function(){this._progressiveToken=-1,this._progress=0,f.each(this._progressiveLayers,function(t){t[n]&&t.clear()})},_paintList:function(t,e){null==e&&(e=!1),this._updateLayerStatus(t),this._clearProgressive(),this.eachBuildinLayer(a),this._doPaintList(t,e),this.eachBuildinLayer(o)},_doPaintList:function(t,e){function i(t){var e=o.dpr||1;o.save(),o.globalAlpha=1,o.shadowBlur=0,r[n]=!0,o.setTransform(1,0,0,1,0,0),o.drawImage(t.dom,0,0,h*e,p*e),o.restore()}for(var r,a,o,s,l,u,c=0,h=this._width,p=this._height,v=this._progress,m=0,g=t[re];g>m;m++){var y=t[m],_=this._singleCanvas?0:y[$],b=y.__frame;if(0>b&&l&&(i(l),l=null),a!==_&&(o&&o.restore(),s={},a=_,r=this.getLayer(a),r.isBuildin||d("ZLevel "+a+" has been used by unkown layer "+r.id),o=r.ctx,o.save(),r.__unusedCount=0,(r[n]||e)&&r.clear()),r[n]||e){if(b>=0){if(!l){if(l=this._progressiveLayers[Math.min(c++,x-1)],l.ctx.save(),l.renderScope={},l&&l.__progress>l.__maxProgress){m=l.__nextIdxNotProg-1;continue}u=l.__progress,l[n]||(v=u),l.__progress=v+1}b===v&&this._doPaintEl(y,l,!0,l.renderScope)}else this._doPaintEl(y,r,e,s);y[n]=!1}}l&&i(l),o&&o.restore(),this._furtherProgressive=!1,f.each(this._progressiveLayers,function(t){t.__maxProgress>=t.__progress&&(this._furtherProgressive=!0)},this)},_doPaintEl:function(t,e,i,a){var o=e.ctx,c=t[r];if(!(!e[n]&&!i||t.invisible||0===t.style[O]||c&&!c[0]&&!c[3]||t.culling&&s(t,this._width,this._height))){var h=t.__clipPaths;(a.prevClipLayer!==e||l(h,a.prevElClipPaths))&&(a.prevElClipPaths&&(a.prevClipLayer.ctx.restore(),a.prevClipLayer=a.prevElClipPaths=null,a.prevEl=null),h&&(o.save(),u(h,o),a.prevClipLayer=e,a.prevElClipPaths=h)),t.beforeBrush&&t.beforeBrush(o),t.brush(o,a.prevEl||null),a.prevEl=t,t.afterBrush&&t.afterBrush(o)}},getLayer:function(t){if(this._singleCanvas)return this._layers[0];var e=this._layers[t];return e||(e=new g("zr_"+t,this,this.dpr),e.isBuildin=!0,this._layerConfig[t]&&f.merge(e,this._layerConfig[t],!0),this.insertLayer(t,e),e.initContext()),e},insertLayer:function(t,e){var n=this._layers,r=this._zlevelList,a=r[re],o=null,s=-1,l=this._domRoot;if(n[t])return void d("ZLevel "+t+" has been used already");if(!i(e))return void d("Layer of zlevel "+t+" is not valid");if(a>0&&t>r[0]){for(s=0;a-1>s&&!(r[s]<t&&r[s+1]>t);s++);o=n[r[s]]}if(r[ie](s+1,0,t),o){var u=o.dom;u.nextSibling?l.insertBefore(e.dom,u.nextSibling):l.appendChild(e.dom)}else l.firstChild?l.insertBefore(e.dom,l.firstChild):l.appendChild(e.dom);n[t]=e},eachLayer:function(t,e){var i,n,r=this._zlevelList;for(n=0;n<r[re];n++)i=r[n],t.call(e,this._layers[i],i)},eachBuildinLayer:function(t,e){var i,n,r,a=this._zlevelList;for(r=0;r<a[re];r++)n=a[r],i=this._layers[n],i.isBuildin&&t.call(e,i,n)},eachOtherLayer:function(t,e){var i,n,r,a=this._zlevelList;for(r=0;r<a[re];r++)n=a[r],i=this._layers[n],i.isBuildin||t.call(e,i,n)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){var e=this._layers,i=this._progressiveLayers,r={},a={};this.eachBuildinLayer(function(t,e){r[e]=t.elCount,t.elCount=0,t[n]=!1}),f.each(i,function(t,e){a[e]=t.elCount,t.elCount=0,t[n]=!1});for(var o,s,l=0,u=0,c=0,h=t[re];h>c;c++){var d=t[c],p=this._singleCanvas?0:d[$],v=e[p],m=d.progressive;if(v&&(v.elCount++,v[n]=v[n]||d[n]),m>=0){s!==m&&(s=m,u++);var y=d.__frame=u-1;if(!o){var _=Math.min(l,x-1);o=i[_],o||(o=i[_]=new g("progressive",this,this.dpr),o.initContext()),o.__maxProgress=0}o[n]=o[n]||d[n],o.elCount++,o.__maxProgress=Math.max(o.__maxProgress,y),o.__maxProgress>=o.__progress&&(v[n]=!0)}else d.__frame=-1,o&&(o.__nextIdxNotProg=c,l++,o=null)}o&&(l++,o.__nextIdxNotProg=c),this.eachBuildinLayer(function(t,e){r[e]!==t.elCount&&(t[n]=!0)}),i[re]=Math.min(l,x),f.each(i,function(t,e){a[e]!==t.elCount&&(d[n]=!0),t[n]&&(t.__progress=0)})},clear:function(){return this.eachBuildinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},configLayer:function(t,e){if(e){var i=this._layerConfig;i[t]?f.merge(i[t],e,!0):i[t]=e;var n=this._layers[t];n&&f.merge(n,i[t],!0)}},delLayer:function(t){var e=this._layers,i=this._zlevelList,n=e[t];n&&(n.dom.parentNode.removeChild(n.dom),delete e[t],i[ie](f[W](i,t),1))},resize:function(t,e){var i=this._domRoot;if(i.style.display="none",t=t||this._getWidth(),e=e||this._getHeight(),i.style.display="",this._width!=t||e!=this._height){i.style.width=t+"px",i.style[de]=e+"px";for(var n in this._layers)this._layers[n][we](t,e);this.refresh(!0)}return this._width=t,this._height=e,this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this[me]=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas)return this._layers[0].dom;var e=new g("image",this,t.pixelRatio||this.dpr);e.initContext(),e.clearColor=t.backgroundColor,e.clear();for(var i=this[me].getDisplayList(!0),n={},r=0;r<i[re];r++){var a=i[r];this._doPaintEl(a,e,!0,n)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getWidth:function(){var t=this.root,i=document.defaultView.getComputedStyle(t);return(t.clientWidth||e(i.width)||e(t.style.width))-(e(i.paddingLeft)||0)-(e(i.paddingRight)||0)|0},_getHeight:function(){var t=this.root,i=document.defaultView.getComputedStyle(t);return(t.clientHeight||e(i[de])||e(t.style[de]))-(e(i.paddingTop)||0)-(e(i.paddingBottom)||0)|0},_pathToImage:function(e,i,n,r,a){var o=document[L]("canvas"),s=o.getContext("2d");o.width=n*a,o[de]=r*a,s.clearRect(0,0,n*a,r*a);var l={position:i[E],rotation:i[v],scale:i.scale};i[E]=[0,0,0],i[v]=0,i.scale=[1,1],i&&i.brush(s);var u=t("./graphic/Image"),c=new u({id:e,style:{x:0,y:0,image:o}});return null!=l[E]&&(c[E]=i[E]=l[E]),null!=l[v]&&(c[v]=i[v]=l[v]),null!=l.scale&&(c.scale=i.scale=l.scale),c},_createPathToImage:function(){var t=this;return function(e,i,n,r){return t._pathToImage(e,i,n,r,t.dpr)}}},M}),e("echarts/data/helper/completeDimensions",[Le,Ce],function(t){function e(t,e,a,o){if(!e)return t;var s=i(e[0]),l=n[X](s)&&s[re]||1;a=a||[],o=o||"extra";for(var u=0;l>u;u++)if(!t[u]){var c=a[u]||o+(u-a[re]);t[u]=r(e,u)?{type:"ordinal",name:c}:c}return t}function i(t){return n[X](t)?t:n[le](t)?t.value:t}var n=t(Ce),r=e.guessOrdinal=function(t,e){for(var r=0,a=t[re];a>r;r++){var o=i(t[r]);if(!n[X](o))return!1;var o=o[e];if(null!=o&&isFinite(o))return!1;if(n.isString(o)&&"-"!==o)return!0}return!1};return e}),e("echarts/data/DataDiffer",[Le],function(){function t(t){return t}function e(e,i,n,r){this._old=e,this._new=i,this._oldKeyGetter=n||t,this._newKeyGetter=r||t}function i(t,e,i,n){for(var r=0;r<t[re];r++){var a=n(t[r],r),o=e[a];null==o?(i.push(a),e[a]=r):(o[re]||(e[a]=o=[o]),o.push(r))}}return e[Se]={constructor:e,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t,e=this._old,n=this._new,r=this._oldKeyGetter,a=this._newKeyGetter,o={},s={},l=[],u=[];for(i(e,o,l,r),i(n,s,u,a),t=0;t<e[re];t++){var c=l[t],h=s[c];if(null!=h){var f=h[re];f?(1===f&&(s[c]=null),h=h.unshift()):s[c]=null,this._update&&this._update(h,t)}else this._remove&&this._remove(t)}for(var t=0;t<u[re];t++){var c=u[t];if(s.hasOwnProperty(c)){var h=s[c];if(null==h)continue;if(h[re])for(var d=0,f=h[re];f>d;d++)this._add&&this._add(h[d]);else this._add&&this._add(h)}}}},e}),e("zrender/graphic/helper/smoothSpline",[Le,"../../core/vector"],function(t){function e(t,e,i,n,r,a,o){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*o+(-3*(e-i)-2*s-l)*a+s*r+e}var i=t("../../core/vector");return function(t,n){for(var r=t[re],a=[],o=0,s=1;r>s;s++)o+=i.distance(t[s-1],t[s]);var l=o/2;l=r>l?r:l;for(var s=0;l>s;s++){var u,c,h,f=s/(l-1)*(n?r:r-1),d=Math.floor(f),p=f-d,v=t[d%r];n?(u=t[(d-1+r)%r],c=t[(d+1)%r],h=t[(d+2)%r]):(u=t[0===d?d:d-1],c=t[d>r-2?r-1:d+1],h=t[d>r-3?r-1:d+2]);var m=p*p,g=p*m;a.push([e(u[0],v[0],c[0],h[0],p,m,g),e(u[1],v[1],c[1],h[1],p,m,g)])}return a}}),e("zrender/graphic/helper/smoothBezier",[Le,"../../core/vector"],function(t){var e=t("../../core/vector"),i=e.min,n=e.max,r=e.scale,a=e.distance,o=e.add;return function(t,s,l,u){var c,h,f,d,p=[],v=[],m=[],g=[];if(u){f=[1/0,1/0],d=[-1/0,-1/0];for(var y=0,_=t[re];_>y;y++)i(f,f,t[y]),n(d,d,t[y]);i(f,f,u[0]),n(d,d,u[1])}for(var y=0,_=t[re];_>y;y++){var x=t[y];if(l)c=t[y?y-1:_-1],h=t[(y+1)%_];else{if(0===y||y===_-1){p.push(e.clone(t[y]));continue}c=t[y-1],h=t[y+1]}e.sub(v,h,c),r(v,v,s);var b=a(x,c),w=a(x,h),M=b+w;0!==M&&(b/=M,w/=M),r(m,v,-b),r(g,v,w);var S=o([],x,m),T=o([],x,g);u&&(n(S,S,f),i(S,S,d),n(T,T,f),i(T,T,d)),p.push(S),p.push(T)}return l&&p.push(p.shift()),p}}),e("zrender/mixin/Draggable",[Le],function(){function t(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}return t[Se]={constructor:t,_dragStart:function(t){var e=t[te];e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(e,"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var i=t.offsetX,n=t.offsetY,r=i-this._x,a=n-this._y;this._x=i,this._y=n,e.drift(r,a,t),this.dispatchToElement(e,"drag",t.event);var o=this.findHover(i,n,e),s=this._dropTarget;this._dropTarget=o,e!==o&&(s&&o!==s&&this.dispatchToElement(s,"dragleave",t.event),o&&o!==s&&this.dispatchToElement(o,"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(e,"dragend",t.event),this._dropTarget&&this.dispatchToElement(this._dropTarget,"drop",t.event),this._draggingTarget=null,this._dropTarget=null}},t}),e("echarts/chart/bar/barItemStyle",[Le,"../../model/mixin/makeStyleMapper"],function(t){var e=t("../../model/mixin/makeStyleMapper")([["fill","color"],[g,"borderColor"],[y,"borderWidth"],[g,"barBorderColor"],[y,"barBorderWidth"],[O],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]);return{getBarItemStyle:function(t){var i=e.call(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(i.lineDash=n)}return i}}}),e("zrender/graphic/helper/roundRect",[Le],function(){return{buildPath:function(t,e){var n,r,a,o,s=e.x,l=e.y,u=e.width,c=e[de],h=e.r;0>u&&(s+=u,u=-u),0>c&&(l+=c,c=-c),typeof h===Z?n=r=a=o=h:h instanceof Array?1===h[re]?n=r=a=o=h[0]:2===h[re]?(n=a=h[0],r=o=h[1]):3===h[re]?(n=h[0],r=o=h[1],a=h[2]):(n=h[0],r=h[1],a=h[2],o=h[3]):n=r=a=o=0;var f;n+r>u&&(f=n+r,n*=u/f,r*=u/f),a+o>u&&(f=a+o,a*=u/f,o*=u/f),r+a>c&&(f=r+a,r*=c/f,a*=c/f),n+o>c&&(f=n+o,n*=c/f,o*=c/f),t[i](s+n,l),t.lineTo(s+u-r,l),0!==r&&t.quadraticCurveTo(s+u,l,s+u,l+r),t.lineTo(s+u,l+c-a),0!==a&&t.quadraticCurveTo(s+u,l+c,s+u-a,l+c),t.lineTo(s+o,l+c),0!==o&&t.quadraticCurveTo(s,l+c,s,l+c-o),t.lineTo(s,l+n),0!==n&&t.quadraticCurveTo(s,l,s+n,l)}}}),e("zrender/animation/requestAnimationFrame",[Le],function(){return typeof window!==A&&(window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)}}),e("zrender/core/event",[Le,"../mixin/Eventful"],function(t){function e(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function i(t,i,n){var r=e(t);return n=n||{},n.zrX=i.clientX-r.left,n.zrY=i.clientY-r.top,n}function n(t,e){if(e=e||window.event,null!=e.zrX)return e;var n=e.type,r=n&&n[W]("touch")>=0;if(r){var a="touchend"!=n?e.targetTouches[0]:e.changedTouches[0];a&&i(t,a,e)}else i(t,e,e),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;return e}function r(t,e,i){s?t.addEventListener(e,i):t.attachEvent("on"+e,i)}function a(t,e,i){s?t.removeEventListener(e,i):t.detachEvent("on"+e,i)}var o=t("../mixin/Eventful"),s=typeof window!==A&&!!window.addEventListener,l=s?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0};return{clientToLocal:i,normalizeEvent:n,addEventListener:r,removeEventListener:a,stop:l,Dispatcher:o}}),e("zrender/core/GestureMgr",[Le,"./event"],function(t){function e(t){var e=t[1][0]-t[0][0],i=t[1][1]-t[0][1];return Math.sqrt(e*e+i*i)}function i(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}var n=t("./event"),r=function(){this._track=[]};r[Se]={constructor:r,recognize:function(t,e,i){return this._doTrack(t,e,i),this._recognize(t)},clear:function(){return this._track[re]=0,this},_doTrack:function(t,e,i){var r=t.touches;if(r){for(var a={points:[],touches:[],target:e,event:t},o=0,s=r[re];s>o;o++){var l=r[o],u=n.clientToLocal(i,l);a.points.push([u.zrX,u.zrY]),a.touches.push(l)}this._track.push(a)}},_recognize:function(t){for(var e in a)if(a.hasOwnProperty(e)){var i=a[e](this._track,t);if(i)return i}}};var a={pinch:function(t,n){var r=t[re];if(r){var a=(t[r-1]||{}).points,o=(t[r-2]||{}).points||a;if(o&&o[re]>1&&a&&a[re]>1){var s=e(a)/e(o);!isFinite(s)&&(s=1),n.pinchScale=s;var l=i(a);return n.pinchX=l[0],n.pinchY=l[1],{type:"pinch",target:t[0][te],event:n}}}}};return r}),e("zrender/Layer",[Le,"./core/util","./config","./graphic/Style","./graphic/Pattern"],function(t){function e(){return!1}function i(t,e,i,n){var r=document[L](e),a=i[_e](),o=i[ye](),s=r.style;return s[E]="absolute",s.left=0,s.top=0,s.width=a+"px",s[de]=o+"px",r.width=a*n,r[de]=o*n,r.setAttribute("data-zr-dom-id",t),r}var n=t("./core/util"),r=t("./config"),a=t("./graphic/Style"),o=t("./graphic/Pattern"),s=function(t,a,o){var s;o=o||r.devicePixelRatio,typeof t===Me?s=i(t,"canvas",a,o):n[le](t)&&(s=t,t=s.id),this.id=t,this.dom=s;var l=s.style;l&&(s.onselectstart=e,l["-webkit-user-select"]="none",l["user-select"]="none",l["-webkit-touch-callout"]="none",l["-webkit-tap-highlight-color"]="rgba(0,0,0,0)"),this.domBack=null,this.ctxBack=null,this.painter=a,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=o};return s[Se]={constructor:s,elCount:0,__dirty:!0,initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=i("back-"+this.id,"canvas",this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var i=this.dpr,n=this.dom,r=n.style,a=this.domBack;r.width=t+"px",r[de]=e+"px",n.width=t*i,n[de]=e*i,a&&(a.width=t*i,a[de]=e*i,1!=i&&this.ctxBack.scale(i,i))},clear:function(t){var e=this.dom,i=this.ctx,n=e.width,r=e[de],s=this.clearColor,l=this.motionBlur&&!t,u=this.lastFrameAlpha,c=this.dpr;if(l&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(e,0,0,n/c,r/c)),i.clearRect(0,0,n,r),s){var h;s.colorStops?(h=s.__canvasGradient||a.getGradient(i,s,{x:0,y:0,width:n,height:r}),s.__canvasGradient=h):s.image&&(h=o[Se].getCanvasPattern.call(s,i)),i.save(),i.fillStyle=h||s,i.fillRect(0,0,n,r),i.restore()}if(l){var f=this.domBack;i.save(),i.globalAlpha=u,i.drawImage(f,0,0,n,r),i.restore()}}},s}),e("echarts/preprocessor/helper/compatStyle",[Le,Ce],function(t){function e(t){var e=t&&t.itemStyle;e&&i.each(n,function(n){var r=e[b],a=e.emphasis;r&&r[n]&&(t[n]=t[n]||{},t[n][b]?i.merge(t[n][b],r[n]):t[n][b]=r[n],r[n]=null),a&&a[n]&&(t[n]=t[n]||{},t[n].emphasis?i.merge(t[n].emphasis,a[n]):t[n].emphasis=a[n],a[n]=null)})}var i=t(Ce),n=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"];return function(t){if(t){e(t),e(t.markPoint),e(t.markLine);var n=t.data;if(n){for(var r=0;r<n[re];r++)e(n[r]);var a=t.markPoint;if(a&&a.data)for(var o=a.data,r=0;r<o[re];r++)e(o[r]);var s=t.markLine;if(s&&s.data)for(var l=s.data,r=0;r<l[re];r++)i[X](l[r])?(e(l[r][0]),e(l[r][1])):e(l[r])}}}}),e("echarts/component/axis/AxisView",[Le,Ce,f,"./AxisBuilder",a],function(t){function e(t,e){function i(t){var e=n[c](t);return e.toGlobalCoord(e[l](0))}var n=t[I],r=e.axis,a={},o=r[E],s=r.onZero?"onZero":o,u=r.dim,h=n.getRect(),f=[h.x,h.x+h.width,h.y,h.y+h[de]],d=e.get("offset")||0,p={x:{top:f[2]-d,bottom:f[3]+d},y:{left:f[0]-d,right:f[1]+d}};p.x.onZero=Math.max(Math.min(i("y"),p.x[pe]),p.x.top),p.y.onZero=Math.max(Math.min(i("x"),p.y.right),p.y.left),a[E]=["y"===u?p.y[s]:f[0],"x"===u?p.x[s]:f[3]],a[v]=Math.PI/2*("x"===u?0:1);var g={top:-1,bottom:1,left:-1,right:1};a.labelDirection=a.tickDirection=a.nameDirection=g[o],r.onZero&&(a.labelOffset=p[u][o]-p[u].onZero),e[xe]("axisTick").get(m)&&(a.tickDirection=-a.tickDirection),e[xe]("axisLabel").get(m)&&(a.labelDirection=-a.labelDirection);var y=e[xe]("axisLabel").get("rotate");return a.labelRotation="top"===s?-y:y,a.labelInterval=r.getLabelInterval(),a.z2=1,a}var i=t(Ce),n=t(f),r=t("./AxisBuilder"),o=r.ifIgnoreOnTick,s=r.getInterval,u=["axisLine","axisLabel","axisTick","axisName"],h=["splitArea","splitLine"],d=t(a).extendComponentView({type:"axis",render:function(t){this.group[H]();var a=this._axisGroup;if(this._axisGroup=new n.Group,this.group.add(this._axisGroup),t.get("show")){var o=t.findGridModel(),s=e(o,t),l=new r(t,s);i.each(u,l.add,l),this._axisGroup.add(l.getGroup()),i.each(h,function(e){t.get(e+".show")&&this["_"+e](t,o,s.labelInterval)},this),n.groupTransition(a,this._axisGroup,t)}},_splitLine:function(t,e,r){var a=t.axis,l=t[xe]("splitLine"),u=l[xe]("lineStyle"),c=u.get("color"),h=s(l,r);c=i[X](c)?c:[c];for(var f=e[I].getRect(),d=a.isHorizontal(),p=0,v=a.getTicksCoords(),m=a.scale[z](),g=[],y=[],_=u.getLineStyle(),x=0;x<v[re];x++)if(!o(a,x,h)){var b=a.toGlobalCoord(v[x]);d?(g[0]=b,g[1]=f.y,y[0]=b,y[1]=f.y+f[de]):(g[0]=f.x,g[1]=b,y[0]=f.x+f.width,y[1]=b);var w=p++%c[re];this._axisGroup.add(new n.Line(n.subPixelOptimizeLine({anid:"line_"+m[x],shape:{x1:g[0],y1:g[1],x2:y[0],y2:y[1]},style:i[ae]({stroke:c[w]},_),silent:!0})))}},_splitArea:function(t,e,r){var a=t.axis,l=t[xe]("splitArea"),u=l[xe]("areaStyle"),c=u.get("color"),h=e[I].getRect(),f=a.getTicksCoords(),d=a.scale[z](),p=a.toGlobalCoord(f[0]),v=a.toGlobalCoord(f[0]),m=0,g=s(l,r),y=u.getAreaStyle();c=i[X](c)?c:[c];for(var _=1;_<f[re];_++)if(!o(a,_,g)){var x,b,w,M,S=a.toGlobalCoord(f[_]);a.isHorizontal()?(x=p,b=h.y,w=S-x,M=h[de]):(x=h.x,b=v,w=h.width,M=S-b);var T=m++%c[re];this._axisGroup.add(new n.Rect({anid:"area_"+d[_],shape:{x:x,y:b,width:w,height:M},style:i[ae]({fill:c[T]},y),silent:!0})),p=x+w,v=b+M}}});d[oe]({type:"xAxis"}),d[oe]({type:"yAxis"})}),e("echarts/chart/helper/SymbolDraw",[Le,f,"./Symbol"],function(t){function e(t){this.group=new n.Group,this._symbolCtor=t||r}function i(t,e,i){var n=t.getItemLayout(e);return!(!n||isNaN(n[0])||isNaN(n[1])||i&&i(e)||"none"===t[S](e,"symbol"))}var n=t(f),r=t("./Symbol"),a=e[Se];return a.updateData=function(t,e){var r=this.group,a=t.hostModel,o=this._data,s=this._symbolCtor,l={itemStyle:a[xe]("itemStyle.normal").getItemStyle(["color"]),hoverItemStyle:a[xe]("itemStyle.emphasis").getItemStyle(),symbolRotate:a.get("symbolRotate"),symbolOffset:a.get("symbolOffset"),hoverAnimation:a.get("hoverAnimation"),labelModel:a[xe]("label.normal"),hoverLabelModel:a[xe]("label.emphasis")};t.diff(o).add(function(n){var a=t.getItemLayout(n);if(i(t,n,e)){var o=new s(t,n,l);o.attr(E,a),t.setItemGraphicEl(n,o),r.add(o)}})[he](function(u,c){var h=o[x](c),f=t.getItemLayout(u);return i(t,u,e)?(h?(h.updateData(t,u,l),n.updateProps(h,{position:f},a)):(h=new s(t,u),h.attr(E,f)),r.add(h),void t.setItemGraphicEl(u,h)):void r[se](h)})[se](function(t){var e=o[x](t);e&&e.fadeOut(function(){r[se](e)})}).execute(),this._data=t},a.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,i){var n=t.getItemLayout(i);e.attr(E,n)})},a[se]=function(t){var e=this.group,i=this._data;i&&(t?i.eachItemGraphicEl(function(t){t.fadeOut(function(){e[se](t)})}):e[H]())},e}),e("echarts/chart/helper/Symbol",[Le,Ce,"../../util/symbol",f,"../../util/number"],function(t){function e(t){return t instanceof Array||(t=[+t,+t]),t}function i(t,e,i){s.Group.call(this),this.updateData(t,e,i)}function n(t,e){this.parent.drift(t,e)}var r=t(Ce),a=t("../../util/symbol"),s=t(f),l=t("../../util/number"),c=i[Se];c._createSymbol=function(t,i,r){this[H]();var o=i.hostModel,l=i[S](r,"color"),u=a.createSymbol(t,-.5,-.5,1,1,l);u.attr({z2:100,culling:!0,scale:[0,0]}),u.drift=n;var c=e(i[S](r,"symbolSize"));s.initProps(u,{scale:c},o,r),this._symbolType=t,this.add(u)},c.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},c.getSymbolPath=function(){return this.childAt(0)},c.getScale=function(){return this.childAt(0).scale},c.highlight=function(){this.childAt(0).trigger("emphasis")},c.downplay=function(){this.childAt(0).trigger(b)},c.setZ=function(t,e){var i=this.childAt(0);i[$]=t,i.z=e},c.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},c.updateData=function(t,i,n){this.silent=!1;var r=t[S](i,"symbol")||"circle",a=t.hostModel,o=e(t[S](i,"symbolSize"));if(r!==this._symbolType)this._createSymbol(r,t,i);else{var l=this.childAt(0);s.updateProps(l,{scale:o},a,i)}this._updateCommon(t,i,o,n),this._seriesModel=a};var h=["itemStyle",b],m=["itemStyle","emphasis"],g=["label",b],y=["label","emphasis"];return c._updateCommon=function(t,i,n,a){var c=this.childAt(0),f=t.hostModel,_=t[S](i,"color");"image"!==c.type&&c.useStyle({strokeNoScale:!0}),a=a||null;var x=a&&a.itemStyle,w=a&&a.hoverItemStyle,T=a&&a.symbolRotate,P=a&&a.symbolOffset,L=a&&a.labelModel,A=a&&a.hoverLabelModel,k=a&&a.hoverAnimation;if(!a||t.hasItemOption){var z=t[p](i);x=z[xe](h).getItemStyle(["color"]),w=z[xe](m).getItemStyle(),T=z[M]("symbolRotate"),P=z[M]("symbolOffset"),L=z[xe](g),A=z[xe](y),k=z[M]("hoverAnimation")}else w=r[oe]({},w);var D=c.style;c[v]=(T||0)*Math.PI/180||0,P&&c.attr(E,[l[d](P[0],n[0]),l[d](P[1],n[1])]),c.setColor(_),c[Q](x);var I=t[S](i,O);null!=I&&(D[O]=I);for(var R,B,N=t[u].slice();N[re]&&(R=N.pop(),B=t.getDimensionInfo(R).type,B===C||"time"===B););null!=R&&L[M]("show")?(s.setText(D,L,_),D.text=r[o](f.getFormattedLabel(i,b),t.get(R,i))):D.text="",null!=R&&A[M]("show")?(s.setText(w,A,_),w.text=r[o](f.getFormattedLabel(i,"emphasis"),t.get(R,i))):w.text="";var G=e(t[S](i,"symbolSize"));if(c.off("mouseover").off(ee).off("emphasis").off(b),c.hoverStyle=w,s.setHoverStyle(c),k&&f.ifEnableAnimation()){var F=function(){var t=G[1]/G[0];this.animateTo({scale:[Math.max(1.1*G[0],G[0]+3),Math.max(1.1*G[1],G[1]+3*t)]},400,"elasticOut")},V=function(){this.animateTo({scale:G},400,"elasticOut")};c.on("mouseover",F).on(ee,V).on("emphasis",F).on(b,V)}},c.fadeOut=function(t){var e=this.childAt(0);this.silent=!0,e.style.text="",s.updateProps(e,{scale:[0,0]},this._seriesModel,this[J],t)},r[q](i,s.Group),i}),e("echarts/chart/line/lineAnimationDiff",[Le],function(){function t(t){return t>=0?1:-1}function e(e,i,n){for(var r,a=e[P](),o=e.getOtherAxis(a),s=a.onZero?0:o.scale[k]()[0],l=o.dim,u="x"===l||"radius"===l?1:0,c=i.stackedOn,f=i.get(l,n);c&&t(c.get(l,n))===t(f);){r=c;break}var d=[];return d[u]=i.get(a.dim,n),d[1-u]=r?r.get(l,n,!0):s,e[h](d)}function i(t,e){var i=[];return e.diff(t).add(function(t){i.push({cmd:"+",idx:t})})[he](function(t,e){i.push({cmd:"=",idx:e,idx1:t})})[se](function(t){i.push({cmd:"-",idx:t})}).execute(),i}return function(t,n,r,a,o,s){for(var l=i(t,n),c=[],f=[],d=[],p=[],v=[],m=[],g=[],y=s[u],_=0;_<l[re];_++){var x=l[_],b=!0;switch(x.cmd){case"=":var w=t.getItemLayout(x.idx),M=n.getItemLayout(x.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=M.slice()),c.push(w),f.push(M),d.push(r[x.idx]),p.push(a[x.idx1]),g.push(n.getRawIndex(x.idx1));break;case"+":var S=x.idx;c.push(o[h]([n.get(y[0],S,!0),n.get(y[1],S,!0)])),f.push(n.getItemLayout(S).slice()),d.push(e(o,n,S)),p.push(a[S]),g.push(n.getRawIndex(S));break;case"-":var S=x.idx,T=t.getRawIndex(S);T!==S?(c.push(t.getItemLayout(S)),f.push(s[h]([t.get(y[0],S,!0),t.get(y[1],S,!0)])),d.push(r[S]),p.push(e(s,t,S)),g.push(T)):b=!1}b&&(v.push(x),m.push(m[re]))}m.sort(function(t,e){return g[t]-g[e]});for(var C=[],P=[],L=[],A=[],k=[],_=0;_<m[re];_++){var S=m[_];C[_]=c[S],P[_]=f[S],L[_]=d[S],A[_]=p[S],k[_]=v[S]}return{current:C,next:P,stackedOnCurrent:L,stackedOnNext:A,status:k}}}),e("echarts/component/helper/selectableMixin",[Le,Ce],function(t){var e=t(Ce);return{updateSelectedMap:function(t){this._selectTargetMap=e.reduce(t||[],function(t,e){return t[e.name]=e,t},{})},select:function(t){var i=this._selectTargetMap,n=i[t],r=this.get("selectedMode");"single"===r&&e.each(i,function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t){var e=this._selectTargetMap[t];e&&(e.selected=!1)},toggleSelected:function(t){var e=this._selectTargetMap[t];return null!=e?(this[e.selected?"unSelect":"select"](t),e.selected):void 0},isSelected:function(t){var e=this._selectTargetMap[t];return e&&e.selected}}}),e("echarts/chart/line/poly",[Le,"zrender/graphic/Path","zrender/core/vector"],function(t){function e(t){return isNaN(t[0])||isNaN(t[1])}function n(t,n,r,a,p,v,m,g,y,_,x){for(var b=0,w=r,M=0;a>M;M++){var S=n[w];if(w>=p||0>w)break;if(e(S)){if(x){w+=v;continue}break}if(w===r)t[v>0?i:"lineTo"](S[0],S[1]),c(f,S);else if(y>0){var T=w+v,C=n[T];if(x)for(;C&&e(n[T]);)T+=v,C=n[T];var P=.5,L=n[b],C=n[T];if(!C||e(C))c(d,S);else{e(C)&&!x&&(C=S),o.sub(h,C,L);var A,k;if("x"===_||"y"===_){var z="x"===_?0:1;A=Math.abs(S[z]-L[z]),k=Math.abs(S[z]-C[z])}else A=o.dist(S,L),k=o.dist(S,C);P=k/(k+A),u(d,S,h,-y*(1-P))}s(f,f,g),l(f,f,m),s(d,d,g),l(d,d,m),t.bezierCurveTo(f[0],f[1],d[0],d[1],S[0],S[1]),u(f,S,h,y*P)}else t.lineTo(S[0],S[1]);b=w,w+=v}return M}function r(t,e){var i=[1/0,1/0],n=[-1/0,-1/0];if(e)for(var r=0;r<t[re];r++){var a=t[r];a[0]<i[0]&&(i[0]=a[0]),a[1]<i[1]&&(i[1]=a[1]),a[0]>n[0]&&(n[0]=a[0]),a[1]>n[1]&&(n[1]=a[1])}return{min:e?i:n,max:e?n:i}}var a=t("zrender/graphic/Path"),o=t("zrender/core/vector"),s=o.min,l=o.max,u=o.scaleAndAdd,c=o.copy,h=[],f=[],d=[];return{Polyline:a[oe]({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},buildPath:function(t,i){var a=i.points,o=0,s=a[re],l=r(a,i.smoothConstraint);if(i.connectNulls){for(;s>0&&e(a[s-1]);s--);for(;s>o&&e(a[o]);o++);}for(;s>o;)o+=n(t,a,o,s,s,1,l.min,l.max,i.smooth,i.smoothMonotone,i.connectNulls)+1}}),Polygon:a[oe]({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},buildPath:function(t,i){var a=i.points,o=i.stackedOnPoints,s=0,l=a[re],u=i.smoothMonotone,c=r(a,i.smoothConstraint),h=r(o,i.smoothConstraint);
if(i.connectNulls){for(;l>0&&e(a[l-1]);l--);for(;l>s&&e(a[s]);s++);}for(;l>s;){var f=n(t,a,s,l,l,1,c.min,c.max,i.smooth,u,i.connectNulls);n(t,o,s+f-1,f,l,-1,h.min,h.max,i.stackedOnSmooth,u,i.connectNulls),s+=f+1,t.closePath()}}})}}),e("echarts/util/symbol",[Le,"./graphic","zrender/core/BoundingRect"],function(t){var e=t("./graphic"),n=t("zrender/core/BoundingRect"),r=e.extendShape({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,r=e.cy,a=e.width/2,o=e[de]/2;t[i](n,r-o),t.lineTo(n+a,r+o),t.lineTo(n-a,r+o),t.closePath()}}),a=e.extendShape({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,r=e.cy,a=e.width/2,o=e[de]/2;t[i](n,r-o),t.lineTo(n+a,r),t.lineTo(n,r+o),t.lineTo(n-a,r),t.closePath()}}),o=e.extendShape({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e.x,n=e.y,r=e.width/5*3,a=Math.max(r,e[de]),o=r/2,s=o*o/(a-o),l=n-a+o+s,u=Math.asin(s/o),c=Math.cos(u)*o,h=Math.sin(u),f=Math.cos(u);t.arc(i,l,o,Math.PI-u,2*Math.PI+u);var d=.6*o,p=.7*o;t.bezierCurveTo(i+c-h*d,l+s+f*d,i,n-p,i,n),t.bezierCurveTo(i,n-p,i-c+h*d,l+s+f*d,i-c,l+s),t.closePath()}}),s=e.extendShape({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e[de],r=e.width,a=e.x,o=e.y,s=r/3*2;t[i](a,o),t.lineTo(a+s,o+n),t.lineTo(a,o+n/4*3),t.lineTo(a-s,o+n),t.lineTo(a,o),t.closePath()}}),l={line:e.Line,rect:e.Rect,roundRect:e.Rect,square:e.Rect,circle:e.Circle,diamond:a,pin:o,arrow:s,triangle:r},u={line:function(t,e,i,n,r){r.x1=t,r.y1=e+n/2,r.x2=t+i,r.y2=e+n/2},rect:function(t,e,i,n,r){r.x=t,r.y=e,r.width=i,r[de]=n},roundRect:function(t,e,i,n,r){r.x=t,r.y=e,r.width=i,r[de]=n,r.r=Math.min(i,n)/4},square:function(t,e,i,n,r){var a=Math.min(i,n);r.x=t,r.y=e,r.width=a,r[de]=a},circle:function(t,e,i,n,r){r.cx=t+i/2,r.cy=e+n/2,r.r=Math.min(i,n)/2},diamond:function(t,e,i,n,r){r.cx=t+i/2,r.cy=e+n/2,r.width=i,r[de]=n},pin:function(t,e,i,n,r){r.x=t+i/2,r.y=e+n/2,r.width=i,r[de]=n},arrow:function(t,e,i,n,r){r.x=t+i/2,r.y=e+n/2,r.width=i,r[de]=n},triangle:function(t,e,i,n,r){r.cx=t+i/2,r.cy=e+n/2,r.width=i,r[de]=n}},c={};for(var h in l)c[h]=new l[h];var f=e.extendShape({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style,e=this.shape;"pin"===e.symbolType&&t.textPosition===m&&(t.textPosition=["50%","40%"],t[F]=R,t.textVerticalAlign=B)},buildPath:function(t,e,i){var n=e.symbolType,r=c[n];"none"!==e.symbolType&&(r||(n="rect",r=c[n]),u[n](e.x,e.y,e.width,e[de],r.shape),r.buildPath(t,r.shape,i))}}),d=function(t){if("image"!==this.type){var e=this.style,i=this.shape;i&&"line"===i.symbolType?e[g]=t:this.__isEmptyBrush?(e[g]=t,e.fill="#fff"):(e.fill&&(e.fill=t),e[g]&&(e[g]=t)),this.dirty(!1)}},p={createSymbol:function(t,i,r,a,o,s){var l=0===t[W]("empty");l&&(t=t.substr(5,1)[Te]()+t.substr(6));var u;return u=0===t[W]("image://")?new e.Image({style:{image:t.slice(8),x:i,y:r,width:a,height:o}}):0===t[W]("path://")?e.makePath(t.slice(7),{},new n(i,r,a,o)):new f({shape:{symbolType:t,x:i,y:r,width:a,height:o}}),u.__isEmptyBrush=l,u.setColor=d,u.setColor(s),u}};return p}),e("echarts/component/tooltip/TooltipContent",[Le,Ce,"zrender/tool/color","zrender/core/event","../../util/format",Pe],function(t){function e(t){var e="cubic-bezier(0.23, 1, 0.32, 1)",i="left "+t+"s "+e+",top "+t+"s "+e;return o.map(d,function(t){return t+"transition:"+i}).join(";")}function i(t){var e=[],i=t.get("fontSize"),n=t.getTextColor();return n&&e.push("color:"+n),e.push("font:"+t[G]()),i&&e.push("line-height:"+Math.round(3*i/2)+"px"),c(["decoration","align"],function(i){var n=t.get(i);n&&e.push("text-"+i+":"+n)}),e.join(";")}function n(t){t=t;var n=[],r=t.get("transitionDuration"),a=t.get("backgroundColor"),o=t[xe](V),l=t.get("padding");return r&&n.push(e(r)),a&&(f[ge]?n.push("background-Color:"+a):(n.push("background-Color:#"+s.toHex(a)),n.push("filter:alpha(opacity=70)"))),c(["width","color","radius"],function(e){var i="border-"+e,r=h(i),a=t.get(r);null!=a&&n.push(i+":"+a+("color"===e?"":"px"))}),n.push(i(o)),null!=l&&n.push("padding:"+u.normalizeCssArray(l).join("px ")+"px"),n.join(";")+";"}function r(t,e){var i=document[L]("div"),n=e.getZr();this.el=i,this._x=e[_e]()/2,this._y=e[ye]()/2,t.appendChild(i),this._container=t,this._show=!1,this._hideTimeout;var r=this;i.onmouseenter=function(){r.enterable&&(clearTimeout(r._hideTimeout),r._show=!0),r._inContent=!0},i.onmousemove=function(e){if(!r.enterable){var i=n.handler;l.normalizeEvent(t,e),i.dispatch("mousemove",e)}},i.onmouseleave=function(){r.enterable&&r._show&&r.hideLater(r._hideDelay),r._inContent=!1},a(i,t)}function a(t,e){function i(t){n(t[te])&&t.preventDefault()}function n(i){for(;i&&i!==e;){if(i===t)return!0;i=i.parentNode}}l.addEventListener(e,"touchstart",i),l.addEventListener(e,"touchmove",i),l.addEventListener(e,"touchend",i)}var o=t(Ce),s=t("zrender/tool/color"),l=t("zrender/core/event"),u=t("../../util/format"),c=o.each,h=u.toCamelCase,f=t(Pe),d=["","-webkit-","-moz-","-o-"],p="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";return r[Se]={constructor:r,enterable:!0,update:function(){var t=this._container,e=t.currentStyle||document.defaultView.getComputedStyle(t),i=t.style;"absolute"!==i[E]&&"absolute"!==e[E]&&(i[E]="relative")},show:function(t){clearTimeout(this._hideTimeout);var e=this.el;e.style.cssText=p+n(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),e.style.display=e.innerHTML?"block":"none",this._show=!0},setContent:function(t){var e=this.el;e.innerHTML=t,e.style.display=t?"block":"none"},moveTo:function(t,e){var i=this.el.style;i.left=t+"px",i.top=e+"px",this._x=t,this._y=e},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(t){!this._show||this._inContent&&this.enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(o.bind(this.hide,this),t)):this.hide())},isShow:function(){return this._show}},r}),e("echarts/component/helper/listComponent",[Le,"../../util/layout","../../util/format",f],function(t){function e(t,e,n){i.positionGroup(t,e.getBoxLayoutParams(),{width:n[_e](),height:n[ye]()},e.get("padding"))}var i=t("../../util/layout"),n=t("../../util/format"),r=t(f);return{layout:function(t,n,r){var a=i.getLayoutRect(n.getBoxLayoutParams(),{width:r[_e](),height:r[ye]()},n.get("padding"));i.box(n.get("orient"),t,n.get("itemGap"),a.width,a[de]),e(t,n,r)},addBackground:function(t,e){var i=n.normalizeCssArray(e.get("padding")),a=t[N](),o=e.getItemStyle(["color",O]);o.fill=e.get("backgroundColor");var s=new r.Rect({shape:{x:a.x-i[3],y:a.y-i[0],width:a.width+i[1]+i[3],height:a[de]+i[0]+i[2]},style:o,silent:!0,z2:-1});r.subPixelOptimizeRect(s),t.add(s)}}}),e("echarts/component/marker/markerHelper",[Le,Ce,"../../util/number"],function(t){function e(t){return!(isNaN(parseFloat(t.x))&&isNaN(parseFloat(t.y)))}function i(t){return!isNaN(parseFloat(t.x))&&!isNaN(parseFloat(t.y))}function n(t,e,i){var n=-1;do n=Math.max(o.getPrecision(t.get(e,i)),n),t=t.stackedOn;while(t);return n}function r(t,e,i,r,a,o){var s=[],l=m(e,r,t),u=e.indexOfNearest(r,l,!0);s[a]=e.get(i,u,!0),s[o]=e.get(r,u,!0);var c=n(e,r,u);return c>=0&&(s[o]=+s[o].toFixed(c)),s}var a=t(Ce),o=t("../../util/number"),s=a[W],l=a.curry,h={min:l(r,"min"),max:l(r,"max"),average:l(r,"average")},f=function(t,e){var n=t[ue](),r=t[I];if(e&&!i(e)&&!a[X](e.coord)&&r){var o=r[u],l=d(e,n,r,t);if(e=a.clone(e),e.type&&h[e.type]&&l.baseAxis&&l.valueAxis){var c=s(o,l.baseAxis.dim),f=s(o,l.valueAxis.dim);e.coord=h[e.type](n,l.baseDataDim,l.valueDataDim,c,f),e.value=e.coord[f]}else{for(var p=[null!=e.xAxis?e.xAxis:e.radiusAxis,null!=e.yAxis?e.yAxis:e.angleAxis],v=0;2>v;v++)if(h[p[v]]){var g=t.coordDimToDataDim(o[v])[0];p[v]=m(n,g,p[v])}e.coord=p}}return e},d=function(t,e,i,n){var r={};return null!=t.valueIndex||null!=t.valueDim?(r.valueDataDim=null!=t.valueIndex?e.getDimension(t.valueIndex):t.valueDim,r.valueAxis=i[c](n.dataDimToCoordDim(r.valueDataDim)),r.baseAxis=i.getOtherAxis(r.valueAxis),r.baseDataDim=n.coordDimToDataDim(r.baseAxis.dim)[0]):(r.baseAxis=n[P](),r.valueAxis=i.getOtherAxis(r.baseAxis),r.baseDataDim=n.coordDimToDataDim(r.baseAxis.dim)[0],r.valueDataDim=n.coordDimToDataDim(r.valueAxis.dim)[0]),r},p=function(t,i){return t&&t.containData&&i.coord&&!e(i)?t.containData(i.coord):!0},v=function(t,e,i,n){return 2>n?t.coord&&t.coord[n]:t.value},m=function(t,e,i){if("average"===i){var n=0,r=0;return t.each(e,function(t){isNaN(t)||(n+=t,r++)},!0),n/r}return t.getDataExtent(e,!0)["max"===i?1:0]};return{dataTransform:f,dataFilter:p,dimValueGetter:v,getAxisInfo:d,numCalculate:m}}),e("echarts/component/marker/MarkerView",[Le,a],function(t){return t(a).extendComponentView({type:"marker",init:function(){this.markerGroupMap={}},render:function(t,e,i){var n=this.markerGroupMap;for(var r in n)n[r].__keep=!1;var a=this.type+"Model";e[ce](function(t){var n=t[a];n&&this.renderSeries(t,n,e,i)},this);for(var r in n)n[r].__keep||this.group[se](n[r].group)},renderSeries:function(){}})}),e("echarts/component/axis/AxisBuilder",[Le,Ce,"../../util/format",f,"../../model/Model","../../util/number","zrender/core/vector"],function(t){function e(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function i(t,e,i){var n,r,a=m(e-t[v]);return g(a)?(r=i>0?"top":pe,n=R):g(a-M)?(r=i>0?pe:"top",n=R):(r=B,n=a>0&&M>a?i>0?"right":"left":i>0?"left":"right"),{rotation:a,textAlign:n,verticalAlign:r}}function n(t,e,i,n){var r,a,o=m(i-t[v]),s=n[0]>n[1],l="start"===e&&!s||"start"!==e&&s;return g(o-M/2)?(a=l?pe:"top",r=R):g(o-1.5*M)?(a=l?"top":pe,r=R):(a=B,r=1.5*M>o&&o>M/2?l?"left":"right":l?"right":"left"),{rotation:o,textAlign:r,verticalAlign:a}}function a(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}var u=t(Ce),c=t("../../util/format"),h=t(f),d=t("../../model/Model"),p=t("../../util/number"),m=p.remRadian,g=p.isRadianAroundZero,y=t("zrender/core/vector"),x=y[_],b=u[o],M=Math.PI,S=function(t,e){this.opt=e,this.axisModel=t,u[ae](e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new h.Group;var i=new h.Group({position:e[E].slice(),rotation:e[v]});i.updateTransform(),this._transform=i[r],this._dumbGroup=i};S[Se]={constructor:S,hasBuilder:function(t){return!!T[t]},add:function(t){T[t].call(this)},getGroup:function(){return this.group}};var T={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var i=this.axisModel.axis[k](),n=this._transform,r=[i[0],0],a=[i[1],0];n&&(x(r,r,n),x(a,a,n)),this.group.add(new h.Line(h.subPixelOptimizeLine({anid:"line",shape:{x1:r[0],y1:r[1],x2:a[0],y2:a[1]},style:u[oe]({lineCap:"round"},e[xe]("axisLine.lineStyle").getLineStyle()),strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})))}},axisTick:function(){var t=this.axisModel;if(t.get("axisTick.show"))for(var e=t.axis,i=t[xe]("axisTick"),n=this.opt,r=i[xe]("lineStyle"),a=i.get(re),o=L(i,n.labelInterval),s=e.getTicksCoords(i.get("alignWithLabel")),l=e.scale[z](),c=[],f=[],d=this._transform,p=0;p<s[re];p++)if(!P(e,p,o)){var v=s[p];c[0]=v,c[1]=0,f[0]=v,f[1]=n.tickDirection*a,d&&(x(c,c,d),x(f,f,d)),this.group.add(new h.Line(h.subPixelOptimizeLine({anid:"tick_"+l[p],shape:{x1:c[0],y1:c[1],x2:f[0],y2:f[1]},style:u[ae](r.getLineStyle(),{stroke:t.get("axisLine.lineStyle.color")}),z2:2,silent:!0})))}},axisLabel:function(){function t(t,e){var i=t&&t[N]().clone(),n=e&&e[N]().clone();return i&&n?(i[_](t.getLocalTransform()),n[_](e.getLocalTransform()),i.intersect(n)):void 0}var n=this.opt,r=this.axisModel,o=b(n.axisLabelShow,r.get("axisLabel.show"));if(o){var u=r.axis,c=r[xe]("axisLabel"),f=c[xe](V),p=c.get("margin"),m=u.scale[z](),g=r.getFormattedLabels(),y=b(n.labelRotation,c.get("rotate"))||0;y=y*M/180;for(var x=i(n,y,n.labelDirection),S=r.get("data"),T=[],C=a(r),L=r.get("triggerEvent"),A=0;A<m[re];A++)if(!P(u,A,n.labelInterval)){var k=f;S&&S[A]&&S[A][V]&&(k=new d(S[A][V],f,r[w]));var D=k.getTextColor()||r.get("axisLine.lineStyle.color"),I=u[l](m[A]),O=[I,n.labelOffset+n.labelDirection*p],E=u.scale.getLabel(m[A]),R=new h.Text({anid:"label_"+m[A],style:{text:g[A],textAlign:k.get("align",!0)||x[F],textVerticalAlign:k.get("baseline",!0)||x.verticalAlign,textFont:k[G](),fill:typeof D===j?D(E):D},position:O,rotation:x[v],silent:C,z2:10});L&&(R.eventData=e(r),R.eventData.targetType="axisLabel",R.eventData.value=E),this._dumbGroup.add(R),R.updateTransform(),T.push(R),this.group.add(R),R.decomposeTransform()}if(u.type!==s){if(r.getMin?r.getMin():r.get("min")){var B=T[0],H=T[1];t(B,H)&&(B[ve]=!0)}if(r.getMax?r.getMax():r.get("max")){var q=T[T[re]-1],W=T[T[re]-2];t(W,q)&&(q[ve]=!0)}}}},axisName:function(){var t=this.opt,r=this.axisModel,o=b(t.axisName,r.get("name"));if(o){var s,l=r.get("nameLocation"),f=t.nameDirection,d=r[xe]("nameTextStyle"),p=r.get("nameGap")||0,m=this.axisModel.axis[k](),g=m[0]>m[1]?-1:1,y=["start"===l?m[0]-g*p:"end"===l?m[1]+g*p:(m[0]+m[1])/2,l===B?t.labelOffset+f*p:0],_=r.get("nameRotate");null!=_&&(_=_*M/180);var x;l===B?s=i(t,null!=_?_:t[v],f):(s=n(t,l,_||0,m),x=t.axisNameAvailableWidth,null!=x&&(x=Math.abs(x/Math.sin(s[v])),!isFinite(x)&&(x=null)));var w=d[G](),S=r.get("nameTruncate",!0)||{},T=S.ellipsis,C=b(S.maxWidth,x),P=null!=T&&null!=C?c.truncateText(o,C,w,T,{minChar:2,placeholder:S.placeholder}):o,L=r.get("tooltip",!0),A=r.mainType,z={componentType:A,name:o,$vars:["name"]};z[A+"Index"]=r.componentIndex;var D=new h.Text({anid:"name",__fullText:o,__truncatedText:P,style:{text:P,textFont:w,fill:d.getTextColor()||r.get("axisLine.lineStyle.color"),textAlign:s[F],textVerticalAlign:s.verticalAlign},position:y,rotation:s[v],silent:a(r),z2:1,tooltip:L&&L.show?u[oe]({content:o,formatter:function(){return o},formatterParams:z},L):null});r.get("triggerEvent")&&(D.eventData=e(r),D.eventData.targetType="axisName",D.eventData.name=o),this._dumbGroup.add(D),D.updateTransform(),this.group.add(D),D.decomposeTransform()}}},P=S.ifIgnoreOnTick=function(t,e,i){var n,r=t.scale;return r.type===C&&(typeof i===j?(n=r[z]()[e],!i(n,r.getLabel(n))):e%(i+1))},L=S.getInterval=function(t,e){var i=t.get("interval");return(null==i||"auto"==i)&&(i=e),i};return S}),e("echarts/chart/pie/labelLayout",[Le,"zrender/contain/text"],function(t){function e(t,e,i,n,r,a,o){function s(e,i,n){for(var r=e;i>r;r++)if(t[r].y+=n,r>e&&i>r+1&&t[r+1].y>t[r].y+t[r][de])return void l(r,n/2);l(i-1,n/2)}function l(e,i){for(var n=e;n>=0&&(t[n].y-=i,!(n>0&&t[n].y>t[n-1].y+t[n-1][de]));n--);}function u(t,e,i,n,r,a){for(var o=a>0?e?Number.MAX_VALUE:0:e?Number.MAX_VALUE:0,s=0,l=t[re];l>s;s++)if(t[s][E]!==R){var u=Math.abs(t[s].y-n),c=t[s].len,h=t[s].len2,f=r+c>u?Math.sqrt((r+c+h)*(r+c+h)-u*u):Math.abs(t[s].x-i);e&&f>=o&&(f=o-10),!e&&o>=f&&(f=o+10),t[s].x=i+f*a,o=f}}t.sort(function(t,e){return t.y-e.y});for(var c,h=0,f=t[re],d=[],p=[],v=0;f>v;v++)c=t[v].y-h,0>c&&s(v,f,-c,r),h=t[v].y+t[v][de];0>o-h&&l(f-1,h-o);for(var v=0;f>v;v++)t[v].y>=i?p.push(t[v]):d.push(t[v]);u(d,!1,e,i,n,r),u(p,!0,e,i,n,r)}function i(t,i,n,r,a,o){for(var s=[],l=[],u=0;u<t[re];u++)t[u].x<i?s.push(t[u]):l.push(t[u]);e(l,i,n,r,1,a,o),e(s,i,n,r,-1,a,o);for(var u=0;u<t[re];u++){var c=t[u].linePoints;if(c){var h=c[1][0]-c[2][0];c[2][0]=t[u].x<i?t[u].x+3:t[u].x-3,c[1][1]=c[2][1]=t[u].y,c[1][0]=c[2][0]+h}}}var n=t("zrender/contain/text");return function(t,e,r,a){var o,s,l=t[ue](),u=[],c=!1;l.each(function(i){var r,a,h,f,d=l.getItemLayout(i),v=l[p](i),g=v[xe]("label.normal"),y=g.get(E)||v.get("label.emphasis.position"),_=v[xe]("labelLine.normal"),x=_.get(re),w=_.get("length2"),M=(d.startAngle+d.endAngle)/2,S=Math.cos(M),C=Math.sin(M);o=d.cx,s=d.cy;var P=y===m||"inner"===y;if(y===R)r=d.cx,a=d.cy,f=R;else{var L=(P?(d.r+d.r0)/2*S:d.r*S)+o,A=(P?(d.r+d.r0)/2*C:d.r*C)+s;if(r=L+3*S,a=A+3*C,!P){var k=L+S*(x+e-d.r),z=A+C*(x+e-d.r),D=k+(0>S?-1:1)*w,I=z;r=D+(0>S?-5:5),a=I,h=[[L,A],[k,z],[D,I]]}f=P?R:S>0?"left":"right"}var O=g[xe](V)[G](),B=g.get("rotate")?0>S?-M+Math.PI:-M:0,F=t.getFormattedLabel(i,b)||l[T](i),H=n[N](F,O,f,"top");c=!!B,d.label={x:r,y:a,position:y,height:H[de],len:x,len2:w,linePoints:h,textAlign:f,verticalAlign:"middle",font:O,rotation:B},P||u.push(d.label)}),!c&&t.get("avoidLabelOverlap")&&i(u,o,s,e,r,a)}}),e("zrender",["zrender/zrender"],function(t){return t}),e("echarts",["echarts/echarts"],function(t){return t});var Ae=t("echarts");return Ae.graphic=t("echarts/util/graphic"),Ae.number=t("echarts/util/number"),Ae.format=t("echarts/util/format"),t("echarts/chart/bar"),t("echarts/chart/line"),t("echarts/chart/pie"),t("echarts/component/grid"),t("echarts/component/title"),t("echarts/component/legend"),t("echarts/component/tooltip"),t("echarts/component/markPoint"),t("zrender/vml/vml"),Ae});
;/*! JSEncrypt v2.3.1 | https://npmcdn.com/jsencrypt@2.3.1/LICENSE.txt */
!function(t,e){"function"==typeof define&&define.amd?define(["exports"],e):e("object"==typeof exports&&"string"!=typeof exports.nodeName?module.exports:t)}(this,function(t){function e(t,e,i){null!=t&&("number"==typeof t?this.fromNumber(t,e,i):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function i(){return new e(null)}function r(t,e,i,r,s,n){for(;--n>=0;){var o=e*this[t++]+i[r]+s;s=Math.floor(o/67108864),i[r++]=67108863&o}return s}function s(t,e,i,r,s,n){for(var o=32767&e,h=e>>15;--n>=0;){var a=32767&this[t],u=this[t++]>>15,c=h*a+u*o;a=o*a+((32767&c)<<15)+i[r]+(1073741823&s),s=(a>>>30)+(c>>>15)+h*u+(s>>>30),i[r++]=1073741823&a}return s}function n(t,e,i,r,s,n){for(var o=16383&e,h=e>>14;--n>=0;){var a=16383&this[t],u=this[t++]>>14,c=h*a+u*o;a=o*a+((16383&c)<<14)+i[r]+s,s=(a>>28)+(c>>14)+h*u,i[r++]=268435455&a}return s}function o(t){return Be.charAt(t)}function h(t,e){var i=Ke[t.charCodeAt(e)];return null==i?-1:i}function a(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s}function u(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+this.DV:this.t=0}function c(t){var e=i();return e.fromInt(t),e}function f(t,i){var r;if(16==i)r=4;else if(8==i)r=3;else if(256==i)r=8;else if(2==i)r=1;else if(32==i)r=5;else{if(4!=i)return void this.fromRadix(t,i);r=2}this.t=0,this.s=0;for(var s=t.length,n=!1,o=0;--s>=0;){var a=8==r?255&t[s]:h(t,s);0>a?"-"==t.charAt(s)&&(n=!0):(n=!1,0==o?this[this.t++]=a:o+r>this.DB?(this[this.t-1]|=(a&(1<<this.DB-o)-1)<<o,this[this.t++]=a>>this.DB-o):this[this.t-1]|=a<<o,o+=r,o>=this.DB&&(o-=this.DB))}8==r&&0!=(128&t[0])&&(this.s=-1,o>0&&(this[this.t-1]|=(1<<this.DB-o)-1<<o)),this.clamp(),n&&e.ZERO.subTo(this,this)}function p(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function l(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var i,r=(1<<e)-1,s=!1,n="",h=this.t,a=this.DB-h*this.DB%e;if(h-- >0)for(a<this.DB&&(i=this[h]>>a)>0&&(s=!0,n=o(i));h>=0;)e>a?(i=(this[h]&(1<<a)-1)<<e-a,i|=this[--h]>>(a+=this.DB-e)):(i=this[h]>>(a-=e)&r,0>=a&&(a+=this.DB,--h)),i>0&&(s=!0),s&&(n+=o(i));return s?n:"0"}function d(){var t=i();return e.ZERO.subTo(this,t),t}function g(){return this.s<0?this.negate():this}function m(t){var e=this.s-t.s;if(0!=e)return e;var i=this.t;if(e=i-t.t,0!=e)return this.s<0?-e:e;for(;--i>=0;)if(0!=(e=this[i]-t[i]))return e;return 0}function y(t){var e,i=1;return 0!=(e=t>>>16)&&(t=e,i+=16),0!=(e=t>>8)&&(t=e,i+=8),0!=(e=t>>4)&&(t=e,i+=4),0!=(e=t>>2)&&(t=e,i+=2),0!=(e=t>>1)&&(t=e,i+=1),i}function b(){return this.t<=0?0:this.DB*(this.t-1)+y(this[this.t-1]^this.s&this.DM)}function T(t,e){var i;for(i=this.t-1;i>=0;--i)e[i+t]=this[i];for(i=t-1;i>=0;--i)e[i]=0;e.t=this.t+t,e.s=this.s}function S(t,e){for(var i=t;i<this.t;++i)e[i-t]=this[i];e.t=Math.max(this.t-t,0),e.s=this.s}function R(t,e){var i,r=t%this.DB,s=this.DB-r,n=(1<<s)-1,o=Math.floor(t/this.DB),h=this.s<<r&this.DM;for(i=this.t-1;i>=0;--i)e[i+o+1]=this[i]>>s|h,h=(this[i]&n)<<r;for(i=o-1;i>=0;--i)e[i]=0;e[o]=h,e.t=this.t+o+1,e.s=this.s,e.clamp()}function E(t,e){e.s=this.s;var i=Math.floor(t/this.DB);if(i>=this.t)return void(e.t=0);var r=t%this.DB,s=this.DB-r,n=(1<<r)-1;e[0]=this[i]>>r;for(var o=i+1;o<this.t;++o)e[o-i-1]|=(this[o]&n)<<s,e[o-i]=this[o]>>r;r>0&&(e[this.t-i-1]|=(this.s&n)<<s),e.t=this.t-i,e.clamp()}function D(t,e){for(var i=0,r=0,s=Math.min(t.t,this.t);s>i;)r+=this[i]-t[i],e[i++]=r&this.DM,r>>=this.DB;if(t.t<this.t){for(r-=t.s;i<this.t;)r+=this[i],e[i++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;i<t.t;)r-=t[i],e[i++]=r&this.DM,r>>=this.DB;r-=t.s}e.s=0>r?-1:0,-1>r?e[i++]=this.DV+r:r>0&&(e[i++]=r),e.t=i,e.clamp()}function w(t,i){var r=this.abs(),s=t.abs(),n=r.t;for(i.t=n+s.t;--n>=0;)i[n]=0;for(n=0;n<s.t;++n)i[n+r.t]=r.am(0,s[n],i,n,0,r.t);i.s=0,i.clamp(),this.s!=t.s&&e.ZERO.subTo(i,i)}function x(t){for(var e=this.abs(),i=t.t=2*e.t;--i>=0;)t[i]=0;for(i=0;i<e.t-1;++i){var r=e.am(i,e[i],t,2*i,0,1);(t[i+e.t]+=e.am(i+1,2*e[i],t,2*i+1,r,e.t-i-1))>=e.DV&&(t[i+e.t]-=e.DV,t[i+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(i,e[i],t,2*i,0,1)),t.s=0,t.clamp()}function B(t,r,s){var n=t.abs();if(!(n.t<=0)){var o=this.abs();if(o.t<n.t)return null!=r&&r.fromInt(0),void(null!=s&&this.copyTo(s));null==s&&(s=i());var h=i(),a=this.s,u=t.s,c=this.DB-y(n[n.t-1]);c>0?(n.lShiftTo(c,h),o.lShiftTo(c,s)):(n.copyTo(h),o.copyTo(s));var f=h.t,p=h[f-1];if(0!=p){var l=p*(1<<this.F1)+(f>1?h[f-2]>>this.F2:0),d=this.FV/l,g=(1<<this.F1)/l,m=1<<this.F2,v=s.t,b=v-f,T=null==r?i():r;for(h.dlShiftTo(b,T),s.compareTo(T)>=0&&(s[s.t++]=1,s.subTo(T,s)),e.ONE.dlShiftTo(f,T),T.subTo(h,h);h.t<f;)h[h.t++]=0;for(;--b>=0;){var S=s[--v]==p?this.DM:Math.floor(s[v]*d+(s[v-1]+m)*g);if((s[v]+=h.am(0,S,s,b,0,f))<S)for(h.dlShiftTo(b,T),s.subTo(T,s);s[v]<--S;)s.subTo(T,s)}null!=r&&(s.drShiftTo(f,r),a!=u&&e.ZERO.subTo(r,r)),s.t=f,s.clamp(),c>0&&s.rShiftTo(c,s),0>a&&e.ZERO.subTo(s,s)}}}function K(t){var r=i();return this.abs().divRemTo(t,null,r),this.s<0&&r.compareTo(e.ZERO)>0&&t.subTo(r,r),r}function A(t){this.m=t}function U(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function O(t){return t}function V(t){t.divRemTo(this.m,null,t)}function N(t,e,i){t.multiplyTo(e,i),this.reduce(i)}function J(t,e){t.squareTo(e),this.reduce(e)}function I(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}function P(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function M(t){var r=i();return t.abs().dlShiftTo(this.m.t,r),r.divRemTo(this.m,null,r),t.s<0&&r.compareTo(e.ZERO)>0&&this.m.subTo(r,r),r}function L(t){var e=i();return t.copyTo(e),this.reduce(e),e}function q(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var i=32767&t[e],r=i*this.mpl+((i*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(i=e+this.m.t,t[i]+=this.m.am(0,r,t,e,0,this.m.t);t[i]>=t.DV;)t[i]-=t.DV,t[++i]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function C(t,e){t.squareTo(e),this.reduce(e)}function H(t,e,i){t.multiplyTo(e,i),this.reduce(i)}function j(){return 0==(this.t>0?1&this[0]:this.s)}function k(t,r){if(t>4294967295||1>t)return e.ONE;var s=i(),n=i(),o=r.convert(this),h=y(t)-1;for(o.copyTo(s);--h>=0;)if(r.sqrTo(s,n),(t&1<<h)>0)r.mulTo(n,o,s);else{var a=s;s=n,n=a}return r.revert(s)}function F(t,e){var i;return i=256>t||e.isEven()?new A(e):new P(e),this.exp(t,i)}
// Copyright (c) 2005-2009  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.
function _(){var t=i();return this.copyTo(t),t}function z(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Z(){return 0==this.t?this.s:this[0]<<24>>24}function G(){return 0==this.t?this.s:this[0]<<16>>16}function $(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function Y(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function W(t){if(null==t&&(t=10),0==this.signum()||2>t||t>36)return"0";var e=this.chunkSize(t),r=Math.pow(t,e),s=c(r),n=i(),o=i(),h="";for(this.divRemTo(s,n,o);n.signum()>0;)h=(r+o.intValue()).toString(t).substr(1)+h,n.divRemTo(s,n,o);return o.intValue().toString(t)+h}function Q(t,i){this.fromInt(0),null==i&&(i=10);for(var r=this.chunkSize(i),s=Math.pow(i,r),n=!1,o=0,a=0,u=0;u<t.length;++u){var c=h(t,u);0>c?"-"==t.charAt(u)&&0==this.signum()&&(n=!0):(a=i*a+c,++o>=r&&(this.dMultiply(s),this.dAddOffset(a,0),o=0,a=0))}o>0&&(this.dMultiply(Math.pow(i,o)),this.dAddOffset(a,0)),n&&e.ZERO.subTo(this,this)}function X(t,i,r){if("number"==typeof i)if(2>t)this.fromInt(1);else for(this.fromNumber(t,r),this.testBit(t-1)||this.bitwiseTo(e.ONE.shiftLeft(t-1),ht,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(i);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(e.ONE.shiftLeft(t-1),this);else{var s=new Array,n=7&t;s.length=(t>>3)+1,i.nextBytes(s),n>0?s[0]&=(1<<n)-1:s[0]=0,this.fromString(s,256)}}function tt(){var t=this.t,e=new Array;e[0]=this.s;var i,r=this.DB-t*this.DB%8,s=0;if(t-- >0)for(r<this.DB&&(i=this[t]>>r)!=(this.s&this.DM)>>r&&(e[s++]=i|this.s<<this.DB-r);t>=0;)8>r?(i=(this[t]&(1<<r)-1)<<8-r,i|=this[--t]>>(r+=this.DB-8)):(i=this[t]>>(r-=8)&255,0>=r&&(r+=this.DB,--t)),0!=(128&i)&&(i|=-256),0==s&&(128&this.s)!=(128&i)&&++s,(s>0||i!=this.s)&&(e[s++]=i);return e}function et(t){return 0==this.compareTo(t)}function it(t){return this.compareTo(t)<0?this:t}function rt(t){return this.compareTo(t)>0?this:t}function st(t,e,i){var r,s,n=Math.min(t.t,this.t);for(r=0;n>r;++r)i[r]=e(this[r],t[r]);if(t.t<this.t){for(s=t.s&this.DM,r=n;r<this.t;++r)i[r]=e(this[r],s);i.t=this.t}else{for(s=this.s&this.DM,r=n;r<t.t;++r)i[r]=e(s,t[r]);i.t=t.t}i.s=e(this.s,t.s),i.clamp()}function nt(t,e){return t&e}function ot(t){var e=i();return this.bitwiseTo(t,nt,e),e}function ht(t,e){return t|e}function at(t){var e=i();return this.bitwiseTo(t,ht,e),e}function ut(t,e){return t^e}function ct(t){var e=i();return this.bitwiseTo(t,ut,e),e}function ft(t,e){return t&~e}function pt(t){var e=i();return this.bitwiseTo(t,ft,e),e}function lt(){for(var t=i(),e=0;e<this.t;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t}function dt(t){var e=i();return 0>t?this.rShiftTo(-t,e):this.lShiftTo(t,e),e}function gt(t){var e=i();return 0>t?this.lShiftTo(-t,e):this.rShiftTo(t,e),e}function mt(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function yt(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+mt(this[t]);return this.s<0?this.t*this.DB:-1}function vt(t){for(var e=0;0!=t;)t&=t-1,++e;return e}function bt(){for(var t=0,e=this.s&this.DM,i=0;i<this.t;++i)t+=vt(this[i]^e);return t}function Tt(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)}function St(t,i){var r=e.ONE.shiftLeft(t);return this.bitwiseTo(r,i,r),r}function Rt(t){return this.changeBit(t,ht)}function Et(t){return this.changeBit(t,ft)}function Dt(t){return this.changeBit(t,ut)}function wt(t,e){for(var i=0,r=0,s=Math.min(t.t,this.t);s>i;)r+=this[i]+t[i],e[i++]=r&this.DM,r>>=this.DB;if(t.t<this.t){for(r+=t.s;i<this.t;)r+=this[i],e[i++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;i<t.t;)r+=t[i],e[i++]=r&this.DM,r>>=this.DB;r+=t.s}e.s=0>r?-1:0,r>0?e[i++]=r:-1>r&&(e[i++]=this.DV+r),e.t=i,e.clamp()}function xt(t){var e=i();return this.addTo(t,e),e}function Bt(t){var e=i();return this.subTo(t,e),e}function Kt(t){var e=i();return this.multiplyTo(t,e),e}function At(){var t=i();return this.squareTo(t),t}function Ut(t){var e=i();return this.divRemTo(t,e,null),e}function Ot(t){var e=i();return this.divRemTo(t,null,e),e}function Vt(t){var e=i(),r=i();return this.divRemTo(t,e,r),new Array(e,r)}function Nt(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()}function Jt(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}}function It(){}function Pt(t){return t}function Mt(t,e,i){t.multiplyTo(e,i)}function Lt(t,e){t.squareTo(e)}function qt(t){return this.exp(t,new It)}function Ct(t,e,i){var r=Math.min(this.t+t.t,e);for(i.s=0,i.t=r;r>0;)i[--r]=0;var s;for(s=i.t-this.t;s>r;++r)i[r+this.t]=this.am(0,t[r],i,r,0,this.t);for(s=Math.min(t.t,e);s>r;++r)this.am(0,t[r],i,r,0,e-r);i.clamp()}function Ht(t,e,i){--e;var r=i.t=this.t+t.t-e;for(i.s=0;--r>=0;)i[r]=0;for(r=Math.max(e-this.t,0);r<t.t;++r)i[this.t+r-e]=this.am(e-r,t[r],i,0,0,this.t+r-e);i.clamp(),i.drShiftTo(1,i)}function jt(t){this.r2=i(),this.q3=i(),e.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}function kt(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=i();return t.copyTo(e),this.reduce(e),e}function Ft(t){return t}function _t(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)}function zt(t,e){t.squareTo(e),this.reduce(e)}function Zt(t,e,i){t.multiplyTo(e,i),this.reduce(i)}function Gt(t,e){var r,s,n=t.bitLength(),o=c(1);if(0>=n)return o;r=18>n?1:48>n?3:144>n?4:768>n?5:6,s=8>n?new A(e):e.isEven()?new jt(e):new P(e);var h=new Array,a=3,u=r-1,f=(1<<r)-1;if(h[1]=s.convert(this),r>1){var p=i();for(s.sqrTo(h[1],p);f>=a;)h[a]=i(),s.mulTo(p,h[a-2],h[a]),a+=2}var l,d,g=t.t-1,m=!0,v=i();for(n=y(t[g])-1;g>=0;){for(n>=u?l=t[g]>>n-u&f:(l=(t[g]&(1<<n+1)-1)<<u-n,g>0&&(l|=t[g-1]>>this.DB+n-u)),a=r;0==(1&l);)l>>=1,--a;if((n-=a)<0&&(n+=this.DB,--g),m)h[l].copyTo(o),m=!1;else{for(;a>1;)s.sqrTo(o,v),s.sqrTo(v,o),a-=2;a>0?s.sqrTo(o,v):(d=o,o=v,v=d),s.mulTo(v,h[l],o)}for(;g>=0&&0==(t[g]&1<<n);)s.sqrTo(o,v),d=o,o=v,v=d,--n<0&&(n=this.DB-1,--g)}return s.revert(o)}function $t(t){var e=this.s<0?this.negate():this.clone(),i=t.s<0?t.negate():t.clone();if(e.compareTo(i)<0){var r=e;e=i,i=r}var s=e.getLowestSetBit(),n=i.getLowestSetBit();if(0>n)return e;for(n>s&&(n=s),n>0&&(e.rShiftTo(n,e),i.rShiftTo(n,i));e.signum()>0;)(s=e.getLowestSetBit())>0&&e.rShiftTo(s,e),(s=i.getLowestSetBit())>0&&i.rShiftTo(s,i),e.compareTo(i)>=0?(e.subTo(i,e),e.rShiftTo(1,e)):(i.subTo(e,i),i.rShiftTo(1,i));return n>0&&i.lShiftTo(n,i),i}function Yt(t){if(0>=t)return 0;var e=this.DV%t,i=this.s<0?t-1:0;if(this.t>0)if(0==e)i=this[0]%t;else for(var r=this.t-1;r>=0;--r)i=(e*i+this[r])%t;return i}function Wt(t){var i=t.isEven();if(this.isEven()&&i||0==t.signum())return e.ZERO;for(var r=t.clone(),s=this.clone(),n=c(1),o=c(0),h=c(0),a=c(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),i?(n.isEven()&&o.isEven()||(n.addTo(this,n),o.subTo(t,o)),n.rShiftTo(1,n)):o.isEven()||o.subTo(t,o),o.rShiftTo(1,o);for(;s.isEven();)s.rShiftTo(1,s),i?(h.isEven()&&a.isEven()||(h.addTo(this,h),a.subTo(t,a)),h.rShiftTo(1,h)):a.isEven()||a.subTo(t,a),a.rShiftTo(1,a);r.compareTo(s)>=0?(r.subTo(s,r),i&&n.subTo(h,n),o.subTo(a,o)):(s.subTo(r,s),i&&h.subTo(n,h),a.subTo(o,a))}return 0!=s.compareTo(e.ONE)?e.ZERO:a.compareTo(t)>=0?a.subtract(t):a.signum()<0?(a.addTo(t,a),a.signum()<0?a.add(t):a):a}function Qt(t){var e,i=this.abs();if(1==i.t&&i[0]<=Ae[Ae.length-1]){for(e=0;e<Ae.length;++e)if(i[0]==Ae[e])return!0;return!1}if(i.isEven())return!1;for(e=1;e<Ae.length;){for(var r=Ae[e],s=e+1;s<Ae.length&&Ue>r;)r*=Ae[s++];for(r=i.modInt(r);s>e;)if(r%Ae[e++]==0)return!1}return i.millerRabin(t)}function Xt(t){var r=this.subtract(e.ONE),s=r.getLowestSetBit();if(0>=s)return!1;var n=r.shiftRight(s);t=t+1>>1,t>Ae.length&&(t=Ae.length);for(var o=i(),h=0;t>h;++h){o.fromInt(Ae[Math.floor(Math.random()*Ae.length)]);var a=o.modPow(n,this);if(0!=a.compareTo(e.ONE)&&0!=a.compareTo(r)){for(var u=1;u++<s&&0!=a.compareTo(r);)if(a=a.modPowInt(2,this),0==a.compareTo(e.ONE))return!1;if(0!=a.compareTo(r))return!1}}return!0}function te(){this.i=0,this.j=0,this.S=new Array}function ee(t){var e,i,r;for(e=0;256>e;++e)this.S[e]=e;for(i=0,e=0;256>e;++e)i=i+this.S[e]+t[e%t.length]&255,r=this.S[e],this.S[e]=this.S[i],this.S[i]=r;this.i=0,this.j=0}function ie(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]}function re(){return new te}function se(){if(null==Oe){for(Oe=re();Je>Ne;){var t=Math.floor(65536*Math.random());Ve[Ne++]=255&t}for(Oe.init(Ve),Ne=0;Ne<Ve.length;++Ne)Ve[Ne]=0;Ne=0}return Oe.next()}function ne(t){var e;for(e=0;e<t.length;++e)t[e]=se()}function oe(){}function he(t,i){return new e(t,i)}function ae(t,i){if(i<t.length+11)return console.error("Message too long for RSA"),null;for(var r=new Array,s=t.length-1;s>=0&&i>0;){var n=t.charCodeAt(s--);128>n?r[--i]=n:n>127&&2048>n?(r[--i]=63&n|128,r[--i]=n>>6|192):(r[--i]=63&n|128,r[--i]=n>>6&63|128,r[--i]=n>>12|224)}r[--i]=0;for(var o=new oe,h=new Array;i>2;){for(h[0]=0;0==h[0];)o.nextBytes(h);r[--i]=h[0]}return r[--i]=2,r[--i]=0,new e(r)}function ue(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function ce(t,e){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=he(t,16),this.e=parseInt(e,16)):console.error("Invalid RSA public key")}function fe(t){return t.modPowInt(this.e,this.n)}function pe(t){var e=ae(t,this.n.bitLength()+7>>3);if(null==e)return null;var i=this.doPublic(e);if(null==i)return null;var r=i.toString(16);return 0==(1&r.length)?r:"0"+r}function le(t,e){for(var i=t.toByteArray(),r=0;r<i.length&&0==i[r];)++r;if(i.length-r!=e-1||2!=i[r])return null;for(++r;0!=i[r];)if(++r>=i.length)return null;for(var s="";++r<i.length;){var n=255&i[r];128>n?s+=String.fromCharCode(n):n>191&&224>n?(s+=String.fromCharCode((31&n)<<6|63&i[r+1]),++r):(s+=String.fromCharCode((15&n)<<12|(63&i[r+1])<<6|63&i[r+2]),r+=2)}return s}function de(t,e,i){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=he(t,16),this.e=parseInt(e,16),this.d=he(i,16)):console.error("Invalid RSA private key")}function ge(t,e,i,r,s,n,o,h){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=he(t,16),this.e=parseInt(e,16),this.d=he(i,16),this.p=he(r,16),this.q=he(s,16),this.dmp1=he(n,16),this.dmq1=he(o,16),this.coeff=he(h,16)):console.error("Invalid RSA private key")}function me(t,i){var r=new oe,s=t>>1;this.e=parseInt(i,16);for(var n=new e(i,16);;){for(;this.p=new e(t-s,1,r),0!=this.p.subtract(e.ONE).gcd(n).compareTo(e.ONE)||!this.p.isProbablePrime(10););for(;this.q=new e(s,1,r),0!=this.q.subtract(e.ONE).gcd(n).compareTo(e.ONE)||!this.q.isProbablePrime(10););if(this.p.compareTo(this.q)<=0){var o=this.p;this.p=this.q,this.q=o}var h=this.p.subtract(e.ONE),a=this.q.subtract(e.ONE),u=h.multiply(a);if(0==u.gcd(n).compareTo(e.ONE)){this.n=this.p.multiply(this.q),this.d=n.modInverse(u),this.dmp1=this.d.mod(h),this.dmq1=this.d.mod(a),this.coeff=this.q.modInverse(this.p);break}}}function ye(t){if(null==this.p||null==this.q)return t.modPow(this.d,this.n);for(var e=t.mod(this.p).modPow(this.dmp1,this.p),i=t.mod(this.q).modPow(this.dmq1,this.q);e.compareTo(i)<0;)e=e.add(this.p);return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)}function ve(t){var e=he(t,16),i=this.doPrivate(e);return null==i?null:le(i,this.n.bitLength()+7>>3)}function be(t){var e,i,r="";for(e=0;e+3<=t.length;e+=3)i=parseInt(t.substring(e,e+3),16),r+=Le.charAt(i>>6)+Le.charAt(63&i);for(e+1==t.length?(i=parseInt(t.substring(e,e+1),16),r+=Le.charAt(i<<2)):e+2==t.length&&(i=parseInt(t.substring(e,e+2),16),r+=Le.charAt(i>>2)+Le.charAt((3&i)<<4));(3&r.length)>0;)r+=qe;return r}function Te(t){var e,i,r="",s=0;for(e=0;e<t.length&&t.charAt(e)!=qe;++e)v=Le.indexOf(t.charAt(e)),v<0||(0==s?(r+=o(v>>2),i=3&v,s=1):1==s?(r+=o(i<<2|v>>4),i=15&v,s=2):2==s?(r+=o(i),r+=o(v>>2),i=3&v,s=3):(r+=o(i<<2|v>>4),r+=o(15&v),s=0));return 1==s&&(r+=o(i<<2)),r}
// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.
var Se,Re=0xdeadbeefcafe,Ee=15715070==(16777215&Re);Ee&&"Microsoft Internet Explorer"==navigator.appName?(e.prototype.am=s,Se=30):Ee&&"Netscape"!=navigator.appName?(e.prototype.am=r,Se=26):(e.prototype.am=n,Se=28),e.prototype.DB=Se,e.prototype.DM=(1<<Se)-1,e.prototype.DV=1<<Se;var De=52;e.prototype.FV=Math.pow(2,De),e.prototype.F1=De-Se,e.prototype.F2=2*Se-De;var we,xe,Be="0123456789abcdefghijklmnopqrstuvwxyz",Ke=new Array;for(we="0".charCodeAt(0),xe=0;9>=xe;++xe)Ke[we++]=xe;for(we="a".charCodeAt(0),xe=10;36>xe;++xe)Ke[we++]=xe;for(we="A".charCodeAt(0),xe=10;36>xe;++xe)Ke[we++]=xe;A.prototype.convert=U,A.prototype.revert=O,A.prototype.reduce=V,A.prototype.mulTo=N,A.prototype.sqrTo=J,P.prototype.convert=M,P.prototype.revert=L,P.prototype.reduce=q,P.prototype.mulTo=H,P.prototype.sqrTo=C,e.prototype.copyTo=a,e.prototype.fromInt=u,e.prototype.fromString=f,e.prototype.clamp=p,e.prototype.dlShiftTo=T,e.prototype.drShiftTo=S,e.prototype.lShiftTo=R,e.prototype.rShiftTo=E,e.prototype.subTo=D,e.prototype.multiplyTo=w,e.prototype.squareTo=x,e.prototype.divRemTo=B,e.prototype.invDigit=I,e.prototype.isEven=j,e.prototype.exp=k,e.prototype.toString=l,e.prototype.negate=d,e.prototype.abs=g,e.prototype.compareTo=m,e.prototype.bitLength=b,e.prototype.mod=K,e.prototype.modPowInt=F,e.ZERO=c(0),e.ONE=c(1),It.prototype.convert=Pt,It.prototype.revert=Pt,It.prototype.mulTo=Mt,It.prototype.sqrTo=Lt,jt.prototype.convert=kt,jt.prototype.revert=Ft,jt.prototype.reduce=_t,jt.prototype.mulTo=Zt,jt.prototype.sqrTo=zt;var Ae=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ue=(1<<26)/Ae[Ae.length-1];e.prototype.chunkSize=$,e.prototype.toRadix=W,e.prototype.fromRadix=Q,e.prototype.fromNumber=X,e.prototype.bitwiseTo=st,e.prototype.changeBit=St,e.prototype.addTo=wt,e.prototype.dMultiply=Nt,e.prototype.dAddOffset=Jt,e.prototype.multiplyLowerTo=Ct,e.prototype.multiplyUpperTo=Ht,e.prototype.modInt=Yt,e.prototype.millerRabin=Xt,e.prototype.clone=_,e.prototype.intValue=z,e.prototype.byteValue=Z,e.prototype.shortValue=G,e.prototype.signum=Y,e.prototype.toByteArray=tt,e.prototype.equals=et,e.prototype.min=it,e.prototype.max=rt,e.prototype.and=ot,e.prototype.or=at,e.prototype.xor=ct,e.prototype.andNot=pt,e.prototype.not=lt,e.prototype.shiftLeft=dt,e.prototype.shiftRight=gt,e.prototype.getLowestSetBit=yt,e.prototype.bitCount=bt,e.prototype.testBit=Tt,e.prototype.setBit=Rt,e.prototype.clearBit=Et,e.prototype.flipBit=Dt,e.prototype.add=xt,e.prototype.subtract=Bt,e.prototype.multiply=Kt,e.prototype.divide=Ut,e.prototype.remainder=Ot,e.prototype.divideAndRemainder=Vt,e.prototype.modPow=Gt,e.prototype.modInverse=Wt,e.prototype.pow=qt,e.prototype.gcd=$t,e.prototype.isProbablePrime=Qt,e.prototype.square=At,te.prototype.init=ee,te.prototype.next=ie;var Oe,Ve,Ne,Je=256;if(null==Ve){Ve=new Array,Ne=0;var Ie;if(window.crypto&&window.crypto.getRandomValues){var Pe=new Uint32Array(256);for(window.crypto.getRandomValues(Pe),Ie=0;Ie<Pe.length;++Ie)Ve[Ne++]=255&Pe[Ie]}var Me=function(t){if(this.count=this.count||0,this.count>=256||Ne>=Je)return void(window.removeEventListener?window.removeEventListener("mousemove",Me,!1):window.detachEvent&&window.detachEvent("onmousemove",Me));try{var e=t.x+t.y;Ve[Ne++]=255&e,this.count+=1}catch(i){}};window.addEventListener?window.addEventListener("mousemove",Me,!1):window.attachEvent&&window.attachEvent("onmousemove",Me)}oe.prototype.nextBytes=ne,ue.prototype.doPublic=fe,ue.prototype.setPublic=ce,ue.prototype.encrypt=pe,ue.prototype.doPrivate=ye,ue.prototype.setPrivate=de,ue.prototype.setPrivateEx=ge,ue.prototype.generate=me,ue.prototype.decrypt=ve,
// Copyright (c) 2011  Kevin M Burns Jr.
// All Rights Reserved.
// See "LICENSE" for details.
//
// Extension to jsbn which adds facilities for asynchronous RSA key generation
// Primarily created to avoid execution timeout on mobile devices
//
// http://www-cs-students.stanford.edu/~tjw/jsbn/
//
// ---
function(){var t=function(t,r,s){var n=new oe,o=t>>1;this.e=parseInt(r,16);var h=new e(r,16),a=this,u=function(){var r=function(){if(a.p.compareTo(a.q)<=0){var t=a.p;a.p=a.q,a.q=t}var i=a.p.subtract(e.ONE),r=a.q.subtract(e.ONE),n=i.multiply(r);0==n.gcd(h).compareTo(e.ONE)?(a.n=a.p.multiply(a.q),a.d=h.modInverse(n),a.dmp1=a.d.mod(i),a.dmq1=a.d.mod(r),a.coeff=a.q.modInverse(a.p),setTimeout(function(){s()},0)):setTimeout(u,0)},c=function(){a.q=i(),a.q.fromNumberAsync(o,1,n,function(){a.q.subtract(e.ONE).gcda(h,function(t){0==t.compareTo(e.ONE)&&a.q.isProbablePrime(10)?setTimeout(r,0):setTimeout(c,0)})})},f=function(){a.p=i(),a.p.fromNumberAsync(t-o,1,n,function(){a.p.subtract(e.ONE).gcda(h,function(t){0==t.compareTo(e.ONE)&&a.p.isProbablePrime(10)?setTimeout(c,0):setTimeout(f,0)})})};setTimeout(f,0)};setTimeout(u,0)};ue.prototype.generateAsync=t;var r=function(t,e){var i=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(i.compareTo(r)<0){var s=i;i=r,r=s}var n=i.getLowestSetBit(),o=r.getLowestSetBit();if(0>o)return void e(i);o>n&&(o=n),o>0&&(i.rShiftTo(o,i),r.rShiftTo(o,r));var h=function(){(n=i.getLowestSetBit())>0&&i.rShiftTo(n,i),(n=r.getLowestSetBit())>0&&r.rShiftTo(n,r),i.compareTo(r)>=0?(i.subTo(r,i),i.rShiftTo(1,i)):(r.subTo(i,r),r.rShiftTo(1,r)),i.signum()>0?setTimeout(h,0):(o>0&&r.lShiftTo(o,r),setTimeout(function(){e(r)},0))};setTimeout(h,10)};e.prototype.gcda=r;var s=function(t,i,r,s){if("number"==typeof i)if(2>t)this.fromInt(1);else{this.fromNumber(t,r),this.testBit(t-1)||this.bitwiseTo(e.ONE.shiftLeft(t-1),ht,this),this.isEven()&&this.dAddOffset(1,0);var n=this,o=function(){n.dAddOffset(2,0),n.bitLength()>t&&n.subTo(e.ONE.shiftLeft(t-1),n),n.isProbablePrime(i)?setTimeout(function(){s()},0):setTimeout(o,0)};setTimeout(o,0)}else{var h=new Array,a=7&t;h.length=(t>>3)+1,i.nextBytes(h),a>0?h[0]&=(1<<a)-1:h[0]=0,this.fromString(h,256)}};e.prototype.fromNumberAsync=s}();var Le="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",qe="=",Ce=Ce||{};Ce.env=Ce.env||{};var He=Ce,je=Object.prototype,ke="[object Function]",Fe=["toString","valueOf"];Ce.env.parseUA=function(t){var e,i=function(t){var e=0;return parseFloat(t.replace(/\./g,function(){return 1==e++?"":"."}))},r=navigator,s={ie:0,opera:0,gecko:0,webkit:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,webos:0,caja:r&&r.cajaVersion,secure:!1,os:null},n=t||navigator&&navigator.userAgent,o=window&&window.location,h=o&&o.href;return s.secure=h&&0===h.toLowerCase().indexOf("https"),n&&(/windows|win32/i.test(n)?s.os="windows":/macintosh/i.test(n)?s.os="macintosh":/rhino/i.test(n)&&(s.os="rhino"),/KHTML/.test(n)&&(s.webkit=1),e=n.match(/AppleWebKit\/([^\s]*)/),e&&e[1]&&(s.webkit=i(e[1]),/ Mobile\//.test(n)?(s.mobile="Apple",e=n.match(/OS ([^\s]*)/),e&&e[1]&&(e=i(e[1].replace("_","."))),s.ios=e,s.ipad=s.ipod=s.iphone=0,e=n.match(/iPad|iPod|iPhone/),e&&e[0]&&(s[e[0].toLowerCase()]=s.ios)):(e=n.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/),e&&(s.mobile=e[0]),/webOS/.test(n)&&(s.mobile="WebOS",e=n.match(/webOS\/([^\s]*);/),e&&e[1]&&(s.webos=i(e[1]))),/ Android/.test(n)&&(s.mobile="Android",e=n.match(/Android ([^\s]*);/),e&&e[1]&&(s.android=i(e[1])))),e=n.match(/Chrome\/([^\s]*)/),e&&e[1]?s.chrome=i(e[1]):(e=n.match(/AdobeAIR\/([^\s]*)/),e&&(s.air=e[0]))),s.webkit||(e=n.match(/Opera[\s\/]([^\s]*)/),e&&e[1]?(s.opera=i(e[1]),e=n.match(/Version\/([^\s]*)/),e&&e[1]&&(s.opera=i(e[1])),e=n.match(/Opera Mini[^;]*/),e&&(s.mobile=e[0])):(e=n.match(/MSIE\s([^;]*)/),e&&e[1]?s.ie=i(e[1]):(e=n.match(/Gecko\/([^\s]*)/),e&&(s.gecko=1,e=n.match(/rv:([^\s\)]*)/),e&&e[1]&&(s.gecko=i(e[1]))))))),s},Ce.env.ua=Ce.env.parseUA(),Ce.isFunction=function(t){return"function"==typeof t||je.toString.apply(t)===ke},Ce._IEEnumFix=Ce.env.ua.ie?function(t,e){var i,r,s;for(i=0;i<Fe.length;i+=1)r=Fe[i],s=e[r],He.isFunction(s)&&s!=je[r]&&(t[r]=s)}:function(){},Ce.extend=function(t,e,i){if(!e||!t)throw new Error("extend failed, please check that all dependencies are included.");var r,s=function(){};if(s.prototype=e.prototype,t.prototype=new s,t.prototype.constructor=t,t.superclass=e.prototype,e.prototype.constructor==je.constructor&&(e.prototype.constructor=e),i){for(r in i)He.hasOwnProperty(i,r)&&(t.prototype[r]=i[r]);He._IEEnumFix(t.prototype,i)}},/*
 * asn1.js - ASN.1 DER encoder classes
 *
 * Copyright (c) 2013 Kenji Urushima (kenji.urushima@gmail.com)
 *
 * This software is licensed under the terms of the MIT License.
 * http://kjur.github.com/jsrsasign/license
 *
 * The above copyright and license notice shall be 
 * included in all copies or substantial portions of the Software.
 */
/**
 * @fileOverview
 * @name asn1-1.0.js
 * @author Kenji Urushima kenji.urushima@gmail.com
 * @version 1.0.2 (2013-May-30)
 * @since 2.1
 * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
 */
"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),KJUR.asn1.ASN1Util=new function(){this.integerToByteHex=function(t){var e=t.toString(16);return e.length%2==1&&(e="0"+e),e},this.bigIntToMinTwosComplementsHex=function(t){var i=t.toString(16);if("-"!=i.substr(0,1))i.length%2==1?i="0"+i:i.match(/^[0-7]/)||(i="00"+i);else{var r=i.substr(1),s=r.length;s%2==1?s+=1:i.match(/^[0-7]/)||(s+=2);for(var n="",o=0;s>o;o++)n+="f";var h=new e(n,16),a=h.xor(t).add(e.ONE);i=a.toString(16).replace(/^-/,"")}return i},this.getPEMStringFromHex=function(t,e){var i=CryptoJS.enc.Hex.parse(t),r=CryptoJS.enc.Base64.stringify(i),s=r.replace(/(.{64})/g,"$1\r\n");return s=s.replace(/\r\n$/,""),"-----BEGIN "+e+"-----\r\n"+s+"\r\n-----END "+e+"-----\r\n"}},KJUR.asn1.ASN1Object=function(){var t="";this.getLengthHexFromValue=function(){if("undefined"==typeof this.hV||null==this.hV)throw"this.hV is null or undefined.";if(this.hV.length%2==1)throw"value hex must be even length: n="+t.length+",v="+this.hV;var e=this.hV.length/2,i=e.toString(16);if(i.length%2==1&&(i="0"+i),128>e)return i;var r=i.length/2;if(r>15)throw"ASN.1 length too long to represent by 8x: n = "+e.toString(16);var s=128+r;return s.toString(16)+i},this.getEncodedHex=function(){return(null==this.hTLV||this.isModified)&&(this.hV=this.getFreshValueHex(),this.hL=this.getLengthHexFromValue(),this.hTLV=this.hT+this.hL+this.hV,this.isModified=!1),this.hTLV},this.getValueHex=function(){return this.getEncodedHex(),this.hV},this.getFreshValueHex=function(){return""}},KJUR.asn1.DERAbstractString=function(t){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=stohex(this.s)},this.setStringHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t.str?this.setString(t.str):"undefined"!=typeof t.hex&&this.setStringHex(t.hex))},Ce.extend(KJUR.asn1.DERAbstractString,KJUR.asn1.ASN1Object),KJUR.asn1.DERAbstractTime=function(t){KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);this.localDateToUTC=function(t){utc=t.getTime()+6e4*t.getTimezoneOffset();var e=new Date(utc);return e},this.formatDate=function(t,e){var i=this.zeroPadding,r=this.localDateToUTC(t),s=String(r.getFullYear());"utc"==e&&(s=s.substr(2,2));var n=i(String(r.getMonth()+1),2),o=i(String(r.getDate()),2),h=i(String(r.getHours()),2),a=i(String(r.getMinutes()),2),u=i(String(r.getSeconds()),2);return s+n+o+h+a+u+"Z"},this.zeroPadding=function(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t},this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=stohex(this.s)},this.setByDateValue=function(t,e,i,r,s,n){var o=new Date(Date.UTC(t,e-1,i,r,s,n,0));this.setByDate(o)},this.getFreshValueHex=function(){return this.hV}},Ce.extend(KJUR.asn1.DERAbstractTime,KJUR.asn1.ASN1Object),KJUR.asn1.DERAbstractStructured=function(t){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);this.setByASN1ObjectArray=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array=t},this.appendASN1Object=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array.push(t)},this.asn1Array=new Array,"undefined"!=typeof t&&"undefined"!=typeof t.array&&(this.asn1Array=t.array)},Ce.extend(KJUR.asn1.DERAbstractStructured,KJUR.asn1.ASN1Object),KJUR.asn1.DERBoolean=function(){KJUR.asn1.DERBoolean.superclass.constructor.call(this),this.hT="01",this.hTLV="0101ff"},Ce.extend(KJUR.asn1.DERBoolean,KJUR.asn1.ASN1Object),KJUR.asn1.DERInteger=function(t){KJUR.asn1.DERInteger.superclass.constructor.call(this),this.hT="02",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var i=new e(String(t),10);this.setByBigInteger(i)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t.bigint?this.setByBigInteger(t.bigint):"undefined"!=typeof t["int"]?this.setByInteger(t["int"]):"undefined"!=typeof t.hex&&this.setValueHex(t.hex))},Ce.extend(KJUR.asn1.DERInteger,KJUR.asn1.ASN1Object),KJUR.asn1.DERBitString=function(t){KJUR.asn1.DERBitString.superclass.constructor.call(this),this.hT="03",this.setHexValueIncludingUnusedBits=function(t){this.hTLV=null,this.isModified=!0,this.hV=t},this.setUnusedBitsAndHexValue=function(t,e){if(0>t||t>7)throw"unused bits shall be from 0 to 7: u = "+t;var i="0"+t;this.hTLV=null,this.isModified=!0,this.hV=i+e},this.setByBinaryString=function(t){t=t.replace(/0+$/,"");var e=8-t.length%8;8==e&&(e=0);for(var i=0;e>=i;i++)t+="0";for(var r="",i=0;i<t.length-1;i+=8){var s=t.substr(i,8),n=parseInt(s,2).toString(16);1==n.length&&(n="0"+n),r+=n}this.hTLV=null,this.isModified=!0,this.hV="0"+e+r},this.setByBooleanArray=function(t){for(var e="",i=0;i<t.length;i++)e+=1==t[i]?"1":"0";this.setByBinaryString(e)},this.newFalseArray=function(t){for(var e=new Array(t),i=0;t>i;i++)e[i]=!1;return e},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t.hex?this.setHexValueIncludingUnusedBits(t.hex):"undefined"!=typeof t.bin?this.setByBinaryString(t.bin):"undefined"!=typeof t.array&&this.setByBooleanArray(t.array))},Ce.extend(KJUR.asn1.DERBitString,KJUR.asn1.ASN1Object),KJUR.asn1.DEROctetString=function(t){KJUR.asn1.DEROctetString.superclass.constructor.call(this,t),this.hT="04"},Ce.extend(KJUR.asn1.DEROctetString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERNull=function(){KJUR.asn1.DERNull.superclass.constructor.call(this),this.hT="05",this.hTLV="0500"},Ce.extend(KJUR.asn1.DERNull,KJUR.asn1.ASN1Object),KJUR.asn1.DERObjectIdentifier=function(t){var i=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},r=function(t){var r="",s=new e(t,10),n=s.toString(2),o=7-n.length%7;7==o&&(o=0);for(var h="",a=0;o>a;a++)h+="0";n=h+n;for(var a=0;a<n.length-1;a+=7){var u=n.substr(a,7);a!=n.length-7&&(u="1"+u),r+=i(parseInt(u,2))}return r};KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),this.hT="06",this.setValueHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.setValueOidString=function(t){if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var e="",s=t.split("."),n=40*parseInt(s[0])+parseInt(s[1]);e+=i(n),s.splice(0,2);for(var o=0;o<s.length;o++)e+=r(s[o]);this.hTLV=null,this.isModified=!0,this.s=null,this.hV=e},this.setValueName=function(t){if("undefined"==typeof KJUR.asn1.x509.OID.name2oidList[t])throw"DERObjectIdentifier oidName undefined: "+t;var e=KJUR.asn1.x509.OID.name2oidList[t];this.setValueOidString(e)},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t.oid?this.setValueOidString(t.oid):"undefined"!=typeof t.hex?this.setValueHex(t.hex):"undefined"!=typeof t.name&&this.setValueName(t.name))},Ce.extend(KJUR.asn1.DERObjectIdentifier,KJUR.asn1.ASN1Object),KJUR.asn1.DERUTF8String=function(t){KJUR.asn1.DERUTF8String.superclass.constructor.call(this,t),this.hT="0c"},Ce.extend(KJUR.asn1.DERUTF8String,KJUR.asn1.DERAbstractString),KJUR.asn1.DERNumericString=function(t){KJUR.asn1.DERNumericString.superclass.constructor.call(this,t),this.hT="12"},Ce.extend(KJUR.asn1.DERNumericString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERPrintableString=function(t){KJUR.asn1.DERPrintableString.superclass.constructor.call(this,t),this.hT="13"},Ce.extend(KJUR.asn1.DERPrintableString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERTeletexString=function(t){KJUR.asn1.DERTeletexString.superclass.constructor.call(this,t),this.hT="14"},Ce.extend(KJUR.asn1.DERTeletexString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERIA5String=function(t){KJUR.asn1.DERIA5String.superclass.constructor.call(this,t),this.hT="16"},Ce.extend(KJUR.asn1.DERIA5String,KJUR.asn1.DERAbstractString),KJUR.asn1.DERUTCTime=function(t){KJUR.asn1.DERUTCTime.superclass.constructor.call(this,t),this.hT="17",this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"utc"),this.hV=stohex(this.s)},"undefined"!=typeof t&&("undefined"!=typeof t.str?this.setString(t.str):"undefined"!=typeof t.hex?this.setStringHex(t.hex):"undefined"!=typeof t.date&&this.setByDate(t.date))},Ce.extend(KJUR.asn1.DERUTCTime,KJUR.asn1.DERAbstractTime),KJUR.asn1.DERGeneralizedTime=function(t){KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this,t),this.hT="18",this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"gen"),this.hV=stohex(this.s)},"undefined"!=typeof t&&("undefined"!=typeof t.str?this.setString(t.str):"undefined"!=typeof t.hex?this.setStringHex(t.hex):"undefined"!=typeof t.date&&this.setByDate(t.date))},Ce.extend(KJUR.asn1.DERGeneralizedTime,KJUR.asn1.DERAbstractTime),KJUR.asn1.DERSequence=function(t){KJUR.asn1.DERSequence.superclass.constructor.call(this,t),this.hT="30",this.getFreshValueHex=function(){for(var t="",e=0;e<this.asn1Array.length;e++){var i=this.asn1Array[e];t+=i.getEncodedHex()}return this.hV=t,this.hV}},Ce.extend(KJUR.asn1.DERSequence,KJUR.asn1.DERAbstractStructured),KJUR.asn1.DERSet=function(t){KJUR.asn1.DERSet.superclass.constructor.call(this,t),this.hT="31",this.getFreshValueHex=function(){for(var t=new Array,e=0;e<this.asn1Array.length;e++){var i=this.asn1Array[e];t.push(i.getEncodedHex())}return t.sort(),this.hV=t.join(""),this.hV}},Ce.extend(KJUR.asn1.DERSet,KJUR.asn1.DERAbstractStructured),KJUR.asn1.DERTaggedObject=function(t){KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),this.hT="a0",this.hV="",this.isExplicit=!0,this.asn1Object=null,this.setASN1Object=function(t,e,i){this.hT=e,this.isExplicit=t,this.asn1Object=i,this.isExplicit?(this.hV=this.asn1Object.getEncodedHex(),this.hTLV=null,this.isModified=!0):(this.hV=null,this.hTLV=i.getEncodedHex(),this.hTLV=this.hTLV.replace(/^../,e),this.isModified=!1)},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t.tag&&(this.hT=t.tag),"undefined"!=typeof t.explicit&&(this.isExplicit=t.explicit),"undefined"!=typeof t.obj&&(this.asn1Object=t.obj,this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)))},Ce.extend(KJUR.asn1.DERTaggedObject,KJUR.asn1.ASN1Object),
// Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
// copyright notice and this permission notice appear in all copies.
// 
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
function(t){"use strict";var e,i={};i.decode=function(i){var r;if(e===t){var s="0123456789ABCDEF",n=" \f\n\r	 \u2028\u2029";for(e=[],r=0;16>r;++r)e[s.charAt(r)]=r;for(s=s.toLowerCase(),r=10;16>r;++r)e[s.charAt(r)]=r;for(r=0;r<n.length;++r)e[n.charAt(r)]=-1}var o=[],h=0,a=0;for(r=0;r<i.length;++r){var u=i.charAt(r);if("="==u)break;if(u=e[u],-1!=u){if(u===t)throw"Illegal character at offset "+r;h|=u,++a>=2?(o[o.length]=h,h=0,a=0):h<<=4}}if(a)throw"Hex encoding incomplete: 4 bits missing";return o},window.Hex=i}(),
// Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
// copyright notice and this permission notice appear in all copies.
// 
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
function(t){"use strict";var e,i={};i.decode=function(i){var r;if(e===t){var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="= \f\n\r	 \u2028\u2029";for(e=[],r=0;64>r;++r)e[s.charAt(r)]=r;for(r=0;r<n.length;++r)e[n.charAt(r)]=-1}var o=[],h=0,a=0;for(r=0;r<i.length;++r){var u=i.charAt(r);if("="==u)break;if(u=e[u],-1!=u){if(u===t)throw"Illegal character at offset "+r;h|=u,++a>=4?(o[o.length]=h>>16,o[o.length]=h>>8&255,o[o.length]=255&h,h=0,a=0):h<<=6}}switch(a){case 1:throw"Base64 encoding incomplete: at least 2 bits missing";case 2:o[o.length]=h>>10;break;case 3:o[o.length]=h>>16,o[o.length]=h>>8&255}return o},i.re=/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,i.unarmor=function(t){var e=i.re.exec(t);if(e)if(e[1])t=e[1];else{if(!e[2])throw"RegExp out of sync";t=e[2]}return i.decode(t)},window.Base64=i}(),
// Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
// copyright notice and this permission notice appear in all copies.
// 
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
function(t){"use strict";function e(t,i){t instanceof e?(this.enc=t.enc,this.pos=t.pos):(this.enc=t,this.pos=i)}function i(t,e,i,r,s){this.stream=t,this.header=e,this.length=i,this.tag=r,this.sub=s}var r=100,s="…",n={tag:function(t,e){var i=document.createElement(t);return i.className=e,i},text:function(t){return document.createTextNode(t)}};e.prototype.get=function(e){if(e===t&&(e=this.pos++),e>=this.enc.length)throw"Requesting byte offset "+e+" on a stream of length "+this.enc.length;return this.enc[e]},e.prototype.hexDigits="0123456789ABCDEF",e.prototype.hexByte=function(t){return this.hexDigits.charAt(t>>4&15)+this.hexDigits.charAt(15&t)},e.prototype.hexDump=function(t,e,i){for(var r="",s=t;e>s;++s)if(r+=this.hexByte(this.get(s)),i!==!0)switch(15&s){case 7:r+="  ";break;case 15:r+="\n";break;default:r+=" "}return r},e.prototype.parseStringISO=function(t,e){for(var i="",r=t;e>r;++r)i+=String.fromCharCode(this.get(r));return i},e.prototype.parseStringUTF=function(t,e){for(var i="",r=t;e>r;){var s=this.get(r++);i+=128>s?String.fromCharCode(s):s>191&&224>s?String.fromCharCode((31&s)<<6|63&this.get(r++)):String.fromCharCode((15&s)<<12|(63&this.get(r++))<<6|63&this.get(r++))}return i},e.prototype.parseStringBMP=function(t,e){for(var i="",r=t;e>r;r+=2){var s=this.get(r),n=this.get(r+1);i+=String.fromCharCode((s<<8)+n)}return i},e.prototype.reTime=/^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,e.prototype.parseTime=function(t,e){var i=this.parseStringISO(t,e),r=this.reTime.exec(i);return r?(i=r[1]+"-"+r[2]+"-"+r[3]+" "+r[4],r[5]&&(i+=":"+r[5],r[6]&&(i+=":"+r[6],r[7]&&(i+="."+r[7]))),r[8]&&(i+=" UTC","Z"!=r[8]&&(i+=r[8],r[9]&&(i+=":"+r[9]))),i):"Unrecognized time: "+i},e.prototype.parseInteger=function(t,e){var i=e-t;if(i>4){i<<=3;var r=this.get(t);if(0===r)i-=8;else for(;128>r;)r<<=1,--i;return"("+i+" bit)"}for(var s=0,n=t;e>n;++n)s=s<<8|this.get(n);return s},e.prototype.parseBitString=function(t,e){var i=this.get(t),r=(e-t-1<<3)-i,s="("+r+" bit)";if(20>=r){var n=i;s+=" ";for(var o=e-1;o>t;--o){for(var h=this.get(o),a=n;8>a;++a)s+=h>>a&1?"1":"0";n=0}}return s},e.prototype.parseOctetString=function(t,e){var i=e-t,n="("+i+" byte) ";i>r&&(e=t+r);for(var o=t;e>o;++o)n+=this.hexByte(this.get(o));return i>r&&(n+=s),n},e.prototype.parseOID=function(t,e){for(var i="",r=0,s=0,n=t;e>n;++n){var o=this.get(n);if(r=r<<7|127&o,s+=7,!(128&o)){if(""===i){var h=80>r?40>r?0:1:2;i=h+"."+(r-40*h)}else i+="."+(s>=31?"bigint":r);r=s=0}}return i},i.prototype.typeName=function(){if(this.tag===t)return"unknown";var e=this.tag>>6,i=(this.tag>>5&1,31&this.tag);switch(e){case 0:switch(i){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString";default:return"Universal_"+i.toString(16)}case 1:return"Application_"+i.toString(16);case 2:return"["+i+"]";case 3:return"Private_"+i.toString(16)}},i.prototype.reSeemsASCII=/^[ -~]+$/,i.prototype.content=function(){if(this.tag===t)return null;var e=this.tag>>6,i=31&this.tag,n=this.posContent(),o=Math.abs(this.length);if(0!==e){if(null!==this.sub)return"("+this.sub.length+" elem)";var h=this.stream.parseStringISO(n,n+Math.min(o,r));return this.reSeemsASCII.test(h)?h.substring(0,2*r)+(h.length>2*r?s:""):this.stream.parseOctetString(n,n+o)}switch(i){case 1:return 0===this.stream.get(n)?"false":"true";case 2:return this.stream.parseInteger(n,n+o);case 3:return this.sub?"("+this.sub.length+" elem)":this.stream.parseBitString(n,n+o);case 4:return this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(n,n+o);case 6:return this.stream.parseOID(n,n+o);case 16:case 17:return"("+this.sub.length+" elem)";case 12:return this.stream.parseStringUTF(n,n+o);case 18:case 19:case 20:case 21:case 22:case 26:return this.stream.parseStringISO(n,n+o);case 30:return this.stream.parseStringBMP(n,n+o);case 23:case 24:return this.stream.parseTime(n,n+o)}return null},i.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(null===this.sub?"null":this.sub.length)+"]"},i.prototype.print=function(e){if(e===t&&(e=""),document.writeln(e+this),null!==this.sub){e+="  ";for(var i=0,r=this.sub.length;r>i;++i)this.sub[i].print(e)}},i.prototype.toPrettyString=function(e){e===t&&(e="");var i=e+this.typeName()+" @"+this.stream.pos;if(this.length>=0&&(i+="+"),i+=this.length,32&this.tag?i+=" (constructed)":3!=this.tag&&4!=this.tag||null===this.sub||(i+=" (encapsulates)"),i+="\n",null!==this.sub){e+="  ";for(var r=0,s=this.sub.length;s>r;++r)i+=this.sub[r].toPrettyString(e)}return i},i.prototype.toDOM=function(){var t=n.tag("div","node");t.asn1=this;var e=n.tag("div","head"),i=this.typeName().replace(/_/g," ");e.innerHTML=i;var r=this.content();if(null!==r){r=String(r).replace(/</g,"&lt;");var s=n.tag("span","preview");s.appendChild(n.text(r)),e.appendChild(s)}t.appendChild(e),this.node=t,this.head=e;var o=n.tag("div","value");if(i="Offset: "+this.stream.pos+"<br/>",i+="Length: "+this.header+"+",i+=this.length>=0?this.length:-this.length+" (undefined)",32&this.tag?i+="<br/>(constructed)":3!=this.tag&&4!=this.tag||null===this.sub||(i+="<br/>(encapsulates)"),null!==r&&(i+="<br/>Value:<br/><b>"+r+"</b>","object"==typeof oids&&6==this.tag)){var h=oids[r];h&&(h.d&&(i+="<br/>"+h.d),h.c&&(i+="<br/>"+h.c),h.w&&(i+="<br/>(warning!)"))}o.innerHTML=i,t.appendChild(o);var a=n.tag("div","sub");if(null!==this.sub)for(var u=0,c=this.sub.length;c>u;++u)a.appendChild(this.sub[u].toDOM());return t.appendChild(a),e.onclick=function(){t.className="node collapsed"==t.className?"node":"node collapsed"},t},i.prototype.posStart=function(){return this.stream.pos},i.prototype.posContent=function(){return this.stream.pos+this.header},i.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)},i.prototype.fakeHover=function(t){this.node.className+=" hover",t&&(this.head.className+=" hover")},i.prototype.fakeOut=function(t){var e=/ ?hover/;this.node.className=this.node.className.replace(e,""),t&&(this.head.className=this.head.className.replace(e,""))},i.prototype.toHexDOM_sub=function(t,e,i,r,s){if(!(r>=s)){var o=n.tag("span",e);o.appendChild(n.text(i.hexDump(r,s))),t.appendChild(o)}},i.prototype.toHexDOM=function(e){var i=n.tag("span","hex");if(e===t&&(e=i),this.head.hexNode=i,this.head.onmouseover=function(){this.hexNode.className="hexCurrent"},this.head.onmouseout=function(){this.hexNode.className="hex"},i.asn1=this,i.onmouseover=function(){var t=!e.selected;t&&(e.selected=this.asn1,this.className="hexCurrent"),this.asn1.fakeHover(t)},i.onmouseout=function(){var t=e.selected==this.asn1;this.asn1.fakeOut(t),t&&(e.selected=null,this.className="hex")},this.toHexDOM_sub(i,"tag",this.stream,this.posStart(),this.posStart()+1),this.toHexDOM_sub(i,this.length>=0?"dlen":"ulen",this.stream,this.posStart()+1,this.posContent()),null===this.sub)i.appendChild(n.text(this.stream.hexDump(this.posContent(),this.posEnd())));else if(this.sub.length>0){var r=this.sub[0],s=this.sub[this.sub.length-1];this.toHexDOM_sub(i,"intro",this.stream,this.posContent(),r.posStart());for(var o=0,h=this.sub.length;h>o;++o)i.appendChild(this.sub[o].toHexDOM(e));this.toHexDOM_sub(i,"outro",this.stream,s.posEnd(),this.posEnd())}return i},i.prototype.toHexString=function(t){return this.stream.hexDump(this.posStart(),this.posEnd(),!0)},i.decodeLength=function(t){var e=t.get(),i=127&e;if(i==e)return i;if(i>3)throw"Length over 24 bits not supported at position "+(t.pos-1);if(0===i)return-1;e=0;for(var r=0;i>r;++r)e=e<<8|t.get();return e},i.hasContent=function(t,r,s){if(32&t)return!0;if(3>t||t>4)return!1;var n=new e(s);3==t&&n.get();var o=n.get();if(o>>6&1)return!1;try{var h=i.decodeLength(n);return n.pos-s.pos+h==r}catch(a){return!1}},i.decode=function(t){t instanceof e||(t=new e(t,0));var r=new e(t),s=t.get(),n=i.decodeLength(t),o=t.pos-r.pos,h=null;if(i.hasContent(s,n,t)){var a=t.pos;if(3==s&&t.get(),h=[],n>=0){for(var u=a+n;t.pos<u;)h[h.length]=i.decode(t);if(t.pos!=u)throw"Content size is not correct for container starting at offset "+a}else try{for(;;){var c=i.decode(t);if(0===c.tag)break;h[h.length]=c}n=a-t.pos}catch(f){throw"Exception while decoding undefined length content: "+f}}else t.pos+=n;return new i(r,o,n,s,h)},i.test=function(){for(var t=[{value:[39],expected:39},{value:[129,201],expected:201},{value:[131,254,220,186],expected:16702650}],r=0,s=t.length;s>r;++r){var n=new e(t[r].value,0),o=i.decodeLength(n);o!=t[r].expected&&document.write("In test["+r+"] expected "+t[r].expected+" got "+o+"\n")}},window.ASN1=i}(),ASN1.prototype.getHexStringValue=function(){var t=this.toHexString(),e=2*this.header,i=2*this.length;return t.substr(e,i)},ue.prototype.parseKey=function(t){try{var e=0,i=0,r=/^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,s=r.test(t)?Hex.decode(t):Base64.unarmor(t),n=ASN1.decode(s);if(3===n.sub.length&&(n=n.sub[2].sub[0]),9===n.sub.length){e=n.sub[1].getHexStringValue(),this.n=he(e,16),i=n.sub[2].getHexStringValue(),this.e=parseInt(i,16);var o=n.sub[3].getHexStringValue();this.d=he(o,16);var h=n.sub[4].getHexStringValue();this.p=he(h,16);var a=n.sub[5].getHexStringValue();this.q=he(a,16);var u=n.sub[6].getHexStringValue();this.dmp1=he(u,16);var c=n.sub[7].getHexStringValue();this.dmq1=he(c,16);var f=n.sub[8].getHexStringValue();this.coeff=he(f,16)}else{if(2!==n.sub.length)return!1;var p=n.sub[1],l=p.sub[0];e=l.sub[0].getHexStringValue(),this.n=he(e,16),i=l.sub[1].getHexStringValue(),this.e=parseInt(i,16)}return!0}catch(d){return!1}},ue.prototype.getPrivateBaseKey=function(){var t={array:[new KJUR.asn1.DERInteger({"int":0}),new KJUR.asn1.DERInteger({bigint:this.n}),new KJUR.asn1.DERInteger({"int":this.e}),new KJUR.asn1.DERInteger({bigint:this.d}),new KJUR.asn1.DERInteger({bigint:this.p}),new KJUR.asn1.DERInteger({bigint:this.q}),new KJUR.asn1.DERInteger({bigint:this.dmp1}),new KJUR.asn1.DERInteger({bigint:this.dmq1}),new KJUR.asn1.DERInteger({bigint:this.coeff})]},e=new KJUR.asn1.DERSequence(t);return e.getEncodedHex()},ue.prototype.getPrivateBaseKeyB64=function(){return be(this.getPrivateBaseKey())},ue.prototype.getPublicBaseKey=function(){var t={array:[new KJUR.asn1.DERObjectIdentifier({oid:"1.2.840.113549.1.1.1"}),new KJUR.asn1.DERNull]},e=new KJUR.asn1.DERSequence(t);t={array:[new KJUR.asn1.DERInteger({bigint:this.n}),new KJUR.asn1.DERInteger({"int":this.e})]};var i=new KJUR.asn1.DERSequence(t);t={hex:"00"+i.getEncodedHex()};var r=new KJUR.asn1.DERBitString(t);t={array:[e,r]};var s=new KJUR.asn1.DERSequence(t);return s.getEncodedHex()},ue.prototype.getPublicBaseKeyB64=function(){return be(this.getPublicBaseKey())},ue.prototype.wordwrap=function(t,e){if(e=e||64,!t)return t;var i="(.{1,"+e+"})( +|$\n?)|(.{1,"+e+"})";return t.match(RegExp(i,"g")).join("\n")},ue.prototype.getPrivateKey=function(){var t="-----BEGIN RSA PRIVATE KEY-----\n";return t+=this.wordwrap(this.getPrivateBaseKeyB64())+"\n",t+="-----END RSA PRIVATE KEY-----"},ue.prototype.getPublicKey=function(){var t="-----BEGIN PUBLIC KEY-----\n";return t+=this.wordwrap(this.getPublicBaseKeyB64())+"\n",t+="-----END PUBLIC KEY-----"},ue.prototype.hasPublicKeyProperty=function(t){return t=t||{},t.hasOwnProperty("n")&&t.hasOwnProperty("e")},ue.prototype.hasPrivateKeyProperty=function(t){return t=t||{},t.hasOwnProperty("n")&&t.hasOwnProperty("e")&&t.hasOwnProperty("d")&&t.hasOwnProperty("p")&&t.hasOwnProperty("q")&&t.hasOwnProperty("dmp1")&&t.hasOwnProperty("dmq1")&&t.hasOwnProperty("coeff")},ue.prototype.parsePropertiesFrom=function(t){this.n=t.n,this.e=t.e,t.hasOwnProperty("d")&&(this.d=t.d,this.p=t.p,this.q=t.q,this.dmp1=t.dmp1,this.dmq1=t.dmq1,this.coeff=t.coeff)};var _e=function(t){ue.call(this),t&&("string"==typeof t?this.parseKey(t):(this.hasPrivateKeyProperty(t)||this.hasPublicKeyProperty(t))&&this.parsePropertiesFrom(t))};_e.prototype=new ue,_e.prototype.constructor=_e;var ze=function(t){t=t||{},this.default_key_size=parseInt(t.default_key_size)||1024,this.default_public_exponent=t.default_public_exponent||"010001",this.log=t.log||!1,this.key=null};ze.prototype.setKey=function(t){this.log&&this.key&&console.warn("A key was already set, overriding existing."),this.key=new _e(t)},ze.prototype.setPrivateKey=function(t){this.setKey(t)},ze.prototype.setPublicKey=function(t){this.setKey(t)},ze.prototype.decrypt=function(t){try{return this.getKey().decrypt(Te(t))}catch(e){return!1}},ze.prototype.encrypt=function(t){try{return be(this.getKey().encrypt(t))}catch(e){return!1}},ze.prototype.getKey=function(t){if(!this.key){if(this.key=new _e,t&&"[object Function]"==={}.toString.call(t))return void this.key.generateAsync(this.default_key_size,this.default_public_exponent,t);this.key.generate(this.default_key_size,this.default_public_exponent)}return this.key},ze.prototype.getPrivateKey=function(){return this.getKey().getPrivateKey()},ze.prototype.getPrivateKeyB64=function(){return this.getKey().getPrivateBaseKeyB64()},ze.prototype.getPublicKey=function(){return this.getKey().getPublicKey()},ze.prototype.getPublicKeyB64=function(){return this.getKey().getPublicBaseKeyB64()},ze.version="2.3.1",t.JSEncrypt=ze});
;/*!
 * Knockout JavaScript library v3.4.2
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var x=this||(0,eval)("this"),t=x.document,M=x.navigator,u=x.jQuery,H=x.JSON;(function(n){"function"===typeof define&&define.amd?define(["exports","require"],n):"object"===typeof exports&&"object"===typeof module?n(module.exports||exports):n(x.ko={})})(function(N,O){function J(a,c){return null===a||typeof a in R?a===c:!1}function S(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function T(b,c){var d;return function(){clearTimeout(d);d=a.a.setTimeout(b,c)}}function U(a,
c){c&&c!==E?"beforeChange"===c?this.Ob(a):this.Ja(a,c):this.Pb(a)}function V(a,c){null!==c&&c.k&&c.k()}function W(a,c){var d=this.Mc,e=d[s];e.T||(this.ob&&this.Oa[c]?(d.Sb(c,a,this.Oa[c]),this.Oa[c]=null,--this.ob):e.s[c]||d.Sb(c,a,e.t?{$:a}:d.yc(a)),a.Ha&&a.Hc())}function K(b,c,d,e){a.d[b]={init:function(b,g,h,l,m){var k,r;a.m(function(){var q=g(),p=a.a.c(q),p=!d!==!p,A=!r;if(A||c||p!==k)A&&a.xa.Ca()&&(r=a.a.wa(a.f.childNodes(b),!0)),p?(A||a.f.fa(b,a.a.wa(r)),a.hb(e?e(m,q):m,b)):a.f.za(b),k=p},null,
{i:b});return{controlsDescendantBindings:!0}}};a.h.va[b]=!1;a.f.aa[b]=!0}var a="undefined"!==typeof N?N:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.H=function(a,c,d){a[c]=d};a.version="3.4.2";a.b("version",a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1};a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=
b;return a}function e(b,c,d,e){var m=b[c].match(r)||[];a.a.r(d.match(r),function(b){a.a.ra(m,b,e)});b[c]=m.join(" ")}var f={__proto__:[]}instanceof Array,g="function"===typeof Symbol,h={},l={};h[M&&/Firefox\/2/i.test(M.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];h.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(h,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)l[b[c]]=a});var m={propertychange:!0},k=
t&&function(){for(var a=3,b=t.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),r=/\S+/g;return{gc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],r:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},o:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Vb:function(a,b,c){for(var d=
0,e=a.length;d<e;d++)if(b.call(c,a[d],d))return a[d];return null},Na:function(b,c){var d=a.a.o(b,c);0<d?b.splice(d,1):0===d&&b.shift()},Wb:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<e;d++)0>a.a.o(c,b[d])&&c.push(b[d]);return c},ib:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)c.push(b(a[d],d));return c},Ma:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c},ta:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<
d;c++)a.push(b[c]);return a},ra:function(b,c,d){var e=a.a.o(a.a.Bb(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},la:f,extend:c,$a:d,ab:f?d:c,D:b,Ea:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},rb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},nc:function(b){b=a.a.W(b);for(var c=(b[0]&&b[0].ownerDocument||t).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.ba(b[d]));return c},wa:function(b,c){for(var d=0,e=b.length,m=[];d<e;d++){var k=
b[d].cloneNode(!0);m.push(c?a.ba(k):k)}return m},fa:function(b,c){a.a.rb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},uc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],m=e.parentNode,k=0,f=c.length;k<f;k++)m.insertBefore(c[k],e);k=0;for(f=d.length;k<f;k++)a.removeNode(d[k])}},Ba:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=
a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},wc:function(a,b){7>k?a.setAttribute("selected",b):a.selected=b},cb:function(a){return null===a||a===n?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},sd:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Rc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==
(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},qb:function(b){return a.a.Rc(b,b.ownerDocument.documentElement)},Tb:function(b){return!!a.a.Vb(b,a.a.qb)},A:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},Zb:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Zb(b),c)},dc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},q:function(b,
c,d){var e=a.a.Zb(d);d=k&&m[c];if(a.options.useOnlyNativeEvents||d||!u)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var f=function(a){e.call(b,a)},l="on"+c;b.attachEvent(l,f);a.a.G.qa(b,function(){b.detachEvent(l,f)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else u(b).bind(c,e)},Fa:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===
a.a.A(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!u||d)if("function"==typeof t.createEvent)if("function"==typeof b.dispatchEvent)d=t.createEvent(l[c]||"HTMLEvents"),d.initEvent(c,!0,!0,x,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");
else u(b).trigger(c)},c:function(b){return a.I(b)?b():b},Bb:function(b){return a.I(b)?b.p():b},fb:function(b,c,d){var k;c&&("object"===typeof b.classList?(k=b.classList[d?"add":"remove"],a.a.r(c.match(r),function(a){k.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},bb:function(b,c){var d=a.a.c(c);if(null===d||d===n)d="";var e=a.f.firstChild(b);!e||3!=e.nodeType||a.f.nextSibling(e)?a.f.fa(b,[b.ownerDocument.createTextNode(d)]):e.data=
d;a.a.Wc(b)},vc:function(a,b){a.name=b;if(7>=k)try{a.mergeAttributes(t.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},Wc:function(a){9<=k&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Sc:function(a){if(k){var b=a.style.width;a.style.width=0;a.style.width=b}},nd:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},W:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},bc:function(a){return g?Symbol(a):a},xd:6===k,
yd:7===k,C:k,ic:function(b,c){for(var d=a.a.W(b.getElementsByTagName("input")).concat(a.a.W(b.getElementsByTagName("textarea"))),e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},k=[],m=d.length-1;0<=m;m--)e(d[m])&&k.push(d[m]);return k},kd:function(b){return"string"==typeof b&&(b=a.a.cb(b))?H&&H.parse?H.parse(b):(new Function("return "+b))():null},Gb:function(b,c,d){if(!H||!H.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return H.stringify(a.a.c(b),c,d)},ld:function(c,d,e){e=e||{};var k=e.params||{},m=e.includeFields||this.gc,f=c;if("object"==typeof c&&"form"===a.a.A(c))for(var f=c.action,l=m.length-1;0<=l;l--)for(var g=a.a.ic(c,m[l]),h=g.length-1;0<=h;h--)k[g[h].name]=g[h].value;d=a.a.c(d);var r=t.createElement("form");r.style.display="none";r.action=f;r.method="post";for(var n in d)c=t.createElement("input"),c.type="hidden",c.name=n,c.value=a.a.Gb(a.a.c(d[n])),r.appendChild(c);b(k,function(a,b){var c=t.createElement("input");
c.type="hidden";c.name=a;c.value=b;r.appendChild(c)});t.body.appendChild(r);e.submitter?e.submitter(r):r.submit();setTimeout(function(){r.parentNode.removeChild(r)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.r);a.b("utils.arrayFirst",a.a.Vb);a.b("utils.arrayFilter",a.a.Ma);a.b("utils.arrayGetDistinctValues",a.a.Wb);a.b("utils.arrayIndexOf",a.a.o);a.b("utils.arrayMap",a.a.ib);a.b("utils.arrayPushAll",a.a.ta);a.b("utils.arrayRemoveItem",a.a.Na);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.gc);a.b("utils.getFormFields",a.a.ic);a.b("utils.peekObservable",a.a.Bb);a.b("utils.postJson",a.a.ld);a.b("utils.parseJson",a.a.kd);a.b("utils.registerEventHandler",a.a.q);a.b("utils.stringifyJson",a.a.Gb);a.b("utils.range",a.a.nd);a.b("utils.toggleDomNodeCssClass",a.a.fb);a.b("utils.triggerEvent",a.a.Fa);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.D);a.b("utils.addOrRemoveItem",a.a.ra);a.b("utils.setTextContent",a.a.bb);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=
function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.e=new function(){function a(b,g){var h=b[d];if(!h||"null"===h||!e[h]){if(!g)return n;h=b[d]="ko"+c++;e[h]={}}return e[h]}var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===n?n:e[d]},set:function(c,d,e){if(e!==n||a(c,!1)!==n)a(c,!0)[d]=
e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},J:function(){return c++ +d}}};a.b("utils.domData",a.a.e);a.b("utils.domData.clear",a.a.e.clear);a.a.G=new function(){function b(b,c){var e=a.a.e.get(b,d);e===n&&c&&(e=[],a.a.e.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](d);a.a.e.clear(d);a.a.G.cleanExternalData(d);if(f[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.e.J(),e={1:!0,8:!0,9:!0},
f={1:!0,9:!0};return{qa:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},tc:function(c,e){var f=b(c,!1);f&&(a.a.Na(f,e),0==f.length&&a.a.e.set(c,d,n))},ba:function(b){if(e[b.nodeType]&&(c(b),f[b.nodeType])){var d=[];a.a.ta(d,b.getElementsByTagName("*"));for(var l=0,m=d.length;l<m;l++)c(d[l])}return b},removeNode:function(b){a.ba(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){u&&"function"==typeof u.cleanData&&u.cleanData([a])}}};
a.ba=a.a.G.ba;a.removeNode=a.a.G.removeNode;a.b("cleanNode",a.ba);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.G);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.G.qa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.G.tc);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},
g=8>=a.a.C;a.a.na=function(c,d){var e;if(u)if(u.parseHTML)e=u.parseHTML(c,d)||[];else{if((e=u.clean([c],d))&&e[0]){for(var k=e[0];k.parentNode&&11!==k.parentNode.nodeType;)k=k.parentNode;k.parentNode&&k.parentNode.removeChild(k)}}else{(e=d)||(e=t);var k=e.parentWindow||e.defaultView||x,r=a.a.cb(c).toLowerCase(),q=e.createElement("div"),p;p=(r=r.match(/^<([a-z]+)[ >]/))&&f[r[1]]||b;r=p[0];p="ignored<div>"+p[1]+c+p[2]+"</div>";"function"==typeof k.innerShiv?q.appendChild(k.innerShiv(p)):(g&&e.appendChild(q),
q.innerHTML=p,g&&q.parentNode.removeChild(q));for(;r--;)q=q.lastChild;e=a.a.W(q.lastChild.childNodes)}return e};a.a.Eb=function(b,c){a.a.rb(b);c=a.a.c(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),u)u(b).html(c);else for(var d=a.a.na(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.na);a.b("utils.setHtml",a.a.Eb);a.N=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.N.pc(c.nodeValue);null!=f&&e.push({Qc:c,hd:f})}else if(1==c.nodeType)for(var f=
0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],e)}var c={};return{yb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},Bc:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),
!0}finally{delete c[a]}},Cc:function(c,e){var f=[];b(c,f);for(var g=0,h=f.length;g<h;g++){var l=f[g].Qc,m=[l];e&&a.a.ta(m,e);a.N.Bc(f[g].hd,m);l.nodeValue="";l.parentNode&&l.parentNode.removeChild(l)}},pc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.N);a.b("memoization.memoize",a.N.yb);a.b("memoization.unmemoize",a.N.Bc);a.b("memoization.parseMemoText",a.N.pc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.N.Cc);a.Z=function(){function b(){if(e)for(var b=
e,c=0,m;g<e;)if(m=d[g++]){if(g>b){if(5E3<=++c){g=e;a.a.dc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=e}try{m()}catch(k){a.a.dc(k)}}}function c(){b();g=e=d.length=0}var d=[],e=0,f=1,g=0;return{scheduler:x.MutationObserver?function(a){var b=t.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):t&&"onreadystatechange"in t.createElement("script")?function(a){var b=t.createElement("script");b.onreadystatechange=
function(){b.onreadystatechange=null;t.documentElement.removeChild(b);b=null;a()};t.documentElement.appendChild(b)}:function(a){setTimeout(a,0)},Za:function(b){e||a.Z.scheduler(c);d[e++]=b;return f++},cancel:function(a){a-=f-e;a>=g&&a<e&&(d[a]=null)},resetForTesting:function(){var a=e-g;g=e=d.length=0;return a},rd:b}}();a.b("tasks",a.Z);a.b("tasks.schedule",a.Z.Za);a.b("tasks.runEarly",a.Z.rd);a.Aa={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.B({read:b,write:function(e){clearTimeout(d);
d=a.a.setTimeout(function(){b(e)},c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.gb=!1;f="notifyWhenChangesStop"==e?T:S;a.Wa(function(a){return f(a,d)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.gb||(b.gb=!0,b.Wa(function(c){var e,f=!1;return function(){if(!f){a.Z.cancel(e);e=a.Z.Za(c);try{f=!0,b.notifySubscribers(n,"dirty")}finally{f=
!1}}}}))},notify:function(a,c){a.equalityComparer="always"==c?null:J}};var R={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Aa);a.zc=function(b,c,d){this.$=b;this.jb=c;this.Pc=d;this.T=!1;a.H(this,"dispose",this.k)};a.zc.prototype.k=function(){this.T=!0;this.Pc()};a.K=function(){a.a.ab(this,D);D.ub(this)};var E="change",D={ub:function(a){a.F={change:[]};a.Qb=1},Y:function(b,c,d){var e=this;d=d||E;var f=new a.zc(e,c?b.bind(c):b,function(){a.a.Na(e.F[d],f);e.Ka&&e.Ka(d)});e.ua&&e.ua(d);
e.F[d]||(e.F[d]=[]);e.F[d].push(f);return f},notifySubscribers:function(b,c){c=c||E;c===E&&this.Kb();if(this.Ra(c)){var d=c===E&&this.Fc||this.F[c].slice(0);try{a.l.Xb();for(var e=0,f;f=d[e];++e)f.T||f.jb(b)}finally{a.l.end()}}},Pa:function(){return this.Qb},Zc:function(a){return this.Pa()!==a},Kb:function(){++this.Qb},Wa:function(b){var c=this,d=a.I(c),e,f,g,h;c.Ja||(c.Ja=c.notifySubscribers,c.notifySubscribers=U);var l=b(function(){c.Ha=!1;d&&h===c&&(h=c.Mb?c.Mb():c());var a=f||c.Ua(g,h);f=e=!1;
a&&c.Ja(g=h)});c.Pb=function(a){c.Fc=c.F[E].slice(0);c.Ha=e=!0;h=a;l()};c.Ob=function(a){e||(g=a,c.Ja(a,"beforeChange"))};c.Hc=function(){c.Ua(g,c.p(!0))&&(f=!0)}},Ra:function(a){return this.F[a]&&this.F[a].length},Xc:function(b){if(b)return this.F[b]&&this.F[b].length||0;var c=0;a.a.D(this.F,function(a,b){"dirty"!==a&&(c+=b.length)});return c},Ua:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},extend:function(b){var c=this;b&&a.a.D(b,function(b,e){var f=a.Aa[b];"function"==
typeof f&&(c=f(c,e)||c)});return c}};a.H(D,"subscribe",D.Y);a.H(D,"extend",D.extend);a.H(D,"getSubscriptionsCount",D.Xc);a.a.la&&a.a.$a(D,Function.prototype);a.K.fn=D;a.lc=function(a){return null!=a&&"function"==typeof a.Y&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.K);a.b("isSubscribable",a.lc);a.xa=a.l=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{Xb:b,end:c,sc:function(b){if(e){if(!a.lc(b))throw Error("Only subscribable things can act as dependencies");
e.jb.call(e.Lc,b,b.Gc||(b.Gc=++f))}},w:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},Ca:function(){if(e)return e.m.Ca()},Va:function(){if(e)return e.Va}}}();a.b("computedContext",a.xa);a.b("computedContext.getDependenciesCount",a.xa.Ca);a.b("computedContext.isInitial",a.xa.Va);a.b("ignoreDependencies",a.wd=a.l.w);var F=a.a.bc("_latestValue");a.O=function(b){function c(){if(0<arguments.length)return c.Ua(c[F],arguments[0])&&(c.ia(),c[F]=arguments[0],c.ha()),this;a.l.sc(c);return c[F]}
c[F]=b;a.a.la||a.a.extend(c,a.K.fn);a.K.fn.ub(c);a.a.ab(c,B);a.options.deferUpdates&&a.Aa.deferred(c,!0);return c};var B={equalityComparer:J,p:function(){return this[F]},ha:function(){this.notifySubscribers(this[F])},ia:function(){this.notifySubscribers(this[F],"beforeChange")}};a.a.la&&a.a.$a(B,a.K.fn);var I=a.O.md="__ko_proto__";B[I]=a.O;a.Qa=function(b,c){return null===b||b===n||b[I]===n?!1:b[I]===c?!0:a.Qa(b[I],c)};a.I=function(b){return a.Qa(b,a.O)};a.Da=function(b){return"function"==typeof b&&
b[I]===a.O||"function"==typeof b&&b[I]===a.B&&b.$c?!0:!1};a.b("observable",a.O);a.b("isObservable",a.I);a.b("isWriteableObservable",a.Da);a.b("isWritableObservable",a.Da);a.b("observable.fn",B);a.H(B,"peek",B.p);a.H(B,"valueHasMutated",B.ha);a.H(B,"valueWillMutate",B.ia);a.ma=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.O(b);a.a.ab(b,a.ma.fn);return b.extend({trackArrayChanges:!0})};
a.ma.fn={remove:function(b){for(var c=this.p(),d=[],e="function"!=typeof b||a.I(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];e(g)&&(0===d.length&&this.ia(),d.push(g),c.splice(f,1),f--)}d.length&&this.ha();return d},removeAll:function(b){if(b===n){var c=this.p(),d=c.slice(0);this.ia();c.splice(0,c.length);this.ha();return d}return b?this.remove(function(c){return 0<=a.a.o(b,c)}):[]},destroy:function(b){var c=this.p(),d="function"!=typeof b||a.I(b)?function(a){return a===b}:b;this.ia();
for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.ha()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.o(b,c)}):[]},indexOf:function(b){var c=this();return a.a.o(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ia(),this.p()[d]=c,this.ha())}};a.a.la&&a.a.$a(a.ma.fn,a.O.fn);a.a.r("pop push reverse shift sort splice unshift".split(" "),function(b){a.ma.fn[b]=function(){var a=this.p();this.ia();this.Yb(a,b,arguments);
var d=a[b].apply(a,arguments);this.ha();return d===a?this:d}});a.a.r(["slice"],function(b){a.ma.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.ma);a.Aa.trackArrayChanges=function(b,c){function d(){if(!e){e=!0;l=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&b!==E||++h;return l.apply(this,arguments)};var c=[].concat(b.p()||[]);f=null;g=b.Y(function(d){d=[].concat(d||[]);if(b.Ra("arrayChange")){var e;if(!f||1<h)f=a.a.lb(c,d,b.kb);e=f}c=d;f=null;h=0;
e&&e.length&&b.notifySubscribers(e,"arrayChange")})}}b.kb={};c&&"object"==typeof c&&a.a.extend(b.kb,c);b.kb.sparse=!0;if(!b.Yb){var e=!1,f=null,g,h=0,l,m=b.ua,k=b.Ka;b.ua=function(a){m&&m.call(b,a);"arrayChange"===a&&d()};b.Ka=function(a){k&&k.call(b,a);"arrayChange"!==a||b.Ra("arrayChange")||(l&&(b.notifySubscribers=l,l=n),g.k(),e=!1)};b.Yb=function(b,c,d){function k(a,b,c){return m[m.length]={status:a,value:b,index:c}}if(e&&!h){var m=[],l=b.length,g=d.length,G=0;switch(c){case "push":G=l;case "unshift":for(c=
0;c<g;c++)k("added",d[c],G+c);break;case "pop":G=l-1;case "shift":l&&k("deleted",b[G],G);break;case "splice":c=Math.min(Math.max(0,0>d[0]?l+d[0]:d[0]),l);for(var l=1===g?l:Math.min(c+(d[1]||0),l),g=c+g-2,G=Math.max(l,g),n=[],s=[],w=2;c<G;++c,++w)c<l&&s.push(k("deleted",b[c],c)),c<g&&n.push(k("added",d[w],c));a.a.hc(s,n);break;default:return}f=m}}}};var s=a.a.bc("_state");a.m=a.B=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.sb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}a.l.sc(e);(g.V||g.t&&e.Sa())&&e.U();return g.M}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={M:n,da:!0,V:!0,Ta:!1,Hb:!1,T:!1,Ya:!1,t:!1,od:d.read,sb:c||d.owner,i:d.disposeWhenNodeIsRemoved||d.i||null,ya:d.disposeWhen||d.ya,pb:null,s:{},L:0,fc:null};e[s]=g;e.$c="function"===typeof f;a.a.la||a.a.extend(e,a.K.fn);a.K.fn.ub(e);a.a.ab(e,z);d.pure?(g.Ya=!0,g.t=!0,a.a.extend(e,
Y)):d.deferEvaluation&&a.a.extend(e,Z);a.options.deferUpdates&&a.Aa.deferred(e,!0);g.i&&(g.Hb=!0,g.i.nodeType||(g.i=null));g.t||d.deferEvaluation||e.U();g.i&&e.ca()&&a.a.G.qa(g.i,g.pb=function(){e.k()});return e};var z={equalityComparer:J,Ca:function(){return this[s].L},Sb:function(a,c,d){if(this[s].Ya&&c===this)throw Error("A 'pure' computed must not be called recursively");this[s].s[a]=d;d.Ia=this[s].L++;d.pa=c.Pa()},Sa:function(){var a,c,d=this[s].s;for(a in d)if(d.hasOwnProperty(a)&&(c=d[a],this.oa&&
c.$.Ha||c.$.Zc(c.pa)))return!0},gd:function(){this.oa&&!this[s].Ta&&this.oa(!1)},ca:function(){var a=this[s];return a.V||0<a.L},qd:function(){this.Ha?this[s].V&&(this[s].da=!0):this.ec()},yc:function(a){if(a.gb&&!this[s].i){var c=a.Y(this.gd,this,"dirty"),d=a.Y(this.qd,this);return{$:a,k:function(){c.k();d.k()}}}return a.Y(this.ec,this)},ec:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[s].fc),this[s].fc=a.a.setTimeout(function(){b.U(!0)},c)):b.oa?b.oa(!0):b.U(!0)},U:function(b){var c=
this[s],d=c.ya,e=!1;if(!c.Ta&&!c.T){if(c.i&&!a.a.qb(c.i)||d&&d()){if(!c.Hb){this.k();return}}else c.Hb=!1;c.Ta=!0;try{e=this.Vc(b)}finally{c.Ta=!1}c.L||this.k();return e}},Vc:function(b){var c=this[s],d=!1,e=c.Ya?n:!c.L,f={Mc:this,Oa:c.s,ob:c.L};a.l.Xb({Lc:f,jb:W,m:this,Va:e});c.s={};c.L=0;f=this.Uc(c,f);this.Ua(c.M,f)&&(c.t||this.notifySubscribers(c.M,"beforeChange"),c.M=f,c.t?this.Kb():b&&this.notifySubscribers(c.M),d=!0);e&&this.notifySubscribers(c.M,"awake");return d},Uc:function(b,c){try{var d=
b.od;return b.sb?d.call(b.sb):d()}finally{a.l.end(),c.ob&&!b.t&&a.a.D(c.Oa,V),b.da=b.V=!1}},p:function(a){var c=this[s];(c.V&&(a||!c.L)||c.t&&this.Sa())&&this.U();return c.M},Wa:function(b){a.K.fn.Wa.call(this,b);this.Mb=function(){this[s].da?this.U():this[s].V=!1;return this[s].M};this.oa=function(a){this.Ob(this[s].M);this[s].V=!0;a&&(this[s].da=!0);this.Pb(this)}},k:function(){var b=this[s];!b.t&&b.s&&a.a.D(b.s,function(a,b){b.k&&b.k()});b.i&&b.pb&&a.a.G.tc(b.i,b.pb);b.s=null;b.L=0;b.T=!0;b.da=
!1;b.V=!1;b.t=!1;b.i=null}},Y={ua:function(b){var c=this,d=c[s];if(!d.T&&d.t&&"change"==b){d.t=!1;if(d.da||c.Sa())d.s=null,d.L=0,c.U()&&c.Kb();else{var e=[];a.a.D(d.s,function(a,b){e[b.Ia]=a});a.a.r(e,function(a,b){var e=d.s[a],l=c.yc(e.$);l.Ia=b;l.pa=e.pa;d.s[a]=l})}d.T||c.notifySubscribers(d.M,"awake")}},Ka:function(b){var c=this[s];c.T||"change"!=b||this.Ra("change")||(a.a.D(c.s,function(a,b){b.k&&(c.s[a]={$:b.$,Ia:b.Ia,pa:b.pa},b.k())}),c.t=!0,this.notifySubscribers(n,"asleep"))},Pa:function(){var b=
this[s];b.t&&(b.da||this.Sa())&&this.U();return a.K.fn.Pa.call(this)}},Z={ua:function(a){"change"!=a&&"beforeChange"!=a||this.p()}};a.a.la&&a.a.$a(z,a.K.fn);var P=a.O.md;a.m[P]=a.O;z[P]=a.m;a.bd=function(b){return a.Qa(b,a.m)};a.cd=function(b){return a.Qa(b,a.m)&&b[s]&&b[s].Ya};a.b("computed",a.m);a.b("dependentObservable",a.m);a.b("isComputed",a.bd);a.b("isPureComputed",a.cd);a.b("computed.fn",z);a.H(z,"peek",z.p);a.H(z,"dispose",z.k);a.H(z,"isActive",z.ca);a.H(z,"getDependenciesCount",z.Ca);a.rc=
function(b,c){if("function"===typeof b)return a.m(b,c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.m(b,c)};a.b("pureComputed",a.rc);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var k=
g.get(d);h[c]=k!==n?k:b(d,f,g)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.Lb=[]}a.Ac=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.I(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Ac(b);return a.a.Gb(b,c,d)};d.prototype={save:function(b,c){var d=a.a.o(this.keys,
b);0<=d?this.Lb[d]=c:(this.keys.push(b),this.Lb.push(c))},get:function(b){b=a.a.o(this.keys,b);return 0<=b?this.Lb[b]:n}}})();a.b("toJS",a.Ac);a.b("toJSON",a.toJSON);(function(){a.j={u:function(b){switch(a.a.A(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.e.get(b,a.d.options.zb):7>=a.a.C?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex]):n;default:return b.value}},ja:function(b,
c,d){switch(a.a.A(b)){case "option":switch(typeof c){case "string":a.a.e.set(b,a.d.options.zb,n);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.e.set(b,a.d.options.zb,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""}break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.j.u(b.options[f]),h==c||""==h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e;break;default:if(null===
c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.j);a.b("selectExtensions.readValue",a.j.u);a.b("selectExtensions.writeValue",a.j.ja);a.h=function(){function b(b){b=a.a.cb(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),r,h=[],p=0;if(d){d.push(",");for(var A=0,y;y=d[A];++A){var v=y.charCodeAt(0);if(44===v){if(0>=p){c.push(r&&h.length?{key:r,value:h.join("")}:{unknown:r||h.join("")});r=p=0;h=[];continue}}else if(58===v){if(!p&&!r&&1===h.length){r=h.pop();continue}}else 47===
v&&A&&1<y.length?(v=d[A-1].match(f))&&!g[v[0]]&&(b=b.substr(b.indexOf(y)+1),d=b.match(e),d.push(","),A=-1,y="/"):40===v||123===v||91===v?++p:41===v||125===v||93===v?--p:r||h.length||34!==v&&39!==v||(y=y.slice(1,-1));h.push(y)}}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,
g={"in":1,"return":1,"typeof":1},h={};return{va:[],ga:h,Ab:b,Xa:function(e,m){function k(b,e){var m;if(!A){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(e=l.preprocess(e,b,k)))return;if(l=h[b])m=e,0<=a.a.o(c,m)?m=!1:(l=m.match(d),m=null===l?!1:l[1]?"Object("+l[1]+")"+l[2]:m),l=m;l&&g.push("'"+b+"':function(_z){"+m+"=_z}")}p&&(e="function(){return "+e+" }");f.push("'"+b+"':"+e)}m=m||{};var f=[],g=[],p=m.valueAccessors,A=m.bindingParams,y="string"===typeof e?b(e):e;a.a.r(y,function(a){k(a.key||
a.unknown,a.value)});g.length&&k("_ko_property_writers","{"+g.join(",")+" }");return f.join(",")},fd:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},Ga:function(b,c,d,e,f){if(b&&a.I(b))!a.Da(b)||f&&b.p()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",a.h.va);a.b("expressionRewriting.parseObjectLiteral",a.h.Ab);a.b("expressionRewriting.preProcessBindings",a.h.Xa);a.b("expressionRewriting._twoWayBindings",
a.h.ga);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.Xa);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(a,d){for(var e=a,f=1,l=[];e=e.nextSibling;){if(c(e)&&(f--,0===f))return l;l.push(e);b(e)&&f++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-
1].nextSibling:a.nextSibling:null}var f=t&&"\x3c!--test--\x3e"===t.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,l={ul:!0,ol:!0};a.f={aa:{},childNodes:function(a){return b(a)?d(a):a.childNodes},za:function(c){if(b(c)){c=a.f.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.rb(c)},fa:function(c,d){if(b(c)){a.f.za(c);for(var e=c.nextSibling,f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],
e)}else a.a.fa(c,d)},qc:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},kc:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.f.qc(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Yc:b,vd:function(a){return(a=
(f?a.text:a.nodeValue).match(g))?a[1]:null},oc:function(d){if(l[a.a.A(d)]){var k=d.firstChild;if(k){do if(1===k.nodeType){var f;f=k.firstChild;var g=null;if(f){do if(g)g.push(f);else if(b(f)){var h=e(f,!0);h?f=h:g=[f]}else c(f)&&(g=[f]);while(f=f.nextSibling)}if(f=g)for(g=k.nextSibling,h=0;h<f.length;h++)g?d.insertBefore(f[h],g):d.appendChild(f[h])}while(k=k.nextSibling)}}}}})();a.b("virtualElements",a.f);a.b("virtualElements.allowedBindings",a.f.aa);a.b("virtualElements.emptyNode",a.f.za);a.b("virtualElements.insertAfter",
a.f.kc);a.b("virtualElements.prepend",a.f.qc);a.b("virtualElements.setDomNodeChildren",a.f.fa);(function(){a.S=function(){this.Kc={}};a.a.extend(a.S.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.f.Yc(b);default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.g.Rb(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,
c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.g.Rb(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.f.vd(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var f=this.Kc,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var l,m="with($context){with($data||{}){return{"+a.h.Xa(b,e)+"}}}";l=new Function("$context","$element",m);h=f[g]=l}return h(c,d)}catch(k){throw k.message="Unable to parse bindings.\nBindings value: "+
b+"\nMessage: "+k.message,k;}}});a.S.instance=new a.S})();a.b("bindingProvider",a.S);(function(){function b(a){return function(){return a}}function c(a){return a()}function d(b){return a.a.Ea(a.l.w(b),function(a,c){return function(){return b()[c]}})}function e(c,e,k){return"function"===typeof c?d(c.bind(null,e,k)):a.a.Ea(c,b)}function f(a,b){return d(this.getBindings.bind(this,a,b))}function g(b,c,d){var e,k=a.f.firstChild(c),f=a.S.instance,m=f.preprocessNode;if(m){for(;e=k;)k=a.f.nextSibling(e),
m.call(f,e);k=a.f.firstChild(c)}for(;e=k;)k=a.f.nextSibling(e),h(b,e,d)}function h(b,c,d){var e=!0,k=1===c.nodeType;k&&a.f.oc(c);if(k&&d||a.S.instance.nodeHasBindings(c))e=m(c,null,b,d).shouldBindDescendants;e&&!r[a.a.A(c)]&&g(b,c,!k)}function l(b){var c=[],d={},e=[];a.a.D(b,function X(k){if(!d[k]){var f=a.getBindingHandler(k);f&&(f.after&&(e.push(k),a.a.r(f.after,function(c){if(b[c]){if(-1!==a.a.o(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));
X(c)}}),e.length--),c.push({key:k,jc:f}));d[k]=!0}});return c}function m(b,d,e,k){var m=a.a.e.get(b,q);if(!d){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.e.set(b,q,!0)}!m&&k&&a.xc(b,e);var g;if(d&&"function"!==typeof d)g=d;else{var h=a.S.instance,r=h.getBindingAccessors||f,p=a.B(function(){(g=d?d(e,b):r.call(h,b,e))&&e.Q&&e.Q();return g},null,{i:b});g&&p.ca()||(p=null)}var s;if(g){var t=p?function(a){return function(){return c(p()[a])}}:function(a){return g[a]},
u=function(){return a.a.Ea(p?p():g,c)};u.get=function(a){return g[a]&&c(t(a))};u.has=function(a){return a in g};k=l(g);a.a.r(k,function(c){var d=c.jc.init,k=c.jc.update,f=c.key;if(8===b.nodeType&&!a.f.aa[f])throw Error("The binding '"+f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.l.w(function(){var a=d(b,t(f),u,e.$data,e);if(a&&a.controlsDescendantBindings){if(s!==n)throw Error("Multiple bindings ("+s+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
s=f}}),"function"==typeof k&&a.B(function(){k(b,t(f),u,e.$data,e)},null,{i:b})}catch(m){throw m.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+m.message,m;}})}return{shouldBindDescendants:s===n}}function k(b){return b&&b instanceof a.R?b:new a.R(b)}a.d={};var r={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.d[b]};a.R=function(b,c,d,e,k){function f(){var k=g?b():b,m=a.a.c(k);c?(c.Q&&c.Q(),a.a.extend(l,c),l.Q=r):(l.$parents=[],l.$root=m,l.ko=a);l.$rawData=
k;l.$data=m;d&&(l[d]=m);e&&e(l,c,m);return l.$data}function m(){return h&&!a.a.Tb(h)}var l=this,g="function"==typeof b&&!a.I(b),h,r;k&&k.exportDependencies?f():(r=a.B(f,null,{ya:m,i:!0}),r.ca()&&(l.Q=r,r.equalityComparer=null,h=[],r.Dc=function(b){h.push(b);a.a.G.qa(b,function(b){a.a.Na(h,b);h.length||(r.k(),l.Q=r=n)})}))};a.R.prototype.createChildContext=function(b,c,d,e){return new a.R(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);
d&&d(a)},e)};a.R.prototype.extend=function(b){return new a.R(this.Q||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};a.R.prototype.ac=function(a,b){return this.createChildContext(a,b,null,{exportDependencies:!0})};var q=a.a.e.J(),p=a.a.e.J();a.xc=function(b,c){if(2==arguments.length)a.a.e.set(b,p,c),c.Q&&c.Q.Dc(b);else return a.a.e.get(b,p)};a.La=function(b,c,d){1===b.nodeType&&a.f.oc(b);return m(b,c,k(d),!0)};a.Ic=function(b,c,d){d=k(d);return a.La(b,
e(c,d,b),d)};a.hb=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(k(a),b,!0)};a.Ub=function(a,b){!u&&x.jQuery&&(u=x.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||x.document.body;h(k(a),b,!0)};a.nb=function(b){switch(b.nodeType){case 1:case 8:var c=a.xc(b);if(c)return c;if(b.parentNode)return a.nb(b.parentNode)}return n};a.Oc=function(b){return(b=a.nb(b))?b.$data:n};a.b("bindingHandlers",
a.d);a.b("applyBindings",a.Ub);a.b("applyBindingsToDescendants",a.hb);a.b("applyBindingAccessorsToNode",a.La);a.b("applyBindingsToNode",a.Ic);a.b("contextFor",a.nb);a.b("dataFor",a.Oc)})();(function(b){function c(c,e){var m=f.hasOwnProperty(c)?f[c]:b,k;m?m.Y(e):(m=f[c]=new a.K,m.Y(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,dd:e};delete f[c];k||e?m.notifySubscribers(b):a.Z.Za(function(){m.notifySubscribers(b)})}),k=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",
[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,f,k){k||(k=a.g.loaders.slice(0));var g=k.shift();if(g){var q=g[c];if(q){var p=!1;if(q.apply(g,d.concat(function(a){p?f(null):null!==a?f(a):e(c,d,f,k)}))!==b&&(p=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,k)}else f(null)}var f={},g={};a.g={get:function(d,e){var f=g.hasOwnProperty(d)?g[d]:b;f?f.dd?a.l.w(function(){e(f.definition)}):
a.Z.Za(function(){e(f.definition)}):c(d,e)},$b:function(a){delete g[a]},Nb:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.$b)})();(function(){function b(b,c,d,e){function g(){0===--y&&e(h)}var h={},y=2,v=d.template;d=d.viewModel;v?f(c,v,function(c){a.g.Nb("loadTemplate",[b,c],function(a){h.template=a;g()})}):g();d?f(c,d,function(c){a.g.Nb("loadViewModel",[b,c],function(a){h[l]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});
else if("function"===typeof b[l])d(b[l]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.A(b)){case "script":return a.a.na(b.text);case "textarea":return a.a.na(b.value);case "template":if(e(b.content))return a.a.wa(b.content.childNodes)}return a.a.wa(b.childNodes)}function e(a){return x.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?
O||x.require?(O||x.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.g.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.wb(b))throw Error("Component "+b+" is already registered");h[b]=c};a.g.wb=function(a){return h.hasOwnProperty(a)};a.g.ud=function(b){delete h[b];a.g.$b(b)};a.g.cc={getConfig:function(a,b){b(h.hasOwnProperty(a)?h[a]:null)},loadComponent:function(a,
c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.na(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.W(c.childNodes));else if(c.element)if(c=c.element,x.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var l=t.getElementById(c);l?f(d(l)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),
b,d)}};var l="createViewModel";a.b("components.register",a.g.register);a.b("components.isRegistered",a.g.wb);a.b("components.unregister",a.g.ud);a.b("components.defaultLoader",a.g.cc);a.g.loaders.push(a.g.cc);a.g.Ec=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ea(f,function(c){return a.m(c,null,{i:b})}),g=a.a.Ea(f,function(c){var e=c.p();return c.ca()?a.m({read:function(){return a.a.c(c())},write:a.Da(e)&&
function(a){c()(a)},i:b}):e});g.hasOwnProperty("$raw")||(g.$raw=f);return g}return{$raw:{}}}a.g.getComponentNameForNode=function(b){var c=a.a.A(b);if(a.g.wb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.C&&b.tagName===c))return c};a.g.Rb=function(c,e,f,g){if(1===e.nodeType){var h=a.g.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');var l={name:h,params:b(e,f)};c.component=g?function(){return l}:
l}}return c};var c=new a.S;9>a.a.C&&(a.g.register=function(a){return function(b){t.createElement(b);return a.apply(this,arguments)}}(a.g.register),t.createDocumentFragment=function(b){return function(){var c=b(),f=a.g.Ec,g;for(g in f)f.hasOwnProperty(g)&&c.createElement(g);return c}}(t.createDocumentFragment))})();(function(b){function c(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.wa(c);a.f.fa(d,b)}function d(a,b,c,d){var e=a.createViewModel;return e?e.call(a,
d,{element:b,templateNodes:c}):d}var e=0;a.d.component={init:function(f,g,h,l,m){function k(){var a=r&&r.dispose;"function"===typeof a&&a.call(r);q=r=null}var r,q,p=a.a.W(a.f.childNodes(f));a.a.G.qa(f,k);a.m(function(){var l=a.a.c(g()),h,v;"string"===typeof l?h=l:(h=a.a.c(l.name),v=a.a.c(l.params));if(!h)throw Error("No component name specified");var n=q=++e;a.g.get(h,function(e){if(q===n){k();if(!e)throw Error("Unknown component '"+h+"'");c(h,e,f);var l=d(e,f,p,v);e=m.createChildContext(l,b,function(a){a.$component=
l;a.$componentTemplateNodes=p});r=l;a.hb(e,f)}})},null,{i:f});return{controlsDescendantBindings:!0}}};a.f.aa.component=!0})();var Q={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.D(d,function(c,d){d=a.a.c(d);var g=!1===d||null===d||d===n;g&&b.removeAttribute(c);8>=a.a.C&&c in Q?(c=Q[c],g?b.removeAttribute(c):b[c]=d):g||b.setAttribute(c,d.toString());"name"===c&&a.a.vc(b,g?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,
c,d){function e(){var e=b.checked,f=p?g():e;if(!a.xa.Va()&&(!l||e)){var h=a.l.w(c);if(k){var m=r?h.p():h;q!==f?(e&&(a.a.ra(m,f,!0),a.a.ra(m,q,!1)),q=f):a.a.ra(m,f,e);r&&a.Da(h)&&h(m)}else a.h.Ga(h,d,"checked",f,!0)}}function f(){var d=a.a.c(c());b.checked=k?0<=a.a.o(d,g()):h?d:g()===d}var g=a.rc(function(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):d.has("value")?a.a.c(d.get("value")):b.value}),h="checkbox"==b.type,l="radio"==b.type;if(h||l){var m=c(),k=h&&a.a.c(m)instanceof Array,
r=!(k&&m.push&&m.splice),q=k?g():n,p=l||k;l&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.m(e,null,{i:b});a.a.q(b,"click",e);a.m(f,null,{i:b});m=n}}};a.h.ga.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());null!==d&&"object"==typeof d?a.a.D(d,function(c,d){d=a.a.c(d);a.a.fb(b,c,d)}):(d=a.a.cb(String(d||"")),a.a.fb(b,b.__ko__cssValue,!1),b.__ko__cssValue=d,a.a.fb(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());
d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,f){var g=c()||{};a.a.D(g,function(g){"string"==typeof g&&a.a.q(b,g,function(b){var m,k=c()[g];if(k){try{var r=a.a.W(arguments);e=f.$data;r.unshift(e);m=k.apply(e,r)}finally{!0!==m&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};
a.d.foreach={mc:function(b){return function(){var c=b(),d=a.a.Bb(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.X.vb};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.X.vb}}},init:function(b,c){return a.d.template.init(b,a.d.foreach.mc(c))},update:function(b,c,d,e,f){return a.d.template.update(b,a.d.foreach.mc(c),
d,e,f)}};a.h.va.foreach=!1;a.f.aa.foreach=!0;a.d.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(k){g=f.body}e=g===b}f=c();a.h.Ga(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.q(b,"focus",f);a.a.q(b,"focusin",f);a.a.q(b,"blur",g);a.a.q(b,"focusout",g)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===
d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.l.w(a.a.Fa,null,[b,d?"focusin":"focusout"]))}};a.h.ga.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.ga.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Eb(b,c())}};K("if");K("ifnot",!1,!0);K("with",!0,!1,function(a,c){return a.ac(c)});var L={};a.d.options={init:function(b){if("select"!==a.a.A(b))throw Error("options binding applies only to SELECT elements");for(;0<
b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.Ma(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,e){if(A&&k)a.j.ja(b,a.a.c(d.get("value")),!0);else if(p.length){var f=0<=a.a.o(p,a.j.u(e[0]));a.a.wc(e[0],f);A&&!f&&a.l.w(a.a.Fa,null,[b,"change"])}}var h=b.multiple,l=0!=b.length&&h?b.scrollTop:null,m=a.a.c(c()),k=d.get("valueAllowUnset")&&d.has("value"),r=
d.get("optionsIncludeDestroyed");c={};var q,p=[];k||(h?p=a.a.ib(e(),a.j.u):0<=b.selectedIndex&&p.push(a.j.u(b.options[b.selectedIndex])));m&&("undefined"==typeof m.length&&(m=[m]),q=a.a.Ma(m,function(b){return r||b===n||null===b||!a.a.c(b._destroy)}),d.has("optionsCaption")&&(m=a.a.c(d.get("optionsCaption")),null!==m&&m!==n&&q.unshift(L)));var A=!1;c.beforeRemove=function(a){b.removeChild(a)};m=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(m=function(b,c){g(0,c);
a.l.w(d.get("optionsAfterRender"),null,[c[0],b!==L?b:n])});a.a.Db(b,q,function(c,e,g){g.length&&(p=!k&&g[0].selected?[a.j.u(g[0])]:[],A=!0);e=b.ownerDocument.createElement("option");c===L?(a.a.bb(e,d.get("optionsCaption")),a.j.ja(e,n)):(g=f(c,d.get("optionsValue"),c),a.j.ja(e,a.a.c(g)),c=f(c,d.get("optionsText"),g),a.a.bb(e,c));return[e]},c,m);a.l.w(function(){k?a.j.ja(b,a.a.c(d.get("value")),!0):(h?p.length&&e().length<p.length:p.length&&0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex])!==p[0]:
p.length||0<=b.selectedIndex)&&a.a.Fa(b,"change")});a.a.Sc(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.d.options.zb=a.a.e.J();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.q(b,"change",function(){var e=c(),f=[];a.a.r(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.j.u(b))});a.h.Ga(e,d,"selectedOptions",f)})},update:function(b,c){if("select"!=a.a.A(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c()),e=b.scrollTop;
d&&"number"==typeof d.length&&a.a.r(b.getElementsByTagName("option"),function(b){var c=0<=a.a.o(d,a.j.u(b));b.selected!=c&&a.a.wc(b,c)});b.scrollTop=e}};a.h.ga.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.D(d,function(c,d){d=a.a.c(d);if(null===d||d===n||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.q(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,
b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.bb(b,c())}};a.f.aa.text=!0;(function(){if(x&&x.navigator)var b=function(a){if(a)return parseFloat(a[1])},c=x.opera&&x.opera.version&&parseInt(x.opera.version()),d=x.navigator.userAgent,e=b(d.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),f=b(d.match(/Firefox\/([^ ]*)/));if(10>a.a.C)var g=a.a.e.J(),h=a.a.e.J(),l=function(b){var c=
this.activeElement;(c=c&&a.a.e.get(c,h))&&c(b)},m=function(b,c){var d=b.ownerDocument;a.a.e.get(d,g)||(a.a.e.set(d,g,!0),a.a.q(d,"selectionchange",l));a.a.e.set(b,h,c)};a.d.textInput={init:function(b,d,g){function l(c,d){a.a.q(b,c,d)}function h(){var c=a.a.c(d());if(null===c||c===n)c="";u!==n&&c===u?a.a.setTimeout(h,4):b.value!==c&&(s=c,b.value=c)}function y(){t||(u=b.value,t=a.a.setTimeout(v,4))}function v(){clearTimeout(t);u=t=n;var c=b.value;s!==c&&(s=c,a.h.Ga(d(),g,"textInput",c))}var s=b.value,
t,u,x=9==a.a.C?y:v;10>a.a.C?(l("propertychange",function(a){"value"===a.propertyName&&x(a)}),8==a.a.C&&(l("keyup",v),l("keydown",v)),8<=a.a.C&&(m(b,x),l("dragend",y))):(l("input",v),5>e&&"textarea"===a.a.A(b)?(l("keydown",y),l("paste",y),l("cut",y)):11>c?l("keydown",y):4>f&&(l("DOMAutoComplete",v),l("dragdrop",v),l("drop",v)));l("change",v);a.m(h,null,{i:b})}};a.h.ga.textInput=!0;a.d.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+
++a.d.uniqueName.Nc;a.a.vc(b,d)}}};a.d.uniqueName.Nc=0;a.d.value={after:["options","foreach"],init:function(b,c,d){if("input"!=b.tagName.toLowerCase()||"checkbox"!=b.type&&"radio"!=b.type){var e=["change"],f=d.get("valueUpdate"),g=!1,h=null;f&&("string"==typeof f&&(f=[f]),a.a.ta(e,f),e=a.a.Wb(e));var l=function(){h=null;g=!1;var e=c(),f=a.j.u(b);a.h.Ga(e,d,"value",f)};!a.a.C||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.o(e,"propertychange")||
(a.a.q(b,"propertychange",function(){g=!0}),a.a.q(b,"focus",function(){g=!1}),a.a.q(b,"blur",function(){g&&l()}));a.a.r(e,function(c){var d=l;a.a.sd(c,"after")&&(d=function(){h=a.j.u(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.q(b,c,d)});var m=function(){var e=a.a.c(c()),f=a.j.u(b);if(null!==h&&e===h)a.a.setTimeout(m,0);else if(e!==f)if("select"===a.a.A(b)){var g=d.get("valueAllowUnset"),f=function(){a.j.ja(b,e,g)};f();g||e===a.j.u(b)?a.a.setTimeout(f,0):a.l.w(a.a.Fa,null,[b,"change"])}else a.j.ja(b,
e)};a.m(m,null,{i:b})}else a.La(b,{checkedValue:c})},update:function(){}};a.h.ga.value=!0;a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,f,g){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");a.P=function(){};a.P.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.P.prototype.createJavaScriptEvaluatorBlock=
function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.P.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||t;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.v.n(d)}if(1==b.nodeType||8==b.nodeType)return new a.v.sa(b);throw Error("Unknown template type: "+b);};a.P.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.P.prototype.isTemplateRewritten=function(a,
c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.P.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.P);a.Ib=function(){function b(b,c,d,h){b=a.h.Ab(b);for(var l=a.h.va,m=0;m<b.length;m++){var k=b[m].key;if(l.hasOwnProperty(k)){var r=l[k];if("function"===typeof r){if(k=r(b[m].value))throw Error(k);}else if(!r)throw Error("This template engine does not support the '"+
k+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.Xa(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Tc:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Ib.jd(b,
c)},d)},jd:function(a,f){return a.replace(c,function(a,c,d,e,k){return b(k,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},Jc:function(b,c){return a.N.yb(function(d,h){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.La(l,b,h)})}}}();a.b("__tr_ambtns",a.Ib.Jc);(function(){a.v={};a.v.n=function(b){if(this.n=b){var c=a.a.A(b);this.eb="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4}};a.v.n.prototype.text=function(){var b=1===
this.eb?"text":2===this.eb?"value":"innerHTML";if(0==arguments.length)return this.n[b];var c=arguments[0];"innerHTML"===b?a.a.Eb(this.n,c):this.n[b]=c};var b=a.a.e.J()+"_";a.v.n.prototype.data=function(c){if(1===arguments.length)return a.a.e.get(this.n,b+c);a.a.e.set(this.n,b+c,arguments[1])};var c=a.a.e.J();a.v.n.prototype.nodes=function(){var b=this.n;if(0==arguments.length)return(a.a.e.get(b,c)||{}).mb||(3===this.eb?b.content:4===this.eb?b:n);a.a.e.set(b,c,{mb:arguments[0]})};a.v.sa=function(a){this.n=
a};a.v.sa.prototype=new a.v.n;a.v.sa.prototype.text=function(){if(0==arguments.length){var b=a.a.e.get(this.n,c)||{};b.Jb===n&&b.mb&&(b.Jb=b.mb.innerHTML);return b.Jb}a.a.e.set(this.n,c,{Jb:arguments[0]})};a.b("templateSources",a.v);a.b("templateSources.domElement",a.v.n);a.b("templateSources.anonymousTemplate",a.v.sa)})();(function(){function b(b,c,d){var e;for(c=a.f.nextSibling(c);b&&(e=b)!==c;)b=a.f.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=
a.S.instance,n=h.preprocessNode;if(n){b(e,f,function(a,b){var c=a.previousSibling,d=n.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.Ba(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.Ub(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.N.Cc(b,[d])});a.a.Ba(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,q){q=q||{};var p=(b&&d(b)||f||{}).ownerDocument,n=q.templateEngine||g;
a.Ib.Tc(f,n,p);f=n.renderTemplate(f,h,q,p);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");p=!1;switch(e){case "replaceChildren":a.f.fa(b,f);p=!0;break;case "replaceNode":a.a.uc(b,f);p=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}p&&(c(f,h),q.afterRender&&a.l.w(q.afterRender,null,[f,h.$data]));return f}function f(b,c,d){return a.I(b)?b():"function"===typeof b?b(c,d):b}
var g;a.Fb=function(b){if(b!=n&&!(b instanceof a.P))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Cb=function(b,c,k,h,q){k=k||{};if((k.templateEngine||g)==n)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(h){var p=d(h);return a.B(function(){var g=c&&c instanceof a.R?c:new a.R(c,null,null,null,{exportDependencies:!0}),n=f(b,g.$data,g),g=e(h,q,n,g,k);"replaceNode"==q&&(h=g,p=d(h))},null,{ya:function(){return!p||!a.a.qb(p)},i:p&&
"replaceNode"==q?p.parentNode:p})}return a.N.yb(function(d){a.Cb(b,c,k,d,"replaceNode")})};a.pd=function(b,d,g,h,q){function p(a,b){c(b,t);g.afterRender&&g.afterRender(b,a);t=null}function s(a,c){t=q.createChildContext(a,g.as,function(a){a.$index=c});var d=f(b,a,t);return e(null,"ignoreTargetNode",d,t,g)}var t;return a.B(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.Ma(b,function(b){return g.includeDestroyed||b===n||null===b||!a.a.c(b._destroy)});a.l.w(a.a.Db,null,[h,b,
s,g,p])},null,{i:h})};var h=a.a.e.J();a.d.template={init:function(b,c){var d=a.a.c(c());if("string"==typeof d||d.name)a.f.za(b);else{if("nodes"in d){if(d=d.nodes||[],a.I(d))throw Error('The "nodes" option must be a plain, non-observable array.');}else d=a.f.childNodes(b);d=a.a.nc(d);(new a.v.sa(b)).nodes(d)}return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.c(g);d=!0;e=null;"string"==typeof c?c={}:(g=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)));
"foreach"in c?e=a.pd(g||b,d&&c.foreach||[],c,b,f):d?(f="data"in c?f.ac(c.data,c.as):f,e=a.Cb(g||b,f,c,b)):a.f.za(b);f=e;(c=a.a.e.get(b,h))&&"function"==typeof c.k&&c.k();a.a.e.set(b,h,f&&f.ca()?f:n)}};a.h.va.template=function(b){b=a.h.Ab(b);return 1==b.length&&b[0].unknown||a.h.fd(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.f.aa.template=!0})();a.b("setTemplateEngine",a.Fb);a.b("renderTemplate",a.Cb);a.a.hc=function(a,c,d){if(a.length&&
c.length){var e,f,g,h,l;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;l=c[g];++g)if(h.value===l.value){h.moved=l.index;l.moved=h.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.lb=function(){function b(b,d,e,f,g){var h=Math.min,l=Math.max,m=[],k,n=b.length,q,p=d.length,s=p-n||1,t=n+p+1,v,u,x;for(k=0;k<=n;k++)for(u=v,m.push(v=[]),x=h(p,k+s),q=l(0,k-1);q<=x;q++)v[q]=q?k?b[k-1]===d[q-1]?u[q-1]:h(u[q]||t,v[q-1]||t)+1:q+1:k+1;h=[];l=[];s=[];k=n;for(q=p;k||q;)p=m[k][q]-1,q&&p===m[k][q-1]?l.push(h[h.length]={status:e,
value:d[--q],index:q}):k&&p===m[k-1][q]?s.push(h[h.length]={status:f,value:b[--k],index:k}):(--q,--k,g.sparse||h.push({status:"retained",value:d[q]}));a.a.hc(s,l,!g.dontLimitMoves&&10*n);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.lb);(function(){function b(b,c,d,h,l){var m=[],k=a.B(function(){var k=c(d,l,a.a.Ba(m,b))||[];0<
m.length&&(a.a.uc(m,k),h&&a.l.w(h,null,[d,k,l]));m.length=0;a.a.ta(m,k)},null,{i:b,ya:function(){return!a.a.Tb(m)}});return{ea:m,B:k.ca()?k:n}}var c=a.a.e.J(),d=a.a.e.J();a.a.Db=function(e,f,g,h,l){function m(b,c){w=q[c];u!==c&&(D[b]=w);w.tb(u++);a.a.Ba(w.ea,e);t.push(w);z.push(w)}function k(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.r(c[d].ea,function(a){b(a,d,c[d].ka)})}f=f||[];h=h||{};var r=a.a.e.get(e,c)===n,q=a.a.e.get(e,c)||[],p=a.a.ib(q,function(a){return a.ka}),s=a.a.lb(p,f,h.dontLimitMoves),
t=[],v=0,u=0,x=[],z=[];f=[];for(var D=[],p=[],w,C=0,B,E;B=s[C];C++)switch(E=B.moved,B.status){case "deleted":E===n&&(w=q[v],w.B&&(w.B.k(),w.B=n),a.a.Ba(w.ea,e).length&&(h.beforeRemove&&(t.push(w),z.push(w),w.ka===d?w=null:f[C]=w),w&&x.push.apply(x,w.ea)));v++;break;case "retained":m(C,v++);break;case "added":E!==n?m(C,E):(w={ka:B.value,tb:a.O(u++)},t.push(w),z.push(w),r||(p[C]=w))}a.a.e.set(e,c,t);k(h.beforeMove,D);a.a.r(x,h.beforeRemove?a.ba:a.removeNode);for(var C=0,r=a.f.firstChild(e),F;w=z[C];C++){w.ea||
a.a.extend(w,b(e,g,w.ka,l,w.tb));for(v=0;s=w.ea[v];r=s.nextSibling,F=s,v++)s!==r&&a.f.kc(e,s,F);!w.ad&&l&&(l(w.ka,w.ea,w.tb),w.ad=!0)}k(h.beforeRemove,f);for(C=0;C<f.length;++C)f[C]&&(f[C].ka=d);k(h.afterMove,D);k(h.afterAdd,p)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Db);a.X=function(){this.allowTemplateRewriting=!1};a.X.prototype=new a.P;a.X.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.C?0:b.nodes)?b.nodes():null)return a.a.W(c.cloneNode(!0).childNodes);b=b.text();
return a.a.na(b,e)};a.X.vb=new a.X;a.Fb(a.X.vb);a.b("nativeTemplateEngine",a.X);(function(){a.xb=function(){var a=this.ed=function(){if(!u||!u.tmpl)return 0;try{if(0<=u.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f,g){g=g||t;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=u.template(null,"{{ko_with $item.koBindingContext}}"+
h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=u.extend({koBindingContext:e},f.templateOptions);e=u.tmpl(h,b,e);e.appendTo(g.createElement("div"));u.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){t.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(u.tmpl.tag.ko_code={open:"__.push($1 || '');"},u.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.xb.prototype=
new a.P;var b=new a.xb;0<b.ed&&a.Fb(b);a.b("jqueryTmplTemplateEngine",a.xb)})()})})();})();
;var require;var define;(function(global){if(require){return}var head=document.getElementsByTagName('head')[0];var loadingMap={};var factoryMap={};var modulesMap={};var scriptsMap={};var resMap={};var pkgMap={};var createScripts=function(queues,onerror){var docFrag=document.createDocumentFragment();for(var i=0,len=queues.length;i<len;i++){var id=queues[i].id;var url=queues[i].url;if(url in scriptsMap){continue}scriptsMap[url]=true;var script=document.createElement('script');if(onerror){(function(script,id){var tid=setTimeout(function(){onerror(id)},require.timeout);script.onerror=function(){clearTimeout(tid);onerror(id)};var onload=function(){clearTimeout(tid)};if('onload'in script){script.onload=onload}else{script.onreadystatechange=function(){if(this.readyState==='loaded'||this.readyState==='complete'){onload()}}}})(script,id)}script.type='text/javascript';script.src=url;docFrag.appendChild(script)}head.appendChild(docFrag)};var loadScripts=function(ids,callback,onerror){var queues=[];for(var i=0,len=ids.length;i<len;i++){var id=ids[i];var queue=loadingMap[id]||(loadingMap[id]=[]);queue.push(callback);var res=resMap[id]||resMap[id+'.js']||{};var pkg=res.pkg;var url;if(pkg){url=pkgMap[pkg].url||pkgMap[pkg].uri}else{url=res.url||res.uri||id}queues.push({id:id,url:url})}createScripts(queues,onerror)};define=function(id,factory){id=id.replace(/\.js$/i,'');factoryMap[id]=factory;var queue=loadingMap[id];if(queue){for(var i=0,n=queue.length;i<n;i++){queue[i]()}delete loadingMap[id]}};require=function(id){if(id&&id.splice){return require.async.apply(this,arguments)}id=require.alias(id);var mod=modulesMap[id];if(mod){return mod.exports}var factory=factoryMap[id];if(!factory){throw'[ModJS] Cannot find module `'+id+'`';}mod=modulesMap[id]={exports:{}};var ret=(typeof factory==='function')?factory.apply(mod,[require,mod.exports,mod]):factory;if(ret){mod.exports=ret}return mod.exports};require.async=function(names,onload,onerror){if(typeof names==='string'){names=[names]}var needMap={};var needNum=0;var needLoad=[];function findNeed(depArr){var child;for(var i=0,n=depArr.length;i<n;i++){var dep=require.alias(depArr[i]);if(dep in needMap){continue}needMap[dep]=true;if(dep in factoryMap){child=resMap[dep]||resMap[dep+'.js'];if(child&&'deps'in child){findNeed(child.deps)}continue}needLoad.push(dep);needNum++;child=resMap[dep]||resMap[dep+'.js'];if(child&&'deps'in child){findNeed(child.deps)}}}function updateNeed(){if(0===needNum--){var args=[];for(var i=0,n=names.length;i<n;i++){args[i]=require(names[i])}onload&&onload.apply(global,args)}}findNeed(names);loadScripts(needLoad,updateNeed,onerror);updateNeed()};require.ensure=function(names,callback){require.async(names,function(){callback&&callback.call(this,require)})};require.resourceMap=function(obj){var k;var col;col=obj.res;for(k in col){if(col.hasOwnProperty(k)){resMap[k]=col[k]}}col=obj.pkg;for(k in col){if(col.hasOwnProperty(k)){pkgMap[k]=col[k]}}};require.loadJs=function(url){if(url in scriptsMap){return}scriptsMap[url]=true;var script=document.createElement('script');script.type='text/javascript';script.src=url;head.appendChild(script)};require.loadCss=function(cfg){if(cfg.content){var sty=document.createElement('style');sty.type='text/css';if(sty.styleSheet){sty.styleSheet.cssText=cfg.content}else{sty.innerHTML=cfg.content}head.appendChild(sty)}else if(cfg.url){var link=document.createElement('link');link.href=cfg.url;link.rel='stylesheet';link.type='text/css';head.appendChild(link)}};require.alias=function(id){return id.replace(/\.js$/i,'')};require.timeout=5000})(this);
;/*
 * Swiper 2.7.6
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: February 11, 2015
*/
var Swiper=function(a,b){"use strict";function c(a,b){return document.querySelectorAll?(b||document).querySelectorAll(a):jQuery(a,b)}function d(a){return"[object Array]"===Object.prototype.toString.apply(a)?!0:!1}function e(){var a=G-J;return b.freeMode&&(a=G-J),b.slidesPerView>D.slides.length&&!b.centeredSlides&&(a=0),0>a&&(a=0),a}function f(){function a(a){var c,d,e=function(){"undefined"!=typeof D&&null!==D&&(void 0!==D.imagesLoaded&&D.imagesLoaded++,D.imagesLoaded===D.imagesToLoad.length&&(D.reInit(),b.onImagesReady&&D.fireCallback(b.onImagesReady,D)))};a.complete?e():(d=a.currentSrc||a.getAttribute("src"),d?(c=new Image,c.onload=e,c.onerror=e,c.src=d):e())}var d=D.h.addEventListener,e="wrapper"===b.eventTarget?D.wrapper:D.container;if(D.browser.ie10||D.browser.ie11?(d(e,D.touchEvents.touchStart,p),d(document,D.touchEvents.touchMove,q),d(document,D.touchEvents.touchEnd,r)):(D.support.touch&&(d(e,"touchstart",p),d(e,"touchmove",q),d(e,"touchend",r)),b.simulateTouch&&(d(e,"mousedown",p),d(document,"mousemove",q),d(document,"mouseup",r))),b.autoResize&&d(window,"resize",D.resizeFix),g(),D._wheelEvent=!1,b.mousewheelControl){if(void 0!==document.onmousewheel&&(D._wheelEvent="mousewheel"),!D._wheelEvent)try{new WheelEvent("wheel"),D._wheelEvent="wheel"}catch(f){}D._wheelEvent||(D._wheelEvent="DOMMouseScroll"),D._wheelEvent&&d(D.container,D._wheelEvent,j)}if(b.keyboardControl&&d(document,"keydown",i),b.updateOnImagesReady){D.imagesToLoad=c("img",D.container);for(var h=0;h<D.imagesToLoad.length;h++)a(D.imagesToLoad[h])}}function g(){var a,d=D.h.addEventListener;if(b.preventLinks){var e=c("a",D.container);for(a=0;a<e.length;a++)d(e[a],"click",n)}if(b.releaseFormElements){var f=c("input, textarea, select",D.container);for(a=0;a<f.length;a++)d(f[a],D.touchEvents.touchStart,o,!0),D.support.touch&&b.simulateTouch&&d(f[a],"mousedown",o,!0)}if(b.onSlideClick)for(a=0;a<D.slides.length;a++)d(D.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<D.slides.length;a++)d(D.slides[a],D.touchEvents.touchStart,l)}function h(){var a,d=D.h.removeEventListener;if(b.onSlideClick)for(a=0;a<D.slides.length;a++)d(D.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<D.slides.length;a++)d(D.slides[a],D.touchEvents.touchStart,l);if(b.releaseFormElements){var e=c("input, textarea, select",D.container);for(a=0;a<e.length;a++)d(e[a],D.touchEvents.touchStart,o,!0),D.support.touch&&b.simulateTouch&&d(e[a],"mousedown",o,!0)}if(b.preventLinks){var f=c("a",D.container);for(a=0;a<f.length;a++)d(f[a],"click",n)}}function i(a){var b=a.keyCode||a.charCode;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)){if(37===b||39===b||38===b||40===b){for(var c=!1,d=D.h.getOffset(D.container),e=D.h.windowScroll().left,f=D.h.windowScroll().top,g=D.h.windowWidth(),h=D.h.windowHeight(),i=[[d.left,d.top],[d.left+D.width,d.top],[d.left,d.top+D.height],[d.left+D.width,d.top+D.height]],j=0;j<i.length;j++){var k=i[j];k[0]>=e&&k[0]<=e+g&&k[1]>=f&&k[1]<=f+h&&(c=!0)}if(!c)return}N?((37===b||39===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),39===b&&D.swipeNext(),37===b&&D.swipePrev()):((38===b||40===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),40===b&&D.swipeNext(),38===b&&D.swipePrev())}}function j(a){var c=D._wheelEvent,d=0;if(a.detail)d=-a.detail;else if("mousewheel"===c)if(b.mousewheelControlForceToAxis)if(N){if(!(Math.abs(a.wheelDeltaX)>Math.abs(a.wheelDeltaY)))return;d=a.wheelDeltaX}else{if(!(Math.abs(a.wheelDeltaY)>Math.abs(a.wheelDeltaX)))return;d=a.wheelDeltaY}else d=a.wheelDelta;else if("DOMMouseScroll"===c)d=-a.detail;else if("wheel"===c)if(b.mousewheelControlForceToAxis)if(N){if(!(Math.abs(a.deltaX)>Math.abs(a.deltaY)))return;d=-a.deltaX}else{if(!(Math.abs(a.deltaY)>Math.abs(a.deltaX)))return;d=-a.deltaY}else d=Math.abs(a.deltaX)>Math.abs(a.deltaY)?-a.deltaX:-a.deltaY;if(b.freeMode){var f=D.getWrapperTranslate()+d;if(f>0&&(f=0),f<-e()&&(f=-e()),D.setWrapperTransition(0),D.setWrapperTranslate(f),D.updateActiveSlide(f),0===f||f===-e())return}else(new Date).getTime()-V>60&&(0>d?D.swipeNext():D.swipePrev()),V=(new Date).getTime();return b.autoplay&&D.stopAutoplay(!0),a.preventDefault?a.preventDefault():a.returnValue=!1,!1}function k(a){D.allowSlideClick&&(m(a),D.fireCallback(b.onSlideClick,D,a))}function l(a){m(a),D.fireCallback(b.onSlideTouch,D,a)}function m(a){if(a.currentTarget)D.clickedSlide=a.currentTarget;else{var c=a.srcElement;do{if(c.className.indexOf(b.slideClass)>-1)break;c=c.parentNode}while(c);D.clickedSlide=c}D.clickedSlideIndex=D.slides.indexOf(D.clickedSlide),D.clickedSlideLoopIndex=D.clickedSlideIndex-(D.loopedSlides||0)}function n(a){return D.allowLinks?void 0:(a.preventDefault?a.preventDefault():a.returnValue=!1,b.preventLinksPropagation&&"stopPropagation"in a&&a.stopPropagation(),!1)}function o(a){return a.stopPropagation?a.stopPropagation():a.returnValue=!1,!1}function p(a){if(b.preventLinks&&(D.allowLinks=!0),D.isTouched||b.onlyExternal)return!1;var c=a.target||a.srcElement;document.activeElement&&document.activeElement!==document.body&&document.activeElement!==c&&document.activeElement.blur();var d="input select textarea".split(" ");if(b.noSwiping&&c&&t(c))return!1;if(_=!1,D.isTouched=!0,$="touchstart"===a.type,!$&&"which"in a&&3===a.which)return D.isTouched=!1,!1;if(!$||1===a.targetTouches.length){D.callPlugins("onTouchStartBegin"),!$&&!D.isAndroid&&d.indexOf(c.tagName.toLowerCase())<0&&(a.preventDefault?a.preventDefault():a.returnValue=!1);var e=$?a.targetTouches[0].pageX:a.pageX||a.clientX,f=$?a.targetTouches[0].pageY:a.pageY||a.clientY;D.touches.startX=D.touches.currentX=e,D.touches.startY=D.touches.currentY=f,D.touches.start=D.touches.current=N?e:f,D.setWrapperTransition(0),D.positions.start=D.positions.current=D.getWrapperTranslate(),D.setWrapperTranslate(D.positions.start),D.times.start=(new Date).getTime(),I=void 0,b.moveStartThreshold>0&&(X=!1),b.onTouchStart&&D.fireCallback(b.onTouchStart,D,a),D.callPlugins("onTouchStartEnd")}}function q(a){if(D.isTouched&&!b.onlyExternal&&(!$||"mousemove"!==a.type)){var c=$?a.targetTouches[0].pageX:a.pageX||a.clientX,d=$?a.targetTouches[0].pageY:a.pageY||a.clientY;if("undefined"==typeof I&&N&&(I=!!(I||Math.abs(d-D.touches.startY)>Math.abs(c-D.touches.startX))),"undefined"!=typeof I||N||(I=!!(I||Math.abs(d-D.touches.startY)<Math.abs(c-D.touches.startX))),I)return void(D.isTouched=!1);if(N){if(!b.swipeToNext&&c<D.touches.startX||!b.swipeToPrev&&c>D.touches.startX)return}else if(!b.swipeToNext&&d<D.touches.startY||!b.swipeToPrev&&d>D.touches.startY)return;if(a.assignedToSwiper)return void(D.isTouched=!1);if(a.assignedToSwiper=!0,b.preventLinks&&(D.allowLinks=!1),b.onSlideClick&&(D.allowSlideClick=!1),b.autoplay&&D.stopAutoplay(!0),!$||1===a.touches.length){if(D.isMoved||(D.callPlugins("onTouchMoveStart"),b.loop&&(D.fixLoop(),D.positions.start=D.getWrapperTranslate()),b.onTouchMoveStart&&D.fireCallback(b.onTouchMoveStart,D)),D.isMoved=!0,a.preventDefault?a.preventDefault():a.returnValue=!1,D.touches.current=N?c:d,D.positions.current=(D.touches.current-D.touches.start)*b.touchRatio+D.positions.start,D.positions.current>0&&b.onResistanceBefore&&D.fireCallback(b.onResistanceBefore,D,D.positions.current),D.positions.current<-e()&&b.onResistanceAfter&&D.fireCallback(b.onResistanceAfter,D,Math.abs(D.positions.current+e())),b.resistance&&"100%"!==b.resistance){var f;if(D.positions.current>0&&(f=1-D.positions.current/J/2,D.positions.current=.5>f?J/2:D.positions.current*f),D.positions.current<-e()){var g=(D.touches.current-D.touches.start)*b.touchRatio+(e()+D.positions.start);f=(J+g)/J;var h=D.positions.current-g*(1-f)/2,i=-e()-J/2;D.positions.current=i>h||0>=f?i:h}}if(b.resistance&&"100%"===b.resistance&&(D.positions.current>0&&(!b.freeMode||b.freeModeFluid)&&(D.positions.current=0),D.positions.current<-e()&&(!b.freeMode||b.freeModeFluid)&&(D.positions.current=-e())),!b.followFinger)return;if(b.moveStartThreshold)if(Math.abs(D.touches.current-D.touches.start)>b.moveStartThreshold||X){if(!X)return X=!0,void(D.touches.start=D.touches.current);D.setWrapperTranslate(D.positions.current)}else D.positions.current=D.positions.start;else D.setWrapperTranslate(D.positions.current);return(b.freeMode||b.watchActiveIndex)&&D.updateActiveSlide(D.positions.current),b.grabCursor&&(D.container.style.cursor="move",D.container.style.cursor="grabbing",D.container.style.cursor="-moz-grabbin",D.container.style.cursor="-webkit-grabbing"),Y||(Y=D.touches.current),Z||(Z=(new Date).getTime()),D.velocity=(D.touches.current-Y)/((new Date).getTime()-Z)/2,Math.abs(D.touches.current-Y)<2&&(D.velocity=0),Y=D.touches.current,Z=(new Date).getTime(),D.callPlugins("onTouchMoveEnd"),b.onTouchMove&&D.fireCallback(b.onTouchMove,D,a),!1}}}function r(a){if(I&&D.swipeReset(),!b.onlyExternal&&D.isTouched){D.isTouched=!1,b.grabCursor&&(D.container.style.cursor="move",D.container.style.cursor="grab",D.container.style.cursor="-moz-grab",D.container.style.cursor="-webkit-grab"),D.positions.current||0===D.positions.current||(D.positions.current=D.positions.start),b.followFinger&&D.setWrapperTranslate(D.positions.current),D.times.end=(new Date).getTime(),D.touches.diff=D.touches.current-D.touches.start,D.touches.abs=Math.abs(D.touches.diff),D.positions.diff=D.positions.current-D.positions.start,D.positions.abs=Math.abs(D.positions.diff);var c=D.positions.diff,d=D.positions.abs,f=D.times.end-D.times.start;5>d&&300>f&&D.allowLinks===!1&&(b.freeMode||0===d||D.swipeReset(),b.preventLinks&&(D.allowLinks=!0),b.onSlideClick&&(D.allowSlideClick=!0)),setTimeout(function(){"undefined"!=typeof D&&null!==D&&(b.preventLinks&&(D.allowLinks=!0),b.onSlideClick&&(D.allowSlideClick=!0))},100);var g=e();if(!D.isMoved&&b.freeMode)return D.isMoved=!1,b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd");if(!D.isMoved||D.positions.current>0||D.positions.current<-g)return D.swipeReset(),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd");if(D.isMoved=!1,b.freeMode){if(b.freeModeFluid){var h,i=1e3*b.momentumRatio,j=D.velocity*i,k=D.positions.current+j,l=!1,m=20*Math.abs(D.velocity)*b.momentumBounceRatio;-g>k&&(b.momentumBounce&&D.support.transitions?(-m>k+g&&(k=-g-m),h=-g,l=!0,_=!0):k=-g),k>0&&(b.momentumBounce&&D.support.transitions?(k>m&&(k=m),h=0,l=!0,_=!0):k=0),0!==D.velocity&&(i=Math.abs((k-D.positions.current)/D.velocity)),D.setWrapperTranslate(k),D.setWrapperTransition(i),b.momentumBounce&&l&&D.wrapperTransitionEnd(function(){_&&(b.onMomentumBounce&&D.fireCallback(b.onMomentumBounce,D),D.callPlugins("onMomentumBounce"),D.setWrapperTranslate(h),D.setWrapperTransition(300))}),D.updateActiveSlide(k)}return(!b.freeModeFluid||f>=300)&&D.updateActiveSlide(D.positions.current),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd")}H=0>c?"toNext":"toPrev","toNext"===H&&300>=f&&(30>d||!b.shortSwipes?D.swipeReset():D.swipeNext(!0,!0)),"toPrev"===H&&300>=f&&(30>d||!b.shortSwipes?D.swipeReset():D.swipePrev(!0,!0));var n=0;if("auto"===b.slidesPerView){for(var o,p=Math.abs(D.getWrapperTranslate()),q=0,r=0;r<D.slides.length;r++)if(o=N?D.slides[r].getWidth(!0,b.roundLengths):D.slides[r].getHeight(!0,b.roundLengths),q+=o,q>p){n=o;break}n>J&&(n=J)}else n=F*b.slidesPerView;"toNext"===H&&f>300&&(d>=n*b.longSwipesRatio?D.swipeNext(!0,!0):D.swipeReset()),"toPrev"===H&&f>300&&(d>=n*b.longSwipesRatio?D.swipePrev(!0,!0):D.swipeReset()),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),D.callPlugins("onTouchEnd")}}function s(a,b){return a&&a.getAttribute("class")&&a.getAttribute("class").indexOf(b)>-1}function t(a){var c=!1;do s(a,b.noSwipingClass)&&(c=!0),a=a.parentElement;while(!c&&a.parentElement&&!s(a,b.wrapperClass));return!c&&s(a,b.wrapperClass)&&s(a,b.noSwipingClass)&&(c=!0),c}function u(a,b){var c,d=document.createElement("div");return d.innerHTML=b,c=d.firstChild,c.className+=" "+a,c.outerHTML}function v(a,c,d){function e(){var f=+new Date,l=f-g;h+=i*l/(1e3/60),k="toNext"===j?h>a:a>h,k?(D.setWrapperTranslate(Math.ceil(h)),D._DOMAnimating=!0,window.setTimeout(function(){e()},1e3/60)):(b.onSlideChangeEnd&&("to"===c?d.runCallbacks===!0&&D.fireCallback(b.onSlideChangeEnd,D,j):D.fireCallback(b.onSlideChangeEnd,D,j)),D.setWrapperTranslate(a),D._DOMAnimating=!1)}var f="to"===c&&d.speed>=0?d.speed:b.speed,g=+new Date;if(D.support.transitions||!b.DOMAnimation)D.setWrapperTranslate(a),D.setWrapperTransition(f);else{var h=D.getWrapperTranslate(),i=Math.ceil((a-h)/f*(1e3/60)),j=h>a?"toNext":"toPrev",k="toNext"===j?h>a:a>h;if(D._DOMAnimating)return;e()}D.updateActiveSlide(a),b.onSlideNext&&"next"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlideNext,D,a),b.onSlidePrev&&"prev"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlidePrev,D,a),b.onSlideReset&&"reset"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlideReset,D,a),"next"!==c&&"prev"!==c&&"to"!==c||d.runCallbacks!==!0||w(c)}function w(a){if(D.callPlugins("onSlideChangeStart"),b.onSlideChangeStart)if(b.queueStartCallbacks&&D.support.transitions){if(D._queueStartCallbacks)return;D._queueStartCallbacks=!0,D.fireCallback(b.onSlideChangeStart,D,a),D.wrapperTransitionEnd(function(){D._queueStartCallbacks=!1})}else D.fireCallback(b.onSlideChangeStart,D,a);if(b.onSlideChangeEnd)if(D.support.transitions)if(b.queueEndCallbacks){if(D._queueEndCallbacks)return;D._queueEndCallbacks=!0,D.wrapperTransitionEnd(function(c){D.fireCallback(b.onSlideChangeEnd,c,a)})}else D.wrapperTransitionEnd(function(c){D.fireCallback(b.onSlideChangeEnd,c,a)});else b.DOMAnimation||setTimeout(function(){D.fireCallback(b.onSlideChangeEnd,D,a)},10)}function x(){var a=D.paginationButtons;if(a)for(var b=0;b<a.length;b++)D.h.removeEventListener(a[b],"click",z)}function y(){var a=D.paginationButtons;if(a)for(var b=0;b<a.length;b++)D.h.addEventListener(a[b],"click",z)}function z(a){for(var c,d=a.target||a.srcElement,e=D.paginationButtons,f=0;f<e.length;f++)d===e[f]&&(c=f);b.autoplay&&D.stopAutoplay(!0),D.swipeTo(c)}function A(){ab=setTimeout(function(){b.loop?(D.fixLoop(),D.swipeNext(!0,!0)):D.swipeNext(!0,!0)||(b.autoplayStopOnLast?(clearTimeout(ab),ab=void 0):D.swipeTo(0)),D.wrapperTransitionEnd(function(){"undefined"!=typeof ab&&A()})},b.autoplay)}function B(){D.calcSlides(),b.loader.slides.length>0&&0===D.slides.length&&D.loadSlides(),b.loop&&D.createLoop(),D.init(),f(),b.pagination&&D.createPagination(!0),b.loop||b.initialSlide>0?D.swipeTo(b.initialSlide,0,!1):D.updateActiveSlide(0),b.autoplay&&D.startAutoplay(),D.centerIndex=D.activeIndex,b.onSwiperCreated&&D.fireCallback(b.onSwiperCreated,D),D.callPlugins("onSwiperCreated")}if(!document.body.outerHTML&&document.body.__defineGetter__&&HTMLElement){var C=HTMLElement.prototype;C.__defineGetter__&&C.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}if(window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;d>c;c++)if(this[c]===a)return c;return-1}),(document.querySelectorAll||window.jQuery)&&"undefined"!=typeof a&&(a.nodeType||0!==c(a).length)){var D=this;D.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0},D.positions={start:0,abs:0,diff:0,current:0},D.times={start:0,end:0},D.id=(new Date).getTime(),D.container=a.nodeType?a:c(a)[0],D.isTouched=!1,D.isMoved=!1,D.activeIndex=0,D.centerIndex=0,D.activeLoaderIndex=0,D.activeLoopIndex=0,D.previousIndex=null,D.velocity=0,D.snapGrid=[],D.slidesGrid=[],D.imagesToLoad=[],D.imagesLoaded=0,D.wrapperLeft=0,D.wrapperRight=0,D.wrapperTop=0,D.wrapperBottom=0,D.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>=0;var E,F,G,H,I,J,K={eventTarget:"wrapper",mode:"horizontal",touchRatio:1,speed:300,freeMode:!1,freeModeFluid:!1,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,slidesPerViewFit:!0,simulateTouch:!0,followFinger:!0,shortSwipes:!0,longSwipesRatio:.5,moveStartThreshold:!1,onlyExternal:!1,createPagination:!0,pagination:!1,paginationElement:"span",paginationClickable:!1,paginationAsRange:!0,resistance:!0,scrollContainer:!1,preventLinks:!0,preventLinksPropagation:!1,noSwiping:!1,noSwipingClass:"swiper-no-swiping",initialSlide:0,keyboardControl:!1,mousewheelControl:!1,mousewheelControlForceToAxis:!1,useCSS3Transforms:!0,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,loop:!1,loopAdditionalSlides:0,roundLengths:!1,calculateHeight:!1,cssWidthAndHeight:!1,updateOnImagesReady:!0,releaseFormElements:!0,watchActiveIndex:!1,visibilityFullFit:!1,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:!1,queueStartCallbacks:!1,queueEndCallbacks:!1,autoResize:!0,resizeReInit:!1,DOMAnimation:!0,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:!1},swipeToPrev:!0,swipeToNext:!0,slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};b=b||{};for(var L in K)if(L in b&&"object"==typeof b[L])for(var M in K[L])M in b[L]||(b[L][M]=K[L][M]);else L in b||(b[L]=K[L]);D.params=b,b.scrollContainer&&(b.freeMode=!0,b.freeModeFluid=!0),b.loop&&(b.resistance="100%");var N="horizontal"===b.mode,O=["mousedown","mousemove","mouseup"];D.browser.ie10&&(O=["MSPointerDown","MSPointerMove","MSPointerUp"]),D.browser.ie11&&(O=["pointerdown","pointermove","pointerup"]),D.touchEvents={touchStart:D.support.touch||!b.simulateTouch?"touchstart":O[0],touchMove:D.support.touch||!b.simulateTouch?"touchmove":O[1],touchEnd:D.support.touch||!b.simulateTouch?"touchend":O[2]};for(var P=D.container.childNodes.length-1;P>=0;P--)if(D.container.childNodes[P].className)for(var Q=D.container.childNodes[P].className.split(/\s+/),R=0;R<Q.length;R++)Q[R]===b.wrapperClass&&(E=D.container.childNodes[P]);D.wrapper=E,D._extendSwiperSlide=function(a){return a.append=function(){return b.loop?a.insertAfter(D.slides.length-D.loopedSlides):(D.wrapper.appendChild(a),D.reInit()),a},a.prepend=function(){return b.loop?(D.wrapper.insertBefore(a,D.slides[D.loopedSlides]),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):D.wrapper.insertBefore(a,D.wrapper.firstChild),D.reInit(),a},a.insertAfter=function(c){if("undefined"==typeof c)return!1;var d;return b.loop?(d=D.slides[c+1+D.loopedSlides],d?D.wrapper.insertBefore(a,d):D.wrapper.appendChild(a),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):(d=D.slides[c+1],D.wrapper.insertBefore(a,d)),D.reInit(),a},a.clone=function(){return D._extendSwiperSlide(a.cloneNode(!0))},a.remove=function(){D.wrapper.removeChild(a),D.reInit()},a.html=function(b){return"undefined"==typeof b?a.innerHTML:(a.innerHTML=b,a)},a.index=function(){for(var b,c=D.slides.length-1;c>=0;c--)a===D.slides[c]&&(b=c);return b},a.isActive=function(){return a.index()===D.activeIndex?!0:!1},a.swiperSlideDataStorage||(a.swiperSlideDataStorage={}),a.getData=function(b){return a.swiperSlideDataStorage[b]},a.setData=function(b,c){return a.swiperSlideDataStorage[b]=c,a},a.data=function(b,c){return"undefined"==typeof c?a.getAttribute("data-"+b):(a.setAttribute("data-"+b,c),a)},a.getWidth=function(b,c){return D.h.getWidth(a,b,c)},a.getHeight=function(b,c){return D.h.getHeight(a,b,c)},a.getOffset=function(){return D.h.getOffset(a)},a},D.calcSlides=function(a){var c=D.slides?D.slides.length:!1;D.slides=[],D.displaySlides=[];for(var d=0;d<D.wrapper.childNodes.length;d++)if(D.wrapper.childNodes[d].className)for(var e=D.wrapper.childNodes[d].className,f=e.split(/\s+/),i=0;i<f.length;i++)f[i]===b.slideClass&&D.slides.push(D.wrapper.childNodes[d]);for(d=D.slides.length-1;d>=0;d--)D._extendSwiperSlide(D.slides[d]);c!==!1&&(c!==D.slides.length||a)&&(h(),g(),D.updateActiveSlide(),D.params.pagination&&D.createPagination(),D.callPlugins("numberOfSlidesChanged"))},D.createSlide=function(a,c,d){c=c||D.params.slideClass,d=d||b.slideElement;var e=document.createElement(d);return e.innerHTML=a||"",e.className=c,D._extendSwiperSlide(e)},D.appendSlide=function(a,b,c){return a?a.nodeType?D._extendSwiperSlide(a).append():D.createSlide(a,b,c).append():void 0},D.prependSlide=function(a,b,c){return a?a.nodeType?D._extendSwiperSlide(a).prepend():D.createSlide(a,b,c).prepend():void 0},D.insertSlideAfter=function(a,b,c,d){return"undefined"==typeof a?!1:b.nodeType?D._extendSwiperSlide(b).insertAfter(a):D.createSlide(b,c,d).insertAfter(a)},D.removeSlide=function(a){if(D.slides[a]){if(b.loop){if(!D.slides[a+D.loopedSlides])return!1;D.slides[a+D.loopedSlides].remove(),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()}else D.slides[a].remove();return!0}return!1},D.removeLastSlide=function(){return D.slides.length>0?(b.loop?(D.slides[D.slides.length-1-D.loopedSlides].remove(),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):D.slides[D.slides.length-1].remove(),!0):!1},D.removeAllSlides=function(){for(var a=D.slides.length,b=D.slides.length-1;b>=0;b--)D.slides[b].remove(),b===a-1&&D.setWrapperTranslate(0)},D.getSlide=function(a){return D.slides[a]},D.getLastSlide=function(){return D.slides[D.slides.length-1]},D.getFirstSlide=function(){return D.slides[0]},D.activeSlide=function(){return D.slides[D.activeIndex]},D.fireCallback=function(){var a=arguments[0];if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)"function"==typeof a[c]&&a[c](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);else"[object String]"===Object.prototype.toString.call(a)?b["on"+a]&&D.fireCallback(b["on"+a],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]):a(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},D.addCallback=function(a,b){var c,e=this;return e.params["on"+a]?d(this.params["on"+a])?this.params["on"+a].push(b):"function"==typeof this.params["on"+a]?(c=this.params["on"+a],this.params["on"+a]=[],this.params["on"+a].push(c),this.params["on"+a].push(b)):void 0:(this.params["on"+a]=[],this.params["on"+a].push(b))},D.removeCallbacks=function(a){D.params["on"+a]&&(D.params["on"+a]=null)};var S=[];for(var T in D.plugins)if(b[T]){var U=D.plugins[T](D,b[T]);U&&S.push(U)}D.callPlugins=function(a,b){b||(b={});for(var c=0;c<S.length;c++)a in S[c]&&S[c][a](b)},!D.browser.ie10&&!D.browser.ie11||b.onlyExternal||D.wrapper.classList.add("swiper-wp8-"+(N?"horizontal":"vertical")),b.freeMode&&(D.container.className+=" swiper-free-mode"),D.initialized=!1,D.init=function(a,c){var d=D.h.getWidth(D.container,!1,b.roundLengths),e=D.h.getHeight(D.container,!1,b.roundLengths);if(d!==D.width||e!==D.height||a){D.width=d,D.height=e;var f,g,h,i,j,k,l;J=N?d:e;var m=D.wrapper;if(a&&D.calcSlides(c),"auto"===b.slidesPerView){var n=0,o=0;b.slidesOffset>0&&(m.style.paddingLeft="",m.style.paddingRight="",m.style.paddingTop="",m.style.paddingBottom=""),m.style.width="",m.style.height="",b.offsetPxBefore>0&&(N?D.wrapperLeft=b.offsetPxBefore:D.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(N?D.wrapperRight=b.offsetPxAfter:D.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(N?(D.wrapperLeft=(J-this.slides[0].getWidth(!0,b.roundLengths))/2,D.wrapperRight=(J-D.slides[D.slides.length-1].getWidth(!0,b.roundLengths))/2):(D.wrapperTop=(J-D.slides[0].getHeight(!0,b.roundLengths))/2,D.wrapperBottom=(J-D.slides[D.slides.length-1].getHeight(!0,b.roundLengths))/2)),N?(D.wrapperLeft>=0&&(m.style.paddingLeft=D.wrapperLeft+"px"),D.wrapperRight>=0&&(m.style.paddingRight=D.wrapperRight+"px")):(D.wrapperTop>=0&&(m.style.paddingTop=D.wrapperTop+"px"),D.wrapperBottom>=0&&(m.style.paddingBottom=D.wrapperBottom+"px")),k=0;var p=0;for(D.snapGrid=[],D.slidesGrid=[],h=0,l=0;l<D.slides.length;l++){f=D.slides[l].getWidth(!0,b.roundLengths),g=D.slides[l].getHeight(!0,b.roundLengths),b.calculateHeight&&(h=Math.max(h,g));var q=N?f:g;if(b.centeredSlides){var r=l===D.slides.length-1?0:D.slides[l+1].getWidth(!0,b.roundLengths),s=l===D.slides.length-1?0:D.slides[l+1].getHeight(!0,b.roundLengths),t=N?r:s;if(q>J){if(b.slidesPerViewFit)D.snapGrid.push(k+D.wrapperLeft),D.snapGrid.push(k+q-J+D.wrapperLeft);else for(var u=0;u<=Math.floor(q/(J+D.wrapperLeft));u++)D.snapGrid.push(0===u?k+D.wrapperLeft:k+D.wrapperLeft+J*u);D.slidesGrid.push(k+D.wrapperLeft)}else D.snapGrid.push(p),D.slidesGrid.push(p);p+=q/2+t/2}else{if(q>J)if(b.slidesPerViewFit)D.snapGrid.push(k),D.snapGrid.push(k+q-J);else if(0!==J)for(var v=0;v<=Math.floor(q/J);v++)D.snapGrid.push(k+J*v);else D.snapGrid.push(k);else D.snapGrid.push(k);D.slidesGrid.push(k)}k+=q,n+=f,o+=g}b.calculateHeight&&(D.height=h),N?(G=n+D.wrapperRight+D.wrapperLeft,b.cssWidthAndHeight&&"height"!==b.cssWidthAndHeight||(m.style.width=n+"px"),b.cssWidthAndHeight&&"width"!==b.cssWidthAndHeight||(m.style.height=D.height+"px")):(b.cssWidthAndHeight&&"height"!==b.cssWidthAndHeight||(m.style.width=D.width+"px"),b.cssWidthAndHeight&&"width"!==b.cssWidthAndHeight||(m.style.height=o+"px"),G=o+D.wrapperTop+D.wrapperBottom)}else if(b.scrollContainer)m.style.width="",m.style.height="",i=D.slides[0].getWidth(!0,b.roundLengths),j=D.slides[0].getHeight(!0,b.roundLengths),G=N?i:j,m.style.width=i+"px",m.style.height=j+"px",F=N?i:j;else{if(b.calculateHeight){for(h=0,j=0,N||(D.container.style.height=""),m.style.height="",l=0;l<D.slides.length;l++)D.slides[l].style.height="",h=Math.max(D.slides[l].getHeight(!0),h),N||(j+=D.slides[l].getHeight(!0));g=h,D.height=g,N?j=g:(J=g,D.container.style.height=J+"px")}else g=N?D.height:D.height/b.slidesPerView,b.roundLengths&&(g=Math.ceil(g)),j=N?D.height:D.slides.length*g;for(f=N?D.width/b.slidesPerView:D.width,b.roundLengths&&(f=Math.ceil(f)),i=N?D.slides.length*f:D.width,F=N?f:g,b.offsetSlidesBefore>0&&(N?D.wrapperLeft=F*b.offsetSlidesBefore:D.wrapperTop=F*b.offsetSlidesBefore),b.offsetSlidesAfter>0&&(N?D.wrapperRight=F*b.offsetSlidesAfter:D.wrapperBottom=F*b.offsetSlidesAfter),b.offsetPxBefore>0&&(N?D.wrapperLeft=b.offsetPxBefore:D.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(N?D.wrapperRight=b.offsetPxAfter:D.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(N?(D.wrapperLeft=(J-F)/2,D.wrapperRight=(J-F)/2):(D.wrapperTop=(J-F)/2,D.wrapperBottom=(J-F)/2)),N?(D.wrapperLeft>0&&(m.style.paddingLeft=D.wrapperLeft+"px"),D.wrapperRight>0&&(m.style.paddingRight=D.wrapperRight+"px")):(D.wrapperTop>0&&(m.style.paddingTop=D.wrapperTop+"px"),D.wrapperBottom>0&&(m.style.paddingBottom=D.wrapperBottom+"px")),G=N?i+D.wrapperRight+D.wrapperLeft:j+D.wrapperTop+D.wrapperBottom,parseFloat(i)>0&&(!b.cssWidthAndHeight||"height"===b.cssWidthAndHeight)&&(m.style.width=i+"px"),parseFloat(j)>0&&(!b.cssWidthAndHeight||"width"===b.cssWidthAndHeight)&&(m.style.height=j+"px"),k=0,D.snapGrid=[],D.slidesGrid=[],l=0;l<D.slides.length;l++)D.snapGrid.push(k),D.slidesGrid.push(k),k+=F,parseFloat(f)>0&&(!b.cssWidthAndHeight||"height"===b.cssWidthAndHeight)&&(D.slides[l].style.width=f+"px"),parseFloat(g)>0&&(!b.cssWidthAndHeight||"width"===b.cssWidthAndHeight)&&(D.slides[l].style.height=g+"px")}D.initialized?(D.callPlugins("onInit"),b.onInit&&D.fireCallback(b.onInit,D)):(D.callPlugins("onFirstInit"),b.onFirstInit&&D.fireCallback(b.onFirstInit,D)),D.initialized=!0}},D.reInit=function(a){D.init(!0,a)},D.resizeFix=function(a){D.callPlugins("beforeResizeFix"),D.init(b.resizeReInit||a),b.freeMode?D.getWrapperTranslate()<-e()&&(D.setWrapperTransition(0),D.setWrapperTranslate(-e())):(D.swipeTo(b.loop?D.activeLoopIndex:D.activeIndex,0,!1),b.autoplay&&(D.support.transitions&&"undefined"!=typeof ab?"undefined"!=typeof ab&&(clearTimeout(ab),ab=void 0,D.startAutoplay()):"undefined"!=typeof bb&&(clearInterval(bb),bb=void 0,D.startAutoplay()))),D.callPlugins("afterResizeFix")},D.destroy=function(a){var c=D.h.removeEventListener,d="wrapper"===b.eventTarget?D.wrapper:D.container;if(D.browser.ie10||D.browser.ie11?(c(d,D.touchEvents.touchStart,p),c(document,D.touchEvents.touchMove,q),c(document,D.touchEvents.touchEnd,r)):(D.support.touch&&(c(d,"touchstart",p),c(d,"touchmove",q),c(d,"touchend",r)),b.simulateTouch&&(c(d,"mousedown",p),c(document,"mousemove",q),c(document,"mouseup",r))),b.autoResize&&c(window,"resize",D.resizeFix),h(),b.paginationClickable&&x(),b.mousewheelControl&&D._wheelEvent&&c(D.container,D._wheelEvent,j),b.keyboardControl&&c(document,"keydown",i),b.autoplay&&D.stopAutoplay(),a){D.wrapper.removeAttribute("style");for(var e=0;e<D.slides.length;e++)D.slides[e].removeAttribute("style")}D.callPlugins("onDestroy"),window.jQuery&&window.jQuery(D.container).data("swiper")&&window.jQuery(D.container).removeData("swiper"),window.Zepto&&window.Zepto(D.container).data("swiper")&&window.Zepto(D.container).removeData("swiper"),D=null},D.disableKeyboardControl=function(){b.keyboardControl=!1,D.h.removeEventListener(document,"keydown",i)},D.enableKeyboardControl=function(){b.keyboardControl=!0,D.h.addEventListener(document,"keydown",i)};var V=(new Date).getTime();if(D.disableMousewheelControl=function(){return D._wheelEvent?(b.mousewheelControl=!1,D.h.removeEventListener(D.container,D._wheelEvent,j),!0):!1},D.enableMousewheelControl=function(){return D._wheelEvent?(b.mousewheelControl=!0,D.h.addEventListener(D.container,D._wheelEvent,j),!0):!1},b.grabCursor){var W=D.container.style;W.cursor="move",W.cursor="grab",W.cursor="-moz-grab",W.cursor="-webkit-grab"}D.allowSlideClick=!0,D.allowLinks=!0;var X,Y,Z,$=!1,_=!0;D.swipeNext=function(a,c){"undefined"==typeof a&&(a=!0),!c&&b.loop&&D.fixLoop(),!c&&b.autoplay&&D.stopAutoplay(!0),D.callPlugins("onSwipeNext");var d=D.getWrapperTranslate().toFixed(2),f=d;if("auto"===b.slidesPerView){for(var g=0;g<D.snapGrid.length;g++)if(-d>=D.snapGrid[g].toFixed(2)&&-d<D.snapGrid[g+1].toFixed(2)){f=-D.snapGrid[g+1];break}}else{var h=F*b.slidesPerGroup;f=-(Math.floor(Math.abs(d)/Math.floor(h))*h+h)}return f<-e()&&(f=-e()),f===d?!1:(v(f,"next",{runCallbacks:a}),!0)},D.swipePrev=function(a,c){"undefined"==typeof a&&(a=!0),!c&&b.loop&&D.fixLoop(),!c&&b.autoplay&&D.stopAutoplay(!0),D.callPlugins("onSwipePrev");var d,e=Math.ceil(D.getWrapperTranslate());if("auto"===b.slidesPerView){d=0;for(var f=1;f<D.snapGrid.length;f++){if(-e===D.snapGrid[f]){d=-D.snapGrid[f-1];break}if(-e>D.snapGrid[f]&&-e<D.snapGrid[f+1]){d=-D.snapGrid[f];break}}}else{var g=F*b.slidesPerGroup;d=-(Math.ceil(-e/g)-1)*g}return d>0&&(d=0),d===e?!1:(v(d,"prev",{runCallbacks:a}),!0)},D.swipeReset=function(a){"undefined"==typeof a&&(a=!0),D.callPlugins("onSwipeReset");{var c,d=D.getWrapperTranslate(),f=F*b.slidesPerGroup;-e()}if("auto"===b.slidesPerView){c=0;for(var g=0;g<D.snapGrid.length;g++){if(-d===D.snapGrid[g])return;if(-d>=D.snapGrid[g]&&-d<D.snapGrid[g+1]){c=D.positions.diff>0?-D.snapGrid[g+1]:-D.snapGrid[g];break}}-d>=D.snapGrid[D.snapGrid.length-1]&&(c=-D.snapGrid[D.snapGrid.length-1]),d<=-e()&&(c=-e())}else c=0>d?Math.round(d/f)*f:0,d<=-e()&&(c=-e());return b.scrollContainer&&(c=0>d?d:0),c<-e()&&(c=-e()),b.scrollContainer&&J>F&&(c=0),c===d?!1:(v(c,"reset",{runCallbacks:a}),!0)},D.swipeTo=function(a,c,d){a=parseInt(a,10),D.callPlugins("onSwipeTo",{index:a,speed:c}),b.loop&&(a+=D.loopedSlides);var f=D.getWrapperTranslate();if(!(!isFinite(a)||a>D.slides.length-1||0>a)){var g;return g="auto"===b.slidesPerView?-D.slidesGrid[a]:-a*F,g<-e()&&(g=-e()),g===f?!1:("undefined"==typeof d&&(d=!0),v(g,"to",{index:a,speed:c,runCallbacks:d}),!0)}},D._queueStartCallbacks=!1,D._queueEndCallbacks=!1,D.updateActiveSlide=function(a){if(D.initialized&&0!==D.slides.length){D.previousIndex=D.activeIndex,"undefined"==typeof a&&(a=D.getWrapperTranslate()),a>0&&(a=0);var c;if("auto"===b.slidesPerView){if(D.activeIndex=D.slidesGrid.indexOf(-a),D.activeIndex<0){for(c=0;c<D.slidesGrid.length-1&&!(-a>D.slidesGrid[c]&&-a<D.slidesGrid[c+1]);c++);var d=Math.abs(D.slidesGrid[c]+a),e=Math.abs(D.slidesGrid[c+1]+a);
D.activeIndex=e>=d?c:c+1}}else D.activeIndex=Math[b.visibilityFullFit?"ceil":"round"](-a/F);if(D.activeIndex===D.slides.length&&(D.activeIndex=D.slides.length-1),D.activeIndex<0&&(D.activeIndex=0),D.slides[D.activeIndex]){if(D.calcVisibleSlides(a),D.support.classList){var f;for(c=0;c<D.slides.length;c++)f=D.slides[c],f.classList.remove(b.slideActiveClass),D.visibleSlides.indexOf(f)>=0?f.classList.add(b.slideVisibleClass):f.classList.remove(b.slideVisibleClass);D.slides[D.activeIndex].classList.add(b.slideActiveClass)}else{var g=new RegExp("\\s*"+b.slideActiveClass),h=new RegExp("\\s*"+b.slideVisibleClass);for(c=0;c<D.slides.length;c++)D.slides[c].className=D.slides[c].className.replace(g,"").replace(h,""),D.visibleSlides.indexOf(D.slides[c])>=0&&(D.slides[c].className+=" "+b.slideVisibleClass);D.slides[D.activeIndex].className+=" "+b.slideActiveClass}if(b.loop){var i=D.loopedSlides;D.activeLoopIndex=D.activeIndex-i,D.activeLoopIndex>=D.slides.length-2*i&&(D.activeLoopIndex=D.slides.length-2*i-D.activeLoopIndex),D.activeLoopIndex<0&&(D.activeLoopIndex=D.slides.length-2*i+D.activeLoopIndex),D.activeLoopIndex<0&&(D.activeLoopIndex=0)}else D.activeLoopIndex=D.activeIndex;b.pagination&&D.updatePagination(a)}}},D.createPagination=function(a){if(b.paginationClickable&&D.paginationButtons&&x(),D.paginationContainer=b.pagination.nodeType?b.pagination:c(b.pagination)[0],b.createPagination){var d="",e=D.slides.length,f=e;b.loop&&(f-=2*D.loopedSlides);for(var g=0;f>g;g++)d+="<"+b.paginationElement+' class="'+b.paginationElementClass+'"></'+b.paginationElement+">";D.paginationContainer.innerHTML=d}D.paginationButtons=c("."+b.paginationElementClass,D.paginationContainer),a||D.updatePagination(),D.callPlugins("onCreatePagination"),b.paginationClickable&&y()},D.updatePagination=function(a){if(b.pagination&&!(D.slides.length<1)){var d=c("."+b.paginationActiveClass,D.paginationContainer);if(d){var e=D.paginationButtons;if(0!==e.length){for(var f=0;f<e.length;f++)e[f].className=b.paginationElementClass;var g=b.loop?D.loopedSlides:0;if(b.paginationAsRange){D.visibleSlides||D.calcVisibleSlides(a);var h,i=[];for(h=0;h<D.visibleSlides.length;h++){var j=D.slides.indexOf(D.visibleSlides[h])-g;b.loop&&0>j&&(j=D.slides.length-2*D.loopedSlides+j),b.loop&&j>=D.slides.length-2*D.loopedSlides&&(j=D.slides.length-2*D.loopedSlides-j,j=Math.abs(j)),i.push(j)}for(h=0;h<i.length;h++)e[i[h]]&&(e[i[h]].className+=" "+b.paginationVisibleClass);b.loop?void 0!==e[D.activeLoopIndex]&&(e[D.activeLoopIndex].className+=" "+b.paginationActiveClass):e[D.activeIndex]&&(e[D.activeIndex].className+=" "+b.paginationActiveClass)}else b.loop?e[D.activeLoopIndex]&&(e[D.activeLoopIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass):e[D.activeIndex]&&(e[D.activeIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass)}}}},D.calcVisibleSlides=function(a){var c=[],d=0,e=0,f=0;N&&D.wrapperLeft>0&&(a+=D.wrapperLeft),!N&&D.wrapperTop>0&&(a+=D.wrapperTop);for(var g=0;g<D.slides.length;g++){d+=e,e="auto"===b.slidesPerView?N?D.h.getWidth(D.slides[g],!0,b.roundLengths):D.h.getHeight(D.slides[g],!0,b.roundLengths):F,f=d+e;var h=!1;b.visibilityFullFit?(d>=-a&&-a+J>=f&&(h=!0),-a>=d&&f>=-a+J&&(h=!0)):(f>-a&&-a+J>=f&&(h=!0),d>=-a&&-a+J>d&&(h=!0),-a>d&&f>-a+J&&(h=!0)),h&&c.push(D.slides[g])}0===c.length&&(c=[D.slides[D.activeIndex]]),D.visibleSlides=c};var ab,bb;D.startAutoplay=function(){if(D.support.transitions){if("undefined"!=typeof ab)return!1;if(!b.autoplay)return;D.callPlugins("onAutoplayStart"),b.onAutoplayStart&&D.fireCallback(b.onAutoplayStart,D),A()}else{if("undefined"!=typeof bb)return!1;if(!b.autoplay)return;D.callPlugins("onAutoplayStart"),b.onAutoplayStart&&D.fireCallback(b.onAutoplayStart,D),bb=setInterval(function(){b.loop?(D.fixLoop(),D.swipeNext(!0,!0)):D.swipeNext(!0,!0)||(b.autoplayStopOnLast?(clearInterval(bb),bb=void 0):D.swipeTo(0))},b.autoplay)}},D.stopAutoplay=function(a){if(D.support.transitions){if(!ab)return;ab&&clearTimeout(ab),ab=void 0,a&&!b.autoplayDisableOnInteraction&&D.wrapperTransitionEnd(function(){A()}),D.callPlugins("onAutoplayStop"),b.onAutoplayStop&&D.fireCallback(b.onAutoplayStop,D)}else bb&&clearInterval(bb),bb=void 0,D.callPlugins("onAutoplayStop"),b.onAutoplayStop&&D.fireCallback(b.onAutoplayStop,D)},D.loopCreated=!1,D.removeLoopedSlides=function(){if(D.loopCreated)for(var a=0;a<D.slides.length;a++)D.slides[a].getData("looped")===!0&&D.wrapper.removeChild(D.slides[a])},D.createLoop=function(){if(0!==D.slides.length){D.loopedSlides="auto"===b.slidesPerView?b.loopedSlides||1:Math.floor(b.slidesPerView)+b.loopAdditionalSlides,D.loopedSlides>D.slides.length&&(D.loopedSlides=D.slides.length);var a,c="",d="",e="",f=D.slides.length,g=Math.floor(D.loopedSlides/f),h=D.loopedSlides%f;for(a=0;g*f>a;a++){var i=a;if(a>=f){var j=Math.floor(a/f);i=a-f*j}e+=D.slides[i].outerHTML}for(a=0;h>a;a++)d+=u(b.slideDuplicateClass,D.slides[a].outerHTML);for(a=f-h;f>a;a++)c+=u(b.slideDuplicateClass,D.slides[a].outerHTML);var k=c+e+E.innerHTML+e+d;for(E.innerHTML=k,D.loopCreated=!0,D.calcSlides(),a=0;a<D.slides.length;a++)(a<D.loopedSlides||a>=D.slides.length-D.loopedSlides)&&D.slides[a].setData("looped",!0);D.callPlugins("onCreateLoop")}},D.fixLoop=function(){var a;D.activeIndex<D.loopedSlides?(a=D.slides.length-3*D.loopedSlides+D.activeIndex,D.swipeTo(a,0,!1)):("auto"===b.slidesPerView&&D.activeIndex>=2*D.loopedSlides||D.activeIndex>D.slides.length-2*b.slidesPerView)&&(a=-D.slides.length+D.activeIndex+D.loopedSlides,D.swipeTo(a,0,!1))},D.loadSlides=function(){var a="";D.activeLoaderIndex=0;for(var c=b.loader.slides,d=b.loader.loadAllSlides?c.length:b.slidesPerView*(1+b.loader.surroundGroups),e=0;d>e;e++)a+="outer"===b.loader.slidesHTMLType?c[e]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+e+'">'+c[e]+"</"+b.slideElement+">";D.wrapper.innerHTML=a,D.calcSlides(!0),b.loader.loadAllSlides||D.wrapperTransitionEnd(D.reloadSlides,!0)},D.reloadSlides=function(){var a=b.loader.slides,c=parseInt(D.activeSlide().data("swiperindex"),10);if(!(0>c||c>a.length-1)){D.activeLoaderIndex=c;var d=Math.max(0,c-b.slidesPerView*b.loader.surroundGroups),e=Math.min(c+b.slidesPerView*(1+b.loader.surroundGroups)-1,a.length-1);if(c>0){var f=-F*(c-d);D.setWrapperTranslate(f),D.setWrapperTransition(0)}var g;if("reload"===b.loader.logic){D.wrapper.innerHTML="";var h="";for(g=d;e>=g;g++)h+="outer"===b.loader.slidesHTMLType?a[g]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+g+'">'+a[g]+"</"+b.slideElement+">";D.wrapper.innerHTML=h}else{var i=1e3,j=0;for(g=0;g<D.slides.length;g++){var k=D.slides[g].data("swiperindex");d>k||k>e?D.wrapper.removeChild(D.slides[g]):(i=Math.min(k,i),j=Math.max(k,j))}for(g=d;e>=g;g++){var l;i>g&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],D.wrapper.insertBefore(l,D.wrapper.firstChild)),g>j&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],D.wrapper.appendChild(l))}}D.reInit(!0)}},B()}};Swiper.prototype={plugins:{},wrapperTransitionEnd:function(a,b){"use strict";function c(h){if(h.target===f&&(a(e),e.params.queueEndCallbacks&&(e._queueEndCallbacks=!1),!b))for(d=0;d<g.length;d++)e.h.removeEventListener(f,g[d],c)}var d,e=this,f=e.wrapper,g=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(a)for(d=0;d<g.length;d++)e.h.addEventListener(f,g[d],c)},getWrapperTranslate:function(a){"use strict";var b,c,d,e,f=this.wrapper;return"undefined"==typeof a&&(a="horizontal"===this.params.mode?"x":"y"),this.support.transforms&&this.params.useCSS3Transforms?(d=window.getComputedStyle(f,null),window.WebKitCSSMatrix?e=new WebKitCSSMatrix("none"===d.webkitTransform?"":d.webkitTransform):(e=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),b=e.toString().split(",")),"x"===a&&(c=window.WebKitCSSMatrix?e.m41:parseFloat(16===b.length?b[12]:b[4])),"y"===a&&(c=window.WebKitCSSMatrix?e.m42:parseFloat(16===b.length?b[13]:b[5]))):("x"===a&&(c=parseFloat(f.style.left,10)||0),"y"===a&&(c=parseFloat(f.style.top,10)||0)),c||0},setWrapperTranslate:function(a,b,c){"use strict";var d,e=this.wrapper.style,f={x:0,y:0,z:0};3===arguments.length?(f.x=a,f.y=b,f.z=c):("undefined"==typeof b&&(b="horizontal"===this.params.mode?"x":"y"),f[b]=a),this.support.transforms&&this.params.useCSS3Transforms?(d=this.support.transforms3d?"translate3d("+f.x+"px, "+f.y+"px, "+f.z+"px)":"translate("+f.x+"px, "+f.y+"px)",e.webkitTransform=e.MsTransform=e.msTransform=e.MozTransform=e.OTransform=e.transform=d):(e.left=f.x+"px",e.top=f.y+"px"),this.callPlugins("onSetWrapperTransform",f),this.params.onSetWrapperTransform&&this.fireCallback(this.params.onSetWrapperTransform,this,f)},setWrapperTransition:function(a){"use strict";var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=a/1e3+"s",this.callPlugins("onSetWrapperTransition",{duration:a}),this.params.onSetWrapperTransition&&this.fireCallback(this.params.onSetWrapperTransition,this,a)},h:{getWidth:function(a,b,c){"use strict";var d=window.getComputedStyle(a,null).getPropertyValue("width"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0||0>e)&&(e=a.offsetWidth-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),c?Math.ceil(e):e},getHeight:function(a,b,c){"use strict";if(b)return a.offsetHeight;var d=window.getComputedStyle(a,null).getPropertyValue("height"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0||0>e)&&(e=a.offsetHeight-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),c?Math.ceil(e):e},getOffset:function(a){"use strict";var b=a.getBoundingClientRect(),c=document.body,d=a.clientTop||c.clientTop||0,e=a.clientLeft||c.clientLeft||0,f=window.pageYOffset||a.scrollTop,g=window.pageXOffset||a.scrollLeft;return document.documentElement&&!window.pageYOffset&&(f=document.documentElement.scrollTop,g=document.documentElement.scrollLeft),{top:b.top+f-d,left:b.left+g-e}},windowWidth:function(){"use strict";return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:void 0},windowHeight:function(){"use strict";return window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:void 0},windowScroll:function(){"use strict";return"undefined"!=typeof pageYOffset?{left:window.pageXOffset,top:window.pageYOffset}:document.documentElement?{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}:void 0},addEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},removeEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)}},setTransform:function(a,b){"use strict";var c=a.style;c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=b},setTranslate:function(a,b){"use strict";var c=a.style,d={x:b.x||0,y:b.y||0,z:b.z||0},e=this.support.transforms3d?"translate3d("+d.x+"px,"+d.y+"px,"+d.z+"px)":"translate("+d.x+"px,"+d.y+"px)";c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=e,this.support.transforms||(c.left=d.x+"px",c.top=d.y+"px")},setTransition:function(a,b){"use strict";var c=a.style;c.webkitTransitionDuration=c.MsTransitionDuration=c.msTransitionDuration=c.MozTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms"},support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){"use strict";return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){"use strict";var a=document.createElement("div").style;return"webkitPerspective"in a||"MozPerspective"in a||"OPerspective"in a||"MsPerspective"in a||"perspective"in a}(),transforms:window.Modernizr&&Modernizr.csstransforms===!0||function(){"use strict";var a=document.createElement("div").style;return"transform"in a||"WebkitTransform"in a||"MozTransform"in a||"msTransform"in a||"MsTransform"in a||"OTransform"in a}(),transitions:window.Modernizr&&Modernizr.csstransitions===!0||function(){"use strict";var a=document.createElement("div").style;return"transition"in a||"WebkitTransition"in a||"MozTransition"in a||"msTransition"in a||"MsTransition"in a||"OTransition"in a}(),classList:function(){"use strict";var a=document.createElement("div");return"classList"in a}()},browser:{ie8:function(){"use strict";var a=-1;if("Microsoft Internet Explorer"===navigator.appName){var b=navigator.userAgent,c=new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null!==c.exec(b)&&(a=parseFloat(RegExp.$1))}return-1!==a&&9>a}(),ie10:window.navigator.msPointerEnabled,ie11:window.navigator.pointerEnabled}},(window.jQuery||window.Zepto)&&!function(a){"use strict";a.fn.swiper=function(b){var c;return this.each(function(d){var e=a(this),f=new Swiper(e[0],b);d||(c=f),e.data("swiper",f)}),c}}(window.jQuery||window.Zepto),"undefined"!=typeof module?module.exports=Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});
;(function(e,t){if(!e)return t;var n=function(){this.el=t;this.items=t;this.sizes=[];this.max=[0,0];this.current=0;this.interval=t;this.opts={speed:500,delay:3e3,complete:t,keys:!t,dots:t,fluid:t};var n=this;this.init=function(t,n){this.el=t;this.ul=t.children("ul");this.max=[t.outerWidth(),t.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=e.extend(this.opts,n);this.setup();return this};this.calculate=function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();n.sizes[t]=[i,s];if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s};this.setup=function(){this.el.css({overflow:"hidden",width:n.max[0],height:this.items.first().outerHeight()});this.ul.css({width:this.items.length*100+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");if(this.opts.delay!==t){this.start();this.el.hover(this.stop,this.start)}this.opts.keys&&e(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var r=function(){n.el.css("width",Math.min(Math.round(n.el.outerWidth()/n.el.parent().outerWidth()*100),100)+"%")};r();e(window).resize(r)}if(this.opts.arrows){this.el.parent().append('<p class="arrows"><span class="prev">←</span><span class="next">→</span></p>').find(".arrows span").click(function(){e.isFunction(n[this.className])&&n[this.className]()})}if(e.event.swipe){this.el.on("swipeleft",n.prev).on("swiperight",n.next)}};this.move=function(t,r){if(!this.items.eq(t).length)t=0;if(t<0)t=this.items.length-1;var i=this.items.eq(t);var s={height:i.outerHeight()};var o=r?5:this.opts.speed;if(!this.ul.is(":animated")){n.el.find(".dot:eq("+t+")").addClass("active").siblings().removeClass("active");this.el.animate(s,o)&&this.ul.animate(e.extend({left:"-"+t+"00%"},s),o,function(i){n.current=t;e.isFunction(n.opts.complete)&&!r&&n.opts.complete(n.el)})}};this.start=function(){n.interval=setInterval(function(){n.move(n.current+1)},n.opts.delay)};this.stop=function(){n.interval=clearInterval(n.interval);return n};this.keys=function(t){var r=t.which;var i={37:n.prev,39:n.next,27:n.stop};if(e.isFunction(i[r])){i[r]()}};this.next=function(){return n.stop().move(n.current+1)};this.prev=function(){return n.stop().move(n.current-1)};this.dots=function(){var t='<ol class="dots">';e.each(this.items,function(e){t+='<li class="dot'+(e<1?" active":"")+'">'+(e+1)+"</li>"});t+="</ol>";this.el.addClass("has-dots").append(t).find(".dot").click(function(){n.move(e(this).index())})}};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this);var u=(new n).init(s,t);s.data("unslider"+(r>1?"-"+(i+1):""),u)})}})(window.jQuery,false)
;(function(d,f,b){var g=null,j=null,i=true;var e={tit:"提示信息",w:{"*":"不能为空！","*6-16":"请填写6到16位任意字符！","n":"请填写数字！","n6-16":"请填写6到16位数字！","s":"不能输入特殊字符！","s6-18":"请填写6到18位字符！","p":"请填写邮政编码！","m":"请填写手机号码！","e":"邮箱地址格式不对！","url":"请填写网址！"},def:"请填写正确信息！",undef:"datatype未定义！",reck:"两次输入的内容不一致！",r:"通过信息验证！",c:"正在检测信息…",s:"请{填写|选择}{0|信息}！",v:"所填信息没有经过验证，请稍后…",p:"正在提交数据…"};d.Tipmsg=e;var a=function(l,n,k){var n=d.extend({},a.defaults,n);n.datatype&&d.extend(a.util.dataType,n.datatype);var m=this;m.tipmsg={w:{}};m.forms=l;m.objects=[];if(k===true){return false}l.each(function(){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";var p=this;p.settings=d.extend({},n);var o=d(p);p.validform_status="normal";o.data("tipmsg",m.tipmsg);o.delegate("[datatype]","blur",function(){var q=arguments[1];a.util.check.call(this,o,q)});o.delegate(":text","keypress",function(q){if(q.keyCode==13&&o.find(":submit").length==0){o.submit()}});a.util.enhance.call(o,p.settings.tiptype,p.settings.usePlugin,p.settings.tipSweep);p.settings.btnSubmit&&o.find(p.settings.btnSubmit).bind("click",function(){o.trigger("submit");return false});o.submit(function(){var q=a.util.submitForm.call(o,p.settings);q===b&&(q=true);return q});o.find("[type='reset']").add(o.find(p.settings.btnReset)).bind("click",function(){a.util.resetForm.call(o)})});if(n.tiptype==1||(n.tiptype==2||n.tiptype==3)&&n.ajaxPost){c()}};a.defaults={tiptype:1,tipSweep:false,showAllError:false,postonce:false,ajaxPost:false};a.util={dataType:{"*":/[\w\W]+/,"*6-16":/^[\w\W]{6,16}$/,n:/^\d+$/,"n6-16":/^\d{6,16}$/,s:/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,"s6-18":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,p:/^[0-9]{6}$/,m:/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,e:/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,url:/^(\w+:\/\/)?\w+(\.\w+)+.*$/},toString:Object.prototype.toString,isEmpty:function(k){return k===""||k===d.trim(this.attr("tip"))},getValue:function(m){var l,k=this;if(m.is(":radio")){l=k.find(":radio[name='"+m.attr("name")+"']:checked").val();l=l===b?"":l}else{if(m.is(":checkbox")){l="";k.find(":checkbox[name='"+m.attr("name")+"']:checked").each(function(){l+=d(this).val()+","});l=l===b?"":l}else{l=m.val()}}l=d.trim(l);return a.util.isEmpty.call(m,l)?"":l},enhance:function(l,m,n,k){var o=this;o.find("[datatype]").each(function(){if(l==2){if(d(this).parent().next().find(".Validform_checktip").length==0){d(this).parent().next().append("<span class='Validform_checktip' />");d(this).siblings(".Validform_checktip").remove()}}else{if(l==3||l==4){if(d(this).siblings(".Validform_checktip").length==0){d(this).parent().append("<span class='Validform_checktip' />");d(this).parent().next().find(".Validform_checktip").remove()}}}});o.find("input[recheck]").each(function(){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";var q=d(this);var p=o.find("input[name='"+d(this).attr("recheck")+"']");p.bind("keyup",function(){if(p.val()==q.val()&&p.val()!=""){if(p.attr("tip")){if(p.attr("tip")==p.val()){return false}}q.trigger("blur")}}).bind("blur",function(){if(p.val()!=q.val()&&q.val()!=""){if(q.attr("tip")){if(q.attr("tip")==q.val()){return false}}q.trigger("blur")}})});o.find("[tip]").each(function(){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";var q=d(this).attr("tip");var p=d(this).attr("altercss");d(this).focus(function(){if(d(this).val()==q){d(this).val("");if(p){d(this).removeClass(p)}}}).blur(function(){if(d.trim(d(this).val())===""){d(this).val(q);if(p){d(this).addClass(p)}}})});o.find(":checkbox[datatype],:radio[datatype]").each(function(){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";var q=d(this);var p=q.attr("name");o.find("[name='"+p+"']").filter(":checkbox,:radio").bind("click",function(){setTimeout(function(){q.trigger("blur")},0)})});o.find("select[datatype][multiple]").bind("click",function(){var p=d(this);setTimeout(function(){p.trigger("blur")},0)});a.util.usePlugin.call(o,m,l,n,k)},usePlugin:function(o,l,n,r){var s=this,o=o||{};if(s.find("input[plugin='swfupload']").length&&typeof(swfuploadhandler)!="undefined"){var k={custom_settings:{form:s,showmsg:function(v,t,u){a.util.showmsg.call(s,v,l,{obj:s.find("input[plugin='swfupload']"),type:t,sweep:n})}}};k=d.extend(true,{},o.swfupload,k);s.find("input[plugin='swfupload']").each(function(t){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";d(this).val("");swfuploadhandler.init(k,t)})}if(s.find("input[plugin='datepicker']").length&&d.fn.datePicker){o.datepicker=o.datepicker||{};if(o.datepicker.format){Date.format=o.datepicker.format;delete o.datepicker.format}if(o.datepicker.firstDayOfWeek){Date.firstDayOfWeek=o.datepicker.firstDayOfWeek;delete o.datepicker.firstDayOfWeek}s.find("input[plugin='datepicker']").each(function(t){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";o.datepicker.callback&&d(this).bind("dateSelected",function(){var u=new Date(d.event._dpCache[this._dpId].getSelected()[0]).asString(Date.format);o.datepicker.callback(u,this)});d(this).datePicker(o.datepicker)})}if(s.find("input[plugin*='passwordStrength']").length&&d.fn.passwordStrength){o.passwordstrength=o.passwordstrength||{};o.passwordstrength.showmsg=function(u,v,t){a.util.showmsg.call(s,v,l,{obj:u,type:t,sweep:n})};s.find("input[plugin='passwordStrength']").each(function(t){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";d(this).passwordStrength(o.passwordstrength)})}if(r!="addRule"&&o.jqtransform&&d.fn.jqTransSelect){if(s[0].jqTransSelected=="true"){return}s[0].jqTransSelected="true";var m=function(t){var u=d(".jqTransformSelectWrapper ul:visible");u.each(function(){var v=d(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);if(!(t&&v.oLabel&&v.oLabel.get(0)==t.get(0))){d(this).hide()}})};var p=function(t){if(d(t.target).parents(".jqTransformSelectWrapper").length===0){m(d(t.target))}};var q=function(){d(document).mousedown(p)};if(o.jqtransform.selector){s.find(o.jqtransform.selector).filter('input:submit, input:reset, input[type="button"]').jqTransInputButton();s.find(o.jqtransform.selector).filter("input:text, input:password").jqTransInputText();s.find(o.jqtransform.selector).filter("input:checkbox").jqTransCheckBox();s.find(o.jqtransform.selector).filter("input:radio").jqTransRadio();s.find(o.jqtransform.selector).filter("textarea").jqTransTextarea();if(s.find(o.jqtransform.selector).filter("select").length>0){s.find(o.jqtransform.selector).filter("select").jqTransSelect();q()}}else{s.jqTransform()}s.find(".jqTransformSelectWrapper").find("li a").click(function(){d(this).parents(".jqTransformSelectWrapper").find("select").trigger("blur")})}},getNullmsg:function(o){var n=this;var m=/[\u4E00-\u9FA5\uf900-\ufa2da-zA-Z\s]+/g;var k;var l=o[0].settings.label||".Validform_label";l=n.siblings(l).eq(0).text()||n.siblings().find(l).eq(0).text()||n.parent().siblings(l).eq(0).text()||n.parent().siblings().find(l).eq(0).text();l=l.replace(/\s(?![a-zA-Z])/g,"").match(m);l=l?l.join(""):[""];m=/\{(.+)\|(.+)\}/;k=o.data("tipmsg").s||e.s;if(l!=""){k=k.replace(/\{0\|(.+)\}/,l);if(n.attr("recheck")){k=k.replace(/\{(.+)\}/,"");n.attr("nullmsg",k);return k}}else{k=n.is(":checkbox,:radio,select")?k.replace(/\{0\|(.+)\}/,""):k.replace(/\{0\|(.+)\}/,"$1")}k=n.is(":checkbox,:radio,select")?k.replace(m,"$2"):k.replace(m,"$1");n.attr("nullmsg",k);return k},getErrormsg:function(s,n,u){var o=/^(.+?)((\d+)-(\d+))?$/,m=/^(.+?)(\d+)-(\d+)$/,l=/(.*?)\d+(.+?)\d+(.*)/,q=n.match(o),t,r;if(u=="recheck"){r=s.data("tipmsg").reck||e.reck;return r}var p=d.extend({},e.w,s.data("tipmsg").w);if(q[0] in p){return s.data("tipmsg").w[q[0]]||e.w[q[0]]}for(var k in p){if(k.indexOf(q[1])!=-1&&m.test(k)){r=(s.data("tipmsg").w[k]||e.w[k]).replace(l,"$1"+q[3]+"$2"+q[4]+"$3");s.data("tipmsg").w[q[0]]=r;return r}}return s.data("tipmsg").def||e.def},_regcheck:function(t,n,u,A){var A=A,y=null,v=false,o=/\/.+\//g,k=/^(.+?)(\d+)-(\d+)$/,l=3;if(o.test(t)){var s=t.match(o)[0].slice(1,-1);var r=t.replace(o,"");var q=RegExp(s,r);v=q.test(n)}else{if(a.util.toString.call(a.util.dataType[t])=="[object Function]"){v=a.util.dataType[t](n,u,A,a.util.dataType);if(v===true||v===b){v=true}else{y=v;v=false}}else{if(!(t in a.util.dataType)){var m=t.match(k),z;if(!m){v=false;y=A.data("tipmsg").undef||e.undef}else{for(var B in a.util.dataType){z=B.match(k);if(!z){continue}if(m[1]===z[1]){var w=a.util.dataType[B].toString(),r=w.match(/\/[mgi]*/g)[1].replace("/",""),x=new RegExp("\\{"+z[2]+","+z[3]+"\\}","g");w=w.replace(/\/[mgi]*/g,"/").replace(x,"{"+m[2]+","+m[3]+"}").replace(/^\//,"").replace(/\/$/,"");a.util.dataType[t]=new RegExp(w,r);break}}}}if(a.util.toString.call(a.util.dataType[t])=="[object RegExp]"){v=a.util.dataType[t].test(n)}}}if(v){l=2;y=u.attr("sucmsg")||A.data("tipmsg").r||e.r;if(u.attr("recheck")){var p=A.find("input[name='"+u.attr("recheck")+"']:first");if(n!=p.val()){v=false;l=3;y=u.attr("errormsg")||a.util.getErrormsg.call(u,A,t,"recheck")}}}else{y=y||u.attr("errormsg")||a.util.getErrormsg.call(u,A,t);if(a.util.isEmpty.call(u,n)){y=u.attr("nullmsg")||a.util.getNullmsg.call(u,A)}}return{passed:v,type:l,info:y}},regcheck:function(n,s,m){var t=this,k=null,l=false,r=3;if(m.attr("ignore")==="ignore"&&a.util.isEmpty.call(m,s)){if(m.data("cked")){k=""}return{passed:true,type:4,info:k}}m.data("cked","cked");var u=a.util.parseDatatype(n);var q;for(var p=0;p<u.length;p++){for(var o=0;o<u[p].length;o++){q=a.util._regcheck(u[p][o],s,m,t);if(!q.passed){break}}if(q.passed){break}}return q},parseDatatype:function(r){var q=/\/.+?\/[mgi]*(?=(,|$|\||\s))|[\w\*-]+/g,o=r.match(q),p=r.replace(q,"").replace(/\s*/g,"").split(""),l=[],k=0;l[0]=[];l[0].push(o[0]);for(var s=0;s<p.length;s++){if(p[s]=="|"){k++;l[k]=[]}l[k].push(o[s+1])}return l},showmsg:function(n,l,m,k){if(n==b){return}if(k=="bycheck"&&m.sweep&&(m.obj&&!m.obj.is(".Validform_error")||typeof l=="function")){return}d.extend(m,{curform:this});if(typeof l=="function"){l(n,m,a.util.cssctl);return}if(l==1||k=="byajax"&&l!=4){j.find(".Validform_info").html(n)}if(l==1&&k!="bycheck"&&m.type!=2||k=="byajax"&&l!=4){i=false;j.find(".iframe").css("height",j.outerHeight());j.show();h(j,100)}if(l==2&&m.obj){m.obj.parent().next().find(".Validform_checktip").html(n);a.util.cssctl(m.obj.parent().next().find(".Validform_checktip"),m.type)}if((l==3||l==4)&&m.obj){m.obj.siblings(".Validform_checktip").html(n);a.util.cssctl(m.obj.siblings(".Validform_checktip"),m.type)}},cssctl:function(l,k){switch(k){case 1:l.removeClass("Validform_right Validform_wrong").addClass("Validform_checktip Validform_loading");break;case 2:l.removeClass("Validform_wrong Validform_loading").addClass("Validform_checktip Validform_right");break;case 4:l.removeClass("Validform_right Validform_wrong Validform_loading").addClass("Validform_checktip");break;default:l.removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong")}},check:function(v,t,n){var o=v[0].settings;var t=t||"";var k=a.util.getValue.call(v,d(this));if(o.ignoreHidden&&d(this).is(":hidden")||d(this).data("dataIgnore")==="dataIgnore"){return true}if(o.dragonfly&&!d(this).data("cked")&&a.util.isEmpty.call(d(this),k)&&d(this).attr("ignore")!="ignore"){return false}var s=a.util.regcheck.call(v,d(this).attr("datatype"),k,d(this));if(k==this.validform_lastval&&!d(this).attr("recheck")&&t==""){return s.passed?true:false}this.validform_lastval=k;var r;g=r=d(this);if(!s.passed){a.util.abort.call(r[0]);if(!n){a.util.showmsg.call(v,s.info,o.tiptype,{obj:d(this),type:s.type,sweep:o.tipSweep},"bycheck");!o.tipSweep&&r.addClass("Validform_error")}return false}var q=d(this).attr("ajaxurl");if(q&&!a.util.isEmpty.call(d(this),k)&&!n){var m=d(this);if(t=="postform"){m[0].validform_subpost="postform"}else{m[0].validform_subpost=""}if(m[0].validform_valid==="posting"&&k==m[0].validform_ckvalue){return"ajax"}m[0].validform_valid="posting";m[0].validform_ckvalue=k;a.util.showmsg.call(v,v.data("tipmsg").c||e.c,o.tiptype,{obj:m,type:1,sweep:o.tipSweep},"bycheck");a.util.abort.call(r[0]);var u=d.extend(true,{},o.ajaxurl||{});var p={type:"POST",cache:false,url:q,data:"param="+encodeURIComponent(k)+"&name="+encodeURIComponent(d(this).attr("name")),success:function(x){if(d.trim(x.status)==="y"){m[0].validform_valid="true";x.info&&m.attr("sucmsg",x.info);a.util.showmsg.call(v,m.attr("sucmsg")||v.data("tipmsg").r||e.r,o.tiptype,{obj:m,type:2,sweep:o.tipSweep},"bycheck");r.removeClass("Validform_error");g=null;if(m[0].validform_subpost=="postform"){v.trigger("submit")}}else{m[0].validform_valid=x.info;a.util.showmsg.call(v,x.info,o.tiptype,{obj:m,type:3,sweep:o.tipSweep});r.addClass("Validform_error")}r[0].validform_ajax=null},error:function(x){if(x.status=="200"){if(x.responseText=="y"){u.success({status:"y"})}else{u.success({status:"n",info:x.responseText})}return false}if(x.statusText!=="abort"){var y="status: "+x.status+"; statusText: "+x.statusText;a.util.showmsg.call(v,y,o.tiptype,{obj:m,type:3,sweep:o.tipSweep});r.addClass("Validform_error")}m[0].validform_valid=x.statusText;r[0].validform_ajax=null;return true}};if(u.success){var w=u.success;u.success=function(x){p.success(x);w(x,m)}}if(u.error){var l=u.error;u.error=function(x){p.error(x)&&l(x,m)}}u=d.extend({},p,u,{dataType:"json"});r[0].validform_ajax=d.ajax(u);return"ajax"}else{if(q&&a.util.isEmpty.call(d(this),k)){a.util.abort.call(r[0]);r[0].validform_valid="true"}}if(!n){a.util.showmsg.call(v,s.info,o.tiptype,{obj:d(this),type:s.type,sweep:o.tipSweep},"bycheck");r.removeClass("Validform_error")}g=null;return true},submitForm:function(o,l,k,r,t){var w=this;if(w[0].validform_status==="posting"){return false}if(o.postonce&&w[0].validform_status==="posted"){return false}var v=o.beforeCheck&&o.beforeCheck(w);if(v===false){return false}var s=true,n;w.find("[datatype]").each(function(){if(l){return false}if(o.ignoreHidden&&d(this).is(":hidden")||d(this).data("dataIgnore")==="dataIgnore"){return true}var z=a.util.getValue.call(w,d(this)),A;g=A=d(this);n=a.util.regcheck.call(w,d(this).attr("datatype"),z,d(this));if(!n.passed){a.util.showmsg.call(w,n.info,o.tiptype,{obj:d(this),type:n.type,sweep:o.tipSweep});A.addClass("Validform_error");if(!o.showAllError){A.focus();s=false;return false}s&&(s=false);return true}if(d(this).attr("ajaxurl")&&!a.util.isEmpty.call(d(this),z)){if(this.validform_valid!=="true"){var y=d(this);a.util.showmsg.call(w,w.data("tipmsg").v||e.v,o.tiptype,{obj:y,type:3,sweep:o.tipSweep});A.addClass("Validform_error");y.trigger("blur",["postform"]);if(!o.showAllError){s=false;return false}s&&(s=false);return true}}else{if(d(this).attr("ajaxurl")&&a.util.isEmpty.call(d(this),z)){a.util.abort.call(this);this.validform_valid="true"}}a.util.showmsg.call(w,n.info,o.tiptype,{obj:d(this),type:n.type,sweep:o.tipSweep});A.removeClass("Validform_error");g=null});if(o.showAllError){w.find(".Validform_error:first").focus()}if(s){var q=o.beforeSubmit&&o.beforeSubmit(w);if(q===false){return false}w[0].validform_status="posting";if(o.ajaxPost||r==="ajaxPost"){var u=d.extend(true,{},o.ajaxpost||{});u.url=k||u.url||o.url||w.attr("action");a.util.showmsg.call(w,w.data("tipmsg").p||e.p,o.tiptype,{obj:w,type:1,sweep:o.tipSweep},"byajax");if(t){u.async=false}else{if(t===false){u.async=true}}if(u.success){var x=u.success;u.success=function(y){o.callback&&o.callback(y);w[0].validform_ajax=null;if(d.trim(y.status)==="y"){w[0].validform_status="posted"}else{w[0].validform_status="normal"}x(y,w)}}if(u.error){var m=u.error;u.error=function(y){o.callback&&o.callback(y);w[0].validform_status="normal";w[0].validform_ajax=null;m(y,w)}}var p={type:"POST",async:true,data:w.serializeArray(),success:function(y){if(d.trim(y.status)==="y"){w[0].validform_status="posted";a.util.showmsg.call(w,y.info,o.tiptype,{obj:w,type:2,sweep:o.tipSweep},"byajax")}else{w[0].validform_status="normal";a.util.showmsg.call(w,y.info,o.tiptype,{obj:w,type:3,sweep:o.tipSweep},"byajax")}o.callback&&o.callback(y);w[0].validform_ajax=null},error:function(y){var z="status: "+y.status+"; statusText: "+y.statusText;a.util.showmsg.call(w,z,o.tiptype,{obj:w,type:3,sweep:o.tipSweep},"byajax");o.callback&&o.callback(y);w[0].validform_status="normal";w[0].validform_ajax=null}};u=d.extend({},p,u,{dataType:"json"});w[0].validform_ajax=d.ajax(u)}else{if(!o.postonce){w[0].validform_status="normal"}var k=k||o.url;if(k){w.attr("action",k)}return o.callback&&o.callback(w)}}return false},resetForm:function(){var k=this;k.each(function(){this.reset&&this.reset();this.validform_status="normal"});k.find(".Validform_right").text("");k.find(".passwordStrength").children().removeClass("bgStrength");k.find(".Validform_checktip").removeClass("Validform_wrong Validform_right Validform_loading");k.find(".Validform_error").removeClass("Validform_error");k.find("[datatype]").removeData("cked").removeData("dataIgnore").each(function(){this.validform_lastval=null});k.eq(0).find("input:first").focus()},abort:function(){if(this.validform_ajax){this.validform_ajax.abort()}}};d.Datatype=a.util.dataType;a.prototype={dataType:a.util.dataType,eq:function(l){var k=this;if(l>=k.forms.length){return null}if(!(l in k.objects)){k.objects[l]=new a(d(k.forms[l]).get(),{},true)}return k.objects[l]},resetStatus:function(){var k=this;d(k.forms).each(function(){this.validform_status="normal"});return this},setStatus:function(k){var l=this;d(l.forms).each(function(){this.validform_status=k||"posting"});return this},getStatus:function(){var l=this;var k=d(l.forms)[0].validform_status;return k},ignore:function(k){var l=this;var k=k||"[datatype]";d(l.forms).find(k).each(function(){d(this).data("dataIgnore","dataIgnore").removeClass("Validform_error")});return this},unignore:function(k){var l=this;var k=k||"[datatype]";d(l.forms).find(k).each(function(){d(this).removeData("dataIgnore")});return this},addRule:function(n){var m=this;var n=n||[];for(var l=0;l<n.length;l++){var p=d(m.forms).find(n[l].ele);for(var k in n[l]){k!=="ele"&&p.attr(k,n[l][k])}}d(m.forms).each(function(){var o=d(this);a.util.enhance.call(o,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep,"addRule")});return this},ajaxPost:function(k,m,l){var n=this;d(n.forms).each(function(){if(this.settings.tiptype==1||this.settings.tiptype==2||this.settings.tiptype==3){c()}a.util.submitForm.call(d(n.forms[0]),this.settings,k,l,"ajaxPost",m)});return this},submitForm:function(k,l){var m=this;d(m.forms).each(function(){var n=a.util.submitForm.call(d(this),this.settings,k,l);n===b&&(n=true);if(n===true){this.submit()}});return this},resetForm:function(){var k=this;a.util.resetForm.call(d(k.forms));return this},abort:function(){var k=this;d(k.forms).each(function(){a.util.abort.call(this)});return this},check:function(m,k){var k=k||"[datatype]",o=this,n=d(o.forms),l=true;n.find(k).each(function(){a.util.check.call(this,n,"",m)||(l=false)});return l},config:function(k){var l=this;k=k||{};d(l.forms).each(function(){var m=d(this);this.settings=d.extend(true,this.settings,k);a.util.enhance.call(m,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep)});return this}};d.fn.Validform=function(k){return new a(this,k)};function h(n,m){var l=(d(window).width()-n.outerWidth())/2,k=(d(window).height()-n.outerHeight())/2,k=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(k>0?k:0);n.css({left:l}).animate({top:k},{duration:m,queue:false})}function c(){if(d("#Validform_msg").length!==0){return false}j=d('<div id="Validform_msg"><div class="Validform_title">'+e.tit+'<a class="Validform_close" href="javascript:void(0);">&chi;</a></div><div class="Validform_info"></div><div class="iframe"><iframe frameborder="0" scrolling="no" height="100%" width="100%"></iframe></div></div>').appendTo("body");j.find("a.Validform_close").click(function(){j.hide();i=true;if(g){g.focus().addClass("Validform_error")}return false}).focus(function(){this.blur()});d(window).bind("scroll resize",function(){!i&&h(j,400)})}d.Showmsg=function(k){c();a.util.showmsg.call(f,k,1,{})};d.Hidemsg=function(){j.hide();i=true}})(jQuery,window);
;/*!
 * artDialog 4.1.7
 * Date: 2013-03-03 08:04
 * http://code.google.com/p/artdialog/
 * (c) 2009-2012 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */




//------------------------------------------------
// 对话框模块
//------------------------------------------------
;(function ($, window, undefined) {

$.noop = $.noop || function () {}; // jQuery 1.3.2
var _box, _thisScript, _skin, _path,
	_count = 0,
	_$window = $(window),
	_$document = $(document),
	_$html = $('html'),
	_elem = document.documentElement,
	_isIE6 = window.VBArray && !window.XMLHttpRequest,
	_isMobile = 'createTouch' in document && !('onmousemove' in _elem)
		|| /(iPhone|iPad|iPod)/i.test(navigator.userAgent),
	_expando = 'artDialog' + + new Date;

var artDialog = function (config, ok, cancel) {
	config = config || {};
	
	if (typeof config === 'string' || config.nodeType === 1) {
		config = {content: config, fixed: !_isMobile};
	};
	
	var api,
		defaults = artDialog.defaults,
		elem = config.follow = this.nodeType === 1 && this || config.follow;
		
	// 合并默认配置
	for (var i in defaults) {
		if (config[i] === undefined) config[i] = defaults[i];		
	};
	
	// 兼容v4.1.0之前的参数，未来版本将删除此
	$.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},
	function(i,o){config[i]=config[i]!==undefined?config[i]:config[o]});
	
	// 返回跟随模式或重复定义的ID
	if (typeof elem === 'string') elem = $(elem)[0];
	config.id = elem && elem[_expando + 'follow'] || config.id || _expando + _count;
	api = artDialog.list[config.id];
	if (elem && api) return api.follow(elem).zIndex().focus();
	if (api) return api.zIndex().focus();
	
	// 目前主流移动设备对fixed支持不好
	if (_isMobile) config.fixed = false;
	
	// 按钮队列
	if (!$.isArray(config.button)) {
		config.button = config.button ? [config.button] : [];
	};
	if (ok !== undefined) config.ok = ok;
	if (cancel !== undefined) config.cancel = cancel;
	config.ok && config.button.push({
		name: config.okVal,
		callback: config.ok,
		focus: true
	});
	config.cancel && config.button.push({
		name: config.cancelVal,
		callback: config.cancel
	});
	
	// zIndex全局配置
	artDialog.defaults.zIndex = config.zIndex;
	
	_count ++;
	
	return artDialog.list[config.id] = _box ?
		_box._init(config) : new artDialog.fn._init(config);
};

artDialog.fn = artDialog.prototype = {

	version: '4.1.7',
	
	closed: true,
	
	_init: function (config) {
		var that = this, DOM,
			icon = config.icon,
			iconBg = icon && (_isIE6 ? {png: 'icons/' + icon + '.png'}
			: {backgroundImage: 'url(\'http://static.qianbao.com/qianbao/images/dialog/icons/' + icon + '.png\')'});
		
        that.closed = false;
		that.config = config;
		that.DOM = DOM = that.DOM || that._getDOM();
		
		DOM.wrap.addClass(config.skin);
		DOM.close[config.cancel === false ? 'hide' : 'show']();
		DOM.icon[0].style.display = icon ? '' : 'none';
		DOM.iconBg.css(iconBg || {background: 'none'});
		DOM.se.css('cursor', config.resize ? 'se-resize' : 'auto');
		DOM.title.css('cursor', config.drag ? 'move' : 'auto');
		DOM.content.css('padding', config.padding);
		
		that[config.show ? 'show' : 'hide'](true)
		that.button(config.button)
		.title(config.title)
		.content(config.content, true)
		.size(config.width, config.height)
		.time(config.time);
		
		config.follow
		? that.follow(config.follow)
		: that.position(config.left, config.top);
		
		that.zIndex().focus();
		config.lock && that.lock();
		
		that._addEvent();
		that._ie6PngFix();
		_box = null;
		
		config.init && config.init.call(that, window);
		return that;
	},
	
	/**
	 * 设置内容
	 * @param	{String, HTMLElement}	内容 (可选)
	 * @return	{this, HTMLElement}		如果无参数则返回内容容器DOM对象
	 */
	content: function (msg) {
		var prev, next, parent, display,
			that = this,
			DOM = that.DOM,
			wrap = DOM.wrap[0],
			width = wrap.offsetWidth,
			height = wrap.offsetHeight,
			left = parseInt(wrap.style.left),
			top = parseInt(wrap.style.top),
			cssWidth = wrap.style.width,
			$content = DOM.content,
			content = $content[0];
		
		that._elemBack && that._elemBack();
		wrap.style.width = 'auto';
		
		if (msg === undefined) return content;
		if (typeof msg === 'string') {
			$content.html(msg);
		} else if (msg && msg.nodeType === 1) {
		
			// 让传入的元素在对话框关闭后可以返回到原来的地方
			display = msg.style.display;
			prev = msg.previousSibling;
			next = msg.nextSibling;
			parent = msg.parentNode;
			that._elemBack = function () {
				if (prev && prev.parentNode) {
					prev.parentNode.insertBefore(msg, prev.nextSibling);
				} else if (next && next.parentNode) {
					next.parentNode.insertBefore(msg, next);
				} else if (parent) {
					parent.appendChild(msg);
				};
				msg.style.display = display;
				that._elemBack = null;
			};
			
			$content.html('');
			content.appendChild(msg);
			msg.style.display = 'block';
			
		};
		
		// 新增内容后调整位置
		if (!arguments[1]) {
			if (that.config.follow) {
				that.follow(that.config.follow);
			} else {
				width = wrap.offsetWidth - width;
				height = wrap.offsetHeight - height;
				left = left - width / 2;
				top = top - height / 2;
				wrap.style.left = Math.max(left, 0) + 'px';
				wrap.style.top = Math.max(top, 0) + 'px';
			};
			if (cssWidth && cssWidth !== 'auto') {
				wrap.style.width = wrap.offsetWidth + 'px';
			};
			that._autoPositionType();
		};
		
		that._ie6SelectFix();
		that._runScript(content);
		
		return that;
	},
	
	/**
	 * 设置标题
	 * @param	{String, Boolean}	标题内容. 为false则隐藏标题栏
	 * @return	{this, HTMLElement}	如果无参数则返回内容器DOM对象
	 */
	title: function (text) {
		var DOM = this.DOM,
			wrap = DOM.wrap,
			title = DOM.title,
			className = 'aui_state_noTitle';
			
		if (text === undefined) return title[0];
		if (text === false) {
			title.hide().html('');
			wrap.addClass(className);
		} else {
			title.show().html(text || '');
			wrap.removeClass(className);
		};
		
		return this;
	},
	
	/**
	 * 位置(相对于可视区域)
	 * @param	{Number, String}
	 * @param	{Number, String}
	 */
	position: function (left, top) {
		var that = this,
			config = that.config,
			wrap = that.DOM.wrap[0],
			isFixed = _isIE6 ? false : config.fixed,
			ie6Fixed = _isIE6 && that.config.fixed,
			docLeft = _$document.scrollLeft(),
			docTop = _$document.scrollTop(),
			dl = isFixed ? 0 : docLeft,
			dt = isFixed ? 0 : docTop,
			ww = _$window.width(),
			wh = _$window.height(),
			ow = wrap.offsetWidth,
			oh = wrap.offsetHeight,
			style = wrap.style;
		
		if (left || left === 0) {
			that._left = left.toString().indexOf('%') !== -1 ? left : null;
			left = that._toNumber(left, ww - ow);
			
			if (typeof left === 'number') {
				left = ie6Fixed ? (left += docLeft) : left + dl;
				style.left = Math.max(left, dl) + 'px';
			} else if (typeof left === 'string') {
				style.left = left;
			};
		};
		
		if (top || top === 0) {
			that._top = top.toString().indexOf('%') !== -1 ? top : null;
			top = that._toNumber(top, wh - oh);
			
			if (typeof top === 'number') {
				top = ie6Fixed ? (top += docTop) : top + dt;
				style.top = Math.max(top, dt) + 'px';
			} else if (typeof top === 'string') {
				style.top = top;
			};
		};
		
		if (left !== undefined && top !== undefined) {
			that._follow = null;
			that._autoPositionType();
		};
		
		return that;
	},

	/**
	 *	尺寸
	 *	@param	{Number, String}	宽度
	 *	@param	{Number, String}	高度
	 */
	size: function (width, height) {
		var maxWidth, maxHeight, scaleWidth, scaleHeight,
			that = this,
			config = that.config,
			DOM = that.DOM,
			wrap = DOM.wrap,
			main = DOM.main,
			wrapStyle = wrap[0].style,
			style = main[0].style;
			
		if (width) {
			that._width = width.toString().indexOf('%') !== -1 ? width : null;
			maxWidth = _$window.width() - wrap[0].offsetWidth + main[0].offsetWidth;
			scaleWidth = that._toNumber(width, maxWidth);
			width = scaleWidth;
			
			if (typeof width === 'number') {
				wrapStyle.width = 'auto';
				style.width = Math.max(that.config.minWidth, width) + 'px';
				wrapStyle.width = wrap[0].offsetWidth + 'px'; // 防止未定义宽度的表格遇到浏览器右边边界伸缩
			} else if (typeof width === 'string') {
				style.width = width;
				width === 'auto' && wrap.css('width', 'auto');
			};
		};
		
		if (height) {
			that._height = height.toString().indexOf('%') !== -1 ? height : null;
			maxHeight = _$window.height() - wrap[0].offsetHeight + main[0].offsetHeight;
			scaleHeight = that._toNumber(height, maxHeight);
			height = scaleHeight;
			
			if (typeof height === 'number') {
				style.height = Math.max(that.config.minHeight, height) + 'px';
			} else if (typeof height === 'string') {
				style.height = height;
			};
		};
		
		that._ie6SelectFix();
		
		return that;
	},
	
	/**
	 * 跟随元素
	 * @param	{HTMLElement, String}
	 */
	follow: function (elem) {
		var $elem, that = this, config = that.config;
		
		if (typeof elem === 'string' || elem && elem.nodeType === 1) {
			$elem = $(elem);
			elem = $elem[0];
		};
		
		// 隐藏元素不可用
		if (!elem || !elem.offsetWidth && !elem.offsetHeight) {
			return that.position(that._left, that._top);
		};
		
		var expando = _expando + 'follow',
			winWidth = _$window.width(),
			winHeight = _$window.height(),
			docLeft =  _$document.scrollLeft(),
			docTop = _$document.scrollTop(),
			offset = $elem.offset(),
			width = elem.offsetWidth,
			height = elem.offsetHeight,
			isFixed = _isIE6 ? false : config.fixed,
			left = isFixed ? offset.left - docLeft : offset.left,
			top = isFixed ? offset.top - docTop : offset.top,
			wrap = that.DOM.wrap[0],
			style = wrap.style,
			wrapWidth = wrap.offsetWidth,
			wrapHeight = wrap.offsetHeight,
			setLeft = left - (wrapWidth - width) / 2,
			setTop = top + height,
			dl = isFixed ? 0 : docLeft,
			dt = isFixed ? 0 : docTop;
		
		setLeft = setLeft < dl ? left :
		(setLeft + wrapWidth > winWidth) && (left - wrapWidth > dl)
		? left - wrapWidth + width
		: setLeft;

		setTop = (setTop + wrapHeight > winHeight + dt)
		&& (top - wrapHeight > dt)
		? top - wrapHeight
		: setTop;
		
		style.left = setLeft + 'px';
		style.top = setTop + 'px';
		
		that._follow && that._follow.removeAttribute(expando);
		that._follow = elem;
		elem[expando] = config.id;
		that._autoPositionType();
		return that;
	},
	
	/**
	 * 自定义按钮
	 * @example
		button({
			name: 'login',
			callback: function () {},
			disabled: false,
			focus: true
		}, .., ..)
	 */
	button: function () {
		var that = this,
			ags = arguments,
			DOM = that.DOM,
			buttons = DOM.buttons,
			elem = buttons[0],
			strongButton = 'aui_state_highlight',
			listeners = that._listeners = that._listeners || {},
			list = $.isArray(ags[0]) ? ags[0] : [].slice.call(ags);
		
		if (ags[0] === undefined) return elem;
		$.each(list, function (i, val) {
			var name = val.name,
				isNewButton = !listeners[name],
				button = !isNewButton ?
					listeners[name].elem :
					document.createElement('button');
					
			if (!listeners[name]) listeners[name] = {};
			if (val.callback) listeners[name].callback = val.callback;
			if (val.className) button.className = val.className;
			if (val.focus) {
				that._focus && that._focus.removeClass(strongButton);
				that._focus = $(button).addClass(strongButton);
				that.focus();
			};
			
			// Internet Explorer 的默认类型是 "button"，
			// 而其他浏览器中（包括 W3C 规范）的默认值是 "submit"
			// @see http://www.w3school.com.cn/tags/att_button_type.asp
			button.setAttribute('type', 'button');
			
			button[_expando + 'callback'] = name;
			button.disabled = !!val.disabled;

			if (isNewButton) {
				button.innerHTML = name;
				listeners[name].elem = button;
				elem.appendChild(button);
			};
		});
		
		buttons[0].style.display = list.length ? '' : 'none';
		
		that._ie6SelectFix();
		return that;
	},
	
	/** 显示对话框 */
	show: function () {
		this.DOM.wrap.show();
		!arguments[0] && this._lockMaskWrap && this._lockMaskWrap.show();
		return this;
	},
	
	/** 隐藏对话框 */
	hide: function () {
		this.DOM.wrap.hide();
		!arguments[0] && this._lockMaskWrap && this._lockMaskWrap.hide();
		return this;
	},
	
	/** 关闭对话框 */
	close: function () {
		if (this.closed) return this;
		
		var that = this,
			DOM = that.DOM,
			wrap = DOM.wrap,
			list = artDialog.list,
			fn = that.config.close,
			follow = that.config.follow;
		
		that.time();
		if (typeof fn === 'function' && fn.call(that, window) === false) {
			return that;
		};
		
		that.unlock();
		
		// 置空内容
		that._elemBack && that._elemBack();
		wrap[0].className = wrap[0].style.cssText = '';
		DOM.title.html('');
		DOM.content.html('');
		DOM.buttons.html('');
		
		if (artDialog.focus === that) artDialog.focus = null;
		if (follow) follow.removeAttribute(_expando + 'follow');
		delete list[that.config.id];
		that._removeEvent();
		that.hide(true)._setAbsolute();
		
		// 清空除this.DOM之外临时对象，恢复到初始状态，以便使用单例模式
		for (var i in that) {
			if (that.hasOwnProperty(i) && i !== 'DOM') delete that[i];
		};
		
		// 移除HTMLElement或重用
		_box ? wrap.remove() : _box = that;
		
		return that;
	},
	
	/**
	 * 定时关闭
	 * @param	{Number}	单位为秒, 无参数则停止计时器
	 */
	time: function (second) {
		var that = this,
			cancel = that.config.cancelVal,
			timer = that._timer;
			
		timer && clearTimeout(timer);
		
		if (second) {
			that._timer = setTimeout(function(){
				that._click(cancel);
			}, 1000 * second);
		};
		
		return that;
	},
	
	/** 设置焦点 */
	focus: function () {
		try {
			if (this.config.focus) {
				var elem = this._focus && this._focus[0] || this.DOM.close[0];
				elem && elem.focus();
			}
		} catch (e) {}; // IE对不可见元素设置焦点会报错
		return this;
	},
	
	/** 置顶对话框 */
	zIndex: function () {
		var that = this,
			DOM = that.DOM,
			wrap = DOM.wrap,
			top = artDialog.focus,
			index = artDialog.defaults.zIndex ++;
		
		// 设置叠加高度
		wrap.css('zIndex', index);
		that._lockMask && that._lockMask.css('zIndex', index - 1);
		
		// 设置最高层的样式
		top && top.DOM.wrap.removeClass('aui_state_focus');
		artDialog.focus = that;
		wrap.addClass('aui_state_focus');
		
		return that;
	},
	
	/** 设置屏锁 */
	lock: function () {
		if (this._lock) return this;
		
		var that = this,
			index = artDialog.defaults.zIndex - 1,
			wrap = that.DOM.wrap,
			config = that.config,
			docWidth = _$document.width(),
			docHeight = _$document.height(),
			lockMaskWrap = that._lockMaskWrap || $(document.body.appendChild(document.createElement('div'))),
			lockMask = that._lockMask || $(lockMaskWrap[0].appendChild(document.createElement('div'))),
			domTxt = '(document).documentElement',
			sizeCss = _isMobile ? 'width:' + docWidth + 'px;height:' + docHeight
				+ 'px' : 'width:100%;height:100%',
			ie6Css = _isIE6 ?
				'position:absolute;left:expression(' + domTxt + '.scrollLeft);top:expression('
				+ domTxt + '.scrollTop);width:expression(' + domTxt
				+ '.clientWidth);height:expression(' + domTxt + '.clientHeight)'
			: '';
		
		that.zIndex();
		wrap.addClass('aui_state_lock');
		
		lockMaskWrap[0].style.cssText = sizeCss + ';position:fixed;z-index:'
			+ index + ';top:0;left:0;overflow:hidden;' + ie6Css;
		lockMask[0].style.cssText = 'height:100%;background:' + config.background
			+ ';filter:alpha(opacity=0);opacity:0';
		
		// 让IE6锁屏遮罩能够盖住下拉控件
		if (_isIE6) lockMask.html(
			'<iframe src="about:blank" style="width:100%;height:100%;position:absolute;' +
			'top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>');
			
		lockMask.stop();
		lockMask.bind('click', function () {
			that._reset();
		}).bind('dblclick', function () {
			// that._click(that.config.cancelVal);
			if (config.dblclick_hide) {  
		        that._click('cancel');  
		    } 
		});
		
		if (config.duration === 0) {
			lockMask.css({opacity: config.opacity});
		} else {
			lockMask.animate({opacity: config.opacity}, config.duration);
		};
		
		that._lockMaskWrap = lockMaskWrap;
		that._lockMask = lockMask;
		
		that._lock = true;
		return that;
	},
	
	/** 解开屏锁 */
	unlock: function () {
		var that = this,
			lockMaskWrap = that._lockMaskWrap,
			lockMask = that._lockMask;
		
		if (!that._lock) return that;
		var style = lockMaskWrap[0].style;
		var un = function () {
			if (_isIE6) {
				style.removeExpression('width');
				style.removeExpression('height');
				style.removeExpression('left');
				style.removeExpression('top');
			};
			style.cssText = 'display:none';
			
			_box && lockMaskWrap.remove();
		};
		
		lockMask.stop().unbind();
		that.DOM.wrap.removeClass('aui_state_lock');
		if (!that.config.duration) {// 取消动画，快速关闭
			un();
		} else {
			lockMask.animate({opacity: 0}, that.config.duration, un);
		};
		
		that._lock = false;
		return that;
	},
	
	// 获取元素
	_getDOM: function () {	
		var wrap = document.createElement('div'),
			body = document.body;
		wrap.style.cssText = 'position:absolute;left:0;top:0';
		wrap.innerHTML = artDialog._templates;
		body.insertBefore(wrap, body.firstChild);
		
		var name, i = 0,
			DOM = {wrap: $(wrap)},
			els = wrap.getElementsByTagName('*'),
			elsLen = els.length;
			
		for (; i < elsLen; i ++) {
			name = els[i].className.split('aui_')[1];
			if (name) DOM[name] = $(els[i]);
		};
		
		return DOM;
	},
	
	// px与%单位转换成数值 (百分比单位按照最大值换算)
	// 其他的单位返回原值
	_toNumber: function (thisValue, maxValue) {
		if (!thisValue && thisValue !== 0 || typeof thisValue === 'number') {
			return thisValue;
		};
		
		var last = thisValue.length - 1;
		if (thisValue.lastIndexOf('px') === last) {
			thisValue = parseInt(thisValue);
		} else if (thisValue.lastIndexOf('%') === last) {
			thisValue = parseInt(maxValue * thisValue.split('%')[0] / 100);
		};
		
		return thisValue;
	},
	
	// 让IE6 CSS支持PNG背景
	_ie6PngFix: _isIE6 ? function () {
		var i = 0, elem, png, pngPath, runtimeStyle,
			path = artDialog.defaults.path + '/skins/',
			list = this.DOM.wrap[0].getElementsByTagName('*');
		
		for (; i < list.length; i ++) {
			elem = list[i];
			png = elem.currentStyle['png'];
			if (png) {
				pngPath = path + png;
				runtimeStyle = elem.runtimeStyle;
				runtimeStyle.backgroundImage = 'none';
				runtimeStyle.filter = "progid:DXImageTransform.Microsoft." +
					"AlphaImageLoader(src='" + pngPath + "',sizingMethod='crop')";
			};
		};
	} : $.noop,
	
	// 强制覆盖IE6下拉控件
	_ie6SelectFix: _isIE6 ? function () {
		var $wrap = this.DOM.wrap,
			wrap = $wrap[0],
			expando = _expando + 'iframeMask',
			iframe = $wrap[expando],
			width = wrap.offsetWidth,
			height = wrap.offsetHeight;

		width = width + 'px';
		height = height + 'px';
		if (iframe) {
			iframe.style.width = width;
			iframe.style.height = height;
		} else {
			iframe = wrap.appendChild(document.createElement('iframe'));
			$wrap[expando] = iframe;
			iframe.src = 'about:blank';
			iframe.style.cssText = 'position:absolute;z-index:-1;left:0;top:0;'
			+ 'filter:alpha(opacity=0);width:' + width + ';height:' + height;
		};
	} : $.noop,
	
	// 解析HTML片段中自定义类型脚本，其this指向artDialog内部
	// <script type="text/dialog">/* [code] */</script>
	_runScript: function (elem) {
		var fun, i = 0, n = 0,
			tags = elem.getElementsByTagName('script'),
			length = tags.length,
			script = [];
			
		for (; i < length; i ++) {
			if (tags[i].type === 'text/dialog') {
				script[n] = tags[i].innerHTML;
				n ++;
			};
		};
		
		if (script.length) {
			script = script.join('');
			fun = new Function(script);
			fun.call(this);
		};
	},
	
	// 自动切换定位类型
	_autoPositionType: function () {
		this[this.config.fixed ? '_setFixed' : '_setAbsolute']();/////////////
	},
	
	
	// 设置静止定位
	// IE6 Fixed @see: http://www.planeart.cn/?p=877
	_setFixed: (function () {
		_isIE6 && $(function () {
			var bg = 'backgroundAttachment';
			if (_$html.css(bg) !== 'fixed' && $('body').css(bg) !== 'fixed') {
				_$html.css({
					zoom: 1,// 避免偶尔出现body背景图片异常的情况
					backgroundImage: 'url(about:blank)',
					backgroundAttachment: 'fixed'
				});
			};
		});
		
		return function () {
			var $elem = this.DOM.wrap,
				style = $elem[0].style;
			
			if (_isIE6) {
				var left = parseInt($elem.css('left')),
					top = parseInt($elem.css('top')),
					sLeft = _$document.scrollLeft(),
					sTop = _$document.scrollTop(),
					txt = '(document.documentElement)';
				
				this._setAbsolute();
				style.setExpression('left', 'eval(' + txt + '.scrollLeft + '
					+ (left - sLeft) + ') + "px"');
				style.setExpression('top', 'eval(' + txt + '.scrollTop + '
					+ (top - sTop) + ') + "px"');
			} else {
				style.position = 'fixed';
			};
		};
	}()),
	
	// 设置绝对定位
	_setAbsolute: function () {
		var style = this.DOM.wrap[0].style;
			
		if (_isIE6) {
			style.removeExpression('left');
			style.removeExpression('top');
		};

		style.position = 'absolute';
	},
	
	// 按钮回调函数触发
	_click: function (name) {
		var that = this,
			fn = that._listeners[name] && that._listeners[name].callback;
		return typeof fn !== 'function' || fn.call(that, window) !== false ?
			that.close() : that;
	},
	
	// 重置位置与尺寸
	_reset: function (test) {
		var newSize,
			that = this,
			oldSize = that._winSize || _$window.width() * _$window.height(),
			elem = that._follow,
			width = that._width,
			height = that._height,
			left = that._left,
			top = that._top;
		
		if (test) {
			// IE6~7 window.onresize bug
			newSize = that._winSize =  _$window.width() * _$window.height();
			if (oldSize === newSize) return;
		};
		
		if (width || height) that.size(width, height);
		
		if (elem) {
			that.follow(elem);
		} else if (left || top) {
			that.position(left, top);
		};
	},
	
	// 事件代理
	_addEvent: function () {
		var resizeTimer,
			that = this,
			config = that.config,
			isIE = 'CollectGarbage' in window,
			DOM = that.DOM;
		
		// 窗口调节事件
		that._winResize = function () {
			resizeTimer && clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function () {
				that._reset(isIE);
			}, 40);
		};
		_$window.bind('resize', that._winResize);
		
		// 监听点击
		DOM.wrap
		.bind('click', function (event) {
			var target = event.target, callbackID;
			
			if (target.disabled) return false; // IE BUG
			
			if (target === DOM.close[0]) {
				that._click(config.cancelVal);
				return false;
			} else {
				callbackID = target[_expando + 'callback'];
				callbackID && that._click(callbackID);
			};
			
			that._ie6SelectFix();
		})
		.bind('mousedown', function () {
			that.zIndex();
		});
	},
	
	// 卸载事件代理
	_removeEvent: function () {
		var that = this,
			DOM = that.DOM;
		
		DOM.wrap.unbind();
		_$window.unbind('resize', that._winResize);
	}
	
};

artDialog.fn._init.prototype = artDialog.fn;
$.fn.dialog = $.fn.artDialog = function () {
	var config = arguments;
	this[this.live ? 'live' : 'bind']('click', function () {
		artDialog.apply(this, config);
		return false;
	});
	return this;
};



/** 最顶层的对话框API */
artDialog.focus = null;


/** 获取某对话框API */
artDialog.get = function (id) {
	return id === undefined
	? artDialog.list
	: artDialog.list[id];
};

artDialog.list = {};



// 全局快捷键
_$document.bind('keydown', function (event) {
	var target = event.target,
		nodeName = target.nodeName,
		rinput = /^INPUT|TEXTAREA$/,
		api = artDialog.focus,
		keyCode = event.keyCode;

	if (!api || !api.config.esc || rinput.test(nodeName)) return;
		
	keyCode === 27 && api._click(api.config.cancelVal);
});



// 获取artDialog路径
_path = window['_artDialog_path'] || (function (script, i, me) {
	for (i in script) {
		// 如果通过第三方脚本加载器加载本文件，请保证文件名含有"artDialog"字符
		if (script[i].src && script[i].src.indexOf('artDialog') !== -1) me = script[i];
	};
	
	_thisScript = me || script[script.length - 1];
	me = _thisScript.src.replace(/\\/g, '/');
	return me.lastIndexOf('/') < 0 ? '.' : me.substring(0, me.lastIndexOf('/'));
}(document.getElementsByTagName('script')));



// 无阻塞载入CSS (如"artDialog.js?skin=aero")
_skin = _thisScript.src.split('skin=')[1];
if (_skin) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = _path + '/skins/' + _skin + '.css?' + artDialog.fn.version;
	_thisScript.parentNode.insertBefore(link, _thisScript);
};



// 触发浏览器预先缓存背景图片
_$window.bind('load', function () {
	setTimeout(function () {
		if (_count) return;
		artDialog({left: '-9999em',time: 9,fixed: false,lock: false,focus: false});
	}, 150);
});



// 开启IE6 CSS背景图片缓存
try {
	document.execCommand('BackgroundImageCache', false, true);
} catch (e) {};




// 使用uglifyjs压缩能够预先处理"+"号合并字符串
// uglifyjs: http://marijnhaverbeke.nl/uglifyjs
artDialog._templates =
'<div class="aui_outer">'
+	'<table class="aui_border">'
+		'<tbody>'
+			'<tr>'
+				'<td class="aui_nw"></td>'
+				'<td class="aui_n"></td>'
+				'<td class="aui_ne"></td>'
+			'</tr>'
+			'<tr>'
+				'<td class="aui_w"></td>'
+				'<td class="aui_c">'
+					'<div class="aui_inner">'
+					'<table class="aui_dialog">'
+						'<tbody>'
+							'<tr>'
+								'<td colspan="2" class="aui_header">'
+									'<div class="aui_titleBar">'
+										'<div class="aui_title"></div>'
+										'<a class="aui_close" href="javascript:/*artDialog*/;">'
+											'\xd7'
+										'</a>'
+									'</div>'
+								'</td>'
+							'</tr>'
+							'<tr>'
+								'<td class="aui_icon">'
+									'<div class="aui_iconBg"></div>'
+								'</td>'
+								'<td class="aui_main">'
+									'<div class="aui_content"></div>'
+								'</td>'
+							'</tr>'
+							'<tr>'
+								'<td colspan="2" class="aui_footer">'
+									'<div class="aui_buttons"></div>'
+								'</td>'
+							'</tr>'
+						'</tbody>'
+					'</table>'
+					'</div>'
+				'</td>'
+				'<td class="aui_e"></td>'
+			'</tr>'
+			'<tr>'
+				'<td class="aui_sw"></td>'
+				'<td class="aui_s"></td>'
+				'<td class="aui_se"></td>'
+			'</tr>'
+		'</tbody>'
+	'</table>'
+'</div>';



/**
 * 默认配置
 */
artDialog.defaults = {
								// 消息内容
	content: '<div class="aui_loading"><span>loading..</span></div>',
	title: '\u6d88\u606f',		// 标题. 默认'消息'
	button: null,				// 自定义按钮
	ok: true,					// 确定按钮回调函数
	cancel: null,				// 取消按钮回调函数
	init: null,					// 对话框初始化后执行的函数
	close: null,				// 对话框关闭前执行的函数
	okVal: '\u786E\u5B9A',		// 确定按钮文本. 默认'确定'
	cancelVal: '\u53D6\u6D88',	// 取消按钮文本. 默认'取消'
	width: 420,				// 内容宽度
	height: 80,				// 内容高度
	minWidth: 96,				// 最小宽度限制
	minHeight: 32,				// 最小高度限制
	padding: '20px',		// 内容与边界填充距离
	skin: '',					// 皮肤名(预留接口,尚未实现)
	icon: null,					// 消息图标名称
	time: null,					// 自动关闭时间
	esc: true,					// 是否支持Esc键关闭
	focus: true,				// 是否支持对话框按钮自动聚焦
	show: true,					// 初始化后是否显示对话框
	follow: null,				// 跟随某元素(即让对话框在元素附近弹出)
	path: _path,				// artDialog路径
	lock: true,				// 是否锁屏
	background: '#000',			// 遮罩颜色
	opacity: .35,				// 遮罩透明度
	duration: 300,				// 遮罩透明度渐变动画速度
	fixed: false,				// 是否静止定位
	left: '50%',				// X轴坐标
	top: '38.2%',				// Y轴坐标
	zIndex: 1987,				// 对话框叠加高度值(重要：此值不能超过浏览器最大限制)
	resize: true,				// 是否允许用户调节尺寸
	drag: true					// 是否允许用户拖动位置
	
};

window.artDialog = $.dialog = $.artDialog = artDialog;
}(this.art || this.jQuery && (this.art = jQuery), this));






//------------------------------------------------
// 对话框模块-拖拽支持（可选外置模块）
//------------------------------------------------
;(function ($) {

var _dragEvent, _use,
	_$window = $(window),
	_$document = $(document),
	_elem = document.documentElement,
	_isIE6 = !('minWidth' in _elem.style),
	_isLosecapture = 'onlosecapture' in _elem,
	_isSetCapture = 'setCapture' in _elem;

// 拖拽事件
artDialog.dragEvent = function () {
	var that = this,
		proxy = function (name) {
			var fn = that[name];
			that[name] = function () {
				return fn.apply(that, arguments);
			};
		};
		
	proxy('start');
	proxy('move');
	proxy('end');
};

artDialog.dragEvent.prototype = {

	// 开始拖拽
	onstart: $.noop,
	start: function (event) {
		_$document
		.bind('mousemove', this.move)
		.bind('mouseup', this.end);
			
		this._sClientX = event.clientX;
		this._sClientY = event.clientY;
		this.onstart(event.clientX, event.clientY);

		return false;
	},
	
	// 正在拖拽
	onmove: $.noop,
	move: function (event) {		
		this._mClientX = event.clientX;
		this._mClientY = event.clientY;
		this.onmove(
			event.clientX - this._sClientX,
			event.clientY - this._sClientY
		);
		
		return false;
	},
	
	// 结束拖拽
	onend: $.noop,
	end: function (event) {
		_$document
		.unbind('mousemove', this.move)
		.unbind('mouseup', this.end);
		
		this.onend(event.clientX, event.clientY);
		return false;
	}
	
};

_use = function (event) {
	var limit, startWidth, startHeight, startLeft, startTop, isResize,
		api = artDialog.focus,
		//config = api.config,
		DOM = api.DOM,
		wrap = DOM.wrap,
		title = DOM.title,
		main = DOM.main;

	// 清除文本选择
	var clsSelect = 'getSelection' in window ? function () {
		window.getSelection().removeAllRanges();
	} : function () {
		try {
			document.selection.empty();
		} catch (e) {};
	};
	
	// 对话框准备拖动
	_dragEvent.onstart = function (x, y) {
		if (isResize) {
			startWidth = main[0].offsetWidth;
			startHeight = main[0].offsetHeight;
		} else {
			startLeft = wrap[0].offsetLeft;
			startTop = wrap[0].offsetTop;
		};
		
		_$document.bind('dblclick', _dragEvent.end);
		!_isIE6 && _isLosecapture ?
			title.bind('losecapture', _dragEvent.end) :
			_$window.bind('blur', _dragEvent.end);
		_isSetCapture && title[0].setCapture();
		
		wrap.addClass('aui_state_drag');
		api.focus();
	};
	
	// 对话框拖动进行中
	_dragEvent.onmove = function (x, y) {
		if (isResize) {
			var wrapStyle = wrap[0].style,
				style = main[0].style,
				width = x + startWidth,
				height = y + startHeight;
			
			wrapStyle.width = 'auto';
			style.width = Math.max(0, width) + 'px';
			wrapStyle.width = wrap[0].offsetWidth + 'px';
			
			style.height = Math.max(0, height) + 'px';
			
		} else {
			var style = wrap[0].style,
				left = Math.max(limit.minX, Math.min(limit.maxX, x + startLeft)),
				top = Math.max(limit.minY, Math.min(limit.maxY, y + startTop));

			style.left = left  + 'px';
			style.top = top + 'px';
		};
			
		clsSelect();
		api._ie6SelectFix();
	};
	
	// 对话框拖动结束
	_dragEvent.onend = function (x, y) {
		_$document.unbind('dblclick', _dragEvent.end);
		!_isIE6 && _isLosecapture ?
			title.unbind('losecapture', _dragEvent.end) :
			_$window.unbind('blur', _dragEvent.end);
		_isSetCapture && title[0].releaseCapture();
		
		_isIE6 && !api.closed && api._autoPositionType();
		
		wrap.removeClass('aui_state_drag');
	};
	
	isResize = event.target === DOM.se[0] ? true : false;
	limit = (function () {
		var maxX, maxY,
			wrap = api.DOM.wrap[0],
			fixed = wrap.style.position === 'fixed',
			ow = wrap.offsetWidth,
			oh = wrap.offsetHeight,
			ww = _$window.width(),
			wh = _$window.height(),
			dl = fixed ? 0 : _$document.scrollLeft(),
			dt = fixed ? 0 : _$document.scrollTop(),
			
		// 坐标最大值限制
		maxX = ww - ow + dl;
		maxY = wh - oh + dt;
		
		return {
			minX: dl,
			minY: dt,
			maxX: maxX,
			maxY: maxY
		};
	})();
	
	_dragEvent.start(event);
};

// 代理 mousedown 事件触发对话框拖动
_$document.bind('mousedown', function (event) {
	var api = artDialog.focus;
	if (!api) return;

	var target = event.target,
		config = api.config,
		DOM = api.DOM;
	
	if (config.drag !== false && target === DOM.title[0]
	|| config.resize !== false && target === DOM.se[0]) {
		_dragEvent = _dragEvent || new artDialog.dragEvent();
		_use(event);
		return false;// 防止firefox与chrome滚屏
	};
});

})(this.art || this.jQuery && (this.art = jQuery));

