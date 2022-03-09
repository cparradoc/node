require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening in http://localhost:${PORT}`);
});

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