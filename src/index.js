(() => {
  const refs = {
    menuBtn: document.querySelector("[data-menu-button]"),
    mobileMenu: document.querySelector("[data-menu]"),
    arrModalOpeners: document.querySelectorAll("[data-btn-open]"),
    backdrop: document.querySelector("[data-modal]"),
    arrBtnClose: document.querySelectorAll(".btn-close"),
    arrMenuItems: document.querySelectorAll(".nav__link"),
    btnGotoTop: document.querySelector("[data-goto-top]"),
  };

  if (refs.menuBtn)
    refs.menuBtn.addEventListener('click', toggleMenu);
  if (refs.backdrop && refs.arrBtnClose && refs.arrModalOpeners) {
    refs.arrModalOpeners.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modalClass = btn.getAttribute('data-btn-open');
        if (modalClass.length == 0) return;
        refs.backdrop.setAttribute('data-modal', modalClass);
        const modalElement = document.querySelector(`.${modalClass}`);
        if (modalElement)
          modalElement.addEventListener('click', (e) => (e.stopPropagation()));
        document.body.classList.add('no-scroll');

        if (refs.menuBtn.classList.contains('is-open')) {
          refs.menuBtn.classList.remove("is-open");
          refs.menuBtn.setAttribute("aria-expanded", 'false');
          refs.mobileMenu.classList.remove("is-open");
          document.body.classList.remove("menu-opened");
        }
      })
    })
    refs.arrBtnClose.forEach(btn => (btn.addEventListener('click', () => {
      refs.backdrop.setAttribute('data-modal', '');
      document.body.classList.remove('no-scroll');
    })));
    refs.backdrop.addEventListener('click', () => {
      refs.backdrop.setAttribute('data-modal', '');
      document.body.classList.remove('no-scroll');
    });
  }

  if (refs.arrMenuItems)
    refs.arrMenuItems.forEach((item) => {
      item.addEventListener('click', toggleMenu)
    })

  if (refs.btnGotoTop)
    refs.btnGotoTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    })

  function toggleMenu() {
    if (window.matchMedia("(min-width: 1280px)").matches) return;
    const expanded = refs.menuBtn.getAttribute("aria-expanded") == "true" | false;
    refs.menuBtn.classList.toggle("is-open");
    refs.menuBtn.setAttribute("aria-expanded", !expanded);
    refs.mobileMenu.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
    document.body.classList.toggle("menu-opened");
  }

  window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      refs.btnGotoTop.classList.remove('goto-top--hide');
    } else {
      refs.btnGotoTop.classList.add('goto-top--hide');
    }
  };

})();

$('.reviews__slider').slick({
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  customPaging: function (slider, i) {
    return '<button class="sl-link"><div class="sl-inner"></div></button>';
  },
});
