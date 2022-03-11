const express = require('express');
const Product = require('../db/models/Product');


const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      return res.status(200).render('pets', { title: 'Game Store', products });  
    } catch (err) {
      next(err);
    }
  });