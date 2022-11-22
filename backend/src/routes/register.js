const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('./../models/usuarios');
const app = express();

app.post('/signup', function (req, res) {
    let body = req.body;
    let { codigo, correo, role, nombre, direccion, password} = body;
    let usuario = new Usuario({
      codigo,
      correo,
      role,
      nombre,
      direccion,
      password: bcrypt.hashSync(password, 10),
    });
  usuario.save((err, usuarioDB) => {
      if (err) {
        return res.status(400).json({
           ok: false,
           err,
        });
      }
      res.json({
            ok: true,
            usuario: usuarioDB
         });
      })
  });
  module.exports = app;