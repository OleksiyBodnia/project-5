import{A as a,S as u}from"./assets/vendor-bbb3eb8c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const f=new a(".accordion-container",{});f.open(1);const l=document.querySelector(".about-me-button-up");document.querySelectorAll(".about-me-button-up");const s=document.querySelector(".about-me-button-down");document.querySelectorAll(".about-me-button-down");document.querySelectorAll(".ac-panel");const d=document.querySelector(".ac-panel");l.addEventListener("click",m);s.addEventListener("click",p);d.classList.add("visually-hidden");s.classList.add("is-hidden");function m(){s.classList.remove("is-hidden"),l.classList.add("is-hidden"),d.classList.remove("visually-hidden")}function p(){s.classList.add("is-hidden"),l.classList.remove("is-hidden"),d.classList.add("visually-hidden")}new u(".swiper1",{direction:"horizontal",navigation:{nextEl:".right-btn1",prevEl:".left-btn1"},speed:500,keyboard:{enabled:!0},grabCursor:!0,simulateTouch:!0});new u(".swiper",{direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:500,keyboard:{enabled:!0},grabCursor:!0,simulateTouch:!0});function h(t){for(let o=t.length-1;o>0;o--){const r=Math.floor(Math.random()*(o+1));[t[o],t[r]]=[t[r],t[o]]}return t}const b=document.querySelectorAll(".marquee__inner");b.forEach(t=>{const o=Array.from(t.children),r=h(o);t.innerHTML="",r.forEach(i=>{t.appendChild(i)})});
//# sourceMappingURL=commonHelpers.js.map
