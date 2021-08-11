var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel')
/* GET home page. */
router.get('/', async function (req, res, next) {
  var novedades = await novedadesModel.getnovedades();
  res.render('index',{
    novedades
  });
});

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.comentarios;
  console.log(req.body);

  var obj = {
    to: 'hernan_1587@hotmail.com',
    subject: 'comentacto desde la web',
    html: nombre + " " + apellido + " se contacto y quiere mas info a este correo: " + email + ", <br> Ademas, hizo el siguiente comentario: " + mensaje + ", este es su telefno: " + tel
  }//cierra var obj

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });// cierra transporter
   var info = await transporter.sendMail(obj);
   res.render('index', {
     message: 'mensaje enviado correctamente',
   });

})// cierra peticion del post

module.exports = router;
