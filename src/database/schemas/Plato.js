let { Schema, model } = require('mongoose')

let platoSchema = new Schema({
    Id: Number,
    Nombre: String,
    Descripcion: String,
    Precio: Number,
    Urlimg: String

 })

module.exports = model("plato", platoSchema)