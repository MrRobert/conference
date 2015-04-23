!function(B){var A=B(window),C=A.height();
A.resize(function(){C=A.height()
}),B.fn.parallax=function(J,I,H){function D(){var K=A.scrollTop();
G.each(function(){var L=B(this),N=L.offset().top,M=F(L);
K>N+M||N>K+C||G.css("backgroundPosition",J+" "+Math.round((E-K)*I)+"px")
})
}var F,E,G=B(this);
G.each(function(){E=G.offset().top
}),F=H?function(K){return K.outerHeight(!0)
}:function(K){return K.height()
},(arguments.length<1||null===J)&&(J="50%"),(arguments.length<2||null===I)&&(I=0.1),(arguments.length<3||null===H)&&(H=!0),A.bind("scroll",D).resize(D),D()
}
}(jQuery);
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(E,D,A,B,C){return jQuery.easing[jQuery.easing.def](E,D,A,B,C)
},easeInQuad:function(E,D,A,B,C){return B*(D/=C)*D+A
},easeOutQuad:function(E,D,A,B,C){return -B*(D/=C)*(D-2)+A
},easeInOutQuad:function(E,D,A,B,C){if((D/=C/2)<1){return B/2*D*D+A
}return -B/2*((--D)*(D-2)-1)+A
},easeInCubic:function(E,D,A,B,C){return B*(D/=C)*D*D+A
},easeOutCubic:function(E,D,A,B,C){return B*((D=D/C-1)*D*D+1)+A
},easeInOutCubic:function(E,D,A,B,C){if((D/=C/2)<1){return B/2*D*D*D+A
}return B/2*((D-=2)*D*D+2)+A
},easeInQuart:function(E,D,A,B,C){return B*(D/=C)*D*D*D+A
},easeOutQuart:function(E,D,A,B,C){return -B*((D=D/C-1)*D*D*D-1)+A
},easeInOutQuart:function(E,D,A,B,C){if((D/=C/2)<1){return B/2*D*D*D*D+A
}return -B/2*((D-=2)*D*D*D-2)+A
},easeInQuint:function(E,D,A,B,C){return B*(D/=C)*D*D*D*D+A
},easeOutQuint:function(E,D,A,B,C){return B*((D=D/C-1)*D*D*D*D+1)+A
},easeInOutQuint:function(E,D,A,B,C){if((D/=C/2)<1){return B/2*D*D*D*D*D+A
}return B/2*((D-=2)*D*D*D*D+2)+A
},easeInSine:function(E,D,A,B,C){return -B*Math.cos(D/C*(Math.PI/2))+B+A
},easeOutSine:function(E,D,A,B,C){return B*Math.sin(D/C*(Math.PI/2))+A
},easeInOutSine:function(E,D,A,B,C){return -B/2*(Math.cos(Math.PI*D/C)-1)+A
},easeInExpo:function(E,D,A,B,C){return(D==0)?A:B*Math.pow(2,10*(D/C-1))+A
},easeOutExpo:function(E,D,A,B,C){return(D==C)?A+B:B*(-Math.pow(2,-10*D/C)+1)+A
},easeInOutExpo:function(E,D,A,B,C){if(D==0){return A
}if(D==C){return A+B
}if((D/=C/2)<1){return B/2*Math.pow(2,10*(D-1))+A
}return B/2*(-Math.pow(2,-10*--D)+2)+A
},easeInCirc:function(E,D,A,B,C){return -B*(Math.sqrt(1-(D/=C)*D)-1)+A
},easeOutCirc:function(E,D,A,B,C){return B*Math.sqrt(1-(D=D/C-1)*D)+A
},easeInOutCirc:function(E,D,A,B,C){if((D/=C/2)<1){return -B/2*(Math.sqrt(1-D*D)-1)+A
}return B/2*(Math.sqrt(1-(D-=2)*D)+1)+A
},easeInElastic:function(G,E,H,A,B){var D=1.70158;
var C=0;
var F=A;
if(E==0){return H
}if((E/=B)==1){return H+A
}if(!C){C=B*0.3
}if(F<Math.abs(A)){F=A;
var D=C/4
}else{var D=C/(2*Math.PI)*Math.asin(A/F)
}return -(F*Math.pow(2,10*(E-=1))*Math.sin((E*B-D)*(2*Math.PI)/C))+H
},easeOutElastic:function(G,E,H,A,B){var D=1.70158;
var C=0;
var F=A;
if(E==0){return H
}if((E/=B)==1){return H+A
}if(!C){C=B*0.3
}if(F<Math.abs(A)){F=A;
var D=C/4
}else{var D=C/(2*Math.PI)*Math.asin(A/F)
}return F*Math.pow(2,-10*E)*Math.sin((E*B-D)*(2*Math.PI)/C)+A+H
},easeInOutElastic:function(G,E,H,A,B){var D=1.70158;
var C=0;
var F=A;
if(E==0){return H
}if((E/=B/2)==2){return H+A
}if(!C){C=B*(0.3*1.5)
}if(F<Math.abs(A)){F=A;
var D=C/4
}else{var D=C/(2*Math.PI)*Math.asin(A/F)
}if(E<1){return -0.5*(F*Math.pow(2,10*(E-=1))*Math.sin((E*B-D)*(2*Math.PI)/C))+H
}return F*Math.pow(2,-10*(E-=1))*Math.sin((E*B-D)*(2*Math.PI)/C)*0.5+A+H
},easeInBack:function(F,E,A,B,C,D){if(D==undefined){D=1.70158
}return B*(E/=C)*E*((D+1)*E-D)+A
},easeOutBack:function(F,E,A,B,C,D){if(D==undefined){D=1.70158
}return B*((E=E/C-1)*E*((D+1)*E+D)+1)+A
},easeInOutBack:function(F,E,A,B,C,D){if(D==undefined){D=1.70158
}if((E/=C/2)<1){return B/2*(E*E*(((D*=(1.525))+1)*E-D))+A
}return B/2*((E-=2)*E*(((D*=(1.525))+1)*E+D)+2)+A
},easeInBounce:function(E,D,A,B,C){return B-jQuery.easing.easeOutBounce(E,C-D,0,B,C)+A
},easeOutBounce:function(E,D,A,B,C){if((D/=C)<(1/2.75)){return B*(7.5625*D*D)+A
}else{if(D<(2/2.75)){return B*(7.5625*(D-=(1.5/2.75))*D+0.75)+A
}else{if(D<(2.5/2.75)){return B*(7.5625*(D-=(2.25/2.75))*D+0.9375)+A
}else{return B*(7.5625*(D-=(2.625/2.75))*D+0.984375)+A
}}}},easeInOutBounce:function(E,D,A,B,C){if(D<C/2){return jQuery.easing.easeInBounce(E,D*2,0,B,C)*0.5+A
}return jQuery.easing.easeOutBounce(E,D*2-C,0,B,C)*0.5+B*0.5+A
}});