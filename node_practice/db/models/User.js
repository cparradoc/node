// Archivo User.js dentro de la carpeta models
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creamos el esquema de usuarios
const userSchema = new Schema(
  {
    type: {type: String, required: true},
    password: {type: String, required: true},
    mail: {type: String, required: true},
    cart: [{ type: Schema.Types.ObjectId, ref: 'Product'}]
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo User
const User = mongoose.model('User', userSchema);
module.exports = User;