// Archivo Product.js dentro de la carpeta models
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creamos el esquema de productos
const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: {type: Number, required: true},
    description: {type: String, required: true},
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo Product
const Product = mongoose.model('Product', productSchema);
module.exports = Product;