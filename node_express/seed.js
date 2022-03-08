// Archivo seed.js
const mongoose = require('mongoose');

// Imporatmos el modelo Pet en este nuevo archivo.
const Pet = require('./models/Pet');

const pets = [
  {
    name: 'Curro',
    age: 3,
    species: 'dog',
  },
  {
    name: 'Nala',
    age: 2,
    species: 'cat',
  },
  {
    name: 'Margarita',
    age: 6,
    species: 'dog',
  },
  {
    name: 'Simón',
    age: 8,
    species: 'turtle',
  },
  {
    name: 'Max',
    age: 5,
    species: 'dog',
  },
];

const petDocuments = pets.map(pet => new Pet(pet));
