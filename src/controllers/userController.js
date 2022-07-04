// const { User } = require('../database');

const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "/../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const {validationResult}= require ('express-validator');
const user =require('../models/UserModel');
const bcryptjs= require('bcryptjs');

const controller = {
  register: (req, res) => {
    res.render("users/register");
  },
  processRegister: (req,res)=>{
    const resultValidation= validationResult(req);
    if(resultValidation.errors.length>0){
    return res.render('users/register', {
      errors:resultValidation.mapped(),
      oldData:req.body
      
    });
  }
  let userInDB= user.findByField('email',req.body.email);
  if(userInDB){
    return res.render('users/register',{
      errors:{
        email:{
          msg:'Este email ya está registrado'
        }
      },
      oldData:req.body
    })
  }

  let userToCreate={
    ...req.body,
    password:bcryptjs.hashSync(req.body.password,10)
  }
  let userCreated=user.create(userToCreate);
  return res.redirect('../views/users/login')

  },
  login:(req,res)=>{
    return res.render('users/login')
  },
  processLogin:(req,res)=>{
    let userToLogin=user.findByField('email',req.body.email)
    if(userToLogin){
      let passWordIsOk= bcryptjs.compareSync(req.body.password,userToLogin.password);
      if(passWordIsOk){
        return res.redirect('../views/users/login')
      }
      return res.render('users/login',{
        errors:{
          email:{
          msg:'no se encuentra el usuario, por favor verifique sus datos'
          }
        }
      })
    }
    return res.render('users/login',{
      errors:{
        email:{
          msg:'email invalido'
        }
      }
    })
  }
  
};

module.exports = controller;
