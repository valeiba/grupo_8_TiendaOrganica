//llamar a los elementos mediante los ids y luego agregar o remover la clase de ocultar y desocultar
document.addEventListener("DOMContentLoaded", () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    document.querySelector("#login").classList.add("d-none");
    document.querySelector("#register").classList.add("d-none");
    document.querySelector("#avatarProfile").classList.remove("d-none");
    const user = JSON.parse(sessionStorage.getItem("user") || "{}");
    document.querySelector("#nameProfile").innerHTML = user.name;
    document.querySelector("#emailProfile").innerHTML = user.email;
  } else {
    document.querySelector("#login").classList.remove("d-none");
    document.querySelector("#register").classList.remove("d-none");
    document.querySelector("#avatarProfile").classList.add("d-none");
  }
});
