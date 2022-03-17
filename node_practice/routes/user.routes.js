const express = require('express');
const passport = require('passport');
const User = require('../db/models/User');

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
    return res.redirect('/'); // Si no hay usuario, vuelta a la pantalla principal
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

router.get('/cart', async (req, res) => {
  const userCart = await User.findById(req.session.passport.user).populate('cart');
  if(userCart.cart.length > 0) {
    let total = 0;
    for (var i = 0; i < userCart.cart.length; i++) {
      total += userCart.cart[i].price
    }
    return res.status(200).render('cart', {title: "Game Store", user: userCart, total: total});
  }else {
    return res.status(200).render('cart', { title: "Game Store", user: userCart });
  }
});

router.post('/cart', async (req, res) => {
  const id = req.body.id;
  try {
    const userCart = await User.findById(req.session.passport.user).populate('cart');
    userCart.cart.push(id);
    await userCart.save();
    return res.status(200).redirect('/users/cart');

  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete('/:id/cart', async (req, res) => {
  const id = req.params.id;
  try {
    const userCart = await User.findById(id);
    userCart.cart = [];
    await userCart.save();
    return res.status(200).redirect('/users/cart');

  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;