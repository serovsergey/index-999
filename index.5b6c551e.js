!function(){var e={menuBtn:document.querySelector("[data-menu-button]"),mobileMenu:document.querySelector("[data-menu]"),arrModalOpeners:document.querySelectorAll("[data-btn-open]"),backdrop:document.querySelector("[data-modal]"),arrBtnClose:document.querySelectorAll(".btn-close"),arrMenuItems:document.querySelectorAll(".nav__link")};function t(){if(!(document.body.clientWidth>=1280)){var t="true"==e.menuBtn.getAttribute("aria-expanded")|!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!t),e.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")}}e.menuBtn&&e.menuBtn.addEventListener("click",t),e.backdrop&&e.arrBtnClose&&e.arrModalOpeners&&(e.arrModalOpeners.forEach((function(t){t.addEventListener("click",(function(){var n=t.getAttribute("data-btn-open");if(0!=n.length){e.backdrop.setAttribute("data-modal",n);var o=document.querySelector(".".concat(n));o&&o.addEventListener("click",(function(e){return e.stopPropagation()})),document.body.classList.add("no-scroll"),e.menuBtn.classList.contains("is-open")&&(e.menuBtn.classList.remove("is-open"),e.menuBtn.setAttribute("aria-expanded","false"),e.mobileMenu.classList.remove("is-open"))}}))})),e.arrBtnClose.forEach((function(t){return t.addEventListener("click",(function(){e.backdrop.setAttribute("data-modal",""),document.body.classList.remove("no-scroll")}))})),e.backdrop.addEventListener("click",(function(){e.backdrop.setAttribute("data-modal",""),document.body.classList.remove("no-scroll")}))),e.arrMenuItems&&e.arrMenuItems.forEach((function(e){e.addEventListener("click",t)}))}();
//# sourceMappingURL=index.5b6c551e.js.map
