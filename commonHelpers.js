import{A as v,S as f,i as m}from"./assets/vendor-b560a502.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const E=document.querySelector(".menu__title"),S=document.querySelector(".menu__list"),q=document.querySelectorAll(".smooth-scroll"),C=document.querySelector(".close-btn-header"),i=document.querySelector(".mobile-menu-header"),x=document.querySelector(".burger"),B=document.querySelectorAll(".mobile-menu-item-link"),M=document.querySelector(".link-wt"),A=document.querySelector(".header__logo"),h=document.querySelector(".header-section");window.addEventListener("scroll",function(){window.scrollY>0?h.classList.add("scrolled"):h.classList.remove("scrolled")});q.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=this.getAttribute("href"),n=document.querySelector(o);n&&n.scrollIntoView({behavior:"smooth",block:"start"})})});E.addEventListener("click",function(){S.classList.toggle("show"),h.classList.toggle("show")});C.addEventListener("click",function(){i.classList.add("closeMenu"),i.classList.remove("showMenu"),document.querySelector("body").classList.toggle("lock")});x.addEventListener("click",function(){i.classList.add("showMenu"),i.classList.remove("closeMenu"),document.querySelector("body").classList.toggle("lock")});B.forEach(e=>e.addEventListener("click",function(){i.classList.add("closeMenu"),i.classList.remove("showMenu"),document.querySelector("body").classList.toggle("lock")}));M.addEventListener("click",function(){i.classList.add("closeMenu"),i.classList.remove("showMenu"),document.querySelector("body").classList.toggle("lock")});A.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});new v(".accordion-container-faq",{duration:400,showMultiple:!0});const I=document.querySelectorAll(".faq-show-hidden-text-button");I.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq-button-icon").classList.toggle("arrow-up")})});new f(".swiper-about",{loop:!0,speed:750,navigation:{nextEl:".about-me-skills-button"},grabCursor:!0,simulateTouch:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2,spaceBetween:0},678:{slidesPerView:3},1440:{slidesPerView:6}},on:{init:function(){const e=this.activeIndex;this.slides.forEach((t,o)=>{o===e?t.classList.add("active-slide"):t.classList.remove("active-slide")})},slideChange:function(){const e=this.activeIndex;this.slides.forEach((t,o)=>{o===e?t.classList.add("active-slide"):t.classList.remove("active-slide")})}}});const T=new v(".accordion-container-about",{duration:700,showMultiple:!0});T.open(0);new f(".swiper1",{direction:"horizontal",spaceBetween:16,navigation:{nextEl:".right-btn1",prevEl:".left-btn1"},speed:750,keyboard:{enabled:!0},grabCursor:!0,simulateTouch:!0});const P=document.querySelector(".container"),O=document.querySelector(".reviews-list"),p=document.querySelector(".not-found");function b(){const e=P.clientWidth;if(e===375)return 1;if(e===768)return 2;if(e===1440)return 4}const w=new f(".swiper2",{direction:"horizontal",slidesPerView:b(),spaceBetween:16,scrollbar:{el:".swiper-scrollbar",hide:!0},navigation:{nextEl:".right-btn2",prevEl:".left-btn2"},speed:750,keyboard:{enabled:!0},grabCursor:!0,simulateTouch:!0});function _(){w.params.slidesPerView=b(),w.update()}window.addEventListener("resize",_);async function z(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`Error ${e.status}`);const t=await e.json();j(t),p.classList.add("visually-hidden")}catch{p.classList.remove("visually-hidden"),m.error({title:"Error",message:"Failed to fetch reviews from server",position:"bottomRight"})}}const j=e=>{e.forEach(t=>{const o=`<li class="reviews-item swiper-slide">
      <img class="img-reviews" src="${t.avatar_url}" alt="reviews" loading="lazy" width="48" height="48"/>
      <h3 class="reviews-head">${t.author}</h3>
      <p class="reviews-text">${t.review}</p>  
    </li>`;O.insertAdjacentHTML("beforeend",o)})};z();function R(e){for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}const V=document.querySelectorAll(".marquee__inner");V.forEach(e=>{const t=Array.from(e.children),o=R(t);e.innerHTML="",o.forEach(n=>{e.appendChild(n)})});const a=document.querySelector(".work-together-input-email"),l=document.querySelector(".work-together-comments"),L=document.querySelector(".work-together-subscribe"),c=document.querySelector(".label-input-email"),d=document.querySelector(".work-together-backdrop"),g=document.querySelector(".modal-backdrop-bg"),$=document.querySelector(".work-together-modal-head-text"),F=document.querySelector(".work-together-invitation"),H=document.querySelector(".work-together-modal-close-x-btn"),k=document.body;L.addEventListener("submit",N);function N(e){e.preventDefault();const t=e.target.elements.email.value.trim(),o=e.target.elements.comments.value.trim(),n="https://portfolio-js.b.goit.study/api/requests",s={email:`${t}`,comment:`${o}`};return fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(r=>r.ok?r.json():m.error({title:"Error",message:"Sorry, try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"bottomRight"})).then(r=>{d.classList.remove("visually-hidden"),d.style.display="block",g.classList.remove("visually-hidden"),k.classList.add("modal-open"),$.textContent=r.title,F.textContent=r.message,L.reset(),c.textContent="",a.style.borderBottomColor="rgba(250, 250, 250, 0.20)"}).catch(r=>m.error({title:"Error",message:"Sorry,  network is fall, check your modem and try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"bottomRight"}))}a.addEventListener("blur",D);function D(e){const t=e.target.value.trim(),o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;t!==""&&(o.test(t)?(c.textContent="Succes!",a.style.borderBottomColor="#3CBC81",c.style.color="#3CBC81"):(c.textContent="Invalid email, try again",a.style.borderBottomColor="#E74A3B",c.style.color="#E74A3B"))}l.addEventListener("input",W);function W(e){const t=parseInt(this.getAttribute("maxlength")),o=e.target.value.trim();o>t&&(o=o.slice(0,t)),l.style.whiteSpace="nowrap",l.style.overflow="hidden",l.style.textOverflow="ellipsis"}H.addEventListener("click",y);g.addEventListener("click",y);document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key==="Esc"||e.code===27)&&y()});function y(){d.classList.add("visually-hidden"),d.style.display="none",g.classList.add("visually-hidden"),k.classList.remove("modal-open")}
//# sourceMappingURL=commonHelpers.js.map
