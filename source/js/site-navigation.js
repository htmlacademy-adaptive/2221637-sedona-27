document.querySelector('.site-navigation__toggle').onclick = function() {
  document.querySelector('.site-navigation__toggle').classList.toggle('site-navigation__toggle--is-open');
  document.querySelector('.site-navigation-list').classList.toggle('visually-hidden');
}
