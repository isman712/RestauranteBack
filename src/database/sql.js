var mysql = require('mysql');
const { promisify }= require('util');

var conexion =  mysql.createPool({
  host : 'localhost',
  database : 'ADBRestautante',
  user : 'root',
  password : 'Derekisman_712',
});

conexion.getConnection(function(err) {
  if (err) {
      console.error('Error de conexion: ' + err.stack);
      return;
  }
  console.log('Conectado a la base de datos');
});
conexion.query = promisify(conexion.query);

module.exports = conexion;

