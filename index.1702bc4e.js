!function(){var n={btnBack:document.querySelector("#heroSlaiderNext"),btnNext:document.querySelector("#heroSlaiderBack"),btnLink:document.getElementById("sliderLinkBtn"),titelSpan:document.getElementById("heroTitelSpan"),slider:Array.from(document.getElementById("slider").children),number:Array.from(document.querySelector(".hero-text-count").children)};n.btnNext.addEventListener("click",(function(){e=e+1===t?0:e=e+=1,r()})),n.btnBack.addEventListener("click",(function(){e=0===e?t-1:e-=1,r()}));var e=0,t=n.slider.length;function r(){var r,i=(r={},n.slider.forEach((function(n,t){if(e===t)return n.classList.remove("hidden"),r.titel=n.children[2].alt,void(r.url=n.children[2].dataset.modal);n.classList.add("hidden")})),r),c=i.titel,d=i.url;!function(e){n.titelSpan.innerHTML=e}(c),function(){var r=e+1;if(r-1==0&&t>r)return n.number[0].innerHTML="0".concat(t),void(n.number[2].innerHTML="0".concat(r+1));if(r-1!=0&&r===t)return n.number[0].innerHTML="0".concat(r-1),void(n.number[2].innerHTML="01");if(r-1!=0&&r!==t)n.number[0].innerHTML="0".concat(r-1),n.number[2].innerHTML="0".concat(r+1)}(),function(e){n.btnLink.href=e}(d)}r()}();
//# sourceMappingURL=index.1702bc4e.js.map