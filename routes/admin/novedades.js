var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET listar nov4dades */

router.get('/', async function (req, res, next) {
  var novedades = await novedadesModel.getnovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades
  });
});

/*parq eliminar una novedad*/ 

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deletenovedabyid(id);
  res.redirect('/admin/novedades')
});
/* cierra el get de eliminar */

module.exports = router;  