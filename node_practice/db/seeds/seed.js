// Archivo seed.js
const mongoose = require('mongoose');

// Imporatmos el modelo Pet en este nuevo archivo.
const Product = require('./models/Product');

const products = [
  {
    name: 'Inscryption',
    price: 19.99,
    description: 'Inscryption es un juego de cartas, una odisea negra como la tinta que mezcla el «roguelike» de creación de mazos, puzles de estilo «escape room» y terror psicológico en un batido con un toque de sangre. Pero más oscuros aún son los secretos inscritos en las cartas...',
  },
  {
    name: 'Elden Ring',
    price: 59.99,
    description: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
  },
  {
    name: 'Sekiro',
    price: 59.99,
    description: 'Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.',
  },
  {
    name: 'Undertale',
    price: 9.99,
    description: "UNDERTALE! The RPG game where you don't have to destroy anyone.",
  },
  {
    name: "Mirror's Edge",
    price: 19.99,
    description: 'In a city where information is heavily monitored, couriers called Runners transport sensitive data. In this seemingly utopian paradise, a crime has been committed, & you are being hunted. You are a Runner called Faith and this innovative first-person action-adventure is your story.',
  },
  {
    name: "SUPERHOT",
    price: 22.99,
    description: "SUPERHOT is the smash-hit FPS where time moves only when you move. No regenerating health bars. No conveniently placed ammo drops. It's you, alone, outnumbered and outgunned. Snatch weapons from fallen enemies to shoot, slice and dodge through a truly cinematic hurricane of slow-motion bullets.",
  },
];