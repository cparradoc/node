const express = require('express');

const PORT = 3000;
const server = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Minsait!');
});

router.get('/movies/:name', (req, res) => {
    const name = req.params.name;
    console.log(name);
});

server.use('/', router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});