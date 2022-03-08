const http = require('http');

const requestHandler = (req, res) => {
    // Indicamos que vamos a responder con un contenido de tipo json
  res.setHeader("Content-Type", "text/plain");
  // Indicamos que la respuesta será el status 200 (éxito)
  res.writeHead(200);
  // Enviamos la respuesta a nuestros usuarios
  res.end('¡El servidor está funcionando!')
}

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`);
});