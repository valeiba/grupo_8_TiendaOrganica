const express = require("express");
const app = express();
const mainRoutes = require("./routes/main");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static("node_modules"));

app.use("/", mainRoutes);
app.use("/", productRoutes);
app.use("/", userRoutes);

app.listen(3000, () => {
  console.log("Servidor funcionando");
});
