var filtersSelector = document.querySelector('.filters');
var filtersWrapper = document.querySelector('.rf-filters-wrapper');
var mobileNav = document.querySelector('.mobile-menu');
var mobileLinks = document.querySelector('.mobile-nav-links');
var collHeader = document.querySelector('.collection-header');
var collHeaderWrap = document.querySelector('.coll-header-wrapper');
var collHeaderFilters = document.querySelector('.head-filters');
var html = document.querySelector('html');

// function filters(){
//   if(filtersSelector) {
//     filtersWrapper.addEventListener('click', function(){
//       this.classList.toggle('clicked');
//       filtersSelector.classList.toggle('clicked');
//     });
//   }
// }

function headerFilter(){
  if(collHeader) {
    
    collHeaderWrap.addEventListener('click', function(){
      
      this.classList.toggle('clicked');
      collHeaderFilters.classList.toggle('clicked');

    });
  }
}

function menu() {
  mobileNav.addEventListener('click', function(){
    this.classList.toggle('clicked');
    mobileLinks.classList.toggle('clicked');
    html.classList.toggle('menu-open');
  });
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function swinger(){
  var pictureCheck = document.querySelector('.js-collection-products');
  var pictures = document.querySelectorAll('.js-collection-products');
  console.log('swing');

  if(pictureCheck) {
    document.addEventListener('scroll', function(){
      for(i=0; i<pictures.length; i++) {
        console.log(pictures);
        if(elementInViewport(pictures[i])) {
          pictures[i].classList.add('swing');
        } else {
          pictures[i].classList.remove('swing');
        }
      }
    });
  }
}

function init(){
  menu();
  headerFilter();
  swinger()
} init();
