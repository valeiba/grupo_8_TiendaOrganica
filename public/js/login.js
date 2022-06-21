// import { setCookie, getCookie } from './cookies.js';

const form = document.querySelector('#form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  // enviar datos al servidor
  const response = await fetch('http://localhost:3000/api/user/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { error, message, token, user } = await response.json();

  if (error) {
    alert(message);
  } else {
    // if (formData.get('rememberMe')) {
    //   setCookie('token', token, 7);
    // }

    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
    window.location.href = './';
  }
});
