let sliderLine = document.querySelector('.slideList');
let carouselItems = document.querySelectorAll('.slide');
let widthOfItems;
let count = 1;
let arrowLeft = document.querySelector('.arrowLeft');
let arrowRight = document.querySelector('.arrowRight');

function init() {

   for (let i = 0; i < carouselItems.length; i++) {
      widthOfItems = carouselItems[i].offsetWidth + 20;
   }
}
init()

arrowLeft.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (count == 1) {
      rollCarouselLeft2(widthOfItems);
   }
   if (count == 2) {
      rollCarouselLeft1(widthOfItems);
   }
   if (count > 0) {
      count--;
   }
})

arrowRight.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (count == 0) {
      rollCarouselRight1(widthOfItems);
   }
   if (count == 1) {
      rollCarouselRight2(widthOfItems);
   }
   if (count < 2) {
      count++;
   }
})

function rollCarouselRight1() {
   sliderLine.style.transform = 'translateX(0)';
}

function rollCarouselRight2(value) {
sliderLine.style.transform = 'translateX(' +(-value) + 'px )';
}

function rollCarouselLeft1(value) {
sliderLine.style.transform = 'translateX(' + (value - value) + 'px )';
}

function rollCarouselLeft2(value) {
sliderLine.style.transform = 'translateX(' + (value * 2 - value) + 'px )';
}

window.addEventListener('resize', function () {
init();
if (count == 0) {
   rollCarouselLeft2(widthOfItems);
}
if (count == 2) {
   rollCarouselRight2(widthOfItems);
}
})
