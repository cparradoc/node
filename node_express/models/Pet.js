// Archivo Pet.js dentro de la carpeta models
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creamos el esquema de mascotas
const petSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    species: { type: String, required: true },
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo Pet
const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;