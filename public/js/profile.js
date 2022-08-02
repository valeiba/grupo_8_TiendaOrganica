const form = document.querySelector("#form");
const token = sessionStorage.getItem("token");

if (!token) window.location.href = "./users/login";

form.addEventListener("submit", async (event) => {
  console.log(event);
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    image: formData.get("image"),
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    address: formData.get("address"),
    city: formData.get("city"),
  };

  // enviar datos al servidor
  const response = await fetch("http://localhost:3000/users/updateUser", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
});

// obtener datos del usuario
const getUser = async () => {
  const sesionUser = JSON.parse(sessionStorage.getItem("user") || "{}");

  const response = await fetch(
    "http://localhost:3000/users/infoUser?id=" + sesionUser.id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    }
  );

  const { error, message, user } = await response.json();

  if (error) {
    alert(message);
  } else {
    const { image, name, lastname, address, city } = user;

    // document.querySelector("#imageProfile").src = image;
    document.querySelector("#formName").value = name || "";
    document.querySelector("#formLastName").value = lastname || "";
    document.querySelector("#formAddress").value = address || "";
    document.querySelector("#formCity").value = city || "";
  }
};

getUser();
