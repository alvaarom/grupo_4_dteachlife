const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



const controller = {
  index: (req, res) => {
    res.render('./home/index');
  },
  login: (req, res) => {
    res.render('./auth/login');
  },
  register: (req, res) => {
    res.render('./auth/register');
  },
  createUser:(req,res)=> {
    let user ={
      id: users.length + 1,
      nombre: req.body.nombre + " " + req.body.apellido,
      ubicacion: req.body.ubicacion,
      imagen: "",
      email: req.body.email,
      contraseña: req.body.contraseña,
    }
   users.push(user);
   let usersJSON =JSON.stringify(users);
   fs.writeFileSync(usersFilePath,usersJSON);
   res.redirect("/")
  }
};

module.exports = controller;
