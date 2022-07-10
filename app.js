const express = require("express");
const app = express();
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require("path");
const cors = require("cors");
const methodOverride = require("method-override");
const mainRoutes = require("./src/routes/main");
const productRoutes = require("./src/routes/products");
const userRoutes = require("./src/routes/users");

// Config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

// Middlewares
app.use(express.static("public"));
app.use(express.static("node_modules"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));
app.use(cookies());

// Routes
app.use("/", mainRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Servidor funcionando");
});
