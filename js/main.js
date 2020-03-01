// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 300,
  framesCount = 20;

anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function (e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    let scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
      // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

const mobBtnMenu = document.querySelector('.switch-btn'),
    switchBtnIconOpen = document.querySelector('.switch-btn__icon-open'),
    switchBtnIconClose = document.querySelector('.switch-btn__icon-close'),
    mobMenuItems = document.querySelectorAll('.mob-menu__item');

mobBtnMenu.addEventListener('click', function () {
  switchBtnIconOpen.classList.toggle('switch-btn__icon--show');
  switchBtnIconClose.classList.toggle('switch-btn__icon--show');
});

const mobMenu = document.querySelector('.mob-menu');

mobBtnMenu.addEventListener('click', function () {
  if (mobMenu.classList.contains('mob-menu--show')) {
    mobMenu.classList.remove('mob-menu--show');
  } else {
    mobMenu.classList.add('mob-menu--show');
  }
});

function hideMobMenu() {
  mobMenu.classList.remove('mob-menu--show');
  switchBtnIconOpen.classList.add('switch-btn__icon--show');
  switchBtnIconClose.classList.remove('switch-btn__icon--show');
}

for (let i = 0; i < mobMenuItems.length; ++i) {
  mobMenuItems[i].addEventListener('click', function () {
    hideMobMenu();
  })
}


window.addEventListener('resize', function () {
  if (window.innerWidth > 940 && mobMenu.classList.contains('mob-menu--show')) {
    hideMobMenu();
  }
});