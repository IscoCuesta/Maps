const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordenSchema = new Schema({
  orden: { type: String, required: true },
  Carrito: { type: Array, required: true },
  cliente: { type: String},
  email: String,
  telefono: String,
  contacto: {type: Boolean},
  pagada: {type: Boolean, default: false},
  enTaller: {type: Boolean, default: false},
  date: { type: Date, default: Date.now }
});

const Orden = mongoose.model("Orden", ordenSchema);

module.exports = Orden;
