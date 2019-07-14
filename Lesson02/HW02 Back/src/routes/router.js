const express = require('express');
const router = express.Router();
const getProductsRoute = require(`./products/get-products-route`)
const { getProductsById } = require(`./products`)

router.get(`/`, (req, res) => {
  res.end(`Hello World`)
})
  .get(`/products`, getProductsRoute)
  .get(`/products/:id`, getProductsById)


module.exports = router;




// const routes = {
//   'signup': (req, res) => {
//     if (req.method === 'POST') return createUser(req, res);
//   },
//   'users': (req, res) => {
//     if (req.method === 'GET') return getUser(req, res);
//   },
//   'products': (req, res) => {
//     if (req.method === 'GET') return getProduct(req, res);
//     if (req.method === 'POST') return createProduct(req, res);
//   },
//   'productsName': (req, res) => {
//     if (req.method === 'GET') return getProductsName(req, res);
//   },
//   'productsCategory': (req, res) => {
//     if (req.method === 'GET') return getProductsCategory(req, res);
//   },
//   'default': (req, res) => {
//     res.end('<h1>Default route</h1>')
//   }
// };

// const getRoute = (req, res) => {
//   const url = req.url;
//   console.log(url);


//   if (url.includes('signup')) {
//     console.log(`route:req`, req.body);
//     routes.signup(req, res);
//     return;
//   }

//   if (url.includes('users')) {
//     console.log(`should show users`);
//     routes.users(req, res);
//     return;
//   }

//   if (url.includes('products/name')) {
//     routes.productsName(req, res);
//     return;
//   }

//   if (url.includes('products/category')) {
//     routes.productsCategory(req, res);
//     return;
//   }

//   if (url.includes('products')) {
//     routes.products(req, res);
//     return;
//   }

//   routes.default(req, res);
// };
