const product = JSON.stringify({
  "id": 19112832,
  "sku": 1120002,
  "name": "Пицца Маргарита",
  "description": "Пожалуй, самая популярная в мире, даже меню любой пиццерии начинается, как правило, именно с неё. Состав этой пиццы необычайно прост, её основные ингредиенты: сыр моцарелла, спелые помидоры и листья свежего базилика, которые придают ей неповторимый вкус и аромат.",
  "price": "80",
  "currency": "UAN",
  "creatorId": 1,
  "created": "21-08-2018",
  "modified": "21-08-2018",
  "categories": [
    "pizza"
  ]
});

const createProduct = (req, res) => {

  res.statusCode = 201;
  res.setHeader('Content-Type', 'application/json');
  res.end(product);
};

module.exports = createProduct;

// 

const fs = require('fs');
const path = require('path');

const createUser = (req, res) => {

  let userData = '';

  req.on('data', (data) => {
    userData = userData + data;
  });

  req.on('end', function () {

    console.log(userData);

    res.statusCode = 201;
    res.end('user was created');
  });
};

module.exports = createUser;
