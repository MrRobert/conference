window._g=window._g||{};
window._g.$=$;
_g.$.ajaxSettings.traditional=true;
window._g=window._g||{};
_g.shared={};
if(window.console===undefined){window.console={log:function(A){}}
}var CQURLInfo=CQURLInfo||{contextPath:null,requestPath:"",selectorString:null,selectors:[],extension:"html",suffix:null,systemId:"",runModes:""};
_g.shared.HTTP=new function(){var createResponse=function(){var response=new Object();
response.headers=new Object();
response.body=new Object();
return response
};
var getResponseFromXhr=function(request){if(!request){return null
}var response=createResponse();
response.body=request.responseText;
response.headers[_g.HTTP.HEADER_STATUS]=request.status;
response.responseText=request.responseText;
response.status=request.status;
return response
};
var contextPath=null;
var SCRIPT_URL_REGEXP=/\/etc\/clientlibs\/.*\/shared.*\.js$/;
var ENCODE_PATH_REGEXP=/[^1\w-\.!~\*'\(\)\/%;:@&=\$,]/;
var LOGIN_TRIGGERED=false;
return{EXTENSION_HTML:".html",EXTENSION_JSON:".json",EXTENSION_RES:".res",HEADER_STATUS:"Status",HEADER_MESSAGE:"Message",HEADER_LOCATION:"Location",HEADER_PATH:"Path",PARAM_NO_CACHE:"cq_ck",get:function(url,callback,scope,suppressForbiddenCheck){url=_g.HTTP.getXhrHookedURL(_g.HTTP.externalize(url,true));
if(callback!=undefined){return _g.$.ajax({type:"GET",url:url,complete:function(request,textStatus){var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"GET",url:url,async:false});
var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}return response
}catch(e){return null
}}},post:function(url,callback,params,scope,suppressErrorMsg,suppressForbiddenCheck){url=_g.HTTP.externalize(url,true);
var hook=_g.HTTP.getXhrHook(url,"POST",params);
if(hook){url=hook.url;
params=hook.params
}if(callback!=undefined){return _g.$.ajax({type:"POST",url:url,data:params,complete:function(request,textStatus){var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"POST",url:url,data:params,async:false});
var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}return response
}catch(e){return null
}}},getParameter:function(url,name){var params=_g.HTTP.getParameters(url,name);
return params!=null?params[0]:null
},getParameters:function(url,name){var values=[];
if(!name){return null
}name=encodeURIComponent(name);
if(url.indexOf("?")==-1){return null
}var query=url.substring(url.indexOf("?")+1);
if(query.indexOf(name)==-1){return null
}var queryPts=query.split("&");
for(var i=0;
i<queryPts.length;
i++){var paramPts=queryPts[i].split("=");
if(paramPts[0]==name){values.push(paramPts.length>1?decodeURIComponent(paramPts[1]):"")
}}return values.length>0?values:null
},addParameter:function(url,name,value){if(value&&value instanceof Array){for(var i=0;
i<value.length;
i++){url=_g.HTTP.addParameter(url,name,value[i])
}return url
}var separator=url.indexOf("?")==-1?"?":"&";
var hashIdx=url.indexOf("#");
if(hashIdx<0){return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)
}else{var hash=url.substring(hashIdx);
url=url.substring(0,hashIdx);
return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)+hash
}},setParameter:function(url,name,value){url=_g.HTTP.removeParameter(url,name);
return _g.HTTP.addParameter(url,name,value)
},removeParameter:function(url,name){var pattern0="?"+encodeURIComponent(name)+"=";
var pattern1="&"+encodeURIComponent(name)+"=";
var pattern;
if(url.indexOf(pattern0)!=-1){pattern=pattern0
}else{if(url.indexOf(pattern1)!=-1){pattern=pattern1
}else{return url
}}var indexCutStart=url.indexOf(pattern);
var begin=url.substring(0,indexCutStart);
var indexCutEnd=url.indexOf("&",indexCutStart+1);
var end="";
if(indexCutEnd!=-1){end=url.substring(indexCutEnd);
if(end.indexOf("&")==0){end=end.replace("&","?")
}}return begin+end
},removeParameters:function(url){if(url.indexOf("?")!=-1){return url.substring(0,url.indexOf("?"))
}return url
},addSelector:function(url,selector,index){if(!index){index=0
}var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var sIndex=url.lastIndexOf("/");
var main=url.substring(sIndex);
if(main.indexOf("."+selector+".")==-1){var path=url.substring(0,sIndex);
var obj=main.split(".");
var newMain="";
var delim="";
if(index>obj.length-2||index==-1){index=obj.length-2
}for(var i=0;
i<obj.length;
i++){newMain+=delim+obj[i];
delim=".";
if(index==i){newMain+=delim+selector
}}return path+newMain+post
}else{return url
}},setSelector:function(url,selector,index){var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var selectors=_g.HTTP.getSelectors(url);
var ext=url.substring(url.lastIndexOf("."));
url=url.substring(0,url.lastIndexOf("."));
var fragment=(selectors.length>0)?url.replace("."+selectors.join("."),""):url;
if(selectors.length>0){for(var i=0;
i<selectors.length;
i++){if(index==i){fragment+="."+selector
}else{fragment+="."+selectors[i]
}}}else{fragment+="."+selector
}return fragment+ext+post
},addSelectors:function(url,selectors){var res=url;
if(url&&selectors&&selectors.length){for(var i=0;
i<selectors.length;
i++){res=_g.HTTP.addSelector(res,selectors[i],i)
}}return res
},getAnchor:function(url){if(url.indexOf("#")!=-1){return url.substring(url.indexOf("#")+1)
}return""
},setAnchor:function(url,anchor){return _g.HTTP.removeAnchor(url)+"#"+anchor
},removeAnchor:function(url){if(url.indexOf("#")!=-1){return url.substring(0,url.indexOf("#"))
}return url
},noCaching:function(url){return _g.HTTP.setParameter(url,_g.HTTP.PARAM_NO_CACHE,new Date().valueOf())
},buildPostResponseFromNode:function(node,response){if(!node){return null
}if(response==undefined){response=createResponse()
}for(var i=0;
i<node.childNodes.length;
i++){var child=node.childNodes[i];
if(child.tagName){if(child.id){if(child.href){response.headers[child.id]=child.href
}else{response.headers[child.id]=child.innerHTML
}}response=_g.HTTP.buildPostResponseFromNode(child,response)
}}return response
},buildPostResponseFromHTML:function(html){var response=createResponse();
try{if(html.responseText!=undefined){html=html.responseText
}else{if(typeof html!="string"){html=html.toString()
}}var div=document.createElement("div");
div.innerHTML=html;
response=_g.HTTP.buildPostResponseFromNode(div,response);
div=null
}catch(e){}return response
},getCookie:function(name){var cname=encodeURIComponent(name)+"=";
var dc=document.cookie;
if(dc.length>0){var begin=dc.indexOf(cname);
if(begin!=-1){begin+=cname.length;
var end=dc.indexOf(";",begin);
if(end==-1){end=dc.length
}return decodeURIComponent(dc.substring(begin,end))
}}return null
},setCookie:function(name,value,path,days,domain,secure){if(typeof (days)!="number"){days=7
}var date;
if(days>0){date=new Date();
date.setTime(date.getTime()+(days*24*60*60*1000))
}else{date=new Date(0)
}document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+"; "+(days!=0?"expires="+date.toGMTString()+"; ":"")+(domain?"domain="+domain+"; ":"")+(path?"path="+path:"")+(secure?"; secure":"");
return value
},clearCookie:function(name,path,domain,secure){_g.HTTP.setCookie(name,"null",path||"",-1,domain||"",secure||"")
},getSchemeAndAuthority:function(url){try{if(url.indexOf("://")==-1){return""
}var end=url.indexOf("/",url.indexOf("://")+3);
if(end==-1){return url
}return url.substring(0,end)
}catch(e){return""
}},getContextPath:function(){return contextPath
},detectContextPath:function(){try{if(CQURLInfo){contextPath=CQURLInfo.contextPath||""
}else{var scripts=document.getElementsByTagName("script");
for(var i=0;
i<scripts.length;
i++){var path=scripts[i].src;
if(path.indexOf("?")>=0){path=path.substring(0,path.indexOf("?"))
}if(SCRIPT_URL_REGEXP.test(path)){path=path.replace(/.*\:[\/][\/]/,"");
path=path.substring(path.indexOf("/"));
path=path.replace(SCRIPT_URL_REGEXP,"");
contextPath=path;
break
}}}}catch(e){}},externalize:function(url,encode){if(encode){url=_g.HTTP.encodePathOfURI(url)
}try{if(url.indexOf("/")==0&&contextPath&&url.indexOf(contextPath+"/")!=0){url=contextPath+url
}}catch(e){}return url
},internalize:function(url,doc){if(!doc){doc=document
}var docHost=_g.HTTP.getSchemeAndAuthority(doc.location.href);
var urlHost=_g.HTTP.getSchemeAndAuthority(url);
if(docHost==urlHost){return url.substring(urlHost.length+contextPath.length)
}else{return url
}},getPath:function(url){if(!url){if(CQURLInfo.requestPath){return CQURLInfo.requestPath
}}url=url||window.location.href;
url=_g.HTTP.internalize(url);
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var i=url.indexOf(".",url.lastIndexOf("/"));
if(i!=-1){url=url.substring(0,url.indexOf(".",url.lastIndexOf("/")))
}return url
},getSuffix:function(){if(CQURLInfo.suffix){return CQURLInfo.suffix
}return null
},getSelectors:function(url){if(!url){if(CQURLInfo.selectors){return CQURLInfo.selectors
}}var selectors=[];
url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var fragment=url.substring(url.lastIndexOf("/"));
if(fragment){var split=fragment.split(".");
if(split.length>2){for(var i=0;
i<split.length;
i++){if(i>0&&i<split.length-1){selectors.push(split[i])
}}}}return selectors
},getExtension:function(url){if(!url){if(CQURLInfo.extension){return CQURLInfo.extension
}}url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var pos=url.lastIndexOf(".");
if(pos<0){return""
}url=url.substring(pos+1);
pos=url.indexOf("/");
if(pos<0){return url
}return url.substring(0,pos)
},encodePathOfURI:function(url){var parts,delim;
if(url.indexOf("?")!=-1){parts=url.split("?");
delim="?"
}else{if(url.indexOf("#")!=-1){parts=url.split("#");
delim="#"
}else{parts=[url]
}}if(ENCODE_PATH_REGEXP.test(parts[0])){parts[0]=_g.HTTP.encodePath(parts[0])
}return parts.join(delim)
},encodePath:function(path){path=encodeURI(path).replace(/%5B/g,"[").replace(/%5D/g,"]");
path=path.replace(/\+/g,"%2B");
path=path.replace(/\?/g,"%3F");
path=path.replace(/;/g,"%3B");
path=path.replace(/#/g,"%23");
path=path.replace(/=/g,"%3D");
path=path.replace(/\$/g,"%24");
path=path.replace(/,/g,"%2C");
path=path.replace(/'/g,"%27");
path=path.replace(/"/g,"%22");
return path
},eval:function(response){if(typeof response!="object"){response=_g.HTTP.get(response)
}try{return eval("("+(response.body?response.body:response.responseText)+")")
}catch(e){}return null
},isOkStatus:function(status){try{return(new String(status).indexOf("2")==0)
}catch(e){return false
}},isOk:function(response){try{return _g.HTTP.isOkStatus(response.headers[_g.HTTP.HEADER_STATUS])
}catch(e){return false
}},handleForbidden:function(response,suppressLogin){try{if(response[_g.HTTP.HEADER_STATUS.toLowerCase()]==403){if(!suppressLogin&&!LOGIN_TRIGGERED){LOGIN_TRIGGERED=true;
alert(_g.I18n.get("Your request could not be completed because you have been signed out."));
var l=_g.Util.getTopWindow().document.location;
l.href=_g.HTTP.externalize(_g.Sling.LOGIN_URL)+"?resource="+l.pathname+encodeURIComponent(l.search)+l.hash
}return true
}return false
}catch(e){return false
}},getXhrHook:function(url,method,params){method=method||"GET";
if(typeof G_XHR_HOOK!="undefined"&&_g.$.isFunction(G_XHR_HOOK)){var p={url:url,method:method};
if(params){p.params=params
}return G_XHR_HOOK(p)
}return null
},getXhrHookedURL:function(url,method,params){var hook=_g.HTTP.getXhrHook(url,method,params);
if(hook){return hook.url
}return url
},reloadHook:function(url){if(typeof G_RELOAD_HOOK!="undefined"&&_g.$.isFunction(G_RELOAD_HOOK)){if(CQURLInfo.selectorString!=""){url=_g.HTTP.addSelector(url,CQURLInfo.selectorString)
}url=G_RELOAD_HOOK(url)||url
}return url
}}
};
_g.HTTP=_g.shared.HTTP;
_g.shared.Util=new function(){return{reload:function(win,url,preventHistory){if(!win){win=window
}if(!url){url=_g.HTTP.noCaching(win.location.href)
}url=_g.HTTP.reloadHook(url);
if(preventHistory){win.location.replace(url)
}else{win.location.href=url
}},load:function(url,preventHistory){_g.Util.reload(window,url,preventHistory)
},open:function(url,win,name,options){if(!win){win=window
}if(!url){return 
}url=_g.HTTP.reloadHook(url);
if(!name){name=""
}if(!options){options=""
}return win.open(url,name,options)
},htmlEncode:function(value){return !value?value:String(value).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")
},htmlDecode:function(value){return !value?value:String(value).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&")
},ellipsis:function(value,length,word){if(value&&value.length>length){if(word){var vs=value.substr(0,length-2);
var index=Math.max(vs.lastIndexOf(" "),vs.lastIndexOf("."),vs.lastIndexOf("!"),vs.lastIndexOf("?"),vs.lastIndexOf(";"));
if(index==-1||index<(length-15)){return value.substr(0,length-3)+"..."
}else{return vs.substr(0,index)+"..."
}}else{return value.substr(0,length-3)+"..."
}}return value
},patchText:function(text,snippets){if(snippets){if(!_g.$.isArray(snippets)){text=text.replace("{0}",snippets)
}else{for(var i=0;
i<snippets.length;
i++){text=text.replace(("{"+i+"}"),snippets[i])
}}}return text
},eval:function(response){return _g.HTTP.eval(response)
},getTopWindow:function(){var win=window;
try{while(win.parent&&win!==win.parent&&win.parent.location.href){win=win.parent
}}catch(error){}return win
}}
};
_g.Util=_g.shared.Util;
_g.shared.Sling=function(){return{SELECTOR_INFINITY:".infinity",CHARSET:"_charset_",STATUS:":status",STATUS_BROWSER:"browser",OPERATION:":operation",OPERATION_DELETE:"delete",OPERATION_MOVE:"move",DELETE_SUFFIX:"@Delete",TYPEHINT_SUFFIX:"@TypeHint",COPY_SUFFIX:"@CopyFrom",MOVE_SUFFIX:"@MoveFrom",ORDER:":order",REPLACE:":replace",DESTINATION:":dest",SAVE_PARAM_PREFIX:":saveParamPrefix",IGNORE_PARAM:":ignore",REQUEST_LOGIN_PARAM:"sling:authRequestLogin",LOGIN_URL:"/system/sling/login.html",LOGOUT_URL:"/system/sling/logout.html",processBinaryData:function(A){if(A&&A[":jcr:data"]!=undefined){var B=new Object();
B.size=A[":jcr:data"];
B.type=A["jcr:mimeType"];
B.date=A["jcr:lastModified"];
A=B
}return A
},getContentPath:function(C,A,B){var D=A;
if(D.lastIndexOf(".")>D.lastIndexOf("/")){D=D.substr(0,D.indexOf(".",D.lastIndexOf("/")))
}if(C){if(C.indexOf("/")==0){D=C
}else{if(B){while(C.indexOf("../")==0){C=C.substring(3);
D=D.substring(0,D.lastIndexOf("/"))
}}C=C.replace("./","");
D=D+"/"+C
}}return D
}}
}();
_g.Sling=_g.shared.Sling;
_g.shared.XSS=new function(){return{getXSSPropertyName:function(A){if(!A){return""
}if(_g.XSS.KEY_REGEXP.test(A)){return A
}return A+=_g.XSS.KEY_SUFFIX
},getXSSRecordPropertyValue:function(E,C,A){var D="";
if(E&&C){var B=E.get(this.getXSSPropertyName(C));
if(B){D=B
}else{D=E.get(C)
}if(A&&!isNaN(A)){D=_g.Util.ellipsis(D,A,true)
}}return D
},getXSSTablePropertyValue:function(D,C,A){var E="";
if(D&&C){var B=D[this.getXSSPropertyName(C)];
if(B){E=B
}else{E=D[C]
}if(A&&!isNaN(A)){E=_g.Util.ellipsis(E,A,true)
}}return E
},getXSSValue:function(A){if(A){return _g.Util.htmlEncode(A)
}else{return""
}},updatePropertyName:function(A,B){if(!A||!B||!A[B]){return 
}if(A.xssProtect&&!A.xssKeepPropName){A[B]=this.getXSSPropertyName(A[B])
}},xssPropertyRenderer:function(D,B,C,A){if(A&&A.dataIndex&&C&&C.data&&C.data[this.getXSSPropertyName(A.dataIndex)]){D=C.data[this.getXSSPropertyName(A.dataIndex)];
if(A.ellipsisLimit&&!isNaN(A.ellipsisLimit)){D=_g.Util.ellipsis(D,A.ellipsisLimit,true)
}return D
}else{if(D){return D
}else{return""
}}}}
};
_g.XSS=_g.shared.XSS;
_g.XSS.KEY_SUFFIX="_xss";
_g.XSS.KEY_REGEXP=new RegExp(_g.XSS.KEY_SUFFIX+"$");
_g.shared.I18n=function(){var dicts=new Object();
var initialized=false;
var urlPrefix="/libs/cq/i18n/dict.";
var urlSuffix=".json";
var currentLocale=null;
var languages=null;
return{LOCALE_DEFAULT:"en",init:function(config){if(!config){config=new Object()
}if(config.locale){_g.I18n.setLocale(config.locale)
}if(config.urlPrefix){_g.I18n.setUrlPrefix(config.urlPrefix)
}if(config.urlSuffix){_g.I18n.setUrlSuffix(config.urlSuffix)
}initialized=true
},getLocale:function(){return currentLocale?currentLocale:_g.I18n.LOCALE_DEFAULT
},setLocale:function(locale){currentLocale=locale
},setUrlPrefix:function(prefix){urlPrefix=prefix
},setUrlSuffix:function(suffix){urlSuffix=suffix
},getDictionary:function(locale){if(!locale){locale=_g.I18n.getLocale()
}if(!dicts[locale]){var url=urlPrefix+locale+urlSuffix;
try{var response=_g.HTTP.get(url);
if(_g.HTTP.isOk(response)){dicts[locale]=_g.Util.eval(response)
}}catch(e){}if(!dicts[locale]){dicts[locale]={}
}}return dicts[locale]
},getMessage:function(text,snippets,note){return text
},getVarMessage:function(text,note){return this.getVar(text,note)
},get:function(text,snippets,note){var dict,newText,lookupText;
lookupText=note?text+" (("+note+"))":text;
if(initialized){}if(dict){newText=dict[lookupText]
}if(!newText){newText=text
}return _g.Util.patchText(newText,snippets)
},getVar:function(text,note){if(!text){return null
}return this.get(text,null,note)
},getLanguages:function(){if(!languages){try{var json=_g.HTTP.eval("/libs/wcm/core/resources/languages.overlay.infinity.json");
_g.$.each(json,function(name,lang){lang.title=_g.I18n.getVar(lang.language);
if(lang.title&&lang.country&&lang.country!="*"){lang.title+=" ("+_g.I18n.getVar(lang.country)+")"
}});
languages=json
}catch(e){languages={}
}}return languages
},parseLocale:function(langCode){if(!langCode){return null
}var pos=langCode.indexOf("_");
if(pos<0){pos=langCode.indexOf("-")
}var language,country;
if(pos<0){language=langCode;
country=null
}else{language=langCode.substring(0,pos);
country=langCode.substring(pos+1)
}return{code:langCode,language:language,country:country}
}}
}();
_g.I18n=_g.shared.I18n;
_g.shared.String=new function(){return{startsWith:function(D,B){if(D==null||B==null){return D==null&&B==null
}if(B.length>D.length){return false
}var A=D.toString();
var C=B.toString();
return(A.indexOf(C)==0)
},endsWith:function(B,A){if(B==null||A==null){return B==null&&A==null
}if(A.length>B.length){return false
}B=B.toString();
A=A.toString();
return(B.lastIndexOf(A)==(B.length-A.length))
},contains:function(B,A){if(B==null||A==null){return false
}B=B.toString();
A=A.toString();
return(B.indexOf(A)>=0)
}}
};
_g.String=_g.shared.String;
_g.HTTP.detectContextPath();
_g.I18n.init();
window.CQ=window.CQ||{};
CQ.shared=_g.shared;
CQ.Sling=CQ.shared.Sling;
CQ.I18n=CQ.shared.I18n;
G_XHR_HOOK=typeof CQ_XHR_HOOK!="undefined"?CQ_XHR_HOOK:undefined;
G_XHR_RELOAD=typeof CQ_RELOAD_HOOK!="undefined"?CQ_RELOAD_HOOK:undefined;
G_CONTENT_PATH=typeof CQ_CONTENT_PATH!="undefined"?CQ_CONTENT_PATH:undefined;
CQ.shared.Form=function(){var E=function(){var I=new Object();
var J=document.getElementsByTagName("label");
for(var H=0;
H<J.length;
H++){var G=J[H].htmlFor;
if(G){I[G]=J[H]
}}return I
};
var F=function(H){var I="";
var G=function(K){if(K.nodeType==3){I+=K.nodeValue
}if(K.nodeName.toLowerCase()=="select"||K.nodeName.toLowerCase()=="input"||K.nodeName.toLowerCase()=="textarea"||K.nodeName.toLowerCase()=="button"){return 
}for(var J=0;
K.childNodes&&J<K.childNodes.length;
J++){G(K.childNodes[J])
}};
G(H);
return I
};
var C=function(G){return G.replace(/-\d+$/,"")
};
var B=function(H,G){if(!G){G=E()
}if(G[H]){return F(G[H])
}return null
};
var A=function(I){var H;
var J=I.nodeName.toLowerCase();
var G=D(I,"type")?I.getAttribute("type"):undefined;
if(J=="input"){if(G=="radio"||G=="checkbox"){if(D(I,"checked")){H=I.getAttribute("value")
}}else{if(I.type=="text"){H=I.defaultValue
}else{H=I.value
}}}else{if(J=="textarea"){H=I.value
}else{if(J=="option"&&D(I,"selected")){H=I.getAttribute("value")
}}}return H
};
var D=function(H,G){if(H==null){return false
}return(H.getAttribute(G)!=null)
};
return{searchArray:function(H,G,J){for(var I=0;
I<H.length;
I++){if(H[I][G]&&H[I][G]==J){return H[I]
}}return null
},getLabelForField:function(G,I){if(!I){I=E()
}var J=G.getAttribute("id");
if(J&&I[J]){return F(I[J])
}var H=G.parentNode;
while(H){if(H.nodeName.toLowerCase()=="label"){return F(H)
}H=H.parentNode
}return G.getAttribute("name")
},getFields:function(){var J=E();
var G=[];
var H=function(N,O){var M=N.getAttribute("name");
var P=N.nodeName.toLowerCase();
var R;
if(P=="input"||P=="textarea"){var L=D(N,"type")?N.getAttribute("type").toLowerCase():"text";
if(L=="button"||L=="submit"||L=="reset"){return 
}R=CQ.shared.Form.searchArray(G,"value",M);
if(!R){G.push({text:CQ.shared.Form.getLabelForField(N,J),value:M,name:M,enumeration:undefined,local:O,type:P,defaultValue:A(N),node:N});
R=G[G.length-1]
}if(L=="radio"||(R.local&&L=="checkbox")){if(!R.enumeration){var S=N.getAttribute("id");
if(S){var U=C(S);
var T=B(U,J);
R.text=(T?T:M)
}else{R.text=M
}R.enumeration=[]
}R.enumeration.push({text:CQ.shared.Form.getLabelForField(N,J),value:N.getAttribute("value"),defaultValue:A(N),node:N})
}}else{if(P=="select"){G.push({text:CQ.shared.Form.getLabelForField(N,J),value:M,name:M,enumeration:[],local:O,type:P,defaultValue:undefined,node:N});
R=G[G.length-1];
var K=N.getElementsByTagName("option");
for(var Q=0;
Q<K.length;
Q++){R.enumeration.push({text:K[Q].innerHTML,value:K[Q].getAttribute("value"),defaultValue:A(K[Q]),node:K[Q]})
}}}};
var I=function(M,L){if(M.nodeName.toLowerCase()=="div"&&$(M).hasClass("section")){L=true
}if(M.getAttribute&&M.getAttribute("name")){H(M,L)
}for(var K=0;
M.childNodes&&K<M.childNodes.length;
K++){var N=M.childNodes[K];
if(N.nodeType==1){I(N,L)
}}};
I(document,false);
return G
}}
}();
CQ.shared.User=function(infoData){return{data:null,language:null,userPropsPath:null,getUserPropsUrl:function(){if(!this.userPropsPath){this.userPropsPath=CQ.shared.User.PROXY_URI
}return this.userPropsPath
},init:function(infoData){if(infoData){this.data=infoData
}else{var url=this.getUserPropsUrl();
url=CQ.shared.HTTP.noCaching(url);
var response=CQ.shared.HTTP.get(url);
if(CQ.shared.HTTP.isOk(response)){this.data=CQ.shared.Util.eval(response)
}}return this.data
},getLanguage:function(){this.language=this.data&&this.data.preferences&&this.data.preferences["language"]?this.data.preferences["language"]:"en";
return this.language
}}
}();
CQ.shared.User.PROXY_URI=CQ.shared.HTTP.externalize("/libs/cq/security/userinfo"+CQ.shared.HTTP.EXTENSION_JSON);
if(!window.CQ_Analytics){window.CQ_Analytics={}
}CQ_Analytics.Operator=(function(){return function(){}
})();
CQ_Analytics.Operator.IS="is";
CQ_Analytics.Operator.EQUALS="equals";
CQ_Analytics.Operator.NOT_EQUAL="notequal";
CQ_Analytics.Operator.GREATER="greater";
CQ_Analytics.Operator.GREATER_OR_EQUAL="greaterorequal";
CQ_Analytics.Operator.OLDER="older";
CQ_Analytics.Operator.OLDER_OR_EQUAL="olderorequal";
CQ_Analytics.Operator.LESS="less";
CQ_Analytics.Operator.LESS_OR_EQUAL="lessorequal";
CQ_Analytics.Operator.YOUNGER="younger";
CQ_Analytics.Operator.YOUNGER_OR_EQUAL="youngerorequal";
CQ_Analytics.Operator.CONTAINS="contains";
CQ_Analytics.Operator.BEGINS_WITH="beginswith";
CQ_Analytics.OperatorActions=function(){var mapping={};
var addOperator=function(name,text,operation){mapping[name]=[text,operation]
};
addOperator(CQ_Analytics.Operator.EQUALS,CQ.I18n.getMessage("equals"),"==");
addOperator(CQ_Analytics.Operator.IS,CQ.I18n.getMessage("is"),"==");
addOperator(CQ_Analytics.Operator.NOT_EQUAL,CQ.I18n.getMessage("is not equal to"),"!=");
addOperator(CQ_Analytics.Operator.GREATER,CQ.I18n.getMessage("is greater than"),">");
addOperator(CQ_Analytics.Operator.GREATER_OR_EQUAL,CQ.I18n.getMessage("is equal to or greater than"),">=");
addOperator(CQ_Analytics.Operator.OLDER,CQ.I18n.getMessage("is older than"),">");
addOperator(CQ_Analytics.Operator.OLDER_OR_EQUAL,CQ.I18n.getMessage("is equal to or older than"),">=");
addOperator(CQ_Analytics.Operator.LESS,CQ.I18n.getMessage("is less than"),"<");
addOperator(CQ_Analytics.Operator.LESS_OR_EQUAL,CQ.I18n.getMessage("is equal to or less than"),"<=");
addOperator(CQ_Analytics.Operator.YOUNGER,CQ.I18n.getMessage("is younger than"),"<");
addOperator(CQ_Analytics.Operator.YOUNGER_OR_EQUAL,CQ.I18n.getMessage("is equal to or younger than"),"<=");
addOperator(CQ_Analytics.Operator.CONTAINS,CQ.I18n.getMessage("contains",null,"Ex: language contains french, Ex: gender contains female"),function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
return s1.toLowerCase().indexOf(s2.toLowerCase())!=-1
}return true
}return false
});
addOperator(CQ_Analytics.Operator.BEGINS_WITH,"begins with",function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
return s1.toLowerCase().indexOf(s2.toLowerCase())==0
}return true
}return false
});
var getByIndex=function(op,index){if(mapping[op]&&mapping[op][index]){return mapping[op][index]
}return""
};
var escapeQuote=function(str){if(str){str=str.replace(new RegExp("\\'","ig"),str)
}return str
};
return{getText:function(operator){return getByIndex(operator,0)
},getOperation:function(operator){return getByIndex(operator,1)
},operate:function(object,property,operator,value,valueFormat){try{if(object&&object[property]){var toEval="";
var op=this.getOperation(operator);
op=op?op:operator;
var objectValue=CQ.shared.XSS.getXSSTablePropertyValue(object,property);
if(typeof op=="function"){return op.call(this,objectValue,value,valueFormat)
}else{if(valueFormat){toEval=valueFormat+"("+objectValue+") "+op+" "+valueFormat+"("+value+")"
}else{var s1=escapeQuote(objectValue);
var s2=escapeQuote(value);
toEval="'"+s1+"' "+op+" '"+s2+"'"
}var b=eval(toEval);
return b
}}}catch(e){}return false
}}
}();
var RUZEE=window.RUZEE||{};
RUZEE.ShadedBorder={create:function(Q){var M=/msie/i.test(navigator.userAgent)&&!window.opera;
var a=M&&!window.XMLHttpRequest;
function S(n,b){for(k in b){if(/ie_/.test(k)){if(M){n.style[k.substr(3)]=b[k]
}}else{n.style[k]=b[k]
}}}function V(n){var b=document.createElement("div");
b.className="sb-gen";
S(b,n);
return b
}function T(b){b=b<0?0:b;
if(b>0.99999){return""
}return M?" filter:alpha(opacity="+(b*100)+");":" opacity:"+b+";"
}var I=Q.shadow||0;
var c=Q.corner||0;
var G=0;
var F=Q.border||0;
var H=Q.borderOpacity||1;
var X=I!=0;
var P=c>I?c:I;
var R=P;
var B=P;
var j=P;
if(F>0){G=c;
c=c-F
}var L=c!=0&&X?Math.round(P/3):0;
var K=L;
var O=Math.round(L/2);
var N=c>0?"sb-inner":"sb-shadow";
var U="sb-shadow";
var f="sb-border";
var J=Q.edges||"trlb";
if(!/t/i.test(J)){B=0
}if(!/b/i.test(J)){j=0
}if(!/l/i.test(J)){P=0
}if(!/r/i.test(J)){R=0
}var e={position:"absolute",left:"0",top:"0",width:P+"px",height:B+"px",ie_fontSize:"1px",overflow:"hidden",margin:"0",padding:"0"};
var A=V(e);
delete e.left;
e.right="0";
e.width=R+"px";
var l=V(e);
delete e.top;
e.bottom="0";
e.height=j+"px";
var d=V(e);
delete e.right;
e.left="0";
e.width=P+"px";
var g=V(e);
var h=V({position:"absolute",width:"100%",height:B+"px",ie_fontSize:"1px",top:"0",left:"0",overflow:"hidden",margin:"0",padding:"0"});
var Z=V({position:"relative",height:B+"px",ie_fontSize:"1px",margin:"0 "+R+"px 0 "+P+"px",overflow:"hidden",padding:"0"});
h.appendChild(Z);
var Y=V({position:"absolute",left:"0",bottom:"0",width:"100%",height:j+"px",ie_fontSize:"1px",overflow:"hidden",margin:"0",padding:"0"});
var m=V({position:"relative",height:j+"px",ie_fontSize:"1px",margin:"0 "+R+"px 0 "+P+"px",overflow:"hidden",padding:"0"});
Y.appendChild(m);
var E=V({position:"absolute",top:(-j)+"px",left:"0",width:"100%",height:"100%",overflow:"hidden",ie_fontSize:"1px",padding:"0",margin:"0"});
function W(p,AD,AH){var AA=AH?P:R;
var AK=AD?B:j;
var AE=AD?O:-O;
var u=[];
var q=[];
var b=[];
var AB=0;
var AI=1;
if(AH){AB=AA-1;
AI=-1
}for(var z=0;
z<AA;
++z){var AL=AK-1;
var n=-1;
if(AD){AL=0;
n=1
}var r=false;
for(var v=AK-1;
v>=0&&!r;
--v){var AF='<div style="position:absolute; top:'+AL+"px; left:"+AB+"px; width:1px; height:1px; overflow:hidden; margin:0; padding:0;";
var AJ=z-L;
var o=v-K-AE;
var AM=Math.sqrt(AJ*AJ+o*o);
var AC=false;
if(c>0){if(AJ<0&&o<G&&o>=c||o<0&&AJ<G&&AJ>=c){u.push(AF+T(H)+'" class="'+f+'"></div>')
}else{if(AM<G&&AM>=c-1&&AJ>=0&&o>=0){var AN=AF;
if(AM>=G-1){AN+=T((G-AM)*H);
AC=true
}else{AN+=T(H)
}u.push(AN+'" class="'+f+'"></div>')
}}var AN=AF+" z-index:2;"+(AD?"background-position:0 -"+(c-o-1)+"px;":"background-image:none;");
var AG=function(){if(!AD){AN=AN.replace(/top\:\d+px/,"top:0px")
}AN=AN.replace(/height\:1px/,"height:"+(v+1)+"px");
q.push(AN+'" class="'+N+'"></div>');
r=true
};
if(AJ<0&&o<c||o<0&&AJ<c){AG()
}else{if(AM<c&&AJ>=0&&o>=0){if(AM>=c-1){AN+=T(c-AM);
AC=true;
q.push(AN+'" class="'+N+'"></div>')
}else{AG()
}}else{AC=true
}}}else{AC=true
}if(I>0&&AC){AM=Math.sqrt(z*z+v*v);
if(AM<I){b.push(AF+" z-index:0; "+T(1-(AM/I))+'" class="'+U+'"></div>')
}}AL+=n
}AB+=AI
}p.innerHTML=b.concat(u.concat(q)).join("")
}function C(q){var p=[];
p.push('<div style="position:relative; top:'+(B+j)+"px; height:2048px;  margin:0 "+(R-c-L)+"px 0 "+(P-c-L)+"px;  padding:0; overflow:hidden; background-position:0 "+(B>0?-(c+K+O):"0")+'px;" class="'+N+'"></div>');
var n='<div style="position:absolute; width:1px; top:'+(B+j)+"px; height:2048px; padding:0; margin:0;";
if(I>0){for(var b=0;
b<P-c-L;
++b){p.push(n+" left:"+b+"px;"+T((b+1)/P)+'" class="'+U+'"></div>')
}for(var b=0;
b<R-c-L;
++b){p.push(n+" right:"+b+"px;"+T((b+1)/R)+'" class="'+U+'"></div>')
}}if(F>0){var o=" width:"+F+"px;"+T(H)+'" class="'+f+'"></div>';
p.push(n+" left:"+(P-G-L)+"px;"+o);
p.push(n+" right:"+(R-G-L)+"px;"+o)
}q.innerHTML=p.join("")
}function D(q,n){var r=[];
var p=n?B:j;
var b='<div style="height:1px; overflow:hidden; position:absolute; margin:0; padding:0; width:100%; left:0px; ';
var o=n?O:-O;
for(var u=0;
u<p-o-K-c;
++u){if(I>0){r.push(b+(n?"top:":"bottom:")+u+"px;"+T((u+1)*1/p)+'" class="'+U+'"></div>')
}}if(u>=F){r.push(b+(n?"top:":"bottom:")+(u-F)+"px;"+T(H)+" height:"+F+'px;" class="'+f+'"></div>')
}r.push(b+(n?"background-position-y:0; top:":"background-image:none; bottom:")+u+"px; height:"+(c+K+o)+'px;" class="'+N+'"></div>');
q.innerHTML=r.join("")
}W(A,true,true);
W(l,true,false);
W(g,false,true);
W(d,false,false);
C(E);
D(Z,true);
D(m,false);
return{render:function(n){if(typeof n=="string"){n=document.getElementById(n)
}if(n.length!=undefined){for(var q=0;
q<n.length;
++q){this.render(n[q])
}return 
}n.className+=" sb";
S(n,{position:"relative",background:"transparent"});
var o=n.firstChild;
while(o){var p=o.nextSibling;
if(o.nodeType==1&&o.className=="sb-gen"){n.removeChild(o)
}o=p
}var u=n.firstChild;
var r=h.cloneNode(true);
var t=E.cloneNode(true);
var s=Y.cloneNode(true);
n.insertBefore(A.cloneNode(true),u);
n.insertBefore(l.cloneNode(true),u);
n.insertBefore(g.cloneNode(true),u);
n.insertBefore(d.cloneNode(true),u);
n.insertBefore(r,u);
n.insertBefore(t,u);
n.insertBefore(s,u);
if(a){n.onmouseover=function(){this.className+=" hover"
};
n.onmouseout=function(){this.className=this.className.replace(/ hover/,"")
};
window.setTimeout(function(){n.className+=" hover";
n.className=n.className.replace(/ hover/,"")
},100)
}if(M){function b(){r.style.width=s.style.width=t.style.width=n.offsetWidth+"px";
t.firstChild.style.height=n.offsetHeight+"px"
}n.onresize=b;
b()
}}}
}};
CQ_Analytics.Utils=new function(){return{registerDocumentEventHandler:function(C,B){var A=window.document[C];
if(typeof window.document[C]!="function"){window.document[C]=B
}else{window.document[C]=function(D){if(A){A(D)
}B(D)
}
}},eventWrapper:function(A){return function(D){var C,B;
if(document.all){C=window.event.keyCode;
B=window.event
}else{C=(typeof (D.which)!="undefined")?D.which:0;
B=D
}if(B){A(B,C)
}}
},loadElement:function(A,B){$("#"+B).load(A)
},loadTeaserElement:function(A,D){var E=$("#"+D).css("height");
var F=$("#"+D).height();
if(F>0){$("#"+D).css("height",F)
}var G=function(L){if(L&&L!=""){var K=$(L).css("display","none");
$("#"+D).append(K);
K.fadeIn(function(){if(E&&E!="0px"){$("#"+D).css("height",E)
}})
}else{if(E&&E!="0px"){$("#"+D).css("height",E)
}}};
var H=function(K,L){if(!CQ_Analytics.Utils.teasersCache){CQ_Analytics.Utils.teasersCache={}
}CQ_Analytics.Utils.teasersCache[K]=L
};
var B=function(){if(CQ_Analytics.Utils.teasersCache&&CQ_Analytics.Utils.teasersCache[A]){G(CQ_Analytics.Utils.teasersCache[A])
}else{CQ_Analytics.Utils.teasersLoading=CQ_Analytics.Utils.teasersLoading||{};
if(CQ_Analytics.Utils.teasersLoading[A]){window.setTimeout(function(){CQ_Analytics.Utils.loadTeaserElement(A,D)
},100)
}else{CQ_Analytics.Utils.teasersLoading[A]=true;
I()
}}};
var I=function(){CQ.shared.HTTP.get(A,function(N,M,K){if(M){var L=K.body;
if(L){L=L.replace(new RegExp("\\n","ig"),"");
L=L.replace(new RegExp("\\r","ig"),"");
H(A,L);
B();
delete CQ_Analytics.Utils.teasersLoading[A]
}}else{H(A,"")
}})
};
var C=$("#"+D).children().length;
if(C>0){var J=0;
$("#"+D).children().fadeOut(function(){var K=$(this);
window.setTimeout(function(){K.remove();
J++;
if(J>=C){B()
}},50)
})
}else{B()
}},clearElement:function(A){if(A){$("#"+A).html("")
}},indexOf:function(D,C){for(var B=0,A=D.length;
B<A;
B++){if(D[B]==C){return B
}}return -1
},load:function(A,C,B){return CQ.shared.HTTP.get(A,C,B)
},post:function(A,D,C,B){return CQ.shared.HTTP.post(A,D,C,B)
},getPagePath:function(){return CQ.shared.HTTP.getPath()
},getPath:function(A){return CQ.shared.HTTP.getPath(A)
},addParameter:function(B,A,C){return CQ.shared.HTTP.addParameter(B,A,C)
},removeParameters:function(A){return CQ.shared.HTTP.removeParameters(A)
},removeAnchor:function(A){return CQ.shared.HTTP.removeAnchor(A)
},getSchemeAndAuthority:function(A){return CQ.shared.HTTP.getSchemeAndAuthority(A)
},internalize:function(A,B){return CQ.shared.HTTP.internalize(B)
},externalize:function(A,B){return CQ.shared.HTTP.externalize(A,B)
},encodePathOfURI:function(A){return CQ.shared.HTTP.encodePathOfURI(A)
},encodePath:function(A){return CQ.shared.HTTP.encodePath(A)
},getContextPath:function(){return CQ.shared.HTTP.getContextPath()
},detectContextPath:function(){return CQ.shared.HTTP.detectContextPath()
},urlEncode:function(H){if(!H){return""
}if(typeof H=="string"){return H
}var C=[];
for(var F in H){var E=H[F],B=encodeURIComponent(F);
var G=typeof E;
if(G=="undefined"){C.push(B,"=&")
}else{if(G!="function"&&G!="object"){C.push(B,"=",encodeURIComponent(E),"&")
}else{if(typeof E=="array"){if(E.length){for(var D=0,A=E.length;
D<A;
D++){C.push(B,"=",encodeURIComponent(E[D]===undefined?"":E[D]),"&")
}}else{C.push(B,"=&")
}}}}}C.pop();
return C.join("")
},getUID:function(){var A=Math.floor(Math.random()*(Math.pow(2,42)-1));
return this.getTimestamp().toString(16)+A.toString(16)
},getTimestamp:function(){var A=new Date();
return A.getTime()
},insert:function(D,C,B){if(!D||isNaN(C)||!B){return D
}var A="";
var F=0;
var E=C;
while(E<D.length){A+=D.substring(F,E)+B;
F+=C;
E+=C
}if(F<D.length){A+=D.substring(F)
}return A
},addListener:function(){if(window.addEventListener){return function(D,B,C,A){D.addEventListener(B,C,(A))
}
}else{if(window.attachEvent){return function(D,B,C,A){D.attachEvent("on"+B,C)
}
}else{return function(){}
}}},removeListener:function(){if(window.removeEventListener){return function(D,B,C,A){D.removeEventListener(B,C,(A))
}
}else{if(window.detachEvent){return function(C,A,B){C.detachEvent("on"+A,B)
}
}else{return function(){}
}}}}
};
CQ_Analytics.ClickstreamcloudRenderingUtils=new function(){return{createLink:function(F,D,B,A){var C=document.createElement("a");
C.href=A;
C.onclick=D;
C.innerHTML=F;
if(B){for(var E in B){if(B.hasOwnProperty(E)){C[E]=B[E]
}}}return C
},createStaticLink:function(D,A,C){var B=document.createElement("a");
B.href=A;
B.innerHTML=D;
B.title=C;
B.alt=C;
return B
},createNameValue:function(B,D,A,E){var C=document.createElement("span");
C.className=A||"ccl-data";
C.innerHTML=B+" = "+D;
C.title=E;
C.alt=E;
return C
},createText:function(D,A,C){var B=document.createElement("span");
B.className=A||"ccl-data";
if(D&&D.indexOf&&((D.indexOf("/home")!=-1&&D.indexOf("/image")!=-1)||(D.indexOf("/")!=-1&&D.indexOf(".png")!=-1))){B.innerHTML='<img src="'+D+'.prof.thumbnail.png" border="0">'
}else{if(D&&D.indexOf&&D.indexOf("www.gravatar.com")!=-1){B.innerHTML='<img src="'+D+'">'
}else{B.innerHTML=D
}}B.title=C;
B.alt=C;
return B
},createEditablePropertySpan:function(B,D){var A="var editSpan = this.nextSibling; this.style.display = 'none'; editSpan.style.display = 'block';";
var E="var editSpan = this.parentNode; var readSpan = this.parentNode.previousSibling;var newValue = this.value;editSpan.style.display = 'none'; readSpan.innerHTML = '"+B+" = '+value; readSpan.style.display = 'block';";
var C=document.createElement("span");
C.innerHTML='<span class="ccl-data" onclick="'+A+'">'+B+" = "+D+"</span>";
C.innerHTML+='<span class="ccl-data" style="display: none;">'+B+' = <input class="ccl-input" type="text" value="'+D+'" onblur="'+E+'"></span>';
C.className="ccl-data";
return C
}}
};
CQ_Analytics.ClientContextUtils=new function(){return{renderStoreProperty:function(F,C,B,D,E,A){if(CQ_Analytics&&CQ_Analytics.CCM){CQ_Analytics.CCM.onReady(function(){var G=function(){var H=CQ_Analytics.StoreRegistry.getStore(C);
if(H){var I=function(){var L=H.getProperty(B)||A;
var K=$("#"+F);
if(K.attr("contenteditable")&&K.attr("contenteditable")!="inherit"){return 
}if(typeof (L)=="string"&&((L.indexOf("/")==0&&(L.toLowerCase().indexOf(".png")!=-1||L.toLowerCase().indexOf(".jpg")!=-1||L.toLowerCase().indexOf(".gif")!=-1)||L.toLowerCase().indexOf("http")==0))){if(!L||L==""){K.children().remove();
K.html("No "+B)
}else{var J="";
if(K.parents(".cq-cc-thumbnail").length==0||L.toLowerCase().indexOf("http")==0||L.indexOf("/libs/wcm/mobile")==0){J=L.replace(new RegExp("&amp;","g"),"&")
}else{J="/etc/clientcontext/shared/thumbnail/content.png";
J=CQ.shared.HTTP.addParameter(J,"path",CQ_Analytics.Variables.replaceVariables(L))
}J=CQ_Analytics.Variables.replaceVariables(J);
if(K.find("div").css("background-image")!="url("+J+")"){if(H.fireEvent("beforepropertyrender",H,F)!==false){K.html("");
K.children().remove();
$("<div>").addClass("cq-cc-thumbnail-img").css("background-image","url("+_g.shared.HTTP.externalize(J)+")").appendTo(K);
H.fireEvent("propertyrender",H,F)
}}}}else{L=CQ_Analytics.Variables.replaceVariables(L);
L=(!L||L=="")?"No "+B:L=D+L+E;
if(K.html()!=L){if(H.fireEvent("beforepropertyrender",H,F)!==false){K.html(L);
H.fireEvent("propertyrender",H,F)
}}}};
if(H.fireEvent("beforeinitialpropertyrender",H,F)!==false){I();
if(H.addListener){H.addListener("update",function(){I()
})
}H.fireEvent("initialpropertyrender",H,F)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(C,G)
})
}},renderStore:function(B,A){if(CQ_Analytics&&CQ_Analytics.CCM&&B&&A){CQ_Analytics.CCM.onReady(function(){var C=function(){var D=CQ_Analytics.StoreRegistry.getStore(A);
if(D){D.divId=B;
var E=function(){if(D.fireEvent("beforerender",D,D.divId)!==false){D.renderer(D,D.divId);
D.fireEvent("render",D,D.divId)
}};
if(D.fireEvent("beforeinitialrender",D,B)!==false){E();
if(D.addListener){D.addListener("update",function(){E()
})
}D.fireEvent("initialrender",D,B)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(A,C)
})
}},storesOptionsProvider:function(){var C=[];
var A=CQ_Analytics.StoreRegistry.getStores();
for(var B in A){C.push({value:B})
}return C
},storePropertiesOptionsProvider:function(C,E){var B=[];
var A=CQ_Analytics.StoreRegistry.getStore(C);
if(A){var G=A.getPropertyNames();
for(var D=0;
D<G.length;
D++){var F=G[D];
if(!CQ.shared.XSS.KEY_REGEXP.test(F)){var H={value:F};
if(E){H.text=F+" - "+A.getProperty(F)
}B.push(H)
}}}return B
},onStoreRegistered:function(B,C){if(C){var A=CQ_Analytics.StoreRegistry.getStore(B);
if(A){C.call(A,A)
}else{CQ_Analytics.CCM.addListener("storeregister",function(E,D){if(D.getName()==B){C.call(D,D)
}})
}}},onStoreInitialized:function(C,E,B){if(B===true){B=CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY
}var D=function(){var F=CQ_Analytics.StoreRegistry.getStore(C);
if(F.DELAYED_INIT_TIMEOUT){window.clearTimeout(F.DELAYED_INIT_TIMEOUT);
F.DELAYED_INIT_TIMEOUT=null
}if(B>0){F.DELAYED_INIT_TIMEOUT=window.setTimeout(function(){F.DELAYED_INIT_TIMEOUT=null;
E.call(F,"initialize",F)
},B)
}else{E.call(F,"initialize",F)
}};
var A=CQ_Analytics.StoreRegistry.getStore(C);
if(A){if(A.isInitialized()){D.call(A);
A.addListener("initialize",function(G,F){D.call(F)
})
}else{A.addListener("initialize",function(G,F){D.call(F)
})
}}else{CQ_Analytics.CCM.addListener("storeregister",function(G,F){if(F.getName()==C){CQ_Analytics.ClientContextUtils.onStoreInitialized(C,E,B)
}})
}},init:function(D,C){CQ_Analytics.ClientContextMgr.PATH=D;
CQ_Analytics.ClientContextMgr.loadConfig(null,true);
var A=CQ.shared.HTTP.externalize(D+"/content/jcr:content/stores.init.js");
A=CQ.shared.HTTP.addParameter(A,"path",C);
A=CQ.shared.HTTP.noCaching(A);
var B=CQ.shared.HTTP.get(A)
},initUI:function(B,A){CQ_Analytics.ClientContextUI.create(B,A)
}}
};
CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY=200;
CQ_Analytics.Variables=new function(){return{containsVariable:function(A){return CQ_Analytics.Variables.getVariables(A).length>0
},getVariables:function(B){if(!B||typeof (B)!="string"){return[]
}var A=B.match(new RegExp("\\$\\{([\\w/]*)\\}","ig"));
return A?A:[]
},replaceVariables:function(E){if(!E){return E
}var F="";
var D=E;
var G=CQ_Analytics.Variables.getVariables(E);
while(G.length>0&&F.indexOf(G.join())==-1){for(var C=0;
C<G.length;
C++){var B=G[C].substring(2,G[C].length-1);
var A=CQ_Analytics.ClientContext.get(B)||"";
D=CQ_Analytics.Variables.replace(D,B,A)
}F+=G.join();
G=CQ_Analytics.Variables.getVariables(D)
}return D
},replace:function(A,B,C){return A.replace(new RegExp("\\$\\{"+B+"\\}","ig"),C)
}}
};
CQ_Analytics.Cookie={set:function(C,D,E){var A="";
if(E){var B=new Date();
B.setTime(B.getTime()+(E*24*60*60*1000));
A="; expires="+B.toGMTString()
}document.cookie=C+"="+D+A+"; path=/"
},read:function(B){var D=B+"=";
var A=document.cookie.split(";");
for(var C=0;
C<A.length;
C++){var E=A[C];
while(E.charAt(0)==" "){E=E.substring(1,E.length)
}if(E.indexOf(D)==0){return E.substring(D.length,E.length)
}}return null
},erase:function(A){CQ_Analytics.Cookie.set(A,"",-1)
}};
CQ_Analytics.SessionPersistence=function(){return{COOKIE_NAME:"SessionPersistence-"+CQURLInfo.runModes.replace(",","-"),set:function(C,D){D=D||"";
var F=this.getMap();
if(!F){F=""
}var B=F.indexOf(C+":=");
if(B==-1){F+=C+":="+D+"|"
}else{var E=F.substring(0,B);
var A=F.substring(F.indexOf("|",B+2)+1);
F=E+C+":="+D+"|"+A
}this.setMap(F)
},get:function(B){var D=this.getMap();
var C="";
if(D){var A=D.indexOf(B+":=");
if(A!=-1){C=D.substring(A+(B+":=").length,D.indexOf("|",A+2))
}}C=(C=="null"?"":(C||""));
return C
},getMap:function(){var A=CQ_Analytics.Cookie.read(this.COOKIE_NAME);
if(A){return decodeURIComponent(A)
}return null
},setMap:function(A){CQ_Analytics.Cookie.set(this.COOKIE_NAME,encodeURIComponent(A),365)
},clearMap:function(){CQ_Analytics.Cookie.erase(this.COOKIE_NAME)
},remove:function(C){var E=this.getMap();
if(!E){E=""
}var B=E.indexOf(C+":=");
if(B!=-1){var D=E.substring(0,B);
var A=E.substring(E.indexOf("|",B+2)+1);
E=D+A
}this.setMap(E)
}}
};
CQ_Analytics.Observable=function(){this.fireEvent=function(D){if(D&&this.listeners){D=D.toLowerCase();
var B=Array.prototype.slice.call(arguments,0);
for(var C=0;
C<this.listeners.length;
C++){var A=this.listeners[C];
if(D==A.event){if(A.fireFn.apply(A.scope||this||window,B)===false){return false
}}}}return true
}
};
CQ_Analytics.Observable.prototype.addListener=function(C,A,B){this.listeners=this.listeners||new Array();
if(C&&A){this.listeners.push({event:C.toLowerCase(),fireFn:A,scope:B})
}};
CQ_Analytics.Observable.prototype.removeListener=function(C,A){this.listeners=this.listeners||new Array();
if(C&&A){for(var B=0;
B<this.listeners.length;
B++){if(this.listeners[B].event==C&&this.listeners[B].fireFn==A){this.listeners.splice(B,1)
}}}};
CQ_Analytics.Observable.prototype.listeners=null;
if(!CQ_Analytics.StoreRegistry){CQ_Analytics.StoreRegistry=new function(){var A={};
return{register:function(B){if(B.STORENAME){A[B.STORENAME]=B
}},getStores:function(){return A
},getStore:function(B){return A[B]
}}
}()
}CQ_Analytics.SessionStore=function(){};
CQ_Analytics.SessionStore.prototype=new CQ_Analytics.Observable();
CQ_Analytics.SessionStore.prototype.setProperty=function(A,C){if(this.data==null){this.init()
}this.data[A]=C;
var B=CQ.shared.XSS.getXSSPropertyName(A);
this.data[B]=CQ.shared.XSS.getXSSValue(C);
this.fireEvent("update",A)
};
CQ_Analytics.SessionStore.prototype.initialized=false;
CQ_Analytics.SessionStore.prototype.init=function(){this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.SessionStore.prototype.getLabel=function(A){return A
};
CQ_Analytics.SessionStore.prototype.getLink=function(A){return A
};
CQ_Analytics.SessionStore.prototype.removeProperty=function(A){if(this.data==null){this.init()
}if(this.data[A]){delete this.data[A]
}var B=CQ.shared.XSS.getXSSPropertyName(A);
if(this.data[B]){delete this.data[B]
}this.fireEvent("update",A)
};
CQ_Analytics.SessionStore.prototype.getPropertyNames=function(A){if(this.data==null){this.init()
}A=A?A:[];
var B=new Array();
for(var C in this.data){if(CQ_Analytics.Utils.indexOf(A,C)==-1){B.push(C)
}}return B
};
CQ_Analytics.SessionStore.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SessionStore.prototype.clear=function(){this.data=null
};
CQ_Analytics.SessionStore.prototype.getData=function(B){if(this.data==null){this.init()
}if(B){var A={};
for(var C in this.data){if(CQ_Analytics.Utils.indexOf(B,C)==-1){A[C]=this.data[C]
}}return A
}else{return this.data
}};
CQ_Analytics.SessionStore.prototype.reset=function(){if(this.data!=null){this.data=null;
this.fireEvent("update")
}};
CQ_Analytics.SessionStore.prototype.getProperty=function(B,A){if(this.data==null){this.init()
}if(!A){var C=CQ.shared.XSS.getXSSPropertyName(B);
if(this.data[C]){return this.data[C]
}}return this.data[B]
};
CQ_Analytics.SessionStore.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.SessionStore.prototype.addInitProperty=function(A,B){if(!this.initProperty){this.initProperty={}
}this.initProperty[A]=B
};
CQ_Analytics.SessionStore.prototype.getInitProperty=function(A){return this.initProperty?this.initProperty[A]:null
};
CQ_Analytics.SessionStore.prototype.loadInitProperties=function(C,A){if(C){for(var B in C){this.addInitProperty(B,C[B]);
if(A&&this.data&&this.data[B]===undefined){this.setProperty(B,C[B])
}}}};
CQ_Analytics.SessionStore.prototype.isInitialized=function(){return this.initialized
};
CQ_Analytics.PersistedSessionStore=function(){};
CQ_Analytics.PersistedSessionStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PersistedSessionStore.prototype.STOREKEY="key";
CQ_Analytics.PersistedSessionStore.prototype.setNonPersisted=function(A){if(!this.nonPersisted){this.nonPersisted={}
}this.nonPersisted[A]=true
};
CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX="^generated*";
CQ_Analytics.PersistedSessionStore.prototype.isPersisted=function(A){if(!this.nonPersisted){this.nonPersisted={}
}return this.nonPersisted[A]!==true&&!new RegExp(CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX,"ig").test(A)&&!$.isFunction(this.data[A])&&(typeof this.data[A])!="object"
};
CQ_Analytics.PersistedSessionStore.prototype.getStoreKey=function(){return this.STOREKEY
};
CQ_Analytics.PersistedSessionStore.prototype.persist=function(){if(this.fireEvent("beforepersist")!==false){var A=new CQ_Analytics.SessionPersistence();
A.set(this.getStoreKey(),this.toString());
this.fireEvent("persist")
}};
CQ_Analytics.PersistedSessionStore.prototype.setProperty=function(A,C){if(this.data==null){this.init()
}this.data[A]=C;
var B=CQ.shared.XSS.getXSSPropertyName(A);
this.data[B]=CQ.shared.XSS.getXSSValue(C);
if(this.isPersisted(A)){this.persist()
}this.fireEvent("update",A)
};
CQ_Analytics.PersistedSessionStore.prototype.toString=function(){var B=null;
if(this.data){var A=function(E){if(!E||typeof (E)!="string"){return E
}var D=E;
D=D.replace(new RegExp(",","g"),"&#44;");
D=D.replace(new RegExp("=","g"),"&#61;");
D=D.replace(new RegExp("\\|","g"),"&#124;");
return D
};
for(var C in this.data){if(this.isPersisted(C)&&this.data.hasOwnProperty(C)){B=(B===null?"":B+",");
B+=(C+"="+A(this.data[C]))
}}}return B
};
CQ_Analytics.PersistedSessionStore.prototype.parse=function(E){var D=function(H){if(!H||typeof (H)!="string"){return H
}var G=H;
G=G.replace(new RegExp("&#44;","g"),",");
G=G.replace(new RegExp("&#61;","g"),"=");
G=G.replace(new RegExp("&#124;","g"),"|");
return G
};
var C={};
var F=E.split(",");
for(var A in F){if(F.hasOwnProperty(A)){var B=F[A].split("=");
if(B.length==2){C[B[0]]=D(B[1])
}}}return C
};
CQ_Analytics.PersistedSessionStore.prototype.reset=function(A){if(this.data!=null){this.data={};
this.persist();
this.data=null;
if(!A){this.fireEvent("update")
}}};
CQ_Analytics.PersistedSessionStore.prototype.removeProperty=function(A){if(this.data==null){this.init()
}if(this.data[A]){delete this.data[A];
if(this.isPersisted(A)){this.persist()
}}this.fireEvent("update",A)
};
CQ_Analytics.PersistedSessionStore.prototype.clear=function(){var A=new CQ_Analytics.SessionPersistence();
A.remove(this.getStoreKey());
this.data=null
};
if(!CQ_Analytics.ClientContextMgr){CQ_Analytics.ClientContextMgr=function(){this.clientcontext=null;
this.clientcontextToServer=null;
this.stores={};
this.data=null;
this.config=null;
this.isConfigLoaded=false;
this.areStoresLoaded=false
};
CQ_Analytics.ClientContextMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ClientContextMgr.prototype.STOREKEY="CLIENTCONTEXT";
CQ_Analytics.ClientContextMgr.prototype.STORENAME="clientcontext";
CQ_Analytics.ClientContextMgr.prototype.INITIALIZATION_EVENT_TIMER=1000;
CQ_Analytics.ClientContextMgr.prototype.CONFIG_PATH=CQ_Analytics.Utils.externalize("/etc/clientcontext/legacy/config.json",true);
CQ_Analytics.ClientContextMgr.prototype.init=function(){this.clientcontext={};
this.clientcontextToServer={};
var A=new CQ_Analytics.SessionPersistence();
var B=A.get(this.getStoreKey());
if(B){this.data=this.parse(B)
}else{this.data={}
}this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.ClientContextMgr.prototype.getSessionId=function(){if(!this.data.sessionId){this.setSessionId(CQ_Analytics.Utils.getUID())
}return this.data.sessionId
};
CQ_Analytics.ClientContextMgr.prototype.setSessionId=function(A){if(A){this.setProperty("sessionId",A)
}};
CQ_Analytics.ClientContextMgr.prototype.getVisitorId=function(){return this.data.visitorId
};
CQ_Analytics.ClientContextMgr.prototype.setVisitorId=function(A){this.setProperty("visitorId",A)
};
CQ_Analytics.ClientContextMgr.prototype.getId=function(){var A=this.getVisitorId();
if(!A){return this.getSessionId()
}return A
};
CQ_Analytics.ClientContextMgr.prototype.isAnonymous=function(){var A=this.getVisitorId();
return(!A)
};
CQ_Analytics.ClientContextMgr.prototype.isMode=function(A){return CQ_Analytics.ClientContextMgr.ServerStorage.isMode(A)
};
CQ_Analytics.ClientContextMgr.prototype.get=function(A){if(this.clientcontext==null){this.init()
}if(A){return this.clientcontextToServer
}return this.clientcontext
};
CQ_Analytics.ClientContextMgr.prototype.register=function(C){if(this.clientcontext==null){this.init()
}var A=this;
this.clientcontext[C.getName()]=C.getData();
this.stores[C.getName()]=C;
CQ_Analytics.StoreRegistry.register(C);
var B=this.getStoreConfig(C.getName());
if(B.stats!==false&&B.stats!="false"){this.clientcontextToServer[C.getName()]=C.getData(B.excludedFromStats)
}if(this.initTimer){window.clearTimeout(this.initTimer);
this.initTimer=null
}this.initTimer=window.setTimeout(function(){A.fireEvent("storesinitialize");
A.areStoresInitialized=true
},this.INITIALIZATION_EVENT_TIMER);
C.addListener("update",function(){A.update(C)
});
CQ_Analytics.ClientContextMgr.ServerStorage.handleStoreRegistration(C);
this.addListener("clear",function(){C.clear()
});
this.fireEvent("storeregister",C);
this.fireEvent("storeupdate",C)
};
CQ_Analytics.ClientContextMgr.prototype.update=function(B){if(this.clientcontext==null){this.init()
}this.clientcontext[B.getName()]=B.getData();
var A=this.getStoreConfig(B.getName());
if(A.stats!==false&&A.stats!="false"){this.clientcontextToServer[B.getName()]=B.getData(A.excludedFromStats)
}this.fireEvent("storeupdate",B)
};
CQ_Analytics.ClientContextMgr.prototype.startPosting=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.startPosting()
};
CQ_Analytics.ClientContextMgr.prototype.stopPosting=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.stopPosting()
};
CQ_Analytics.ClientContextMgr.prototype.post=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.post()
};
CQ_Analytics.ClientContextMgr.prototype.getCCMToJCR=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.getCCMToJCR()
};
CQ_Analytics.ClientContextMgr.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.ClientContextMgr.prototype.clear=function(){this.clientcontext=null;
this.clientcontextToServer=null;
this.fireEvent("clear")
};
CQ_Analytics.ClientContextMgr.prototype.getRegisteredStore=function(A){return this.stores&&this.stores[A]?this.stores[A]:null
};
CQ_Analytics.ClientContextMgr.prototype.loadConfig=function(c,autoConfig){var setConfig=function(ccm,config){ccm.config=config;
ccm.isConfigLoaded=true;
ccm.fireEvent("configloaded");
ccm.fireEvent("storesloaded");
ccm.areStoresLoaded=true
};
if(c){setConfig(this,c)
}else{if(!autoConfig){var params={};
params.path=CQ_Analytics.Utils.getPagePath();
params.cq_ck=new Date().valueOf();
var url=this.CONFIG_PATH;
url+="?"+CQ_Analytics.Utils.urlEncode(params);
CQ_Analytics.Utils.load(url,function(data,status,response){var config={};
try{config=eval("config = "+response.responseText)
}catch(error){}setConfig(this,config)
},this)
}else{setConfig(this,{})
}}};
CQ_Analytics.ClientContextMgr.prototype.getConfig=function(){return this.config
};
CQ_Analytics.ClientContextMgr.prototype.getStoreConfig=function(A){if(this.config&&this.config.configs&&this.config.configs[A]&&this.config.configs[A]["store"]){return this.config.configs[A]["store"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getEditConfig=function(A){if(this.config&&this.config.configs&&this.config.configs[A]&&this.config.configs[A]["edit"]){return this.config.configs[A]["edit"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getUIConfig=function(A){if(this.config&&this.config.configs&&this.config.configs[A]&&this.config.configs[A]["ui"]){return this.config.configs[A]["ui"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getInitialData=function(A){if(this.config&&this.config.data&&this.config.data[A]){return this.config.data[A]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getStores=function(){return this.stores
};
CQ_Analytics.ClientContextMgr.prototype.onReady=function(B,A){if(B){if(this.areStoresLoaded){B.call(A)
}else{this.addListener("storesloaded",B,A)
}}};
CQ_Analytics.ClientContextMgr=CQ_Analytics.CCM=new CQ_Analytics.ClientContextMgr();
CQ_Analytics.ClickstreamcloudMgr=CQ_Analytics.CCM;
CQ_Analytics.ContextCloudMgr=CQ_Analytics.CCM;
CQ_Analytics.ClientContextMgr.PATH=null;
CQ_Analytics.ClientContextMgr.getClientContextURL=function(A){return CQ_Analytics.ClientContextMgr.PATH+A
};
window.setTimeout(function(){CQ_Analytics.CCM.init()
},1);
CQ_Analytics.Utils.addListener(window,"unload",function(){try{for(var B in CQ_Analytics.ClientContextMgr){delete CQ_Analytics.ClientContextMgr[B]
}CQ_Analytics.ClientContextMgr=null
}catch(A){}CQ_Analytics.CCM=null
})
}if(CQ_Analytics.ClientContextMgr&&!CQ_Analytics.ClientContextMgr.ServerStorage){CQ_Analytics.ClientContextMgr.ServerStorage=function(){this.posting=false;
this.initialized=false
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_PAGELOAD=1;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_TIMER=2;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_DATAUPDATE=4;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_TIMER=600;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PROCESS_TIMER=60;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE=6;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PATH="/var/statistics/";
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.init=function(){if(this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER)){var A=this;
var B=function(){A.timer=window.setInterval(function(){try{var D=parseInt(A.data.lastPost);
var F=false;
if(isNaN(D)){F=true
}else{var E=new Date().getTime();
if(E>D+CQ_Analytics.ClientContextMgr.ServerStorage.POST_TIMER*1000){F=true
}}}catch(C){}if(F){A.post()
}},CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER*1000)
};
B.call(this)
}this.initialized=true
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.isMode=function(A){return(CQ_Analytics.CCM.POST_MODE&A)>0
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.handleStoreRegistration=function(A){if(!this.initialized){this.init()
}if(this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE)){A.addListener("persist",function(){CQ_Analytics.ClientContextMgr.ServerStorage.post(A)
})
}};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.startPosting=function(){this.posting=true
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.stopPosting=function(){this.posting=false
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.post=function(D,F){if(this.posting||F){try{var G=this.getCCMToJCR(D);
var E=CQ_Analytics.Utils.getTimestamp();
G["./jcr:primaryType"]="nt:unstructured";
G["./sessionId"]=CQ_Analytics.CCM.getSessionId();
var C=this.POST_PATH+"clientcontext/";
if(CQ_Analytics.CCM.isAnonymous()){var A=CQ_Analytics.Utils.insert(CQ_Analytics.CCM.getId(),2,"/");
C+="anonymous/"+A+"/"+E
}else{C+="users/"+CQ_Analytics.CCM.getId()+"/"+E
}CQ_Analytics.Utils.post(C,null,G);
this.lastPost=E
}catch(B){}}};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.getCCMToJCR=function(G){var C=CQ_Analytics.CCM.get(true);
var E={};
for(var I in C){if(!G||I==G){var A=C[I],B=encodeURIComponent(I);
var F=typeof A;
if(F=="object"){for(var D in A){var H=A[D];
D=D.replace(":","/");
E["./"+I+"/./"+D]=H
}}else{E["./"+I]=A
}}}return E
};
CQ_Analytics.ClientContextMgr.ServerStorage=new CQ_Analytics.ClientContextMgr.ServerStorage();
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_PAGELOAD=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_PAGELOAD;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_DATAUPDATE=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE;
CQ_Analytics.ClickstreamcloudMgr.POST_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_PROCESS_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE;
CQ_Analytics.ClickstreamcloudMgr.POST_PATH=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PATH
}if(!CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr=function(){this.SEGMENTATION_ROOT="/etc/segmentation";
this.SEGMENT_SELECTOR=".segment.js";
this.SEGMENTATION_SCRIPT_LOADER="cq-segmentation-loader";
this.segments={};
this.boosts={};
var A=this;
this.fireUpdate=function(){A.fireEvent("update")
};
this.init()
};
CQ_Analytics.SegmentMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SegmentMgr.prototype.STORENAME="segments";
CQ_Analytics.SegmentMgr.prototype.register=function(A,C,B){this.segments[A]=C;
this.boosts[A]=!isNaN(B)?parseInt(B):0;
this.fireUpdate()
};
CQ_Analytics.SegmentMgr.prototype.resolveArray=function(E,G,B){G=G||CQ_Analytics.ClientContextMgr.get();
if(!(E instanceof Array)){return this.resolve(E,G)
}B=(B=="AND"?"AND":"OR");
var A=(B=="AND");
for(var D=0;
D<E.length;
D++){var F=E[D];
var C=this.resolve(F,G);
if(B=="AND"){if(C!==true){return C
}}else{if(C===true){return true
}}}return A
};
CQ_Analytics.SegmentMgr.prototype.resolve=function(segmentPath,clientcontext){clientcontext=clientcontext||CQ_Analytics.ClientContextMgr.get();
if(!segmentPath){return false
}if(segmentPath instanceof Array){return this.resolveArray(segmentPath,clientcontext)
}if(segmentPath.indexOf(this.SEGMENTATION_ROOT)!=0){return false
}if(segmentPath==this.SEGMENTATION_ROOT){return true
}if(!this.segments[segmentPath]){return true
}var parent=segmentPath.substring(0,segmentPath.lastIndexOf("/"));
if(parent.indexOf(this.SEGMENTATION_ROOT)==0){var pres=this.resolve(parent,clientcontext);
if(pres!==true){return pres
}}var rules="function(clientcontext, contextcloud, clickstreamcloud) { return true ";
rules+=" && ( "+this.segments[segmentPath]+" ) ";
rules+=";}";
var res=true;
try{var f=null;
eval("f = "+rules+"");
var e=(f==null||f(clientcontext,clientcontext,clientcontext));
res=res&&(e===true)
}catch(error){return"Unresolved - Error while evaluating segment "+segmentPath+" : "+error.message
}return res
};
CQ_Analytics.SegmentMgr.prototype.getResolved=function(C){C=C||CQ_Analytics.ClientContextMgr.get();
var A=new Array();
for(var B in this.segments){if(this.resolve(B,C)===true){A.push(B)
}}return A
};
CQ_Analytics.SegmentMgr.prototype.getMaxBoost=function(D,F){if(!(D instanceof Array)){return this.getBoost(D)
}var B=0;
for(var C=0;
C<D.length;
C++){var E=D[C];
if(this.resolve(E,F)===true){var A=this.boosts[E]||0;
if(A>B){B=A
}}}return B
};
CQ_Analytics.SegmentMgr.prototype.getBoost=function(A){if(!(A instanceof Array)){A=[A]
}return this.boosts[A]||0
};
CQ_Analytics.SegmentMgr.prototype.reload=function(path){var url=path;
if(!url){url=this.SEGMENTATION_ROOT
}if(url){if(url.indexOf(this.SEGMENT_SELECTOR)==-1){url+=this.SEGMENT_SELECTOR
}try{CQ_Analytics.Utils.load(url,function(config,status,response){if(response&&response.responseText){eval(response.responseText)
}},this);
var response=CQ.HTTP.get(scripts[i].src)
}catch(err){}}};
CQ_Analytics.SegmentMgr.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SegmentMgr.prototype.getProperty=function(A){return A
};
CQ_Analytics.SegmentMgr.prototype.getLink=function(A){return A+".html"
};
CQ_Analytics.SegmentMgr.prototype.getLabel=function(C){if(C){var B=C;
var A=B.lastIndexOf("/");
if(A!=-1){B=B.substring(A+1,B.length)
}var D=this.resolve(C);
if(D===true){return B
}else{if(D!==true){return'<span class="invalid" title="'+D+'" alt="'+D+'">'+B+"</span>"
}}}return C
};
CQ_Analytics.SegmentMgr.prototype.getPropertyNames=function(){return this.getResolved()
};
CQ_Analytics.SegmentMgr=new CQ_Analytics.SegmentMgr();
CQ_Analytics.SegmentMgr.loadSegments=function(A){CQ_Analytics.SegmentMgr.areSegmentsLoaded=false;
CQ.shared.HTTP.get(CQ.shared.HTTP.externalize(A+".segment.js"));
CQ_Analytics.SegmentMgr.areSegmentsLoaded=true;
this.fireEvent("segmentsload")
};
CQ_Analytics.SegmentMgr.renderer=function(A,C){if(A&&A.STORENAME==CQ_Analytics.SegmentMgr.STORENAME){var E=A.getPropertyNames();
var F=$("<div>");
for(var D=0;
D<E.length;
D++){var B=E[D];
F.append($("<span>").attr("title",A.getProperty(B)).append($("<a>").attr("href",_g.shared.HTTP.externalize(A.getLink(B))).attr("title",A.getProperty(B)).html(A.getLabel(B))))
}$("#"+C).children().remove();
$("#"+C).append(F)
}};
CQ_Analytics.ClientContextMgr.addListener("storeupdate",CQ_Analytics.SegmentMgr.fireUpdate);
CQ_Analytics.Utils.addListener(window,"unload",function(){try{for(var B in CQ_Analytics.SegmentMgr){delete CQ_Analytics.SegmentMgr[B]
}}catch(A){}CQ_Analytics.SegmentMgr=null
})
}if(!CQ_Analytics.StrategyMgr){CQ_Analytics.StrategyMgr=function(){this.strategies={}
};
CQ_Analytics.StrategyMgr.prototype={};
CQ_Analytics.StrategyMgr.prototype.isRegistered=function(A){return !!this.strategies[A]
};
CQ_Analytics.StrategyMgr.prototype.register=function(B,A){if(typeof A=="function"){this.strategies[B]=A
}};
CQ_Analytics.StrategyMgr.prototype.choose=function(B,A){if(A.length==1){return A[0]
}if(this.strategies[B]){return this.strategies[B].call(this,A)
}};
CQ_Analytics.StrategyMgr=new CQ_Analytics.StrategyMgr()
}CQ_Analytics.StrategyMgr.register("clickstream-score",function(H){if(H.length==1){return H[0]
}var A=[];
if(CQ_Analytics.TagCloudMgr){var K=CQ_Analytics.TagCloudMgr.getTags();
K=K||{};
var J=-1;
for(var E=0;
E<H.length;
E++){var G=0;
var I=H[E].tags;
if(I){for(var D=0;
D<I.length;
D++){var F=I[D].tagID;
G+=parseInt(K[F])||0
}}if(G==J){A.push(H[E])
}else{if(G>J){A=[];
A.push(H[E]);
J=G
}}}}else{A=H
}if(A.length==1){return A[0]
}var B=null;
if(CQ_Analytics.PageDataMgr){B=CQ_Analytics.PageDataMgr.getProperty("random")
}if(!B){B=window.CQ_StrategyRandom
}if(!B){B=window.CQ_StrategyRandom=Math.random()
}if(parseFloat(B)>1){B=1/B
}if(parseFloat(B)==1){B=0
}var C=Math.floor(B*A.length);
return A[C]
});
CQ_Analytics.StrategyMgr.register("first",function(A){return A[0]
});
CQ_Analytics.StrategyMgr.register("random",function(C){var A=null;
if(CQ_Analytics.PageDataMgr){A=CQ_Analytics.PageDataMgr.getProperty("random")
}if(!A){A=window.CQ_StrategyRandom
}if(!A){A=window.CQ_StrategyRandom=Math.random()
}if(parseFloat(A)>1){A=1/A
}if(parseFloat(A)==1){A=0
}var B=Math.floor(A*C.length);
return C[B]
});
if(!CQ_Analytics.ClickstreamcloudUI){CQ_Analytics.ClickstreamcloudUI=function(){this.SHOW_BOX_COOKIE="show-clickstreamcloud";
this.BOX_ID="clickstreamcloud";
this.box=null;
this.top=null;
this.sections=null;
this.bottom=null;
this.nbSection=0;
this.isRendered=false
};
CQ_Analytics.ClickstreamcloudUI.prototype=new CQ_Analytics.Observable();
CQ_Analytics.ClickstreamcloudUI.prototype.createBox=function(C){var A=this;
this.box=document.createElement("div");
this.box.id=this.BOX_ID;
this.box.style.display="none";
var D=document.createElement("div");
this.box.appendChild(D);
this.top=document.createElement("div");
this.top.className="ccl-header ccl-header-close";
this.addListener("close",function(){A.onVisibilityChange()
});
this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createStaticLink("","#ccl",""));
this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Close"),function(){A.box.style.display="none";
A.fireEvent("close")
},{className:"ccl-close"},"#ccl"));
if(this.hideLoadLink===false){this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Load"),function(){A.fireEvent("loadclick")
},{className:"ccl-load"},"#ccl"))
}if(this.hideEditLink===false){this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Edit"),function(){A.fireEvent("editclick")
},{className:"ccl-edit"},"#ccl"))
}D.appendChild(this.top);
this.sections=document.createElement("div");
D.appendChild(this.sections);
this.bottom=document.createElement("div");
this.bottom.className="ccl-spacer";
D.appendChild(this.bottom);
var B=RUZEE.ShadedBorder.create({corner:10,border:2,shadow:21});
B.render(D);
C.appendChild(this.box);
if(D.onresize){this.addListener("show",D.onresize,D)
}};
CQ_Analytics.ClickstreamcloudUI.prototype.init=function(B){B=B||{};
this.parentId=B.target;
var C=document.getElementById(this.parentId);
if(C){this.version=B.version||CQ_Analytics.ClickstreamcloudUI.VERSION_FULL;
this.hideEditLink=B.hideEditLink!==false;
this.hideLoadLink=B.hideLoadLink!==false;
this.disableKeyShortcut=B.disableKeyShortcut!==false;
if(CQ_Analytics.Cookie.read(this.SHOW_BOX_COOKIE)=="true"){this.show()
}if(!this.disableKeyShortcut){var A=this;
CQ_Analytics.Utils.registerDocumentEventHandler("onkeydown",CQ_Analytics.Utils.eventWrapper(function(D,E){if(D.ctrlKey&&D.altKey&&E=="C".charCodeAt(0)){A.toggle()
}}))
}}};
CQ_Analytics.ClickstreamcloudUI.prototype.onVisibilityChange=function(){CQ_Analytics.Cookie.set(this.SHOW_BOX_COOKIE,this.isVisible()?"true":"false",365)
};
CQ_Analytics.ClickstreamcloudUI.prototype.isVisible=function(){return(this.box!=null&&this.box.style.display!="none")
};
CQ_Analytics.ClickstreamcloudUI.prototype.toggle=function(){if(this.isVisible()){this.hide()
}else{this.show()
}};
CQ_Analytics.ClickstreamcloudUI.prototype.register=function(D,A,C){var B=function(){var F=new CQ_Analytics.ClickstreamcloudUI.Section(D,this.version,A||{},C);
var E=CQ_Analytics.CCM.getUIConfig(D.getName())||{};
this.addSection(F,E.rank||null);
D.addListener("update",F.reset,F)
};
if(this.isRendered){B.call(this)
}else{this.addListener("render",B,this)
}};
CQ_Analytics.ClickstreamcloudUI.prototype.addSection=function(C,A){if(A<this.nbSection&&this.nbSection>0){var B=this.nbSection;
var D=this.sections.lastChild;
while(B>A+1){B--;
D=D.previousSibling
}this.sections.insertBefore(C.get(),D)
}else{this.sections.appendChild(C.get())
}this.nbSection++
};
CQ_Analytics.ClickstreamcloudUI.prototype.removeSection=function(A){this.sections.removeChild(A);
this.nbSection--
};
CQ_Analytics.ClickstreamcloudUI.prototype.show=function(){if(!this.isRendered){var A=document.getElementById(this.parentId);
if(A){this.createBox(A);
this.isRendered=true;
this.fireEvent("render")
}}this.box.style.display="block";
this.onVisibilityChange();
this.fireEvent("show")
};
CQ_Analytics.ClickstreamcloudUI.prototype.hide=function(){if(this.box!=null){this.box.style.display="none"
}this.onVisibilityChange()
};
CQ_Analytics.ClickstreamcloudUI.prototype.MODE_TEXTFIELD="textfield";
CQ_Analytics.ClickstreamcloudUI.prototype.MODE_LINK="link";
CQ_Analytics.ClickstreamcloudUI.prototype.MODE_STATIC="static";
CQ_Analytics.ClickstreamcloudUI.prototype.VERSION_FULL="full";
CQ_Analytics.ClickstreamcloudUI.prototype.VERSION_LIGHT="light";
CQ_Analytics.ClickstreamcloudUI.prototype.Section=function(D,A,B,C){this.contentbox=null;
this.section=null;
this.sessionStore=D;
this.version=A;
this.title=B.title;
this.mode=B.mode||CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD;
this.renderer=C;
this.sort=function(J,E){if(!E||!J){return J
}var I=[];
for(var H=0;
H<E.length;
H++){var G=E[H];
var F=$CQ.inArray(G,J);
if(F>-1){I.push(G);
J=$CQ.merge(J.slice(0,F-1),J.slice(F+1,J.length))
}}I=$CQ.merge(I,J);
return I
};
this.buildContentBox=function(){if(this.renderer){this.contentbox=this.renderer.call(this.sessionStore)
}else{this.contentbox=document.createElement("p");
this.contentbox.className="ccl-sectioncontent";
var G=CQ_Analytics.CCM.getStoreConfig(this.sessionStore.getName());
var I=CQ_Analytics.CCM.getUIConfig(this.sessionStore.getName());
var L=this.sessionStore.getPropertyNames(G.invisible);
L=this.sort(L,I.order);
var J=this.sessionStore.getData();
if(this.version==CQ_Analytics.ClickstreamcloudUI.VERSION_LIGHT){var H=new Array();
var N=new Array();
for(var K=0;
K<L.length;
K++){var F=L[K];
var Q=this.sessionStore.getProperty(F);
if(Q==F){H.push(F);
N.push(F)
}else{var P=CQ.shared.XSS.getXSSTablePropertyValue(J,F);
P=CQ_Analytics.Variables.replaceVariables(P);
if(CQ_Analytics.Utils.indexOf(H,P)==-1){H.push(P);
F=CQ.shared.XSS.KEY_REGEXP.test(F)?F.substring(0,F.length-4):F;
N.push(F)
}}}for(var K=0,E=0;
K<H.length;
K++){var F=N[K];
var O=H[K];
O=CQ_Analytics.Variables.replaceVariables(O);
if(this.mode==CQ_Analytics.ClickstreamcloudUI.MODE_LINK){var M=CQ_Analytics.Utils.externalize(this.sessionStore.getLink(F),true);
this.addLink(this.sessionStore.getLabel(F),M,"ccl-data-light",F)
}else{this.addStaticText(O,"ccl-data-light",F)
}E++;
if(E>3){E=0;
this.addLineBreak()
}}}else{for(var K=0;
K<L.length;
K++){var F=L[K];
var P=CQ.shared.XSS.getXSSTablePropertyValue(J,F);
F=CQ.shared.XSS.KEY_REGEXP.test(F)?F.substring(0,F.length-4):F;
if(this.mode==CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD){this.addNameValueField(this.sessionStore.getLabel(F),P,F,"ccl-data",F)
}else{if(this.mode==CQ_Analytics.ClickstreamcloudUI.MODE_LINK){var M=CQ_Analytics.Utils.externalize(this.sessionStore.getLink(F),true);
this.addLink(this.sessionStore.getLabel(F),M,"ccl-data",F)
}else{this.addStaticText(this.sessionStore.getLabel(F),"ccl-data",F)
}}this.contentbox.appendChild(document.createTextNode(" "))
}}}};
this.buildSection=function(){if(this.contentbox==null){this.buildContentBox()
}if(this.section==null){this.section=document.createElement("div")
}var F=document.createElement("div");
F.className="ccl-header";
this.section.appendChild(F);
var E=document.createElement("div");
E.innerHTML=CQ.shared.I18n.getVarMessage(this.title);
E.className="ccl-title";
F.appendChild(E);
this.section.appendChild(this.contentbox)
}
};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype=new CQ_Analytics.Observable();
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.get=function(){if(this.section==null){this.buildSection()
}return this.section
};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.reset=function(){if(!this.isReseting){this.isReseting=true;
if(this.section!=null){while(this.section.hasChildNodes()){this.section.removeChild(this.section.firstChild)
}this.contentbox=null
}this.buildSection();
this.isReseting=false
}};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addNameValueField=function(C,D,B,A,E){this.contentbox.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createNameValue(B,D,A,E))
};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addLink=function(E,C,A,D){if(C){var B=document.createElement("span");
B.className=A||"ccl-data";
B.title=D;
B.alt=D;
B.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createStaticLink(E,C,D));
this.contentbox.appendChild(B)
}else{this.addStaticText(E)
}};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addStaticText=function(C,A,B){if(C){this.contentbox.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createText(C,A,B))
}};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addLineBreak=function(){this.contentbox.appendChild(document.createElement("br"))
};
CQ_Analytics.ClickstreamcloudUI=new CQ_Analytics.ClickstreamcloudUI();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.init(CQ_Analytics.CCM.getConfig()["ui"])
})
}if(!CQ_Analytics.PageDataMgr){CQ_Analytics.PageDataMgr=function(){};
CQ_Analytics.PageDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PageDataMgr.prototype.STORENAME="pagedata";
CQ_Analytics.PageDataMgr.prototype.FORCE_EXPERIENCE_COOKIE="cq-forceexperience";
CQ_Analytics.PageDataMgr.prototype.init=function(){this.data={};
for(var A in this.initProperty){this.data[A]=this.initProperty[A]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.PageDataMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.PageDataMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.PageDataMgr.prototype.setExperience=function(A){CQ.shared.HTTP.setCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,A,"/")
};
CQ_Analytics.PageDataMgr.prototype.getExperience=function(){return CQ.shared.HTTP.getCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,"/")
};
CQ_Analytics.PageDataMgr.prototype.clearExperience=function(){CQ.shared.HTTP.clearCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,"/")
};
CQ_Analytics.PageDataMgr=new CQ_Analytics.PageDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.loadInitProperties(CQ_Analytics.CCM.getInitialData(this.getName()));
this.init();
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()));
CQ_Analytics.CCM.register(this)
},CQ_Analytics.PageDataMgr)
}CQ_Analytics.BrowserInfo=function(){var F=navigator.userAgent.toLowerCase();
var C=function(H){return H.test(F)
};
var E=function(){if(C(/opera/)){return{browserFamily:"Opera",browserVersion:""}
}if(C(/chrome/)){return{browserFamily:"Chrome",browserVersion:""}
}if(C(/safari/)){if(C(/applewebkit\/4/)){return{browserFamily:"Safari",browserVersion:"2"}
}if(C(/version\/3/)){return{browserFamily:"Safari",browserVersion:"3"}
}if(C(/version\/4/)){return{browserFamily:"Safari",browserVersion:"4"}
}if(C(/version\/5/)){return{browserFamily:"Safari",browserVersion:"5"}
}if(C(/version\/6/)){return{browserFamily:"Safari",browserVersion:"6"}
}return{browserFamily:"Safari",browserVersion:"7 or higher"}
}if(C(/webkit/)){return{browserFamily:"WebKit",browserVersion:""}
}if(C(/msie/)){if(C(/msie 6/)){return{browserFamily:"IE",browserVersion:"6"}
}if(C(/msie 7/)){return{browserFamily:"IE",browserVersion:"7"}
}if(C(/msie 8/)){return{browserFamily:"IE",browserVersion:"8"}
}if(C(/msie 9/)){return{browserFamily:"IE",browserVersion:"9"}
}if(C(/msie 10/)){return{browserFamily:"IE",browserVersion:"10"}
}return{browserFamily:"IE",browserVersion:"11 or higher"}
}if(C(/gecko/)){if(C(/rv:1\.8/)){return{browserFamily:"Firefox",browserVersion:"2"}
}if(C(/rv:1\.9/)){return{browserFamily:"Firefox",browserVersion:"3"}
}if(C(/rv:2.0/)){return{browserFamily:"Firefox",browserVersion:"4"}
}if(C(/rv:5./)){return{browserFamily:"Firefox",browserVersion:"5"}
}if(C(/rv:6./)){return{browserFamily:"Firefox",browserVersion:"6"}
}if(C(/rv:7./)){return{browserFamily:"Firefox",browserVersion:"7"}
}if(C(/rv:8./)){return{browserFamily:"Firefox",browserVersion:"8"}
}if(C(/rv:9./)){return{browserFamily:"Firefox",browserVersion:"9"}
}return{browserFamily:"Firefox",browserVersion:"10 or higher"}
}var H=C(/adobeair/);
if(H){return{browserFamily:"Adobe AIR",browserVersion:""}
}return{browserFamily:"Unresolved",browserVersion:"Unresolved"}
};
var D=function(){if(C(/windows 98|win98/)){return"Windows 98"
}if(C(/windows nt 5.0|windows 2000/)){return"Windows 2000"
}if(C(/windows nt 5.1|windows xp/)){return"Windows XP"
}if(C(/windows nt 5.2/)){return"Windows Server 2003"
}if(C(/windows nt 6.0/)){return"Windows Vista"
}if(C(/windows nt 6.1/)){return"Windows 7"
}if(C(/windows nt 4.0|winnt4.0|winnt/)){return"Windows NT 4.0"
}if(C(/windows me/)){return"Windows ME"
}if(C(/mac os x/)){if(C(/ipad/)||C(/iphone/)){return"iOS"
}return"Mac OS X"
}if(C(/macintosh|mac os/)){return"Mac OS"
}if(C(/android/)){return"Android"
}if(C(/linux/)){return"Linux"
}return"Unresolved"
};
var B=function(){if(C(/ipad/)){return"iPad"
}if(C(/iphone/)){return"iPhone"
}if(C(/mobi/)){return"Mobile"
}return"Desktop"
};
var A=E.call();
this.browserFamily=A.browserFamily;
this.browserVersion=A.browserVersion;
this.browserName=this.browserFamily+" "+this.browserVersion;
this.OSName=D.call();
this.deviceType=B.call();
this.ua=F;
var G=/^https/i.test(window.location.protocol);
this.screenResolution=screen.width+"x"+screen.height
};
CQ_Analytics.BrowserInfo.prototype={getBrowserName:function(){return this.browserName
},getBrowserFamily:function(){return this.browserFamily
},getBrowserVersion:function(){return this.browserVersion
},getOSName:function(){return this.OSName
},getScreenResolution:function(){return this.screenResolution
},getDeviceType:function(){return this.deviceType
},getUserAgent:function(){return this.ua
},isMobile:function(A){if(!A){A=this.getDeviceType()
}A=A?A.toLowerCase():"desktop";
return A!="desktop"
},isIE:function(A){return this.getBrowserFamily()=="IE"&&(A?this.getBrowserVersion()==A:true)
},isIE6:function(){return this.isIE("6")
},isIE7:function(){return this.isIE("7")
},isIE8:function(){return this.isIE("8")
},isIE9:function(){return this.isIE("9")
}};
CQ_Analytics.BrowserInfoInstance=new CQ_Analytics.BrowserInfo();
if(!CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr=function(){this.position={x:0,y:0};
this.getPageX=function(C){var B=C.pageX;
if(!B&&0!==B){B=C.clientX||0
}return B
};
this.getPageY=function(B){var C=B.pageY;
if(!C&&0!==C){C=B.clientY||0
}return C
};
var A=this;
this.timer=null;
$(document).bind("mousemove",function(E,D,C,H){var F=E||window.event;
if(F){if(!A.timer){var B=A.getPageX(F);
var G=A.getPageY(F);
A.timer=setTimeout(function(){A.setPosition(B,G);
A.timer=null
},500)
}}});
this.init()
};
CQ_Analytics.MousePositionMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.MousePositionMgr.prototype.STORENAME="mouseposition";
CQ_Analytics.MousePositionMgr.prototype.setPosition=function(A,B){this.position.x=A;
this.position.y=B;
this.fireEvent("update")
};
CQ_Analytics.MousePositionMgr.prototype.getProperty=function(A){return this.position[A]
};
CQ_Analytics.MousePositionMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.MousePositionMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.MousePositionMgr.prototype.getPropertyNames=function(){var A=new Array();
for(var B in this.position){A.push(B)
}return A
};
CQ_Analytics.MousePositionMgr.prototype.getSessionStore=function(){return this
};
CQ_Analytics.MousePositionMgr.prototype.getData=function(A){return this.position
};
CQ_Analytics.MousePositionMgr.prototype.clear=function(){this.position={}
};
CQ_Analytics.MousePositionMgr=new CQ_Analytics.MousePositionMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.MousePositionMgr)
}if(!CQ_Analytics.EventDataMgr){CQ_Analytics.EventDataMgr=function(){};
CQ_Analytics.EventDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.EventDataMgr.prototype.STORENAME="eventdata";
CQ_Analytics.EventDataMgr.prototype.init=function(){this.data={};
for(var A in this.initProperty){this.data[A]=this.initProperty[A]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.EventDataMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.EventDataMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.EventDataMgr=new CQ_Analytics.EventDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.loadInitProperties(CQ_Analytics.CCM.getInitialData(this.getName()));
this.init();
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()));
CQ_Analytics.CCM.register(this)
},CQ_Analytics.EventDataMgr)
}if(!window.CQ_Context){window.CQ_Context=function(){};
window.CQ_Context.prototype=new CQ_Analytics.Observable();
window.CQ_Context.prototype.getProfile=function(){return(function(){return{getUserId:function(){return this.getProperty("authorizableId")
},getDisplayName:function(){var A=this.getProperty("formattedName");
if(A){return A
}A=this.getProperty("displayName");
if(A){return A
}return this.getUserId()
},getFirstname:function(){return this.getProperty("givenName")
},getLastname:function(){return this.getProperty("familyName")
},getEmail:function(){return this.getProperty("email")
},getProperty:function(A){if(CQ_Analytics&&CQ_Analytics.ProfileDataMgr){return CQ_Analytics.ProfileDataMgr.getProperty(A)
}return""
},getProperties:function(){if(CQ_Analytics&&CQ_Analytics.ProfileDataMgr){return CQ_Analytics.ProfileDataMgr.getData()
}return{}
},getAvatar:function(){return this.getProperty("avatar")
},onUpdate:function(A,B){if(A&&CQ_Analytics&&CQ_Analytics.ProfileDataMgr){CQ_Analytics.ProfileDataMgr.addListener("update",A,B||this)
}}}
})()
};
window.CQ_Context=new window.CQ_Context()
}window.CQ_trackTeasersStats=true;
function initializeTeaserLoader(B,F,G,E,A,D){E=CQ.Ext&&(E=="true"||E===true);
if(window.CQ_Analytics){var C=function(){var N=(E)?"/_jcr_content/par.html?wcmmode=disabled":"/_jcr_content/par.html";
var L=CQ_Analytics.PageDataMgr.getExperience();
if(L){CQ_Analytics.PageDataMgr.clearExperience();
var K=L+N;
jQuery("#"+G).load(K,function(){Teaser.afterTeaserLoad()
});
return 
}var M=function(P){var R="";
var V=new Array();
if(CQ_Analytics.SegmentMgr){var T=0;
for(var Q=0;
Q<B.length;
Q++){var S=CQ.shared.HTTP.externalize(B[Q].path+".html");
if(!B[Q]["segments"]||B[Q]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(B[Q]["segments"])===true){var O=CQ_Analytics.SegmentMgr.getMaxBoost(B[Q]["segments"]);
var U=[B[Q]["title"],O,B[Q].thumbnail,S];
if(P==B[Q].path){R+=CQ.I18n.getMessage('<b><a href="{3}" class="cq-teaser-segment-link"><img src="{2}" class="cq-teaser-decision-thumbnail cq-teaser-decision-match"></a>Teaser: {0} - match ( boost = {1} )</b><br>',U)
}else{R+=CQ.I18n.getMessage('<a href="{3}" class="cq-teaser-segment-link"><img src="{2}" class="cq-teaser-decision-thumbnail cq-teaser-decision-match"></a>Teaser: {0} - match ( boost = {1} )<br>',U)
}if(O==T){V.push(B[Q])
}else{if(O>T){V=new Array();
V.push(B[Q]);
T=O
}}}else{var U=[B[Q]["title"],B[Q].thumbnail,S];
R+=CQ.I18n.getMessage('<a href="{2}" class="cq-teaser-segment-link"><img src="{1}" class="cq-teaser-decision-thumbnail cq-teaser-decision-nomatch"></a>Teaser: {0} - no match<br>',U)
}}}R+=CQ.I18n.getMessage("<br>Strategy <b>{0}</b> selected current teaser.<br>",F);
return R
};
var J=null;
var H=null;
var I=function(){var V=new Array();
if(CQ_Analytics.SegmentMgr){var T=0;
for(var R=0;
R<B.length;
R++){if(!B[R]["segments"]||B[R]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(B[R]["segments"])===true){var O=CQ_Analytics.SegmentMgr.getMaxBoost(B[R]["segments"]);
if(O==T){V.push(B[R])
}else{if(O>T){V=new Array();
V.push(B[R]);
T=O
}}}}}if(V.length>0){var U=V[0];
if(CQ_Analytics.StrategyMgr){var S=CQ_Analytics.StrategyMgr.choose(F,V);
if(S!=null){U=S
}}if(!J||J.path!=U.path){J=U;
var P=U.path+N;
P=CQ.shared.HTTP.addSelectors(P,CQ.shared.HTTP.getSelectors());
jQuery("#"+G).load(P,function(){Teaser.afterTeaserLoad()
});
if(window.CQ_trackTeasersStats&&A){if(!CQ_Analytics.loadedTeasersStack){CQ_Analytics.loadedTeasersStack=[];
$(window).unload(function(){try{var W=CQ_Analytics.loadedTeasersStack;
if(W){delete CQ_Analytics.loadedTeasersStack;
var Y=A;
for(var Z=0;
Z<W.length;
Z++){Y=CQ.shared.HTTP.addParameter(Y,"path",W[Z])
}CQ.shared.HTTP.get(Y,function(){})
}}catch(X){}})
}CQ_Analytics.loadedTeasersStack.push(U.path)
}if(E){if(D){var Q=CQ.WCM.getEditable(D);
if(Q){if(Q&&Q.teaserToolTip){Q.teaserToolTip.hide();
Q.teaserToolTip.remove();
Q.teaserToolTip=null
}else{Q.on(CQ.wcm.EditRollover.EVENT_SHOW_HIGHTLIGHT,function(W){if(!this.teaserInfoButton){this.teaserInfoButton=CQ.Ext.DomHelper.append("CQ",{tag:"div",cls:"x-tool x-tool-help cq-teaser-tooltip-tool"},true);
this.teaserInfoButton.position("absolute");
this.teaserInfoButton.on("click",function(){if(!Q.teaserToolTip){Q.teaserToolTip=new CQ.Ext.Tip({html:M(J.path),title:CQ.I18n.getMessage("Selection decision"),width:450,autoHide:false,closable:true,height:300,floating:true,autoHeight:false,bodyStyle:"overflow-y: scroll;"})
}var X=this.getXY();
Q.teaserToolTip.setPosition(X[0]-460,X[1]-100);
Q.teaserToolTip.show()
})
}this.teaserInfoButton.anchorTo(W.frameBottom.getEl(),"tr",[-26,-15]);
this.teaserInfoButton.show()
});
Q.on(CQ.wcm.EditRollover.EVENT_HIDE_HIGHTLIGHT,function(W){if(this.teaserInfoButton){this.teaserInfoButton.hide()
}})
}}}}}}else{if(E){var Q=CQ.WCM.getEditable(D);
if(Q&&Q.teaserToolTip){Q.teaserToolTip.hide();
Q.teaserToolTip.remove();
Q.teaserToolTip=null
}}CQ_Analytics.Utils.clearElement(G);
J=null
}};
I.call();
if(CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr.addListener("update",I)
}};
if(CQ_Analytics.CCM.areStoresInitialized){C.call(this)
}else{CQ_Analytics.CCM.addListener("storesinitialize",C)
}}}window.CQ_trackLandingPagesStats=true;
function initializeLandingPageLoader(F,D,E,C,A){C=CQ.Ext&&(C=="true"||C===true);
if(window.CQ_Analytics){var G=".html";
var B=function(){var I=null;
var H=function(){var K=new Array();
if(CQ_Analytics.SegmentMgr){var R=0;
for(var O=0;
O<F.length;
O++){if(!F[O]["segments"]||F[O]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(F[O]["segments"])===true){var U=CQ_Analytics.SegmentMgr.getMaxBoost(F[O]["segments"]);
if(U==R){K.push(F[O])
}else{if(U>R){K=new Array();
K.push(F[O]);
R=U
}}}}}if(K.length>0){var N=K[0];
if(CQ_Analytics.StrategyMgr){var S=CQ_Analytics.StrategyMgr.choose(D,K);
if(S!=null){N=S
}}if(!I||I.path!=N.path){var W=I;
I=N;
var M=CQ.shared.HTTP.get(N.path+G);
var X=M.responseText;
var P=function(m,Z){var g="";
if(m&&m.indexOf('id="'+Z+'"')!=-1){var f=m.indexOf('id="'+Z+'"');
var a=m.substring(0,f).lastIndexOf("<div");
var e=m.substring(a);
var l=e.split(new RegExp("<div","ig"));
var c=0;
for(var d=0;
d<l.length;
d++){c++;
var h=l[d].split(new RegExp("</div","ig"));
for(var b=1;
b<h.length;
b++){c--;
if(c==1){var Y=l[d].lastIndexOf("</div")+6;
Y=e.indexOf(l[d])+Y;
e=e.substring(0,Y);
e=e.substring(e.indexOf(">")+1,e.lastIndexOf("</div"));
return e
}}}}return""
};
X=P(X,E);
var T=$("#"+E)[0];
var Q=function(a,Y){if(C){var b=CQ.WCM.getEditables();
for(var c in b){var Z=b[c];
if(!a||Z.path.indexOf(a)!=-1){Z.hide();
Z.remove()
}}}};
var L=document.createElement("div");
L.innerHTML=X;
if(W){$("object",T).parent().fadeOut("slow");
$("img",T).fadeOut("slow");
$(T).slideUp("slow",function(){Q(W.path,false);
$(T).children().remove();
var Y=T.insertBefore(L,T.firstChild);
$(T).slideDown("slow",function(){if(C){CQ.DOM.executeScripts(CQ.Ext.get(L))
}})
})
}else{var J=T.insertBefore(L,T.firstChild);
$(T).slideDown("slow",function(){if(C){CQ.DOM.executeScripts(CQ.Ext.get(L))
}})
}try{if(window.CQ_trackLandingPagesStats&&A){if(!CQ_Analytics.loadedLandingPagesStack){CQ_Analytics.loadedLandingPagesStack=[];
$(window).unload(function(){try{var b=CQ_Analytics.loadedLandingPagesStack;
if(b){delete CQ_Analytics.loadedLandingPagesStack;
var Z=A;
for(var a=0;
a<b.length;
a++){Z=CQ.shared.HTTP.addParameter(Z,"path",b[a])
}CQ.shared.HTTP.get(Z,function(){})
}}catch(Y){}})
}CQ_Analytics.loadedLandingPagesStack.push(N.path)
}}catch(V){}}}else{CQ_Analytics.Utils.clearElement(E);
I=null
}};
H.call();
if(CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr.addListener("update",H)
}};
if(CQ_Analytics.ClickstreamcloudMgr){if(CQ_Analytics.ClickstreamcloudMgr.areStoresLoaded){B.call(this)
}else{CQ_Analytics.ClickstreamcloudMgr.addListener("storesloaded",B)
}}}}CQ_Analytics.PersistedJSONStore=function(){};
CQ_Analytics.PersistedJSONStore.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.PersistedJSONStore.prototype.STOREKEY="";
CQ_Analytics.PersistedJSONStore.prototype.STORENAME="";
CQ_Analytics.PersistedJSONStore.prototype.init=function(){var A=new CQ_Analytics.SessionPersistence();
var B=A.get(this.getStoreKey());
if(!B||B==""){this.data={};
for(var C in this.initProperty){this.data[C]=this.initProperty[C]
}}else{this.data=this.parse(B)
}this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.PersistedJSONStore.prototype.clear=function(){var A=new CQ_Analytics.SessionPersistence();
A.remove(this.getStoreKey());
this.data=null;
this.initProperty={}
};
CQ_Analytics.PersistedJSONStore.prototype.initJSON=function(B,C){if(!C){this.initProperty={}
}var A=function(G,D,F){for(var E in F){if(typeof F[E]=="object"){A(G,D?D+"/"+E:E,F[E])
}else{G[D?D+"/"+E:E]=F[E]
}}};
A(this.initProperty,null,B)
};
CQ_Analytics.PersistedJSONStore.prototype.getJSON=function(){var E=this.getData();
var C={};
for(var G in E){var D=G.split("/");
var F=C;
for(var B=0;
B<D.length;
B++){var A=D[B];
if(B==D.length-1){F[A]=E[G]
}else{F[A]=F[A]||{};
F=F[A]
}}}return C
};
CQ_Analytics.PersistedJSONStore.getInstance=function(A,C){var B=new CQ_Analytics.PersistedJSONStore();
B.STOREKEY=A.toUpperCase();
B.STORENAME=A;
B.initJSON(C);
return B
};
CQ_Analytics.PersistedJSONStore.registerNewInstance=function(A,B){var C=CQ_Analytics.PersistedJSONStore.getInstance(A,B);
C.init();
CQ_Analytics.CCM.register(C);
return C
};
CQ_Analytics.JSONStore=function(){};
CQ_Analytics.JSONStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.JSONStore.prototype.STOREKEY="";
CQ_Analytics.JSONStore.prototype.STORENAME="";
CQ_Analytics.JSONStore.prototype.init=function(){this.data={};
for(var A in this.initProperty){this.data[A]=this.initProperty[A]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.JSONStore.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.JSONStore.prototype.initJSON=function(B,C){if(!C){this.initProperty={}
}var A=function(G,D,F){for(var E in F){if(typeof F[E]=="object"){A(G,D?D+"/"+E:E,F[E])
}else{G[D?D+"/"+E:E]=F[E]
}}};
A(this.initProperty,null,B)
};
CQ_Analytics.JSONStore.prototype.getJSON=function(){var E=this.getData();
var C={};
for(var G in E){var D=G.split("/");
var F=C;
for(var B=0;
B<D.length;
B++){var A=D[B];
if(B==D.length-1){F[A]=E[G]
}else{F[A]=F[A]||{};
F=F[A]
}}}return C
};
CQ_Analytics.JSONStore.getInstance=function(A,C){var B=new CQ_Analytics.JSONStore();
B.STOREKEY=A.toUpperCase();
B.STORENAME=A;
B.initJSON(C);
return B
};
CQ_Analytics.JSONStore.registerNewInstance=function(A,B){var C=CQ_Analytics.JSONStore.getInstance(A,B);
C.init();
CQ_Analytics.CCM.register(C);
return C
};
CQ_Analytics.PersistedJSONPStore=function(){};
CQ_Analytics.PersistedJSONPStore.prototype=new CQ_Analytics.PersistedJSONStore();
CQ_Analytics.PersistedJSONPStore.prototype.setServiceURL=function(A){this.serviceURL=A
};
CQ_Analytics.PersistedJSONPStore.prototype.getServiceURL=function(){return this.serviceURL
};
CQ_Analytics.PersistedJSONPStore.prototype.load=function(D,A,E){var C=this.getName();
if(!CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[this.getName()]){CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[C]=function(G){var F=CQ_Analytics.CCM.getRegisteredStore(C);
if(F){F.initJSON(G);
if(A){F.initJSON(A,true)
}}if(E){E.call(F)
}}
}if(D){this.setServiceURL(D)
}var B=this.serviceURL;
B=B.replace("${callback}","CQ_Analytics.PersistedJSONPStore.JSONPCallbacks."+C);
$.getScript(B)
};
CQ_Analytics.PersistedJSONPStore.JSONPCallbacks={};
CQ_Analytics.PersistedJSONPStore.getInstance=function(E,F,B,A,D){if(E&&F){try{var G=new CQ_Analytics.PersistedJSONPStore();
G.STOREKEY=E.toUpperCase();
G.STORENAME=E;
if(F){G.setServiceURL(F)
}if(!A){G.load(F,B,D)
}return G
}catch(C){console.log("Cannot create the JSONP store",E,F,C)
}}return null
};
CQ_Analytics.PersistedJSONPStore.registerNewInstance=function(D,E,B,F){if(!E){return null
}if(!D){var A=CQ.shared.HTTP.getSchemeAndAuthority(E);
if(A){if(A.indexOf(".")!=-1){A=A.substring(0,A.lastIndexOf("."));
D=A.substring(A.lastIndexOf(".")+1)
}else{D=A.substring(A.lastIndexOf("/")+1)
}}else{D=E
}}var C=CQ_Analytics.PersistedJSONPStore.getInstance(D,E,B,false,function(){this.init();
this.reset();
if(F){F.call(this)
}});
if(C!=null){CQ_Analytics.CCM.register(C);
return C
}return null
};
CQ_Analytics.JSONPStore=function(){};
CQ_Analytics.JSONPStore.prototype=new CQ_Analytics.JSONStore();
CQ_Analytics.JSONPStore.prototype.setServiceURL=function(A){this.serviceURL=A
};
CQ_Analytics.JSONPStore.prototype.getServiceURL=function(){return this.serviceURL
};
CQ_Analytics.JSONPStore.prototype.load=function(D,A,E){var C=this.getName();
if(!CQ_Analytics.JSONPStore.JSONPCallbacks[this.getName()]){CQ_Analytics.JSONPStore.JSONPCallbacks[C]=function(G){var F=CQ_Analytics.CCM.getRegisteredStore(C);
if(F){F.initJSON(G);
if(A){F.initJSON(A,true)
}}if(E){E.call(F)
}}
}if(D){this.setServiceURL(D)
}var B=this.serviceURL;
B=B.replace("${callback}","CQ_Analytics.JSONPStore.JSONPCallbacks."+C);
$.getScript(B)
};
CQ_Analytics.JSONPStore.JSONPCallbacks={};
CQ_Analytics.JSONPStore.getInstance=function(E,F,B,A,D){if(E){try{var G=new CQ_Analytics.JSONPStore();
G.STOREKEY=E.toUpperCase();
G.STORENAME=E;
if(F){G.setServiceURL(F);
if(!A){G.load(F,B,D)
}}return G
}catch(C){console.log("Cannot create the JSONP store",E,F,C)
}}return null
};
CQ_Analytics.JSONPStore.registerNewInstance=function(D,E,B,F){if(!D&&E){var A=CQ.shared.HTTP.getSchemeAndAuthority(E);
if(A){if(A.indexOf(".")!=-1){A=A.substring(0,A.lastIndexOf("."));
D=A.substring(A.lastIndexOf(".")+1)
}else{D=A.substring(A.lastIndexOf("/")+1)
}}else{D=E
}}var C=CQ_Analytics.JSONPStore.getInstance(D,E,B,false,function(){this.init();
this.reset();
if(F){F.call(this)
}});
if(C!=null){CQ_Analytics.CCM.register(C);
return C
}return null
};
$(function(){CQ_Analytics.Slider=function(A){return{init:function(){this.vertical=A.vertical;
this.clazz=A.clazz;
this.parent=A.parent;
this.container=$("<div>").addClass("cq-cc-slider").addClass("cq-cc-slider-"+((this.vertical)?"vertical":"horizontal")).addClass(this.clazz).appendTo(this.parent);
this.container.hide();
this.carousel=$("<ul>").addClass("jcarousel-skin-cq-cc").appendTo(this.container)
},show:function(){if(!this.isWidget){var B=this;
A.initCallback=function(C){B.carouselObj=C
};
this.carousel.jcarousel(A);
this.isWidget=true
}var B=this;
this.select(this.computeSelectedIndex(),true,true);
if(this.vertical){this.container.slideDown("fast")
}else{$(".cq-cc-slider",this.parent).css("top",(this.parent.position().top-9)+"px");
$(".cq-cc-slider",this.parent).css("left",(this.parent.position().left-27)+"px");
$(".cq-cc-slider",this.parent).fadeIn(1000,function(){$(".jcarousel-container-horizontal",B.parent).animate({width:"270px"},"fast");
$(".jcarousel-clip-horizontal",B.parent).animate({width:"268px"},"fast",function(){B.carousel.jcarousel()
})
})
}B.container.bind("click",this.stopPropagation);
$(document).bind("click",{scope:this},this.handleDocClick)
},handleDocClick:function(B){B.data.scope.hide()
},stopPropagation:function(B){B.stopPropagation()
},hide:function(){$(document).unbind("click",this.handleDocClick);
this.container.unbind("click",this.stopPropagation);
if(this.vertical){this.container.slideUp("fast")
}else{var B=this;
$(".jcarousel-container-horizontal",this.parent).animate({width:"90px"},"fast");
$(".jcarousel-clip-horizontal",this.parent).animate({width:"90px"},"fast",function(){$(".cq-cc-slider",B.parent).fadeOut(1000)
})
}},select:function(D,G,C){var F=this.getSelected();
if(G||F.length==0||F.attr("jcarouselindex")!=D){var E=this.getItem(D);
F.removeClass("jcarousel-item-selected");
E.addClass("jcarousel-item-selected");
$(this.container).find(".jcarousel-item-selected-marker").removeClass("jcarousel-item-selected-marker");
var B=this.getCurrentValue();
var H=E.children().attr("data-id");
$(this.container).find("[data-id='"+H+"']").addClass("jcarousel-item-selected-marker");
if(B!=H){this.onSelect(H)
}this.carouselObj.scroll($.jcarousel.intval(E.attr("jcarouselindex")),!C)
}},getSelected:function(){return $(this.container).find(".jcarousel-item-selected")
},computeSelectedIndex:function(){var B=this.getCurrentValue();
return $(this.container).find("[data-id='"+B+"']").parent().attr("jcarouselindex")||0
},getItem:function(B){return $(this.container).find("[jcarouselindex="+B+"]")
},onSelect:function(B){},getCurrentValue:function(){}}
}
});
CQ_Analytics.record=function(C){if(C.collect){return[C.event,C.values]
}else{if(C.event){C.options=C.options||{};
try{CQ_Analytics.recordBeforeCallbacks.sort(function(G,F){return G.rank-F.rank
});
for(var E in CQ_Analytics.recordBeforeCallbacks){if(CQ_Analytics.recordBeforeCallbacks[E].func.call(this,C)){return 
}}}catch(D){}var A=C.dataMgr||CQ_Analytics.EventDataMgr;
A.reset();
if(typeof C.event=="string"){A.setProperty("events",C.event)
}else{A.setProperty("events",C.event.join("\u2026"))
}if(C.values){for(var B in C.values){A.setProperty(B,C.values[B])
}}try{CQ_Analytics.recordAfterCallbacks.sort(function(G,F){return G.rank-F.rank
});
for(var E in CQ_Analytics.recordAfterCallbacks){if(CQ_Analytics.recordAfterCallbacks[E].func.call(this,C)){return 
}}}catch(D){}}}};
CQ_Analytics.recordBeforeCallbacks=[];
CQ_Analytics.recordAfterCallbacks=[];
CQ_Analytics.registerBeforeCallback=function(B,A){CQ_Analytics.recordBeforeCallbacks.push({rank:A,func:B})
};
CQ_Analytics.registerAfterCallback=function(B,A){CQ_Analytics.recordAfterCallbacks.push({rank:A,func:B})
};
if(!CQ_Analytics.ClientContext){CQ_Analytics.ClientContext=new function(){return{get:function(F,C){if(F){if(F.indexOf("/")!=0){F="/"+F
}var D=F.split("/")[1];
var B=F.substring(F.indexOf("/"+D)+D.length+2,F.length);
var A=CQ_Analytics.CCM.getRegisteredStore(D);
if(A){if(B){var E=A.getProperty(B);
if(E&&C){E=CQ_Analytics.Variables.replaceVariables(E)
}return E
}return A
}}return null
},set:function(E,D){if(E){if(E.indexOf("/")!=0){E="/"+E
}var C=E.split("/")[1];
var B=E.substring(E.indexOf("/"+C)+C.length+2,E.length);
var A=CQ_Analytics.CCM.getRegisteredStore(C);
if(A){if(B){A.setProperty(B,D)
}}}},clear:function(){var A=CQ_Analytics.CCM.getStores();
if(A){for(var B in A){if(A[B].clear){A[B].clear()
}}}},reset:function(){var A=CQ_Analytics.CCM.getStores();
if(A){for(var B in A){if(A[B].reset){A[B].reset()
}}}},persist:function(A){CQ_Analytics.ClientContextMgr.ServerStorage.post(A,true)
}}
}();
window.ClientContext=CQ_Analytics.ClientContext;
window.ContextCloud=CQ_Analytics.ClientContext
}if(!CQ_Analytics.ClientContextUI){CQ_Analytics.ClientContextUI=function(){this.loaded=false;
this.ccUrl=null;
this.visible=false;
this.rendered=false;
this.containerId=null;
this.boxId=null;
this.contentPlaceholderId=null;
this.editMode=false
};
CQ_Analytics.ClientContextUI.prototype=new CQ_Analytics.Observable();
CQ_Analytics.ClientContextUI.prototype.SHOW_BOX_COOKIE="cq-show-clientcontext";
CQ_Analytics.ClientContextUI.prototype.init=function(B,A,E,C,D){this.ccUrl=B;
this.containerId=A;
this.boxId=E;
this.contentPlaceholderId=C;
this.editMode=D;
$(document).bind("keydown",CQ_Analytics.Utils.eventWrapper(function(F,G){if(F.ctrlKey&&F.altKey&&G=="C".charCodeAt(0)){CQ_Analytics.ClientContextUI.toggle()
}}));
if(CQ_Analytics.Cookie.read(this.SHOW_BOX_COOKIE)=="true"){this.show()
}};
CQ_Analytics.ClientContextUI.prototype.render=function(){if(!this.rendered&&this.fireEvent("beforerender")!==false){this.rendered=true;
this.fireEvent("render")
}};
CQ_Analytics.ClientContextUI.prototype.load=function(C){if(this.ccUrl&&(!this.loaded||C)&&this.fireEvent("beforeload")!==false){var B=CQ.shared.HTTP.addParameter(this.ccUrl,"wcmmode",this.editMode?"preview":"disabled");
var A=CQ.shared.HTTP.get(B);
$("#"+this.contentPlaceholderId).html(A.responseText);
this.loaded=true;
this.fireEvent("load")
}};
CQ_Analytics.ClientContextUI.prototype.show=function(){this.load();
this.render();
if(this.fireEvent("beforeshow")!==false){if($.support.opacity){$("#"+this.containerId).show("normal")
}else{$("#"+this.containerId).show()
}this.visible=true;
CQ_Analytics.Cookie.set(this.SHOW_BOX_COOKIE,"true",365);
this.fireEvent("show")
}};
CQ_Analytics.ClientContextUI.prototype.hide=function(){if(this.fireEvent("beforehide")!==false){if($.support.opacity){$("#"+this.containerId).hide("fast")
}else{$("#"+this.containerId).hide()
}this.visible=false;
CQ_Analytics.Cookie.set(this.SHOW_BOX_COOKIE,"false",365);
this.fireEvent("hide")
}};
CQ_Analytics.ClientContextUI.prototype.toggle=function(){if(this.visible){this.hide()
}else{this.show()
}};
CQ_Analytics.ClientContextUI.prototype.onLoad=function(B,A){if(B){if(this.loaded){B.call(A||this)
}else{this.addListener("load",B,A)
}}};
CQ_Analytics.ClientContextUI.prototype.isAvailable=function(){return this.boxId&&$("#"+this.boxId).length>0
};
CQ_Analytics.ClientContextUI.prototype.getBoxId=function(){return this.boxId
};
CQ_Analytics.ClientContextUI=new CQ_Analytics.ClientContextUI();
CQ_Analytics.ClientContextUI.CONTAINER_ID="cq-clientcontext-container";
CQ_Analytics.ClientContextUI.BOX_ID="cq-clientcontext-box";
CQ_Analytics.ClientContextUI.BOX_CLASS="cq-clientcontext";
CQ_Analytics.ClientContextUI.ACTIONS_ID="cq-clientcontext-box-actions";
CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID="cq-clientcontext-box-actions-container";
CQ_Analytics.ClientContextUI.CONTENT_ID="cq-clientcontext-box-content";
CQ_Analytics.ClientContextUI.createPlaceholders=function(){var B=$("<div>").attr("id",CQ_Analytics.ClientContextUI.BOX_ID).addClass(CQ_Analytics.ClientContextUI.BOX_CLASS);
B.append($("<div>").attr("id",CQ_Analytics.ClientContextUI.ACTIONS_ID).append($("<div>").attr("id",CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID)));
B.append($("<div>").attr("id",CQ_Analytics.ClientContextUI.CONTENT_ID));
var A=$("<div>").attr("id",CQ_Analytics.ClientContextUI.CONTAINER_ID);
A.append(B);
$("body").append(A)
};
CQ_Analytics.ClientContextUI.create=function(B,A){CQ_Analytics.ClientContextUI.createPlaceholders();
CQ_Analytics.ClientContextUI.addListener("beforerender",function(){$("<div>").addClass("cq-clientcontext-box-action").addClass("cq-clientcontext-design").attr("title","Open the ClientContext design page").appendTo("#"+CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID).bind("click",function(){CQ.shared.Util.open(_g.shared.HTTP.externalize(B+"/content.html"))
});
$("<div>").addClass("cq-clientcontext-box-action").addClass("cq-clientcontext-load").attr("title","Load a profile in the ClientContext").appendTo("#"+CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID).bind("click",function(){var E=new CQ.personalization.ProfileLoader({});
E.show()
});
$("<div>").addClass("cq-clientcontext-box-action").addClass("cq-clientcontext-reset").attr("title","Reset the ClientContext").appendTo("#"+CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID).bind("click",function(){CQ_Analytics.ClientContext.reset()
});
$("<div>").addClass("cq-clientcontext-box-action").addClass("cq-clientcontext-close").attr("title","Close the ClientContext").appendTo("#"+CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID).bind("click",function(){CQ_Analytics.ClientContextUI.hide()
});
var D=$("#"+CQ_Analytics.ClientContextUI.BOX_ID).offset();
$("#"+CQ_Analytics.ClientContextUI.BOX_ID).draggable({handle:"#"+CQ_Analytics.ClientContextUI.ACTIONS_ID,revert:false,stop:function(){D=$("#"+CQ_Analytics.ClientContextUI.BOX_ID).offset()
}});
$("#"+CQ_Analytics.ClientContextUI.BOX_ID).addClass("CQjquery").resizable();
if(window.CQ&&CQ.wcm&&CQ.wcm.emulator&&CQ.wcm.emulator.EmulatorManager&&CQ.wcm.emulator.EmulatorManager.WRAPPING_EXCLUDED_IDS){CQ.wcm.emulator.EmulatorManager.WRAPPING_EXCLUDED_IDS.push(CQ_Analytics.ClientContextUI.CONTAINER_ID)
}});
var C=CQ.shared.HTTP.addParameter(B+"/content/jcr:content/stores.html","path",A);
CQ_Analytics.ClientContextUI.init(C,CQ_Analytics.ClientContextUI.CONTAINER_ID,CQ_Analytics.ClientContextUI.BOX_ID,CQ_Analytics.ClientContextUI.CONTENT_ID,true)
}
}if(!CQ_Analytics.ActivityStreamMgr){CQ_Analytics.ActivityStreamMgr=CQ_Analytics.JSONStore.registerNewInstance("activitystream",{});
CQ_Analytics.ActivityStreamMgr.internalRenderer=function(C,A){var B=C+".form.html";
B+=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/activitystream.html");
B+="?limit=3";
CQ.shared.HTTP.get(B,function(E,F,D){$("#"+A).children().remove();
if(F){$("#"+A).append(D.body)
}})
};
CQ_Analytics.ActivityStreamMgr.renderer=function(B,A){if(!B.isReady){B.isReady=true;
CQ_Analytics.ClientContextUtils.onStoreRegistered("profile",function(C){C.addListener("update",function(E,F){var G=this.getProperty("path");
if(G!=CQ_Analytics.ActivityStreamMgr.currentProfilePath){CQ_Analytics.ActivityStreamMgr.currentProfilePath=G;
CQ_Analytics.ActivityStreamMgr.internalRenderer(G,A)
}},C);
var D=C.getProperty("path");
CQ_Analytics.ActivityStreamMgr.currentProfilePath=D;
CQ_Analytics.ActivityStreamMgr.internalRenderer(D,A)
})
}return""
}
}if(!CQ_Analytics.GeolocationUtils){CQ_Analytics.GeolocationUtils=new function(){return{init:function(B){var D;
try{if(typeof navigator.geolocation==="undefined"){D=google.gears.factory.create("beta.geolocation")
}else{D=navigator.geolocation
}}catch(E){}var A=function(F){var G=CQ_Analytics.PersistedJSONStore.registerNewInstance(B,F);
G.addListener("update",function(H,J){var K=CQ_Analytics.ClientContext.get(B+"/latitude");
var I=CQ_Analytics.ClientContext.get(B+"/longitude");
if(!K||!I){if(J!="generatedThumbnail"){G.setProperty("generatedThumbnail",CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback)
}else{if(G.getProperty(J,true)!=CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback){G.setProperty(J,CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback)
}}}else{if(G.getProperty("generatedThumbnail",true)==CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback){G.setProperty("generatedThumbnail",G.getInitProperty("generatedThumbnail"))
}if(J=="latitude"||J=="longitude"||!J){CQ_Analytics.GeolocationUtils.computeAddress(K,I,B)
}}})
};
var C=function(I,H){var G=CQ_Analytics.StoreRegistry.getStore(B);
if(G){I=I||CQ_Analytics.GeolocationUtils.DEFAULTS;
var F=I.generatedThumbnail=G.getInitProperty("generatedThumbnail");
G.initJSON(I);
if(!H){G.init();
G.setProperty("generatedThumbnail",F)
}}else{A(I)
}};
A();
if(D){D.getCurrentPosition(function(F){var G={longitude:F.coords.longitude,latitude:F.coords.latitude};
if(F.address){G.address=F.address
}C(G,CQ_Analytics.CCM.areStoresInitialized)
},function(F){if(!CQ_Analytics.CCM.areStoresInitialized){var H="Connection timeout";
if(F.code==1){H="Permission denied"
}else{if(F.code==2){H="Position unavailable"
}}var G={address:{country:H}};
C(G,CQ_Analytics.CCM.areStoresInitialized)
}})
}else{C()
}},computeAddress:function(D,B,A){CQ_Analytics.ClientContext.set(A+"/address/region");
CQ_Analytics.ClientContext.set(A+"/address/countryCode");
CQ_Analytics.ClientContext.set(A+"/address/country");
var C=function(){var E=new google.maps.LatLng(D,B);
var F=new google.maps.Geocoder();
F.geocode({location:E},function(G,I){if(I==="OK"&&G[0]&&G[0].address_components){for(var J=0;
J<G[0].address_components.length;
J++){var H=G[0].address_components[J];
if(H.types&&H.types.length){if(H.types[0]=="administrative_area_level_1"){CQ_Analytics.ClientContext.set(A+"/address/region",H.short_name)
}else{if(H.types[0]=="country"){CQ_Analytics.ClientContext.set(A+"/address/countryCode",H.short_name);
CQ_Analytics.ClientContext.set(A+"/address/country",H.long_name)
}}}}}})
};
if(!window.google){window.geocode_callback=C;
$.getScript("http://maps.google.com/maps/api/js?sensor=false&callback=geocode_callback")
}else{C.call()
}}}
}();
CQ_Analytics.GeolocationUtils.DEFAULTS={latitude:37.331375,longitude:-121.893992};
CQ_Analytics.GeolocationUtils.THUMBNAILS={fallback:"http://maps.googleapis.com/maps/api/staticmap?center=37,-121&zoom=0&size=80x80&sensor=false"}
}if(!CQ_Analytics.ProfileDataMgr){CQ_Analytics.ProfileDataMgr=function(){this.addListener("beforepersist",function(){this.checkAuthorizableId()
},this)
};
CQ_Analytics.ProfileDataMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ProfileDataMgr.prototype.STOREKEY="PROFILEDATA";
CQ_Analytics.ProfileDataMgr.prototype.STORENAME="profile";
CQ_Analytics.ProfileDataMgr.prototype.LOADER_PATH=CQ_Analytics.Utils.externalize("/libs/cq/personalization/components/profileloader/content/load.js",true);
CQ_Analytics.ProfileDataMgr.prototype.PROFILE_LOADER=CQ_Analytics.Utils.externalize("/libs/cq/personalization/components/profileloader/content/load.json",true);
CQ_Analytics.ProfileDataMgr.prototype.init=function(){var A=new CQ_Analytics.SessionPersistence();
var B=A.get(this.getStoreKey());
if(!B||B==""){this.data={};
for(var C in this.initProperty){this.data[C]=this.initProperty[C]
}}else{this.data=this.parse(B)
}this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.ProfileDataMgr.prototype.checkAuthorizableId=function(){if(!this.data){this.init()
}if(this.data.authorizableId){CQ_Analytics.CCM.setVisitorId(this.data.authorizableId)
}else{CQ_Analytics.CCM.setVisitorId("")
}};
CQ_Analytics.ProfileDataMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.ProfileDataMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.ProfileDataMgr.prototype.clear=function(){var A=new CQ_Analytics.SessionPersistence();
A.remove(this.getStoreKey());
this.data=null;
this.initProperty={}
};
CQ_Analytics.ProfileDataMgr.prototype.getLoaderURL=function(){return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/profiledata/loader.json")
};
CQ_Analytics.ProfileDataMgr.prototype.loadProfile=function(authorizableId){var url=this.getLoaderURL();
url=CQ_Analytics.Utils.addParameter(url,"authorizableId",authorizableId);
try{var object=CQ.shared.HTTP.eval(url);
if(object){this.data={};
for(var p in object){this.data[p]=object[p]
}this.persist();
this.fireEvent("initialize",this);
this.fireEvent("update");
if(CQ_Analytics.ClickstreamcloudEditor){CQ_Analytics.ClickstreamcloudEditor.reload()
}return true
}}catch(error){if(console&&console.log){console.log("Error during profile loading",error)
}}return false
};
CQ_Analytics.ProfileDataMgr=new CQ_Analytics.ProfileDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.checkAuthorizableId();
this.addListener("update",function(A,I){if(I=="birthday"||!I){var J=this.getProperty("birthday");
var K=this.getProperty("age");
var G="";
if(J){try{var C=function(N,M){var L=new Date(M.getTime());
L.setUTCHours(N.getUTCHours(),N.getUTCMinutes(),N.getUTCSeconds(),N.getUTCMilliseconds());
var O=L.getTime()-N.getTime();
return O/(1000*60*60*24)
};
var D=function(L){var M=new Date(L.getFullYear(),0,0);
return C(L,M)*-1
};
var H=new Date(Date.parse(J));
if(!isNaN(H.getTime())){var F=new Date();
if(D(H)==D(F)&&H.getMonth()==F.getMonth()){G=CQ.shared.HTTP.externalize(CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/profiledata/resources/birthday_cake.png"))
}else{var B=F.getFullYear()-H.getFullYear();
if(D(H)>D(F)){G=B
}else{G=Math.max(0,B-1)
}}}else{G=""
}}catch(E){G=""
}}if(K!=G){this.setProperty("age",G)
}}});
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()));
CQ_Analytics.CCM.register(this)
},CQ_Analytics.ProfileDataMgr)
}if(CQ_Analytics.SegmentMgr&&!CQ_Analytics.SegmentMgr.isResolvedRegistered){CQ_Analytics.SegmentMgr.isResolvedRegistered=true;
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.StoreRegistry.register(CQ_Analytics.SegmentMgr);
CQ_Analytics.CCM.fireEvent("storeregister",CQ_Analytics.SegmentMgr);
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()))
},CQ_Analytics.SegmentMgr)
}if(!CQ_Analytics.SocialGraphMgr){CQ_Analytics.SocialGraphMgr=CQ_Analytics.JSONPStore.registerNewInstance("socialgraph");
CQ_Analytics.SocialGraphMgr.internalRenderer=function(A){var C=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
CQ_Analytics.SocialGraphMgr.lastUid=C;
var D=CQ_Analytics.ProfileDataMgr.getProperty("path");
var B=D+".form.html";
B+=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/socialgraph.js");
B+="?limit=10";
B+="&callback=${callback}";
CQ_Analytics.SocialGraphMgr.load(CQ.shared.HTTP.externalize(B),{},function(){$("#"+A).children().remove();
CQ_Analytics.SocialGraphMgr.reset();
var F=CQ_Analytics.ProfileDataMgr.getProperty("formattedName");
var E=$("<div>").addClass("cq-socialgraph");
$("<div>").addClass("cq-socialgraph-text").html(F+"'s friends and followers (social graph): ").appendTo(E);
var M={};
var H=this.getJSON();
var N=H.friends;
if(N){for(var I in N){if(N[I]["authorizableId"]){M[N[I]["authorizableId"]]=N[I]
}}}var K=H.followers;
if(K){for(var I in K){if(K[I]["authorizableId"]){M[K[I]["authorizableId"]]=K[I]
}}}var L=0;
for(var G in M){var J=M[G];
$("<img>").attr("title",J.formattedName||J.authorizableId).attr("src",_g.shared.HTTP.externalize(J.avatar)).appendTo(E);
L++;
if(L>=9){break
}}E.hide();
$("#"+A).append(E);
E.fadeIn("fast")
})
};
CQ_Analytics.SocialGraphMgr.renderer=function(B,A){var C=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
if(C!=CQ_Analytics.SocialGraphMgr.lastUid){CQ_Analytics.SocialGraphMgr.internalRenderer(A)
}};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this);
CQ_Analytics.ProfileDataMgr.addListener("update",function(){var A=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
if(A!=this.lastUid){this.fireEvent("update")
}},CQ_Analytics.SocialGraphMgr)
},CQ_Analytics.SocialGraphMgr)
}if(!CQ_Analytics.MobileSliderUtils){CQ_Analytics.MobileSliderUtils=function(){return{injectCss:function(A){$("head").append("<link>");
var B=$("head").children(":last");
B.attr({rel:"stylesheet",type:"text/css",href:_g.shared.HTTP.externalize(A)})
},removeCss:function(A){$("[href='"+_g.shared.HTTP.externalize(A)+"']").remove()
},switchToMobile:function(A){this.injectMobileBodyClass(A);
this.injectMobileCss(A)
},switchToDesktop:function(A){this.injectDesktopBodyClass(A);
this.injectDesktopCss(A)
},injectDesktopCss:function(D){var A=this.getConfig(D,"DESKTOP_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.injectCss(CQ_Analytics.Variables.replace(B,"app",D))
}}A=this.getConfig(D,"MOBILE_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.removeCss(CQ_Analytics.Variables.replace(B,"app",D))
}}},injectMobileCss:function(D){var A=this.getConfig(D,"MOBILE_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.injectCss(CQ_Analytics.Variables.replace(B,"app",D))
}}A=this.getConfig(D,"DESKTOP_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.removeCss(CQ_Analytics.Variables.replace(B,"app",D))
}}},injectMobileBodyClass:function(C){var B=this.getConfig(C,"MOBILE_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$(document.body).addClass(D)
}}B=this.getConfig(C,"DESKTOP_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$(document.body).removeClass(D)
}}},injectDesktopBodyClass:function(C){var B=this.getConfig(C,"DESKTOP_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$(document.body).addClass(D)
}}B=this.getConfig(C,"MOBILE_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$(document.body).removeClass(D)
}}},getConfig:function(C,B){var A=CQ_Analytics.MobileSliderUtils.CONFIG[C];
if(!A){return null
}return CQ_Analytics.MobileSliderUtils.CONFIG[C][B]
}}
}();
CQ_Analytics.MobileSliderUtils.CONFIG=window.CQMobileSlider||{}
}if(!CQ_Analytics.SurferInfoMgr){CQ_Analytics.SurferInfoMgr=function(){};
CQ_Analytics.SurferInfoMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SurferInfoMgr.prototype.STOREKEY="SURFERINFO";
CQ_Analytics.SurferInfoMgr.prototype.STORENAME="surferinfo";
CQ_Analytics.SurferInfoMgr.prototype.init=function(){this.data={};
for(var A in this.initProperty){this.data[A]=this.initProperty[A]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.SurferInfoMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.SurferInfoMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.SurferInfoMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.SurferInfoMgr=new CQ_Analytics.SurferInfoMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){var B=CQ_Analytics.BrowserInfoInstance;
this.addInitProperty("browserFamily",B.getBrowserFamily());
this.addInitProperty("browserVersion",B.getBrowserVersion());
this.addInitProperty("browser","${/surferinfo/browserFamily} ${/surferinfo/browserVersion}");
this.addInitProperty("OS",B.getOSName());
this.addInitProperty("resolution",B.getScreenResolution());
this.addInitProperty("device",B.getDeviceType());
this.addInitProperty("isMobile",B.isMobile());
this.addInitProperty("userAgent",B.getUserAgent());
var A=new Date();
this.addInitProperty("day",A.getDate());
this.addInitProperty("month",A.getMonth()+1);
this.addInitProperty("year",A.getFullYear());
this.addInitProperty("hours",A.getHours());
this.addInitProperty("minutes",A.getMinutes());
var C="${/surferinfo/browserFamily}";
if(B.isMobile()){C="${/surferinfo/device}"
}this.addInitProperty("image",C);
var D=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/surferinfo/resources/${/surferinfo/image}.png");
this.addInitProperty("thumbnail",D);
if(CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr.addListener("update",function(){this.setProperty("mouse X",CQ_Analytics.MousePositionMgr.getProperty("x"));
this.setProperty("mouse Y",CQ_Analytics.MousePositionMgr.getProperty("y"))
},this)
}this.addListener("update",function(){var F=this.getProperty("device");
var G="${/surferinfo/browserFamily}";
if(B.isMobile(F)){G="${/surferinfo/device}"
}var E=this.getProperty("image");
if(E!=G){this.setProperty("image",G)
}},this);
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()));
CQ_Analytics.CCM.register(this)
},CQ_Analytics.SurferInfoMgr)
}if(!CQ_Analytics.TagCloudMgr){CQ_Analytics.TagCloudMgr=function(){this.data=null;
this.addedTags={};
this.frequencies=null;
this.initialTags=null;
this.initialAddedTags={};
this.copyObject=function(C){var B={};
for(var A in C){B[A]=C[A]
}return B
}
};
CQ_Analytics.TagCloudMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.TagCloudMgr.prototype.STOREKEY="TAGCLOUD";
CQ_Analytics.TagCloudMgr.prototype.STORENAME="tagcloud";
CQ_Analytics.TagCloudMgr.prototype.parseTagList=function(A){var C={};
var B=A.split(",");
for(var D in B){if(B.hasOwnProperty(D)){var E=B[D].split("=");
if(E.length==2){C[E[0]]=parseInt(E[1])
}}}return C
};
CQ_Analytics.TagCloudMgr.prototype.parseString=function(A){this.data=this.parseTagList(A);
return this
};
CQ_Analytics.TagCloudMgr.prototype.add=function(A){this.addedTags[A]=true;
this.data[A]=(this.data[A]||0)+1
};
CQ_Analytics.TagCloudMgr.prototype.each=function(B){for(var A in this.data){if(this.data.hasOwnProperty(A)){B(A,this.data[A])
}}};
CQ_Analytics.TagCloudMgr.prototype.calculateFrequencies=function(){var C={};
var A=[];
this.each(function(D,E){if(!C[E]){A.push(E)
}C[E]=true
});
A.sort(function B(E,D){if(E>D){return 1
}if(E<D){return -1
}return 0
});
return A
};
CQ_Analytics.TagCloudMgr.prototype.calculateNtile=function(B,C){if(this.frequencies===null){this.frequencies=this.calculateFrequencies()
}var A=0;
while(true){if((A>=(this.frequencies.length-1))||(this.frequencies[A]>=B)){return Math.ceil((A+1)/this.frequencies.length*C)
}A++
}};
CQ_Analytics.TagCloudMgr.prototype.getTags=function(){return this.data
};
CQ_Analytics.TagCloudMgr.prototype.getData=function(A){return this.getTags()
};
CQ_Analytics.TagCloudMgr.prototype.getTag=function(A){return this.data[A]>0?this.data[A]:0
};
CQ_Analytics.TagCloudMgr.prototype.init=function(A){var B=new CQ_Analytics.SessionPersistence();
var D=B.get(this.getStoreKey());
D=D===null?"":new String(D);
this.data=this.parseTagList(D);
if(A){for(var C in A){if(A.hasOwnProperty(C)){this.add(A[C])
}}}this.initialTags=this.copyObject(this.data);
this.initialAddedTags=this.copyObject(this.addedTags);
this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.setProperty=function(A,B){if(this.data==null){this.init()
}if(B>0){this.addedTags[A]=true;
this.data[A]=B>0?B:0
}else{delete this.addedTags[A];
delete this.data[A]
}this.persist();
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.reset=function(){this.clear();
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.getProperty=function(A){if(this.data==null){this.init()
}return this.data[A]>0?this.data[A]:0
};
CQ_Analytics.TagCloudMgr.prototype.removeProperty=function(A){if(this.data==null){this.init()
}this.setProperty(A,0)
};
CQ_Analytics.TagCloudMgr.prototype.clear=function(){var A=new CQ_Analytics.SessionPersistence();
A.remove(this.getStoreKey());
this.addedTags={};
this.data={}
};
CQ_Analytics.TagCloudMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.TagCloudMgr.prototype.getLabel=function(B){if(B){var C=B.split(":");
var A=C[C.length-1].split("/");
B=A[A.length-1]
}return B
};
CQ_Analytics.TagCloudMgr.prototype.createHTMLElement=function(){var E=document.createElement("div");
var C=document.createElement("div");
var B=this;
C.className="cloud";
var D=0;
this.each(function(G,J){var F=document.createElement("div");
var I=B.calculateNtile(J,10);
var K=G.split(":");
var H=K[K.length-1].split("/");
F.innerHTML=H[H.length-1];
F.className="tag";
if(B.addedTags[G]){F.className+=" new"
}F.className+=" tag"+I;
F.title=G+" ("+J+")";
F.setAttribute("data-property",G);
F.setAttribute("data-store",B.STORENAME);
C.appendChild(F);
C.appendChild(document.createTextNode(" "));
D++
});
if(D==0){var A=document.createElement("div");
A.className="tag notag";
A.innerHTML="No interest";
C.appendChild(A)
}E.appendChild(C);
return E
};
CQ_Analytics.TagCloudMgr=new CQ_Analytics.TagCloudMgr();
CQ_Analytics.TagCloudMgr.renderer=function(A,B){if(A&&A.STORENAME==CQ_Analytics.TagCloudMgr.STORENAME){$("#"+B).children().remove();
$("#"+B).append(A.createHTMLElement())
}};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()),this.createHTMLElement);
CQ_Analytics.CCM.register(this)
},CQ_Analytics.TagCloudMgr)
};