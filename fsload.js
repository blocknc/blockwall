(()=>{"use strict";var t,e={183:(t,e,n)=>{function a(){document.querySelectorAll("[data-btn-animate]").forEach((t=>{const e=t.dataset.btnAnimate;if(!e)return;const n=t.querySelector(e);n&&n&&(t.addEventListener("mouseenter",(()=>{i(n)})),("ontouchstart"in window||navigator.maxTouchPoints>0)&&t.addEventListener("click",(()=>{i(n)})))}))}function o(t,e,n,a=!0,o="forward",i=!1,r=null,s=1.1,c=1500){const d=t.dataset.originalText||t.textContent;if(t.dataset.originalText=d,i||!t.querySelector(".char-box")){t.innerHTML="";for(let e of d){const n=document.createElement("span");n.className="char-box";const a=document.createElement("span");a.className="char",a.innerHTML=i?"":" "===e?"&nbsp;":e,n.appendChild(a),t.appendChild(n)}}const l=Array.from(t.children);t.style.display="inline-block",i&&l.forEach((t=>t.style.opacity="0")),r=c?c/l.length:r||n/l.length,function n(c,u){if(c>=l.length||c<0)return void(t.dataset.animating="false");const m=l[c],f=m.querySelector(".char");if(a){let t=m.querySelector(".bg-box");t||(t=document.createElement("span"),t.className="bg-box",m.insertBefore(t,f)),t.style.opacity="1"}const p=r/u,h=Date.now();requestAnimationFrame((function t(){const r=Date.now()-h,l=Math.min(r/p,1);l<1?(f.textContent=e(),i&&l>0&&(m.style.opacity="1"),requestAnimationFrame(t)):(f.innerHTML=" "===d[c]?"&nbsp;":d[c],a&&(m.querySelector(".bg-box").style.opacity="0"),n("reverse"===o?c-1:c+1,u*s))}))}("reverse"===o?l.length-1:0,1)}function i(t){document.body.classList.contains("animations-disabled")||"true"===t.dataset.hovering||(t.dataset.hovering="true",function(t){if("true"===t.dataset.animating)return;t.dataset.animating="true";const e=t.dataset.direction||"forward",n=window.randomCharacterTag;o(t,n,1700,"false"!==t.dataset.useBlocks,e,!1),setTimeout((()=>{t.dataset.animating=""}),1700)}(t),setTimeout((()=>{t.dataset.hovering="false"}),1700))}function r(t){t instanceof Element&&(t.addEventListener("mouseenter",(()=>{i(t)})),("ontouchstart"in window||navigator.maxTouchPoints>0)&&t.addEventListener("click",(()=>{i(t)})))}n.d(e,{A:()=>a}),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll('[data-hover-effect="true"]').forEach((t=>{!function(t){const e=t.dataset.originalText||t.textContent,n=document.createElement("span");n.style.visibility="hidden",n.style.position="absolute",n.style.whiteSpace="nowrap",n.innerHTML=e.replace(/ /g,"&nbsp;"),document.body.appendChild(n);const a=n.offsetWidth;document.body.removeChild(n),t.style.width=`${a}px`}(t),r(t)})),document.querySelectorAll('[data-animate-reveal="true"]').forEach((t=>{!function(t){const e=t.dataset.direction||"forward",n=window.randomCharacterTag;t.style.opacity="0",t.style.visibility="hidden",setTimeout((()=>{t.style.opacity="1",t.style.visibility="visible",o(t,n,1700,"false"!==t.dataset.useBlocks,e,!0)}),100)}(t)})),a(),function(){const t=document.querySelector(".custom-substack-widget button");if(!t)return;t.setAttribute("data-btn-animate","true");const e=t.innerText||t.textContent,n=document.createElement("span");n.className="animated-text",n.setAttribute("data-hover-effect","true"),n.setAttribute("data-direction","forward"),n.setAttribute("data-original-text",e),n.textContent=e,t.innerHTML="",t.appendChild(n),t.addEventListener("mouseenter",(()=>{i(n)})),("ontouchstart"in window||navigator.maxTouchPoints>0)&&t.addEventListener("click",(()=>{i(n)}))}()})),window.randomCharacterDate=function(){return"/()?[]0123456789".charAt(Math.floor(16*Math.random()))},window.randomCharacterTag=function(){return"ABCKLOWXabcdefghijklmnopqrstuvwxyz".charAt(Math.floor(34*Math.random()))},window.decodeEffect=o,window.hoverEffect=i,window.addHoverAndClickEffect=r}},n={};function a(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,a),i.exports}a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=a(183),document.addEventListener("DOMContentLoaded",(()=>{window.fsAttributes=window.fsAttributes||[];let e=!1,n=!1,a=!0;const o=()=>{document.querySelectorAll(".portfolio_cms_item").forEach((t=>{"true"===t.dataset.animated?t.classList.add("cms-item-initial","cms-item-hidden"):t.dataset.animated="true"}))},i=()=>{(0,t.A)()},r=()=>{document.querySelectorAll(".portfolio_cms_item").forEach((t=>{t.style.visibility="visible",t.classList.remove("cms-item-hidden"),PortfolioDecode.addHoverAndClickEffect(t)})),a?a=!1:PortfolioInteraction.animateCollectionItems(),PortfolioInteraction.initializeItemControls(),c()},s=t=>{const e=t.getAttribute("data-btn-animate");if(e){const n=t.querySelector(e);n&&(n.setAttribute("data-hover-effect","true"),addHoverAndClickEffect(n),t.addEventListener("mouseenter",(()=>{n.dispatchEvent(new Event("mouseenter"))})),t.addEventListener("mouseleave",(()=>{n.dispatchEvent(new Event("mouseleave"))})),t.addEventListener("click",(()=>{n.dispatchEvent(new Event("click"))})))}},c=()=>{const t=document.querySelector(".w-pagination-wrapper.pagination"),a=document.querySelector(".btn_main_wrap.bw-insights.is-prev"),o=document.querySelector(".btn_main_wrap.is-next");t&&!e&&(gsap.to(t,{opacity:1,duration:2.5,ease:"power2.out"}),e=!0),a&&!n&&(gsap.fromTo(a,{opacity:0},{opacity:1,duration:1}),a.classList.add("animated"),s(a),n=!0),o&&!o.classList.contains("animated")&&(gsap.fromTo(o,{opacity:0},{opacity:1,duration:1}),o.classList.add("animated"),s(o))};(()=>{const t=new MutationObserver((t=>{for(let e of t)"childList"===e.type&&e.addedNodes.length>0&&e.addedNodes.forEach((t=>{1===t.nodeType&&t.classList.contains("btn_main_wrap")&&(t.classList.contains("animated")||(gsap.fromTo(t,{opacity:0},{opacity:1,duration:1}),t.classList.add("animated"),s(t)))}))})),e=document.querySelector(".w-pagination-wrapper.pagination");e&&t.observe(e,{childList:!0,subtree:!0})})(),window.addEventListener("popstate",(()=>{o()})),window.fsAttributes.push(["cmsload",t=>{if(t&&t.length>0){const[e]=t;e&&e.on&&e.on("renderitems",(()=>{o(),setTimeout((()=>{r()}),100),c(),i()}))}o(),setTimeout((()=>{r()}),100)}]),window.fsAttributes.push(["cmsfilter",t=>{const[e]=t;e&&e.on&&e.on("filter",(()=>{o(),setTimeout((()=>{r(),c(),i()}),100)}))}])}))})();
