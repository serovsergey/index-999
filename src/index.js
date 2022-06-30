(() => {
  const refs = {
    menuBtn: document.querySelector("[data-menu-button]"),
    mobileMenu: document.querySelector("[data-menu]"),
    arrModalOpeners: document.querySelectorAll("[data-btn-open]"),
    backdrop: document.querySelector("[data-modal]"),
    arrBtnClose: document.querySelectorAll(".btn-close"),
    arrMenuItems: document.querySelectorAll(".nav__link"),
  };

  if (refs.menuBtn)
    refs.menuBtn.addEventListener('click', toggleMenu);
  if (refs.backdrop && refs.arrBtnClose && refs.arrModalOpeners) {
    refs.arrModalOpeners.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modalClass = btn.getAttribute('data-btn-open');
        refs.backdrop.setAttribute('data-modal', modalClass);
        const modalElement = document.querySelector(`.${modalClass}`);
        if (modalElement)
          modalElement.addEventListener('click', (e) => (e.stopPropagation()));
        document.body.classList.add('no-scroll');
        if (refs.menuBtn.classList.contains('is-open')) {
          refs.menuBtn.classList.remove("is-open");
          refs.menuBtn.setAttribute("aria-expanded", 'false');
          refs.mobileMenu.classList.remove("is-open");
        }
      })
    })
    refs.arrBtnClose.forEach(btn => (btn.addEventListener('click', () => {
      refs.backdrop.setAttribute('data-modal', '');
      document.body.classList.remove('no-scroll');
    })));
    refs.backdrop.addEventListener('click', (e) => (refs.backdrop.setAttribute('data-modal', '')));
  }

  if (refs.arrMenuItems)
    refs.arrMenuItems.forEach((item) => {
      item.addEventListener('click', toggleMenu)
    })

  function toggleMenu() {
    if (document.body.clientWidth >= 1280) return;
    const expanded = refs.menuBtn.getAttribute("aria-expanded") == "true" | false;
    refs.menuBtn.classList.toggle("is-open");
    refs.menuBtn.setAttribute("aria-expanded", !expanded);
    refs.mobileMenu.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  }
})();