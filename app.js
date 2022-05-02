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

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "/views/login.html");
// });

// app.get("/register", (req, res) => {
//   res.sendFile(__dirname + "/views/register.html");
// });
// app.get("/productCart", (req, res) => {
//   res.sendFile(__dirname + "/views/productCart.html");
// });

// app.get("/productDetail", (req, res) => {
//   res.sendFile(__dirname + "/views/productDetail.html");
// });
