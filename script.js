// document.addEventListener('DOMContentLoaded', function () {
//     const passwordToggle = document.querySelector('.eye');
//     const passwordInput = document.querySelector('#password');

//     passwordToggle.addEventListener('click', function () {
//         const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//         passwordInput.setAttribute('type', type);
//         this.classList.toggle('visible');
//     });
// });

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});