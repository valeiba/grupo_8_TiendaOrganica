// import { setCookie, getCookie } from './cookies.js';
import validateForm from "./validateForm";

const form = document.querySelector("#form");

const validations = {
  email: [
    (v) => !!v || "El email es requerido",
    (v) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v) ||
      "El email no es válido",
  ],
  password: [
    (v) => !!v || "La contraseña es requerida",
    (v) => v.length >= 8 || "La contraseña debe tener al menos 8 caracteres",
    // validate characters
    (v) =>
      /[a-z]/.test(v) ||
      "La contraseña debe tener al menos una letra minúscula",
    (v) =>
      /[A-Z]/.test(v) ||
      "La contraseña debe tener al menos una letra mayúscula",
    (v) => /[0-9]/.test(v) || "La contraseña debe tener al menos un número",
    (v) =>
      /[^a-zA-Z0-9]/.test(v) ||
      "La contraseña debe tener al menos un caracter especial",
  ],
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const errors = validateForm(data, validations);

  if (Object.keys(errors).length === 0) {
    // enviar datos al servidor
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { error, message, token, user } = await response.json();

    if (error) {
      alert(message);
    } else {
      // if (formData.get('rememberMe')) {
      //   setCookie('token', token, 7);
      // }

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));
      window.location.href = "./";
    }
  }
});
