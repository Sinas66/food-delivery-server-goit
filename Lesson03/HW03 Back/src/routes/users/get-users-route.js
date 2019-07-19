const url = require('url')
const { createUser, getUserById, getUsers } = require(`./`)

const getUsersRoute = (req, res) => {
    console.log(`getProductsRoute`);
    const query = url.parse(req.url).query
    if (query) {
        if (query.includes(`ids=`)) {
            getUserById(req, res)
            return
        }
    }


    getUsers(req, res)
}

module.exports = getUsersRoute;