const express = require('express');
const { urlToHttpOptions } = require('url');
const Product = require('../db/models/Product');
const User = require('../db/models/User');
const { uploadToCloudinary } = require('../middlewares/file.middleware');
const fileMiddleware = require('../middlewares/file.middleware');


const router = express.Router();

const productLimit = 10;

router.get('/', async (req, res) => {
    try {
      const current = 0;
      const next = String(current + productLimit);
      const previous = String(current - productLimit);

      const products = await Product.find().sort({createdAt: 'descending'}).limit(productLimit);
      return res.status(200).render('products', { title: 'Game Store', products: products, next: next, previous: previous});  
    } catch (err) {
      next(err);
    }
});

router.get('/next/:n', async (req, res) => {
  try {
    const current = Number(req.params.n);
    const next = String(current + productLimit);
    const previous = String(current - productLimit);
    if (current >= 0){
      const products = await Product.find().sort({createdAt: 'descending'}).skip(current).limit(productLimit);
      if(products.length > 0 || previous >= 0) {
        return res.status(200).render('products', { title: 'Game Store', products: products, next: next, previous: previous});
      }
    }else {
      res.redirect('/products');
    }
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

router.get('/cart', async (req, res) => {
  try {
    const UserCart = await User.findById(req.session.passport.user).populate('cart');
    if(UserCart.cart.length > 0) {
      let total = 0;
      UserCart.cart.array.forEach(product => {
        total +=product.price;
      });
      return res.status(200).render('cart', {title: "Game Store", products: UserCart.cart, total: total});
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/cart', async (req, res) => {
  const id = req.body.id;
  try {
    const UserCart = await User.findById(req.session.passport.user).populate('cart');
    UserCart.cart.push(id);
    await UserCart.save();
    return res.status(200).redirect('/products/cart');

  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete('/cart', async (req, res) => {
  try {
    const UserCart = await User.findById(req.session.passport.user).populate('cart');
    UserCart.cart = [];
    await UserCart.save();
    return res.status(200).redirect('/products/cart');

  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post( '/create', 
[fileMiddleware.upload.single('picture'), uploadToCloudinary],
async(req, res, next) => {
  const picture = req.file_url || urlToHttpOptions;

    try {

      const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: picture,
      });

      await newProduct.save();
      return res.redirect('/products');
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;