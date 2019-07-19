const getUsers = require('./get/get-users')
const getUserById = require(`./get/get-user-by-id`)
const createUser = require('./post/create-user')


module.exports = {
    getUsers,
    getUserById,
    createUser,
}
