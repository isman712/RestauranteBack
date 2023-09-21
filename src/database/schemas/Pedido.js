let { Schema, model } = require('mongoose')

let pedidoSchema = new Schema({
    _id: Number,
    Carrito: Object,
    PrecioT: Number,
    Fecha: Date

    })

module.exports = model("pedido", pedidoSchema)