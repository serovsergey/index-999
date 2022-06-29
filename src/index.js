(() => {
  const refs = {
    menuBtn: document.querySelector("[data-menu-button]"),
    mobileMenu: document.querySelector("[data-menu]"),
    btnLocations: document.querySelector("[data-btn-locations]"),
    btnFranchise: document.querySelector("[data-btn-franchise]"),
    backdrop: document.querySelector("[data-modal]"),
    btnCloseModal: document.querySelectorAll(".btn-close"),
  };

  if (refs.menuBtn)
    refs.menuBtn.addEventListener('click', toggleMenu);
  if (refs.backdrop && refs.btnCloseModal) {
    console.log(refs.btnCloseModal);
    if (refs.btnLocations)
      refs.btnLocations.addEventListener('click', () => (refs.backdrop.setAttribute('data-modal', 'locations')));
    if (refs.btnFranchise)
      refs.btnFranchise.addEventListener('click', () => (refs.backdrop.setAttribute('data-modal', 'franchise')));
    refs.btnCloseModal.forEach(btn => (btn.addEventListener('click', () => (refs.backdrop.setAttribute('data-modal', '')))));
  }


  function toggleMenu() {
    const expanded = refs.menuBtn.getAttribute("aria-expanded") == "true" | false;
    refs.menuBtn.classList.toggle("is-open");
    refs.menuBtn.setAttribute("aria-expanded", !expanded);
    refs.mobileMenu.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  }
})();