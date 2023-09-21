var express = require('express');
var router = express.Router();
const moment = require('moment-timezone');
const mysql = require('mysql');
const pool = require('../database/sql.js')

const plato = require('../database/schemas/Plato')
const pedido = require('../database/schemas/Pedido')

router.get('/pedidos', (req, res) => {
  pool.query('SELECT * FROM Ordenes', (err, results) => {
      if (err) {
          console.error(err);
          res.status(500).json({ error: 'Error al consultar la base de datos.' });
          return;
      }
      res.json(results);
  });
});

/*router.get('/view/plato', async(req, res) =>{
  const platos = await plato.find();

  //res.json(plato)
  res.status(200).jsonp(platos);
})*/

/*router.post('/new/plato', (req, res) =>{
  const data = req.body

  new plato({
    Id: data.id,
    Nombre: data.nombre,
    Descripcion: data.descripcion,
    Precio: data.precio,
    Urlimg: data.urlimg
  }).save()

  res.status(200)
})*/


/*router.post('/new/pedido', async(req, res) =>{
  const data = req.body

  res.status(200)
})*/

/*router.get('/view/pedido', async(req, res) =>{
  const pedidos = await pedido.find();

  pedidos.forEach(e =>{
    const pedidos = {
    id: e._id,
    carrito: e.Carrito,
    total: e.PrecioT,
    fecha: e.Fecha}
  })
  const MapPedidso = pedidos.map(e =>{
    return {
    id: e._id,
    carrito: e.Carrito,
    total: e.PrecioT,
    fecha: e.Fecha
  }
  })
  res.json(MapPedidso);
})*/

/*router.get('/view/pedido/:id', async(req, res) =>{

  const id = req.params.id
  const pedidos = await pedido.findById(id);
    const pedidoss = {
      id: pedidos._id,
      carrito: pedidos.Carrito,
      total: pedidos.PrecioT,
      fecha: pedidos.Fecha
    }
    res.json(pedidoss);
  })*/



module.exports = router;
