const Pet = require('./models/Pet');

const router = express.Router();

router.get('/pets', (req, res) => {
  return Pet.find()
    .then(pets => {
      // Si encontramos las mascotas, las devolveremos al usuario
      return res.status(200).json(pets);
    })
    .catch(err => {
      // Si hay un error, enviaremos por ahora una respuesta de error.
      return res.status(500).json(err);
    });
});

router.get('/pets/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const pet = await Pet.findById(id);
  
      if (pet) {
        return res.status(200).json(pet);
      } else {
        return res.status(404).json('No pet found by this id');
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });

server.use('/', router);