const fs = require('fs');
const path = require('path');
const url = require('url')
const resp404Products = require(`../../../utils/resp404-products`)


const getProductsById = (req, res) => {
    console.log(`get products by id`);
    console.log(`req.params.id: `, req.params.id);


    const productsDir = path.join(__dirname, `../../../db`)
    const productsFilePath = path.join(productsDir, `products.json`)

    const productslistData = fs.readFileSync(productsFilePath)
    const productslist = JSON.parse(productslistData)
    let idsReq
    if (req.params.id) {
        idsReq = new Array(req.params.id)
    } else {
        idsReq = url.parse(req.url).query.replace(`ids=`, ``).split(`,`)
    }

    console.log(`idsReq: `, idsReq);
    let data = []


    idsReq.forEach(idReq => {

        productslist.find(prod => {

            if (prod.id === Number(idReq)) {
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

module.exports = getProductsById;