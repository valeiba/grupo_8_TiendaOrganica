const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mainRoutes = require("./routes/main");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

// Config
app.set("view engine", "ejs");

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("node_modules"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

// Routes
app.use("/", mainRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);


app.listen(3000, () => {
  console.log("Servidor funcionando");
});
