const express = require('express');
const Product = require('../db/models/Product');


const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      return res.status(200).render('products', { title: 'Game Store', products });  
    } catch (err) {
      next(err);
    }
});

router.get('/product/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if(product) {
      return res.status(200).render('product', {title: "Game Store", id: id, product: product});
    }
  } catch (err) {
    return res.status(500).render('product', {title: "Game Store"});
  }
});

router.post('/search', async (req, res) => {
  
});

  module.exports = router;