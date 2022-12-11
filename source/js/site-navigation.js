document.querySelector('.site-navigation__toggle').onclick = function() {
  document.querySelector('.site-navigation__toggle').classList.toggle('site-navigation__toggle--is-open');
  document.querySelector('.site-navigation-list').classList.toggle('site-navigation-list--visible');
  if(document.querySelector('.site-navigation-list').classList.contains('site-navigation-list--visible')) {
    document.querySelector('.site-navigation-list').classList.remove('site-navigation-list--not-visible');
  }
  else {
    document.querySelector('.site-navigation-list').classList.add('site-navigation-list--not-visible');
  }

}
