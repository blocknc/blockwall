document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('[data-recaptcha-el="form-block"]').forEach((e=>{const t=e.querySelector("form"),a=e.querySelector('[data-recaptcha-el="success"]'),l=e.querySelector('[data-recaptcha-el="error"]'),o=t.querySelector('[type="submit"]'),r=t.querySelectorAll('input[type="url"]'),n=e.getAttribute("data-recaptcha-loadingtext")||"Loading...",c=o.value;if("hide"===e.getAttribute("data-recaptcha-badge")){const e=document.createElement("style");e.innerHTML=".grecaptcha-badge { visibility: hidden; }",document.head.appendChild(e)}r.forEach((e=>{e.addEventListener("blur",(function(){let t=e.value.trim();const a=e.closest(".url-input-container");t.match(/^https?:\/\//i)?(a&&a.style.setProperty("--before-content","none"),e.classList.remove("has-placeholder")):t.length>0?(e.value="https://"+t,a&&a.style.setProperty("--before-content","none"),e.classList.remove("has-placeholder")):(a&&a.style.removeProperty("--before-content"),e.classList.add("has-placeholder"),e.style.paddingLeft="var(--size--5rem)")})),e.addEventListener("input",(function(){let t=e.value.trim();const a=e.closest(".url-input-container");""===t?(a&&a.style.removeProperty("--before-content"),e.classList.add("has-placeholder"),e.style.paddingLeft="var(--size--5rem)"):e.classList.add("has-placeholder")}))})),t.addEventListener("submit",(function(e){e.preventDefault(),r.forEach((e=>{let t=e.value.trim();!t.match(/^https?:\/\//i)&&t.length>0&&(e.value="https://"+t)})),async function(){o.value=n;try{const e=await grecaptcha.execute("6Le_XUsqAAAAAKxtXMXAISRCGcFxUmoo5K22DRAG",{action:"submit"});let r={};new FormData(t).forEach(((e,t)=>{r[t]=e}));const n=await fetch("https://blockwall-recaptcha.netlify.app/.netlify/functions/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,formData:r})});o.value=c,n.ok?(a.style.display="block",l.style.display="none"):(a.style.display="none",l.style.display="block")}catch(e){o.value=c,console.error("Error:",e),a.style.display="none",l.style.display="block"}}()}))}))}));
