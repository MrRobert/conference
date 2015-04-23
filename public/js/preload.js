/*
 * Modernizr v2.7.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(AX,AW,AV){function AU(A){AE.cssText=A
}function AT(B,A){return AU(AA.join(B+";")+(A||""))
}function AS(B,A){return typeof B===A
}function AR(B,A){return !!~(""+B).indexOf(A)
}function AQ(B,A){for(var D in B){var C=B[D];
if(!AR(C,"-")&&AE[C]!==AV){return"pfx"==A?C:!0
}}return !1
}function AP(B,A,E){for(var D in B){var C=A[B[D]];
if(C!==AV){return E===!1?B[D]:AS(C,"function")?C.bind(E||A):C
}}return !1
}function AO(B,A,E){var D=B.charAt(0).toUpperCase()+B.slice(1),C=(B+" "+Y.join(D+" ")+D).split(" ");
return AS(A,"string")||AS(A,"undefined")?AQ(C,A):(C=(B+" "+X.join(D+" ")+D).split(" "),AP(C,A,E))
}function AN(){AJ.input=function(C){for(var B=0,A=C.length;
A>B;
B++){T[C[B]]=!!(C[B] in AD)
}return T.list&&(T.list=!(!AW.createElement("datalist")||!AX.HTMLDataListElement)),T
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),AJ.inputtypes=function(A){for(var F,E,D,C=0,B=A.length;
B>C;
C++){AD.setAttribute("type",E=A[C]),F="text"!==AD.type,F&&(AD.value=AC,AD.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(E)&&AD.style.WebkitAppearance!==AV?(AH.appendChild(AD),D=AW.defaultView,F=D.getComputedStyle&&"textfield"!==D.getComputedStyle(AD,null).WebkitAppearance&&0!==AD.offsetHeight,AH.removeChild(AD)):/^(search|tel)$/.test(E)||(F=/^(url|email)$/.test(E)?AD.checkValidity&&AD.checkValidity()===!1:AD.value!=AC)),U[A[C]]=!!F
}return U
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var AM,AL,AK="2.7.1",AJ={},AI=!0,AH=AW.documentElement,AG="modernizr",AF=AW.createElement(AG),AE=AF.style,AD=AW.createElement("input"),AC=":)",AB={}.toString,AA=" -webkit- -moz- -o- -ms- ".split(" "),Z="Webkit Moz O ms",Y=Z.split(" "),X=Z.toLowerCase().split(" "),W={svg:"http://www.w3.org/2000/svg"},V={},U={},T={},S=[],R=S.slice,Q=function(K,J,I,H){var G,F,E,D,C=AW.createElement("div"),B=AW.body,A=B||AW.createElement("body");
if(parseInt(I,10)){for(;
I--;
){E=AW.createElement("div"),E.id=H?H[I]:AG+(I+1),C.appendChild(E)
}}return G=["&#173;",'<style id="s',AG,'">',K,"</style>"].join(""),C.id=AG,(B?C:A).innerHTML+=G,A.appendChild(C),B||(A.style.background="",A.style.overflow="hidden",D=AH.style.overflow,AH.style.overflow="hidden",AH.appendChild(A)),F=J(C,K),B?C.parentNode.removeChild(C):(A.parentNode.removeChild(A),AH.style.overflow=D),!!F
},P=function(A){var C=AX.matchMedia||AX.msMatchMedia;
if(C){return C(A).matches
}var B;
return Q("@media "+A+" { #"+AG+" { position: absolute; } }",function(D){B="absolute"==(AX.getComputedStyle?getComputedStyle(D,null):D.currentStyle).position
}),B
},O=function(){function A(C,E){E=E||AW.createElement(B[C]||"div"),C="on"+C;
var D=C in E;
return D||(E.setAttribute||(E=AW.createElement("div")),E.setAttribute&&E.removeAttribute&&(E.setAttribute(C,""),D=AS(E[C],"function"),AS(E[C],"undefined")||(E[C]=AV),E.removeAttribute(C))),E=null,D
}var B={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return A
}(),N={}.hasOwnProperty;
AL=AS(N,"undefined")||AS(N.call,"undefined")?function(B,A){return A in B&&AS(B.constructor.prototype[A],"undefined")
}:function(B,A){return N.call(B,A)
},Function.prototype.bind||(Function.prototype.bind=function(B){var A=this;
if("function"!=typeof A){throw new TypeError
}var D=R.call(arguments,1),C=function(){if(this instanceof C){var G=function(){};
G.prototype=A.prototype;
var F=new G,E=A.apply(F,D.concat(R.call(arguments)));
return Object(E)===E?E:F
}return A.apply(B,D.concat(R.call(arguments)))
};
return C
}),V.flexbox=function(){return AO("flexWrap")
},V.flexboxlegacy=function(){return AO("boxDirection")
},V.canvas=function(){var A=AW.createElement("canvas");
return !(!A.getContext||!A.getContext("2d"))
},V.canvastext=function(){return !(!AJ.canvas||!AS(AW.createElement("canvas").getContext("2d").fillText,"function"))
},V.webgl=function(){return !!AX.WebGLRenderingContext
},V.touch=function(){var A;
return"ontouchstart" in AX||AX.DocumentTouch&&AW instanceof DocumentTouch?A=!0:Q(["@media (",AA.join("touch-enabled),("),AG,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(B){A=9===B.offsetTop
}),A
},V.geolocation=function(){return"geolocation" in navigator
},V.postmessage=function(){return !!AX.postMessage
},V.websqldatabase=function(){return !!AX.openDatabase
},V.indexedDB=function(){return !!AO("indexedDB",AX)
},V.hashchange=function(){return O("hashchange",AX)&&(AW.documentMode===AV||AW.documentMode>7)
},V.history=function(){return !(!AX.history||!history.pushState)
},V.draganddrop=function(){var A=AW.createElement("div");
return"draggable" in A||"ondragstart" in A&&"ondrop" in A
},V.websockets=function(){return"WebSocket" in AX||"MozWebSocket" in AX
},V.rgba=function(){return AU("background-color:rgba(150,255,150,.5)"),AR(AE.backgroundColor,"rgba")
},V.hsla=function(){return AU("background-color:hsla(120,40%,100%,.5)"),AR(AE.backgroundColor,"rgba")||AR(AE.backgroundColor,"hsla")
},V.multiplebgs=function(){return AU("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(AE.background)
},V.backgroundsize=function(){return AO("backgroundSize")
},V.borderimage=function(){return AO("borderImage")
},V.borderradius=function(){return AO("borderRadius")
},V.boxshadow=function(){return AO("boxShadow")
},V.textshadow=function(){return""===AW.createElement("div").style.textShadow
},V.opacity=function(){return AT("opacity:.55"),/^0.55$/.test(AE.opacity)
},V.cssanimations=function(){return AO("animationName")
},V.csscolumns=function(){return AO("columnCount")
},V.cssgradients=function(){var B="background-image:",A="gradient(linear,left top,right bottom,from(#9f9),to(white));",C="linear-gradient(left top,#9f9, white);";
return AU((B+"-webkit- ".split(" ").join(A+B)+AA.join(C+B)).slice(0,-B.length)),AR(AE.backgroundImage,"gradient")
},V.cssreflections=function(){return AO("boxReflect")
},V.csstransforms=function(){return !!AO("transform")
},V.csstransforms3d=function(){var A=!!AO("perspective");
return A&&"webkitPerspective" in AH.style&&Q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(B){A=9===B.offsetLeft&&3===B.offsetHeight
}),A
},V.csstransitions=function(){return AO("transition")
},V.fontface=function(){var A;
return Q('@font-face {font-family:"font";src:url("https://")}',function(F,E){var D=AW.getElementById("smodernizr"),C=D.sheet||D.styleSheet,B=C?C.cssRules&&C.cssRules[0]?C.cssRules[0].cssText:C.cssText||"":"";
A=/src/i.test(B)&&0===B.indexOf(E.split(" ")[0])
}),A
},V.generatedcontent=function(){var A;
return Q(["#",AG,"{font:0/0 a}#",AG,':after{content:"',AC,'";visibility:hidden;font:3px/1 a}'].join(""),function(B){A=B.offsetHeight>=3
}),A
},V.video=function(){var A=AW.createElement("video"),C=!1;
try{(C=!!A.canPlayType)&&(C=new Boolean(C),C.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),C.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),C.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))
}catch(B){}return C
},V.audio=function(){var A=AW.createElement("audio"),C=!1;
try{(C=!!A.canPlayType)&&(C=new Boolean(C),C.ogg=A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),C.mp3=A.canPlayType("audio/mpeg;").replace(/^no$/,""),C.wav=A.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),C.m4a=(A.canPlayType("audio/x-m4a;")||A.canPlayType("audio/aac;")).replace(/^no$/,""))
}catch(B){}return C
},V.localstorage=function(){try{return localStorage.setItem(AG,AG),localStorage.removeItem(AG),!0
}catch(A){return !1
}},V.sessionstorage=function(){try{return sessionStorage.setItem(AG,AG),sessionStorage.removeItem(AG),!0
}catch(A){return !1
}},V.webworkers=function(){return !!AX.Worker
},V.applicationcache=function(){return !!AX.applicationCache
},V.svg=function(){return !!AW.createElementNS&&!!AW.createElementNS(W.svg,"svg").createSVGRect
},V.inlinesvg=function(){var A=AW.createElement("div");
return A.innerHTML="<svg/>",(A.firstChild&&A.firstChild.namespaceURI)==W.svg
},V.smil=function(){return !!AW.createElementNS&&/SVGAnimate/.test(AB.call(AW.createElementNS(W.svg,"animate")))
},V.svgclippaths=function(){return !!AW.createElementNS&&/SVGClipPath/.test(AB.call(AW.createElementNS(W.svg,"clipPath")))
};
for(var M in V){AL(V,M)&&(AM=M.toLowerCase(),AJ[AM]=V[M](),S.push((AJ[AM]?"":"no-")+AM))
}return AJ.input||AN(),AJ.addTest=function(B,A){if("object"==typeof B){for(var C in B){AL(B,C)&&AJ.addTest(C,B[C])
}}else{if(B=B.toLowerCase(),AJ[B]!==AV){return AJ
}A="function"==typeof A?A():A,"undefined"!=typeof AI&&AI&&(AH.className+=" "+(A?"":"no-")+B),AJ[B]=A
}return AJ
},AU(""),AF=AD=null,function(z,y){function x(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;
return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)
}function w(){var b=A.elements;
return"string"==typeof b?b.split(" "):b
}function v(d){var c=B[d[D]];
return c||(c={},C++,d[D]=C,B[C]=c),c
}function u(b,h,g){if(h||(h=y),I){return h.createElement(b)
}g||(g=v(h));
var e;
return e=g.cache[b]?g.cache[b].cloneNode():E.test(b)?(g.cache[b]=g.createElem(b)).cloneNode():g.createElem(b),!e.canHaveChildren||F.test(b)||e.tagUrn?e:g.frag.appendChild(e)
}function t(b,l){if(b||(b=y),I){return b.createDocumentFragment()
}l=l||v(b);
for(var k=l.frag.cloneNode(),j=0,e=w(),d=e.length;
d>j;
j++){k.createElement(e[j])
}return k
}function L(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return A.shivMethods?u(a,d,c):c.createElem(a)
},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+w().join().replace(/[\w\-]+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'
})+");return n}")(A,c.frag)
}function K(b){b||(b=y);
var c=v(b);
return !A.shivCSS||J||c.hasCSS||(c.hasCSS=!!x(b,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),I||L(b,c),b
}var J,I,H="3.7.0",G=z.html5||{},F=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,E=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,D="_html5shiv",C=0,B={};
!function(){try{var b=y.createElement("a");
b.innerHTML="<xyz></xyz>",J="hidden" in b,I=1==b.childNodes.length||function(){y.createElement("a");
var c=y.createDocumentFragment();
return"undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement
}()
}catch(d){J=!0,I=!0
}}();
var A={elements:G.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:H,shivCSS:G.shivCSS!==!1,supportsUnknownElements:I,shivMethods:G.shivMethods!==!1,type:"default",shivDocument:K,createElement:u,createDocumentFragment:t};
z.html5=A,K(y)
}(this,AW),AJ._version=AK,AJ._prefixes=AA,AJ._domPrefixes=X,AJ._cssomPrefixes=Y,AJ.mq=P,AJ.hasEvent=O,AJ.testProp=function(A){return AQ([A])
},AJ.testAllProps=AO,AJ.testStyles=Q,AJ.prefixed=function(B,A,C){return A?AO(B,A,C):AO(B,"pfx")
},AH.className=AH.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(AI?" js "+S.join(" "):""),AJ
}(this,this.document);
/*
 * jQuery JavaScript Library v1.7
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 3 16:18:21 2011 -0400
 */
(function(window,undefined){var document=window.document,navigator=window.navigator,location=window.location;
var jQuery=(function(){var jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery)
},_jQuery=window.jQuery,_$=window.$,rootjQuery,quickExpr=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,rnotwhite=/\S/,trimLeft=/^\s+/,trimRight=/\s+$/,rdigit=/\d/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,rvalidchars=/^[\],:{}\s]*$/,rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rwebkit=/(webkit)[ \/]([\w.]+)/,ropera=/(opera)(?:.*version)?[ \/]([\w.]+)/,rmsie=/(msie) ([\w.]+)/,rmozilla=/(mozilla)(?:.*? rv:([\w.]+))?/,rdashAlpha=/-([a-z]|[0-9])/ig,rmsPrefix=/^-ms-/,fcamelCase=function(all,letter){return(letter+"").toUpperCase()
},userAgent=navigator.userAgent,browserMatch,readyList,DOMContentLoaded,toString=Object.prototype.toString,hasOwn=Object.prototype.hasOwnProperty,push=Array.prototype.push,slice=Array.prototype.slice,trim=String.prototype.trim,indexOf=Array.prototype.indexOf,class2type={};
jQuery.fn=jQuery.prototype={constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem,ret,doc;
if(!selector){return this
}if(selector.nodeType){this.context=this[0]=selector;
this.length=1;
return this
}if(selector==="body"&&!context&&document.body){this.context=document;
this[0]=document.body;
this.selector=selector;
this.length=1;
return this
}if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null]
}else{match=quickExpr.exec(selector)
}if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;
doc=(context?context.ownerDocument||context:document);
ret=rsingleTag.exec(selector);
if(ret){if(jQuery.isPlainObject(context)){selector=[document.createElement(ret[1])];
jQuery.fn.attr.call(selector,context,true)
}else{selector=[doc.createElement(ret[1])]
}}else{ret=jQuery.buildFragment([match[1]],[doc]);
selector=(ret.cacheable?jQuery.clone(ret.fragment):ret.fragment).childNodes
}return jQuery.merge(this,selector)
}else{elem=document.getElementById(match[2]);
if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector)
}this.length=1;
this[0]=elem
}this.context=document;
this.selector=selector;
return this
}}else{if(!context||context.jquery){return(context||rootjQuery).find(selector)
}else{return this.constructor(context).find(selector)
}}}else{if(jQuery.isFunction(selector)){return rootjQuery.ready(selector)
}}if(selector.selector!==undefined){this.selector=selector.selector;
this.context=selector.context
}return jQuery.makeArray(selector,this)
},selector:"",jquery:"1.7",length:0,size:function(){return this.length
},toArray:function(){return slice.call(this,0)
},get:function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num])
},pushStack:function(elems,name,selector){var ret=this.constructor();
if(jQuery.isArray(elems)){push.apply(ret,elems)
}else{jQuery.merge(ret,elems)
}ret.prevObject=this;
ret.context=this.context;
if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector
}else{if(name){ret.selector=this.selector+"."+name+"("+selector+")"
}}return ret
},each:function(callback,args){return jQuery.each(this,callback,args)
},ready:function(fn){jQuery.bindReady();
readyList.add(fn);
return this
},eq:function(i){return i===-1?this.slice(i):this.slice(i,+i+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(slice.apply(this,arguments),"slice",slice.call(arguments).join(","))
},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:push,sort:[].sort,splice:[].splice};
jQuery.fn.init.prototype=jQuery.fn;
jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;
if(typeof target==="boolean"){deep=target;
target=arguments[1]||{};
i=2
}if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}
}if(length===i){target=this;
--i
}for(;
i<length;
i++){if((options=arguments[i])!=null){for(name in options){src=target[name];
copy=options[name];
if(target===copy){continue
}if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;
clone=src&&jQuery.isArray(src)?src:[]
}else{clone=src&&jQuery.isPlainObject(src)?src:{}
}target[name]=jQuery.extend(deep,clone,copy)
}else{if(copy!==undefined){target[name]=copy
}}}}}return target
};
jQuery.extend({noConflict:function(deep){if(window.$===jQuery){window.$=_$
}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery
}return jQuery
},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++
}else{jQuery.ready(true)
}},ready:function(wait){if((wait===true&&!--jQuery.readyWait)||(wait!==true&&!jQuery.isReady)){if(!document.body){return setTimeout(jQuery.ready,1)
}jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){return 
}readyList.fireWith(document,[jQuery]);
if(jQuery.fn.trigger){jQuery(document).trigger("ready").unbind("ready")
}}},bindReady:function(){if(readyList){return 
}readyList=jQuery.Callbacks("once memory");
if(document.readyState==="complete"){return setTimeout(jQuery.ready,1)
}if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);
window.addEventListener("load",jQuery.ready,false)
}else{if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);
window.attachEvent("onload",jQuery.ready);
var toplevel=false;
try{toplevel=window.frameElement==null
}catch(e){}if(document.documentElement.doScroll&&toplevel){doScrollCheck()
}}}},isFunction:function(obj){return jQuery.type(obj)==="function"
},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array"
},isWindow:function(obj){return obj&&typeof obj==="object"&&"setInterval" in obj
},isNumeric:function(obj){return obj!=null&&rdigit.test(obj)&&!isNaN(obj)
},type:function(obj){return obj==null?String(obj):class2type[toString.call(obj)]||"object"
},isPlainObject:function(obj){if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false
}try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false
}}catch(e){return false
}var key;
for(key in obj){}return key===undefined||hasOwn.call(obj,key)
},isEmptyObject:function(obj){for(var name in obj){return false
}return true
},error:function(msg){throw msg
},parseJSON:function(data){if(typeof data!=="string"||!data){return null
}data=jQuery.trim(data);
if(window.JSON&&window.JSON.parse){return window.JSON.parse(data)
}if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return(new Function("return "+data))()
}jQuery.error("Invalid JSON: "+data)
},parseXML:function(data){var xml,tmp;
try{if(window.DOMParser){tmp=new DOMParser();
xml=tmp.parseFromString(data,"text/xml")
}else{xml=new ActiveXObject("Microsoft.XMLDOM");
xml.async="false";
xml.loadXML(data)
}}catch(e){xml=undefined
}if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)
}return xml
},noop:function(){},globalEval:function(data){if(data&&rnotwhite.test(data)){(window.execScript||function(data){window["eval"].call(window,data)
})(data)
}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)
},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()===name.toUpperCase()
},each:function(object,callback,args){var name,i=0,length=object.length,isObj=length===undefined||jQuery.isFunction(object);
if(args){if(isObj){for(name in object){if(callback.apply(object[name],args)===false){break
}}}else{for(;
i<length;
){if(callback.apply(object[i++],args)===false){break
}}}}else{if(isObj){for(name in object){if(callback.call(object[name],name,object[name])===false){break
}}}else{for(;
i<length;
){if(callback.call(object[i],i,object[i++])===false){break
}}}}return object
},trim:trim?function(text){return text==null?"":trim.call(text)
}:function(text){return text==null?"":text.toString().replace(trimLeft,"").replace(trimRight,"")
},makeArray:function(array,results){var ret=results||[];
if(array!=null){var type=jQuery.type(array);
if(array.length==null||type==="string"||type==="function"||type==="regexp"||jQuery.isWindow(array)){push.call(ret,array)
}else{jQuery.merge(ret,array)
}}return ret
},inArray:function(elem,array,i){var len;
if(array){if(indexOf){return indexOf.call(array,elem,i)
}len=array.length;
i=i?i<0?Math.max(0,len+i):i:0;
for(;
i<len;
i++){if(i in array&&array[i]===elem){return i
}}}return -1
},merge:function(first,second){var i=first.length,j=0;
if(typeof second.length==="number"){for(var l=second.length;
j<l;
j++){first[i++]=second[j]
}}else{while(second[j]!==undefined){first[i++]=second[j++]
}}first.length=i;
return first
},grep:function(elems,callback,inv){var ret=[],retVal;
inv=!!inv;
for(var i=0,length=elems.length;
i<length;
i++){retVal=!!callback(elems[i],i);
if(inv!==retVal){ret.push(elems[i])
}}return ret
},map:function(elems,callback,arg){var value,key,ret=[],i=0,length=elems.length,isArray=elems instanceof jQuery||length!==undefined&&typeof length==="number"&&((length>0&&elems[0]&&elems[length-1])||length===0||jQuery.isArray(elems));
if(isArray){for(;
i<length;
i++){value=callback(elems[i],i,arg);
if(value!=null){ret[ret.length]=value
}}}else{for(key in elems){value=callback(elems[key],key,arg);
if(value!=null){ret[ret.length]=value
}}}return ret.concat.apply([],ret)
},guid:1,proxy:function(fn,context){if(typeof context==="string"){var tmp=fn[context];
context=fn;
fn=tmp
}if(!jQuery.isFunction(fn)){return undefined
}var args=slice.call(arguments,2),proxy=function(){return fn.apply(context,args.concat(slice.call(arguments)))
};
proxy.guid=fn.guid=fn.guid||proxy.guid||jQuery.guid++;
return proxy
},access:function(elems,key,value,exec,fn,pass){var length=elems.length;
if(typeof key==="object"){for(var k in key){jQuery.access(elems,k,key[k],exec,fn,value)
}return elems
}if(value!==undefined){exec=!pass&&exec&&jQuery.isFunction(value);
for(var i=0;
i<length;
i++){fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass)
}return elems
}return length?fn(elems[0],key):undefined
},now:function(){return(new Date()).getTime()
},uaMatch:function(ua){ua=ua.toLowerCase();
var match=rwebkit.exec(ua)||ropera.exec(ua)||rmsie.exec(ua)||ua.indexOf("compatible")<0&&rmozilla.exec(ua)||[];
return{browser:match[1]||"",version:match[2]||"0"}
},sub:function(){function jQuerySub(selector,context){return new jQuerySub.fn.init(selector,context)
}jQuery.extend(true,jQuerySub,this);
jQuerySub.superclass=this;
jQuerySub.fn=jQuerySub.prototype=this();
jQuerySub.fn.constructor=jQuerySub;
jQuerySub.sub=this.sub;
jQuerySub.fn.init=function init(selector,context){if(context&&context instanceof jQuery&&!(context instanceof jQuerySub)){context=jQuerySub(context)
}return jQuery.fn.init.call(this,selector,context,rootjQuerySub)
};
jQuerySub.fn.init.prototype=jQuerySub.fn;
var rootjQuerySub=jQuerySub(document);
return jQuerySub
},browser:{}});
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()
});
browserMatch=jQuery.uaMatch(userAgent);
if(browserMatch.browser){jQuery.browser[browserMatch.browser]=true;
jQuery.browser.version=browserMatch.version
}if(jQuery.browser.webkit){jQuery.browser.safari=true
}if(rnotwhite.test("\xA0")){trimLeft=/^[\s\xA0]+/;
trimRight=/[\s\xA0]+$/
}rootjQuery=jQuery(document);
if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);
jQuery.ready()
}
}else{if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);
jQuery.ready()
}}
}}function doScrollCheck(){if(jQuery.isReady){return 
}try{document.documentElement.doScroll("left")
}catch(e){setTimeout(doScrollCheck,1);
return 
}jQuery.ready()
}if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return jQuery
})
}return jQuery
})();
var flagsCache={};
function createFlags(flags){var object=flagsCache[flags]={},i,length;
flags=flags.split(/\s+/);
for(i=0,length=flags.length;
i<length;
i++){object[flags[i]]=true
}return object
}jQuery.Callbacks=function(flags){flags=flags?(flagsCache[flags]||createFlags(flags)):{};
var list=[],stack=[],memory,firing,firingStart,firingLength,firingIndex,add=function(args){var i,length,elem,type,actual;
for(i=0,length=args.length;
i<length;
i++){elem=args[i];
type=jQuery.type(elem);
if(type==="array"){add(elem)
}else{if(type==="function"){if(!flags.unique||!self.has(elem)){list.push(elem)
}}}}},fire=function(context,args){args=args||[];
memory=!flags.memory||[context,args];
firing=true;
firingIndex=firingStart||0;
firingStart=0;
firingLength=list.length;
for(;
list&&firingIndex<firingLength;
firingIndex++){if(list[firingIndex].apply(context,args)===false&&flags.stopOnFalse){memory=true;
break
}}firing=false;
if(list){if(!flags.once){if(stack&&stack.length){memory=stack.shift();
self.fireWith(memory[0],memory[1])
}}else{if(memory===true){self.disable()
}else{list=[]
}}}},self={add:function(){if(list){var length=list.length;
add(arguments);
if(firing){firingLength=list.length
}else{if(memory&&memory!==true){firingStart=length;
fire(memory[0],memory[1])
}}}return this
},remove:function(){if(list){var args=arguments,argIndex=0,argLength=args.length;
for(;
argIndex<argLength;
argIndex++){for(var i=0;
i<list.length;
i++){if(args[argIndex]===list[i]){if(firing){if(i<=firingLength){firingLength--;
if(i<=firingIndex){firingIndex--
}}}list.splice(i--,1);
if(flags.unique){break
}}}}}return this
},has:function(fn){if(list){var i=0,length=list.length;
for(;
i<length;
i++){if(fn===list[i]){return true
}}}return false
},empty:function(){list=[];
return this
},disable:function(){list=stack=memory=undefined;
return this
},disabled:function(){return !list
},lock:function(){stack=undefined;
if(!memory||memory===true){self.disable()
}return this
},locked:function(){return !stack
},fireWith:function(context,args){if(stack){if(firing){if(!flags.once){stack.push([context,args])
}}else{if(!(flags.once&&memory)){fire(context,args)
}}}return this
},fire:function(){self.fireWith(this,arguments);
return this
},fired:function(){return !!memory
}};
return self
};
var sliceDeferred=[].slice;
jQuery.extend({Deferred:function(func){var doneList=jQuery.Callbacks("once memory"),failList=jQuery.Callbacks("once memory"),progressList=jQuery.Callbacks("memory"),state="pending",lists={resolve:doneList,reject:failList,notify:progressList},promise={done:doneList.add,fail:failList.add,progress:progressList.add,state:function(){return state
},isResolved:doneList.fired,isRejected:failList.fired,then:function(doneCallbacks,failCallbacks,progressCallbacks){deferred.done(doneCallbacks).fail(failCallbacks).progress(progressCallbacks);
return this
},always:function(){return deferred.done.apply(deferred,arguments).fail.apply(deferred,arguments)
},pipe:function(fnDone,fnFail,fnProgress){return jQuery.Deferred(function(newDefer){jQuery.each({done:[fnDone,"resolve"],fail:[fnFail,"reject"],progress:[fnProgress,"notify"]},function(handler,data){var fn=data[0],action=data[1],returned;
if(jQuery.isFunction(fn)){deferred[handler](function(){returned=fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){returned.promise().then(newDefer.resolve,newDefer.reject,newDefer.notify)
}else{newDefer[action+"With"](this===deferred?newDefer:this,[returned])
}})
}else{deferred[handler](newDefer[action])
}})
}).promise()
},promise:function(obj){if(obj==null){obj=promise
}else{for(var key in promise){obj[key]=promise[key]
}}return obj
}},deferred=promise.promise({}),key;
for(key in lists){deferred[key]=lists[key].fire;
deferred[key+"With"]=lists[key].fireWith
}deferred.done(function(){state="resolved"
},failList.disable,progressList.lock).fail(function(){state="rejected"
},doneList.disable,progressList.lock);
if(func){func.call(deferred,deferred)
}return deferred
},when:function(firstParam){var args=sliceDeferred.call(arguments,0),i=0,length=args.length,pValues=new Array(length),count=length,pCount=length,deferred=length<=1&&firstParam&&jQuery.isFunction(firstParam.promise)?firstParam:jQuery.Deferred(),promise=deferred.promise();
function resolveFunc(i){return function(value){args[i]=arguments.length>1?sliceDeferred.call(arguments,0):value;
if(!(--count)){deferred.resolveWith(deferred,args)
}}
}function progressFunc(i){return function(value){pValues[i]=arguments.length>1?sliceDeferred.call(arguments,0):value;
deferred.notifyWith(promise,pValues)
}
}if(length>1){for(;
i<length;
i++){if(args[i]&&args[i].promise&&jQuery.isFunction(args[i].promise)){args[i].promise().then(resolveFunc(i),deferred.reject,progressFunc(i))
}else{--count
}}if(!count){deferred.resolveWith(deferred,args)
}}else{if(deferred!==firstParam){deferred.resolveWith(deferred,length?[firstParam]:[])
}}return promise
}});
jQuery.support=(function(){var div=document.createElement("div"),documentElement=document.documentElement,all,a,select,opt,input,marginDiv,support,fragment,body,testElementParent,testElement,testElementStyle,tds,events,eventName,i,isSupported;
div.setAttribute("className","t");
div.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>";
all=div.getElementsByTagName("*");
a=div.getElementsByTagName("a")[0];
if(!all||!all.length||!a){return{}
}select=document.createElement("select");
opt=select.appendChild(document.createElement("option"));
input=div.getElementsByTagName("input")[0];
support={leadingWhitespace:(div.firstChild.nodeType===3),tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/top/.test(a.getAttribute("style")),hrefNormalized:(a.getAttribute("href")==="/a"),opacity:/^0.55/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,unknownElems:!!div.getElementsByTagName("nav").length,checkOn:(input.value==="on"),optSelected:opt.selected,getSetAttribute:div.className!=="t",enctype:!!document.createElement("form").enctype,submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true};
input.checked=true;
support.noCloneChecked=input.cloneNode(true).checked;
select.disabled=true;
support.optDisabled=!opt.disabled;
try{delete div.test
}catch(e){support.deleteExpando=false
}if(!div.addEventListener&&div.attachEvent&&div.fireEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false
});
div.cloneNode(true).fireEvent("onclick")
}input=document.createElement("input");
input.value="t";
input.setAttribute("type","radio");
support.radioValue=input.value==="t";
input.setAttribute("checked","checked");
div.appendChild(input);
fragment=document.createDocumentFragment();
fragment.appendChild(div.lastChild);
support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;
div.innerHTML="";
div.style.width=div.style.paddingLeft="1px";
body=document.getElementsByTagName("body")[0];
testElement=document.createElement(body?"div":"body");
testElementStyle={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(body){jQuery.extend(testElementStyle,{position:"absolute",left:"-999px",top:"-999px"})
}for(i in testElementStyle){testElement.style[i]=testElementStyle[i]
}testElement.appendChild(div);
testElementParent=body||documentElement;
testElementParent.insertBefore(testElement,testElementParent.firstChild);
support.appendChecked=input.checked;
support.boxModel=div.offsetWidth===2;
if("zoom" in div.style){div.style.display="inline";
div.style.zoom=1;
support.inlineBlockNeedsLayout=(div.offsetWidth===2);
div.style.display="";
div.innerHTML="<div style='width:4px;'></div>";
support.shrinkWrapBlocks=(div.offsetWidth!==2)
}div.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
tds=div.getElementsByTagName("td");
isSupported=(tds[0].offsetHeight===0);
tds[0].style.display="";
tds[1].style.display="none";
support.reliableHiddenOffsets=isSupported&&(tds[0].offsetHeight===0);
div.innerHTML="";
if(document.defaultView&&document.defaultView.getComputedStyle){marginDiv=document.createElement("div");
marginDiv.style.width="0";
marginDiv.style.marginRight="0";
div.appendChild(marginDiv);
support.reliableMarginRight=(parseInt((document.defaultView.getComputedStyle(marginDiv,null)||{marginRight:0}).marginRight,10)||0)===0
}if(div.attachEvent){for(i in {submit:1,change:1,focusin:1}){eventName="on"+i;
isSupported=(eventName in div);
if(!isSupported){div.setAttribute(eventName,"return;");
isSupported=(typeof div[eventName]==="function")
}support[i+"Bubbles"]=isSupported
}}jQuery(function(){var container,outer,inner,table,td,offsetSupport,conMarginTop=1,ptlm="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",vb="visibility:hidden;border:0;",style="style='"+ptlm+"border:5px solid #000;padding:0;'",html="<div "+style+"><div></div></div><table "+style+" cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
body=document.getElementsByTagName("body")[0];
if(!body){return 
}container=document.createElement("div");
container.style.cssText=vb+"width:0;height:0;position:static;top:0;margin-top:"+conMarginTop+"px";
body.insertBefore(container,body.firstChild);
testElement=document.createElement("div");
testElement.style.cssText=ptlm+vb;
testElement.innerHTML=html;
container.appendChild(testElement);
outer=testElement.firstChild;
inner=outer.firstChild;
td=outer.nextSibling.firstChild.firstChild;
offsetSupport={doesNotAddBorder:(inner.offsetTop!==5),doesAddBorderForTableAndCells:(td.offsetTop===5)};
inner.style.position="fixed";
inner.style.top="20px";
offsetSupport.fixedPosition=(inner.offsetTop===20||inner.offsetTop===15);
inner.style.position=inner.style.top="";
outer.style.overflow="hidden";
outer.style.position="relative";
offsetSupport.subtractsBorderForOverflowNotVisible=(inner.offsetTop===-5);
offsetSupport.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==conMarginTop);
body.removeChild(container);
testElement=container=null;
jQuery.extend(support,offsetSupport)
});
testElement.innerHTML="";
testElementParent.removeChild(testElement);
testElement=fragment=select=opt=body=marginDiv=div=input=null;
return support
})();
jQuery.boxModel=jQuery.support.boxModel;
var rbrace=/^(?:\{.*\}|\[.*\])$/,rmultiDash=/([A-Z])/g;
jQuery.extend({cache:{},uuid:0,expando:"jQuery"+(jQuery.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];
return !!elem&&!isEmptyDataObject(elem)
},data:function(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return 
}var privateCache,thisCache,ret,internalKey=jQuery.expando,getByName=typeof name==="string",isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:elem[jQuery.expando]&&jQuery.expando,isEvents=name==="events";
if((!id||!cache[id]||(!isEvents&&!pvt&&!cache[id].data))&&getByName&&data===undefined){return 
}if(!id){if(isNode){elem[jQuery.expando]=id=++jQuery.uuid
}else{id=jQuery.expando
}}if(!cache[id]){cache[id]={};
if(!isNode){cache[id].toJSON=jQuery.noop
}}if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name)
}else{cache[id].data=jQuery.extend(cache[id].data,name)
}}privateCache=thisCache=cache[id];
if(!pvt){if(!thisCache.data){thisCache.data={}
}thisCache=thisCache.data
}if(data!==undefined){thisCache[jQuery.camelCase(name)]=data
}if(isEvents&&!thisCache[name]){return privateCache.events
}if(getByName){ret=thisCache[name];
if(ret==null){ret=thisCache[jQuery.camelCase(name)]
}}else{ret=thisCache
}return ret
},removeData:function(elem,name,pvt){if(!jQuery.acceptData(elem)){return 
}var thisCache,i,l,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;
if(!cache[id]){return 
}if(name){thisCache=pvt?cache[id]:cache[id].data;
if(thisCache){if(jQuery.isArray(name)){name=name
}else{if(name in thisCache){name=[name]
}else{name=jQuery.camelCase(name);
if(name in thisCache){name=[name]
}else{name=name.split(" ")
}}}for(i=0,l=name.length;
i<l;
i++){delete thisCache[name[i]]
}if(!(pvt?isEmptyDataObject:jQuery.isEmptyObject)(thisCache)){return 
}}}if(!pvt){delete cache[id].data;
if(!isEmptyDataObject(cache[id])){return 
}}if(jQuery.support.deleteExpando||!cache.setInterval){delete cache[id]
}else{cache[id]=null
}if(isNode){if(jQuery.support.deleteExpando){delete elem[jQuery.expando]
}else{if(elem.removeAttribute){elem.removeAttribute(jQuery.expando)
}else{elem[jQuery.expando]=null
}}}},_data:function(elem,name,data){return jQuery.data(elem,name,data,true)
},acceptData:function(elem){if(elem.nodeName){var match=jQuery.noData[elem.nodeName.toLowerCase()];
if(match){return !(match===true||elem.getAttribute("classid")!==match)
}}return true
}});
jQuery.fn.extend({data:function(key,value){var parts,attr,name,data=null;
if(typeof key==="undefined"){if(this.length){data=jQuery.data(this[0]);
if(this[0].nodeType===1&&!jQuery._data(this[0],"parsedAttrs")){attr=this[0].attributes;
for(var i=0,l=attr.length;
i<l;
i++){name=attr[i].name;
if(name.indexOf("data-")===0){name=jQuery.camelCase(name.substring(5));
dataAttr(this[0],name,data[name])
}}jQuery._data(this[0],"parsedAttrs",true)
}}return data
}else{if(typeof key==="object"){return this.each(function(){jQuery.data(this,key)
})
}}parts=key.split(".");
parts[1]=parts[1]?"."+parts[1]:"";
if(value===undefined){data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);
if(data===undefined&&this.length){data=jQuery.data(this[0],key);
data=dataAttr(this[0],key,data)
}return data===undefined&&parts[1]?this.data(parts[0]):data
}else{return this.each(function(){var $this=jQuery(this),args=[parts[0],value];
$this.triggerHandler("setData"+parts[1]+"!",args);
jQuery.data(this,key,value);
$this.triggerHandler("changeData"+parts[1]+"!",args)
})
}},removeData:function(key){return this.each(function(){jQuery.removeData(this,key)
})
}});
function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:jQuery.isNumeric(data)?parseFloat(data):rbrace.test(data)?jQuery.parseJSON(data):data
}catch(e){}jQuery.data(elem,key,data)
}else{data=undefined
}}return data
}function isEmptyDataObject(obj){for(var name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue
}if(name!=="toJSON"){return false
}}return true
}function handleQueueMarkDefer(elem,type,src){var deferDataKey=type+"defer",queueDataKey=type+"queue",markDataKey=type+"mark",defer=jQuery._data(elem,deferDataKey);
if(defer&&(src==="queue"||!jQuery._data(elem,queueDataKey))&&(src==="mark"||!jQuery._data(elem,markDataKey))){setTimeout(function(){if(!jQuery._data(elem,queueDataKey)&&!jQuery._data(elem,markDataKey)){jQuery.removeData(elem,deferDataKey,true);
defer.fire()
}},0)
}}jQuery.extend({_mark:function(elem,type){if(elem){type=(type||"fx")+"mark";
jQuery._data(elem,type,(jQuery._data(elem,type)||0)+1)
}},_unmark:function(force,elem,type){if(force!==true){type=elem;
elem=force;
force=false
}if(elem){type=type||"fx";
var key=type+"mark",count=force?0:((jQuery._data(elem,key)||1)-1);
if(count){jQuery._data(elem,key,count)
}else{jQuery.removeData(elem,key,true);
handleQueueMarkDefer(elem,type,"mark")
}}},queue:function(elem,type,data){var q;
if(elem){type=(type||"fx")+"queue";
q=jQuery._data(elem,type);
if(data){if(!q||jQuery.isArray(data)){q=jQuery._data(elem,type,jQuery.makeArray(data))
}else{q.push(data)
}}return q||[]
}},dequeue:function(elem,type){type=type||"fx";
var queue=jQuery.queue(elem,type),fn=queue.shift(),hooks={};
if(fn==="inprogress"){fn=queue.shift()
}if(fn){if(type==="fx"){queue.unshift("inprogress")
}jQuery._data(elem,type+".run",hooks);
fn.call(elem,function(){jQuery.dequeue(elem,type)
},hooks)
}if(!queue.length){jQuery.removeData(elem,type+"queue "+type+".run",true);
handleQueueMarkDefer(elem,type,"queue")
}}});
jQuery.fn.extend({queue:function(type,data){if(typeof type!=="string"){data=type;
type="fx"
}if(data===undefined){return jQuery.queue(this[0],type)
}return this.each(function(){var queue=jQuery.queue(this,type,data);
if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)
}})
},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)
})
},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);
hooks.stop=function(){clearTimeout(timeout)
}
})
},clearQueue:function(type){return this.queue(type||"fx",[])
},promise:function(type,object){if(typeof type!=="string"){object=type;
type=undefined
}type=type||"fx";
var defer=jQuery.Deferred(),elements=this,i=elements.length,count=1,deferDataKey=type+"defer",queueDataKey=type+"queue",markDataKey=type+"mark",tmp;
function resolve(){if(!(--count)){defer.resolveWith(elements,[elements])
}}while(i--){if((tmp=jQuery.data(elements[i],deferDataKey,undefined,true)||(jQuery.data(elements[i],queueDataKey,undefined,true)||jQuery.data(elements[i],markDataKey,undefined,true))&&jQuery.data(elements[i],deferDataKey,jQuery.Callbacks("once memory"),true))){count++;
tmp.add(resolve)
}}resolve();
return defer.promise()
}});
var rclass=/[\n\t\r]/g,rspace=/\s+/,rreturn=/\r/g,rtype=/^(?:button|input)$/i,rfocusable=/^(?:button|input|object|select|textarea)$/i,rclickable=/^a(?:rea)?$/i,rboolean=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute,nodeHook,boolHook,fixSpecified;
jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,name,value,true,jQuery.attr)
},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)
})
},prop:function(name,value){return jQuery.access(this,name,value,true,jQuery.prop)
},removeProp:function(name){name=jQuery.propFix[name]||name;
return this.each(function(){try{this[name]=undefined;
delete this[name]
}catch(e){}})
},addClass:function(value){var classNames,i,l,elem,setClass,c,cl;
if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className))
})
}if(value&&typeof value==="string"){classNames=value.split(rspace);
for(i=0,l=this.length;
i<l;
i++){elem=this[i];
if(elem.nodeType===1){if(!elem.className&&classNames.length===1){elem.className=value
}else{setClass=" "+elem.className+" ";
for(c=0,cl=classNames.length;
c<cl;
c++){if(!~setClass.indexOf(" "+classNames[c]+" ")){setClass+=classNames[c]+" "
}}elem.className=jQuery.trim(setClass)
}}}}return this
},removeClass:function(value){var classNames,i,l,elem,className,c,cl;
if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className))
})
}if((value&&typeof value==="string")||value===undefined){classNames=(value||"").split(rspace);
for(i=0,l=this.length;
i<l;
i++){elem=this[i];
if(elem.nodeType===1&&elem.className){if(value){className=(" "+elem.className+" ").replace(rclass," ");
for(c=0,cl=classNames.length;
c<cl;
c++){className=className.replace(" "+classNames[c]+" "," ")
}elem.className=jQuery.trim(className)
}else{elem.className=""
}}}}return this
},toggleClass:function(value,stateVal){var type=typeof value,isBool=typeof stateVal==="boolean";
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal)
})
}return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),state=stateVal,classNames=value.split(rspace);
while((className=classNames[i++])){state=isBool?state:!self.hasClass(className);
self[state?"addClass":"removeClass"](className)
}}else{if(type==="undefined"||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className)
}this.className=this.className||value===false?"":jQuery._data(this,"__className__")||""
}}})
},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;
for(;
i<l;
i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>-1){return true
}}return false
},val:function(value){var hooks,ret,isFunction,elem=this[0];
if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.nodeName.toLowerCase()]||jQuery.valHooks[elem.type];
if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret
}ret=elem.value;
return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret
}return undefined
}isFunction=jQuery.isFunction(value);
return this.each(function(i){var self=jQuery(this),val;
if(this.nodeType!==1){return 
}if(isFunction){val=value.call(this,i,self.val())
}else{val=value
}if(val==null){val=""
}else{if(typeof val==="number"){val+=""
}else{if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+""
})
}}}hooks=jQuery.valHooks[this.nodeName.toLowerCase()]||jQuery.valHooks[this.type];
if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val
}})
}});
jQuery.extend({valHooks:{option:{get:function(elem){var val=elem.attributes.value;
return !val||val.specified?elem.value:elem.text
}},select:{get:function(elem){var value,i,max,option,index=elem.selectedIndex,values=[],options=elem.options,one=elem.type==="select-one";
if(index<0){return null
}i=one?index:0;
max=one?index+1:options.length;
for(;
i<max;
i++){option=options[i];
if(option.selected&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();
if(one){return value
}values.push(value)
}}if(one&&!values.length&&options.length){return jQuery(options[index]).val()
}return values
},set:function(elem,value){var values=jQuery.makeArray(value);
jQuery(elem).find("option").each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0
});
if(!values.length){elem.selectedIndex=-1
}return values
}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(elem,name,value,pass){var ret,hooks,notxml,nType=elem.nodeType;
if(!elem||nType===3||nType===8||nType===2){return undefined
}if(pass&&name in jQuery.attrFn){return jQuery(elem)[name](value)
}if(!("getAttribute" in elem)){return jQuery.prop(elem,name,value)
}notxml=nType!==1||!jQuery.isXMLDoc(elem);
if(notxml){name=name.toLowerCase();
hooks=jQuery.attrHooks[name]||(rboolean.test(name)?boolHook:nodeHook)
}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);
return undefined
}else{if(hooks&&"set" in hooks&&notxml&&(ret=hooks.set(elem,value,name))!==undefined){return ret
}else{elem.setAttribute(name,""+value);
return value
}}}else{if(hooks&&"get" in hooks&&notxml&&(ret=hooks.get(elem,name))!==null){return ret
}else{ret=elem.getAttribute(name);
return ret===null?undefined:ret
}}},removeAttr:function(elem,value){var propName,attrNames,name,l,i=0;
if(elem.nodeType===1){attrNames=(value||"").split(rspace);
l=attrNames.length;
for(;
i<l;
i++){name=attrNames[i].toLowerCase();
propName=jQuery.propFix[name]||name;
jQuery.attr(elem,name,"");
elem.removeAttribute(getSetAttribute?name:propName);
if(rboolean.test(name)&&propName in elem){elem[propName]=false
}}}},attrHooks:{type:{set:function(elem,value){if(rtype.test(elem.nodeName)&&elem.parentNode){jQuery.error("type property can't be changed")
}else{if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;
elem.setAttribute("type",value);
if(val){elem.value=val
}return value
}}}},value:{get:function(elem,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.get(elem,name)
}return name in elem?elem.value:null
},set:function(elem,value,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.set(elem,value,name)
}elem.value=value
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;
if(!elem||nType===3||nType===8||nType===2){return undefined
}notxml=nType!==1||!jQuery.isXMLDoc(elem);
if(notxml){name=jQuery.propFix[name]||name;
hooks=jQuery.propHooks[name]
}if(value!==undefined){if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret
}else{return(elem[name]=value)
}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret
}else{return elem[name]
}}},propHooks:{tabIndex:{get:function(elem){var attributeNode=elem.getAttributeNode("tabindex");
return attributeNode&&attributeNode.specified?parseInt(attributeNode.value,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined
}}}});
jQuery.attrHooks.tabindex=jQuery.propHooks.tabIndex;
boolHook={get:function(elem,name){var attrNode,property=jQuery.prop(elem,name);
return property===true||typeof property!=="boolean"&&(attrNode=elem.getAttributeNode(name))&&attrNode.nodeValue!==false?name.toLowerCase():undefined
},set:function(elem,value,name){var propName;
if(value===false){jQuery.removeAttr(elem,name)
}else{propName=jQuery.propFix[name]||name;
if(propName in elem){elem[propName]=true
}elem.setAttribute(name,name.toLowerCase())
}return name
}};
if(!getSetAttribute){fixSpecified={name:true,id:true};
nodeHook=jQuery.valHooks.button={get:function(elem,name){var ret;
ret=elem.getAttributeNode(name);
return ret&&(fixSpecified[name]?ret.nodeValue!=="":ret.specified)?ret.nodeValue:undefined
},set:function(elem,value,name){var ret=elem.getAttributeNode(name);
if(!ret){ret=document.createAttribute(name);
elem.setAttributeNode(ret)
}return(ret.nodeValue=value+"")
}};
jQuery.attrHooks.tabindex.set=nodeHook.set;
jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");
return value
}}})
});
jQuery.attrHooks.contenteditable={get:nodeHook.get,set:function(elem,value,name){if(value===""){value="false"
}nodeHook.set(elem,value,name)
}}
}if(!jQuery.support.hrefNormalized){jQuery.each(["href","src","width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{get:function(elem){var ret=elem.getAttribute(name,2);
return ret===null?undefined:ret
}})
})
}if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText.toLowerCase()||undefined
},set:function(elem,value){return(elem.style.cssText=""+value)
}}
}if(!jQuery.support.optSelected){jQuery.propHooks.selected=jQuery.extend(jQuery.propHooks.selected,{get:function(elem){var parent=elem.parentNode;
if(parent){parent.selectedIndex;
if(parent.parentNode){parent.parentNode.selectedIndex
}}return null
}})
}if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding"
}if(!jQuery.support.checkOn){jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={get:function(elem){return elem.getAttribute("value")===null?"on":elem.value
}}
})
}jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]=jQuery.extend(jQuery.valHooks[this],{set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0)
}}})
});
var rnamespaces=/\.(.*)$/,rformElems=/^(?:textarea|input|select)$/i,rperiod=/\./g,rspaces=/ /g,rescape=/[^\w\s.|`]/g,rtypenamespace=/^([^\.]*)?(?:\.(.+))?$/,rhoverHack=/\bhover(\.\S+)?/,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rquickIs=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,quickParse=function(selector){var quick=rquickIs.exec(selector);
if(quick){quick[1]=(quick[1]||"").toLowerCase();
quick[3]=quick[3]&&new RegExp("(?:^|\\s)"+quick[3]+"(?:\\s|$)")
}return quick
},quickIs=function(elem,m){return((!m[1]||elem.nodeName.toLowerCase()===m[1])&&(!m[2]||elem.id===m[2])&&(!m[3]||m[3].test(elem.className)))
},hoverHack=function(events){return jQuery.event.special.hover?events:events.replace(rhoverHack,"mouseenter$1 mouseleave$1")
};
jQuery.event={add:function(elem,types,handler,data,selector){var elemData,eventHandle,events,t,tns,type,namespaces,handleObj,handleObjIn,quick,handlers,special;
if(elem.nodeType===3||elem.nodeType===8||!types||!handler||!(elemData=jQuery._data(elem))){return 
}if(handler.handler){handleObjIn=handler;
handler=handleObjIn.handler
}if(!handler.guid){handler.guid=jQuery.guid++
}events=elemData.events;
if(!events){elemData.events=events={}
}eventHandle=elemData.handle;
if(!eventHandle){elemData.handle=eventHandle=function(e){return typeof jQuery!=="undefined"&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined
};
eventHandle.elem=elem
}types=hoverHack(types).split(" ");
for(t=0;
t<types.length;
t++){tns=rtypenamespace.exec(types[t])||[];
type=tns[1];
namespaces=(tns[2]||"").split(".").sort();
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=jQuery.event.special[type]||{};
handleObj=jQuery.extend({type:type,origType:tns[1],data:data,handler:handler,guid:handler.guid,selector:selector,namespace:namespaces.join(".")},handleObjIn);
if(selector){handleObj.quick=quickParse(selector);
if(!handleObj.quick&&jQuery.expr.match.POS.test(selector)){handleObj.isPositional=true
}}handlers=events[type];
if(!handlers){handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false)
}else{if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle)
}}}}if(special.add){special.add.call(elem,handleObj);
if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid
}}if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)
}else{handlers.push(handleObj)
}jQuery.event.global[type]=true
}elem=null
},global:{},remove:function(elem,types,handler,selector){var elemData=jQuery.hasData(elem)&&jQuery._data(elem),t,tns,type,namespaces,origCount,j,events,special,handle,eventType,handleObj;
if(!elemData||!(events=elemData.events)){return 
}types=hoverHack(types||"").split(" ");
for(t=0;
t<types.length;
t++){tns=rtypenamespace.exec(types[t])||[];
type=tns[1];
namespaces=tns[2];
if(!type){namespaces=namespaces?"."+namespaces:"";
for(j in events){jQuery.event.remove(elem,j+namespaces,handler,selector)
}return 
}special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
eventType=events[type]||[];
origCount=eventType.length;
namespaces=namespaces?new RegExp("(^|\\.)"+namespaces.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
if(handler||namespaces||selector||special.remove){for(j=0;
j<eventType.length;
j++){handleObj=eventType[j];
if(!handler||handler.guid===handleObj.guid){if(!namespaces||namespaces.test(handleObj.namespace)){if(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector){eventType.splice(j--,1);
if(handleObj.selector){eventType.delegateCount--
}if(special.remove){special.remove.call(elem,handleObj)
}}}}}}else{eventType.length=0
}if(eventType.length===0&&origCount!==eventType.length){if(!special.teardown||special.teardown.call(elem,namespaces)===false){jQuery.removeEvent(elem,type,elemData.handle)
}delete events[type]
}}if(jQuery.isEmptyObject(events)){handle=elemData.handle;
if(handle){handle.elem=null
}jQuery.removeData(elem,["events","handle"],true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(event,data,elem,onlyHandlers){if(elem&&(elem.nodeType===3||elem.nodeType===8)){return 
}var type=event.type||event,namespaces=[],cache,exclusive,i,cur,old,ontype,special,handle,eventPath,bubbleType;
if(type.indexOf("!")>=0){type=type.slice(0,-1);
exclusive=true
}if(type.indexOf(".")>=0){namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort()
}if((!elem||jQuery.event.customEvent[type])&&!jQuery.event.global[type]){return 
}event=typeof event==="object"?event[jQuery.expando]?event:new jQuery.Event(type,event):new jQuery.Event(type);
event.type=type;
event.isTrigger=true;
event.exclusive=exclusive;
event.namespace=namespaces.join(".");
event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
ontype=type.indexOf(":")<0?"on"+type:"";
if(onlyHandlers||!elem){event.preventDefault()
}if(!elem){cache=jQuery.cache;
for(i in cache){if(cache[i].events&&cache[i].events[type]){jQuery.event.trigger(event,data,cache[i].handle.elem,true)
}}return 
}event.result=undefined;
if(!event.target){event.target=elem
}data=data!=null?jQuery.makeArray(data):[];
data.unshift(event);
special=jQuery.event.special[type]||{};
if(special.trigger&&special.trigger.apply(elem,data)===false){return 
}eventPath=[[elem,special.bindType||type]];
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;
old=null;
for(cur=elem.parentNode;
cur;
cur=cur.parentNode){eventPath.push([cur,bubbleType]);
old=cur
}if(old&&old===elem.ownerDocument){eventPath.push([old.defaultView||old.parentWindow||window,bubbleType])
}}for(i=0;
i<eventPath.length;
i++){cur=eventPath[i][0];
event.type=eventPath[i][1];
handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");
if(handle){handle.apply(cur,data)
}handle=ontype&&cur[ontype];
if(handle&&jQuery.acceptData(cur)){handle.apply(cur,data)
}if(event.isPropagationStopped()){break
}}event.type=type;
if(!event.isDefaultPrevented()){if((!special._default||special._default.apply(elem.ownerDocument,data)===false)&&!(type==="click"&&jQuery.nodeName(elem,"a"))&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&((type!=="focus"&&type!=="blur")||event.target.offsetWidth!==0)&&!jQuery.isWindow(elem)){old=elem[ontype];
if(old){elem[ontype]=null
}jQuery.event.triggered=type;
elem[type]();
jQuery.event.triggered=undefined;
if(old){elem[ontype]=old
}}}}return event.result
},dispatch:function(event){event=jQuery.event.fix(event||window.event);
var handlers=((jQuery._data(this,"events")||{})[event.type]||[]),delegateCount=handlers.delegateCount,args=[].slice.call(arguments,0),run_all=!event.exclusive&&!event.namespace,specialHandle=(jQuery.event.special[event.type]||{}).handle,handlerQueue=[],i,j,cur,ret,selMatch,matched,matches,handleObj,sel,hit,related;
args[0]=event;
event.delegateTarget=this;
if(delegateCount&&!event.target.disabled&&!(event.button&&event.type==="click")){for(cur=event.target;
cur!=this;
cur=cur.parentNode||this){selMatch={};
matches=[];
for(i=0;
i<delegateCount;
i++){handleObj=handlers[i];
sel=handleObj.selector;
hit=selMatch[sel];
if(handleObj.isPositional){hit=(hit||(selMatch[sel]=jQuery(sel))).index(cur)>=0
}else{if(hit===undefined){hit=selMatch[sel]=(handleObj.quick?quickIs(cur,handleObj.quick):jQuery(cur).is(sel))
}}if(hit){matches.push(handleObj)
}}if(matches.length){handlerQueue.push({elem:cur,matches:matches})
}}}if(handlers.length>delegateCount){handlerQueue.push({elem:this,matches:handlers.slice(delegateCount)})
}for(i=0;
i<handlerQueue.length&&!event.isPropagationStopped();
i++){matched=handlerQueue[i];
event.currentTarget=matched.elem;
for(j=0;
j<matched.matches.length&&!event.isImmediatePropagationStopped();
j++){handleObj=matched.matches[j];
if(run_all||(!event.namespace&&!handleObj.namespace)||event.namespace_re&&event.namespace_re.test(handleObj.namespace)){event.data=handleObj.data;
event.handleObj=handleObj;
ret=(specialHandle||handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){event.result=ret;
if(ret===false){event.preventDefault();
event.stopPropagation()
}}}}}return event.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode
}return event
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button,fromElement=original.fromElement;
if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;
doc=eventDoc.documentElement;
body=eventDoc.body;
event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);
event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)
}if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement
}if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)))
}return event
}},fix:function(event){if(event[jQuery.expando]){return event
}var i,prop,originalEvent=event,fixHook=jQuery.event.fixHooks[event.type]||{},copy=fixHook.props?this.props.concat(fixHook.props):this.props;
event=jQuery.Event(originalEvent);
for(i=copy.length;
i;
){prop=copy[--i];
event[prop]=originalEvent[prop]
}if(!event.target){event.target=originalEvent.srcElement||document
}if(event.target.nodeType===3){event.target=event.target.parentNode
}if(event.metaKey===undefined){event.metaKey=event.ctrlKey
}return fixHook.filter?fixHook.filter(event,originalEvent):event
},special:{ready:{setup:jQuery.bindReady},focus:{delegateType:"focusin",noBubble:true},blur:{delegateType:"focusout",noBubble:true},beforeunload:{setup:function(data,namespaces,eventHandle){if(jQuery.isWindow(this)){this.onbeforeunload=eventHandle
}},teardown:function(namespaces,eventHandle){if(this.onbeforeunload===eventHandle){this.onbeforeunload=null
}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});
if(bubble){jQuery.event.trigger(e,null,elem)
}else{jQuery.event.dispatch.call(elem,e)
}if(e.isDefaultPrevented()){event.preventDefault()
}}};
jQuery.event.handle=jQuery.event.dispatch;
jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false)
}}:function(elem,type,handle){if(elem.detachEvent){elem.detachEvent("on"+type,handle)
}};
jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)
}if(src&&src.type){this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse
}else{this.type=src
}if(props){jQuery.extend(this,props)
}this.timeStamp=src&&src.timeStamp||jQuery.now();
this[jQuery.expando]=true
};
function returnFalse(){return false
}function returnTrue(){return true
}jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;
var e=this.originalEvent;
if(!e){return 
}if(e.preventDefault){e.preventDefault()
}else{e.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=returnTrue;
var e=this.originalEvent;
if(!e){return 
}if(e.stopPropagation){e.stopPropagation()
}e.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;
this.stopPropagation()
},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]=jQuery.event.special[fix]={delegateType:fix,bindType:fix,handle:function(event){var target=this,related=event.relatedTarget,handleObj=event.handleObj,selector=handleObj.selector,oldType,ret;
if(!related||handleObj.origType===event.type||(related!==target&&!jQuery.contains(target,related))){oldType=event.type;
event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=oldType
}return ret
}}
});
if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false
}jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;
if(form&&!form._submit_attached){jQuery.event.add(form,"submit._submit",function(event){if(this.parentNode){jQuery.event.simulate("submit",this.parentNode,event,true)
}});
form._submit_attached=true
}})
},teardown:function(){if(jQuery.nodeName(this,"form")){return false
}jQuery.event.remove(this,"._submit")
}}
}if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true
}});
jQuery.event.add(this,"click._change",function(event){if(this._just_changed){this._just_changed=false;
jQuery.event.simulate("change",this,event,true)
}})
}return false
}jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;
if(rformElems.test(elem.nodeName)&&!elem._change_attached){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated){jQuery.event.simulate("change",this.parentNode,event,true)
}});
elem._change_attached=true
}})
},handle:function(event){var elem=event.target;
if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments)
}},teardown:function(){jQuery.event.remove(this,"._change");
return rformElems.test(this.nodeName)
}}
}if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true)
};
jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true)
}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true)
}}}
})
}jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type;
if(typeof types==="object"){if(typeof selector!=="string"){data=selector;
selector=undefined
}for(type in types){this.on(type,selector,data,types[type],one)
}return this
}if(data==null&&fn==null){fn=selector;
data=selector=undefined
}else{if(fn==null){if(typeof selector==="string"){fn=data;
data=undefined
}else{fn=data;
data=selector;
selector=undefined
}}}if(fn===false){fn=returnFalse
}else{if(!fn){return this
}}if(one===1){origFn=fn;
fn=function(event){jQuery().off(event);
return origFn.apply(this,arguments)
};
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)
}return this.each(function(){jQuery.event.add(this,types,fn,data,selector)
})
},one:function(types,selector,data,fn){return this.on.call(this,types,selector,data,fn,1)
},off:function(types,selector,fn){if(types&&types.preventDefault&&types.handleObj){var handleObj=types.handleObj;
jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.type+"."+handleObj.namespace:handleObj.type,handleObj.selector,handleObj.handler);
return this
}if(typeof types==="object"){for(var type in types){this.off(type,selector,types[type])
}return this
}if(selector===false||typeof selector==="function"){fn=selector;
selector=undefined
}if(fn===false){fn=returnFalse
}return this.each(function(){jQuery.event.remove(this,types,fn,selector)
})
},bind:function(types,data,fn){return this.on(types,null,data,fn)
},unbind:function(types,fn){return this.off(types,null,fn)
},live:function(types,data,fn){jQuery(this.context).on(types,this.selector,data,fn);
return this
},die:function(types,fn){jQuery(this.context).off(types,this.selector||"**",fn);
return this
},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)
},undelegate:function(selector,types,fn){return arguments.length==1?this.off(selector,"**"):this.off(types,selector,fn)
},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)
})
},triggerHandler:function(type,data){if(this[0]){return jQuery.event.trigger(type,data,this[0],true)
}},toggle:function(fn){var args=arguments,guid=fn.guid||jQuery.guid++,i=0,toggler=function(event){var lastToggle=(jQuery._data(this,"lastToggle"+fn.guid)||0)%i;
jQuery._data(this,"lastToggle"+fn.guid,lastToggle+1);
event.preventDefault();
return args[lastToggle].apply(this,arguments)||false
};
toggler.guid=guid;
while(i<args.length){args[i++].guid=guid
}return this.click(toggler)
},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)
}});
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){if(fn==null){fn=data;
data=null
}return arguments.length>0?this.bind(name,data,fn):this.trigger(name)
};
if(jQuery.attrFn){jQuery.attrFn[name]=true
}if(rkeyEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.keyHooks
}if(rmouseEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.mouseHooks
}});
/*
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,expando="sizcache"+(Math.random()+"").replace(".",""),done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true,rBackslash=/\\/g,rReturn=/\r\n/g,rNonWord=/\W/;
[0,0].sort(function(){baseHasDuplicate=false;
return 0
});
var Sizzle=function(selector,context,results,seed){results=results||[];
context=context||document;
var origContext=context;
if(context.nodeType!==1&&context.nodeType!==9){return[]
}if(!selector||typeof selector!=="string"){return results
}var m,set,checkSet,extra,ret,cur,pop,i,prune=true,contextXML=Sizzle.isXML(context),parts=[],soFar=selector;
do{chunker.exec("");
m=chunker.exec(soFar);
if(m){soFar=m[3];
parts.push(m[1]);
if(m[2]){extra=m[3];
break
}}}while(m);
if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context,seed)
}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);
while(parts.length){selector=parts.shift();
if(Expr.relative[selector]){selector+=parts.shift()
}set=posProcess(selector,set,seed)
}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){ret=Sizzle.find(parts.shift(),context,contextXML);
context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0]
}if(context){ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);
set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;
if(parts.length>0){checkSet=makeArray(set)
}else{prune=false
}while(parts.length){cur=parts.pop();
pop=cur;
if(!Expr.relative[cur]){cur=""
}else{pop=parts.pop()
}if(pop==null){pop=context
}Expr.relative[cur](checkSet,pop,contextXML)
}}else{checkSet=parts=[]
}}if(!checkSet){checkSet=set
}if(!checkSet){Sizzle.error(cur||selector)
}if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet)
}else{if(context&&context.nodeType===1){for(i=0;
checkSet[i]!=null;
i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&Sizzle.contains(context,checkSet[i]))){results.push(set[i])
}}}else{for(i=0;
checkSet[i]!=null;
i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i])
}}}}}else{makeArray(checkSet,results)
}if(extra){Sizzle(extra,origContext,results,seed);
Sizzle.uniqueSort(results)
}return results
};
Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;
results.sort(sortOrder);
if(hasDuplicate){for(var i=1;
i<results.length;
i++){if(results[i]===results[i-1]){results.splice(i--,1)
}}}}return results
};
Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set)
};
Sizzle.matchesSelector=function(node,expr){return Sizzle(expr,null,null,[node]).length>0
};
Sizzle.find=function(expr,context,isXML){var set,i,len,match,type,left;
if(!expr){return[]
}for(i=0,len=Expr.order.length;
i<len;
i++){type=Expr.order[i];
if((match=Expr.leftMatch[type].exec(expr))){left=match[1];
match.splice(1,1);
if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(rBackslash,"");
set=Expr.find[type](match,context,isXML);
if(set!=null){expr=expr.replace(Expr.match[type],"");
break
}}}}if(!set){set=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName("*"):[]
}return{set:set,expr:expr}
};
Sizzle.filter=function(expr,set,inplace,not){var match,anyFound,type,found,item,filter,left,i,pass,old=expr,result=[],curLoop=set,isXMLFilter=set&&set[0]&&Sizzle.isXML(set[0]);
while(expr&&set.length){for(type in Expr.filter){if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){filter=Expr.filter[type];
left=match[1];
anyFound=false;
match.splice(1,1);
if(left.substr(left.length-1)==="\\"){continue
}if(curLoop===result){result=[]
}if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);
if(!match){anyFound=found=true
}else{if(match===true){continue
}}}if(match){for(i=0;
(item=curLoop[i])!=null;
i++){if(item){found=filter(item,match,i,curLoop);
pass=not^found;
if(inplace&&found!=null){if(pass){anyFound=true
}else{curLoop[i]=false
}}else{if(pass){result.push(item);
anyFound=true
}}}}}if(found!==undefined){if(!inplace){curLoop=result
}expr=expr.replace(Expr.match[type],"");
if(!anyFound){return[]
}break
}}}if(expr===old){if(anyFound==null){Sizzle.error(expr)
}else{break
}}old=expr
}return curLoop
};
Sizzle.error=function(msg){throw"Syntax error, unrecognized expression: "+msg
};
var getText=Sizzle.getText=function(elem){var i,node,nodeType=elem.nodeType,ret="";
if(nodeType){if(nodeType===1){if(typeof elem.textContent==="string"){return elem.textContent
}else{if(typeof elem.innerText==="string"){return elem.innerText.replace(rReturn,"")
}else{for(elem=elem.firstChild;
elem;
elem=elem.nextSibling){ret+=getText(elem)
}}}}else{if(nodeType===3||nodeType===4){return elem.nodeValue
}}}else{for(i=0;
(node=elem[i]);
i++){if(node.nodeType!==8){ret+=getText(node)
}}}return ret
};
var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href")
},type:function(elem){return elem.getAttribute("type")
}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!rNonWord.test(part),isPartStrNotTag=isPartStr&&!isTag;
if(isTag){part=part.toLowerCase()
}for(var i=0,l=checkSet.length,elem;
i<l;
i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part
}}if(isPartStrNotTag){Sizzle.filter(part,checkSet,true)
}},">":function(checkSet,part){var elem,isPartStr=typeof part==="string",i=0,l=checkSet.length;
if(isPartStr&&!rNonWord.test(part)){part=part.toLowerCase();
for(;
i<l;
i++){elem=checkSet[i];
if(elem){var parent=elem.parentNode;
checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false
}}}else{for(;
i<l;
i++){elem=checkSet[i];
if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part
}}if(isPartStr){Sizzle.filter(part,checkSet,true)
}}},"":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;
if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();
nodeCheck=part;
checkFn=dirNodeCheck
}checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML)
},"~":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;
if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();
nodeCheck=part;
checkFn=dirNodeCheck
}checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML)
}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);
return m&&m.parentNode?[m]:[]
}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);
for(var i=0,l=results.length;
i<l;
i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i])
}}return ret.length===0?null:ret
}},TAG:function(match,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(match[1])
}}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(rBackslash,"")+" ";
if(isXML){return match
}for(var i=0,elem;
(elem=curLoop[i])!=null;
i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n\r]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem)
}}else{if(inplace){curLoop[i]=false
}}}}return false
},ID:function(match){return match[1].replace(rBackslash,"")
},TAG:function(match,curLoop){return match[1].replace(rBackslash,"").toLowerCase()
},CHILD:function(match){if(match[1]==="nth"){if(!match[2]){Sizzle.error(match[0])
}match[2]=match[2].replace(/^\+|\s*/g,"");
var test=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);
match[2]=(test[1]+(test[2]||1))-0;
match[3]=test[3]-0
}else{if(match[2]){Sizzle.error(match[0])
}}match[0]=done++;
return match
},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1]=match[1].replace(rBackslash,"");
if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name]
}match[4]=(match[4]||match[5]||"").replace(rBackslash,"");
if(match[2]==="~="){match[4]=" "+match[4]+" "
}return match
},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop)
}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);
if(!inplace){result.push.apply(result,ret)
}return false
}}else{if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true
}}return match
},POS:function(match){match.unshift(true);
return match
}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden"
},disabled:function(elem){return elem.disabled===true
},checked:function(elem){return elem.checked===true
},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex
}return elem.selected===true
},parent:function(elem){return !!elem.firstChild
},empty:function(elem){return !elem.firstChild
},has:function(elem,i,match){return !!Sizzle(match[3],elem).length
},header:function(elem){return(/h\d/i).test(elem.nodeName)
},text:function(elem){var attr=elem.getAttribute("type"),type=elem.type;
return elem.nodeName.toLowerCase()==="input"&&"text"===type&&(attr===type||attr===null)
},radio:function(elem){return elem.nodeName.toLowerCase()==="input"&&"radio"===elem.type
},checkbox:function(elem){return elem.nodeName.toLowerCase()==="input"&&"checkbox"===elem.type
},file:function(elem){return elem.nodeName.toLowerCase()==="input"&&"file"===elem.type
},password:function(elem){return elem.nodeName.toLowerCase()==="input"&&"password"===elem.type
},submit:function(elem){var name=elem.nodeName.toLowerCase();
return(name==="input"||name==="button")&&"submit"===elem.type
},image:function(elem){return elem.nodeName.toLowerCase()==="input"&&"image"===elem.type
},reset:function(elem){var name=elem.nodeName.toLowerCase();
return(name==="input"||name==="button")&&"reset"===elem.type
},button:function(elem){var name=elem.nodeName.toLowerCase();
return name==="input"&&"button"===elem.type||name==="button"
},input:function(elem){return(/input|select|textarea|button/i).test(elem.nodeName)
},focus:function(elem){return elem===elem.ownerDocument.activeElement
}},setFilters:{first:function(elem,i){return i===0
},last:function(elem,i,match,array){return i===array.length-1
},even:function(elem,i){return i%2===0
},odd:function(elem,i){return i%2===1
},lt:function(elem,i,match){return i<match[3]-0
},gt:function(elem,i,match){return i>match[3]-0
},nth:function(elem,i,match){return match[3]-0===i
},eq:function(elem,i,match){return match[3]-0===i
}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];
if(filter){return filter(elem,i,match,array)
}else{if(name==="contains"){return(elem.textContent||elem.innerText||getText([elem])||"").indexOf(match[3])>=0
}else{if(name==="not"){var not=match[3];
for(var j=0,l=not.length;
j<l;
j++){if(not[j]===elem){return false
}}return true
}else{Sizzle.error(name)
}}}},CHILD:function(elem,match){var first,last,doneName,parent,cache,count,diff,type=match[1],node=elem;
switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false
}}if(type==="first"){return true
}node=elem;
case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false
}}return true;
case"nth":first=match[2];
last=match[3];
if(first===1&&last===0){return true
}doneName=match[0];
parent=elem.parentNode;
if(parent&&(parent[expando]!==doneName||!elem.nodeIndex)){count=0;
for(node=parent.firstChild;
node;
node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count
}}parent[expando]=doneName
}diff=elem.nodeIndex-last;
if(first===0){return diff===0
}else{return(diff%first===0&&diff/first>=0)
}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match
},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||!!elem.nodeName&&elem.nodeName.toLowerCase()===match
},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1
},ATTR:function(elem,match){var name=match[1],result=Sizzle.attr?Sizzle.attr(elem,name):Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];
return result==null?type==="!=":!type&&Sizzle.attr?result!=null:type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false
},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];
if(filter){return filter(elem,i,match,array)
}}}};
var origPOS=Expr.match.POS,fescape=function(all,num){return"\\"+(num-0+1)
};
for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape))
}var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);
if(results){results.push.apply(results,array);
return results
}return array
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType
}catch(e){makeArray=function(array,results){var i=0,ret=results||[];
if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array)
}else{if(typeof array.length==="number"){for(var l=array.length;
i<l;
i++){ret.push(array[i])
}}else{for(;
array[i];
i++){ret.push(array[i])
}}}return ret
}
}var sortOrder,siblingCheck;
if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(a===b){hasDuplicate=true;
return 0
}if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1
}return a.compareDocumentPosition(b)&4?-1:1
}
}else{sortOrder=function(a,b){if(a===b){hasDuplicate=true;
return 0
}else{if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex
}}var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;
if(aup===bup){return siblingCheck(a,b)
}else{if(!aup){return -1
}else{if(!bup){return 1
}}}while(cur){ap.unshift(cur);
cur=cur.parentNode
}cur=bup;
while(cur){bp.unshift(cur);
cur=cur.parentNode
}al=ap.length;
bl=bp.length;
for(var i=0;
i<al&&i<bl;
i++){if(ap[i]!==bp[i]){return siblingCheck(ap[i],bp[i])
}}return i===al?siblingCheck(a,bp[i],-1):siblingCheck(ap[i],b,1)
};
siblingCheck=function(a,b,ret){if(a===b){return ret
}var cur=a.nextSibling;
while(cur){if(cur===b){return -1
}cur=cur.nextSibling
}return 1
}
}(function(){var form=document.createElement("div"),id="script"+(new Date()).getTime(),root=document.documentElement;
form.innerHTML="<a name='"+id+"'/>";
root.insertBefore(form,root.firstChild);
if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);
return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[]
}};
Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return elem.nodeType===1&&node&&node.nodeValue===match
}
}root.removeChild(form);
root=form=null
})();
(function(){var div=document.createElement("div");
div.appendChild(document.createComment(""));
if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);
if(match[1]==="*"){var tmp=[];
for(var i=0;
results[i];
i++){if(results[i].nodeType===1){tmp.push(results[i])
}}results=tmp
}return results
}
}div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2)
}
}div=null
})();
if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div"),id="__sizzle__";
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return 
}Sizzle=function(query,context,extra,seed){context=context||document;
if(!seed&&!Sizzle.isXML(context)){var match=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(query);
if(match&&(context.nodeType===1||context.nodeType===9)){if(match[1]){return makeArray(context.getElementsByTagName(query),extra)
}else{if(match[2]&&Expr.find.CLASS&&context.getElementsByClassName){return makeArray(context.getElementsByClassName(match[2]),extra)
}}}if(context.nodeType===9){if(query==="body"&&context.body){return makeArray([context.body],extra)
}else{if(match&&match[3]){var elem=context.getElementById(match[3]);
if(elem&&elem.parentNode){if(elem.id===match[3]){return makeArray([elem],extra)
}}else{return makeArray([],extra)
}}}try{return makeArray(context.querySelectorAll(query),extra)
}catch(qsaError){}}else{if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){var oldContext=context,old=context.getAttribute("id"),nid=old||id,hasParent=context.parentNode,relativeHierarchySelector=/^\s*[+~]/.test(query);
if(!old){context.setAttribute("id",nid)
}else{nid=nid.replace(/'/g,"\\$&")
}if(relativeHierarchySelector&&hasParent){context=context.parentNode
}try{if(!relativeHierarchySelector||hasParent){return makeArray(context.querySelectorAll("[id='"+nid+"'] "+query),extra)
}}catch(pseudoError){}finally{if(!old){oldContext.removeAttribute("id")
}}}}}return oldSizzle(query,context,extra,seed)
};
for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop]
}div=null
})()
}(function(){var html=document.documentElement,matches=html.matchesSelector||html.mozMatchesSelector||html.webkitMatchesSelector||html.msMatchesSelector;
if(matches){var disconnectedMatch=!matches.call(document.createElement("div"),"div"),pseudoWorks=false;
try{matches.call(document.documentElement,"[test!='']:sizzle")
}catch(pseudoError){pseudoWorks=true
}Sizzle.matchesSelector=function(node,expr){expr=expr.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!Sizzle.isXML(node)){try{if(pseudoWorks||!Expr.match.PSEUDO.test(expr)&&!/!=/.test(expr)){var ret=matches.call(node,expr);
if(ret||!disconnectedMatch||node.document&&node.document.nodeType!==11){return ret
}}}catch(e){}}return Sizzle(expr,null,null,[node]).length>0
}
}})();
(function(){var div=document.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return 
}div.lastChild.className="e";
if(div.getElementsByClassName("e").length===1){return 
}Expr.order.splice(1,0,"CLASS");
Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1])
}};
div=null
})();
function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){var match=false;
elem=elem[dir];
while(elem){if(elem[expando]===doneName){match=checkSet[elem.sizset];
break
}if(elem.nodeType===1&&!isXML){elem[expando]=doneName;
elem.sizset=i
}if(elem.nodeName.toLowerCase()===cur){match=elem;
break
}elem=elem[dir]
}checkSet[i]=match
}}}function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){var match=false;
elem=elem[dir];
while(elem){if(elem[expando]===doneName){match=checkSet[elem.sizset];
break
}if(elem.nodeType===1){if(!isXML){elem[expando]=doneName;
elem.sizset=i
}if(typeof cur!=="string"){if(elem===cur){match=true;
break
}}else{if(Sizzle.filter(cur,[elem]).length>0){match=elem;
break
}}}elem=elem[dir]
}checkSet[i]=match
}}}if(document.documentElement.contains){Sizzle.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true)
}
}else{if(document.documentElement.compareDocumentPosition){Sizzle.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16)
}
}else{Sizzle.contains=function(){return false
}
}}Sizzle.isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false
};
var posProcess=function(selector,context,seed){var match,tmpSet=[],later="",root=context.nodeType?[context]:context;
while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];
selector=selector.replace(Expr.match.PSEUDO,"")
}selector=Expr.relative[selector]?selector+"*":selector;
for(var i=0,l=root.length;
i<l;
i++){Sizzle(selector,root[i],tmpSet,seed)
}return Sizzle.filter(later,tmpSet)
};
Sizzle.attr=jQuery.attr;
Sizzle.selectors.attrMap={};
jQuery.find=Sizzle;
jQuery.expr=Sizzle.selectors;
jQuery.expr[":"]=jQuery.expr.filters;
jQuery.unique=Sizzle.uniqueSort;
jQuery.text=Sizzle.getText;
jQuery.isXMLDoc=Sizzle.isXML;
jQuery.contains=Sizzle.contains
})();
var runtil=/Until$/,rparentsprev=/^(?:parents|prevUntil|prevAll)/,rmultiselector=/,/,isSimple=/^.[^:#\[\.,]*$/,slice=Array.prototype.slice,POS=jQuery.expr.match.POS,guaranteedUnique={children:true,contents:true,next:true,prev:true};
jQuery.fn.extend({find:function(selector){var self=this,i,l;
if(typeof selector!=="string"){return jQuery(selector).filter(function(){for(i=0,l=self.length;
i<l;
i++){if(jQuery.contains(self[i],this)){return true
}}})
}var ret=this.pushStack("","find",selector),length,n,r;
for(i=0,l=this.length;
i<l;
i++){length=ret.length;
jQuery.find(selector,this[i],ret);
if(i>0){for(n=length;
n<ret.length;
n++){for(r=0;
r<length;
r++){if(ret[r]===ret[n]){ret.splice(n--,1);
break
}}}}}return ret
},has:function(target){var targets=jQuery(target);
return this.filter(function(){for(var i=0,l=targets.length;
i<l;
i++){if(jQuery.contains(this,targets[i])){return true
}}})
},not:function(selector){return this.pushStack(winnow(this,selector,false),"not",selector)
},filter:function(selector){return this.pushStack(winnow(this,selector,true),"filter",selector)
},is:function(selector){return !!selector&&(typeof selector==="string"?POS.test(selector)?jQuery(selector,this.context).index(this[0])>=0:jQuery.filter(selector,this).length>0:this.filter(selector).length>0)
},closest:function(selectors,context){var ret=[],i,l,cur=this[0];
if(jQuery.isArray(selectors)){var level=1;
while(cur&&cur.ownerDocument&&cur!==context){for(i=0;
i<selectors.length;
i++){if(jQuery(cur).is(selectors[i])){ret.push({selector:selectors[i],elem:cur,level:level})
}}cur=cur.parentNode;
level++
}return ret
}var pos=POS.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;
for(i=0,l=this.length;
i<l;
i++){cur=this[i];
while(cur){if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){ret.push(cur);
break
}else{cur=cur.parentNode;
if(!cur||!cur.ownerDocument||cur===context||cur.nodeType===11){break
}}}}ret=ret.length>1?jQuery.unique(ret):ret;
return this.pushStack(ret,"closest",selectors)
},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem))
}return jQuery.inArray(elem.jquery?elem[0]:elem,this)
},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);
return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:jQuery.unique(all))
},andSelf:function(){return this.add(this.prevObject)
}});
function isDisconnected(node){return !node||!node.parentNode||node.parentNode.nodeType===11
}jQuery.each({parent:function(elem){var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null
},parents:function(elem){return jQuery.dir(elem,"parentNode")
},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until)
},next:function(elem){return jQuery.nth(elem,2,"nextSibling")
},prev:function(elem){return jQuery.nth(elem,2,"previousSibling")
},nextAll:function(elem){return jQuery.dir(elem,"nextSibling")
},prevAll:function(elem){return jQuery.dir(elem,"previousSibling")
},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until)
},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until)
},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem)
},children:function(elem){return jQuery.sibling(elem.firstChild)
},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes)
}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until),args=slice.call(arguments);
if(!runtil.test(name)){selector=until
}if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret)
}ret=this.length>1&&!guaranteedUnique[name]?jQuery.unique(ret):ret;
if((this.length>1||rmultiselector.test(selector))&&rparentsprev.test(name)){ret=ret.reverse()
}return this.pushStack(ret,name,args.join(","))
}
});
jQuery.extend({filter:function(expr,elems,not){if(not){expr=":not("+expr+")"
}return elems.length===1?jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:jQuery.find.matches(expr,elems)
},dir:function(elem,dir,until){var matched=[],cur=elem[dir];
while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur)
}cur=cur[dir]
}return matched
},nth:function(cur,result,dir,elem){result=result||1;
var num=0;
for(;
cur;
cur=cur[dir]){if(cur.nodeType===1&&++num===result){break
}}return cur
},sibling:function(n,elem){var r=[];
for(;
n;
n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n)
}}return r
}});
function winnow(elements,qualifier,keep){qualifier=qualifier||0;
if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){var retVal=!!qualifier.call(elem,i,elem);
return retVal===keep
})
}else{if(qualifier.nodeType){return jQuery.grep(elements,function(elem,i){return(elem===qualifier)===keep
})
}else{if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1
});
if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep)
}else{qualifier=jQuery.filter(qualifier,filtered)
}}}}return jQuery.grep(elements,function(elem,i){return(jQuery.inArray(elem,qualifier)>=0)===keep
})
}function createSafeFragment(document){var list=nodeNames.split(" "),safeFrag=document.createDocumentFragment();
if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop())
}}return safeFrag
}var nodeNames="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",rinlinejQuery=/ jQuery\d+="(?:\d+|null)"/g,rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style)/i,rnocache=/<(?:script|object|embed|option|style)/i,rnoshimcache=new RegExp("<(?:"+nodeNames.replace(" ","|")+")","i"),rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/\/(java|ecma)script/i,rcleanScript=/^\s*<!(?:\[CDATA\[|\-\-)/,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},safeFragment=createSafeFragment(document);
wrapMap.optgroup=wrapMap.option;
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
if(!jQuery.support.htmlSerialize){wrapMap._default=[1,"div<div>","</div>"]
}jQuery.fn.extend({text:function(text){if(jQuery.isFunction(text)){return this.each(function(i){var self=jQuery(this);
self.text(text.call(this,i,self.text()))
})
}if(typeof text!=="object"&&text!==undefined){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text))
}return jQuery.text(this)
},wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i))
})
}if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){wrap.insertBefore(this[0])
}wrap.map(function(){var elem=this;
while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild
}return elem
}).append(this)
}return this
},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i))
})
}return this.each(function(){var self=jQuery(this),contents=self.contents();
if(contents.length){contents.wrapAll(html)
}else{self.append(html)
}})
},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html)
})
},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.appendChild(elem)
}})
},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.insertBefore(elem,this.firstChild)
}})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this)
})
}else{if(arguments.length){var set=jQuery(arguments[0]);
set.push.apply(set,this.toArray());
return this.pushStack(set,"before",arguments)
}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling)
})
}else{if(arguments.length){var set=this.pushStack(this,"after",arguments);
set.push.apply(set,jQuery(arguments[0]).toArray());
return set
}}},remove:function(selector,keepData){for(var i=0,elem;
(elem=this[i])!=null;
i++){if(!selector||jQuery.filter(selector,[elem]).length){if(!keepData&&elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));
jQuery.cleanData([elem])
}if(elem.parentNode){elem.parentNode.removeChild(elem)
}}}return this
},empty:function(){for(var i=0,elem;
(elem=this[i])!=null;
i++){if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"))
}while(elem.firstChild){elem.removeChild(elem.firstChild)
}}return this
},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;
deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;
return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)
})
},html:function(value){if(value===undefined){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(rinlinejQuery,""):null
}else{if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");
try{for(var i=0,l=this.length;
i<l;
i++){if(this[i].nodeType===1){jQuery.cleanData(this[i].getElementsByTagName("*"));
this[i].innerHTML=value
}}}catch(e){this.empty().append(value)
}}else{if(jQuery.isFunction(value)){this.each(function(i){var self=jQuery(this);
self.html(value.call(this,i,self.html()))
})
}else{this.empty().append(value)
}}}return this
},replaceWith:function(value){if(this[0]&&this[0].parentNode){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this),old=self.html();
self.replaceWith(value.call(this,i,old))
})
}if(typeof value!=="string"){value=jQuery(value).detach()
}return this.each(function(){var next=this.nextSibling,parent=this.parentNode;
jQuery(this).remove();
if(next){jQuery(next).before(value)
}else{jQuery(parent).append(value)
}})
}else{return this.length?this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value):this
}},detach:function(selector){return this.remove(selector,true)
},domManip:function(args,table,callback){var results,first,fragment,parent,value=args[0],scripts=[];
if(!jQuery.support.checkClone&&arguments.length===3&&typeof value==="string"&&rchecked.test(value)){return this.each(function(){jQuery(this).domManip(args,table,callback,true)
})
}if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);
args[0]=value.call(this,i,table?self.html():undefined);
self.domManip(args,table,callback)
})
}if(this[0]){parent=value&&value.parentNode;
if(jQuery.support.parentNode&&parent&&parent.nodeType===11&&parent.childNodes.length===this.length){results={fragment:parent}
}else{results=jQuery.buildFragment(args,this,scripts)
}fragment=results.fragment;
if(fragment.childNodes.length===1){first=fragment=fragment.firstChild
}else{first=fragment.firstChild
}if(first){table=table&&jQuery.nodeName(first,"tr");
for(var i=0,l=this.length,lastIndex=l-1;
i<l;
i++){callback.call(table?root(this[i],first):this[i],results.cacheable||(l>1&&i<lastIndex)?jQuery.clone(fragment,true,true):fragment)
}}if(scripts.length){jQuery.each(scripts,evalScript)
}}return this
}});
function root(elem,cur){return jQuery.nodeName(elem,"table")?(elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody"))):elem
}function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return 
}var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;
if(events){delete curData.handle;
curData.events={};
for(type in events){for(i=0,l=events[type].length;
i<l;
i++){jQuery.event.add(dest,type+(events[type][i].namespace?".":"")+events[type][i].namespace,events[type][i],events[type][i].data)
}}}if(curData.data){curData.data=jQuery.extend({},curData.data)
}}function cloneFixAttributes(src,dest){var nodeName;
if(dest.nodeType!==1){return 
}if(dest.clearAttributes){dest.clearAttributes()
}if(dest.mergeAttributes){dest.mergeAttributes(src)
}nodeName=dest.nodeName.toLowerCase();
if(nodeName==="object"){dest.outerHTML=src.outerHTML
}else{if(nodeName==="input"&&(src.type==="checkbox"||src.type==="radio")){if(src.checked){dest.defaultChecked=dest.checked=src.checked
}if(dest.value!==src.value){dest.value=src.value
}}else{if(nodeName==="option"){dest.selected=src.defaultSelected
}else{if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue
}}}}dest.removeAttribute(jQuery.expando)
}jQuery.buildFragment=function(args,nodes,scripts){var fragment,cacheable,cacheresults,doc,first=args[0];
if(nodes&&nodes[0]){doc=nodes[0].ownerDocument||nodes[0]
}if(!doc.createDocumentFragment){doc=document
}if(args.length===1&&typeof first==="string"&&first.length<512&&doc===document&&first.charAt(0)==="<"&&!rnocache.test(first)&&(jQuery.support.checkClone||!rchecked.test(first))&&(!jQuery.support.unknownElems&&rnoshimcache.test(first))){cacheable=true;
cacheresults=jQuery.fragments[first];
if(cacheresults&&cacheresults!==1){fragment=cacheresults
}}if(!fragment){fragment=doc.createDocumentFragment();
jQuery.clean(args,doc,fragment,scripts)
}if(cacheable){jQuery.fragments[first]=cacheresults?fragment:1
}return{fragment:fragment,cacheable:cacheable}
};
jQuery.fragments={};
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector),parent=this.length===1&&this[0].parentNode;
if(parent&&parent.nodeType===11&&parent.childNodes.length===1&&insert.length===1){insert[original](this[0]);
return this
}else{for(var i=0,l=insert.length;
i<l;
i++){var elems=(i>0?this.clone(true):this).get();
jQuery(insert[i])[original](elems);
ret=ret.concat(elems)
}return this.pushStack(ret,name,insert.selector)
}}
});
function getAll(elem){if(typeof elem.getElementsByTagName!=="undefined"){return elem.getElementsByTagName("*")
}else{if(typeof elem.querySelectorAll!=="undefined"){return elem.querySelectorAll("*")
}else{return[]
}}}function fixDefaultChecked(elem){if(elem.type==="checkbox"||elem.type==="radio"){elem.defaultChecked=elem.checked
}}function findInputs(elem){var nodeName=(elem.nodeName||"").toLowerCase();
if(nodeName==="input"){fixDefaultChecked(elem)
}else{if(nodeName!=="script"&&typeof elem.getElementsByTagName!=="undefined"){jQuery.grep(elem.getElementsByTagName("input"),fixDefaultChecked)
}}}jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var clone=elem.cloneNode(true),srcElements,destElements,i;
if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){cloneFixAttributes(elem,clone);
srcElements=getAll(elem);
destElements=getAll(clone);
for(i=0;
srcElements[i];
++i){if(destElements[i]){cloneFixAttributes(srcElements[i],destElements[i])
}}}if(dataAndEvents){cloneCopyEvent(elem,clone);
if(deepDataAndEvents){srcElements=getAll(elem);
destElements=getAll(clone);
for(i=0;
srcElements[i];
++i){cloneCopyEvent(srcElements[i],destElements[i])
}}}srcElements=destElements=null;
return clone
},clean:function(elems,context,fragment,scripts){var checkScriptType;
context=context||document;
if(typeof context.createElement==="undefined"){context=context.ownerDocument||context[0]&&context[0].ownerDocument||document
}var ret=[],j;
for(var i=0,elem;
(elem=elems[i])!=null;
i++){if(typeof elem==="number"){elem+=""
}if(!elem){continue
}if(typeof elem==="string"){if(!rhtml.test(elem)){elem=context.createTextNode(elem)
}else{elem=elem.replace(rxhtmlTag,"<$1></$2>");
var tag=(rtagName.exec(elem)||["",""])[1].toLowerCase(),wrap=wrapMap[tag]||wrapMap._default,depth=wrap[0],div=context.createElement("div");
if(context===document){safeFragment.appendChild(div)
}else{createSafeFragment(context).appendChild(div)
}div.innerHTML=wrap[1]+elem+wrap[2];
while(depth--){div=div.lastChild
}if(!jQuery.support.tbody){var hasBody=rtbody.test(elem),tbody=tag==="table"&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]==="<table>"&&!hasBody?div.childNodes:[];
for(j=tbody.length-1;
j>=0;
--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j])
}}}if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild)
}elem=div.childNodes
}}var len;
if(!jQuery.support.appendChecked){if(elem[0]&&typeof (len=elem.length)==="number"){for(j=0;
j<len;
j++){findInputs(elem[j])
}}else{findInputs(elem)
}}if(elem.nodeType){ret.push(elem)
}else{ret=jQuery.merge(ret,elem)
}}if(fragment){checkScriptType=function(elem){return !elem.type||rscriptType.test(elem.type)
};
for(i=0;
ret[i];
i++){if(scripts&&jQuery.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){scripts.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i])
}else{if(ret[i].nodeType===1){var jsTags=jQuery.grep(ret[i].getElementsByTagName("script"),checkScriptType);
ret.splice.apply(ret,[i+1,0].concat(jsTags))
}fragment.appendChild(ret[i])
}}}return ret
},cleanData:function(elems){var data,id,cache=jQuery.cache,special=jQuery.event.special,deleteExpando=jQuery.support.deleteExpando;
for(var i=0,elem;
(elem=elems[i])!=null;
i++){if(elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]){continue
}id=elem[jQuery.expando];
if(id){data=cache[id];
if(data&&data.events){for(var type in data.events){if(special[type]){jQuery.event.remove(elem,type)
}else{jQuery.removeEvent(elem,type,data.handle)
}}if(data.handle){data.handle.elem=null
}}if(deleteExpando){delete elem[jQuery.expando]
}else{if(elem.removeAttribute){elem.removeAttribute(jQuery.expando)
}}delete cache[id]
}}}});
function evalScript(i,elem){if(elem.src){jQuery.ajax({url:elem.src,async:false,dataType:"script"})
}else{jQuery.globalEval((elem.text||elem.textContent||elem.innerHTML||"").replace(rcleanScript,"/*$0*/"))
}if(elem.parentNode){elem.parentNode.removeChild(elem)
}}var ralpha=/alpha\([^)]*\)/i,ropacity=/opacity=([^)]*)/,rupper=/([A-Z]|^ms)/g,rnumpx=/^-?\d+(?:px)?$/i,rnum=/^-?\d/,rrelNum=/^([\-+])=([\-+.\de]+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssWidth=["Left","Right"],cssHeight=["Top","Bottom"],curCSS,getComputedStyle,currentStyle;
jQuery.fn.css=function(name,value){if(arguments.length===2&&value===undefined){return this
}return jQuery.access(this,name,value,true,function(elem,name,value){return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)
})
};
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity","opacity");
return ret===""?"1":ret
}else{return elem.style.opacity
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return 
}var ret,type,origName=jQuery.camelCase(name),style=elem.style,hooks=jQuery.cssHooks[origName];
name=jQuery.cssProps[origName]||origName;
if(value!==undefined){type=typeof value;
if(type==="string"&&(ret=rrelNum.exec(value))){value=(+(ret[1]+1)*+ret[2])+parseFloat(jQuery.css(elem,name));
type="number"
}if(value==null||type==="number"&&isNaN(value)){return 
}if(type==="number"&&!jQuery.cssNumber[origName]){value+="px"
}if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value))!==undefined){try{style[name]=value
}catch(e){}}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret
}return style[name]
}},css:function(elem,name,extra){var ret,hooks;
name=jQuery.camelCase(name);
hooks=jQuery.cssHooks[name];
name=jQuery.cssProps[name]||name;
if(name==="cssFloat"){name="float"
}if(hooks&&"get" in hooks&&(ret=hooks.get(elem,true,extra))!==undefined){return ret
}else{if(curCSS){return curCSS(elem,name)
}}},swap:function(elem,options,callback){var old={};
for(var name in options){old[name]=elem.style[name];
elem.style[name]=options[name]
}callback.call(elem);
for(name in options){elem.style[name]=old[name]
}}});
jQuery.curCSS=jQuery.css;
jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){var val;
if(computed){if(elem.offsetWidth!==0){return getWH(elem,name,extra)
}else{jQuery.swap(elem,cssShow,function(){val=getWH(elem,name,extra)
})
}return val
}},set:function(elem,value){if(rnumpx.test(value)){value=parseFloat(value);
if(value>=0){return value+"px"
}}else{return value
}}}
});
if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":computed?"1":""
},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";
style.zoom=1;
if(value>=1&&jQuery.trim(filter.replace(ralpha,""))===""){style.removeAttribute("filter");
if(currentStyle&&!currentStyle.filter){return 
}}style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity
}}
}jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){var ret;
jQuery.swap(elem,{display:"inline-block"},function(){if(computed){ret=curCSS(elem,"margin-right","marginRight")
}else{ret=elem.style.marginRight
}});
return ret
}}
}});
if(document.defaultView&&document.defaultView.getComputedStyle){getComputedStyle=function(elem,name){var ret,defaultView,computedStyle;
name=name.replace(rupper,"-$1").toLowerCase();
if(!(defaultView=elem.ownerDocument.defaultView)){return undefined
}if((computedStyle=defaultView.getComputedStyle(elem,null))){ret=computedStyle.getPropertyValue(name);
if(ret===""&&!jQuery.contains(elem.ownerDocument.documentElement,elem)){ret=jQuery.style(elem,name)
}}return ret
}
}if(document.documentElement.currentStyle){currentStyle=function(elem,name){var left,rsLeft,uncomputed,ret=elem.currentStyle&&elem.currentStyle[name],style=elem.style;
if(ret===null&&style&&(uncomputed=style[name])){ret=uncomputed
}if(!rnumpx.test(ret)&&rnum.test(ret)){left=style.left;
rsLeft=elem.runtimeStyle&&elem.runtimeStyle.left;
if(rsLeft){elem.runtimeStyle.left=elem.currentStyle.left
}style.left=name==="fontSize"?"1em":(ret||0);
ret=style.pixelLeft+"px";
style.left=left;
if(rsLeft){elem.runtimeStyle.left=rsLeft
}}return ret===""?"auto":ret
}
}curCSS=getComputedStyle||currentStyle;
function getWH(elem,name,extra){var val=name==="width"?elem.offsetWidth:elem.offsetHeight,which=name==="width"?cssWidth:cssHeight;
if(val>0){if(extra!=="border"){jQuery.each(which,function(){if(!extra){val-=parseFloat(jQuery.css(elem,"padding"+this))||0
}if(extra==="margin"){val+=parseFloat(jQuery.css(elem,extra+this))||0
}else{val-=parseFloat(jQuery.css(elem,"border"+this+"Width"))||0
}})
}return val+"px"
}val=curCSS(elem,name,name);
if(val<0||val==null){val=elem.style[name]||0
}val=parseFloat(val)||0;
if(extra){jQuery.each(which,function(){val+=parseFloat(jQuery.css(elem,"padding"+this))||0;
if(extra!=="padding"){val+=parseFloat(jQuery.css(elem,"border"+this+"Width"))||0
}if(extra==="margin"){val+=parseFloat(jQuery.css(elem,extra+this))||0
}})
}return val+"px"
}if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){var width=elem.offsetWidth,height=elem.offsetHeight;
return(width===0&&height===0)||(!jQuery.support.reliableHiddenOffsets&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none")
};
jQuery.expr.filters.visible=function(elem){return !jQuery.expr.filters.hidden(elem)
}
}var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rhash=/#.*$/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rinput=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,rlocalProtocol=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rquery=/\?/,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,rselectTextarea=/^(?:select|textarea)/i,rspacesAjax=/\s+/,rts=/([?&])_=[^&]*/,rurl=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,_load=jQuery.fn.load,prefilters={},transports={},ajaxLocation,ajaxLocParts,allTypes=["*/"]+["*"];
try{ajaxLocation=location.href
}catch(e){ajaxLocation=document.createElement("a");
ajaxLocation.href="";
ajaxLocation=ajaxLocation.href
}ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];
function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;
dataTypeExpression="*"
}if(jQuery.isFunction(func)){var dataTypes=dataTypeExpression.toLowerCase().split(rspacesAjax),i=0,length=dataTypes.length,dataType,list,placeBefore;
for(;
i<length;
i++){dataType=dataTypes[i];
placeBefore=/^\+/.test(dataType);
if(placeBefore){dataType=dataType.substr(1)||"*"
}list=structure[dataType]=structure[dataType]||[];
list[placeBefore?"unshift":"push"](func)
}}}
}function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,dataType,inspected){dataType=dataType||options.dataTypes[0];
inspected=inspected||{};
inspected[dataType]=true;
var list=structure[dataType],i=0,length=list?list.length:0,executeOnly=(structure===prefilters),selection;
for(;
i<length&&(executeOnly||!selection);
i++){selection=list[i](options,originalOptions,jqXHR);
if(typeof selection==="string"){if(!executeOnly||inspected[selection]){selection=undefined
}else{options.dataTypes.unshift(selection);
selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,selection,inspected)
}}}if((executeOnly||!selection)&&!inspected["*"]){selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,"*",inspected)
}return selection
}function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};
for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key]
}}if(deep){jQuery.extend(true,target,deep)
}}jQuery.fn.extend({load:function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments)
}else{if(!this.length){return this
}}var off=url.indexOf(" ");
if(off>=0){var selector=url.slice(off,url.length);
url=url.slice(0,off)
}var type="GET";
if(params){if(jQuery.isFunction(params)){callback=params;
params=undefined
}else{if(typeof params==="object"){params=jQuery.param(params,jQuery.ajaxSettings.traditional);
type="POST"
}}}var self=this;
jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(jqXHR,status,responseText){responseText=jqXHR.responseText;
if(jqXHR.isResolved()){jqXHR.done(function(r){responseText=r
});
self.html(selector?jQuery("<div>").append(responseText.replace(rscript,"")).find(selector):responseText)
}if(callback){self.each(callback,[responseText,status,jqXHR])
}}});
return this
},serialize:function(){return jQuery.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||rselectTextarea.test(this.nodeName)||rinput.test(this.type))
}).map(function(i,elem){var val=jQuery(this).val();
return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}
}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}
}).get()
}});
jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f)
}
});
jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;
callback=data;
data=undefined
}return jQuery.ajax({type:method,url:url,data:data,success:callback,dataType:type})
}
});
jQuery.extend({getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script")
},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")
},ajaxSetup:function(target,settings){if(settings){ajaxExtend(target,jQuery.ajaxSettings)
}else{settings=target;
target=jQuery.ajaxSettings
}ajaxExtend(target,settings);
return target
},ajaxSettings:{url:ajaxLocation,isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":allTypes},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;
url=undefined
}options=options||{};
var s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=callbackContext!==s&&(callbackContext.nodeType||callbackContext instanceof jQuery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},ifModifiedKey,requestHeaders={},requestHeadersNames={},responseHeadersString,responseHeaders,transport,timeoutTimer,parts,state=0,fireGlobals,i,jqXHR={readyState:0,setRequestHeader:function(name,value){if(!state){var lname=name.toLowerCase();
name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;
requestHeaders[name]=value
}return this
},getAllResponseHeaders:function(){return state===2?responseHeadersString:null
},getResponseHeader:function(key){var match;
if(state===2){if(!responseHeaders){responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2]
}}match=responseHeaders[key.toLowerCase()]
}return match===undefined?null:match
},overrideMimeType:function(type){if(!state){s.mimeType=type
}return this
},abort:function(statusText){statusText=statusText||"abort";
if(transport){transport.abort(statusText)
}done(0,statusText);
return this
}};
function done(status,nativeStatusText,responses,headers){if(state===2){return 
}state=2;
if(timeoutTimer){clearTimeout(timeoutTimer)
}transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
var isSuccess,success,error,statusText=nativeStatusText,response=responses?ajaxHandleResponses(s,jqXHR,responses):undefined,lastModified,etag;
if(status>=200&&status<300||status===304){if(s.ifModified){if((lastModified=jqXHR.getResponseHeader("Last-Modified"))){jQuery.lastModified[ifModifiedKey]=lastModified
}if((etag=jqXHR.getResponseHeader("Etag"))){jQuery.etag[ifModifiedKey]=etag
}}if(status===304){statusText="notmodified";
isSuccess=true
}else{try{success=ajaxConvert(s,response);
statusText="success";
isSuccess=true
}catch(e){statusText="parsererror";
error=e
}}}else{error=statusText;
if(!statusText||status){statusText="error";
if(status<0){status=0
}}}jqXHR.status=status;
jqXHR.statusText=""+(nativeStatusText||statusText);
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])
}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])
}jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){globalEventContext.trigger("ajax"+(isSuccess?"Success":"Error"),[jqXHR,s,isSuccess?success:error])
}completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop")
}}}deferred.promise(jqXHR);
jqXHR.success=jqXHR.done;
jqXHR.error=jqXHR.fail;
jqXHR.complete=completeDeferred.add;
jqXHR.statusCode=function(map){if(map){var tmp;
if(state<2){for(tmp in map){statusCode[tmp]=[statusCode[tmp],map[tmp]]
}}else{tmp=map[jqXHR.status];
jqXHR.then(tmp,tmp)
}}return this
};
s.url=((url||s.url)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");
s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().split(rspacesAjax);
if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());
s.crossDomain=!!(parts&&(parts[1]!=ajaxLocParts[1]||parts[2]!=ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?80:443))!=(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?80:443))))
}if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)
}inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(state===2){return false
}fireGlobals=s.global;
s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")
}if(!s.hasContent){if(s.data){s.url+=(rquery.test(s.url)?"&":"?")+s.data;
delete s.data
}ifModifiedKey=s.url;
if(s.cache===false){var ts=jQuery.now(),ret=s.url.replace(rts,"$1_="+ts);
s.url=ret+((ret===s.url)?(rquery.test(s.url)?"&":"?")+"_="+ts:"")
}}if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)
}if(s.ifModified){ifModifiedKey=ifModifiedKey||s.url;
if(jQuery.lastModified[ifModifiedKey]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[ifModifiedKey])
}if(jQuery.etag[ifModifiedKey]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[ifModifiedKey])
}}jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])
}if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){jqXHR.abort();
return false
}for(i in {success:1,error:1,complete:1}){jqXHR[i](s[i])
}transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){done(-1,"No Transport")
}else{jqXHR.readyState=1;
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])
}if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout")
},s.timeout)
}try{state=1;
transport.send(requestHeaders,done)
}catch(e){if(state<2){done(-1,e)
}else{jQuery.error(e)
}}}return jqXHR
},param:function(a,traditional){var s=[],add=function(key,value){value=jQuery.isFunction(value)?value():value;
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)
};
if(traditional===undefined){traditional=jQuery.ajaxSettings.traditional
}if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value)
})
}else{for(var prefix in a){buildParams(prefix,a[prefix],traditional,add)
}}return s.join("&").replace(r20,"+")
}});
function buildParams(prefix,obj,traditional,add){if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)
}else{buildParams(prefix+"["+(typeof v==="object"||jQuery.isArray(v)?i:"")+"]",v,traditional,add)
}})
}else{if(!traditional&&obj!=null&&typeof obj==="object"){for(var name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)
}}else{add(prefix,obj)
}}}jQuery.extend({active:0,lastModified:{},etag:{}});
function ajaxHandleResponses(s,jqXHR,responses){var contents=s.contents,dataTypes=s.dataTypes,responseFields=s.responseFields,ct,type,finalDataType,firstDataType;
for(type in responseFields){if(type in responses){jqXHR[responseFields[type]]=responses[type]
}}while(dataTypes[0]==="*"){dataTypes.shift();
if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("content-type")
}}if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);
break
}}}if(dataTypes[0] in responses){finalDataType=dataTypes[0]
}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;
break
}if(!firstDataType){firstDataType=type
}}finalDataType=finalDataType||firstDataType
}if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)
}return responses[finalDataType]
}}function ajaxConvert(s,response){if(s.dataFilter){response=s.dataFilter(response,s.dataType)
}var dataTypes=s.dataTypes,converters={},i,key,length=dataTypes.length,tmp,current=dataTypes[0],prev,conversion,conv,conv1,conv2;
for(i=1;
i<length;
i++){if(i===1){for(key in s.converters){if(typeof key==="string"){converters[key.toLowerCase()]=s.converters[key]
}}}prev=current;
current=dataTypes[i];
if(current==="*"){current=prev
}else{if(prev!=="*"&&prev!==current){conversion=prev+" "+current;
conv=converters[conversion]||converters["* "+current];
if(!conv){conv2=undefined;
for(conv1 in converters){tmp=conv1.split(" ");
if(tmp[0]===prev||tmp[0]==="*"){conv2=converters[tmp[1]+" "+current];
if(conv2){conv1=converters[conv1];
if(conv1===true){conv=conv2
}else{if(conv2===true){conv=conv1
}}break
}}}}if(!(conv||conv2)){jQuery.error("No conversion from "+conversion.replace(" "," to "))
}if(conv!==true){response=conv?conv(response):conv2(conv1(response))
}}}}return response
}var jsc=jQuery.now(),jsre=/(\=)\?(&|$)|\?\?/i;
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return jQuery.expando+"_"+(jsc++)
}});
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var inspectData=s.contentType==="application/x-www-form-urlencoded"&&(typeof s.data==="string");
if(s.dataTypes[0]==="jsonp"||s.jsonp!==false&&(jsre.test(s.url)||inspectData&&jsre.test(s.data))){var responseContainer,jsonpCallback=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,previous=window[jsonpCallback],url=s.url,data=s.data,replace="$1"+jsonpCallback+"$2";
if(s.jsonp!==false){url=url.replace(jsre,replace);
if(s.url===url){if(inspectData){data=data.replace(jsre,replace)
}if(s.data===data){url+=(/\?/.test(url)?"&":"?")+s.jsonp+"="+jsonpCallback
}}}s.url=url;
s.data=data;
window[jsonpCallback]=function(response){responseContainer=[response]
};
jqXHR.always(function(){window[jsonpCallback]=previous;
if(responseContainer&&jQuery.isFunction(previous)){window[jsonpCallback](responseContainer[0])
}});
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(jsonpCallback+" was not called")
}return responseContainer[0]
};
s.dataTypes[0]="json";
return"script"
}});
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(text){jQuery.globalEval(text);
return text
}}});
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false
}if(s.crossDomain){s.type="GET";
s.global=false
}});
jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;
return{send:function(_,callback){script=document.createElement("script");
script.async="async";
if(s.scriptCharset){script.charset=s.scriptCharset
}script.src=s.url;
script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;
if(head&&script.parentNode){head.removeChild(script)
}script=undefined;
if(!isAbort){callback(200,"success")
}}};
head.insertBefore(script,head.firstChild)
},abort:function(){if(script){script.onload(0,1)
}}}
}});
var xhrOnUnloadAbort=window.ActiveXObject?function(){for(var key in xhrCallbacks){xhrCallbacks[key](0,1)
}}:false,xhrId=0,xhrCallbacks;
function createStandardXHR(){try{return new window.XMLHttpRequest()
}catch(e){}}function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")
}catch(e){}}jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return !this.isLocal&&createStandardXHR()||createActiveXHR()
}:createStandardXHR;
(function(xhr){jQuery.extend(jQuery.support,{ajax:!!xhr,cors:!!xhr&&("withCredentials" in xhr)})
})(jQuery.ajaxSettings.xhr());
if(jQuery.support.ajax){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;
return{send:function(headers,complete){var xhr=s.xhr(),handle,i;
var hook=null;
try{hook=_g.shared.HTTP.getXhrHook(s.url,type,s.data);
if(hook){s.url=hook.url;
if(hook.params){s.data=hook.params
}}}catch(e){}if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password)
}else{xhr.open(s.type,s.url,s.async)
}if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i]
}}if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType)
}if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"
}try{for(i in headers){xhr.setRequestHeader(i,headers[i])
}}catch(_){}xhr.send((s.hasContent&&s.data)||null);
callback=function(_,isAbort){var status,statusText,responseHeaders,responses,xml;
try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;
if(handle){xhr.onreadystatechange=jQuery.noop;
if(xhrOnUnloadAbort){delete xhrCallbacks[handle]
}}if(isAbort){if(xhr.readyState!==4){xhr.abort()
}}else{status=xhr.status;
responseHeaders=xhr.getAllResponseHeaders();
responses={};
xml=xhr.responseXML;
if(xml&&xml.documentElement){responses.xml=xml
}responses.text=xhr.responseText;
try{statusText=xhr.statusText
}catch(e){statusText=""
}if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404
}else{if(status===1223){status=204
}}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException)
}}if(responses){complete(status,statusText,responses,responseHeaders)
}};
if(!s.async||xhr.readyState===4){callback()
}else{handle=++xhrId;
if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};
jQuery(window).unload(xhrOnUnloadAbort)
}xhrCallbacks[handle]=callback
}xhr.onreadystatechange=callback
}},abort:function(){if(callback){callback(0,1)
}}}
}})
}var elemdisplay={},iframe,iframeDoc,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,timerId,fxAttrs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],fxNow;
jQuery.fn.extend({show:function(speed,easing,callback){var elem,display;
if(speed||speed===0){return this.animate(genFx("show",3),speed,easing,callback)
}else{for(var i=0,j=this.length;
i<j;
i++){elem=this[i];
if(elem.style){display=elem.style.display;
if(!jQuery._data(elem,"olddisplay")&&display==="none"){display=elem.style.display=""
}if(display===""&&jQuery.css(elem,"display")==="none"){jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName))
}}}for(i=0;
i<j;
i++){elem=this[i];
if(elem.style){display=elem.style.display;
if(display===""||display==="none"){elem.style.display=jQuery._data(elem,"olddisplay")||""
}}}return this
}},hide:function(speed,easing,callback){if(speed||speed===0){return this.animate(genFx("hide",3),speed,easing,callback)
}else{var elem,display,i=0,j=this.length;
for(;
i<j;
i++){elem=this[i];
if(elem.style){display=jQuery.css(elem,"display");
if(display!=="none"&&!jQuery._data(elem,"olddisplay")){jQuery._data(elem,"olddisplay",display)
}}}for(i=0;
i<j;
i++){if(this[i].style){this[i].style.display="none"
}}return this
}},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2,callback){var bool=typeof fn==="boolean";
if(jQuery.isFunction(fn)&&jQuery.isFunction(fn2)){this._toggle.apply(this,arguments)
}else{if(fn==null||bool){this.each(function(){var state=bool?fn:jQuery(this).is(":hidden");
jQuery(this)[state?"show":"hide"]()
})
}else{this.animate(genFx("toggle",3),fn,fn2,callback)
}}return this
},fadeTo:function(speed,to,easing,callback){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)
},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);
if(jQuery.isEmptyObject(prop)){return this.each(optall.complete,[false])
}prop=jQuery.extend({},prop);
function doAnimation(){if(optall.queue===false){jQuery._mark(this)
}var opt=jQuery.extend({},optall),isElement=this.nodeType===1,hidden=isElement&&jQuery(this).is(":hidden"),name,val,p,e,parts,start,end,unit,method;
opt.animatedProperties={};
for(p in prop){name=jQuery.camelCase(p);
if(p!==name){prop[name]=prop[p];
delete prop[p]
}val=prop[name];
if(jQuery.isArray(val)){opt.animatedProperties[name]=val[1];
val=prop[name]=val[0]
}else{opt.animatedProperties[name]=opt.specialEasing&&opt.specialEasing[name]||opt.easing||"swing"
}if(val==="hide"&&hidden||val==="show"&&!hidden){return opt.complete.call(this)
}if(isElement&&(name==="height"||name==="width")){opt.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(jQuery.css(this,"display")==="inline"&&jQuery.css(this,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||defaultDisplay(this.nodeName)==="inline"){this.style.display="inline-block"
}else{this.style.zoom=1
}}}}if(opt.overflow!=null){this.style.overflow="hidden"
}for(p in prop){e=new jQuery.fx(this,opt,p);
val=prop[p];
if(rfxtypes.test(val)){method=jQuery._data(this,"toggle"+p)||(val==="toggle"?hidden?"show":"hide":0);
if(method){jQuery._data(this,"toggle"+p,method==="show"?"hide":"show");
e[method]()
}else{e[val]()
}}else{parts=rfxnum.exec(val);
start=e.cur();
if(parts){end=parseFloat(parts[2]);
unit=parts[3]||(jQuery.cssNumber[p]?"":"px");
if(unit!=="px"){jQuery.style(this,p,(end||1)+unit);
start=((end||1)/e.cur())*start;
jQuery.style(this,p,start+unit)
}if(parts[1]){end=((parts[1]==="-="?-1:1)*end)+start
}e.custom(start,end,unit)
}else{e.custom(start,val,"")
}}}return true
}return optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation)
},stop:function(type,clearQueue,gotoEnd){if(typeof type!=="string"){gotoEnd=clearQueue;
clearQueue=type;
type=undefined
}if(clearQueue&&type!==false){this.queue(type||"fx",[])
}return this.each(function(){var i,hadTimers=false,timers=jQuery.timers,data=jQuery._data(this);
if(!gotoEnd){jQuery._unmark(true,this)
}function stopQueue(elem,data,i){var hooks=data[i];
jQuery.removeData(elem,i,true);
hooks.stop(gotoEnd)
}if(type==null){for(i in data){if(data[i].stop&&i.indexOf(".run")===i.length-4){stopQueue(this,data,i)
}}}else{if(data[i=type+".run"]&&data[i].stop){stopQueue(this,data,i)
}}for(i=timers.length;
i--;
){if(timers[i].elem===this&&(type==null||timers[i].queue===type)){if(gotoEnd){timers[i](true)
}else{timers[i].saveState()
}hadTimers=true;
timers.splice(i,1)
}}if(!(gotoEnd&&hadTimers)){jQuery.dequeue(this,type)
}})
}});
function createFxNow(){setTimeout(clearFxNow,0);
return(fxNow=jQuery.now())
}function clearFxNow(){fxNow=undefined
}function genFx(type,num){var obj={};
jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,num)),function(){obj[this]=type
});
return obj
}jQuery.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)
}
});
jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};
opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;
if(opt.queue==null||opt.queue===true){opt.queue="fx"
}opt.old=opt.complete;
opt.complete=function(noUnmark){if(jQuery.isFunction(opt.old)){opt.old.call(this)
}if(opt.queue){jQuery.dequeue(this,opt.queue)
}else{if(noUnmark!==false){jQuery._unmark(this)
}}};
return opt
},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p
},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum
}},timers:[],fx:function(elem,options,prop){this.options=options;
this.elem=elem;
this.prop=prop;
options.orig=options.orig||{}
}});
jQuery.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this)
},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var parsed,r=jQuery.css(this.elem,this.prop);
return isNaN(parsed=parseFloat(r))?!r||r==="auto"?0:r:parsed
},custom:function(from,to,unit){var self=this,fx=jQuery.fx;
this.startTime=fxNow||createFxNow();
this.end=to;
this.now=this.start=from;
this.pos=this.state=0;
this.unit=unit||this.unit||(jQuery.cssNumber[this.prop]?"":"px");
function t(gotoEnd){return self.step(gotoEnd)
}t.queue=this.options.queue;
t.elem=this.elem;
t.saveState=function(){if(self.options.hide&&jQuery._data(self.elem,"fxshow"+self.prop)===undefined){jQuery._data(self.elem,"fxshow"+self.prop,self.start)
}};
if(t()&&jQuery.timers.push(t)&&!timerId){timerId=setInterval(fx.tick,fx.interval)
}},show:function(){var dataShow=jQuery._data(this.elem,"fxshow"+this.prop);
this.options.orig[this.prop]=dataShow||jQuery.style(this.elem,this.prop);
this.options.show=true;
if(dataShow!==undefined){this.custom(this.cur(),dataShow)
}else{this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur())
}jQuery(this.elem).show()
},hide:function(){this.options.orig[this.prop]=jQuery._data(this.elem,"fxshow"+this.prop)||jQuery.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(gotoEnd){var p,n,complete,t=fxNow||createFxNow(),done=true,elem=this.elem,options=this.options;
if(gotoEnd||t>=options.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
options.animatedProperties[this.prop]=true;
for(p in options.animatedProperties){if(options.animatedProperties[p]!==true){done=false
}}if(done){if(options.overflow!=null&&!jQuery.support.shrinkWrapBlocks){jQuery.each(["","X","Y"],function(index,value){elem.style["overflow"+value]=options.overflow[index]
})
}if(options.hide){jQuery(elem).hide()
}if(options.hide||options.show){for(p in options.animatedProperties){jQuery.style(elem,p,options.orig[p]);
jQuery.removeData(elem,"fxshow"+p,true);
jQuery.removeData(elem,"toggle"+p,true)
}}complete=options.complete;
if(complete){options.complete=false;
complete.call(elem)
}}return false
}else{if(options.duration==Infinity){this.now=t
}else{n=t-this.startTime;
this.state=n/options.duration;
this.pos=jQuery.easing[options.animatedProperties[this.prop]](this.state,n,0,1,options.duration);
this.now=this.start+((this.end-this.start)*this.pos)
}this.update()
}return true
}};
jQuery.extend(jQuery.fx,{tick:function(){var timer,timers=jQuery.timers,i=0;
for(;
i<timers.length;
i++){timer=timers[i];
if(!timer()&&timers[i]===timer){timers.splice(i--,1)
}}if(!timers.length){jQuery.fx.stop()
}},interval:13,stop:function(){clearInterval(timerId);
timerId=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(fx){jQuery.style(fx.elem,"opacity",fx.now)
},_default:function(fx){if(fx.elem.style&&fx.elem.style[fx.prop]!=null){fx.elem.style[fx.prop]=fx.now+fx.unit
}else{fx.elem[fx.prop]=fx.now
}}}});
jQuery.each(["width","height"],function(i,prop){jQuery.fx.step[prop]=function(fx){jQuery.style(fx.elem,prop,Math.max(0,fx.now))
}
});
if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem
}).length
}
}function defaultDisplay(nodeName){if(!elemdisplay[nodeName]){var body=document.body,elem=jQuery("<"+nodeName+">").appendTo(body),display=elem.css("display");
elem.remove();
if(display==="none"||display===""){if(!iframe){iframe=document.createElement("iframe");
iframe.frameBorder=iframe.width=iframe.height=0
}body.appendChild(iframe);
if(!iframeDoc||!iframe.createElement){iframeDoc=(iframe.contentWindow||iframe.contentDocument).document;
iframeDoc.write((document.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>");
iframeDoc.close()
}elem=iframeDoc.createElement(nodeName);
iframeDoc.body.appendChild(elem);
display=jQuery.css(elem,"display");
body.removeChild(iframe)
}elemdisplay[nodeName]=display
}return elemdisplay[nodeName]
}var rtable=/^t(?:able|d|h)$/i,rroot=/^(?:body|html)$/i;
if("getBoundingClientRect" in document.documentElement){jQuery.fn.offset=function(options){var elem=this[0],box;
if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i)
})
}if(!elem||!elem.ownerDocument){return null
}if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem)
}try{box=elem.getBoundingClientRect()
}catch(e){}var doc=elem.ownerDocument,docElem=doc.documentElement;
if(!box||!jQuery.contains(docElem,elem)){return box?{top:box.top,left:box.left}:{top:0,left:0}
}var body=doc.body,win=getWindow(doc),clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,scrollTop=win.pageYOffset||jQuery.support.boxModel&&docElem.scrollTop||body.scrollTop,scrollLeft=win.pageXOffset||jQuery.support.boxModel&&docElem.scrollLeft||body.scrollLeft,top=box.top+scrollTop-clientTop,left=box.left+scrollLeft-clientLeft;
return{top:top,left:left}
}
}else{jQuery.fn.offset=function(options){var elem=this[0];
if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i)
})
}if(!elem||!elem.ownerDocument){return null
}if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem)
}var computedStyle,offsetParent=elem.offsetParent,prevOffsetParent=elem,doc=elem.ownerDocument,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle,top=elem.offsetTop,left=elem.offsetLeft;
while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){if(jQuery.support.fixedPosition&&prevComputedStyle.position==="fixed"){break
}computedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle;
top-=elem.scrollTop;
left-=elem.scrollLeft;
if(elem===offsetParent){top+=elem.offsetTop;
left+=elem.offsetLeft;
if(jQuery.support.doesNotAddBorder&&!(jQuery.support.doesAddBorderForTableAndCells&&rtable.test(elem.nodeName))){top+=parseFloat(computedStyle.borderTopWidth)||0;
left+=parseFloat(computedStyle.borderLeftWidth)||0
}prevOffsetParent=offsetParent;
offsetParent=elem.offsetParent
}if(jQuery.support.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible"){top+=parseFloat(computedStyle.borderTopWidth)||0;
left+=parseFloat(computedStyle.borderLeftWidth)||0
}prevComputedStyle=computedStyle
}if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static"){top+=body.offsetTop;
left+=body.offsetLeft
}if(jQuery.support.fixedPosition&&prevComputedStyle.position==="fixed"){top+=Math.max(docElem.scrollTop,body.scrollTop);
left+=Math.max(docElem.scrollLeft,body.scrollLeft)
}return{top:top,left:left}
}
}jQuery.offset={bodyOffset:function(body){var top=body.offsetTop,left=body.offsetLeft;
if(jQuery.support.doesNotIncludeMarginInBodyOffset){top+=parseFloat(jQuery.css(body,"marginTop"))||0;
left+=parseFloat(jQuery.css(body,"marginLeft"))||0
}return{top:top,left:left}
},setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");
if(position==="static"){elem.style.position="relative"
}var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;
if(calculatePosition){curPosition=curElem.position();
curTop=curPosition.top;
curLeft=curPosition.left
}else{curTop=parseFloat(curCSSTop)||0;
curLeft=parseFloat(curCSSLeft)||0
}if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset)
}if(options.top!=null){props.top=(options.top-curOffset.top)+curTop
}if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft
}if("using" in options){options.using.call(elem,props)
}else{curElem.css(props)
}}};
jQuery.fn.extend({position:function(){if(!this[0]){return null
}var elem=this[0],offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=rroot.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();
offset.top-=parseFloat(jQuery.css(elem,"marginTop"))||0;
offset.left-=parseFloat(jQuery.css(elem,"marginLeft"))||0;
parentOffset.top+=parseFloat(jQuery.css(offsetParent[0],"borderTopWidth"))||0;
parentOffset.left+=parseFloat(jQuery.css(offsetParent[0],"borderLeftWidth"))||0;
return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left}
},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||document.body;
while(offsetParent&&(!rroot.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent
}return offsetParent
})
}});
jQuery.each(["Left","Top"],function(i,name){var method="scroll"+name;
jQuery.fn[method]=function(val){var elem,win;
if(val===undefined){elem=this[0];
if(!elem){return null
}win=getWindow(elem);
return win?("pageXOffset" in win)?win[i?"pageYOffset":"pageXOffset"]:jQuery.support.boxModel&&win.document.documentElement[method]||win.document.body[method]:elem[method]
}return this.each(function(){win=getWindow(this);
if(win){win.scrollTo(!i?val:jQuery(win).scrollLeft(),i?val:jQuery(win).scrollTop())
}else{this[method]=val
}})
}
});
function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false
}jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();
jQuery.fn["inner"+name]=function(){var elem=this[0];
return elem?elem.style?parseFloat(jQuery.css(elem,type,"padding")):this[type]():null
};
jQuery.fn["outer"+name]=function(margin){var elem=this[0];
return elem?elem.style?parseFloat(jQuery.css(elem,type,margin?"margin":"border")):this[type]():null
};
jQuery.fn[type]=function(size){var elem=this[0];
if(!elem){return size==null?null:this
}if(jQuery.isFunction(size)){return this.each(function(i){var self=jQuery(this);
self[type](size.call(this,i,self[type]()))
})
}if(jQuery.isWindow(elem)){var docElemProp=elem.document.documentElement["client"+name],body=elem.document.body;
return elem.document.compatMode==="CSS1Compat"&&docElemProp||body&&body["client"+name]||docElemProp
}else{if(elem.nodeType===9){return Math.max(elem.documentElement["client"+name],elem.body["scroll"+name],elem.documentElement["scroll"+name],elem.body["offset"+name],elem.documentElement["offset"+name])
}else{if(size===undefined){var orig=jQuery.css(elem,type),ret=parseFloat(orig);
return jQuery.isNumeric(ret)?ret:orig
}else{return this.css(type,typeof size==="string"?size:size+"px")
}}}}
});
window.jQuery=window.$=jQuery
})(window);
window._g=window._g||{};
window._g.$=$.noConflict();
_g.$.ajaxSettings.traditional=true;
window.$CQ=_g.$;
window.$=window._g.$;
(function(A){A.fn.unveil=function(H,J){var E=A(window),B=H||0,D=window.devicePixelRatio>1,F=D?"data-src-retina":"data-src",I=this,G;
this.one("unveil",function(){var K=this.getAttribute(F);
K=K||this.getAttribute("data-src");
if(K){this.setAttribute("src",K);
if(typeof J==="function"){J.call(this)
}}});
function C(){var K=I.filter(function(){var M=A(this);
if(M.is(":hidden")){return 
}var L=E.scrollTop(),O=L+E.height(),P=M.offset().top,N=P+M.height();
return N>=L-B&&P<=O+B
});
G=K.trigger("unveil");
I=I.not(G)
}E.on("scroll.unveil resize.unveil lookup.unveil",C);
C();
return this
}
})(window.jQuery);
var Utilities={copyToClipboard:function(A){window.prompt("Copy to clipboard: Ctrl+C, Enter",A);
return false
}};
!function(P,J){function D(T,V,Y){var U=T.children(),X=!1;
T.empty();
for(var S=0,W=U.length;
W>S;
S++){var R=U.eq(S);
if(T.append(R),Y&&T.append(Y),M(T,V)){R.remove(),X=!0;
break
}Y&&Y.detach()
}return X
}function A(V,Y,T,W,R){var U=!1,X="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",S="script";
return V.contents().detach().each(function(){var Z=this,a=P(Z);
if("undefined"==typeof Z||3==Z.nodeType&&0==P.trim(Z.data).length){return !0
}if(a.is(S)){V.append(a)
}else{if(U){return !0
}V.append(a),R&&V[V.is(X)?"after":"append"](R),M(T,W)&&(U=3==Z.nodeType?C(a,Y,T,W,R):A(a,Y,T,W,R),U||(a.detach(),U=!0)),U||R&&R.detach()
}}),U
}function C(i,V,R,U,j){var k=i[0];
if(!k){return !1
}var Y=Q(k),a=-1!==Y.indexOf(" ")?" ":"　",S="letter"==U.wrap?"":a,Z=Y.split(S),u=-1,t=-1,q=0,l=Z.length-1;
for(U.fallbackToLetter&&0==q&&0==l&&(S="",Z=Y.split(S),l=Z.length-1);
l>=q&&(0!=q||0!=l);
){var W=Math.floor((q+l)/2);
if(W==t){break
}t=W,E(k,Z.slice(0,t+1).join(S)+U.ellipsis),M(R,U)?(l=t,U.fallbackToLetter&&0==q&&0==l&&(S="",Z=Z[0].split(S),u=-1,t=-1,q=0,l=Z.length-1)):(u=t,q=t)
}if(-1==u||1==Z.length&&0==Z[0].length){var s=i.parent();
i.detach();
var X=j&&j.closest(s).length?j.length:0;
s.contents().length>X?k=O(s.contents().eq(-1-X),V):(k=O(s,V,!0),X||s.detach()),k&&(Y=F(Q(k),U),E(k,Y),X&&j&&P(k).parent().append(j))
}else{Y=F(Z.slice(0,u+1).join(S),U),E(k,Y)
}return !0
}function M(R,S){return R.innerHeight()>S.maxHeight
}function F(R,S){for(;
P.inArray(R.slice(-1),S.lastCharacter.remove)>-1;
){R=R.slice(0,-1)
}return P.inArray(R.slice(-1),S.lastCharacter.noEllipsis)<0&&(R+=S.ellipsis),R
}function K(R){return{width:R.innerWidth(),height:R.innerHeight()}
}function E(R,S){R.innerText?R.innerText=S:R.nodeValue?R.nodeValue=S:R.textContent&&(R.textContent=S)
}function Q(R){return R.innerText?R.innerText:R.nodeValue?R.nodeValue:R.textContent?R.textContent:""
}function L(R){do{R=R.previousSibling
}while(R&&1!==R.nodeType&&3!==R.nodeType);
return R
}function O(T,V,S){var U,R=T&&T[0];
if(R){if(!S){if(3===R.nodeType){return R
}if(P.trim(T.text())){return O(T.contents().last(),V)
}}for(U=L(R);
!U;
){if(T=T.parent(),T.is(V)||!T.length){return !1
}U=L(T[0])
}if(U){return O(P(U),V)
}}return !1
}function G(R,S){return R?"string"==typeof R?(R=P(R,S),R.length?R:!1):R.jquery?R:!1:!1
}function I(S){for(var U=S.innerHeight(),W=["paddingTop","paddingBottom"],T=0,V=W.length;
V>T;
T++){var R=parseInt(S.css(W[T]),10);
isNaN(R)&&(R=0),U-=R
}return U
}if(!P.fn.dotdotdot){P.fn.dotdotdot=function(W){if(0==this.length){return P.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this
}if(this.length>1){return this.each(function(){P(this).dotdotdot(W)
})
}var X=this;
X.data("dotdotdot")&&X.trigger("destroy.dot"),X.data("dotdotdot-style",X.attr("style")||""),X.css("word-wrap","break-word"),"nowrap"===X.css("white-space")&&X.css("white-space","normal"),X.bind_events=function(){return X.bind("update.dot",function(a,b){a.preventDefault(),a.stopPropagation(),R.maxHeight="number"==typeof R.height?R.height:I(X),R.maxHeight+=R.tolerance,"undefined"!=typeof b&&(("string"==typeof b||b instanceof HTMLElement)&&(b=P("<div />").append(b).contents()),b instanceof P&&(T=b)),V=X.wrapInner('<div class="dotdotdot" />').children(),V.contents().detach().end().append(T.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});
var f=!1,Z=!1;
return U.afterElement&&(f=U.afterElement.clone(!0),f.show(),U.afterElement.detach()),M(V,R)&&(Z="children"==R.wrap?D(V,R,f):A(V,X,V,R,f)),V.replaceWith(V.contents()),V=null,P.isFunction(R.callback)&&R.callback.call(X[0],Z,T),U.isTruncated=Z,Z
}).bind("isTruncated.dot",function(Z,a){return Z.preventDefault(),Z.stopPropagation(),"function"==typeof a&&a.call(X[0],U.isTruncated),U.isTruncated
}).bind("originalContent.dot",function(Z,a){return Z.preventDefault(),Z.stopPropagation(),"function"==typeof a&&a.call(X[0],T),T
}).bind("destroy.dot",function(Z){Z.preventDefault(),Z.stopPropagation(),X.unwatch().unbind_events().contents().detach().end().append(T).attr("style",X.data("dotdotdot-style")||"").data("dotdotdot",!1)
}),X
},X.unbind_events=function(){return X.unbind(".dot"),X
},X.watch=function(){if(X.unwatch(),"window"==R.watch){var a=P(window),b=a.width(),Z=a.height();
a.bind("resize.dot"+U.dotId,function(){b==a.width()&&Z==a.height()&&R.windowResizeFix||(b=a.width(),Z=a.height(),S&&clearInterval(S),S=setTimeout(function(){X.trigger("update.dot")
},10))
})
}else{Y=K(X),S=setInterval(function(){var c=K(X);
(Y.width!=c.width||Y.height!=c.height)&&(X.trigger("update.dot"),Y=K(X))
},100)
}return X
},X.unwatch=function(){return P(window).unbind("resize.dot"+U.dotId),S&&clearInterval(S),X
};
var T=X.contents(),R=P.extend(!0,{},P.fn.dotdotdot.defaults,W),U={},Y={},S=null,V=null;
return R.lastCharacter.remove instanceof Array||(R.lastCharacter.remove=P.fn.dotdotdot.defaultArrays.lastCharacter.remove),R.lastCharacter.noEllipsis instanceof Array||(R.lastCharacter.noEllipsis=P.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),U.afterElement=G(R.after,X),U.isTruncated=!1,U.dotId=B++,X.data("dotdotdot",!0).bind_events().trigger("update.dot"),R.watch&&X.watch(),X
},P.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},P.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},P.fn.dotdotdot.debug=function(){};
var B=1,H=P.fn.html;
P.fn.html=function(R){return R!=J&&!P.isFunction(R)&&this.data("dotdotdot")?this.trigger("update",[R]):H.apply(this,arguments)
};
var N=P.fn.text;
P.fn.text=function(R){return R!=J&&!P.isFunction(R)&&this.data("dotdotdot")?(R=P("<div />").text(R).html(),this.trigger("update",[R])):N.apply(this,arguments)
}
}}(jQuery);
if(typeof Object.create!=="function"){Object.create=function(B){function A(){}A.prototype=B;
return new A()
}
}(function(C,B,A){var D={init:function(E,F){var G=this;
G.$elem=C(F);
G.options=C.extend({},C.fn.owlCarousel.options,G.$elem.data(),E);
G.userOptions=E;
G.loadContent()
},loadContent:function(){var G=this,F;
function E(J){var H,I="";
if(typeof G.options.jsonSuccess==="function"){G.options.jsonSuccess.apply(this,[J])
}else{for(H in J.owl){if(J.owl.hasOwnProperty(H)){I+=J.owl[H].item
}}G.$elem.html(I)
}G.logIn()
}if(typeof G.options.beforeInit==="function"){G.options.beforeInit.apply(this,[G.$elem])
}if(typeof G.options.jsonPath==="string"){F=G.options.jsonPath;
C.getJSON(F,E)
}else{G.logIn()
}},logIn:function(){var E=this;
E.$elem.data("owl-originalStyles",E.$elem.attr("style"));
E.$elem.data("owl-originalClasses",E.$elem.attr("class"));
E.$elem.css({opacity:0});
E.orignalItems=E.options.items;
E.checkBrowser();
E.wrapperWidth=0;
E.checkVisible=null;
E.setVars()
},setVars:function(){var E=this;
if(E.$elem.children().length===0){return false
}E.baseClass();
E.eventTypes();
E.$userItems=E.$elem.children();
E.itemsAmount=E.$userItems.length;
E.wrapItems();
E.$owlItems=E.$elem.find(".owl-item");
E.$owlWrapper=E.$elem.find(".owl-wrapper");
E.playDirection="next";
E.prevItem=0;
E.prevArr=[0];
E.currentItem=0;
E.customEvents();
E.onStartup()
},onStartup:function(){var E=this;
E.updateItems();
E.calculateAll();
E.buildControls();
E.updateControls();
E.response();
E.moveEvents();
E.stopOnHover();
E.owlStatus();
if(E.options.transitionStyle!==false){E.transitionTypes(E.options.transitionStyle)
}if(E.options.autoPlay===true){E.options.autoPlay=5000
}E.play();
E.$elem.find(".owl-wrapper").css("display","block");
if(!E.$elem.is(":visible")){E.watchVisibility()
}else{E.$elem.css("opacity",1)
}E.onstartup=false;
E.eachMoveUpdate();
if(typeof E.options.afterInit==="function"){E.options.afterInit.apply(this,[E.$elem])
}},eachMoveUpdate:function(){var E=this;
if(E.options.lazyLoad===true){E.lazyLoad()
}if(E.options.autoHeight===true){E.autoHeight()
}E.onVisibleItems();
if(typeof E.options.afterAction==="function"){E.options.afterAction.apply(this,[E.$elem])
}},updateVars:function(){var E=this;
if(typeof E.options.beforeUpdate==="function"){E.options.beforeUpdate.apply(this,[E.$elem])
}E.watchVisibility();
E.updateItems();
E.calculateAll();
E.updatePosition();
E.updateControls();
E.eachMoveUpdate();
if(typeof E.options.afterUpdate==="function"){E.options.afterUpdate.apply(this,[E.$elem])
}},reload:function(){var E=this;
B.setTimeout(function(){E.updateVars()
},0)
},watchVisibility:function(){var E=this;
if(E.$elem.is(":visible")===false){E.$elem.css({opacity:0});
B.clearInterval(E.autoPlayInterval);
B.clearInterval(E.checkVisible)
}else{return false
}E.checkVisible=B.setInterval(function(){if(E.$elem.is(":visible")){E.reload();
E.$elem.animate({opacity:1},200);
B.clearInterval(E.checkVisible)
}},500)
},wrapItems:function(){var E=this;
E.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
E.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
E.wrapperOuter=E.$elem.find(".owl-wrapper-outer");
E.$elem.css("display","block")
},baseClass:function(){var G=this,E=G.$elem.hasClass(G.options.baseClass),F=G.$elem.hasClass(G.options.theme);
if(!E){G.$elem.addClass(G.options.baseClass)
}if(!F){G.$elem.addClass(G.options.theme)
}},updateItems:function(){var G=this,F,E;
if(G.options.responsive===false){return false
}if(G.options.singleItem===true){G.options.items=G.orignalItems=1;
G.options.itemsCustom=false;
G.options.itemsDesktop=false;
G.options.itemsDesktopSmall=false;
G.options.itemsTablet=false;
G.options.itemsTabletSmall=false;
G.options.itemsMobile=false;
return false
}F=C(G.options.responsiveBaseWidth).width();
if(F>(G.options.itemsDesktop[0]||G.orignalItems)){G.options.items=G.orignalItems
}if(G.options.itemsCustom!==false){G.options.itemsCustom.sort(function(I,H){return I[0]-H[0]
});
for(E=0;
E<G.options.itemsCustom.length;
E+=1){if(G.options.itemsCustom[E][0]<=F){G.options.items=G.options.itemsCustom[E][1]
}}}else{if(F<=G.options.itemsDesktop[0]&&G.options.itemsDesktop!==false){G.options.items=G.options.itemsDesktop[1]
}if(F<=G.options.itemsDesktopSmall[0]&&G.options.itemsDesktopSmall!==false){G.options.items=G.options.itemsDesktopSmall[1]
}if(F<=G.options.itemsTablet[0]&&G.options.itemsTablet!==false){G.options.items=G.options.itemsTablet[1]
}if(F<=G.options.itemsTabletSmall[0]&&G.options.itemsTabletSmall!==false){G.options.items=G.options.itemsTabletSmall[1]
}if(F<=G.options.itemsMobile[0]&&G.options.itemsMobile!==false){G.options.items=G.options.itemsMobile[1]
}}if(G.options.items>G.itemsAmount&&G.options.itemsScaleUp===true){G.options.items=G.itemsAmount
}},response:function(){var G=this,F,E;
if(G.options.responsive!==true){return false
}E=C(B).width();
G.resizer=function(){if(C(B).width()!==E){if(G.options.autoPlay!==false){B.clearInterval(G.autoPlayInterval)
}B.clearTimeout(F);
F=B.setTimeout(function(){E=C(B).width();
G.updateVars()
},G.options.responsiveRefreshRate)
}};
C(B).resize(G.resizer)
},updatePosition:function(){var E=this;
E.jumpTo(E.currentItem);
if(E.options.autoPlay!==false){E.checkAp()
}},appendItemsSizes:function(){var G=this,E=0,F=G.itemsAmount-G.options.items;
G.$owlItems.each(function(H){var I=C(this);
I.css({width:G.itemWidth}).data("owl-item",Number(H));
if(H%G.options.items===0||H===F){if(!(H>F)){E+=1
}}I.data("owl-roundPages",E)
})
},appendWrapperSizes:function(){var F=this,E=F.$owlItems.length*F.itemWidth;
F.$owlWrapper.css({width:E*2,left:0});
F.appendItemsSizes()
},calculateAll:function(){var E=this;
E.calculateWidth();
E.appendWrapperSizes();
E.loops();
E.max()
},calculateWidth:function(){var E=this;
E.itemWidth=Math.round(E.$elem.width()/E.options.items)
},max:function(){var E=this,F=((E.itemsAmount*E.itemWidth)-E.options.items*E.itemWidth)*-1;
if(E.options.items>E.itemsAmount){E.maximumItem=0;
F=0;
E.maximumPixels=0
}else{E.maximumItem=E.itemsAmount-E.options.items;
E.maximumPixels=F
}return F
},min:function(){return 0
},loops:function(){var J=this,I=0,G=0,F,H,E;
J.positionsInArray=[0];
J.pagesInArray=[];
for(F=0;
F<J.itemsAmount;
F+=1){G+=J.itemWidth;
J.positionsInArray.push(-G);
if(J.options.scrollPerPage===true){H=C(J.$owlItems[F]);
E=H.data("owl-roundPages");
if(E!==I){J.pagesInArray[I]=J.positionsInArray[F];
I=E
}}}},buildControls:function(){var E=this;
if(E.options.navigation===true||E.options.pagination===true){E.owlControls=C('<div class="owl-controls"/>').toggleClass("clickable",!E.browser.isTouch).appendTo(E.$elem)
}if(E.options.pagination===true){E.buildPagination()
}if(E.options.navigation===true){E.buildButtons()
}},buildButtons:function(){var G=this,E=C('<div class="owl-buttons"/>');
G.owlControls.append(E);
G.buttonPrev=C("<div/>",{"class":"owl-prev",html:G.options.navigationText[0]||""});
G.buttonNext=C("<div/>",{"class":"owl-next",html:G.options.navigationText[1]||""});
E.append(G.buttonPrev).append(G.buttonNext);
E.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(H){H.preventDefault()
});
var F=(navigator.userAgent.toLowerCase().indexOf("android 4.2.2")>0&&C(B).width()>600&&C(B).height()>480)?"click":"touchend.owlControls mouseup.owlControls";
E.on(F,'div[class^="owl"]',function(H){H.preventDefault();
if(C(this).hasClass("owl-next")){G.next()
}else{G.prev()
}})
},buildPagination:function(){var E=this;
E.paginationWrapper=C('<div class="owl-pagination"/>');
E.owlControls.append(E.paginationWrapper);
E.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(F){F.preventDefault();
if(Number(C(this).data("owl-page"))!==E.currentItem){E.goTo(Number(C(this).data("owl-page")),true)
}})
},updatePagination:function(){var K=this,F,J,I,H,G,E;
if(K.options.pagination===false){return false
}K.paginationWrapper.html("");
F=0;
J=K.itemsAmount-K.itemsAmount%K.options.items;
for(H=0;
H<K.itemsAmount;
H+=1){if(H%K.options.items===0){F+=1;
if(J===H){I=K.itemsAmount-K.options.items
}G=C("<div/>",{"class":"owl-page"});
E=C("<span></span>",{text:K.options.paginationNumbers===true?F:"","class":K.options.paginationNumbers===true?"owl-numbers":""});
G.append(E);
G.data("owl-page",J===H?I:H);
G.data("owl-roundPages",F);
K.paginationWrapper.append(G)
}}K.checkPagination()
},checkPagination:function(){var E=this;
if(E.options.pagination===false){return false
}E.paginationWrapper.find(".owl-page").each(function(){if(C(this).data("owl-roundPages")===C(E.$owlItems[E.currentItem]).data("owl-roundPages")){E.paginationWrapper.find(".owl-page").removeClass("active");
C(this).addClass("active")
}})
},checkNavigation:function(){var E=this;
if(E.options.navigation===false){return false
}if(E.options.rewindNav===false){if(E.currentItem===0&&E.maximumItem===0){E.buttonPrev.addClass("disabled");
E.buttonNext.addClass("disabled")
}else{if(E.currentItem===0&&E.maximumItem!==0){E.buttonPrev.addClass("disabled");
E.buttonNext.removeClass("disabled")
}else{if(E.currentItem===E.maximumItem){E.buttonPrev.removeClass("disabled");
E.buttonNext.addClass("disabled")
}else{if(E.currentItem!==0&&E.currentItem!==E.maximumItem){E.buttonPrev.removeClass("disabled");
E.buttonNext.removeClass("disabled")
}}}}}},updateControls:function(){var E=this;
E.updatePagination();
E.checkNavigation();
if(E.owlControls){if(E.options.items>=E.itemsAmount){E.owlControls.hide()
}else{E.owlControls.show()
}}},destroyControls:function(){var E=this;
if(E.owlControls){E.owlControls.remove()
}},next:function(F){var E=this;
if(E.isTransition){return false
}E.currentItem+=E.options.scrollPerPage===true?E.options.items:1;
if(E.currentItem>E.maximumItem+(E.options.scrollPerPage===true?(E.options.items-1):0)){if(E.options.rewindNav===true){E.currentItem=0;
F="rewind"
}else{E.currentItem=E.maximumItem;
return false
}}E.goTo(E.currentItem,F)
},prev:function(F){var E=this;
if(E.isTransition){return false
}if(E.options.scrollPerPage===true&&E.currentItem>0&&E.currentItem<E.options.items){E.currentItem=0
}else{E.currentItem-=E.options.scrollPerPage===true?E.options.items:1
}if(E.currentItem<0){if(E.options.rewindNav===true){E.currentItem=E.maximumItem;
F="rewind"
}else{E.currentItem=0;
return false
}}E.goTo(E.currentItem,F)
},goTo:function(E,I,G){var H=this,F;
if(H.isTransition){return false
}if(typeof H.options.beforeMove==="function"){H.options.beforeMove.apply(this,[H.$elem])
}if(E>=H.maximumItem){E=H.maximumItem
}else{if(E<=0){E=0
}}H.currentItem=H.owl.currentItem=E;
if(H.options.transitionStyle!==false&&G!=="drag"&&H.options.items===1&&H.browser.support3d===true){H.swapSpeed(0);
if(H.browser.support3d===true){H.transition3d(H.positionsInArray[E])
}else{H.css2slide(H.positionsInArray[E],1)
}H.afterGo();
H.singleItemTransition();
return false
}F=H.positionsInArray[E];
if(H.browser.support3d===true){H.isCss3Finish=false;
if(I===true){H.swapSpeed("paginationSpeed");
B.setTimeout(function(){H.isCss3Finish=true
},H.options.paginationSpeed)
}else{if(I==="rewind"){H.swapSpeed(H.options.rewindSpeed);
B.setTimeout(function(){H.isCss3Finish=true
},H.options.rewindSpeed)
}else{H.swapSpeed("slideSpeed");
B.setTimeout(function(){H.isCss3Finish=true
},H.options.slideSpeed)
}}H.transition3d(F)
}else{if(I===true){H.css2slide(F,H.options.paginationSpeed)
}else{if(I==="rewind"){H.css2slide(F,H.options.rewindSpeed)
}else{H.css2slide(F,H.options.slideSpeed)
}}}H.afterGo()
},jumpTo:function(E){var F=this;
if(typeof F.options.beforeMove==="function"){F.options.beforeMove.apply(this,[F.$elem])
}if(E>=F.maximumItem||E===-1){E=F.maximumItem
}else{if(E<=0){E=0
}}F.swapSpeed(0);
if(F.browser.support3d===true){F.transition3d(F.positionsInArray[E])
}else{F.css2slide(F.positionsInArray[E],1)
}F.currentItem=F.owl.currentItem=E;
F.afterGo()
},afterGo:function(){var E=this;
E.prevArr.push(E.currentItem);
E.prevItem=E.owl.prevItem=E.prevArr[E.prevArr.length-2];
E.prevArr.shift(0);
if(E.prevItem!==E.currentItem){E.checkPagination();
E.checkNavigation();
E.eachMoveUpdate();
if(E.options.autoPlay!==false){E.checkAp()
}}if(typeof E.options.afterMove==="function"&&E.prevItem!==E.currentItem){E.options.afterMove.apply(this,[E.$elem])
}},stop:function(){var E=this;
E.apStatus="stop";
B.clearInterval(E.autoPlayInterval)
},checkAp:function(){var E=this;
if(E.apStatus!=="stop"){E.play()
}},play:function(){var E=this;
E.apStatus="play";
if(E.options.autoPlay===false){return false
}B.clearInterval(E.autoPlayInterval);
E.autoPlayInterval=B.setInterval(function(){E.next(true)
},E.options.autoPlay)
},swapSpeed:function(F){var E=this;
if(F==="slideSpeed"){E.$owlWrapper.css(E.addCssSpeed(E.options.slideSpeed))
}else{if(F==="paginationSpeed"){E.$owlWrapper.css(E.addCssSpeed(E.options.paginationSpeed))
}else{if(typeof F!=="string"){E.$owlWrapper.css(E.addCssSpeed(F))
}}}},addCssSpeed:function(E){return{"-webkit-transition":"all "+E+"ms ease","-moz-transition":"all "+E+"ms ease","-o-transition":"all "+E+"ms ease",transition:"all "+E+"ms ease"}
},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}
},doTranslate:function(E){return{"-webkit-transform":"translate3d("+E+"px, 0px, 0px)","-moz-transform":"translate3d("+E+"px, 0px, 0px)","-o-transform":"translate3d("+E+"px, 0px, 0px)","-ms-transform":"translate3d("+E+"px, 0px, 0px)",transform:"translate3d("+E+"px, 0px,0px)"}
},transition3d:function(F){var E=this;
E.$owlWrapper.css(E.doTranslate(F))
},css2move:function(F){var E=this;
E.$owlWrapper.css({left:F})
},css2slide:function(G,F){var E=this;
E.isCssFinish=false;
E.$owlWrapper.stop(true,true).animate({left:G},{duration:F||E.options.slideSpeed,complete:function(){E.isCssFinish=true
}})
},checkBrowser:function(){var J=this,G="translate3d(0px, 0px, 0px)",I=A.createElement("div"),H,F,K,E;
I.style.cssText="  -moz-transform:"+G+"; -ms-transform:"+G+"; -o-transform:"+G+"; -webkit-transform:"+G+"; transform:"+G;
H=/translate3d\(0px, 0px, 0px\)/g;
F=I.style.cssText.match(H);
K=(F!==null&&F.length===1);
E="ontouchstart" in B||B.navigator.msMaxTouchPoints;
J.browser={support3d:K,isTouch:E}
},moveEvents:function(){var E=this;
if(E.options.mouseDrag!==false||E.options.touchDrag!==false){E.gestures();
E.disabledEvents()
}},eventTypes:function(){var F=this,E=["s","e","x"];
F.ev_types={};
if(F.options.mouseDrag===true&&F.options.touchDrag===true){E=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]
}else{if(F.options.mouseDrag===false&&F.options.touchDrag===true){E=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]
}else{if(F.options.mouseDrag===true&&F.options.touchDrag===false){E=["mousedown.owl","mousemove.owl","mouseup.owl"]
}}}F.ev_types.start=E[0];
F.ev_types.move=E[1];
F.ev_types.end=E[2]
},disabledEvents:function(){var E=this;
E.$elem.on("dragstart.owl",function(F){F.preventDefault()
});
E.$elem.on("mousedown.disableTextSelect",function(F){return C(F.target).is("input, textarea, select, option")
})
},gestures:function(){var H=this,I={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};
H.isCssFinish=true;
function K(L){if(L.touches!==undefined){return{x:L.touches[0].pageX,y:L.touches[0].pageY}
}if(L.touches===undefined){if(L.pageX!==undefined){return{x:L.pageX,y:L.pageY}
}if(L.pageX===undefined){return{x:L.clientX,y:L.clientY}
}}}function J(L){if(L==="on"){C(A).on(H.ev_types.move,G);
C(A).on(H.ev_types.end,E)
}else{if(L==="off"){C(A).off(H.ev_types.move);
C(A).off(H.ev_types.end)
}}}function F(N){var M=N.originalEvent||N||B.event,L;
if(M.which===3){return false
}if(H.itemsAmount<=H.options.items){return 
}if(H.isCssFinish===false&&!H.options.dragBeforeAnimFinish){return false
}if(H.isCss3Finish===false&&!H.options.dragBeforeAnimFinish){return false
}if(H.options.autoPlay!==false){B.clearInterval(H.autoPlayInterval)
}if(H.browser.isTouch!==true&&!H.$owlWrapper.hasClass("grabbing")){H.$owlWrapper.addClass("grabbing")
}H.newPosX=0;
H.newRelativeX=0;
C(this).css(H.removeTransition());
L=C(this).position();
I.relativePos=L.left;
I.offsetX=K(M).x-L.left;
I.offsetY=K(M).y-L.top;
J("on");
I.sliding=false;
I.targetElement=M.target||M.srcElement
}function G(O){var N=O.originalEvent||O||B.event,L,M;
H.newPosX=K(N).x-I.offsetX;
H.newPosY=K(N).y-I.offsetY;
H.newRelativeX=H.newPosX-I.relativePos;
if(typeof H.options.startDragging==="function"&&I.dragging!==true&&H.newRelativeX!==0){I.dragging=true;
H.options.startDragging.apply(H,[H.$elem])
}if((H.newRelativeX>8||H.newRelativeX<-8)&&(H.browser.isTouch===true)){if(N.preventDefault!==undefined){N.preventDefault()
}else{N.returnValue=false
}I.sliding=true
}if((H.newPosY>10||H.newPosY<-10)&&I.sliding===false){C(A).off("touchmove.owl")
}L=function(){return H.newRelativeX/5
};
M=function(){return H.maximumPixels+H.newRelativeX/5
};
H.newPosX=Math.max(Math.min(H.newPosX,L()),M());
if(H.browser.support3d===true){H.transition3d(H.newPosX)
}else{H.css2move(H.newPosX)
}}function E(P){var O=P.originalEvent||P||B.event,N,M,L;
O.target=O.target||O.srcElement;
I.dragging=false;
if(H.browser.isTouch!==true){H.$owlWrapper.removeClass("grabbing")
}if(H.newRelativeX<0){H.dragDirection=H.owl.dragDirection="left"
}else{H.dragDirection=H.owl.dragDirection="right"
}if(H.newRelativeX!==0){N=H.getNewPosition();
H.goTo(N,false,"drag");
if(I.targetElement===O.target&&H.browser.isTouch!==true){C(O.target).on("click.disable",function(Q){Q.stopImmediatePropagation();
Q.stopPropagation();
Q.preventDefault();
C(Q.target).off("click.disable")
});
M=C._data(O.target,"events").click;
L=M.pop();
M.splice(0,0,L)
}}J("off")
}H.$elem.on(H.ev_types.start,".owl-wrapper",F)
},getNewPosition:function(){var F=this,E=F.closestItem();
if(E>F.maximumItem){F.currentItem=F.maximumItem;
E=F.maximumItem
}else{if(F.newPosX>=0){E=0;
F.currentItem=0
}}return E
},closestItem:function(){var G=this,H=G.options.scrollPerPage===true?G.pagesInArray:G.positionsInArray,E=G.newPosX,F=null;
C.each(H,function(J,I){if(E-(G.itemWidth/20)>H[J+1]&&E-(G.itemWidth/20)<I&&G.moveDirection()==="left"){F=I;
if(G.options.scrollPerPage===true){G.currentItem=C.inArray(F,G.positionsInArray)
}else{G.currentItem=J
}}else{if(E+(G.itemWidth/20)<I&&E+(G.itemWidth/20)>(H[J+1]||H[J]-G.itemWidth)&&G.moveDirection()==="right"){if(G.options.scrollPerPage===true){F=H[J+1]||H[H.length-1];
G.currentItem=C.inArray(F,G.positionsInArray)
}else{F=H[J+1];
G.currentItem=J+1
}}}});
return G.currentItem
},moveDirection:function(){var E=this,F;
if(E.newRelativeX<0){F="right";
E.playDirection="next"
}else{F="left";
E.playDirection="prev"
}return F
},customEvents:function(){var E=this;
E.$elem.on("owl.next",function(){E.next()
});
E.$elem.on("owl.prev",function(){E.prev()
});
E.$elem.on("owl.play",function(F,G){E.options.autoPlay=G;
E.play();
E.hoverStatus="play"
});
E.$elem.on("owl.stop",function(){E.stop();
E.hoverStatus="stop"
});
E.$elem.on("owl.goTo",function(G,F){E.goTo(F)
});
E.$elem.on("owl.jumpTo",function(G,F){E.jumpTo(F)
})
},stopOnHover:function(){var E=this;
if(E.options.stopOnHover===true&&E.browser.isTouch!==true&&E.options.autoPlay!==false){E.$elem.on("mouseover",function(){E.stop()
});
E.$elem.on("mouseout",function(){if(E.hoverStatus!=="stop"){E.play()
}})
}},lazyLoad:function(){var J=this,H,F,I,G,E;
if(J.options.lazyLoad===false){return false
}for(H=0;
H<J.itemsAmount;
H+=1){F=C(J.$owlItems[H]);
if(F.data("owl-loaded")==="loaded"){continue
}I=F.data("owl-item");
G=F.find(".lazyOwl");
if(typeof G.data("src")!=="string"){F.data("owl-loaded","loaded");
continue
}if(F.data("owl-loaded")===undefined){G.hide();
F.addClass("loading").data("owl-loaded","checked")
}if(J.options.lazyFollow===true){E=I>=J.currentItem
}else{E=true
}if(E&&I<J.currentItem+J.options.items&&G.length){J.lazyPreload(F,G)
}}},lazyPreload:function(E,F){var I=this,H=0,J;
if(F.prop("tagName")==="DIV"){F.css("background-image","url("+F.data("src")+")");
J=true
}else{F[0].src=F.data("src")
}function G(){E.data("owl-loaded","loaded").removeClass("loading");
F.removeAttr("data-src");
if(I.options.lazyEffect==="fade"){F.fadeIn(400)
}else{F.show()
}if(typeof I.options.afterLazyLoad==="function"){I.options.afterLazyLoad.apply(this,[I.$elem])
}}function K(){H+=1;
if(I.completeImg(F.get(0))||J===true){G()
}else{if(H<=100){B.setTimeout(K,100)
}else{G()
}}}K()
},autoHeight:function(){var H=this,I=C(H.$owlItems[H.currentItem]).find("img"),G;
function E(){var J=C(H.$owlItems[H.currentItem]).height();
H.wrapperOuter.css("height",J+"px");
if(!H.wrapperOuter.hasClass("autoHeight")){B.setTimeout(function(){H.wrapperOuter.addClass("autoHeight")
},0)
}}function F(){G+=1;
if(H.completeImg(I.get(0))){E()
}else{if(G<=100){B.setTimeout(F,100)
}else{H.wrapperOuter.css("height","")
}}}if(I.get(0)!==undefined){G=0;
F()
}else{E()
}},completeImg:function(E){var F;
if(!E.complete){return false
}F=typeof E.naturalWidth;
if(F!=="undefined"&&E.naturalWidth===0){return false
}return true
},onVisibleItems:function(){var F=this,E;
if(F.options.addClassActive===true){F.$owlItems.removeClass("active")
}F.visibleItems=[];
for(E=F.currentItem;
E<F.currentItem+F.options.items;
E+=1){F.visibleItems.push(E);
if(F.options.addClassActive===true){C(F.$owlItems[E]).addClass("active")
}}F.owl.visibleItems=F.visibleItems
},transitionTypes:function(E){var F=this;
F.outClass="owl-"+E+"-out";
F.inClass="owl-"+E+"-in"
},singleItemTransition:function(){var F=this,H=F.outClass,K=F.inClass,J=F.$owlItems.eq(F.currentItem),I=F.$owlItems.eq(F.prevItem),M=Math.abs(F.positionsInArray[F.currentItem])+F.positionsInArray[F.prevItem],L=Math.abs(F.positionsInArray[F.currentItem])+F.itemWidth/2,G="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
F.isTransition=true;
F.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":L+"px","-moz-perspective-origin":L+"px","perspective-origin":L+"px"});
function E(N){return{position:"relative",left:N+"px"}
}I.css(E(M,10)).addClass(H).on(G,function(){F.endPrev=true;
I.off(G);
F.clearTransStyle(I,H)
});
J.addClass(K).on(G,function(){F.endCurrent=true;
J.off(G);
F.clearTransStyle(J,K)
})
},clearTransStyle:function(F,E){var G=this;
F.css({position:"",left:""}).removeClass(E);
if(G.endPrev&&G.endCurrent){G.$owlWrapper.removeClass("owl-origin");
G.endPrev=false;
G.endCurrent=false;
G.isTransition=false
}},owlStatus:function(){var E=this;
E.owl={userOptions:E.userOptions,baseElement:E.$elem,userItems:E.$userItems,owlItems:E.$owlItems,currentItem:E.currentItem,prevItem:E.prevItem,visibleItems:E.visibleItems,isTouch:E.browser.isTouch,browser:E.browser,dragDirection:E.dragDirection}
},clearEvents:function(){var E=this;
E.$elem.off(".owl owl mousedown.disableTextSelect");
C(A).off(".owl owl");
C(B).off("resize",E.resizer)
},unWrap:function(){var E=this;
if(E.$elem.children().length!==0){E.$owlWrapper.unwrap();
E.$userItems.unwrap().unwrap();
if(E.owlControls){E.owlControls.remove()
}}E.clearEvents();
E.$elem.attr("style",E.$elem.data("owl-originalStyles")||"");
E.$elem.attr("class",E.$elem.data("owl-originalClasses"))
},destroy:function(){var E=this;
E.stop();
B.clearInterval(E.checkVisible);
E.unWrap();
E.$elem.removeData()
},reinit:function(G){var F=this,E=C.extend({},F.userOptions,G);
F.unWrap();
F.init(E,F.$elem)
},addItem:function(H,F){var G=this,E;
if(!H){return false
}if(G.$elem.children().length===0){G.$elem.append(H);
G.setVars();
return false
}G.unWrap();
if(F===undefined||F===-1){E=-1
}else{E=F
}if(E>=G.$userItems.length||E===-1){G.$userItems.eq(-1).after(H)
}else{G.$userItems.eq(E).before(H)
}G.setVars()
},removeItem:function(F){var G=this,E;
if(G.$elem.children().length===0){return false
}if(F===undefined||F===-1){E=-1
}else{E=F
}G.unWrap();
G.$userItems.eq(E).remove();
G.setVars()
}};
C.fn.owlCarousel=function(E){return this.each(function(){if(C(this).data("owl-init")===true){return false
}C(this).data("owl-init",true);
var F=Object.create(D);
F.init(E,this);
C.data(this,"owlCarousel",F)
})
};
C.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:B,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false}
}(jQuery,window,document));
var BCL=BCL||{};
BCL.player;
BCL.APIModules;
BCL.adEvent;
BCL.captionsEvent;
BCL.contentEvent;
BCL.cuePointEvent;
BCL.mediaEvent;
BCL.listOfVideoPlayers=new Array();
BCL.onPlayerLoaded=function(A){BCL.player=brightcove.api.getExperience(A);
BCL.APIModules=brightcove.api.modules.APIModules;
BCL.adEvent=brightcove.api.events.AdEvent;
BCL.captionsEvent=brightcove.api.events.CaptionsEvent;
BCL.contentEvent=brightcove.api.events.ContentEvent;
BCL.cuePointEvent=brightcove.api.events.CuePointEvent;
BCL.mediaEvent=brightcove.api.events.MediaEvent
};
BCL.onPlayerReady=function(B){var A=BCL.player.getModule(BCL.APIModules.VIDEO_PLAYER);
BCL.addVideoPlayer(A)
};
BCL.onPlayerError=function(A){};
BCL.onMediaEventHandler=function(A){};
BCL.pausePlayerByObjectId=function(B){if(typeof BCL.listOfVideoPlayers!="undefined"&&typeof B!="undefined"){for(var A=0;
A<BCL.listOfVideoPlayers.length;
A++){if(BCL.listOfVideoPlayers[A].experience.id===B){if(BCL.listOfVideoPlayers[A]!=null){BCL.listOfVideoPlayers[A].pause(true)
}break
}}}};
BCL.findPlayerByObjectId=function(B){if(typeof BCL.listOfVideoPlayers!="undefined"&&typeof B!="undefined"){for(var A=0;
A<BCL.listOfVideoPlayers.length;
A++){if(BCL.listOfVideoPlayers[A].experience.id===B){if(BCL.listOfVideoPlayers[A]!=null){return BCL.listOfVideoPlayers[A]
}else{return null
}}}return null
}else{return null
}};
BCL.addVideoPlayer=function(A){BCL.listOfVideoPlayers[BCL.listOfVideoPlayers.length]=A
};
BCL.createVideo=function(F,A,C,H,G,B){var E='<object id="myExperience_'+B+'" class="BrightcoveExperience">';
E+='<param name="width" value="'+F+'" />';
E+='<param name="height" value="'+A+'" />';
E+='<param name="playerID" value="'+C+'" />';
E+='<param name="playerKey" value="'+H+'" />';
E+='<param name="isVid" value="true" />';
E+='<param name="isUI" value="true" />';
E+='<param name="dynamicStreaming" value="true" />';
E+='<param name="@videoPlayer" value="'+G+'" />';
E+='<param name="autoStart" value="true" />';
E+='<param name="includeAPI" value="true" /> ';
E+='<param name="htmlFallback" value="true" /> ';
E+='<param name="templateLoadHandler" value="BCL.onPlayerLoaded" />';
E+='<param name="templateReadyHandler" value="BCL.onPlayerReady" />';
E+='<param name="templateErrorHandler" value="BCL.onPlayerError" />';
E+='<param name="wmode" value="transparent" />';
if(window.location.protocol=="https:"){E+='<param name="secureConnections" value="true" />';
E+='<param name="secureHTMLConnections" value="true" />'
}E+="</object>";
E+='<script type="text/javascript">brightcove.createExperiences();<\/script>';
var D=document.getElementById(B);
if(D===null){console.log("There is no containter for this video id: "+B)
}else{D.innerHTML=E
}};
BCL.createVideoWithNoAutoPlay=function(F,A,C,H,G,B){var E='<object id="myExperience_'+B+'" class="BrightcoveExperience">';
E+='<param name="width" value="'+F+'" />';
E+='<param name="height" value="'+A+'" />';
E+='<param name="playerID" value="'+C+'" />';
E+='<param name="playerKey" value="'+H+'" />';
E+='<param name="isVid" value="true" />';
E+='<param name="isUI" value="true" />';
E+='<param name="dynamicStreaming" value="true" />';
E+='<param name="@videoPlayer" value="'+G+'" />';
E+='<param name="autoStart" value="false" />';
E+='<param name="includeAPI" value="true" /> ';
E+='<param name="htmlFallback" value="true" /> ';
E+='<param name="templateLoadHandler" value="BCL.onPlayerLoaded" />';
E+='<param name="templateReadyHandler" value="BCL.onPlayerReady" />';
E+='<param name="templateErrorHandler" value="BCL.onPlayerError" />';
E+='<param name="wmode" value="transparent" />';
if(window.location.protocol=="https:"){E+='<param name="secureConnections" value="true" />';
E+='<param name="secureHTMLConnections" value="true" />'
}E+="</object>";
E+='<script type="text/javascript">brightcove.createExperiences();<\/script>';
var D=document.getElementById(B);
if(D===null){console.log("There is no containter for this video id: "+B)
}else{D.innerHTML=E
}};
BCL.brightcoveContainer="#lightbox-container .brightcove-container";
BCL.playInLightbox=function(){$(BCL.brightcoveContainer).each(function(){if($(this).attr("position")=="show"){BCL.createVideo($(this).attr("width"),$(this).attr("height"),$(this).attr("playerid"),$(this).attr("key"),$(this).attr("player"),$(this).attr("containerid"));
brightcove.createExperiences()
}})
};
!function(A){"function"==typeof define&&define.amd?define(["jquery"],A):"object"==typeof exports?module.exports=A:A(jQuery)
}(function(K){function J(V){var U=V||window.event,T=C.call(arguments,1),S=0,R=0,Q=0,P=0,O=0,N=0;
if(V=K.event.fix(U),V.type="mousewheel","detail" in U&&(Q=-1*U.detail),"wheelDelta" in U&&(Q=U.wheelDelta),"wheelDeltaY" in U&&(Q=U.wheelDeltaY),"wheelDeltaX" in U&&(R=-1*U.wheelDeltaX),"axis" in U&&U.axis===U.HORIZONTAL_AXIS&&(R=-1*Q,Q=0),S=0===Q?R:Q,"deltaY" in U&&(Q=-1*U.deltaY,S=Q),"deltaX" in U&&(R=U.deltaX,0===Q&&(S=-1*R)),0!==Q||0!==R){if(1===U.deltaMode){var M=K.data(this,"mousewheel-line-height");
S*=M,Q*=M,R*=M
}else{if(2===U.deltaMode){var L=K.data(this,"mousewheel-page-height");
S*=L,Q*=L,R*=L
}}if(P=Math.max(Math.abs(Q),Math.abs(R)),(!F||F>P)&&(F=P,H(U,P)&&(F/=40)),H(U,P)&&(S/=40,R/=40,Q/=40),S=Math[S>=1?"floor":"ceil"](S/F),R=Math[R>=1?"floor":"ceil"](R/F),Q=Math[Q>=1?"floor":"ceil"](Q/F),A.settings.normalizeOffset&&this.getBoundingClientRect){var W=this.getBoundingClientRect();
O=V.clientX-W.left,N=V.clientY-W.top
}return V.deltaX=R,V.deltaY=Q,V.deltaFactor=F,V.offsetX=O,V.offsetY=N,V.deltaMode=0,T.unshift(V,S,R,Q),G&&clearTimeout(G),G=setTimeout(I,200),(K.event.dispatch||K.event.handle).apply(this,T)
}}function I(){F=null
}function H(M,L){return A.settings.adjustOldDeltas&&"mousewheel"===M.type&&L%120===0
}var G,F,E=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],D="onwheel" in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],C=Array.prototype.slice;
if(K.event.fixHooks){for(var B=E.length;
B;
){K.event.fixHooks[E[--B]]=K.event.mouseHooks
}}var A=K.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener){for(var L=D.length;
L;
){this.addEventListener(D[--L],J,!1)
}}else{this.onmousewheel=J
}K.data(this,"mousewheel-line-height",A.getLineHeight(this)),K.data(this,"mousewheel-page-height",A.getPageHeight(this))
},teardown:function(){if(this.removeEventListener){for(var L=D.length;
L;
){this.removeEventListener(D[--L],J,!1)
}}else{this.onmousewheel=null
}K.removeData(this,"mousewheel-line-height"),K.removeData(this,"mousewheel-page-height")
},getLineHeight:function(L){var M=K(L)["offsetParent" in K.fn?"offsetParent":"parent"]();
return M.length||(M=K("body")),parseInt(M.css("fontSize"),10)
},getPageHeight:function(L){return K(L).height()
},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};
K.fn.extend({mousewheel:function(L){return L?this.bind("mousewheel",L):this.trigger("mousewheel")
},unmousewheel:function(L){return this.unbind("mousewheel",L)
}})
});
(function(H,D,C,L){var K="mCustomScrollbar",O="mCS",E=".mCustomScrollbar",J={setWidth:false,setHeight:false,setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:true,autoHideScrollbar:false,autoExpandScrollbar:false,alwaysShowScrollbar:0,snapAmount:null,snapOffset:0,mouseWheel:{enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false,disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{enable:false,scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:true,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoExpandHorizontalScroll:false,autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:true,updateOnImageLoad:true,updateOnSelectorChange:false},theme:"light",callbacks:{onScrollStart:false,onScroll:false,onTotalScroll:false,onTotalScrollBack:false,whileScrolling:false,onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:true},live:false,liveSelector:null},F=0,A={},M=function(P){if(A[P]){clearTimeout(A[P]);
I._delete.call(null,A[P])
}},G=(D.attachEvent&&!D.addEventListener)?1:0,B=false,N={init:function(R){var R=H.extend(true,{},J,R),S=I._selector.call(this);
if(R.live){var P=R.liveSelector||this.selector||E,Q=H(P);
if(R.live==="off"){M(P);
return 
}A[P]=setTimeout(function(){Q.mCustomScrollbar(R);
if(R.live==="once"&&Q.length){M(P)
}},500)
}else{M(P)
}R.setWidth=(R.set_width)?R.set_width:R.setWidth;
R.setHeight=(R.set_height)?R.set_height:R.setHeight;
R.axis=(R.horizontalScroll)?"x":I._findAxis.call(null,R.axis);
R.scrollInertia=R.scrollInertia<17?17:R.scrollInertia;
if(typeof R.mouseWheel!=="object"&&R.mouseWheel==true){R.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}
}R.mouseWheel.scrollAmount=!R.mouseWheelPixels?R.mouseWheel.scrollAmount:R.mouseWheelPixels;
R.mouseWheel.normalizeDelta=!R.advanced.normalizeMouseWheelDelta?R.mouseWheel.normalizeDelta:R.advanced.normalizeMouseWheelDelta;
R.scrollButtons.scrollType=I._findScrollButtonsType.call(null,R.scrollButtons.scrollType);
I._theme.call(null,R);
return H(S).each(function(){var W=H(this);
if(!W.data(O)){W.data(O,{idx:++F,opt:R,scrollRatio:{y:null,x:null},overflowed:null,bindEvents:false,tweenRunning:false,sequential:{},langDir:W.css("direction"),cbOffsets:null,trigger:null});
var U=W.data(O).opt,V=W.data("mcs-axis"),X=W.data("mcs-scrollbar-position"),T=W.data("mcs-theme");
if(V){U.axis=V
}if(X){U.scrollbarPosition=X
}if(T){U.theme=T;
I._theme.call(null,U)
}I._pluginMarkup.call(this);
N.update.call(null,W)
}})
},update:function(P){var Q=P||I._selector.call(this);
return H(Q).each(function(){var U=H(this);
if(U.data(O)){var S=U.data(O),T=S.opt,W=H("#mCSB_"+S.idx+"_container"),V=[H("#mCSB_"+S.idx+"_dragger_vertical"),H("#mCSB_"+S.idx+"_dragger_horizontal")];
if(!W.length){return 
}if(S.tweenRunning){I._stop.call(null,U)
}if(U.hasClass("mCS_disabled")){U.removeClass("mCS_disabled")
}if(U.hasClass("mCS_destroyed")){U.removeClass("mCS_destroyed")
}I._maxHeight.call(this);
I._expandContentHorizontally.call(this);
if(T.axis!=="y"&&!T.advanced.autoExpandHorizontalScroll){W.css("width",I._contentWidth(W.children()))
}S.overflowed=I._overflowed.call(this);
I._scrollbarVisibility.call(this);
if(T.autoDraggerLength){I._setDraggerLength.call(this)
}I._scrollRatio.call(this);
I._bindEvents.call(this);
var R=[Math.abs(W[0].offsetTop),Math.abs(W[0].offsetLeft)];
if(T.axis!=="x"){if(!S.overflowed[0]){I._resetContentPosition.call(this);
if(T.axis==="y"){I._unbindEvents.call(this)
}else{if(T.axis==="yx"&&S.overflowed[1]){I._scrollTo.call(this,U,R[1].toString(),{dir:"x",dur:0,overwrite:"none"})
}}}else{if(V[0].height()>V[0].parent().height()){I._resetContentPosition.call(this)
}else{I._scrollTo.call(this,U,R[0].toString(),{dir:"y",dur:0,overwrite:"none"})
}}}if(T.axis!=="y"){if(!S.overflowed[1]){I._resetContentPosition.call(this);
if(T.axis==="x"){I._unbindEvents.call(this)
}else{if(T.axis==="yx"&&S.overflowed[0]){I._scrollTo.call(this,U,R[0].toString(),{dir:"y",dur:0,overwrite:"none"})
}}}else{if(V[1].width()>V[1].parent().width()){I._resetContentPosition.call(this)
}else{I._scrollTo.call(this,U,R[1].toString(),{dir:"x",dur:0,overwrite:"none"})
}}}I._autoUpdate.call(this)
}})
},scrollTo:function(P,Q){if(typeof P=="undefined"||P==null){return 
}var R=I._selector.call(this);
return H(R).each(function(){var V=H(this);
if(V.data(O)){var S=V.data(O),T=S.opt,U={trigger:"external",scrollInertia:T.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:false,callbacks:true,onStart:true,onUpdate:true,onComplete:true},X=H.extend(true,{},U,Q),Y=I._arr.call(this,P),W=X.scrollInertia<17?17:X.scrollInertia;
Y[0]=I._to.call(this,Y[0],"y");
Y[1]=I._to.call(this,Y[1],"x");
if(X.moveDragger){Y[0]*=S.scrollRatio.y;
Y[1]*=S.scrollRatio.x
}X.dur=W;
setTimeout(function(){if(Y[0]!==null&&typeof Y[0]!=="undefined"&&T.axis!=="x"&&S.overflowed[0]){X.dir="y";
X.overwrite="all";
I._scrollTo.call(this,V,Y[0].toString(),X)
}if(Y[1]!==null&&typeof Y[1]!=="undefined"&&T.axis!=="y"&&S.overflowed[1]){X.dir="x";
X.overwrite="none";
I._scrollTo.call(this,V,Y[1].toString(),X)
}},60)
}})
},stop:function(){var P=I._selector.call(this);
return H(P).each(function(){var Q=H(this);
if(Q.data(O)){I._stop.call(null,Q)
}})
},disable:function(P){var Q=I._selector.call(this);
return H(Q).each(function(){var T=H(this);
if(T.data(O)){var R=T.data(O),S=R.opt;
I._autoUpdate.call(this,"remove");
I._unbindEvents.call(this);
if(P){I._resetContentPosition.call(this)
}I._scrollbarVisibility.call(this,true);
T.addClass("mCS_disabled")
}})
},destroy:function(){var P=I._selector.call(this);
return H(P).each(function(){var T=H(this);
if(T.data(O)){var R=T.data(O),S=R.opt,V=H("#mCSB_"+R.idx),U=H("#mCSB_"+R.idx+"_container"),Q=H(".mCSB_"+R.idx+"_scrollbar");
if(S.live){M(P)
}I._autoUpdate.call(this,"remove");
I._unbindEvents.call(this);
I._resetContentPosition.call(this);
T.removeData(O);
I._delete.call(null,this.mcs);
Q.remove();
V.replaceWith(U.contents());
T.removeClass(K+" _"+O+"_"+R.idx+" mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")
}})
}},I={_selector:function(){return(typeof H(this)!=="object"||H(this).length<1)?E:this
},_theme:function(R){var S=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],T=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],U=["minimal","minimal-dark"],P=["minimal","minimal-dark"],Q=["minimal","minimal-dark"];
R.autoDraggerLength=H.inArray(R.theme,S)>-1?false:R.autoDraggerLength;
R.autoExpandScrollbar=H.inArray(R.theme,T)>-1?false:R.autoExpandScrollbar;
R.scrollButtons.enable=H.inArray(R.theme,U)>-1?false:R.scrollButtons.enable;
R.autoHideScrollbar=H.inArray(R.theme,P)>-1?true:R.autoHideScrollbar;
R.scrollbarPosition=H.inArray(R.theme,Q)>-1?"outside":R.scrollbarPosition
},_findAxis:function(P){return(P==="yx"||P==="xy"||P==="auto")?"yx":(P==="x"||P==="horizontal")?"x":"y"
},_findScrollButtonsType:function(P){return(P==="stepped"||P==="pixels"||P==="step"||P==="click")?"stepped":"stepless"
},_pluginMarkup:function(){var V=H(this),W=V.data(O),P=W.opt,a=P.autoExpandScrollbar?" mCSB_scrollTools_onDrag_expand":"",S=["<div id='mCSB_"+W.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+W.idx+"_scrollbar mCS-"+P.theme+" mCSB_scrollTools_vertical"+a+"'><div class='mCSB_draggerContainer'><div id='mCSB_"+W.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+W.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+W.idx+"_scrollbar mCS-"+P.theme+" mCSB_scrollTools_horizontal"+a+"'><div class='mCSB_draggerContainer'><div id='mCSB_"+W.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],Z=P.axis==="yx"?"mCSB_vertical_horizontal":P.axis==="x"?"mCSB_horizontal":"mCSB_vertical",X=P.axis==="yx"?S[0]+S[1]:P.axis==="x"?S[1]:S[0],Y=P.axis==="yx"?"<div id='mCSB_"+W.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",b=P.autoHideScrollbar?" mCS-autoHide":"",R=(P.axis!=="x"&&W.langDir==="rtl")?" mCS-dir-rtl":"";
if(P.setWidth){V.css("width",P.setWidth)
}if(P.setHeight){V.css("height",P.setHeight)
}P.setLeft=(P.axis!=="y"&&W.langDir==="rtl")?"989999px":P.setLeft;
V.addClass(K+" _"+O+"_"+W.idx+b+R).wrapInner("<div id='mCSB_"+W.idx+"' class='mCustomScrollBox mCS-"+P.theme+" "+Z+"'><div id='mCSB_"+W.idx+"_container' class='mCSB_container' style='position:relative; top:"+P.setTop+"; left:"+P.setLeft+";' dir="+W.langDir+" /></div>");
var Q=H("#mCSB_"+W.idx),U=H("#mCSB_"+W.idx+"_container");
if(P.axis!=="y"&&!P.advanced.autoExpandHorizontalScroll){U.css("width",I._contentWidth(U.children()))
}if(P.scrollbarPosition==="outside"){if(V.css("position")==="static"){V.css("position","relative")
}V.css("overflow","visible");
Q.addClass("mCSB_outside").after(X)
}else{Q.addClass("mCSB_inside").append(X);
U.wrap(Y)
}I._scrollButtons.call(this);
var T=[H("#mCSB_"+W.idx+"_dragger_vertical"),H("#mCSB_"+W.idx+"_dragger_horizontal")];
T[0].css("min-height",T[0].height());
T[1].css("min-width",T[1].width())
},_contentWidth:function(P){return Math.max.apply(Math,P.map(function(){return H(this).outerWidth(true)
}).get())
},_expandContentHorizontally:function(){var R=H(this),P=R.data(O),Q=P.opt,S=H("#mCSB_"+P.idx+"_container");
if(Q.advanced.autoExpandHorizontalScroll&&Q.axis!=="y"){S.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:(Math.ceil(S[0].getBoundingClientRect().right+0.4)-Math.floor(S[0].getBoundingClientRect().left)),position:"relative"}).unwrap()
}},_scrollButtons:function(){var R=H(this),P=R.data(O),Q=P.opt,T=H(".mCSB_"+P.idx+"_scrollbar:first"),S=["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"],U=[(Q.axis==="x"?S[2]:S[0]),(Q.axis==="x"?S[3]:S[1]),S[2],S[3]];
if(Q.scrollButtons.enable){T.prepend(U[0]).append(U[1]).next(".mCSB_scrollTools").prepend(U[2]).append(U[3])
}},_maxHeight:function(){var S=H(this),P=S.data(O),Q=P.opt,U=H("#mCSB_"+P.idx),V=S.css("max-height"),T=V.indexOf("%")!==-1,W=S.css("box-sizing");
if(V!=="none"){var R=T?S.parent().height()*parseInt(V)/100:parseInt(V);
if(W==="border-box"){R-=((S.innerHeight()-S.height())+(S.outerHeight()-S.innerHeight()))
}U.css("max-height",Math.round(R))
}},_setDraggerLength:function(){var V=H(this),X=V.data(O),R=H("#mCSB_"+X.idx),U=H("#mCSB_"+X.idx+"_container"),S=[H("#mCSB_"+X.idx+"_dragger_vertical"),H("#mCSB_"+X.idx+"_dragger_horizontal")],W=[R.height()/U.outerHeight(false),R.width()/U.outerWidth(false)],Q=[parseInt(S[0].css("min-height")),Math.round(W[0]*S[0].parent().height()),parseInt(S[1].css("min-width")),Math.round(W[1]*S[1].parent().width())],P=G&&(Q[1]<Q[0])?Q[0]:Q[1],T=G&&(Q[3]<Q[2])?Q[2]:Q[3];
S[0].css({height:P,"max-height":(S[0].parent().height()-10)}).find(".mCSB_dragger_bar").css({"line-height":Q[0]+"px"});
S[1].css({width:T,"max-width":(S[1].parent().width()-10)})
},_scrollRatio:function(){var R=H(this),P=R.data(O),U=H("#mCSB_"+P.idx),T=H("#mCSB_"+P.idx+"_container"),S=[H("#mCSB_"+P.idx+"_dragger_vertical"),H("#mCSB_"+P.idx+"_dragger_horizontal")],Q=[T.outerHeight(false)-U.height(),T.outerWidth(false)-U.width()],V=[Q[0]/(S[0].parent().height()-S[0].height()),Q[1]/(S[1].parent().width()-S[1].width())];
P.scrollRatio={y:V[0],x:V[1]}
},_onDragClasses:function(S,Q,T){var R=T?"mCSB_dragger_onDrag_expanded":"",U=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag"],P=S.closest(".mCSB_scrollTools");
if(Q==="active"){S.toggleClass(U[0]+" "+R);
P.toggleClass(U[1]);
S[0]._draggable=S[0]._draggable?0:1
}else{if(!S[0]._draggable){if(Q==="hide"){S.removeClass(U[0]);
P.removeClass(U[1])
}else{S.addClass(U[0]);
P.addClass(U[1])
}}}},_overflowed:function(){var Q=H(this),P=Q.data(O),T=H("#mCSB_"+P.idx),R=H("#mCSB_"+P.idx+"_container"),S=P.overflowed==null?R.height():R.outerHeight(false),U=P.overflowed==null?R.width():R.outerWidth(false);
return[S>T.height(),U>T.width()]
},_resetContentPosition:function(){var R=H(this),P=R.data(O),Q=P.opt,U=H("#mCSB_"+P.idx),T=H("#mCSB_"+P.idx+"_container"),S=[H("#mCSB_"+P.idx+"_dragger_vertical"),H("#mCSB_"+P.idx+"_dragger_horizontal")];
I._stop(R);
if((Q.axis!=="x"&&!P.overflowed[0])||(Q.axis==="y"&&P.overflowed[0])){S[0].add(T).css("top",0)
}if((Q.axis!=="y"&&!P.overflowed[1])||(Q.axis==="x"&&P.overflowed[1])){var V=dx=0;
if(P.langDir==="rtl"){V=U.width()-T.outerWidth(false);
dx=Math.abs(V/P.scrollRatio.x)
}T.css("left",V);
S[1].css("left",dx)
}},_bindEvents:function(){var R=H(this),P=R.data(O),Q=P.opt;
if(!P.bindEvents){I._draggable.call(this);
if(Q.contentTouchScroll){I._contentDraggable.call(this)
}if(Q.mouseWheel.enable){function S(){T=setTimeout(function(){if(!H.event.special.mousewheel){S()
}else{clearTimeout(T);
I._mousewheel.call(R[0])
}},1000)
}var T;
S()
}I._draggerRail.call(this);
I._wrapperScroll.call(this);
if(Q.advanced.autoScrollOnFocus){I._focus.call(this)
}if(Q.scrollButtons.enable){I._buttons.call(this)
}if(Q.keyboard.enable){I._keyboard.call(this)
}P.bindEvents=true
}},_unbindEvents:function(){var R=H(this),Q=R.data(O),U=O+"_"+Q.idx,P=".mCSB_"+Q.idx+"_scrollbar",S=H("#mCSB_"+Q.idx+",#mCSB_"+Q.idx+"_container,#mCSB_"+Q.idx+"_container_wrapper,"+P+" .mCSB_draggerContainer,#mCSB_"+Q.idx+"_dragger_vertical,#mCSB_"+Q.idx+"_dragger_horizontal,"+P+">a"),T=H("#mCSB_"+Q.idx+"_container");
if(Q.bindEvents){H(C).unbind("."+U);
S.each(function(){H(this).unbind("."+U)
});
clearTimeout(R[0]._focusTimeout);
I._delete.call(null,R[0]._focusTimeout);
clearTimeout(Q.sequential.step);
I._delete.call(null,Q.sequential.step);
clearTimeout(T[0].onCompleteTimeout);
I._delete.call(null,T[0].onCompleteTimeout);
Q.bindEvents=false
}},_scrollbarVisibility:function(V){var S=H(this),Q=S.data(O),R=Q.opt,W=H("#mCSB_"+Q.idx+"_container_wrapper"),U=W.length?W:H("#mCSB_"+Q.idx+"_container"),P=[H("#mCSB_"+Q.idx+"_scrollbar_vertical"),H("#mCSB_"+Q.idx+"_scrollbar_horizontal")],T=[P[0].find(".mCSB_dragger"),P[1].find(".mCSB_dragger")];
if(R.axis!=="x"){if(Q.overflowed[0]&&!V){P[0].add(T[0]).add(P[0].children("a")).css("display","block");
U.removeClass("mCS_no_scrollbar_y mCS_y_hidden")
}else{if(R.alwaysShowScrollbar){if(R.alwaysShowScrollbar!==2){T[0].add(P[0].children("a")).css("display","none")
}U.removeClass("mCS_y_hidden")
}else{P[0].css("display","none");
U.addClass("mCS_y_hidden")
}U.addClass("mCS_no_scrollbar_y")
}}if(R.axis!=="y"){if(Q.overflowed[1]&&!V){P[1].add(T[1]).add(P[1].children("a")).css("display","block");
U.removeClass("mCS_no_scrollbar_x mCS_x_hidden")
}else{if(R.alwaysShowScrollbar){if(R.alwaysShowScrollbar!==2){T[1].add(P[1].children("a")).css("display","none")
}U.removeClass("mCS_x_hidden")
}else{P[1].css("display","none");
U.addClass("mCS_x_hidden")
}U.addClass("mCS_no_scrollbar_x")
}}if(!Q.overflowed[0]&&!Q.overflowed[1]){S.addClass("mCS_no_scrollbar")
}else{S.removeClass("mCS_no_scrollbar")
}},_coordinates:function(Q){var R=Q.type;
switch(R){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[Q.originalEvent.pageY,Q.originalEvent.pageX];
break;
case"touchstart":case"touchmove":case"touchend":var P=Q.originalEvent.touches[0]||Q.originalEvent.changedTouches[0];
return[P.pageY,P.pageX];
break;
default:return[Q.pageY,Q.pageX]
}},_draggable:function(){var Y=H(this),a=Y.data(O),R=a.opt,P=O+"_"+a.idx,Z=["mCSB_"+a.idx+"_dragger_vertical","mCSB_"+a.idx+"_dragger_horizontal"],X=H("#mCSB_"+a.idx+"_container"),W=H("#"+Z[0]+",#"+Z[1]),S,U,T;
W.bind("mousedown."+P+" touchstart."+P+" pointerdown."+P+" MSPointerDown."+P,function(d){d.stopImmediatePropagation();
d.preventDefault();
if(!I._mouseBtnLeft(d)){return 
}B=true;
if(G){C.onselectstart=function(){return false
}
}V(false);
I._stop(Y);
S=H(this);
var c=S.offset(),b=I._coordinates(d)[0]-c.top,g=I._coordinates(d)[1]-c.left,e=S.height()+c.top,f=S.width()+c.left;
if(b<e&&b>0&&g<f&&g>0){U=b;
T=g
}I._onDragClasses(S,"active",R.autoExpandScrollbar)
}).bind("touchmove."+P,function(d){d.stopImmediatePropagation();
d.preventDefault();
var c=S.offset(),b=I._coordinates(d)[0]-c.top,e=I._coordinates(d)[1]-c.left;
Q(U,T,b,e)
});
H(C).bind("mousemove."+P+" pointermove."+P+" MSPointerMove."+P,function(d){if(S){var c=S.offset(),b=I._coordinates(d)[0]-c.top,e=I._coordinates(d)[1]-c.left;
if(U===b){return 
}Q(U,T,b,e)
}}).add(W).bind("mouseup."+P+" touchend."+P+" pointerup."+P+" MSPointerUp."+P,function(b){if(S){I._onDragClasses(S,"active",R.autoExpandScrollbar);
S=null
}B=false;
if(G){C.onselectstart=null
}V(true)
});
function V(d){var c=X.find("iframe");
if(!c.length){return 
}var b=!d?"none":"auto";
c.css("pointer-events",b)
}function Q(e,d,b,g){X[0].idleTimer=R.scrollInertia<233?250:0;
if(S.attr("id")===Z[1]){var f="x",c=((S[0].offsetLeft-d)+g)*a.scrollRatio.x
}else{var f="y",c=((S[0].offsetTop-e)+b)*a.scrollRatio.y
}I._scrollTo(Y,c.toString(),{dir:f,drag:true})
}},_contentDraggable:function(){var U=H(this),R=U.data(O),W=R.opt,b=O+"_"+R.idx,a=H("#mCSB_"+R.idx),S=H("#mCSB_"+R.idx+"_container"),Y=[H("#mCSB_"+R.idx+"_dragger_vertical"),H("#mCSB_"+R.idx+"_dragger_horizontal")],d,Z,Q,P,i=[],g=[],X,m,c,e,T,V,h=0,k,f=W.axis==="yx"?"none":"all";
S.bind("touchstart."+b+" pointerdown."+b+" MSPointerDown."+b,function(o){if(!I._pointerTouch(o)||B){return 
}var n=S.offset();
d=I._coordinates(o)[0]-n.top;
Z=I._coordinates(o)[1]-n.left
}).bind("touchmove."+b+" pointermove."+b+" MSPointerMove."+b,function(s){if(!I._pointerTouch(s)||B){return 
}s.stopImmediatePropagation();
m=I._getTime();
var t=a.offset(),q=I._coordinates(s)[0]-t.top,o=I._coordinates(s)[1]-t.left,r="mcsLinearOut";
i.push(q);
g.push(o);
if(R.overflowed[0]){var u=Y[0].parent().height()-Y[0].height(),p=((d-q)>0&&(q-d)>-(u*R.scrollRatio.y))
}if(R.overflowed[1]){var v=Y[1].parent().width()-Y[1].width(),n=((Z-o)>0&&(o-Z)>-(v*R.scrollRatio.x))
}if(p||n){s.preventDefault()
}V=W.axis==="yx"?[(d-q),(Z-o)]:W.axis==="x"?[null,(Z-o)]:[(d-q),null];
S[0].idleTimer=250;
if(R.overflowed[0]){j(V[0],h,r,"y","all",true)
}if(R.overflowed[1]){j(V[1],h,r,"x",f,true)
}});
a.bind("touchstart."+b+" pointerdown."+b+" MSPointerDown."+b,function(o){if(!I._pointerTouch(o)||B){return 
}o.stopImmediatePropagation();
I._stop(U);
X=I._getTime();
var n=a.offset();
Q=I._coordinates(o)[0]-n.top;
P=I._coordinates(o)[1]-n.left;
i=[];
g=[]
}).bind("touchend."+b+" pointerup."+b+" MSPointerUp."+b,function(u){if(!I._pointerTouch(u)||B){return 
}u.stopImmediatePropagation();
c=I._getTime();
var w=a.offset(),q=I._coordinates(u)[0]-w.top,o=I._coordinates(u)[1]-w.left;
if((c-m)>30){return 
}T=1000/(c-X);
var t="mcsEaseOut",s=T<2.5,n=s?[i[i.length-2],g[g.length-2]]:[0,0];
e=s?[(q-n[0]),(o-n[1])]:[q-Q,o-P];
var v=[Math.abs(e[0]),Math.abs(e[1])];
T=s?[Math.abs(e[0]/4),Math.abs(e[1]/4)]:[T,T];
var p=[Math.abs(S[0].offsetTop)-(e[0]*l((v[0]/T[0]),T[0])),Math.abs(S[0].offsetLeft)-(e[1]*l((v[1]/T[1]),T[1]))];
V=W.axis==="yx"?[p[0],p[1]]:W.axis==="x"?[null,p[1]]:[p[0],null];
k=[(v[0]*4)+W.scrollInertia,(v[1]*4)+W.scrollInertia];
var r=parseInt(W.contentTouchScroll)||0;
V[0]=v[0]>r?V[0]:0;
V[1]=v[1]>r?V[1]:0;
if(R.overflowed[0]){j(V[0],k[0],t,"y",f,false)
}if(R.overflowed[1]){j(V[1],k[1],t,"x",f,false)
}});
function l(n,p){var o=[p*1.5,p*2,p/1.5,p/2];
if(n>90){return p>4?o[0]:o[3]
}else{if(n>60){return p>3?o[3]:o[2]
}else{if(n>30){return p>8?o[1]:p>6?o[0]:p>4?p:o[2]
}else{return p>8?p:o[3]
}}}}function j(q,o,n,r,s,p){if(!q){return 
}I._scrollTo(U,q.toString(),{dur:o,scrollEasing:n,dir:r,overwrite:s,drag:p})
}},_mousewheel:function(){var R=H(this),P=R.data(O),Q=P.opt,T=O+"_"+P.idx,U=H("#mCSB_"+P.idx),S=[H("#mCSB_"+P.idx+"_dragger_vertical"),H("#mCSB_"+P.idx+"_dragger_horizontal")];
U.bind("mousewheel."+T,function(Z,V){I._stop(R);
if(I._disableMousewheel(R,Z.target)){return 
}var X=Q.mouseWheel.deltaFactor!=="auto"?parseInt(Q.mouseWheel.deltaFactor):(G&&Z.deltaFactor<100)?100:Z.deltaFactor<40?40:Z.deltaFactor||100;
if(Q.axis==="x"||Q.mouseWheel.axis==="x"){var c="x",W=[Math.round(X*P.scrollRatio.x),parseInt(Q.mouseWheel.scrollAmount)],a=Q.mouseWheel.scrollAmount!=="auto"?W[1]:W[0]>=U.width()?U.width()*0.9:W[0],e=Math.abs(H("#mCSB_"+P.idx+"_container")[0].offsetLeft),Y=S[1][0].offsetLeft,b=S[1].parent().width()-S[1].width(),d=Z.deltaX||Z.deltaY||V
}else{var c="y",W=[Math.round(X*P.scrollRatio.y),parseInt(Q.mouseWheel.scrollAmount)],a=Q.mouseWheel.scrollAmount!=="auto"?W[1]:W[0]>=U.height()?U.height()*0.9:W[0],e=Math.abs(H("#mCSB_"+P.idx+"_container")[0].offsetTop),Y=S[0][0].offsetTop,b=S[0].parent().height()-S[0].height(),d=Z.deltaY||V
}if((c==="y"&&!P.overflowed[0])||(c==="x"&&!P.overflowed[1])){return 
}if(Q.mouseWheel.invert){d=-d
}if(Q.mouseWheel.normalizeDelta){d=d<0?-1:1
}if((d>0&&Y!==0)||(d<0&&Y!==b)||Q.mouseWheel.preventDefault){Z.stopImmediatePropagation();
Z.preventDefault()
}I._scrollTo(R,(e-(d*a)).toString(),{dir:c})
})
},_disableMousewheel:function(R,P){var T=P.nodeName.toLowerCase(),S=R.data(O).opt.mouseWheel.disableOver,Q=["select","textarea"];
return H.inArray(T,S)>-1&&!(H.inArray(T,Q)>-1&&!H(P).is(":focus"))
},_draggerRail:function(){var R=H(this),Q=R.data(O),T=O+"_"+Q.idx,S=H("#mCSB_"+Q.idx+"_container"),P=S.parent(),U=H(".mCSB_"+Q.idx+"_scrollbar .mCSB_draggerContainer");
U.bind("touchstart."+T+" pointerdown."+T+" MSPointerDown."+T,function(V){B=true
}).bind("touchend."+T+" pointerup."+T+" MSPointerUp."+T,function(V){B=false
}).bind("click."+T,function(Z){if(H(Z.target).hasClass("mCSB_draggerContainer")||H(Z.target).hasClass("mCSB_draggerRail")){I._stop(R);
var X=H(this),a=X.find(".mCSB_dragger");
if(X.parent(".mCSB_scrollTools_horizontal").length>0){if(!Q.overflowed[1]){return 
}var Y="x",W=Z.pageX>a.offset().left?-1:1,V=Math.abs(S[0].offsetLeft)-(W*(P.width()*0.9))
}else{if(!Q.overflowed[0]){return 
}var Y="y",W=Z.pageY>a.offset().top?-1:1,V=Math.abs(S[0].offsetTop)-(W*(P.height()*0.9))
}I._scrollTo(R,V.toString(),{dir:Y,scrollEasing:"mcsEaseInOut"})
}})
},_focus:function(){var S=H(this),Q=S.data(O),R=Q.opt,U=O+"_"+Q.idx,T=H("#mCSB_"+Q.idx+"_container"),P=T.parent();
T.bind("focusin."+U,function(V){var W=H(C.activeElement),Y=T.find(".mCustomScrollBox").length,X=0;
if(!W.is(R.advanced.autoScrollOnFocus)){return 
}I._stop(S);
clearTimeout(S[0]._focusTimeout);
S[0]._focusTimer=Y?(X+17)*Y:0;
S[0]._focusTimeout=setTimeout(function(){var b=[W.offset().top-T.offset().top,W.offset().left-T.offset().left],c=[T[0].offsetTop,T[0].offsetLeft],a=[(c[0]+b[0]>=0&&c[0]+b[0]<P.height()-W.outerHeight(false)),(c[1]+b[1]>=0&&c[0]+b[1]<P.width()-W.outerWidth(false))],Z=(R.axis==="yx"&&!a[0]&&!a[1])?"none":"all";
if(R.axis!=="x"&&!a[0]){I._scrollTo(S,b[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:Z,dur:X})
}if(R.axis!=="y"&&!a[1]){I._scrollTo(S,b[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:Z,dur:X})
}},S[0]._focusTimer)
})
},_wrapperScroll:function(){var R=H(this),Q=R.data(O),S=O+"_"+Q.idx,P=H("#mCSB_"+Q.idx+"_container").parent();
P.bind("scroll."+S,function(T){P.scrollTop(0).scrollLeft(0)
})
},_buttons:function(){var R=H(this),P=R.data(O),Q=P.opt,W=P.sequential,U=O+"_"+P.idx,S=H("#mCSB_"+P.idx+"_container"),T=".mCSB_"+P.idx+"_scrollbar",V=H(T+">a");
V.bind("mousedown."+U+" touchstart."+U+" pointerdown."+U+" MSPointerDown."+U+" mouseup."+U+" touchend."+U+" pointerup."+U+" MSPointerUp."+U+" mouseout."+U+" pointerout."+U+" MSPointerOut."+U+" click."+U,function(Y){Y.preventDefault();
if(!I._mouseBtnLeft(Y)){return 
}var Z=H(this).attr("class");
W.type=Q.scrollButtons.scrollType;
switch(Y.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if(W.type==="stepped"){return 
}B=true;
P.tweenRunning=false;
X("on",Z);
break;
case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if(W.type==="stepped"){return 
}B=false;
if(W.dir){X("off",Z)
}break;
case"click":if(W.type!=="stepped"||P.tweenRunning){return 
}X("on",Z);
break
}function X(a,b){W.scrollAmount=Q.snapAmount||Q.scrollButtons.scrollAmount;
I._sequentialScroll.call(this,R,a,b)
}})
},_keyboard:function(){var V=H(this),W=V.data(O),Q=W.opt,S=W.sequential,X=O+"_"+W.idx,P=H("#mCSB_"+W.idx),T=H("#mCSB_"+W.idx+"_container"),R=T.parent(),U="input,textarea,select,datalist,keygen,[contenteditable='true']";
P.attr("tabindex","0").bind("blur."+X+" keydown."+X+" keyup."+X,function(a){switch(a.type){case"blur":if(W.tweenRunning&&S.dir){d("off",null)
}break;
case"keydown":case"keyup":var Y=a.keyCode?a.keyCode:a.which,e="on";
if((Q.axis!=="x"&&(Y===38||Y===40))||(Q.axis!=="y"&&(Y===37||Y===39))){if(((Y===38||Y===40)&&!W.overflowed[0])||((Y===37||Y===39)&&!W.overflowed[1])){return 
}if(a.type==="keyup"){e="off"
}if(!H(C.activeElement).is(U)){a.preventDefault();
a.stopImmediatePropagation();
d(e,Y)
}}else{if(Y===33||Y===34){if(W.overflowed[0]||W.overflowed[1]){a.preventDefault();
a.stopImmediatePropagation()
}if(a.type==="keyup"){I._stop(V);
var c=Y===34?-1:1;
if(Q.axis==="x"||(Q.axis==="yx"&&W.overflowed[1]&&!W.overflowed[0])){var b="x",Z=Math.abs(T[0].offsetLeft)-(c*(R.width()*0.9))
}else{var b="y",Z=Math.abs(T[0].offsetTop)-(c*(R.height()*0.9))
}I._scrollTo(V,Z.toString(),{dir:b,scrollEasing:"mcsEaseInOut"})
}}else{if(Y===35||Y===36){if(!H(C.activeElement).is(U)){if(W.overflowed[0]||W.overflowed[1]){a.preventDefault();
a.stopImmediatePropagation()
}if(a.type==="keyup"){if(Q.axis==="x"||(Q.axis==="yx"&&W.overflowed[1]&&!W.overflowed[0])){var b="x",Z=Y===35?Math.abs(R.width()-T.outerWidth(false)):0
}else{var b="y",Z=Y===35?Math.abs(R.height()-T.outerHeight(false)):0
}I._scrollTo(V,Z.toString(),{dir:b,scrollEasing:"mcsEaseInOut"})
}}}}}break
}function d(g,f){S.type=Q.keyboard.scrollType;
S.scrollAmount=Q.snapAmount||Q.keyboard.scrollAmount;
if(S.type==="stepped"&&W.tweenRunning){return 
}I._sequentialScroll.call(this,V,g,f)
}})
},_sequentialScroll:function(P,W,Y){var U=P.data(O),Q=U.opt,S=U.sequential,T=H("#mCSB_"+U.idx+"_container"),R=S.type==="stepped"?true:false;
switch(W){case"on":S.dir=[(Y==="mCSB_buttonRight"||Y==="mCSB_buttonLeft"||Y===39||Y===37?"x":"y"),(Y==="mCSB_buttonUp"||Y==="mCSB_buttonLeft"||Y===38||Y===37?-1:1)];
I._stop(P);
if(I._isNumeric(Y)&&S.type==="stepped"){return 
}X(R);
break;
case"off":V();
if(R||(U.tweenRunning&&S.dir)){X(true)
}break
}function X(d){var i=S.type!=="stepped",e=!d?1000/60:i?Q.scrollInertia/1.5:Q.scrollInertia,b=!d?2.5:i?7.5:40,f=[Math.abs(T[0].offsetTop),Math.abs(T[0].offsetLeft)],j=[U.scrollRatio.y>10?10:U.scrollRatio.y,U.scrollRatio.x>10?10:U.scrollRatio.x],a=S.dir[0]==="x"?f[1]+(S.dir[1]*(j[1]*b)):f[0]+(S.dir[1]*(j[0]*b)),g=S.dir[0]==="x"?f[1]+(S.dir[1]*parseInt(S.scrollAmount)):f[0]+(S.dir[1]*parseInt(S.scrollAmount)),h=S.scrollAmount!=="auto"?g:a,Z=!d?"mcsLinear":i?"mcsLinearOut":"mcsEaseInOut",c=!d?false:true;
if(d&&e<17){h=S.dir[0]==="x"?f[1]:f[0]
}I._scrollTo(P,h.toString(),{dir:S.dir[0],scrollEasing:Z,dur:e,onComplete:c});
if(d){S.dir=false;
return 
}clearTimeout(S.step);
S.step=setTimeout(function(){X()
},e)
}function V(){clearTimeout(S.step);
I._stop(P)
}},_arr:function(P){var Q=H(this).data(O).opt,R=[];
if(typeof P==="function"){P=P()
}if(!(P instanceof Array)){R[0]=P.y?P.y:P.x||Q.axis==="x"?null:P;
R[1]=P.x?P.x:P.y||Q.axis==="y"?null:P
}else{R=P.length>1?[P[0],P[1]]:Q.axis==="x"?[null,P[0]]:[P[0],null]
}if(typeof R[0]==="function"){R[0]=R[0]()
}if(typeof R[1]==="function"){R[1]=R[1]()
}return R
},_to:function(Z,Y){if(Z==null||typeof Z=="undefined"){return 
}var S=H(this),T=S.data(O),a=T.opt,P=H("#mCSB_"+T.idx+"_container"),Q=P.parent(),b=typeof Z;
if(!Y){Y=a.axis==="x"?"x":"y"
}var R=Y==="x"?P.outerWidth(false):P.outerHeight(false),X=Y==="x"?P.offset().left:P.offset().top,d=Y==="x"?P[0].offsetLeft:P[0].offsetTop,V=Y==="x"?"left":"top";
switch(b){case"function":return Z();
break;
case"object":if(Z.nodeType){var U=Y==="x"?H(Z).offset().left:H(Z).offset().top
}else{if(Z.jquery){if(!Z.length){return 
}var U=Y==="x"?Z.offset().left:Z.offset().top
}}return U-X;
break;
case"string":case"number":if(I._isNumeric.call(null,Z)){return Math.abs(Z)
}else{if(Z.indexOf("%")!==-1){return Math.abs(R*parseInt(Z)/100)
}else{if(Z.indexOf("-=")!==-1){return Math.abs(d-parseInt(Z.split("-=")[1]))
}else{if(Z.indexOf("+=")!==-1){var c=(d+parseInt(Z.split("+=")[1]));
return c>=0?0:Math.abs(c)
}else{if(Z.indexOf("px")!==-1&&I._isNumeric.call(null,Z.split("px")[0])){return Math.abs(Z.split("px")[0])
}else{if(Z==="top"||Z==="left"){return 0
}else{if(Z==="bottom"){return Math.abs(Q.height()-P.outerHeight(false))
}else{if(Z==="right"){return Math.abs(Q.width()-P.outerWidth(false))
}else{if(Z==="first"||Z==="last"){var W=P.find(":"+Z),U=Y==="x"?H(W).offset().left:H(W).offset().top;
return U-X
}else{if(H(Z).length){var U=Y==="x"?H(Z).offset().left:H(Z).offset().top;
return U-X
}else{P.css(V,Z);
N.update.call(null,S[0]);
return 
}}}}}}}}}}break
}},_autoUpdate:function(f){var Z=H(this),W=Z.data(O),P=W.opt,V=H("#mCSB_"+W.idx+"_container");
if(f){clearTimeout(V[0].autoUpdate);
I._delete.call(null,V[0].autoUpdate);
return 
}var a=V.parent(),h=[H("#mCSB_"+W.idx+"_scrollbar_vertical"),H("#mCSB_"+W.idx+"_scrollbar_horizontal")],b=function(){return[h[0].is(":visible")?h[0].outerHeight(true):0,h[1].is(":visible")?h[1].outerWidth(true):0]
},Y=Q(),R,X=[V.outerHeight(false),V.outerWidth(false),a.height(),a.width(),b()[0],b()[1]],S,e=U(),T;
d();
function d(){clearTimeout(V[0].autoUpdate);
V[0].autoUpdate=setTimeout(function(){if(P.advanced.updateOnSelectorChange){R=Q();
if(R!==Y){c();
Y=R;
return 
}}if(P.advanced.updateOnContentResize){S=[V.outerHeight(false),V.outerWidth(false),a.height(),a.width(),b()[0],b()[1]];
if(S[0]!==X[0]||S[1]!==X[1]||S[2]!==X[2]||S[3]!==X[3]||S[4]!==X[4]||S[5]!==X[5]){c();
X=S
}}if(P.advanced.updateOnImageLoad){T=U();
if(T!==e){V.find("img").each(function(){g(this.src)
});
e=T
}}if(P.advanced.updateOnSelectorChange||P.advanced.updateOnContentResize||P.advanced.updateOnImageLoad){d()
}},60)
}function U(){var i=0;
if(P.advanced.updateOnImageLoad){i=V.find("img").length
}return i
}function g(i){var l=new Image();
function j(n,m){return function(){return m.apply(n,arguments)
}
}function k(){this.onload=null;
c()
}l.onload=j(l,k);
l.src=i
}function Q(){if(P.advanced.updateOnSelectorChange===true){P.advanced.updateOnSelectorChange="*"
}var j=0,i=V.find(P.advanced.updateOnSelectorChange);
if(P.advanced.updateOnSelectorChange&&i.length>0){i.each(function(){j+=H(this).height()+H(this).width()
})
}return j
}function c(){clearTimeout(V[0].autoUpdate);
N.update.call(null,Z[0])
}},_snapAmount:function(P,R,Q){return(Math.round(P/R)*R-Q)
},_stop:function(R){var P=R.data(O),Q=H("#mCSB_"+P.idx+"_container,#mCSB_"+P.idx+"_container_wrapper,#mCSB_"+P.idx+"_dragger_vertical,#mCSB_"+P.idx+"_dragger_horizontal");
Q.each(function(){I._stopTween.call(this)
})
},_scrollTo:function(j,e,b){var U=j.data(O),d=U.opt,f={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:false,dur:d.scrollInertia,overwrite:"all",callbacks:true,onStart:true,onUpdate:true,onComplete:true},b=H.extend(f,b),Y=[b.dur,(b.drag?0:b.dur)],Z=H("#mCSB_"+U.idx),i=H("#mCSB_"+U.idx+"_container"),Q=d.callbacks.onTotalScrollOffset?I._arr.call(j,d.callbacks.onTotalScrollOffset):[0,0],l=d.callbacks.onTotalScrollBackOffset?I._arr.call(j,d.callbacks.onTotalScrollBackOffset):[0,0];
U.trigger=b.trigger;
if(d.snapAmount){e=I._snapAmount(e,d.snapAmount,d.snapOffset)
}switch(b.dir){case"x":var V=H("#mCSB_"+U.idx+"_dragger_horizontal"),R="left",g=i[0].offsetLeft,X=[Z.width()-i.outerWidth(false),V.parent().width()-V.width()],h=[e,(e/U.scrollRatio.x)],P=Q[1],T=l[1],k=P>0?P/U.scrollRatio.x:0,W=T>0?T/U.scrollRatio.x:0;
break;
case"y":var V=H("#mCSB_"+U.idx+"_dragger_vertical"),R="top",g=i[0].offsetTop,X=[Z.height()-i.outerHeight(false),V.parent().height()-V.height()],h=[e,(e/U.scrollRatio.y)],P=Q[0],T=l[0],k=P>0?P/U.scrollRatio.y:0,W=T>0?T/U.scrollRatio.y:0;
break
}if(h[1]<0){h=[0,0]
}else{if(h[1]>=X[1]){h=[X[0],X[1]]
}else{h[0]=-h[0]
}}clearTimeout(i[0].onCompleteTimeout);
if(!U.tweenRunning&&((g===0&&h[0]>=0)||(g===X[0]&&h[0]<=X[0]))){return 
}I._tweenTo.call(null,V[0],R,Math.round(h[1]),Y[1],b.scrollEasing);
I._tweenTo.call(null,i[0],R,Math.round(h[0]),Y[0],b.scrollEasing,b.overwrite,{onStart:function(){if(b.callbacks&&b.onStart&&!U.tweenRunning){if(c("onScrollStart")){a();
d.callbacks.onScrollStart.call(j[0])
}U.tweenRunning=true;
I._onDragClasses(V);
U.cbOffsets=S()
}},onUpdate:function(){if(b.callbacks&&b.onUpdate){if(c("whileScrolling")){a();
d.callbacks.whileScrolling.call(j[0])
}}},onComplete:function(){if(b.callbacks&&b.onComplete){if(d.axis==="yx"){clearTimeout(i[0].onCompleteTimeout)
}var m=i[0].idleTimer||0;
i[0].onCompleteTimeout=setTimeout(function(){if(c("onScroll")){a();
d.callbacks.onScroll.call(j[0])
}if(c("onTotalScroll")&&h[1]>=X[1]-k&&U.cbOffsets[0]){a();
d.callbacks.onTotalScroll.call(j[0])
}if(c("onTotalScrollBack")&&h[1]<=W&&U.cbOffsets[1]){a();
d.callbacks.onTotalScrollBack.call(j[0])
}U.tweenRunning=false;
i[0].idleTimer=0;
I._onDragClasses(V,"hide")
},m)
}}});
function c(m){return U&&d.callbacks[m]&&typeof d.callbacks[m]==="function"
}function S(){return[d.callbacks.alwaysTriggerOffsets||g>=X[0]+P,d.callbacks.alwaysTriggerOffsets||g<=-T]
}function a(){var n=[i[0].offsetTop,i[0].offsetLeft],m=[V[0].offsetTop,V[0].offsetLeft],p=[i.outerHeight(false),i.outerWidth(false)],o=[Z.height(),Z.width()];
j[0].mcs={content:i,top:n[0],left:n[1],draggerTop:m[0],draggerLeft:m[1],topPct:Math.round((100*Math.abs(n[0]))/(Math.abs(p[0])-o[0])),leftPct:Math.round((100*Math.abs(n[1]))/(Math.abs(p[1])-o[1])),direction:b.dir}
}},_tweenTo:function(f,Z,c,h,j,b,Q){var Q=Q||{},W=Q.onStart||function(){},g=Q.onUpdate||function(){},V=Q.onComplete||function(){},P=I._getTime(),T,X=0,d=f.offsetTop,a=f.style;
if(Z==="left"){d=f.offsetLeft
}var R=c-d;
f._mcsstop=0;
if(b!=="none"){e()
}i();
function S(){if(f._mcsstop){return 
}if(!X){W.call()
}X=I._getTime()-P;
Y();
if(X>=f._mcstime){f._mcstime=(X>f._mcstime)?X+T-(X-f._mcstime):X+T-1;
if(f._mcstime<X+1){f._mcstime=X+1
}}if(f._mcstime<h){f._mcsid=_request(S)
}else{V.call()
}}function Y(){if(h>0){f._mcscurrVal=U(f._mcstime,d,R,h,j);
a[Z]=Math.round(f._mcscurrVal)+"px"
}else{a[Z]=c+"px"
}g.call()
}function i(){T=1000/60;
f._mcstime=X+T;
_request=(!D.requestAnimationFrame)?function(k){Y();
return setTimeout(k,0.01)
}:D.requestAnimationFrame;
f._mcsid=_request(S)
}function e(){if(f._mcsid==null){return 
}if(!D.requestAnimationFrame){clearTimeout(f._mcsid)
}else{D.cancelAnimationFrame(f._mcsid)
}f._mcsid=null
}function U(q,k,m,n,p){switch(p){case"linear":case"mcsLinear":return m*q/n+k;
break;
case"mcsLinearOut":q/=n;
q--;
return m*Math.sqrt(1-q*q)+k;
break;
case"easeInOutSmooth":q/=n/2;
if(q<1){return m/2*q*q+k
}q--;
return -m/2*(q*(q-2)-1)+k;
break;
case"easeInOutStrong":q/=n/2;
if(q<1){return m/2*Math.pow(2,10*(q-1))+k
}q--;
return m/2*(-Math.pow(2,-10*q)+2)+k;
break;
case"easeInOut":case"mcsEaseInOut":q/=n/2;
if(q<1){return m/2*q*q*q+k
}q-=2;
return m/2*(q*q*q+2)+k;
break;
case"easeOutSmooth":q/=n;
q--;
return -m*(q*q*q*q-1)+k;
break;
case"easeOutStrong":return m*(-Math.pow(2,-10*q/n)+1)+k;
break;
case"easeOut":case"mcsEaseOut":default:var o=(q/=n)*q,l=o*q;
return k+m*(0.499999999999997*l*o+-2.5*o*o+5.5*l+-6.5*o+4*q)
}}},_getTime:function(){if(D.performance&&D.performance.now){return D.performance.now()
}else{if(D.performance&&D.performance.webkitNow){return D.performance.webkitNow()
}else{if(Date.now){return Date.now()
}else{return new Date().getTime()
}}}},_stopTween:function(){var P=this;
if(P._mcsid==null){return 
}if(!D.requestAnimationFrame){clearTimeout(P._mcsid)
}else{D.cancelAnimationFrame(P._mcsid)
}P._mcsid=null;
P._mcsstop=1
},_delete:function(P){try{delete P
}catch(Q){P=null
}},_mouseBtnLeft:function(P){return !(P.which&&P.which!==1)
},_pointerTouch:function(P){var Q=P.originalEvent.pointerType;
return !(Q&&Q!=="touch"&&Q!==2)
},_isNumeric:function(P){return !isNaN(parseFloat(P))&&isFinite(P)
}};
H.fn[K]=function(P){if(N[P]){return N[P].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof P==="object"||!P){return N.init.apply(this,arguments)
}else{H.error("Method "+P+" does not exist")
}}};
H[K]=function(P){if(N[P]){return N[P].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof P==="object"||!P){return N.init.apply(this,arguments)
}else{H.error("Method "+P+" does not exist")
}}};
H[K].defaults=J;
D[K]=true;
H(D).load(function(){H(E)[K]()
})
})(jQuery,window,document);
var ScheduledComponent={};
ScheduledComponent.loadScheduledComponents=function(){$("a.scheduler[href!='']").each(function(){var A=$(this);
var B=$("<div />");
B.load(A.attr("href"),function(){Lightbox.init()
});
A.after(B)
})
};
$(function(){ScheduledComponent.loadScheduledComponents()
});
var ssize;
var mobile=detectDevice();
var calcScreenSize=function(){if($(window).width()<="1024"&&$(window).width()>"640"){ssize="med"
}else{if($(window).width()<="640"){ssize="small"
}else{ssize="large"
}}};
function detectDevice(){var A=RegExp(".*(android|iphone|ipad|ipod|iemobile|blackberry).*");
return A.test(navigator.userAgent.toLowerCase())
}$(document).ready(calcScreenSize);
$(window).resize(calcScreenSize);
$(window).resize(detectDevice);
var styleSwitcher=styleSwitcher||{init:function(){var A=function(){$(".styleswitch").each(function(){var C=$(this).attr("data-large");
var E=$(this).attr("data-medium");
var B=$(this).attr("data-small");
var I=$(this).attr("data-lastelement");
var D=$(window).height();
if(I=="true"&&I!="undefined"){D=D-$("#footerSection").height()
}if(ssize=="large"){$(this).attr("style",C);
if(mobile&&$(this).hasClass("parallax")){$(this).hide()
}else{var G=$(this).attr("data-dtautoheight");
if(G=="true"){styleSwitcher.resize(this,D)
}}}else{if(ssize=="med"){$(this).attr("style",E);
var H=$(this).attr("data-tabautoheight");
if(H=="true"){styleSwitcher.resize(this,D)
}}else{if(ssize=="small"){$(this).attr("style",B);
var F=$(this).attr("data-mobautoheight");
if(F=="true"){styleSwitcher.resize(this,D)
}}}}})
};
A();
$(window).resize(A)
},resize:function(G,B){var A=$(G).children().eq(0).outerHeight();
if($(G).parents().hasClass("owl-wrapper")){var E=$(G).parents(".owl-wrapper");
var D=0;
var F=B;
var C=new Array();
$(E).find(".owl-item").each(function(){C[D]=this;
$(this).find("div.backgroundImage > div").each(function(){if($(this).hasClass("styleswitch")){$(this).css("height","auto")
}});
if($(this).height()>F){F=$(this).height()
}D++
});
for(D=0;
D<C.length;
D++){$(C[D]).find("div.backgroundImage > div").each(function(){if($(this).hasClass("styleswitch")){$(this).css("height",F)
}})
}}else{if(A<B){$(G).css("height",B)
}}}};
var slideBar=slideBar||{slideBarContainer:"#slidebar-container",sliceBarClick:"#menu",slideBarMenu:"#slidebar-menu",slideBarClose:"#slidebar-menu .icon-close",slideBarTimer:500,slideBarRight:"-335px",slideBarSubLinks:".sidebarmenu .sub",init:function(){$(slideBar.sliceBarClick).click(function(){$(slideBar.slideBarContainer).fadeIn();
$(slideBar.slideBarMenu).animate({right:"0"},slideBar.slideBarTimer)
});
$(slideBar.slideBarClose).click(function(){$(slideBar.slideBarContainer).fadeOut();
$(slideBar.slideBarMenu).animate({right:slideBar.slideBarRight},slideBar.slideBarTimer)
});
$(slideBar.slideBarContainer).click(function(A){$(slideBar.slideBarContainer).fadeOut();
$(slideBar.slideBarMenu).animate({right:slideBar.slideBarRight},slideBar.slideBarTimer)
});
$(slideBar.slideBarSubLinks).click(function(A){$(slideBar.slideBarContainer).fadeOut();
$(slideBar.slideBarMenu).animate({right:slideBar.slideBarRight},slideBar.slideBarTimer)
})
},defaultHide:function(){$(slideBar.slideBarMenu).css("right",slideBar.slideBarRight)
}};
var Preload=Preload||{init:function(){styleSwitcher.init()
}};
jQuery(function(){Preload.init()
});