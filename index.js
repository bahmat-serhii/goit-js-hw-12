import{a as q,S as v,i as c}from"./assets/vendor-DtOuICiv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const E="49539740-9fa855f5a07e4e22441b65a56",P="https://pixabay.com/api/",M=15;async function g(t,e=1){try{return(await q.get(P,{params:{key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:M,page:e}})).data}catch{throw new Error("Failed to fetch images. Please try again later.")}}const p=document.querySelector(".gallery");function h(t){const e=t.map(({webformatURL:s,largeImageURL:n,tags:r,likes:o,views:i,comments:S,downloads:w})=>`<li class="photo-card">
          <a href="${n}">
            <img class="photo-img" src="${s}" alt="${r}" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${o}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${i}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${S}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${w}
            </p>
          </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",e),new v(".gallery a").refresh()}function $(){p.innerHTML=""}function d(t){const e=document.querySelector(".loader");t?e.classList.remove("hidden"):e.classList.add("hidden")}function u(t){const e=document.querySelector(".load-more");t?e.classList.remove("hidden"):e.classList.add("hidden")}function B(){const t=document.querySelector(".gallery").firstElementChild;if(!t)return;const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function y(t,e,s){e*s>=t?(u(!1),c.info({message:"We're sorry, but you've reached the end of search results."})):u(!0)}const L=document.querySelector(".form"),m=L.querySelector("input"),O=document.querySelector(".load-more");let l="",a=1;const b=15;let f=0;L.addEventListener("submit",async t=>{if(t.preventDefault(),l=m.value.trim(),m.value="",!l){c.error({title:"Error",message:"Please enter a search term!"});return}a=1,$(),d(!0),u(!1);try{const e=await g(l,a);f=e.totalHits,e.hits.length===0?c.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):(h(e.hits),y(f,a,b))}catch{c.error({title:"Error",message:"Something went wrong!"})}finally{d(!1)}});O.addEventListener("click",async()=>{a+=1,d(!0);try{const t=await g(l,a);h(t.hits),B(),y(f,a,b)}catch{c.error({title:"Error",message:"Something went wrong!"})}finally{d(!1)}});const A=document.querySelector("button");A.classList.add("form-btn");const H=document.querySelector("input");H.classList.add("form-input");const I=document.querySelector(".load-more");I.classList.add("form-btn-more");
//# sourceMappingURL=index.js.map
