require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const passport = require('passport');
require('./passport'); // Requerimos nuestro archivo de configuración



const appRoutes = require('./routes/app.routes');

app.use('/', appRoutes);
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');

const router = express.Router();

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Esta función usará el usuario de req.LogIn para registrar su id en la cookie de sesión
passport.serializeUser((user, done) => {
  return done(null, user._id);
});

// Esta función buscará un usuario dada su _id en la DB y populará req.user si existe
passport.deserializeUser(async (userId, done) => {
  try {
    const existingUser = User.findById(userId);
    return done(null, existingUser);
  } catch (err) {
    return done(err);
  }
});

const authMiddleware = require('./middlewares/auth.middleware');

app.use('/users', [authMiddleware.isAuthenticated], userRouter);
app.use('/products', [authMiddleware.isAuthenticated], productRouter);
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);

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
app.use(passport.initialize());
app.use(passport.session());

app.use('*', (req, res, next) => {
  const error = new Error('Route not found'); 
  error.status = 404;
  next(error); // Lanzamos la función next() con un error
});

app.use((err, req, res, next) => {
	return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

app.listen(PORT, () => {
  console.log(`Listening in http://localhost:${PORT}`);
});