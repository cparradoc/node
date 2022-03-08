const express = require('express');

// Requerimos el archivo de configuración de nuestra DB
require('./db.js');

const PORT = 3000;
const server = express();

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});