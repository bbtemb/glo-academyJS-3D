(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),s=document.getElementById("timer-seconds");let r;const c=()=>{const e=(()=>{const e=(new Date("28 february 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.days<10?`0${e.days}`:e.days,n.textContent=e.hours<10?`0${e.hours}`:e.hours,o.textContent=e.minutes<10?`0${e.minutes}`:e.minutes,s.textContent=e.seconds<10?`0${e.seconds}`:e.seconds,e.timeRemaining<0&&(clearInterval(r),t.textContent="00",n.textContent="00",o.textContent="00",s.textContent="00")};c(),r=setInterval(c,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),s=document.querySelector("main>a"),r=()=>{t.classList.toggle("active-menu")},c=e=>{const t=e.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})};e.addEventListener("click",(()=>{screen.width>=768&&r()})),n.addEventListener("click",r),s.addEventListener("click",(e=>{e.preventDefault(),c(s)})),o.forEach((e=>e.addEventListener("click",(t=>{t.preventDefault(),r(),c(e)}))))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-close");n.forEach((n=>{n.addEventListener("click",(()=>{e.style.display="block",screen.width>=768&&((()=>{let t=0;const n=()=>{t+=.05,e.style.opacity=t,t<1&&requestAnimationFrame(n)};requestAnimationFrame(n)})(),(()=>{let e=-10;t.style.left=`${e}%`;const n=()=>{e+=3,t.style.left=`${e}%`,e<=38&&requestAnimationFrame(n)};requestAnimationFrame(n)})())}))})),o.addEventListener("click",(()=>{e.style.display="none"}))})()})();