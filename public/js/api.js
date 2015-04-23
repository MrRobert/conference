//
//
//



ChannelTracker.prototype.setupAppendTracking = function(){
/**/
  this.appendTrackingHosts = new Array("secure.citrixonline.com", "secure.gotoassist.com");
};

ChannelTracker.prototype.UUID = '593f9daf-0196-414e-861a-61a1831a583a';

ChannelTracker.prototype.serverName = "marketing.citrixonline.com";
ChannelTracker.prototype.contextPath = "";

function ChannelTracker(productId, subdomain) {
	this.setupAppendTracking();
	if(this.dntCheck()) return;
    this.productId = productId;
    this.subdomain = subdomain;
    var actualDomain = document.domain;
    if(actualDomain.indexOf(this.subdomain) < 0) {
    	this.subdomain = null;
    }
    if (this.subdomain == null) {
        try {
            var url = '' + window.location;
            if (url.match(/@/)) {
                jQuery.url.setUrl(url.replace(/@/g, "%40"));
            }
            var results = jQuery.url.attr("host").match(/([A-Za-z0-9\-]*)((\.[A-Za-z\-]{2,3}){1,2}|(\.[A-Za-z]{2,10}))$/);
            this.subdomain = results != null && results.length > 0 ? results[0] : null;
        }catch(e){}
    }
    this.saveCookiesFromUrl();
    this.userId = jQuery.cookie('__col_visit');
    if ( this.userId == null ) {
    	this.userId = this.UUID;
        var opts = { path: '/', expires: 365, domain: this.subdomain};
        jQuery.cookie('__col_visit', this.userId, opts);
   	}
}

ChannelTracker.prototype.dntCheck = 
	function () {
		return (typeof dnt == "object" && dnt.dntTrue());
	}

ChannelTracker.prototype.trackChannel =
    function () {
		if(this.dntCheck()) return;
        this.trackVisit();
        // Work-around for jQuery bug.  The @ sign is not escaped and that causes jQuery.url to not work correctly.
        var url = '' + window.location;
        if (url.match(/@/)) {
            jQuery.url.setUrl(url.replace(/@/g, "%40"));
        }
        // End work-around
        var chnl = jQuery.url.param("c_name");

        if (typeof chnl != 'undefined') {
            var qs = jQuery.url.attr("query");
            var cookieStr = this.createMktCookieStr(qs);
            this.writeMktCookie(cookieStr);
            this.writeTrackCookie("track","1");
        } else {
            var tracked=this.readColCookie("track");
            if (typeof tracked != 'string') {
                var cookieStr = this.createMktCookieStr("c_name=direct");
                var va = this.cookieValueToArray();
                this.writeMktCookie(cookieStr);
                this.writeTrackCookie("track","1");

            }
        }
        var theChannelTracker = this;
        jQuery(document).ready(function() {
            theChannelTracker.appendJumpParamsToForms();
            theChannelTracker.appendJumpParamsToLinks();
        });
    }

ChannelTracker.prototype.appendToChannel =
    function (attributes) {
		if(this.dntCheck()) return;
        var firstTracked = this.readColCookie("first_track");
        if (typeof attributes == 'object') {
            var va = this.cookieValueToArray();
            jQuery.each(attributes, function(key, value) {
		if ("true" === firstTracked) {
			va['FIS_'+key] = value;
		}
                va['LST_'+key] = value;
            });
            var cookieStr = '';
            jQuery.each(va, function(key, val) {
                if (key.indexOf('FIS_') == 0 || key.indexOf('LST_') == 0) {
                    var v = key + '=' + val;
                    cookieStr += cookieStr == '' ? v : '&' + v;
                }
            });

            this.writeMktCookie(cookieStr);
            this.appendJumpParamsToForms();
            this.appendJumpParamsToLinks();
        }
    }

ChannelTracker.prototype.setChannel =
    function (channel) {
		if(this.dntCheck()) return;
        var va = this.cookieValueToArray();
        var cookieStr = '';
        jQuery.each(va, function(key, val) {
            if (key.indexOf('FIS_') == 0) {
                var v = key + '=' + val;
                cookieStr += cookieStr == '' ? v : '&' + v;
            }
        });
        if (typeof channel == 'object') {
            jQuery.each(channel, function(key, value) {
                var v = key + '=' + value;
                cookieStr += cookieStr == '' ? 'LST_' + v : '&LST_' + v;
            });
        } else {
            cookieStr = cookieStr + '&LST_name=' + channel;
        }
        this.writeMktCookie(cookieStr);
        this.appendJumpParamsToForms();
        this.appendJumpParamsToLinks();
    }

ChannelTracker.prototype.getPort = function() {
    if (!this.port) {
        var foundPort = null;
        jQuery('script').each(function(i, item) {
            if (item.src.indexOf("/marketing/api/2009/api.js") > 1 && jQuery.url.setUrl(item.src).attr("port") != null) {
                foundPort = ":" + jQuery.url.setUrl(item.src).attr("port");
                return;
            }
        });
        this.port = foundPort;
    }
    return this.port || "";
}

ChannelTracker.prototype.trackChannelEvent =
    function (userKey, email, eventId, allowDuplicates, registrantInfo) {
		if(this.dntCheck()) return;
        var cookieStr=this.readColCookie("mkt");
        if (typeof cookieStr == 'string') {
            var userId = jQuery.cookie('__col_visit');
            var firstSession = (this.readColCookie("first_track") == "true");
            var registrantText = "";
            if (registrantInfo != null) {
                registrantText = (registrantInfo.firstName ? "&firstName=" + registrantInfo.firstName : "")
                                  + (registrantInfo.lastName ? "&lastName=" + registrantInfo.lastName : "")
                                  + (registrantInfo.phoneNumber ? "&phoneNumber=" + registrantInfo.phoneNumber : "")
                                  + (registrantInfo.catalogNumber ? "&catalogNumber=" + registrantInfo.catalogNumber : "")
                                  + (registrantInfo.planNumber ? "&planNumber=" + registrantInfo.planNumber : "")
                                  + (registrantInfo.regionCode ? "&regionCode=" + registrantInfo.regionCode : "")
                                  + (registrantInfo.locale ? "&locale=" + registrantInfo.locale : "");
            }
            var url = location.protocol + "//" + this.serverName + this.getPort() + this.contextPath
                      + "/api/trackChannel.json"
                      + "?email=" + email
                      + "&userKey=" + userKey
                      + "&event=" + this.encode(eventId)
                      + "&product=" + this.encode(this.productId)
                      + "&channelparams=" + this.encode(cookieStr)
                      + "&userid=" + userId
                      + "&firstsession=" + firstSession
                      + registrantText
                      + "&duplicate=" + (allowDuplicates == null ? false : allowDuplicates)
                      + "&callback=?";
            jQuery.getJSON(url,
                function(data) {
                    //ignored
                });
        }
    }

ChannelTracker.prototype.trackExperiment =
    function (userKey, experiment) {
		if(this.dntCheck()) return;
        if (typeof experiment == 'object') {
            var url = location.protocol + "//" + this.serverName + this.getPort() + this.contextPath
                      + "/api/track/siteTracking.json?_method=POST&userKey=" + userKey;
            var p = ['experimentId', 'experimentName', 'variationId', 'variationName'];
            for (var i=0; i < p.length; i++) {
                url += '&' + p[i] + '=' + (experiment[p[i]] || '');
            }
            jQuery.getJSON(url + '&callback=?', function(data) { });
        }
    }        

ChannelTracker.prototype.createMktCookieStr =
    function (qs) {
        var va = this.cookieValueToArray();
        var FIS_name = va['FIS_name'];
        var cookieStr = '';
        if (typeof FIS_name == 'undefined') {
            cookieStr = this.channelParams('FIS_', qs);
            cookieStr = cookieStr + '&' + this.channelParams('LST_', qs);
            this.writeTrackCookie("first_track","true");
        } else {
            jQuery.each(va, function(key, val) {
                if (key.indexOf('FIS_') == 0) {
                    var v = key + '=' + val;
                    cookieStr += cookieStr == '' ? v : '&' + v;
                }
            });
            cookieStr = cookieStr + '&' + this.channelParams('LST_', qs);


        }
        return cookieStr;
    }

ChannelTracker.prototype.cookieValueToArray =
    function () {
        var cookieStr=this.readColCookie("mkt");
        return this.queryStringToArray(cookieStr);
    }

ChannelTracker.prototype.queryStringToArray =
    function (value) {
        var a = { };
        
        if(value == null || value.length == 0)
        	return a;
        
        if (typeof value == "string") {
        
            var kv = value.split('&');
            jQuery.each(kv, function() {
            
                var kva = this.split('=');
                
                if(kva.length >= 2) {
                	kva[0] = kva[0].replace(/"/g, "");
                	kva[1] = kva[1].replace(/"/g, "");
                	a[kva[0]] = kva[1];
                }
            });
        }
        return a;
    }

ChannelTracker.prototype.channelParams =
    function (prefix, queryString) {
        var str = '';
        var qsa = this.queryStringToArray(queryString);
        jQuery.each(qsa, function(key, val) {
           if (key.indexOf("c_") == 0) {
               var v = prefix + key.substring(2) + '=' + val;
               str += str == '' ? v : '&' + v;
           }
        });
        return str;
    }

ChannelTracker.prototype.link =
    function (url) {
        window.location = this.createLinkerUrl(url);
    }


ChannelTracker.prototype.linkByPost =
    function (url, form) {
        form.action = this.createLinkerUrl(url);
        form.method = 'POST';
        form.submit();
    }

ChannelTracker.prototype.saveCookiesFromUrl =
    function () {
		if(this.dntCheck()) return;
        var cookieStr = jQuery.url.param("__col_mkt_cookies");
        
        if (typeof cookieStr != 'undefined') {
            cookies = decodeURIComponent(cookieStr);
            var ck = cookies.split(';');
            
            if(ck == null) return;

            for(i = 0; i<ck.length; i++) {

				// Instead of spliting on = the split is done on first occurance of =. Because in few cases cookie value can contain =
				// Example: _col_mkt_GoToMeeting=FIS_Name=aaa
                ca = ck[i].split(/=(.+)?/);
                
                if(ca.length < 2 || (typeof ca[1] == 'undefined'))
                   continue;
                    
                cookieName = jQuery.trim(ca[0]);
                cookieValue = jQuery.trim(decodeURIComponent(ca[1]));
                
                if(cookieName.length > 0 && cookieValue.length > 0) {
                
                    if(cookieName.indexOf("__col_track_") == 0)
                       this.writeTrackCookie("track", cookieValue);
                    else if (cookieName.indexOf("__col_first_track_") == 0)   
                       this.writeTrackCookie("first_track", cookieValue);
            		else
            		   this.writeCookie(cookieName, cookieValue);
                }
            }
        }
    }
    
ChannelTracker.prototype.readColCookie=
	function(value){
		return jQuery.cookie('__col_'+value+'_'+ this.productId);
    }
ChannelTracker.prototype.writeTrackCookie =
    function (name,value) {
		if(this.dntCheck()) return;
        var opts = { path: '/' };
        if (typeof this.subdomain == "string") {
            opts.domain = this.subdomain;
        }
        jQuery.cookie('__col_'+name +'_'+ this.productId, value, opts);
    }

ChannelTracker.prototype.toggleFirstTrackCookie =
    function (value) {
		if(this.dntCheck()) return;
        var firstTracked = this.readColCookie("first_track");
        if (typeof firstTracked == 'string') {
            var opts = { path: '/' };
            if (typeof this.subdomain == "string") {
                opts.domain = this.subdomain;
            }
            jQuery.cookie('__col_first_track_' + this.productId, value, opts);
        }
    }

ChannelTracker.prototype.writeMktCookie =
    function (value) {
        this.writeCookie('__col_mkt_' + this.productId, value, this.subdomain);
    }

ChannelTracker.prototype.writeCookie =
    function (name, value) {
        var opts = { path: '/', expires: 365 };
        if (typeof this.subdomain == "string") {
            opts.domain = this.subdomain;
        }
        jQuery.cookie(name, value, opts);
    }

ChannelTracker.prototype.encode =
    function (text) {
        return encodeURIComponent(encodeURIComponent(text));
    }

ChannelTracker.prototype.decode =
    function (text) {
        return decodeURIComponent(decodeURIComponent(text));
    }

ChannelTracker.prototype.createLinkerUrl =
    function (link) {
        return link + (link.indexOf('?') > 0 ? '&' : '?') + '__col_mkt_cookies=' + this.encode(this.getColCookies());
    }

ChannelTracker.prototype.appendJumpParamsToForms =
    function() {
        var theChannelTracker = this;
            jQuery('form').each(function(i, theForm){
                var theAction = jQuery(theForm).attr('action');
                if (theAction && theAction.indexOf('http') == 0) {
                    var name = theForm.id != null && theForm.id != '' ? theForm.id : theForm.name;
                    name = name == null || name == '' ? "hidden" : name;
                    if (jQuery('#h_' + name, theForm).length != 0) {
                        jQuery('#h_' + name, theForm)[0].value = escape(theChannelTracker.getColCookies());
                    } else {
                        jQuery(theForm).append("<input type='hidden' name='__col_mkt_cookies' value='" + escape(theChannelTracker.getColCookies()) + "' id='h_" + name + "'>");
                    }
                }
            });
    }

ChannelTracker.prototype.appendJumpParamsToLinks =
    function() {
        var theChannelTracker = this;
        jQuery('a').each(function(i, theLink){
            if (theLink.href && jQuery(theLink).attr("href").indexOf('http') == 0) {
                var theHost = jQuery.url.setUrl(theLink.href).attr("host").toLowerCase();
                var internalColLink = false;
                jQuery(theChannelTracker.appendTrackingHosts).each(function(i, value){
                    if (theHost.indexOf(jQuery.trim(value)) >= 0) {
                        // this is an internal url, append tracking
                        internalColLink = true;
                    }
                });
                if (internalColLink) {
                    var colMktCookiesString = "__col_mkt_cookies=" + escape("__col_visit=") + jQuery.cookie('__col_visit') + escape("; ");
                    var newHref = theLink.href;
                    if (theLink.href.indexOf(colMktCookiesString) > 0) {
                        var startIndex = theLink.href.indexOf(colMktCookiesString);
                        var endIndex = theLink.href.indexOf("&", startIndex);
                        if ( startIndex > 0 ) {
                        	if ( endIndex > 0 ) {
                        		colMktCookiesString = theLink.href.substring(startIndex, endIndex - startIndex);
                       		} else {
                       			colMktCookiesString = theLink.href.substring(startIndex, theLink.href.length);
                       		}
                       		colMktCookiesString = colMktCookiesString + escape("; ");
                       	}
                        if (endIndex < 0) {
                            var urlStringType1 = theLink.href.substring(0, startIndex) + colMktCookiesString;
                            var newUrlLength1 = urlStringType1.length;
                            newHref = urlStringType1 + theChannelTracker.appendCookiesAfterValidation(newUrlLength1);
                        } else {
                            var urlStringType2 = urlStringType1 + theLink.href.substring(endIndex, theLink.href.length);
                            var newUrlLength2 =  urlStringType2.length;
                            newHref = urlStringType1 + theChannelTracker.appendCookiesAfterValidation(newUrlLength2) + theLink.href.substring(endIndex, theLink.href.length);
                        }                    
                    } else {
                        var urlStringType3 = theLink.href + (theLink.href.indexOf('?') > 0 ? '&' : '?') + colMktCookiesString;
                        var newUrlLength3 =  urlStringType3.length;
                        newHref = urlStringType3 + theChannelTracker.appendCookiesAfterValidation(newUrlLength3);
                    }
                   // Fix IE bug, when setting href it also sets innerText
                    var oldText = jQuery(theLink).text();
                    jQuery(theLink).attr('href', newHref);                    
                    if (jQuery(theLink).text() != oldText){
                        jQuery(theLink).text(oldText);
                    }
                }
            }
        });
    };

ChannelTracker.prototype.getColCookies =
    function() {
        var cookies = "";
        jQuery(document.cookie.split(";")).each(function(i, item){
            if (jQuery.trim(item).indexOf("__col") == 0) {
                cookies += (cookies != "" ? ";" : "") + item;
            }
        });
        return jQuery.trim(cookies);
    };

ChannelTracker.prototype.appendCookiesAfterValidation =
    function(urlLen) {
        var urlLength = urlLen >= 0 ? urlLen : 0;
        if(urlLength > 2048)
            return "";

        var productCookie = escape(this.getProductCookies());
        urlLength += productCookie.length;

        if(urlLength > 2048)
            return "";

        return productCookie;
    };

ChannelTracker.prototype.getProductCookies =
    function() {
		var cookies = "";
	    var theChannelTracker = this;
	    var prodCookieNames = ["__col_first_track_"+this.productId,"__col_mkt_"+this.productId,"__col_track_"+this.productId];
	    jQuery(document.cookie.split(";")).each(function(i, item){
	        var cookie = item.split("=");
	        var cookieName = jQuery.trim(cookie[0]);
	        if(jQuery.inArray(cookieName,prodCookieNames) >= 0) {
	            cookies += (cookies != "" ? ";" : "") + item;
	        }
	    });
	    return jQuery.trim(cookies);
    };

ChannelTracker.prototype.trackVisit =
    function() {
        if ("1" == this.readColCookie("track")) {
            return;
        }
        
        var url = '' + window.location;
        if (url.match(/@/)) {
            jQuery.url.setUrl(url.replace(/@/g, "%40"));
        }
        // channel params
        var channelParams;
        if (typeof jQuery.url.param("c_name") != 'undefined') {
            channelParams = this.channelParams("", jQuery.url.attr("query"));
        } else {
            channelParams = this.channelParams("", "c_name=direct");
        }
        var userId = jQuery.cookie('__col_visit');
        var firstSession = (typeof this.cookieValueToArray()['FIS_name'] == 'undefined');
        
        var port = "";
        var oldUrl = jQuery.url.attr("source");
        jQuery('script').each(function(i, item){
            if (item.src.indexOf("/marketing/api/2009/api.js") > 1 && jQuery.url.setUrl(item.src).attr("port") != null){
                port = ":" + jQuery.url.setUrl(item.src).attr("port");
            }
        });
        jQuery.url.setUrl(oldUrl);
        url = location.protocol +"//"+ this.serverName + port + this.contextPath
                      + "/api/visit"
                      + "/userid/" + userId
                      + "/domain/" + window.location.hostname
                      + "/productName/" + this.productId       
                      + "/channelparams/" + this.encode(channelParams)
                      + "/firstsession/" + firstSession
                      + ".json?_method=POST&callback=?";
        var trackerThis = this;
        jQuery.getJSON(url,
            function(data) {
                this.userId = data.string;
                var opts = { path: '/', expires: 365, domain: trackerThis.subdomain};
                jQuery.cookie('__col_visit', this.userId, opts);
            });
    }

