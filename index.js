import{a as L,S as b,i as n}from"./assets/vendor-BfjKTZs6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const w="49539740-9fa855f5a07e4e22441b65a56",S="https://pixabay.com/api/",q=15;async function f(r,e=1){try{return(await L.get(S,{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q,page:e}})).data}catch{throw new Error("Failed to fetch images. Please try again later.")}}const m=document.querySelector(".gallery");function g(r){m.innerHTML=r.map(({webformatURL:e,largeImageURL:s,tags:c,likes:t,views:o,comments:a,downloads:y})=>`<li class="photo-card">
          <a href="${s}">
            <img class="photo-img" src="${e}" alt="${c}" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${t}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${o}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${a}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${y}
            </p>
          </div>
        </li>`).join(""),new b(".gallery a").refresh()}function v(){m.innerHTML=""}function d(r){const e=document.querySelector(".loader");r?e.classList.remove("hidden"):e.classList.add("hidden")}function u(r){const e=document.querySelector(".load-more");r?e.classList.remove("hidden"):e.classList.add("hidden")}function E(){const r=document.querySelector(".gallery").firstElementChild;if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const p=document.querySelector(".form"),h=p.querySelector("input"),P=document.querySelector(".load-more");let l="",i=1;p.addEventListener("submit",async r=>{if(r.preventDefault(),l=h.value.trim(),!l){n.error({title:"Error",message:"Please enter a search term!"});return}i=1,v(),d(!0),u(!1);try{const e=await f(l,i);e.hits.length===0?n.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):(g(e.hits),u(!0))}catch{n.error({title:"Error",message:"Something went wrong!"})}finally{d(!1)}});P.addEventListener("click",async()=>{i+=1,d(!0);try{const r=await f(l,i);g(r.hits),E(),i*15>=r.totalHits&&(u(!1),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"Error",message:"Something went wrong!"})}finally{d(!1)}});h.value="";const $=document.querySelector("button");$.classList.add("form-btn");const M=document.querySelector("input");M.classList.add("form-input");
//# sourceMappingURL=index.js.map
