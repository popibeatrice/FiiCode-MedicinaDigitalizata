(()=>{"use strict";var e=document.querySelector(".meniu"),s=document.querySelector(".meniu-wrapper"),i=document.querySelector("header"),t=document.querySelector("#Logo"),o=document.querySelector("#logo_link");window.addEventListener("scroll",(function(e){i.classList.toggle("culoare",window.scrollY>0),window.scrollY>0?(t.classList.remove("xl:h-24","xl:w-24","h-20","w-20"),t.classList.add("marime","duration-300")):(t.classList.remove("marime"),t.classList.add("xl:h-24","xl:w-24","h-20","w-20","duration-300"))})),e.addEventListener("click",(function(c){t.classList.remove("duration-300"),i.classList.remove("culoare"),o.classList.toggle("invisible"),e.classList.toggle("is-active"),e.classList.contains("is-active")?(s.classList.add("opacity-[75%]"),s.classList.remove("pointer-events-none")):(s.classList.remove("opacity-[75%]"),s.classList.add("pointer-events-none"),window.scrollY>0&&i.classList.add("culoare"))})),s.addEventListener("click",(function(t){e.classList.remove("is-active"),s.classList.remove("opacity-[75%]"),o.classList.remove("invisible"),s.classList.add("pointer-events-none"),window.scrollY>0&&i.classList.add("culoare")}))})();