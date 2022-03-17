const cloudinary = require("cloudinary");
require('dotenv').config();
const express = require('express');
require('./db/db.js');

const PORT = process.env.PORT || 3000;
const app = express();

const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const passport = require('passport');
require('./passport'); // Requerimos nuestro archivo de configuración


const session = require('express-session');


const MongoStore = require('connect-mongodb-session')(session);
app.use(
  session({
    secret: process.env.SESSION_SECRET, // ¡Este secreto tendremos que cambiarlo en producción!
    resave: false, // Solo guardará la sesión si hay cambios en ella.
    saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
    cookie: {
      maxAge: 3600000, // Milisegundos de duración de nuestra cookie, en este caso será una hora.
    },
    store: new MongoStore({url: process.env.DB_URL})
  })
);


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


const authMiddleware = require('./middlewares/auth.middleware');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const appRoutes = require('./routes/app.routes');
app.use('/', appRoutes);
const userRouter = require('./routes/user.routes');
app.use('/users', userRouter);
const productRouter = require('./routes/product.routes');
app.use('/products', [authMiddleware.isAuthenticated], productRouter);



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