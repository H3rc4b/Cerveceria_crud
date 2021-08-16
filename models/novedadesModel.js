var pool = require('./bd');
/*sirve par listar las novedades*/
async function getnovedades() {
  var query = 'select * from novedades ';
  var rows = await pool.query(query);
  return rows;
}
/* para borrar una novedades by id */ 
async function deletenovedabyid(id) {
  var query = 'delete from novedades where id = ? ';
  var rows = await pool.query(query, [id]);
  return rows;
}
/*para crear una novedad*/
async function insertnovedad(obj) {
  try{
  var query = 'insert into novedades set  ? ';
  var rows = await pool.query(query, [obj]);
  return rows;

} catch (error) {
  console.log(error);
  throw error;
}
}

//para modificar novedad
async function getnovedadesbyid(id) {
  var query = 'select * from novedades where id=?';
  var rows = await pool.query(query, [id]);
  return rows[0];
}
async function modificarnovedadbyid(obj, id) {
  try{
  var query = 'update novedades set ? where id=?';
  var rows = await pool.query(query, [obj, id]);
  return rows;
  } catch (error) {
    throw error;
  }
} //cierra modificar


module.exports = { getnovedades, deletenovedabyid, insertnovedad, getnovedadesbyid, modificarnovedadbyid }