const express = require('express');
const router = express.Router();
const getProductsRoute = require(`./products/get-products-route`)
const { getProductsById } = require(`./products`)
const getUsersRoute = require('./users/get-users-route')
const { getUserById, createUser } = require('./users')
const createOrder = require('./orders/create-order')
const savePic = require(`./image/save-pic`)

router.get(`/`, (req, res) => {
  res.end(`Hello World`)
})
  .get(`/products`, getProductsRoute)
  .get(`/products/:id`, getProductsById)
  .get(`/users`, getUsersRoute)
  .get(`/users/:id`, getUserById)
  .post(`/users`, createUser)
  .post('/orders', createOrder)
  .post('/image', savePic)


module.exports = router;
