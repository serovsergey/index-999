(()=>{const e={menuBtn:document.querySelector("[data-menu-button]"),mobileMenu:document.querySelector("[data-menu]"),arrModalOpeners:document.querySelectorAll("[data-btn-open]"),backdrop:document.querySelector("[data-modal]"),arrBtnClose:document.querySelectorAll(".btn-close"),arrMenuItems:document.querySelectorAll(".nav__link")};function t(){if(document.body.clientWidth>=1280)return;const t="true"==e.menuBtn.getAttribute("aria-expanded")|!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!t),e.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")}e.menuBtn&&e.menuBtn.addEventListener("click",t),e.backdrop&&e.arrBtnClose&&e.arrModalOpeners&&(e.arrModalOpeners.forEach((t=>{t.addEventListener("click",(()=>{const n=t.getAttribute("data-btn-open");if(0==n.length)return;e.backdrop.setAttribute("data-modal",n);const o=document.querySelector(`.${n}`);o&&o.addEventListener("click",(e=>e.stopPropagation())),document.body.classList.add("no-scroll"),e.menuBtn.classList.contains("is-open")&&(e.menuBtn.classList.remove("is-open"),e.menuBtn.setAttribute("aria-expanded","false"),e.mobileMenu.classList.remove("is-open"))}))})),e.arrBtnClose.forEach((t=>t.addEventListener("click",(()=>{e.backdrop.setAttribute("data-modal",""),document.body.classList.remove("no-scroll")})))),e.backdrop.addEventListener("click",(()=>{e.backdrop.setAttribute("data-modal",""),document.body.classList.remove("no-scroll")}))),e.arrMenuItems&&e.arrMenuItems.forEach((e=>{e.addEventListener("click",t)}))})();
//# sourceMappingURL=index.4015c1be.js.map
