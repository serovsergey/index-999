(() => {
  const refs = {
    menuBtn: document.querySelector("[data-menu-button]"),
    mobileMenu: document.querySelector("[data-menu]"),
  };

  if (refs.menuBtn)
    refs.menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const expanded = refs.menuBtn.getAttribute("aria-expanded") == "true" | false;
    refs.menuBtn.classList.toggle("is-open");
    refs.menuBtn.setAttribute("aria-expanded", !expanded);
    refs.mobileMenu.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  }
})();