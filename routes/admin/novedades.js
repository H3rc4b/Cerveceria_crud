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
/* para agregar novedades */
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout',
  }) //cierra el render
});//cierra el get

router.post('/agregar', async(req, res, next) => {
  try{
    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertnovedad(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout', 
        error: true,
        message: 'todos los campos son requeridos'
      })
    }
  }catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'no se cargo la novedad'
    })
  }
}) 
// traer una novedad para poder modificar 
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var novedad = await novedadesModel.getnovedadesbyid(id);
  res.render('admin/modificar', { // me manda a modificar.hbs
    layout: 'admin/layout',
    novedad
  });
});
router.post('/modificar', async(req, res, next) => {
  try{
    //console.log(req.body.id);//para ver si trae id
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj) // para ver si trae los datos
    await novedadesModel.modificarnovedadbyid(obj, req.body.id);
    res.redirect('/admin/novedades'); 
  }catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    })
  } // cierra el catch
}); //cierro el post
 


module.exports = router;