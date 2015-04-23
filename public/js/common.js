var Accordion={classNames:{categories:{active:"minus",inactive:"plus"}},init:function(){$(".accordian-container").each(function(){if($(this).hasClass("active")){Accordion.hideAll();
Accordion.clickPlus();
Accordion.clickQuestion();
$("#hideAll").unbind("click").bind("click",(function(A){A.preventDefault();
Accordion.hideAll()
}));
$("#showAll").unbind("click").bind("click",(function(A){A.preventDefault();
Accordion.showAll()
}))
}})
},hideAll:function(){$(".category").hide();
$(".accordionentry ."+Accordion.classNames.categories.active).removeClass(Accordion.classNames.categories.active).addClass(Accordion.classNames.categories.inactive)
},showAll:function(){$(".category").show();
$(".accordionentry ."+Accordion.classNames.categories.inactive).removeClass(Accordion.classNames.categories.inactive).addClass(Accordion.classNames.categories.active)
},clickPlus:function(){$(".accordionentry .text.plus").each(function(){$(this).unbind("click").bind("click",(function(){var A=$(this)[0];
if(A.className.indexOf(Accordion.classNames.categories.active)>=0){$(this).removeClass(Accordion.classNames.categories.active).addClass(Accordion.classNames.categories.inactive)
}else{$(this).removeClass(Accordion.classNames.categories.inactive).addClass(Accordion.classNames.categories.active)
}$(this).next("div").slideToggle();
return false
}))
})
},clickQuestion:function(){$(".accordionentry .question").each(function(){$(this).unbind("click").bind("click",(function(){$(this).next("div").slideToggle();
return false
}))
})
}};
var countrySelector=countrySelector||{init:function(){$(".footer-country-selector").click(function(){var A=$(this).width()-35;
jQuery(".footer .arrow").css("left",A);
jQuery(".locale-selector").toggle();
return false
});
$(".locale-selector .icon-close").click(function(){$(".locale-selector").hide()
});
$(document).ready(function(){$(".footer select").change(function(){var B=$(this).find("option:selected");
var A=$("<span>").addClass("tempOpt").text(B.text());
A.css({"font-family":B.css("font-family"),"font-size":B.css("font-size")});
$("body").append(A);
$(this).width(A.width()+30);
A.remove()
}).change()
})
}};
var carousel=carousel||{init:function(){var A=function(){$(".carousel-primary").each(function(){var S=$(this).attr("data-itemCount");
var P=$(this).attr("data-showsingleitemonsmallviewport");
var J=$(this).attr("data-itemslarge");
var D=$(this).attr("data-itemsmedium");
var F=$(this).attr("data-itemssmall");
var E=$(this).attr("data-navigation");
var N=$(this).attr("data-disablenavinsmallviewport");
var V=$(this).attr("data-disablenavinmediumviewport");
var O=$(this).attr("data-autoplay");
var Q=$(this).attr("data-rewindnav");
var T=$(this).attr("data-theme");
var M=$(this).attr("data-nospace");
var G=$(this).attr("data-disableoverlap");
var C=$(this).attr("data-disablenavoverlap");
var L="#"+$(this).attr("id");
var R=false;
var B=false;
var I=false;
if(E=="true"){I=true
}if(ssize=="small"&&N=="true"){I=false
}if(ssize=="med"&&V=="true"){I=false
}if(O=="true"){R=true
}if(Q=="true"){B=true
}if(C){T=T+"  owl-theme-features"
}if(ssize=="small"&&P=="true"){var K=$(L).data("owlCarousel");
if(K){K.destroy()
}$(L).owlCarousel({items:1,singleItem:true,mouseDrag:false,touchDrag:false,theme:T,navigation:false,pagination:false,autoPlay:false,rewindNav:false,responsive:true})
}else{var K=$(L).data("owlCarousel");
if(K){K.destroy()
}$(L).owlCarousel({items:J,itemsDesktop:[1921,J],itemsTablet:[1024,D],itemsMobile:[640,F],theme:T,navigation:I,slideSpeed:300,paginationSpeed:400,autoPlay:R,rewindNav:B,responsive:true,navigationText:false,stopOnHover:true})
}if(G){$(L).find("div.owl-pagination").css("bottom","0")
}if(M){var U=$(window).width();
var H=U/S;
if(ssize!="small"){$(L).find(".owl-item").each(function(){$(this).css("width",H+"px")
})
}}})
};
A();
$(window).resize(A)
}};
var CurrentPageReference=CurrentPageReference||{init:function(){var D=$(".fb .icon-facebook");
var B=$(".tw .icon-monitor");
var A=$(".gplus .icon-gplus");
var C=$(".mail .icon-mail");
CurrentPageReference.replaceCurrentPage(D);
CurrentPageReference.replaceCurrentPage(B);
CurrentPageReference.replaceCurrentPage(A);
CurrentPageReference.replaceCurrentPage(C)
},replaceCurrentPage:function(A){if(A!=null&&A.length>0){A.each(function(){var C=$(this);
var B=C.attr("href");
if(B!=null&&B.length>0){C.attr("href",B.replace("((currentPage))",window.location.href))
}})
}}};
var dotDotDot=dotDotDot||{init:function(){var A=$(".image_featured");
$(document).ready(function(){if($(window).width()<1025&&$(window).width()>640){$(".content-wrapper").height(150).dotdotdot();
A.on("load",function(){$(".resourcesFeature").height(A.height()+2);
$(".content-description").height($(this).height());
$(".primary-promo-desc").dotdotdot()
})
}else{if($(window).width()>1024){$(".primary-promo-desc").dotdotdot();
$(".content-description").height(260);
$(".content-wrapper").height(220);
$(".bloglink").height(120);
$(".content-wrapper,.primaryCarouselBody,.secondary-carousel .bloglink").dotdotdot()
}else{if($(window).width()<641){$(".primary-promo-desc").dotdotdot();
$(".content-description").height(130);
$(".content-wrapper").height(85);
$(".resourcesFeature").height("auto");
$(".content-wrapper").dotdotdot()
}}}$(".primary-promo-desc").dotdotdot({watch:true})
})
},dotDotResize:function(){if($(window).width()<1025&&$(window).width()>640){$(".content-description").height(200);
$(".content-wrapper").height(150);
$(".content-wrapper").trigger("update");
$(".resourcesFeature").height(160)
}else{if($(window).width()>1024){$(".content-description").height(260);
$(".content-wrapper").height(220).trigger("update");
$(".resourcesFeature").height("480")
}else{if($(window).width()<641){$(".content-wrapper").height(85);
$(".content-description").height("auto");
$(".resourcesFeature").height("auto")
}}}}};
$(window).bind("resize",dotDotDot.dotDotResize);
var dropDownLink=dropDownLink||{dropDown:".cLink",init:function(){$(document).ready(function(){$(dropDownLink.dropDown).change(function(){window.location=$(":selected",this).attr("value")
})
})
}};
var ExternalLink={selector:"a[rel=external]",init:function(){$(ExternalLink.selector).attr("target","_blank")
}};
jQuery(document).ready(function(){var A;
if(ssize=="small"){$(".floatingFooterContent").hide()
}else{if(ssize=="large"||ssize=="med"){handleFloatingFooter();
$(window).scroll(function(){clearTimeout(A);
A=setTimeout(handleFloatingFooter,100)
})
}}});
function handleFloatingFooter(){var E=$(window).scrollTop();
var B=$(".floatingFooterContent");
var C=B.height();
var A=E+$(window).height();
if($("#static-footer").length>0){var D=$("#static-footer").offset().top
}else{var D=$(".footer").offset().top
}if((ssize=="med"&&E>65)||(ssize=="large")){if(A>=D){B.slideUp()
}else{B.slideDown()
}}else{B.slideUp()
}}var formPlaceHolder=formPlaceHolder||{init:function(){if(!Modernizr.input.placeholder){$("[placeholder]").focus(function(){var A=$(this);
if(A.val()==A.attr("placeholder")){A.val("");
A.removeClass("placeholder")
}}).blur(function(){var A=$(this);
if(A.val()==""||A.val()==A.attr("placeholder")){A.addClass("placeholder");
A.val(A.attr("placeholder"))
}}).blur();
$("[placeholder]").parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var A=$(this);
if(A.val()==A.attr("placeholder")){A.val("")
}})
})
}}};
$(document).ready(function(){$(this).scrollTop(0);
$("img.lazy").unveil(500)
});
var menuScrollBar=menuScrollBar||{slideBarMenu:"#slidebar-menu",slideBarContent:"#slidebar-content",init:function(){$(menuScrollBar.slideBarContent).height($(window).height()-50);
$(menuScrollBar.slideBarContent).mCustomScrollbar({theme:"light",mouseWheel:{preventDefault:true},contentTouchScroll:100,scrollInertia:100})
},menuScrollResize:function(){$("#slidebar-content").height($(window).height()-50)
}};
$(window).bind("resize",menuScrollBar.menuScrollResize);
var t1,t2;
var menuSlideBar=menuSlideBar||{slideBarContent:"#slidebar-menu #slidebar-content",utilityNav:".topNav",tipsContainer:".tipsContainer",init:function(){var B=function(){if(ssize=="small"){$("li.tips > a:first-child").click(function(C){C.preventDefault()
});
$("li.tips").click(function(){$(this).find(menuSlideBar.tipsContainer).slideDown()
});
if($(menuSlideBar.utilityNav).hasClass("topNavTransition")){$(menuSlideBar.utilityNav).addClass("navBar");
$(".linkSet2").hide()
}$(".icon-rocket-1").css("display","block");
if(mobile&&navigator.userAgent.toLowerCase().indexOf("iphone")>0&&!(navigator.userAgent.match("CriOS"))){$(".shareList.section.socialList").next("div").next("div").height("height","50px")
}menuSlideBar.sectionDisplay()
}else{if(ssize=="med"){$("li.tips > a:first-child").click(function(C){C.preventDefault()
});
$("li.tips").click(function(){$(this).find(menuSlideBar.tipsContainer).slideDown()
});
if($(menuSlideBar.utilityNav).hasClass("topNavTransition")){$(menuSlideBar.utilityNav).removeClass("navBar");
$(".linkSet1").show();
$(".linkSet2").hide()
}$(".icon-rocket-1").hide();
menuSlideBar.sectionDisplay()
}else{$("li.tips a").mouseenter(function(C){clearTimeout(t1);
t1=setTimeout(function(){$(C.target).parents("li.tips:first").find(menuSlideBar.tipsContainer).slideDown(150)
},250);
C.stopPropagation()
});
$("li.tips").mouseleave(function(C){clearTimeout(t2);
t2=setTimeout(function(){$(C.target).parents("li.tips:first").find(menuSlideBar.tipsContainer).slideUp(150)
},250)
});
if($(menuSlideBar.utilityNav).hasClass("topNavTransition")){$(menuSlideBar.utilityNav).removeClass("navBar");
$(".linkSet1").show();
$(".linkSet2").hide()
}$(".icon-rocket-1").hide()
}}};
$(document).ready(function(){B()
});
$(window).resize(B);
var A=0;
$(window).scroll(function(){menuSlideBar.sectionDisplay();
var C=$(window).scrollTop();
if(C>65){if(ssize=="small"){$(".launcher").removeClass("icon-rocket-1");
$(".linkSet2").hide
}else{if($(menuSlideBar.utilityNav).hasClass("topNavTransition")){$(menuSlideBar.utilityNav).addClass("navBar");
$(".linkSet2").show();
$(".linkSet1").hide()
}}}else{if(ssize=="small"){$(".launcher").addClass("icon-rocket-1")
}else{if($(menuSlideBar.utilityNav).hasClass("topNavTransition")){$(menuSlideBar.utilityNav).removeClass("navBar");
$(".linkSet2").hide();
$(".linkSet1").show()
}}}});
$(".tipsContainer .icon-up").click(function(C){C.stopPropagation();
$(this).parents(menuSlideBar.tipsContainer).slideUp()
})
},sectionDisplay:function(){if($(menuSlideBar.utilityNav).hasClass("topNavTransition")){var B=$(window).scrollTop();
var A=$(menuSlideBar.utilityNav).height()+B;
$("section").each(function(){var D=$(this).attr("id");
var E=$(this).attr("name");
if(typeof (E)=="undefined"||E==""){E=""
}if(D!=""){var H=$(this).height();
var G=$(this).position().top;
var I=H+G;
var F=G-(A);
var C=I-(A);
if(F<=0&&C>=0){$(".sec-name").text(E);
if($("section").length>1){$(".linkSet2 a").each(function(){$(this).removeClass("current");
var J=$(this).attr("href").split("#");
if(D==J[1]){$(this).addClass("current")
}})
}}}})
}}};
var hashLinkScroll=hashLinkScroll||{init:function(){$("a").click(function(A){if(typeof ($(this).attr("href"))!="undefined"&&($(this).attr("href")!="#")){if($(this).attr("href").indexOf("#")==0){$("html,body").animate({scrollTop:$(this.hash).offset().top},500);
return false
}}})
}};
var Lightbox=Lightbox||{selector:"a[rel='lightbox']",lightboxContainer:"#lightbox-container",lightboxBorder:"#lightbox-border",init:function(){$(Lightbox.selector).click(function(){var D=$(this).attr("href");
if(D.indexOf("#")===0){var B=D.split("#")[1];
if(Lightbox.currentLightbox!==null&&B===Lightbox.currentLightbox.attr("id")){$(Lightbox.lightboxBorder).css("width",Lightbox.currentLightbox.css("width"));
Lightbox.currentLightbox.show();
if(ssize=="small"){$(Lightbox.lightboxBorder).css("width",$("body").outerWidth()-60);
Lightbox.currentLightbox.attr("brightcove-width",$("body").outerWidth()-60)
}$(Lightbox.lightboxBorder).addClass("video-width-fix");
BCL.createVideo(Lightbox.currentLightbox.attr("brightcove-width"),Lightbox.currentLightbox.attr("brightcove-height"),Lightbox.currentLightbox.attr("brightcove-player-id"),Lightbox.currentLightbox.attr("brightcove-player-key"),Lightbox.currentLightbox.attr("brightcove-video-player"),Lightbox.currentLightbox.attr("id"));
brightcove.createExperiences()
}else{$("#lightbox-border div").each(function(){if(B===$(this).attr("id")){Lightbox.currentLightbox=$(this);
$(Lightbox.lightboxBorder).css("width",Lightbox.currentLightbox.css("width"));
Lightbox.currentLightbox.show();
if(ssize=="small"){$(Lightbox.lightboxBorder).css("width",$("body").outerWidth()-60);
Lightbox.currentLightbox.attr("brightcove-width",$("body").outerWidth()-60)
}$(Lightbox.lightboxBorder).addClass("video-width-fix");
BCL.createVideo(Lightbox.currentLightbox.attr("brightcove-width"),Lightbox.currentLightbox.attr("brightcove-height"),Lightbox.currentLightbox.attr("brightcove-player-id"),Lightbox.currentLightbox.attr("brightcove-player-key"),Lightbox.currentLightbox.attr("brightcove-video-player"),Lightbox.currentLightbox.attr("id"));
brightcove.createExperiences()
}else{}})
}$(Lightbox.lightboxContainer).unbind("click").click(function(){BCL.pausePlayerByObjectId(Lightbox.currentLightbox.find("object").attr("id"));
$(Lightbox.lightboxContainer).fadeOut(100);
Lightbox.currentLightbox.hide();
Lightbox.currentLightbox.empty();
$("#lightbox-border").removeAttr("style");
$(".brightcove-lightbox").html("")
});
$("div#lightbox-close").unbind("click").click(function(){BCL.pausePlayerByObjectId($(Lightbox.currentLightbox).find("object").attr("id"));
$(Lightbox.lightboxContainer).fadeOut(100);
Lightbox.currentLightbox.hide();
Lightbox.currentLightbox.empty();
$("#lightbox-border").removeAttr("style");
$(".brightcove-lightbox").html("")
});
$("div#lightbox-container div").click(function(E){E.stopPropagation()
});
$(Lightbox.lightboxContainer).fadeIn(100)
}else{if(D.match("^//")||D.match("^http")){var A=Lightbox.getParameterByNameFromURL("height",D);
var C=Lightbox.getParameterByNameFromURL("width",D);
if(!A){A=670
}if(!C){C=530
}$("#lightbox-dynamic").empty();
$("#lightbox-dynamic").append("<iframe src="+D+" height="+A+"px width="+C+"px frameBorder='0'></iframe>");
$("#lightbox-dynamic").show();
$("#lightbox-border").height(A);
$("#lightbox-border").width(C);
$("#lightbox-dynamic a[rel='external']").each(function(){$(this).attr("target","_blank")
});
$("div#lightbox-close").unbind("click").click(function(){$("#lightbox-container").fadeOut(100,function(){$("#lightbox-dynamic").empty();
$("#lightbox-dynamic").hide();
$("#lightbox-border").removeAttr("style")
})
});
$("div#lightbox-container").unbind("click").click(function(){$("#lightbox-container").fadeOut(100,function(){$("#lightbox-dynamic").empty();
$("#lightbox-dynamic").hide();
$("#lightbox-border").removeAttr("style")
})
});
$("div#lightbox-container div").click(function(E){E.stopPropagation()
});
$("#lightbox-container").fadeIn(100)
}else{$("#lightbox-dynamic").load($(this).attr("href")+" #lightbox-content",function(){Common.lightboxInit();
BCL.playInLightbox();
$("#lightbox-dynamic").show();
$("#lightbox-border").addClass($("#lightbox-content").attr("class"));
$("#lightbox-content a[rel='external']").each(function(){$(this).attr("target","_blank")
});
$("div#lightbox-close").unbind("click").click(function(){$("#lightbox-container").fadeOut(100,function(){$("#lightbox-content").remove();
$("#lightbox-dynamic").hide();
$("#lightbox-border").removeClass().removeAttr("style")
})
});
$("div#lightbox-container").unbind("click").click(function(){$("#lightbox-container").fadeOut(100,function(){$("#lightbox-content").remove();
$("#lightbox-dynamic").hide();
$("#lightbox-border").removeClass().removeAttr("style")
})
});
$("div#lightbox-container div").not(".brightcoveVideo div").click(function(E){E.stopPropagation()
});
$("#lightbox-container").fadeIn(100)
})
}}return false
})
},currentLightbox:null,getParameterByNameFromURL:function(C,B){C=C.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var A="[\\?&]"+C+"=([^&#]*)";
var E=new RegExp(A);
var D=E.exec(B);
if(D==null){return""
}else{return D[1]
}},resetVideoOnResize:function(){if($("#lightbox-container object").length>0){if(ssize=="small"){var A=$("body").outerWidth()-60;
$("#lightbox-container object").width(A);
$("#lightbox-border").width(A)
}else{if(Lightbox.currentLightbox!=null){$("#lightbox-container object").width(Lightbox.currentLightbox.attr("brightcove-width"));
$("#lightbox-border").css("width",Lightbox.currentLightbox.attr("brightcove-width"))
}}}}};
$(window).bind("resize",Lightbox.resetVideoOnResize);
var Link=Link||{init:function(){if(typeof CurrentPageReference!="undefined"){CurrentPageReference.init()
}if(typeof ExternalLink!="undefined"){ExternalLink.init()
}if(typeof Lightbox!="undefined"){Lightbox.init()
}if(typeof PopupLink!="undefined"){PopupLink.init()
}}};
var lpCounter=0;
var livePerson=function(){$(".contact-sales-link").each(function(){var A=$(this).prev().attr("id");
if(A!=""&&A.indexOf("lpButton")==0){if($(this).prev().text()==""){if(lpCounter<20){$(this).show();
lpCounter++;
setTimeout(livePerson,1000)
}}else{lpCounter=0;
$(this).hide()
}}})
};
$(document).ready(function(){setTimeout(livePerson,2000)
});
var Tab=Tab||{selector:"a[rel='tab']",init:function(){$(Tab.selector).each(function(){$(this).parent().hover(function(){$(this).toggleClass("hover")
});
if($(this).attr("tab-container-id-link")!=null){$(this).unbind("click").click(function(){var C=$(this);
var A=C.attr("tab-container-id-link");
var B=C.attr("index");
$("[tab-container-id-link='"+A+"']").each(function(){if($(this).attr("index")===B){$(this).parent().addClass("active")
}else{$(this).parent().removeClass("active")
}});
$("[tab-container-id-content='"+A+"']").each(function(){if($(this).attr("index")===B){$(this).show()
}else{$(this).hide()
}});
return false
})
}})
}};
var ToolTip=ToolTip||{init:function(){var A=(jQuery.browser.webkit)?"body":"html";
$(".show_tooltip").hover(function(B){$(this).parents("li:first").find("div[id^=tip]").css({left:B.pageX+10,top:B.pageY+10+(jQuery("#lightbox-container").scrollTop()-$(A).scrollTop())}).show()
},function(){$(this).parents("li:first").find("div[id^=tip]").hide()
})
}};
var tripleStack=tripleStack||{init:function(){$(".stacker .content-title").dotdotdot({watch:"window"});
$(window).resize(function(){$(".stacker .content-title").dotdotdot({watch:"window"})
})
}};
var parallax=parallax||{init:function(){var A=function(){$(".parallax").each(function(){$(this).parallax("50%",0.5)
})
};
$(document).ready(A)
}};
var PopupLink={selector:"a[rel=popup]",init:function(){$(PopupLink.selector).each(function(){$(this).unbind("click").click(function(){window.open(this.href,"","width=500,height=400,menubar=0,status=0,location=0,toolbar=0,scrollbars=yes,resizable=yes");
return false
})
})
}};
var pricingChart={init:function(){pricingChart.hideAll();
$(".compare a.plus").each(function(){$(this).click(function(){var B=$(this)[0];
if(B.className.indexOf(Accordion.classNames.categories.active)>=0){$(this).removeClass(Accordion.classNames.categories.active).addClass(Accordion.classNames.categories.inactive)
}else{$(this).removeClass(Accordion.classNames.categories.inactive).addClass(Accordion.classNames.categories.active)
}$("#"+this.id+"_expand").slideToggle();
return false
})
})
},hideAll:function(){$(".compare > .subgroup").hide();
$(".compare > a.plus").removeClass(Accordion.classNames.categories.active).addClass(Accordion.classNames.categories.inactive)
}};
var tm1,tm2;
var PrimaryCarousel=PrimaryCarousel||{init:function(){$(".primary-carousel").each(function(){var B=$("#primaryCarousel").data("owlCarousel");
$(this).owlCarousel({singleItem:true,responsiveRefreshRate:200,autoPlay:false,rewindNav:true,afterUpdate:setHeight,pagination:true,navigation:true,navigationText:false,responsiveBaseWidth:window})
});
if($(".primary-carousel")[0]){setHeight()
}var A=function(){$(".primary-carousel .text.rte").dotdotdot({ellipsis:"...",watch:"window"})
};
$(document).ready(function(){clearTimeout(tm1);
tm1=setTimeout(function(){A()
},2000)
});
$(window).resize(function(){clearTimeout(tm2);
tm2=setTimeout(function(){A()
},500)
});
$(".primaryCarousel img, .primaryCarousel .owl-item").hover(function(){$(".primaryCarousel .owl-buttons").css("display","block");
if($(window).width()>1025){$(".primaryCarousel .owl-item-info h5").css("color","#fc6a06")
}$(".primaryCarousel .link-sub-container").hover(function(){$(".primaryCarousel .owl-item-info h5").css("color","#434b58")
},function(){$(".primaryCarousel .link-sub-container").unbind("mouseenter mouseleave")
})
},function(){$(".primaryCarousel .owl-buttons").css("display","none");
$(".primaryCarousel .owl-item-info h5").css("color","#434b58")
});
$(".primaryCarousel .owl-item-info, .primaryCarousel img").click(function(){if($(window).width()<1025){$(this).closest(".carouselItem").find("h5").css("color","#fc6a06")
}});
$(".primaryCarousel .owl-buttons").hover(function(){$(".primaryCarousel .owl-buttons").css("display","block")
},function(){$(".primaryCarousel .owl-buttons").css("display","block")
})
}};
function setHeight(){var D=$(".stacker").outerHeight();
var B=0;
var E=0;
var A=$(".primary-carousel").height();
E=Math.round((A/3));
D=E;
var C=(E*3);
var A=$(".owl-item").height();
if(C>A){B=(C-A)
}else{if(C<A){B=(C-A)
}else{B=0
}}$(".stacker").height(D);
$(".singleStack-3").height(D-B)
}var searchRefinements=searchRefinements||{init:function(){$(".searchRefinements-header").on("click",function(A){$(".searchRefinements-content").slideToggle(500,function(){if($(this).is(":visible")){$(".searchRefinements-header span").removeClass("arrow-right").addClass("arrow-down")
}else{$(".searchRefinements-header span").removeClass("arrow-down").addClass("arrow-right")
}})
});
$(document).on("click",function(A){if(!$(A.target).parents("li").hasClass("filter")){$(".drop-down-list").hide()
}})
}};
function showFiltersMediumUp(){if(ssize=="med"||ssize=="large"){$(".searchRefinements-content").css("display","block")
}else{$(".searchRefinements-content").css("display","none")
}}$(window).resize(showFiltersMediumUp);
var SecondaryCarousel=SecondaryCarousel||{secondaryCarousel:".secondary-carousel",secondaryCarouselSelector:".secondary-carousel .selector",secondaryCarouselCurrent:".secondary-carousel .current",secondaryTextCarousel:".secondary-carousel #textCarousel",secondaryCarouselFeedLink:".secondary-carousel .feed-link",init:function(){var C=$(SecondaryCarousel.secondaryTextCarousel);
var B=true;
C.owlCarousel({singleItem:true,slideSpeed:1000,pagination:false,responsiveRefreshRate:200,autoPlay:true,stopOnHover:true,afterMove:A,responsiveBaseWidth:window});
$(".secondary-carousel p").dotdotdot({watch:"window"});
$(".secondary-carousel h3").dotdotdot({watch:"window"});
$(SecondaryCarousel.secondaryCarouselSelector).hover(function(){$(SecondaryCarousel.secondaryCarouselCurrent).removeClass("current");
$(this).addClass("current");
var E=$(this).index();
var D=C.data("owlCarousel").owl.visibleItems;
C.trigger("owl.goTo",E);
C.data("owlCarousel").stop()
},function(){C.data("owlCarousel").play()
});
$(SecondaryCarousel.secondaryCarousel).hover(function(){C.data("owlCarousel").stop()
},function(){C.data("owlCarousel").play()
});
$(SecondaryCarousel.secondaryCarouselSelector).click(function(){if(B===true){$(SecondaryCarousel.secondaryCarouselCurrent).removeClass("current");
$(this).addClass("current");
var E=$(this).index();
var D=C.data("owlCarousel").owl.visibleItems;
C.trigger("owl.goTo",E);
C.data("owlCarousel").stop();
B=false;
$(SecondaryCarousel.secondaryCarouselSelector).unbind("mouseenter mouseleave");
$(SecondaryCarousel.secondaryCarousel).unbind("mouseenter mouseleave")
}else{$(SecondaryCarousel.secondaryCarouselCurrent).removeClass("current");
$(this).addClass("current");
var E=$(this).index();
var D=C.data("owlCarousel").owl.visibleItems;
C.trigger("owl.goTo",E);
$(SecondaryCarousel.secondaryCarouselSelector).hover(function(){$(SecondaryCarousel.secondaryCarouselCurrent).removeClass("current");
$(this).addClass("current");
var G=$(this).index();
var F=C.data("owlCarousel").owl.visibleItems;
C.trigger("owl.goTo",G);
C.data("owlCarousel").stop()
},function(){C.data("owlCarousel").play()
});
$(SecondaryCarousel.secondaryCarousel).hover(function(){C.data("owlCarousel").stop()
},function(){C.data("owlCarousel").play()
});
B=true
}return B
});
function A(){var D=$(SecondaryCarousel.secondaryCarouselSelector);
var F=$(SecondaryCarousel.secondaryCarouselCurrent).index();
var E=C.data("owlCarousel").owl.visibleItems;
if(E!=F){$(SecondaryCarousel.secondaryCarouselCurrent).removeClass("current");
D.eq(E).addClass("current")
}}}};
$(window).scroll(function(){var B=$(window).scrollTop();
if(B>0){var A=B;
$("section").each(function(){if($(this).attr("data-analytics-enable-tracking")=="true"){var E=$(this).attr("id");
if(E!=""){var F=$(this).attr("name")
}var I=$(this).height();
var H=$(this).position().top;
var J=I+H;
var G=H-(A);
var D=J-(A);
var C=H+$(this).height()/2-(A);
if((G<=0&&G>=-100)){setAnalyticsValues($(this))
}else{if($(this).attr("data-analytics-track-when-visible")=="true"&&G>0&&C<$(window).height()){$currSec=$(this);
setAnalyticsValues($(this))
}}}})
}});
function setAnalyticsValues(A){if((utag_data.template!==$(A).attr("data-analytics-template")||utag_data.content_type!==$(A).attr("data-analytics-content-type"))&&$(A).attr("data-analytics-enable-tracking")=="true"){utag_data.template=$(A).attr("data-analytics-template");
utag_data.content_type=$(A).attr("data-analytics-content-type");
utag_data.sub_section=$(A).attr("data-analytics-sub-section");
utag.view(utag_data)
}}var socialNav=socialNav||{currSegment:"",segFromTop:[],segments:[],docObj:(jQuery.browser.webkit)?"body":"html",scrollByArrow:false,captureCords:function(){if(jQuery("section").length>1){jQuery("section").each(function(A){if(this.id!=""){socialNav.segFromTop[this.id]=parseInt(jQuery("#"+this.id).offset().top);
socialNav.segments[A]=this.id
}});
socialNav.currSegment=""+socialNav.segments[0]
}},resetBg:function(){$("#shareOptions").css({background:"transparent"})
},hideSocialIcons:function(){$("#shareOpt").stop(true).animate({left:"-256px"});
$("#shareOptions").css({background:"transparent"});
$(".shareOpt .icons-box").css({display:"none"})
},adjustSocialNavColor:function(){var C=$(".left-nav").attr("data-social-nav-user-alt-color");
var A=$(".left-nav").attr("data-social-nav-alt-color-section");
var D=$(".left-nav").attr("data-social-nav-alt-color");
if(C=="true"){console.log("enabled");
var B=$(A).position().top+$(A).height();
if($(".left-nav").position().top>$(A).position().top&&$(".left-nav").position().top<B){if(D!=""){$(".left-nav li a, .left-nav li span").css("color",D)
}else{$(".left-nav").addClass("alternative-color")
}}else{if(D!=""){$(".left-nav li a, .left-nav li span").css("color","")
}else{$(".left-nav").removeClass("alternative-color")
}}}},init:function(){$(".navbuttons span").hide();
t=setTimeout("socialNav.captureCords()",1000);
if(ssize!="large"){$("a#share").click(function(A){A.preventDefault();
A.stopPropagation();
$(".shareOpt, .icons-box").css({width:"0px"});
$(this).parents("#shareOptions").css({background:"#000"});
$(".shareOpt .icons-box").css({display:"block"});
$(".shareOpt, .icons-box").css({width:"256px"});
$("#shareOpt").stop(true).animate({left:"256px"});
setTimeout(socialNav.hideSocialIcons,3000)
})
}else{$("#shareOptions").hover(function(){$("#shareOptions").css({background:"#000"});
$(".shareOpt .icons-box").css({display:"block"});
$(".shareOpt, .icons-box").css({width:"256px"});
$("#shareOpt").stop(true).animate({left:"256px"})
},function(){$("#shareOpt").stop(true).animate({left:"-256px"});
setTimeout(socialNav.resetBg,200);
$(".shareOpt, .icons-box").css({width:"0px"});
$(".shareOpt .icons-box").css({display:"none"})
})
}$(window).scroll(function(){if($(window).scrollTop()<1){socialNav.currSegment=socialNav.segments[0]
}var B=$(window).scrollTop();
if($("section").length>2){$("section").each(function(){if(this.id!=""){var E=$(this).attr("id");
E=(socialNav.scrollByArrow)?socialNav.currSegment:E;
var H=$("#"+E).height();
var G=$("#"+E).position().top;
var I=H+G;
var F=G-(B);
var D=I-(B);
if(F<=0&&D>=0){$(socialNav.segments).each(function(J){if(E!=""&&E==socialNav.segments[J]){socialNav.currSegment=socialNav.segments[J];
if(J==socialNav.segments.length-1){$("span#followDown").hide()
}else{if(J>0){$(".navbuttons span").show()
}else{$(".navbuttons span").hide()
}}}if($(window).scrollTop()+$(window).height()==$(document).height()){$("span#followDown").hide()
}if($(window).scrollTop()<1){$(".navbuttons span").hide()
}})
}}})
}var A=function(){if(B>=350&&socialNav.showFloatingNav!=true){$("span#followUp").show();
socialNav.showFloatingNav=true
}else{if($(window).scrollTop()<1&&socialNav.showFloatingNav!=false){$("span#followUp").hide();
socialNav.showFloatingNav=false
}}};
if($("section").length<=2){A()
}else{var C=false;
jQuery("section").each(function(D){if(this.id!=""){C=true;
return false
}});
if(!C){A()
}}if($("section").length<1&&B>=200&&socialNav.showFloatingNav!=true){$("span#followUp").show();
socialNav.showFloatingNav=true
}else{if(B<100){B=false
}}socialNav.adjustSocialNavColor()
});
$(document).ready(function(){socialNav.adjustSocialNavColor()
});
$(".top-layer-content .icon-learn-more").click(function(A){A.preventDefault();
A.stopPropagation();
socialNav.scrollByArrow=true;
$(socialNav.docObj).animate({scrollTop:[socialNav.segFromTop[socialNav.segments[socialNav.segments.indexOf(socialNav.currSegment)+1]]+20,"swing"]},1000);
socialNav.currSegment=socialNav.segments[socialNav.segments.indexOf(socialNav.currSegment)+1];
$(".navbuttons span").show()
});
$(".navbuttons span").click(function(A){socialNav.scrollByArrow=true;
if(this.id=="followDown"){$("html,body").animate({scrollTop:$("#"+socialNav.segments[socialNav.segments.indexOf(socialNav.currSegment)+1]).offset().top},500);
socialNav.currSegment=socialNav.segments[socialNav.segments.indexOf(socialNav.currSegment)+1];
if(socialNav.segments.indexOf(socialNav.currSegment)==(socialNav.segments.length-1)){$("span#followDown").hide()
}}else{$(socialNav.docObj).animate({scrollTop:0},1000);
$(".navbuttons span").fadeOut();
socialNav.currSegment=""+socialNav.segments[0];
socialNav.scrollByArrow=false
}})
}};
var videospotlight=videospotlight||{init:function(){var A=function(){$("div.videos-spotlight-container").each(function(){var B=$(this).attr("data-enablejs");
if(B=="true"){if(ssize=="med"){$(this).find(".hovercontent").show();
$(this).unbind("hover")
}else{if(ssize=="small"){$(this).find(".hovercontent").show();
$(this).unbind("hover")
}else{$(this).find(".hovercontent").hide();
$(this).hover(function(){$(this).find(".hovercontent").fadeIn()
},function(){$(this).find(".hovercontent").fadeOut()
})
}}}})
};
A();
$(window).resize(A)
}};
var tryForm=tryForm||{init:function(){var A=function(){$("div.trial-box").each(function(){var B=$(this).find("input.prefill.show-for-medium-only").attr("id");
if(ssize=="med"){$(this).find("input.prefill.show-for-medium-only").attr("name",B);
$(this).find("input.prefill.show-for-large-up").removeAttr("name");
$(this).find("input.prefill.show-for-small-only").removeAttr("name")
}else{if(ssize=="small"){$(this).find("input.prefill.show-for-small-only").attr("name",B);
$(this).find("input.prefill.show-for-large-up").removeAttr("name");
$(this).find("input.prefill.show-for-medium-only").removeAttr("name")
}else{$(this).find("input.prefill.show-for-large-up").attr("name",B);
$(this).find("input.prefill.show-for-small-only").removeAttr("name");
$(this).find("input.prefill.show-for-medium-only").removeAttr("name")
}}})
};
A();
$(window).resize(A)
}};
var planAndPricing=planAndPricing||{classNames:{categories:{active:"minus",inactive:"plus"}},init:function(){if($(".planAndPricing").length>0){$(document).ready(planAndPricing.calcScreenSize());
$(window).resize(planAndPricing.calcScreenSize());
planAndPricing.setAccordion();
$("#owl-demo").owlCarousel({navigation:true,navigationText:false,slideSpeed:300,paginationSpeed:400,singleItem:true,rewindNav:false,pagination:false,});
var C="";
var D=false;
$(window).on("resize",function(){if(ssize=="small"||$(window).width()<=736){if(D){A()
}else{$(".reference ul.theme, .owl-buttons, .owl-wrapper-outer, .owl-controls").hide();
$("ul.theme").show()
}}else{$(".reference ul.theme, .owl-buttons, .owl-wrapper-outer, .owl-controls").hide();
$("ul.theme").show()
}planAndPricing.fixedHeader()
});
var B=$(".owl-carousel").data("owlCarousel");
$(".view-features").click(function(){D=true;
C=$(this).attr("id")+"-slide";
A()
});
function A(){$("ul.theme").hide();
$("#pricingHeading, #planandpricing .button, .mainContent .backgroundColor, .mainContent .sectionSlanting").hide();
$(".reference ul.theme, .owl-buttons, .owl-wrapper-outer, .owl-controls").show();
$(".owl-item section").each(function(E){if(C==$(".owl-item section").eq(E).attr("id")){B.jumpTo(E);
jQuery('<p class="swipe-title">Swipe To View Other Plans</p><h3 class="plan-title">'+$(".owl-item section").eq(E).find("h3").text()+"</h3>").insertAfter(".owl-prev")
}});
$(document).scrollTop(0)
}}},setAccordion:function(){$(".planAndPricing div.plus").each(function(){$(this).unbind("click").bind("click",function(){var A=$(this)[0];
if(A.className.indexOf(planAndPricing.classNames.categories.active)>=0){$(this).removeClass(planAndPricing.classNames.categories.active).addClass(planAndPricing.classNames.categories.inactive);
if(ssize=="small"){$(this).parents(".row").find("p, .left-row").css({"border-width":"1px"})
}else{$(this).parents(".row").find("p, .left-row").css({"border-width":"1px"})
}}else{$(this).removeClass(planAndPricing.classNames.categories.inactive).addClass(planAndPricing.classNames.categories.active);
if(ssize=="small"){$(this).parents(".row").find("p, .left-row").css({"border-width":"0px"})
}else{$(this).parents(".row").find("p, .left-row").css({"border-width":"0px"})
}}$(this).parents(".row").find("div.features").slideToggle();
return false
})
})
},calcScreenSize:function(){if($(window).width()<="1024"&&$(window).width()>"640"){ssize="med"
}else{if($(window).width()<="640"){ssize="small"
}else{ssize="large"
}}planAndPricing.fixedHeader()
},fixedHeader:function(){var B=jQuery(".planAndPricing ul").find("li.head:first");
if(B.length>0){if($(window).width()>760){var A=$(".callout").offset().top;
B.width(B.parent().width());
jQuery(document).on("scroll",function(C){if(jQuery(document).scrollTop()>A&&$(window).width()>760){B.addClass("fix-header");
if(!$(".dummyElement").length){$(B).after("<li class='dummyElement'>&nbsp;</li>");
$(".dummyElement").height(B.height())
}}else{B.removeClass("fix-header");
jQuery(".dummyElement").remove()
}})
}else{B.removeClass("fix-header").removeAttr("style");
jQuery(".dummyElement").remove()
}}}};
var Common=Common||{init:function(){dotDotDot.init();
Accordion.init();
countrySelector.init();
carousel.init();
CurrentPageReference.init();
dropDownLink.init();
formPlaceHolder.init();
hashLinkScroll.init();
Link.init();
menuSlideBar.init();
parallax.init();
slideBar.init();
socialNav.init();
PrimaryCarousel.init();
SecondaryCarousel.init();
searchRefinements.init();
tripleStack.init();
Tab.init();
videospotlight.init();
tryForm.init();
planAndPricing.init()
},lightboxInit:function(){pricingChart.init();
styleSwitcher.init();
ToolTip.init()
}};
jQuery(function(){setTimeout(Common.init,250)
});