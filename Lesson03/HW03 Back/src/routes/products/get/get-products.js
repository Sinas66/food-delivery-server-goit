const fs = require('fs');
const path = require('path');
const url = require('url')


const getProducts = (req, res) => {
    console.log(`get all products`);

    const productsDir = path.join(__dirname, `../../../db`)
    const productsFilePath = path.join(productsDir, `products.json`)

    const productslistData = fs.readFileSync(productsFilePath)
    const productslist = JSON.parse(productslistData)

    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(
        { status: `success`, products: productslist }
    ));


};

module.exports = getProducts;