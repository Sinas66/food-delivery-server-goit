const fs = require('fs');
const path = require('path');
const url = require('url')
const resp404Products = require(`../../../utils/resp404-products`)


const getProductByCategories = (req, res) => {
    console.log(`get Product By Categories`);
    console.log(`req.params.id: `, req.params.id);


    const productsDir = path.join(__dirname, `../../../db`)
    const productsFilePath = path.join(productsDir, `products.json`)

    const productslistData = fs.readFileSync(productsFilePath)
    const productslist = JSON.parse(productslistData)

    const catsReq = url.parse(req.url).query.replace(`category=`, ``).split(`,`)


    console.log(`catsReq: `, catsReq);
    let data = []


    catsReq.forEach(catReq => {

        productslist.find(prod => {
            if (prod.categories.includes(catReq)) {
                data = [...data, prod]
            }

        });
    });

    if (data.length === 0) {
        resp404Products(req, res)
        return
    }

    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({ status: `success`, products: data }));

};

module.exports = getProductByCategories;