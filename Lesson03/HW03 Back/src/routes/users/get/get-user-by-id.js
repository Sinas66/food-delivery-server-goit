const fs = require('fs');
const path = require('path');
const url = require('url')
const resp404Users = require('../../../utils/resp404-users')

const getUserById = (req, res) => {
    console.log(`getUserById`);
    console.log(`req.params.id:`, req.params.id);

    const userDir = path.join(__dirname, `../../../db`)
    const userFilePath = path.join(userDir, `users.json`)
    const userlistData = fs.readFileSync(userFilePath)
    const userlist = JSON.parse(userlistData)

    let idsReq
    if (req.params.id) {
        idsReq = new Array(req.params.id)
    }
    else {
        idsReq = url.parse(req.url).query.replace('ids=', '').split(`,`)
    }

    let data = []
    idsReq.forEach(idReq => {
        userlist.find(el => {
            if (el.id === Number(idReq)) {
                data = [...data, el]
            }
        })
    })

    if (data.length === 0) {
        resp404Users(req, res)
        return
    }


    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({
        status: "success",
        users: data
    }
    ));


};

module.exports = getUserById;