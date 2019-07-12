const fs = require('fs');
const path = require('path');
const url = require('url')


const getproducts = (req, res) => {
    console.log(`getproducts`);
    
    const productsDir = path.join(__dirname, `../../db`)
    const productsFilePath = path.join(productsDir, `products.json`)
    
    const productslistData = fs.readFileSync(productsFilePath)
    const productslist = JSON.parse(productslistData)

    const searchById = massId => {
        let data = []
        massId.forEach(elMassId=>{
        productslist.reduce((acc, el)=>{
            if(el.id === Number(elMassId)){ 
            acc = el
            data= [...data,el]
            }
        },{})
    }) 
    return data
    }


    const query = url.parse(req.url).query
    if (query.includes(`ids=`)) {
        console.log(url.parse(req.url))
        const massId = query.replace(`ids=`,``).split(`,`)
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({status:`success`,products: searchById(massId)}));
        return
    }
    
    
    const num = /\d/
    const containedId = [req.url.replace(`/products/`,``)]
    if (num.test(containedId)) {
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify(searchById(containedId)));
        return
    }


    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(
        productslist
    ));


};

module.exports = getproducts;