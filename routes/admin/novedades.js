var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET listar novedades */

router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getnovedades();

  novedades = novedades.map(novedad => {
  if (novedad.img_id) {
    const imagen = cloudinary.image(novedad.img_id, {
      width: 100,
      height: 100,
      crop: 'fill'
    });
    return {
      ...novedad,
      imagen
    }
  } else {
    return{
    ...novedad,
    imagen: ''
    }
  }
});
  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades
  });
});

/*parq eliminar una novedad*/

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  let novedad = await novedadesModel.getnovedadesbyid(id);
  if (novedad.img_id) {
    await (destroy(novedad.img_id));
  }
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

router.post('/agregar', async (req, res, next) => {
  try {
    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      // await novedadesModel.insertnovedad(req.body);
      await novedadesModel.insertnovedad({
        ...req.body,
        img_id
      });

      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'no se cargo la novedad'
    })
  }
})
//upgrade
// traer una novedad para poder modificar 
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var novedad = await novedadesModel.getnovedadesbyid(id);
  res.render('admin/modificar', { // me manda a modificar.hbs
    layout: 'admin/layout',
    novedad
  });
});
router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }
    //console.log(req.body.id);//para ver si trae id
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
    }
    console.log(obj) // para ver si trae los datos
    await novedadesModel.modificarnovedadbyid(obj, req.body.id);
    res.redirect('/admin/novedades');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    })
  } // cierra el catch
}); //cierro el post



module.exports = router;