export default () => {
  const headerBottom = document.querySelector('[data-attr="header__bottom"]');

  document.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      headerBottom.classList.add('header__bottom--close');
    } else {
      headerBottom.classList.remove('header__bottom--close');
    }
  });
}