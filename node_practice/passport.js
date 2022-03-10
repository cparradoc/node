const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('./db/models/User');

// Creamos los salts de bcrypt
const saltRounds = 10;

passport.use(
  'register', // Nombre de la estrategia, en este caso será register
  new LocalStrategy(
    {
      usernameField: 'email', // Elegimos el campo email del req.body
      passwordField: 'password', // Elegimos el campo password del req.body
      passReqToCallback: true, // Hace que el callback reciba la Request (req)
    },
    async (req, name, type, password, mail, done) => {
      try {
        // Primero buscamos si el usuario existe en nuestra DB
        const previousUser = await User.findOne({ mail: mail });

        // Si hay usuario previamente, lanzamos un error
        if (previousUser) {
          const error = new Error('The user is already registered!');
          return done(error);
        }

        // Si no existe el usuario, vamos a "hashear" el password antes de registrarlo
        const hash = await bcrypt.hash(password, saltRounds);

        // Creamos el nuevo user y lo guardamos en la DB
        const newUser = new User({
            name: name,
            type: type,
            password: hash,
            mail: mail,
        });

        const savedUser = await newUser.save();
        
        // Invocamos el callback con null donde iría el error y el usuario creado
        done(null, savedUser);
      } catch (err) {
        // Si hay un error, resolvemos el callback con el error
        return done(err);
      }
    }
  )
);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        // Primero buscamos si el usuario existe en nuestra DB
        const currentUser = await User.findOne({ email: email });

        // Si NO existe el usuario, tendremos un error...
        if (!currentUser) {
          const error = new Error('The user does not exist!');
          return done(error);
        }

        // // Si existe el usuario, vamos a comprobar si su password enviado coincide con el registrado
        const isValidPassword = await bcrypt.compare(
          password,
          currentUser.password
        );

        // Si el password no es correcto, enviamos un error a nuestro usuario
        if (!isValidPassword) {
          const error = new Error(
            'The email & password combination is incorrect!'
          );
          return done(error);
        }

        // Si todo se valida correctamente, completamos el callback con el usuario
        done(null, currentUser);
      } catch (err) {
        // Si hay un error, resolvemos el callback con el error
        return done(err);
      }
    }
  )
);