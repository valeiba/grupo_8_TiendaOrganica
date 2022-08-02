import validateForm from "./validateForm";

const form = document.querySelector("#form");

const validations = {
  name: [
    (v) => !!v || "El nombre es requerido",
    (v) => v.length > 2 || "El nombre debe tener más de 2 caracteres",
  ],
  lastname: [
    (v) => !!v || "El apellido es requerido",
    (v) => v.length > 2 || "El apellido debe tener más de 2 caracteres",
  ],
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
  try {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const errors = validateForm(data, validations);

    if (Object.keys(errors).length === 0) {
      // enviar datos al servidor
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    alert(message);
  }
});
