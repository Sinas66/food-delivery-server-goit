const fs = require('fs');
const path = require('path');

const getProductsName = (req, res) => {
    console.log(`getproducts ID`);

    const productsDir = path.join(__dirname, `../../db`)
    const productsFilePath = path.join(productsDir, `products.json`)

    const productslistData = fs.readFileSync(productsFilePath)
    const productslist = JSON.parse(productslistData)
    const productsId = productslist.map(el => el.name)

    console.log(`productsId`, productsId);

    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(
        productsId
    ));


};

module.exports = getProductsName;