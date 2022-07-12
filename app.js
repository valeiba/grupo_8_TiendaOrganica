const express = require("express");
const app = express();
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require("path");
const cors = require("cors");
const methodOverride = require("method-override");
const mainRoutes = require("./src/routes/mainRoutes");
const productsRoutes = require("./src/routes/productsRoutes");
const usersRoutes = require("./src/routes/usersRoutes");
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

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
app.use(userLoggedMiddleware);

// Routes
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("Servidor funcionando");
});
