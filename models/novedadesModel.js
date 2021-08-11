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

module.exports = { getnovedades, deletenovedabyid }