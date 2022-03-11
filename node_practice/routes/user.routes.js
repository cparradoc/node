const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/logout', (req, res, next) => {
  if (req.user) {
    // Destruimos el objeto req.user para este usuario
    req.logout();

    req.session.destroy(() => {
      // Eliminamos la cookie de sesión al cancelar la sesión
      res.clearCookie('connect.sid');
      // Redirijimos el usuario a la home
      res.redirect('/');
    });
  } else {
    return res.sendStatus('/'); // Si no hay usuario, vuelta a la pantalla principal
  }
});

router.post('/register', (req, res, next) => {
  passport.authenticate('register', (error, user) => {
    if (error) {
      return res.render('register', { error: error.message });
    }

    req.logIn(user, (err) => {
      // Si hay un error logeando al usuario, resolvemos el controlador
      if (err) {
        return res.render('register', { error: error.message });
      }

      // Si no hay error, redijimos a los usuarios a la ruta que queramos
      return res.redirect('/products');
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('login', (error, user) => {
    if (error) {
      return res.render('login', { error: error.message });
    }

    req.logIn(user, (err) => {
      // Si hay un error logeando al usuario, resolvemos el controlador
      if (err) {
        return res.render('login', { error: error.message });
      }

      // Si no hay error, redijimos a los usuarios a la ruta que queramos
      return res.redirect('/products');
    });
  })(req, res, next);
});

module.exports = router;