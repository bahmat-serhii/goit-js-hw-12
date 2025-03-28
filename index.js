import{a as L,S,i as n}from"./assets/vendor-BfjKTZs6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const w="49539740-9fa855f5a07e4e22441b65a56",q="https://pixabay.com/api/",v=15;async function m(r,e=1){try{return(await L.get(q,{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:v,page:e}})).data}catch{throw new Error("Failed to fetch images. Please try again later.")}}const g=document.querySelector(".gallery");function p(r){const e=r.map(({webformatURL:s,largeImageURL:c,tags:t,likes:o,views:a,comments:y,downloads:b})=>`<li class="photo-card">
          <a href="${c}">
            <img class="photo-img" src="${s}" alt="${t}" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${o}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${a}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${y}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${b}
            </p>
          </div>
        </li>`).join("");g.insertAdjacentHTML("beforeend",e),new S(".gallery a").refresh()}function E(){g.innerHTML=""}function d(r){const e=document.querySelector(".loader");r?e.classList.remove("hidden"):e.classList.add("hidden")}function u(r){const e=document.querySelector(".load-more");r?e.classList.remove("hidden"):e.classList.add("hidden")}function P(){const r=document.querySelector(".gallery").firstElementChild;if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const h=document.querySelector(".form"),f=h.querySelector("input"),M=document.querySelector(".load-more");let l="",i=1;h.addEventListener("submit",async r=>{if(r.preventDefault(),l=f.value.trim(),f.value="",!l){n.error({title:"Error",message:"Please enter a search term!"});return}i=1,E(),d(!0),u(!1);try{const e=await m(l,i);e.hits.length===0?n.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):(p(e.hits),u(!0))}catch{n.error({title:"Error",message:"Something went wrong!"})}finally{d(!1)}});M.addEventListener("click",async()=>{i+=1,d(!0);try{const r=await m(l,i);p(r.hits),P(),i*15>=r.totalHits&&(u(!1),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"Error",message:"Something went wrong!"})}finally{d(!1)}});const $=document.querySelector("button");$.classList.add("form-btn");const B=document.querySelector("input");B.classList.add("form-input");const O=document.querySelector(".load-more");O.classList.add("form-btn-more");
//# sourceMappingURL=index.js.map
