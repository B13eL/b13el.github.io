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

let mobBtnMenu = document.querySelector('.switch-btn'),
    switchBtnIconOpen = document.querySelector('.switch-btn__icon-open'),
    switchBtnIconClose = document.querySelector('.switch-btn__icon-close');

mobBtnMenu.addEventListener('click', function () {
  switchBtnIconOpen.classList.toggle('switch-btn__icon--show');
  switchBtnIconClose.classList.toggle('switch-btn__icon--show');
});

let mobSubMenuBtn = document.querySelector('.menu-box__mob-btn'),
    mobSubMenu = document.querySelector('.mob-menu');

mobSubMenuBtn.addEventListener('click', function () {
  if (mobSubMenu.classList.contains('mob-menu--show')) {
    mobSubMenu.classList.remove('mob-menu--show');
  } else {
    mobSubMenu.classList.add('mob-menu--show');
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 1040 && mobSubMenu.classList.contains('mob-menu--show')){
    mobSubMenu.classList.remove('mob-menu--show');
    switchBtnIconOpen.classList.add('switch-btn__icon--show');
    switchBtnIconClose.classList.remove('switch-btn__icon--show');
  }
});