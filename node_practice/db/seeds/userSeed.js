const mongoose = require('mongoose');

const User = require('./models/User');

const users = [
    {
        name: "cparradoc",
        type: "admin",
        password: "gamestore_1",
        mail: "cparradoc@mail.com"
    }
];

mongoose
  .connect('mongodb://localhost:27017/upgrade_class_3', {
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