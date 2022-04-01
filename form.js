window.addEventListener('DOMContentLoaded', function() {
   function setCursorPosition(pos, elem) {
       elem.focus();
       if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
       else if (elem.createTextRange) {
           let range = elem.createTextRange();
           range.collapse(true);
           range.moveEnd('character', pos);
           range.moveStart('character', pos);
           range.select()
       }
  
   }
   
   function mask(event) {
       let matrix = '+7 (___) ___ ____',
           i = 0,
           def = matrix.replace(/\D/g, ''),
           val = this.value.replace(/\D/g, '');
       if (def.length >= val.length) val = def;
       this.value = matrix.replace(/./g, function(a) {
           return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
       });
       if (event.type == 'blur') {
           if (this.value.length == 2) this.value = ''
       } else setCursorPosition(this.value.length, this)
   };
       let email = document.querySelector('.email');
       let tel = document.querySelector('.tel');
       tel.addEventListener('input', mask, false);
       tel.addEventListener('focus', mask, false);
       tel.addEventListener('blur', mask, false);
   
       let formBtn = document.querySelector('.formBtn');
   
   tel.addEventListener('input', function () {
      if (tel.value.length < 17 || email.value.length < 2) {
         formBtn.disabled = true;
         formBtn.classList.remove('enabledButton');
      } else {
         formBtn.disabled = false;
         formBtn.classList.add('enabledButton');
      }
   })

   
  

   formBtn.addEventListener('click', function () {
      alert('Успешная подписка');
   })
   
});


function validateEmail() {
   let tel = document.querySelector('.tel');
   let email = document.querySelector('.email');
   let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
   let formBtn = document.querySelector('.formBtn');

   if (String(email.value).match(pattern) && tel.value.length > 2) {
      formBtn.disabled = false;
      formBtn.classList.add('enabledButton');
   } else {
      formBtn.disabled = true;
      formBtn.classList.remove('enabledButton');
   }
}

 
   
 


   

   