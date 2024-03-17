import{S as m,A as v,i as u}from"./assets/vendor-b560a502.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();new m(".swiper-about",{direction:"horizontal",loop:!0,speed:500,navigation:{nextEl:".about-me-skills-button"},breakpoints:{320:{slidesPerView:2,spaceBetween:0},678:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0}});new v(".accordion-container-about");accordion.open(0);const E=document.querySelector(".benefits-button"),k=document.getElementById("work-together-section");E.addEventListener("click",()=>{k.scrollIntoView({behavior:"smooth"})});new m(".swiper1",{direction:"horizontal",spaceBetween:16,navigation:{nextEl:".right-btn1",prevEl:".left-btn1"},speed:750,keyboard:{enabled:!0},grabCursor:!0,simulateTouch:!0});const C=document.querySelector(".container"),w=document.querySelector(".reviews-list"),f=document.querySelector(".not-found");function g(){const e=C.clientWidth;if(e===375)return 1;if(e===768)return 2;if(e===1440)return 4}const p=new m(".swiper2",{direction:"horizontal",slidesPerView:g(),spaceBetween:16,scrollbar:{el:".swiper-scrollbar",hide:!0},navigation:{nextEl:".right-btn2",prevEl:".left-btn2"},speed:750,keyboard:{enabled:!0},grabCursor:!0,simulateTouch:!0});function S(){p.params.slidesPerView=g(),p.update()}window.addEventListener("resize",S);async function L(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`Error ${e.status}`);const t=await e.json();x(t),f.classList.add("visually-hidden")}catch{f.classList.remove("visually-hidden"),u.error({title:"Error",message:"Failed to fetch reviews from server",position:"bottomRight"})}}function q(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function y(){q(w)&&(L(),window.removeEventListener("scroll",y))}window.addEventListener("scroll",y);const x=e=>{e.forEach(t=>{const n=`<li class="reviews-item swiper-slide">
      <img class="img-reviews" src="${t.avatar_url}" alt="reviews" loading="lazy" width="48" height="48"/>
      <h3 class="reviews-head">${t.author}</h3>
      <p class="reviews-text">${t.review}</p>  
    </li>`;w.insertAdjacentHTML("beforeend",n)})};function B(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}const P=document.querySelectorAll(".marquee__inner");P.forEach(e=>{const t=Array.from(e.children),n=B(t);e.innerHTML="",n.forEach(i=>{e.appendChild(i)})});const a=document.querySelector(".work-together-input-email"),l=document.querySelector(".work-together-comments"),b=document.querySelector(".work-together-subscribe"),s=document.querySelector(".label-input-email"),c=document.querySelector(".work-together-backdrop"),A=document.querySelector(".work-together-modal-head-text"),T=document.querySelector(".work-together-invitation"),z=document.querySelector(".work-together-modal-close-x-btn");b.addEventListener("submit",I);function I(e){e.preventDefault();const t=e.target.elements.email.value.trim(),n=e.target.elements.comments.value.trim(),i="https://portfolio-js.b.goit.study/api/requests",r={email:`${t}`,comment:`${n}`};return fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(o=>o.ok?o.json():u.error({title:"Error",message:"Sorry, try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"bottomRight"})).then(o=>{c.classList.remove("visually-hidden"),c.style.display="block",A.textContent=o.title,T.textContent=o.message,b.reset(),s.textContent="",a.style.borderBottomColor="rgba(250, 250, 250, 0.20)"}).catch(o=>u.error({title:"Error",message:"Sorry,  network is fall, check your modem and try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"bottomRight"}))}a.addEventListener("blur",O);function O(e){const t=e.target.value.trim(),n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;t!==""&&(n.test(t)?(s.textContent="Succes!",a.style.borderBottomColor="#3CBC81",s.style.color="#3CBC81"):(s.textContent="Invalid email, try again",a.style.borderBottomColor="#E74A3B",s.style.color="#E74A3B"))}l.addEventListener("input",R);function R(e){const t=parseInt(this.getAttribute("maxlength")),n=e.target.value.trim();n>t&&(n=n.slice(0,t)),l.style.whiteSpace="nowrap",l.style.overflow="hidden",l.style.textOverflow="ellipsis"}z.addEventListener("click",h);c.addEventListener("click",h);document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key==="Esc"||e.code===27)&&h()});function h(){c.classList.add("visually-hidden"),c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map