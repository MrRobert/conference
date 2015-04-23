

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
// JQuery URL Parser
// Written by Mark Perkins, mark@allmarkedup.com
// License: http://unlicense.org/ (i.e. do what you want with it!)

jQuery.url = function()
{
    var segments = {};
    
    var parsed = {};
    
    /**
    * Options object. Only the URI and strictMode values can be changed via the setters below.
    */
    var options = {
    
        url : window.location, // default URI is the page in which the script is running
        
        strictMode: false, // 'loose' parsing by default
    
        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"], // keys available to query 
        
        q: {
            name: "queryKey",
            parser: /(?:^|&|;)([^&=;]*)=?([^&;]*)/g
        },
        
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
        }
        
    };
    
    /**
     * Deals with the parsing of the URI according to the regex above.
     * Written by Steven Levithan - see credits at top.
     */     
    var parseUri = function()
    {
        str = decodeURI( options.url );
        
        var m = options.parser[ options.strictMode ? "strict" : "loose" ].exec( str );
        var uri = {};
        var i = 14;

        while ( i-- ) {
            uri[ options.key[i] ] = m[i] || "";
        }

        uri[ options.q.name ] = {};
        uri[ options.key[12] ].replace( options.q.parser, function ( $0, $1, $2 ) {
            if ($1) {
                uri[options.q.name][$1] = $2;
            }
        });

        return uri;
    };

    /**
     * Returns the value of the passed in key from the parsed URI.
     * 
     * @param string key The key whose value is required
     */     
    var key = function( key )
    {
        if ( jQuery.isEmptyObject(parsed) )
        {
            setUp(); // if the URI has not been parsed yet then do this first...    
        } 
        if ( key == "base" )
        {
            if ( parsed.port !== null && parsed.port !== "" )
            {
                return parsed.protocol+"://"+parsed.host+":"+parsed.port+"/";   
            }
            else
            {
                return parsed.protocol+"://"+parsed.host+"/";
            }
        }
    
        return ( parsed[key] === "" ) ? null : parsed[key];
    };
    
    /**
     * Returns the value of the required query string parameter.
     * 
     * @param string item The parameter whose value is required
     */     
    var param = function( item )
    {
        if ( jQuery.isEmptyObject(parsed) )
        {
            setUp(); // if the URI has not been parsed yet then do this first...    
        }
        if ( item === undefined )
        {
            return parsed.queryKey;
        }
        else
        {
            return ( parsed.queryKey[item] === null ) ? null : parsed.queryKey[item];
        }
    };

    /**
     * 'Constructor' (not really!) function.
     *  Called whenever the URI changes to kick off re-parsing of the URI and splitting it up into segments. 
     */ 
    var setUp = function()
    {
        parsed = parseUri();
        
        getSegments();  
    };
    
    /**
     * Splits up the body of the URI into segments (i.e. sections delimited by '/')
     */
    var getSegments = function()
    {
        var p = parsed.path;
        segments = []; // clear out segments array
        segments = parsed.path.length == 1 ? {} : ( p.charAt( p.length - 1 ) == "/" ? p.substring( 1, p.length - 1 ) : path = p.substring( 1 ) ).split("/");
    };
    
    return {
        
        /**
         * Sets the parsing mode - either strict or loose. Set to loose by default.
         *
         * @param string mode The mode to set the parser to. Anything apart from a value of 'strict' will set it to loose!
         */
        setMode : function( mode )
        {
            options.strictMode = mode == "strict" ? true : false;
            return this;
        },
        
        /**
         * Sets URI to parse if you don't want to to parse the current page's URI.
         * Calling the function with no value for newUri resets it to the current page's URI.
         *
         * @param string newUri The URI to parse.
         */     
        setUrl : function( newUri )
        {
            options.url = newUri === undefined ? window.location : newUri;
            setUp();
            return this;
        },      
        
        /**
         * Returns the value of the specified URI segment. Segments are numbered from 1 to the number of segments.
         * For example the URI http://test.com/about/company/ segment(1) would return 'about'.
         *
         * If no integer is passed into the function it returns the number of segments in the URI.
         *
         * @param int pos The position of the segment to return. Can be empty.
         */ 
        segment : function( pos )
        {
            if ( jQuery.isEmptyObject(parsed) )
            {
                setUp(); // if the URI has not been parsed yet then do this first...    
            } 
            if ( pos === undefined )
            {
                return segments.length;
            }
            return ( segments[pos] === "" || segments[pos] === undefined ) ? null : segments[pos];
        },
        
        attr : key, // provides public access to private 'key' function - see above
        
        param : param // provides public access to private 'param' function - see above
        
    };
    
}();
(function($) {
    /** jQuery.toJSON( json-serializble )
     Converts the given argument into a JSON respresentation.

     If an object has a "toJSON" function, that will be used to get the representation.
     Non-integer/string keys are skipped in the object, as are keys that point to a function.

     json-serializble:
     The *thing* to be converted.
     **/
    $.toJSON = function(o)
    {
        if (typeof(JSON) == 'object' && JSON.stringify)
            return JSON.stringify(o);

        var type = typeof(o);

        if (o === null)
            return "null";

        if (type == "undefined")
            return undefined;

        if (type == "number" || type == "boolean")
            return o + "";

        if (type == "string")
            return $.quoteString(o);

        if (type == 'object')
        {
            if (typeof o.toJSON == "function")
                return $.toJSON( o.toJSON() );

            if (o.constructor === Date)
            {
                var month = o.getUTCMonth() + 1;
                if (month < 10) month = '0' + month;

                var day = o.getUTCDate();
                if (day < 10) day = '0' + day;

                var year = o.getUTCFullYear();

                var hours = o.getUTCHours();
                if (hours < 10) hours = '0' + hours;

                var minutes = o.getUTCMinutes();
                if (minutes < 10) minutes = '0' + minutes;

                var seconds = o.getUTCSeconds();
                if (seconds < 10) seconds = '0' + seconds;

                var milli = o.getUTCMilliseconds();
                if (milli < 100) milli = '0' + milli;
                if (milli < 10) milli = '0' + milli;

                return '"' + year + '-' + month + '-' + day + 'T' +
                    hours + ':' + minutes + ':' + seconds +
                    '.' + milli + 'Z"';
            }

            if (o.constructor === Array)
            {
                var ret = [];
                for (var i = 0; i < o.length; i++)
                    ret.push( $.toJSON(o[i]) || "null" );

                return "[" + ret.join(",") + "]";
            }

            var pairs = [];
            for (var k in o) {
                var name;
                var type = typeof k;

                if (type == "number")
                    name = '"' + k + '"';
                else if (type == "string")
                    name = $.quoteString(k);
                else
                    continue;  //skip non-string or number keys

                if (typeof o[k] == "function")
                    continue;  //skip pairs where the value is a function.

                var val = $.toJSON(o[k]);

                pairs.push(name + ":" + val);
            }

            return "{" + pairs.join(", ") + "}";
        }
    };

    /** jQuery.evalJSON(src)
     Evaluates a given piece of json source.
     **/
    $.evalJSON = function(src)
    {
        if (typeof(JSON) == 'object' && JSON.parse)
            return JSON.parse(src);
        return eval("(" + src + ")");
    };

    /** jQuery.secureEvalJSON(src)
     Evals JSON in a way that is *more* secure.
     **/
    $.secureEvalJSON = function(src)
    {
        if (typeof(JSON) == 'object' && JSON.parse)
            return JSON.parse(src);

        var filtered = src;
        filtered = filtered.replace(/\\["\\\/bfnrtu]/g, '@');
        filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
        filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, '');

        if (/^[\],:{}\s]*$/.test(filtered))
            return eval("(" + src + ")");
        else
            throw new SyntaxError("Error parsing JSON, source is not valid.");
    };

    /** jQuery.quoteString(string)
     Returns a string-repr of a string, escaping quotes intelligently.
     Mostly a support function for toJSON.

     Examples:
     >>> jQuery.quoteString("apple")
     "apple"
     
     **/
    $.quoteString = function(string)
    {
        if (string.match(_escapeable))
        {
            return '"' + string.replace(_escapeable, function (a)
            {
                var c = _meta[a];
                if (typeof c === 'string') return c;
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + string + '"';
    };

    var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;

    var _meta = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    };
})(jQuery);