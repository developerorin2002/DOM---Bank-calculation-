document.getElementById('submit').addEventListener('click',function () {
   const email = document.getElementById('email-box');
   const emailText = email.value;

   const password = document.getElementById('pass-box');
   const passText = password.value;

   if(emailText === 'orin@gmail.com' && passText === '123'){
    window.location = 'index.html'
   }else{
    alert('Invalid User You Are Thank You Try Again')
   }

});