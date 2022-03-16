const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const saltRounds = 10;

function hashPassword() {
  bcrypt.hash("password", saltRounds).then(hash => {
  const users = [
    {
      type: "admin",
      password: hash,
      mail: "cparradoc@mail.com"
    }
  ];

  const userDocuments = users.map(users => new User(users));

  const DB_URL = "mongodb+srv://admin:Aa0qSCp9IHAEWzfp@cluster0.h9fct.mongodb.net/game_store?retryWrites=true&w=majority";

  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      // Utilizando Pet.find() obtendremos un array con todos los pets de la db
      const allUsers = await User.find();
      
      // Si existen pets previamente, dropearemos la colección
      if (allUsers.length) {
        await User.collection.drop();
      }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
      // para llenar nuestra base de datos con todas las mascotas.
      await User.insertMany(userDocuments);
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    // Por último nos desconectaremos de la DB.
    .finally(() => mongoose.disconnect());
  });
}

  hashPassword();