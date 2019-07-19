const fs = require('fs');
const path = require('path');
const resp404-products = require(`../../../utils/resp404-products`)

const getProductsCategory = (req, res) => {
    console.log(`getProducts ID`);

    const productsDir = path.join(__dirname, `../../../db`)
    const productsFilePath = path.join(productsDir, `products.json`)

    const productslistData = fs.readFileSync(productsFilePath)
    const productslist = JSON.parse(productslistData)


    let categories = []

    productslist.forEach(el => {
        el.categories.forEach(el => {
            if (!categories.includes(el)) {
                categories = [...categories, el]
            }
        })

    });




    console.log(`productsCategory: `, categories);
    if (categories.length === 0) {
        resp404 - products(req, res)
    }
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({
        status: "success",
        products: categories
    }
    ));


};

module.exports = getProductsCategory;