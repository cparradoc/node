// Archivo seed.js
const mongoose = require('mongoose');

// Importamos los modelo Product en este nuevo archivo.
const Product = require('../models/Product');

const products = [
  {
    name: 'Inscryption',
    price: 19.99,
    description: 'Inscryption es un juego de cartas, una odisea negra como la tinta que mezcla el «roguelike» de creación de mazos, puzles de estilo «escape room» y terror psicológico en un batido con un toque de sangre. Pero más oscuros aún son los secretos inscritos en las cartas...',
    image: 'https://s1.gaming-cdn.com/images/products/9879/orig/inscryption-pc-juego-steam-cover.jpg',
  },
  {
    name: 'Elden Ring',
    price: 59.99,
    description: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    image: 'https://img.pccomponentes.com/pcblog/2677/elden-ring.jpg',
  },
  {
    name: 'Sekiro',
    price: 59.99,
    description: 'Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.',
    image: 'https://tierragamer.com/wp-content/uploads/2020/10/goty.jpg',
  },
  {
    name: 'Undertale',
    price: 9.99,
    description: "UNDERTALE! The RPG game where you don't have to destroy anyone.",
    image: 'https://i.blogs.es/03fb41/1366_2000/840_560.jpeg',
  },
  {
    name: "Mirror's Edge",
    price: 19.99,
    description: 'In a city where information is heavily monitored, couriers called Runners transport sensitive data. In this seemingly utopian paradise, a crime has been committed, & you are being hunted. You are a Runner called Faith and this innovative first-person action-adventure is your story.',
    image: 'https://es.web.img3.acsta.net/newsv7/16/05/26/09/29/144788.jpg',
  },
  {
    name: "SUPERHOT",
    price: 22.99,
    description: "SUPERHOT is the smash-hit FPS where time moves only when you move. No regenerating health bars. No conveniently placed ammo drops. It's you, alone, outnumbered and outgunned. Snatch weapons from fallen enemies to shoot, slice and dodge through a truly cinematic hurricane of slow-motion bullets.",
    image: 'https://cdn1.epicgames.com/908bed122ba84c4a908ee1e14da401c3/offer/545c9ed2-051a-4548-8203-676ea9ccc62b-2560x1440-50a78bf68aecdf1a565ab646ce463eae.jpg',
  },
  {
    name: "Hollow Knight",
    price: 14.99,
    description: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_download_software_5/H2x1_WiiUDS_HollowKnight.jpg',
  },
  {
    name: "PUBG: BATTLEGROUNDS",
    price: 0.00,
    description: "Juega gratis a PUBG: BATTLEGROUNDS. Aterriza en posiciones estratégicas, saquea armas y suministros, y sobrevive para que vuestro equipo sea el único en pie en los distintos y variados campos de batalla.",
    image: 'https://www.global-esports.news/wp-content/uploads/2022/01/PUBG-Free-to-play.jpg',
  },
  {
    name: "Fallout: New Vegas",
    price: 9.99,
    description: "Welcome to Vegas. New Vegas. Enjoy your stay!",
    image: 'https://media.vandal.net/i/1280x720/9-2020/20209211725288_1.jpg',
  },
  {
    name: "Bully: Scholarship Edition",
    price: 9.99,
    description: "Bully tells the story of mischievous 15-year-old Jimmy Hopkins as he goes through the hilarity and awkwardness of adolescence. Beat the jocks at dodge ball, play pranks on the preppies, save the nerds, kiss the girl and navigate the social hierarchy in the worst school around.",
    image: 'https://i.ytimg.com/vi/mWbE2B6WRbo/maxresdefault.jpg',
  },
  {
    name: "ABZU",
    price: 19.99,
    description: "El creador artístico de Journey® nos trae ABZÛ, una bella aventura submarina que evoca el sueño de bucear. Sumérgete en un vibrante mundo lleno de vida y de color y desciende hasta el mismísimo corazón del océano. Pero ten cuidado, ya que hay muchos peligros acechando en las profundidades...",
    image: 'https://media.vandal.net/m/24758/abzu-201682161954_11.jpg',
  },
  {
    name: "Hades",
    price: 20.99,
    description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
    image: 'https://cdn1.epicgames.com/min/offer/1200x1600-1200x1600-e92fa6b99bb20c9edee19c361b8853b9.jpg',
  },
  {
    name: "BioShock",
    price: 19.99,
    description: "BioShock es un shooter distinto a todos los que has jugado antes, lleno de armas y tácticas nunca vistas. Tendrás un completo arsenal a tu disposición: desde sencillos revólveres a lanzagranadas y lanzadores de productos químicos, pero también estarás obligado a modificar tu ADN para crear un arma...",
    image: 'https://i.blogs.es/1fbe1c/netflix-bioshock-1/1366_2000.jpeg',
  },
  {
    name: "Amnesia: The Dark Descent",
    price: 19.99,
    description: "Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. An experience that will chill you to the core.",
    image: 'https://cdn1.epicgames.com/917551a8060244469eb4e6ab8a99cf24/offer/EGS_AmnesiaTheDarkDescent_FrictionalGames_S2-860x1148-473ca730cc2baaaeb9595f11bfc09fda.jpg',
  },
  {
    name: "Ni no Kuni Wrath of the White Witch",
    price: 49.99,
    description: "Regresa al otro mundo en Ni no Kuni: La ira de la Bruja Blanca Remastered. La clásica historia de LEVEL-5 regresa con unos gráficos y un rendimiento mejorados.",
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_NiNoKuriWrathOfTheWhiteWitch_enGB.jpg',
  },
  {
    name: "NBA 2K22",
    price: 59.99,
    description: "NBA 2K22 pone todo el universo del baloncesto a tus pies. Cualquiera, en cualquier lugar, puede encestar en NBA 2K22.",
    image: 'https://s1.eestatic.com/2021/07/14/actualidad/596452467_195236393_1024x576.jpg',
  },
  {
    name: "Pony Island",
    price: 3.99,
    description: "Pony Island es un juego de puzzles y suspense aparentemente inocente. Estás en el limbo, atrapado en una malévola máquina de arcade defectuosa diseñada por el mismísimo diablo. No es un juego sobre ponis.",
    image: 'https://m.media-amazon.com/images/I/71u-JZTZxQL._SL1200_.jpg',
  },
  {
    name: "Unpacking",
    price: 15.99,
    description: "Unpacking es un juego relajante de lógica acerca de la sensación familiar de sacar pertenencias de cajas para colocarlas en un nuevo hogar. Mitad juego de bloques, mitad juego de decoración, podrás crear habitaciones agradables mientras descubres pistas de la vida que estás desempacando.",
    image: 'https://generacionxbox.com/wp-content/uploads/2021/11/unpacking-portada.jpg',
  },
  {
    name: "GRIS",
    price: 16.99,
    description: "Gris es una muchacha llena de esperanzas y perdida en su propio mundo, enfrentada a una experiencia dolorosa de su vida.",
    image: 'https://i.ytimg.com/vi/gvECQlxrhbw/maxresdefault.jpg',
  },
  {
    name: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
    price: 29.99,
    description: "¡Con el nuevo título de la aclamada saga STORM emprenderás un viaje impresionante y lleno de color! ¡Benefíciate de un sistema de combate totalmente renovado y prepárate para sumergirte en los combates más épicos que hayas visto nunca!",
    image: 'https://image.api.playstation.com/cdn/UP0700/CUSA02412_00/BlS88n8QkRnZK2rg4wxxbbPRYqMZvx8C.png',
  },
];

const productDocuments = products.map(products => new Product(products));

const DB_URL = "mongodb+srv://admin:uFUcfG2agO9CJHxI@cluster0.h9fct.mongodb.net/game_store?retryWrites=true&w=majority";

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