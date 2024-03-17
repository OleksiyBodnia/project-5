import{A as p,S as m,i as u}from"./assets/vendor-b560a502.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const v=document.querySelector(".header__container"),E=document.querySelector(".borger"),L=document.querySelector(".menu__title"),k=document.querySelector(".header__menu"),S=document.querySelector("body");E.addEventListener("click",()=>{v.classList.toggle("open"),S.classList.toggle("lock")});L.addEventListener("click",()=>{k.classList.toggle("open")});new p(".accordion-container-faq",{duration:400,showMultiple:!0});const q=document.querySelectorAll(".faq-show-hidden-text-button");q.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq-button-icon").classList.toggle("arrow-up")})});new m(".swiper-about",{loop:!0,speed:750,navigation:{nextEl:".about-me-skills-button"},grabCursor:!0,simulateTouch:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2,spaceBetween:0},678:{slidesPerView:3},1440:{slidesPerView:6}},on:{init:function(){const e=this.activeIndex;this.slides.forEach((t,o)=>{o===e?t.classList.add("active-slide"):t.classList.remove("active-slide")})},slideChange:function(){const e=this.activeIndex;this.slides.forEach((t,o)=>{o===e?t.classList.add("active-slide"):t.classList.remove("active-slide")})}}});const C=new p(".accordion-container-about",{duration:700,showMultiple:!0});C.open(0);const x=document.querySelector(".benefits-button"),B=document.getElementById("work-together-section");x.addEventListener("click",()=>{B.scrollIntoView({behavior:"smooth"})});new m(".swiper1",{direction:"horizontal",spaceBetween:16,navigation:{nextEl:".right-btn1",prevEl:".left-btn1"},speed:750,keyboard:{enabled:!0},grabCursor:!0,simulateTouch:!0});const I=document.querySelector(".container"),A=document.querySelector(".reviews-list"),f=document.querySelector(".not-found");function y(){const e=I.clientWidth;if(e===375)return 1;if(e===768)return 2;if(e===1440)return 4}const g=new m(".swiper2",{direction:"horizontal",slidesPerView:y(),spaceBetween:16,scrollbar:{el:".swiper-scrollbar",hide:!0},navigation:{nextEl:".right-btn2",prevEl:".left-btn2"},speed:750,keyboard:{enabled:!0},grabCursor:!0,simulateTouch:!0});function P(){g.params.slidesPerView=y(),g.update()}window.addEventListener("resize",P);async function T(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`Error ${e.status}`);const t=await e.json();O(t),f.classList.add("visually-hidden")}catch{f.classList.remove("visually-hidden"),u.error({title:"Error",message:"Failed to fetch reviews from server",position:"bottomRight"})}}const O=e=>{e.forEach(t=>{const o=`<li class="reviews-item swiper-slide">
      <img class="img-reviews" src="${t.avatar_url}" alt="reviews" loading="lazy" width="48" height="48"/>
      <h3 class="reviews-head">${t.author}</h3>
      <p class="reviews-text">${t.review}</p>  
    </li>`;A.insertAdjacentHTML("beforeend",o)})};T();function _(e){for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}const z=document.querySelectorAll(".marquee__inner");z.forEach(e=>{const t=Array.from(e.children),o=_(t);e.innerHTML="",o.forEach(s=>{e.appendChild(s)})});const a=document.querySelector(".work-together-input-email"),l=document.querySelector(".work-together-comments"),w=document.querySelector(".work-together-subscribe"),i=document.querySelector(".label-input-email"),c=document.querySelector(".work-together-backdrop"),b=document.querySelector(".modal-backdrop-bg"),M=document.querySelector(".work-together-modal-head-text"),j=document.querySelector(".work-together-invitation"),R=document.querySelector(".work-together-modal-close-x-btn");w.addEventListener("submit",V);function V(e){e.preventDefault();const t=e.target.elements.email.value.trim(),o=e.target.elements.comments.value.trim(),s="https://portfolio-js.b.goit.study/api/requests",n={email:`${t}`,comment:`${o}`};return fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(r=>r.ok?r.json():u.error({title:"Error",message:"Sorry, try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"bottomRight"})).then(r=>{c.classList.remove("visually-hidden"),c.style.display="block",b.classList.remove("visually-hidden"),M.textContent=r.title,j.textContent=r.message,w.reset(),i.textContent="",a.style.borderBottomColor="rgba(250, 250, 250, 0.20)"}).catch(r=>u.error({title:"Error",message:"Sorry,  network is fall, check your modem and try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"bottomRight"}))}a.addEventListener("blur",$);function $(e){const t=e.target.value.trim(),o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;t!==""&&(o.test(t)?(i.textContent="Succes!",a.style.borderBottomColor="#3CBC81",i.style.color="#3CBC81"):(i.textContent="Invalid email, try again",a.style.borderBottomColor="#E74A3B",i.style.color="#E74A3B"))}l.addEventListener("input",F);function F(e){const t=parseInt(this.getAttribute("maxlength")),o=e.target.value.trim();o>t&&(o=o.slice(0,t)),l.style.whiteSpace="nowrap",l.style.overflow="hidden",l.style.textOverflow="ellipsis"}R.addEventListener("click",h);c.addEventListener("click",h);document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key==="Esc"||e.code===27)&&h()});function h(){c.classList.add("visually-hidden"),c.style.display="none",b.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
