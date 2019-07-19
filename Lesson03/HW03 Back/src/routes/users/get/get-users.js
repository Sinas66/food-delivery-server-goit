const fs = require('fs');
const path = require('path');
const url = require('url')
const resp404Users = require('../../../utils/resp404-users')


const getUsers = (req, res) => {
    console.log(`getUserById`);
    console.log(`req.params.id:`, req.params.id);

    const userDir = path.join(__dirname, `../../../db`)
    const userFilePath = path.join(userDir, `users.json`)
    const userlistData = fs.readFileSync(userFilePath)
    const userlist = JSON.parse(userlistData)

    if (userlist.length === 0) {
        resp404Users(req, res)
        return
    }


    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({
        status: "success",
        users: userlist
    }
    ));


};

module.exports = getUsers;