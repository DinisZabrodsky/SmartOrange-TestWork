const e={btnBack:document.querySelector("#heroSlaiderNext"),btnNext:document.querySelector("#heroSlaiderBack"),btnLink:document.getElementById("sliderLinkBtn"),titelSpan:document.getElementById("heroTitelSpan"),slider:Array.from(document.getElementById("slider").children),number:Array.from(document.querySelector(".hero-text-count").children)};e.btnNext.addEventListener("click",(function(){t=n,n=n+1===e.slider.length?0:n=n+=1,r()})),e.btnBack.addEventListener("click",(function(){t=n,n=0===n?e.slider.length-1:n-=1,r()}));let n=0,t=0,i=!0;function r(){const{titel:r,url:d}=data={titel:e.slider[n].children[2].alt,url:e.slider[n].children[2].dataset.modal};!i&&(e.slider[t].classList.add("animationHiden"),setTimeout((()=>{e.slider[n].classList.remove("hidden"),e.slider[t].classList.add("hidden"),e.slider[t].classList.remove("animationHiden")}),500)),!i&&function(n){e.titelSpan.classList.add("animationHiden"),setTimeout((()=>{e.titelSpan.innerHTML=n,e.titelSpan.classList.remove("animationHiden")}),500)}(r),i&&(e.slider.forEach(((e,t)=>{n!==t?e.classList.add("hidden"):e.classList.remove("hidden")})),i=!1),function(){const t=n+1,i=e.slider.length;if(t-1==0&&i>t)return e.number[0].innerHTML=`0${i}`,void(e.number[2].innerHTML=`0${t+1}`);if(t-1!=0&&t===i)return e.number[0].innerHTML="0"+(t-1),void(e.number[2].innerHTML="01");if(t-1!=0&&t!==i)e.number[0].innerHTML="0"+(t-1),e.number[2].innerHTML=`0${t+1}`}(),function(n){e.btnLink.href=n}(d)}r();
//# sourceMappingURL=index.19c559cb.js.map
