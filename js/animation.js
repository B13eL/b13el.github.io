let showUp = document.querySelectorAll('[animation="show-up"]'),
    showLeft = document.querySelectorAll('[animation="show-left"]'),
    scaleDown = document.querySelectorAll('[animation="scale-down"]'),
    scale = document.querySelectorAll('[animation="scale"]'),
    opacity = document.querySelectorAll('[animation="opacity"]');

function animateElementsCycle () {
  for (let i = 0; i < showUp.length; ++i) {
    if (showUp[i].getBoundingClientRect().top < 600 &&
    !showUp[i].classList.contains('animation-show-top')) {
      showUp[i].classList.add('animation-show-top');
    }
  }
  for (let i = 0; i <  showLeft.length; ++i) {
    if ( showLeft[i].getBoundingClientRect().top < 600 &&
    !showLeft[i].classList.contains('animation-show-left')) {
        showLeft[i].classList.add('animation-show-left');
    }
  }
  for (let i = 0; i < scale.length; ++i) {
    if (scale[i].getBoundingClientRect().top < 600 &&
    !scale[i].classList.contains('animation-scale')) {
      scale[i].classList.add('animation-scale');
    }
  }
  for (let i = 0; i < scaleDown.length; ++i) {
    if (scaleDown[i].getBoundingClientRect().top < 600 &&
    !scaleDown[i].classList.contains('animation-scale-down')) {
      scaleDown[i].classList.add('animation-scale-down');
    }
  }
  for (let i = 0; i < opacity.length; ++i) {
    if (opacity[i].getBoundingClientRect().top < 600 &&
    !opacity[i].classList.contains('animation-opacity')) {
      opacity[i].classList.add('animation-opacity');
    }
  }
}
animateElementsCycle();

window.addEventListener('scroll', function () {
  animateElementsCycle();
});