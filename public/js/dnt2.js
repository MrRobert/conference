function dntObj() {
	var aDomMch = ['.co.uk'];
	var aLocMch = ['en-gb'];
	var bInit = false;
	var bCtx = false;
	var sDom = window.location.hostname;
	var sDomRoot = '';
	var sLang = 'en';
	var sLoc = '';
	var sMsgCls = 'dnt';
	var sMsgID = 'dntmsg';
	var sMsgIDI = sMsgID+'-img';
	var sMsgIDC = sMsgID+'-cd';
	var sMsgIDCM = sMsgID+'-cdm';
	var sMsgLocId = '';
	var sMsgImgSrcDef = '//www.citrixonlinecdn.com/images/im/fe/dnt/gear-icon.png';
	var sMsgImgSrc = '';
	var sPP = 'http://www.citrixonline.com/collaboration/privacy_overview_popup';
	var oLangF = { 'c':['<a href="#" onclick="return dnt.toggleCLB(false);">','</a>'], 'cs':['<a href="#" onclick="return dnt.printInitMsg();">','</a>'], 'ia':['<a href="#" onclick="return dnt.changeDNT(2);">','</a>'], 'nt':['<a href="#" onclick="return dnt.changeDNT(3);">','</a>'], 'pp':['<a href="','" onclick="return dnt.showPP(this);">','</a>'] }
	var oLang = {
		'en':{'comp':'We use '+oLangF.c[0]+'cookies'+oLangF.c[1]+' to make your experience on our website better. Change your '+oLangF.cs[0]+'cookie settings'+oLangF.cs[1]+'.'
			,'init':'We use '+oLangF.c[0]+'cookies'+oLangF.c[1]+' to make your experience on our website better. To comply with the EC Directive, we ask for your consent to set these cookies. [ '+oLangF.ia[0]+'I agree'+oLangF.ia[1]+' ] [ '+oLangF.nt[0]+'No thanks'+oLangF.nt[1]+' ]'
			,'cky':'A cookie is a small text file that contains data about a website visit. Many websites create cookies and store them on their visitors\' computers to help them enhance their user experience. We use analytical cookies to count the number of visitors we have and to collect anonymous information about how people behave during their visits, such as which pages they view and in what order. This helps us know if our visitors are able to find what they need easily and gives us clues on how to improve how our websites work. To comply with the EC Directive, we also set a cookie to tell us if you have agreed to our use of cookies. For further information about our cookies and privacy practices, please read our '+oLangF.pp[0]+sPP+oLangF.pp[1]+'Privacy Policy'+oLangF.pp[2]+'.'
		}
	}
	var sSty = '.dnt { clear:left; color:#666; display:block; font-size:11px; margin:10px 25px; overflow:auto; padding:4px 2px; text-align:left;  line-height:normal; } .dnt #'+sMsgIDI+', .dnt #'+sMsgIDC+' { display:inline; margin:0; padding:0; vertical-align:top; } .dnt #'+sMsgIDC+' { margin:0 8px; } .dnt #'+sMsgIDCM+' { padding-top:10px; }';
	var getSrc = function() {
		var oSrc = document.getElementsByTagName("script");
		for(var i=0; i<oSrc.length;i++) if(/dnt2\.js$/.test(oSrc[i].src)) sMsgImgSrcDef = '//'+oSrc[i].src.split('//')[1].split('dnt2.js')[0]+'gear-icon.png';
	}
	var domCheck = function() {
		for(var i = 0; i < aDomMch.length; i++) if(sDom.indexOf(aDomMch[i],sDom.length-aDomMch[i].length) !== -1) bCtx = true;
	}
	var locCheck = function() {
		if(sLoc != '') for(var i = 0; i < aLocMch.length; i++) if(sLoc == aLocMch[i]) bCtx = true;
	}
	var getRootDOM = function() {
		var sD = sDom;
		var aD = sD.split('.');
		var iDC = aD.length-1;
		var aT = [];
		for(var i=iDC; i>0; i--){
			aT.unshift(aD[i]);
			if(aD[i].length >= 4){ sD = aT.join('.'); break; }
		}
		sDomRoot = sD;
	}
	var getDNT = function() {
		var rtn = undefined;
		var cky = document.cookie.split(";");
		for(var i = 0; i < cky.length; i++) if(cky[i].indexOf('dnt') != -1) rtn = cky[i].split('=')[1];
		return rtn;
	}
	var setDNT = function(i) {
		var exp = new Date((new Date()).getTime() + 365 * 24 * 60 * 60 * 1000);
		document.cookie = 'dnt='+i+';expires='+exp.toGMTString()+';path=/;domain='+sDomRoot;
	}
	var delDNT = function() {
		var exp = new Date((new Date()).getTime() - 1000);
		document.cookie = 'dnt=;expires='+exp.toGMTString()+';path=/;domain='+sDomRoot;
	}
	this.setMsgClass = function(s) {
		sMsgCls = s;
	}
	this.setMsgImgSrc = function(s) {
		sMsgImgSrc = s;
	}
	this.setMsgLocId = function(s) {
		sMsgLocId = s;
	}
	this.setLocale = function(s) {
		sLoc = s.toLowerCase().replace("_","-");
		var aLoc = sLoc.split('-');
		if(aLoc[0].match(/^[a-z]{2}$/) && aLoc[0] in oLang) sLang = aLoc[0];
	}
	this.printInitMsg = function() {
		document.getElementById(sMsgIDC).innerHTML = oLang[sLang]['init'];
		return false;
	}
	this.dntTrue = function() {
		var rtn = false;
		if(bCtx) {
			var oC = getDNT();
			if(typeof oC == 'undefined' || oC == '0' || oC == '3') rtn = true;
		}
		return rtn;
	}
	var writeCompMsg = function() {
		document.getElementById(sMsgIDC).innerHTML = oLang[sLang]['comp'];
		return false;
	}
	var printFoot = function() {
		var oC = getDNT();
		var oAp = undefined;
		if(sMsgLocId != '' && document.getElementById(sMsgLocId) != null) oAp = document.getElementById(sMsgLocId);
		if(/(?:^| )(dnt)(?: |$)/.test(sMsgCls)) {
			var h = document.getElementsByTagName('head')[0];
			var s = document.createElement("style");
			s.type = 'text/css';
			if(s.styleSheet) s.styleSheet.cssText = sSty;
			else s.appendChild(document.createTextNode(sSty));
			h.appendChild(s);
		}
		var i = document.createElement("img");
		i.id = sMsgIDI, i.width = '14', i.height = '14', i.border = '0', i.src = (sMsgImgSrc != '') ? sMsgImgSrc : sMsgImgSrcDef;
		var divP = document.createElement("div");
		divP.id = sMsgID;
		divP.className = sMsgCls;
		divP.appendChild(i);
		if(typeof oAp == 'undefined') document.body.appendChild(divP);
		else oAp.insertBefore(divP, (oAp.hasChildNodes()) ? oAp.children[0] : null);
		var divC = document.createElement("div");
		divC.id = sMsgIDC;
		divP.appendChild(divC);
		if(oC == '0' || oC == '1') divC.innerHTML += oLang[sLang]['init'];
		else divC.innerHTML += oLang[sLang]['comp'];
	}
	this.toggleCLB = function(b) {
		var divCM = document.getElementById(sMsgIDCM);
		var oCD = document.getElementById(sMsgID);
		if(divCM == null && b != true) {
			divCM = document.createElement("div");
			divCM.id = sMsgIDCM;
			divCM.innerHTML += oLang[sLang]['cky']
			oCD.appendChild(divCM);
		} else if(divCM != null) oCD.removeChild(divCM);
		return false;
	}
	this.showPP = function(o) {
		window.open(o.href,'popup','height=400,width=600,menubar=0,status=0,location=0,toolbar=0,scrollbars=yes,resizable=yes');
		return false;
	}
	this.changeDNT = function(i) {
		setDNT(i);
		writeCompMsg();
		this.toggleCLB(true);
		return false;
	}
	this.dntInit = function() {
		bInit = true;
		getSrc();
		getRootDOM();
		domCheck();
		locCheck();
		var oC = getDNT();
		if(bCtx) {
			if(typeof oC == 'undefined') setDNT(1);
			else if(oC == '0') setDNT(1);
			else setDNT(oC);
		} else {
			if(typeof oC != 'undefined') delDNT();
		}
	}
	this.dntLoad = function() {
		if(bInit == false) this.dntInit();
		if(bCtx) printFoot();
	}
}
(function() {
    function dntOL() {
		dnt.dntLoad();
    }
    if (window.attachEvent) window.attachEvent('onload', dntOL);
    else window.addEventListener('load', dntOL, false);
})();
var dnt = new dntObj();