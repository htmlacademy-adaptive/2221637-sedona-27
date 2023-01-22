let navToggleWrapper = document.querySelector('.site-navigation__toggle-wrapper');
let navList = document.querySelector('.site-navigation-list');
let Logo = document.querySelector('.header__logo');
let navListWrapper = document.querySelector('.site-navigation__list-wrapper');
let navToggle = document.querySelector('.site-navigation__toggle');


let mapFrame = document.querySelector('.map__frame');
let mapImage = document.querySelector('.map__image');

navList.classList.remove('site-navigation-list--no-js');
navToggleWrapper.classList.remove('site-navigation__toggle-wrapper--no-js');
Logo.classList.remove('header__logo--no-js');
navListWrapper.classList.remove('site-navigation__list-wrapper--no-js');

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

mapFrame.classList.remove('map__frame--no-js');
mapImage.classList.add('map__image--js');
