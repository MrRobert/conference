$(document).ready(function(){
	$('.utilityNavigation .linkList a').has( ".icon-none" ).click(function(){
		var expires = new Date();
		expires.setDate(expires.getDate() + 90);
		if(window.location.href.indexOf("training") > -1){
			document.cookie = "G2TLogIn=true"+";expires=" + expires.toGMTString() + ";domain=.gotomeeting.com;path=/;";
		}
		else if(window.location.href.indexOf("webinar") > -1) {
			document.cookie = "G2WLogIn=true"+";expires=" + expires.toGMTString() + ";domain=.gotomeeting.com;path=/;";
		}
	});
	$('.utilityNavigation .linkList a').has( ".icon-users" ).click(function(){
		var expires = new Date();
		expires.setDate(expires.getDate() + 90);
		if(window.location.href.indexOf("training") > -1){
			document.cookie = "G2TLogIn=true"+";expires=" + expires.toGMTString() + ";domain=.gotomeeting.com;path=/;";
		}
		else if(window.location.href.indexOf("webinar") > -1) {
			document.cookie = "G2WLogIn=true"+";expires=" + expires.toGMTString() + ";domain=.gotomeeting.com;path=/;";
		}
	});
});