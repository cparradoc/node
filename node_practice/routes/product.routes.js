const express = require('express');
const Product = require('../db/models/Product');


const router = express.Router();

const productLimit = 10;

router.get('/', async (req, res) => {
    try {
      const current = 0;
      const next = current + productLimit;
      const previous = current - productLimit;

      const products = await Product.find().sort({createdAt: 'descending'}).limit(productLimit);
      return res.status(200).render('products', { title: 'Game Store', products: products, next: next, previous: previous});  
    } catch (err) {
      next(err);
    }
});

router.get('/next/:n', async (req, res) => {
  try {
    const current = Number(req.params.n);
    const next = current + productLimit;
    const previous = current - productLimit;

    const products = await Product.find().sort({createdAt: 'descending'}).current(current).limit(productLimit);
    return res.status(200).render('products', { title: 'Game Store', products: products, next: next, previous: previous});
  } catch(err) {
    res.status(500).json(err);
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
    return res.status(500).json(err);
  }
});

router.post('/search', async (req, res) => {
  const search = req.body.name;
  try {
    //usamos el string de busqueda como patron a encontrar
    const products = await Product.find({'name': { $regex: search, $options: 'i'}}).sort({createdAt: 'descending'});
    return res.status(200).render('products', {title: "Game Store", products: products});
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/filter', async (req, res) => {

  const max = req.body.max;
  const min = req.body.min;

  try {
    const products = await Product.find({'price': {$gte: min}, 'price' : {$lte: max}}).sort({createdAt: 'descending'});
    return res.status(200).render('products', {title: "Game Store", products: products});
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;