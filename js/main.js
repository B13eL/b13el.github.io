
const mobBtnMenu = document.querySelector('.switch-btn'),
  switchBtnIconOpen = document.querySelector('.switch-btn__icon-open'),
  switchBtnIconClose = document.querySelector('.switch-btn__icon-close'),
  mobMenuItems = document.querySelectorAll('.mob-menu__item');

mobBtnMenu.addEventListener('click', function () {
  switchBtnIconOpen.classList.toggle('switch-btn__icon--show');
  switchBtnIconClose.classList.toggle('switch-btn__icon--show');
});

const mobMenu = document.querySelector('.mob-menu');
const menuLogo = document.querySelector('.menu__link-logo');
const docHtml = document.querySelector('html');

mobBtnMenu.addEventListener('click', function () {
  if (mobMenu.classList.contains('mob-menu--show')) {
    mobMenu.classList.remove('mob-menu--show');
    menuLogo.classList.remove('menu__link-logo--active');
    docHtml.classList.remove('no-overflow');
  } else {
    mobMenu.classList.add('mob-menu--show');
    menuLogo.classList.add('menu__link-logo--active');
    docHtml.classList.add('no-overflow');
  }
});

function hideMobMenu() {
  mobMenu.classList.remove('mob-menu--show');
  switchBtnIconOpen.classList.add('switch-btn__icon--show');
  switchBtnIconClose.classList.remove('switch-btn__icon--show');
  docHtml.classList.remove('no-overflow');
  menuLogo.classList.remove('menu__link-logo--active');
}

for (let i = 0; i < mobMenuItems.length; ++i) {
  mobMenuItems[i].addEventListener('click', function () {
    hideMobMenu();
  })
}


window.addEventListener('resize', function () {
  if (window.innerWidth > 710 && mobMenu.classList.contains('mob-menu--show')) {
    hideMobMenu();
  }
});

// script for button top
var backTop = document.getElementsByClassName('js-cd-top')[0],
  offset = 300,
  offsetOpacity = 1200,
  scrollDuration = 1500,
  scrolling = false;
if (backTop) {
  window.addEventListener("scroll", function (event) {
    if (!scrolling) {
      scrolling = true;
      (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250): window.requestAnimationFrame(
        checkBackToTop);
    }
  });
  backTop.addEventListener('click', function (event) {
    event.preventDefault();
    (!window.requestAnimationFrame) ? window.scrollTo(0, 0): scrollTop(scrollDuration);
  });
}

function checkBackToTop() {
  var windowTop = window.scrollY || document.documentElement.scrollTop;
  (windowTop > offset) ? addClass(backTop, 'cd-top--show'): removeClass(backTop, 'cd-top--show',
    'cd-top--fade-out');
  (windowTop > offsetOpacity) && addClass(backTop, 'cd-top--fade-out');
  scrolling = false;
}

function scrollTop(duration) {
  var start = window.scrollY || document.documentElement.scrollTop,
    currentTime = null;

  var animateScroll = function (timestamp) {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
    window.scrollTo(0, val);
    if (progress < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  window.requestAnimationFrame(animateScroll);
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

function addClass(el, className) {
  var classList = className.split(' ');
  if (el.classList) el.classList.add(classList[0]);
  else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
  if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
}

function removeClass(el, className) {
  var classList = className.split(' ');
  if (el.classList) el.classList.remove(classList[0]);
  else if (hasClass(el, classList[0])) {
    var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
  if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
}
