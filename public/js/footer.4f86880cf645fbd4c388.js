var footer=webpackJsonp_name_([2],{0:function(e,t,n){"use strict";var r=n(6),o=n(7),i=n(8);t.init=function(){r(),window.devicePixelRatio>1&&o(),window.addEventListener("scroll",i),i()},t.trackSticky=i},6:function(e,t,n){"use strict";var r=n(45);e.exports=function(){function e(e){var t=e.clientX+i;t+o.offsetWidth>document.documentElement.clientWidth&&(t=Math.max(0,e.clientX-i-o.offsetWidth)),o.style.left=t+"px";var n=e.clientY+a;n+o.offsetHeight>document.documentElement.clientHeight&&(n=Math.max(0,e.clientY-a-o.offsetHeight)),o.style.top=n+"px"}function t(t){var n=t.target.closest("a, [data-tooltip]");n&&("A"==n.tagName&&n.closest(".toolbar")||(o=document.createElement("span"),o.className="link__type",n.getAttribute("data-tooltip")?o.setAttribute("data-tooltip",n.getAttribute("data-tooltip")):o.setAttribute("data-url",n.getAttribute("href")),document.body.appendChild(o),e(t),document.addEventListener("mousemove",e)))}function n(){o&&(document.removeEventListener("mousemove",e),o.remove(),o=null)}var o=null,i=8,a=10;r("a,[data-tooltip]",t,n)}},7:function(e){"use strict";e.exports=function(){for(var e=document.querySelectorAll('figure img[src$=".png"]'),t=0;t<e.length;t++)!function(){var n=e[t];n.onload=function(){if(delete this.onload,!this.src.match(/@2x.png$/)){var e=new Image;e.onload=function(){this.width&&this.height&&(n.src=this.src)},e.src=this.src.replace(".png","@2x.png")}},n.complete&&n.onload()}()}},8:function(e){"use strict";function t(){for(var e=document.querySelectorAll("[data-sticky]"),t=0;t<e.length;t++){var r=e[t],o=r.dataset.sticky?document.querySelector(r.dataset.sticky):document.body;if(r.getBoundingClientRect().top<0){if(r.style.cssText)return;var i=r.getBoundingClientRect().left,a=n(r);r.parentNode.insertBefore(a,r),o.appendChild(r),r.classList.add("sticky"),r.style.position="fixed",r.style.top=0,r.style.left=i+"px",r.style.zIndex=101,r.style.background="white",r.style.margin=0,r.style.width=a.offsetWidth+"px",r.placeholder=a}else r.placeholder&&r.placeholder.getBoundingClientRect().top>0&&(r.style.cssText="",r.classList.remove("sticky"),r.placeholder.parentNode.insertBefore(r,r.placeholder),r.placeholder.remove(),r.placeholder=null)}}function n(e){var t=document.createElement("div"),n=getComputedStyle(e);return t.style.width=e.offsetWidth+"px",t.style.marginLeft=n.marginLeft,t.style.marginRight=n.marginRight,t.style.height=e.offsetHeight+"px",t.style.marginBottom=n.marginBottom,t.style.marginTop=n.marginTop,t}e.exports=t},45:function(e){"use strict";function t(e,t,n){d[e]={over:t,out:n}}function n(e){if(!i){var t=Math.sqrt(Math.pow(e.pageX-a,2)+Math.pow(e.pageY-s,2)),n=t/(Date.now()-c);if(u>n){var r=document.elementFromPoint(e.clientX,e.clientY);if(r!=o){for(var l in d){var f=r.closest(l);f&&(i={elem:f,out:d[l].out},d[l].over(e))}o=r}}a=e.pageX,s=e.pageY,c=Date.now()}}function r(e){if(i){for(var t=e.relatedTarget;t;){if(t==i.elem)return;t=t.parentElement}var n=i.out;i=null,n(e)}}var o,i,a=1/0,s=1/0,c=Date.now(),u=.2,d={};document.addEventListener("mousemove",n),document.addEventListener("mouseout",r),e.exports=t}});