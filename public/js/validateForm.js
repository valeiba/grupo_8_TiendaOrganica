export default validateForm = (form, validations) => {
  const errors = {};
  const properties = Object.keys(validations);
  // properties = ["email", "password"]

  properties.forEach((propertyName) => {
    // propertyName = "email"
    // validations["email"]
    // validations.email

    for (let i = 0; i < validations[propertyName].length; i++) {
      const rule = validations[propertyName][i];
      // rule = (v) => !!v || "El email es requerido"
      const error = rule(form[propertyName]);
      // 1 == "1" -> true
      // 1 === "1" -> false
      if (error !== true) {
        errors[propertyName] = error;
        // errors = { email: "El email no es válido", password: "La contraseña es requerida" }
        break;
      }
    }
  });

  return errors;
};
