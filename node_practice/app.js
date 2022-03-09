require('dotenv').config();
const express = require('express');

const passport = require('passport');
require('./passport'); // Requerimos nuestro archivo de configuración

const userRouter = require('./routes/user.routes');

const app = express();

const router = express.Router();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening in http://localhost:${PORT}`);
});

router.get('/products/:name', (req, res) => {
    const products = req.params.name;
    res.send(products);
});



app.use(passport.initialize());

app.use('/users', userRouter);

app.use(
    session({
      secret: 'game_store', // ¡Este secreto tendremos que cambiarlo en producción!
      resave: false, // Solo guardará la sesión si hay cambios en ella.
      saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
      cookie: {
        maxAge: 3600000, // Milisegundos de duración de nuestra cookie, en este caso será una hora.
      },
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );