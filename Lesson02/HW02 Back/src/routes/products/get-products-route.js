const url = require('url')
const resp404 = require(`../../utils/resp404`)
const { getProductsById, getProductByCategories, getProducts } = require(`./`)

const getProductsRoute = (req, res) => {
    console.log(`getProductsRoute`);
    const query = url.parse(req.url).query
    if (query) {

        if (query.includes(`ids=`)) {
            getProductsById(req, res)
            return
        }
        if (query.includes(`category=`)) {
            getProductByCategories(req, res)
            return
        }
    }


    getProducts(req, res)
}

module.exports = getProductsRoute;