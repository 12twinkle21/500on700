let accordionBtns = document.querySelectorAll('.accBtn');
let accordions = document.querySelectorAll('.accordion');

for (let i = 0; i < accordionBtns.length; i++) {
   for (let j = 0; j < accordions.length; j++) {
      accordionBtns[i].addEventListener("click", function () {
         if (accordions[i].style.maxHeight) {
            accordions[i].style.maxHeight = null;
            accordions[i].style.marginTop = 0;
         } else {
            accordions[i].style.maxHeight = accordions[i].scrollHeight + 'px';
            accordions[i].style.marginTop = 30 + 'px';
         }
      });
   }
}

let headerAccordionBtn = document.querySelector('.accLink');
let headerAccodion = document.querySelector('.headerAccordion')

headerAccordionBtn.addEventListener('click', function () {
   if (headerAccodion.style.maxHeight) {
      headerAccodion.style.maxHeight = null;
      headerAccodion.style.marginTop = 0;
      headerAccordionBtn.classList.remove('activeLink');
   } else {
      headerAccodion.style.maxHeight = headerAccodion.scrollHeight + 'px';
      headerAccodion.style.marginTop = 30 + 'px';
      headerAccordionBtn.classList.add('activeLink');
   }
})

let burgerAccordionBtn = document.querySelector('.burgerAccLink');
let burgerAccodion = document.querySelector('.burgerAccordion')

burgerAccordionBtn.addEventListener('click', function () {
   if (burgerAccodion.style.maxHeight) {
      burgerAccodion.style.maxHeight = null;
      burgerAccodion.style.marginTop = 0;
      burgerAccordionBtn.classList.remove('activeLink');
   } else {
      burgerAccodion.style.maxHeight = burgerAccodion.scrollHeight + 'px';
      burgerAccodion.style.marginTop = 30 + 'px';
      burgerAccordionBtn.classList.add('activeLink');
   }
})

function init() {
   const screenHeight = window.innerHeight;
   const screenWidth = window.innerWidth;
   const burgerMenu = document.querySelector('.burgerMenu');
   burgerMenu.style.height = screenHeight + 'px';
   burgerMenu.style.width = screenWidth * 0.8 + 'px';
}

init()
window.addEventListener('resize', function () {
   const screenHeight = window.innerHeight;
   const screenWidth = window.innerWidth;
   const burgerMenu = document.querySelector('.burgerMenu');
   burgerMenu.style.height = screenHeight + 'px';
   burgerMenu.style.width = screenWidth * 0.8 + 'px';
});

let burgerItem = document.querySelector('.navBurger__item')
let burgerBtn = document.querySelector('.navBurger__btn');
let burgerMenu = document.querySelector('.burgerMenu');
let body = document.querySelector('body');
burgerBtn.addEventListener('click', function () {
   burgerMenu.classList.toggle('activeMenu');
   body.classList.toggle('noScroll');
   if (burgerItem.classList.contains('burgerOnClose')) {
      burgerItem.style.height = 2 + 'px';
   } else {
      burgerItem.style.height = 30 + 'px';
   }
   burgerItem.classList.toggle('burgerOnClose');
});

