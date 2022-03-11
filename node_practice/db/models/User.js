// Archivo User.js dentro de la carpeta models
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creamos el esquema de usuarios
const userSchema = new Schema(
  {
    name: { type: String},
    type: {type: String, required: true},
    password: {type: String, required: true},
    mail: {type: String, required: true},
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo User
const User = mongoose.model('User', userSchema);
module.exports = User;