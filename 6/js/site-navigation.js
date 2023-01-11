let navToggle = document.querySelector('.site-navigation__toggle');
let navList = document.querySelector('.site-navigation-list');

navList.classList.remove('site-navigation-list--no-js');
navToggle.classList.remove('site-navigation__toggle--no-js');
navList.classList.add('site-navigation-list--not-visible');

navToggle.onclick = function() {
  navToggle.classList.toggle('site-navigation__toggle--is-open');
  navList.classList.toggle('site-navigation-list--visible');
  if(navList.classList.contains('site-navigation-list--visible')) {
    navList.classList.remove('site-navigation-list--not-visible');
  }
  else {
    navList.classList.add('site-navigation-list--not-visible');
  }

}
