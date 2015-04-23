
//
//
//

var knowChannelParams = ["c_name","c_leg"];
	 
function ChannelProcessor(channelInfo) {
     this.channelInfo = channelInfo;
}

ChannelProcessor.prototype.getCname = function() {
    var urlVal = getURLParam("c_name");
    if(urlVal == null || urlVal.length == 0){
        var cnameMatch = this.channelInfo.match(/(\/tgt\/[^\/]*\/[^\/]*)|(\/tgw\/[^\/]*\/[^\/]*)|(\/tr\/[^\/]*\/[^\/]*)|(\/t\/[^\/]*\/[^\/]*)/);
        if (cnameMatch != null) {
            var cnameArray = cnameMatch[0].split("/");
            if(cnameArray[2] == "ISR" || cnameArray[2] == "isr" || cnameArray[2] == "CRM" || cnameArray[2] == "crm") {
                var c_name = "c_name="+ cnameArray[2] +"/"+cnameArray[3]+"&";
                return c_name;
            }
            else {
                var c_name = "c_name="+ cnameArray[2]+"&";
                return c_name;
            }
        }
        return "";
      }else
      return "c_name="+urlVal+"&";
}

ChannelProcessor.prototype.getCleg = function() {
    var c_leg = "c_leg="+ this.channelInfo;
    return c_leg;
}

function getHref() {
	return window.location.href;
} 

function getLocation(){
	return window.location;
}

function getHostName(){
	return window.location.hostname;
}


function getURLParam(name) {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(getHref());
        if(results != null)
            return results[1] || "";
        else
            return null;
}

function parseAdditionalQueryParams(trackParams){

    var channelTracker = new ChannelTracker();
    var queryParams = getHref().split("?")[1];
    if(queryParams != null){
        var qsa1 = channelTracker.queryStringToArray(queryParams);
        jQuery.each(qsa1 , function(key, val) {
        if (key.indexOf("c_") == 0 && (jQuery.inArray(key , knowChannelParams)) == -1 ) {
           var v = "c_"+ key.substring(2) + '=' + val;
           trackParams += trackParams == '' ? v : '&' + v;
        }
        });
        return trackParams;
    }else
        return trackParams;
}

function trackLegacyChannels(tracker,channelParam) {
	   if(tracker.dntCheck()) return;
       if(typeof tracker=='undefined')
         return;

        var url = '' + getLocation();
        if (url.match(/@/)) {
            jQuery.url.setUrl(url.replace(/@/g, "%40"));
        }

        if(typeof channelParam=='undefined' || jQuery.trim(channelParam).length==0||channelParam=='direct')
           return;

        var channel = new ChannelProcessor(channelParam);
        var cname = channel.getCname();
        var cleg = channel.getCleg();
        qs = cname+cleg;
        qs = parseAdditionalQueryParams(qs);
        trackLegacyVisit(tracker,qs);
        var cookieStr = tracker.createMktCookieStr(qs);
        tracker.writeMktCookie(cookieStr);
        tracker.writeTrackCookie("track","1");
        jQuery(document).ready(function() {
            tracker.appendJumpParamsToForms();
        });
}

function trackLegacyVisit(tracker,channelParam) {
	if(tracker.dntCheck()) return;
    if ("1" == tracker.readColCookie("track")) {
        return;
    }

    var url = '' + getLocation();
    if (url.match(/@/)) {
        jQuery.url.setUrl(url.replace(/@/g, "%40"));
    }
    // channel params
    var channelParams;
    channelParams = tracker.channelParams("", channelParam);

    var userId = jQuery.cookie('__col_visit');
    var firstSession = (typeof tracker.cookieValueToArray()['FIS_name'] == 'undefined');

    var port = "";
    var oldUrl = jQuery.url.attr("source");
    jQuery('script').each(function(i, item){
        if (item.src.indexOf("/marketing/api/2009/api.js") > 1 && jQuery.url.setUrl(item.src).attr("port") != null){
            port = ":" + jQuery.url.setUrl(item.src).attr("port");
        }
    });
    jQuery.url.setUrl(oldUrl);
    url = location.protocol + "//" + tracker.serverName + port + tracker.contextPath
                  + "/api/visit"
                  + "/userid/" + userId
                  + "/domain/" + getHostName()
                  + "/productName/" + tracker.productId
                  + "/channelparams/" + tracker.encode(channelParams)
                  + "/firstsession/" + firstSession
                  + ".json?_method=POST&callback=?";

    var trackerThis = tracker;
    jQuery.getJSON(url,
        function(data) {
            tracker.userId = data.string;

            var opts = { path: '/', expires: 365, domain: trackerThis.subdomain};
            jQuery.cookie('__col_visit', tracker.userId, opts);
        });
};
ChannelProcessor.prototype.serverName = "marketing.citrixonline.com";
ChannelProcessor.prototype.contextPath = "";