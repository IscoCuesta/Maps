const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DatosSchema = new Schema({
  Estado: { type: String, required: true },
  Delito: { type: String, required: true },
  2012: {type: Number, default: 0 , required: true},
  2013: {type: Number, default: 0 , required: true},
  2014: {type: Number, default: 0 , required: true},
  2015: {type: Number, default: 0 , required: true},
  EstadoInfo: {
    type: Schema.Types.ObjectId,
    ref: "Estado"
  }
});

const Datos = mongoose.model("Datos", DatosSchema);

module.exports = Datos;
