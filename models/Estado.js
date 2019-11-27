const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstadoSchema = new Schema({
  Name: { type: String, required: true },
  Lat: { type: Number, required: true },
  Lon: { type: Number, required: true },
  Poblacion: { type: Number, required: true },
  Area: { type: Number, required: true }
});

const Estado = mongoose.model("Estado", EstadoSchema);

module.exports = Estado;
