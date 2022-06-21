const form = document.querySelector("#form");

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

    // enviar datos al servidor
    const response = await fetch("http://localhost:3000/users/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    alert(message);
  }
});
