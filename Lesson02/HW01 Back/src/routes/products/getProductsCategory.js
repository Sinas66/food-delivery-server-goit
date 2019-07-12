const fs = require('fs');
const path = require('path');

const getProductsCategory = (req, res) => {
    console.log(`getproducts ID`);

    const productsDir = path.join(__dirname, `../../db`)
    const productsFilePath = path.join(productsDir, `products.json`)

    const productslistData = fs.readFileSync(productsFilePath)
    const productslist = JSON.parse(productslistData)

    const productsCategory = () => {
        let categories = []

        productslist.forEach(el => {
            el.categories.forEach(el => {
                if (!categories.includes(el)) {
                    categories = [...categories, el]
                }
            })

        });

        return categories
    }



    console.log(`productsCategory: `, productsCategory());

    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(
        productsCategory()
    ));


};

module.exports = getProductsCategory;