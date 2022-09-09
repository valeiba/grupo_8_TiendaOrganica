const express = require("express");
const app = express();
const session = require("express-session");
const cookies = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const methodOverride = require("method-override");
const mainRoutes = require("./src/routes/mainRoutes");
const productsRoutes = require("./src/routes/productsRoutes");
const usersRoutes = require("./src/routes/usersRoutes");
const roleApiRoutes = require("./src/routes/api/roleApiRoutes");
const categoriesApiRoutes = require("./src/routes/api/categoriesApiRoutes");
const productsApiRoutes = require("./src/routes/api/productsApiRoutes");
const usersApiRoutes = require("./src/routes/api/usersApiRoutes");
const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware");
const models = require("./src/database/models/");
const { sequelize } = require("./src/database/models/");

// Config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

// Middlewares
app.use(express.static("public"));
app.use(express.static("node_modules"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookies());
app.use(userLoggedMiddleware);

// Routes
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/api/roles", roleApiRoutes);
app.use("/api/categories", categoriesApiRoutes);
app.use("/api/products", productsApiRoutes);
app.use("/api/users", usersApiRoutes);

//images
// app.get('/public/images/products/:imgName', (req,res)=>{
// 	const image =req.params.imgName;
// 	res.sendFile(`${__dirname}/img/${image}`)
// })
// models.sequelize
//   .authenticate()
//   .then(function () {
//     console.log("Connection successful");
//     return sequelize.sync({force: true, alter: true});
//   })
//   .catch(function (error) {
//     console.log("Error creating connection:", error);
//   });

app.listen(3001, () => {
  console.log("Servidor funcionando en el puerto 3001");
});
