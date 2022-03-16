const User = require("../db/models/User");

function isAuthenticated(req, res, next) {
    // Si el Boolean de autenticación devuelve true, avanzamos al siguiente punto
    if (req.isAuthenticated()) {
      return next();
    } else {
      // En caso de no hacer usuarios logeados, redireccionamos a login
      return res.redirect('/users/login');
    }
  }

  function isAdmin(req, res, next) {
    const user = await User.findById(req.session.passport.user);
    if(user.type == "admin") {
      return next();
    } else {
      return res.redirect('.');
    }

  }
  
  module.exports = {
    isAuthenticated,
    isAdmin
  }; 