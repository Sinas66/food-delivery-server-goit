const fs = require('fs');
const path = require('path');

const getproducts = (req, res) => {
    console.log(`getproducts`);

    const productsDir = path.join(__dirname, `../../db`)
    const productsFilePath = path.join(productsDir, `products.json`)

    const productslistData = fs.readFileSync(productsFilePath)
    const productslist = JSON.parse(productslistData)

    console.log(`productslist`, productslist);

    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(
        productslist
    ));


};

module.exports = getproducts;