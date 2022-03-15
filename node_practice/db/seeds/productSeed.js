// Archivo seed.js
const mongoose = require('mongoose');

// Importamos los modelo Product en este nuevo archivo.
const Product = require('./models/Product');

const products = [
  {
    name: 'Inscryption',
    price: 19.99,
    description: 'Inscryption es un juego de cartas, una odisea negra como la tinta que mezcla el «roguelike» de creación de mazos, puzles de estilo «escape room» y terror psicológico en un batido con un toque de sangre. Pero más oscuros aún son los secretos inscritos en las cartas...',
    image: '',
  },
  {
    name: 'Elden Ring',
    price: 59.99,
    description: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    image: '',
  },
  {
    name: 'Sekiro',
    price: 59.99,
    description: 'Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.',
    image: '',
  },
  {
    name: 'Undertale',
    price: 9.99,
    description: "UNDERTALE! The RPG game where you don't have to destroy anyone.",
    image: '',
  },
  {
    name: "Mirror's Edge",
    price: 19.99,
    description: 'In a city where information is heavily monitored, couriers called Runners transport sensitive data. In this seemingly utopian paradise, a crime has been committed, & you are being hunted. You are a Runner called Faith and this innovative first-person action-adventure is your story.',
    image: '',
  },
  {
    name: "SUPERHOT",
    price: 22.99,
    description: "SUPERHOT is the smash-hit FPS where time moves only when you move. No regenerating health bars. No conveniently placed ammo drops. It's you, alone, outnumbered and outgunned. Snatch weapons from fallen enemies to shoot, slice and dodge through a truly cinematic hurricane of slow-motion bullets.",
    image: '',
  },
  {
    name: "Hollow Knight",
    price: 14.99,
    description: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
    image: '',
  },
  {
    name: "PUBG: BATTLEGROUNDS",
    price: 0.00,
    description: "Juega gratis a PUBG: BATTLEGROUNDS. Aterriza en posiciones estratégicas, saquea armas y suministros, y sobrevive para que vuestro equipo sea el único en pie en los distintos y variados campos de batalla.",
    image: '',
  },
  {
    name: "Fallout: New Vegas",
    price: 9.99,
    description: "Welcome to Vegas. New Vegas. Enjoy your stay!",
    image: '',
  },
  {
    name: "Bully: Scholarship Edition",
    price: 9.99,
    description: "Bully tells the story of mischievous 15-year-old Jimmy Hopkins as he goes through the hilarity and awkwardness of adolescence. Beat the jocks at dodge ball, play pranks on the preppies, save the nerds, kiss the girl and navigate the social hierarchy in the worst school around.",
    image: '',
  },
  {
    name: "ABZU",
    price: 19.99,
    description: "El creador artístico de Journey® nos trae ABZÛ, una bella aventura submarina que evoca el sueño de bucear. Sumérgete en un vibrante mundo lleno de vida y de color y desciende hasta el mismísimo corazón del océano. Pero ten cuidado, ya que hay muchos peligros acechando en las profundidades...",
    image: '',
  },
  {
    name: "Hades",
    price: 20.99,
    description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
    image: '',
  },
  {
    name: "BioShock",
    price: 19.99,
    description: "BioShock es un shooter distinto a todos los que has jugado antes, lleno de armas y tácticas nunca vistas. Tendrás un completo arsenal a tu disposición: desde sencillos revólveres a lanzagranadas y lanzadores de productos químicos, pero también estarás obligado a modificar tu ADN para crear un arma...",
    image: '',
  },
  {
    name: "Amnesia: The Dark Descent",
    price: 19.99,
    description: "Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. An experience that will chill you to the core.",
    image: '',
  },
  {
    name: "Ni no Kuni Wrath of the White Witch",
    price: 49.99,
    description: "Regresa al otro mundo en Ni no Kuni: La ira de la Bruja Blanca Remastered. La clásica historia de LEVEL-5 regresa con unos gráficos y un rendimiento mejorados.",
    image: '',
  },
  {
    name: "NBA 2K22",
    price: 59.99,
    description: "NBA 2K22 pone todo el universo del baloncesto a tus pies. Cualquiera, en cualquier lugar, puede encestar en NBA 2K22.",
    image: '',
  },
  {
    name: "Pony Island",
    price: 3.99,
    description: "Pony Island es un juego de puzzles y suspense aparentemente inocente. Estás en el limbo, atrapado en una malévola máquina de arcade defectuosa diseñada por el mismísimo diablo. No es un juego sobre ponis.",
    image: '',
  },
  {
    name: "Unpacking",
    price: 15.99,
    description: "Unpacking es un juego relajante de lógica acerca de la sensación familiar de sacar pertenencias de cajas para colocarlas en un nuevo hogar. Mitad juego de bloques, mitad juego de decoración, podrás crear habitaciones agradables mientras descubres pistas de la vida que estás desempacando.",
    image: '',
  },
  {
    name: "GRIS",
    price: 16.99,
    description: "Gris es una muchacha llena de esperanzas y perdida en su propio mundo, enfrentada a una experiencia dolorosa de su vida.",
    image: '',
  },
  {
    name: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
    price: 29.99,
    description: "¡Con el nuevo título de la aclamada saga STORM emprenderás un viaje impresionante y lleno de color! ¡Benefíciate de un sistema de combate totalmente renovado y prepárate para sumergirte en los combates más épicos que hayas visto nunca!",
    image: '',
  },
];

const productDocuments = products.map(products => new Product(products));

const DB_URL = "mongodb+srv://admin:uFUcfG2agO9CJHxI@cluster0.h9fct.mongodb.net/products?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allProducts = await Product.find();
    
    // Si existen pets previamente, dropearemos la colección
    if (allProducts.length) {
      await Product.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Product.insertMany(productDocuments);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  // Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());