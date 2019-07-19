const fs = require('fs');
const path = require('path');
const randomId = require(`../../../utils/randomId`)

const createUser = async (req, res) => {
    const userDir = path.join(__dirname, `../../../db`)
    const userFilePath = path.join(userDir, `users.json`)
    const user = req.body;

    res.setHeader('Content-Type', 'application/json')

    if (!fs.existsSync(userFilePath)) {
        const userlist = [user]
        fs.writeFileSync(userFilePath, JSON.stringify(userlist))
        res.send(JSON.stringify({
            status: "success",
            user
        }))
    }


    const userlistData = fs.readFileSync(userFilePath)
    const userlist = JSON.parse(userlistData)

    isUserParamUnique = (user, param) => !userlist.some(el => el[param] === user[param])

    if (!user.username || !user.password || !user.email || !user.telephone) {
        res.status(404).send(JSON.stringify({
            status: "error",
            message: "All data are required"
        }));
        return
    }
    if (!isUserParamUnique(user, 'username')) {
        res.send(JSON.stringify({
            status: "error",
            message: "Username already exist"
        }))
        return
    }
    if (!isUserParamUnique(user, 'email')) {
        res.send(JSON.stringify({
            status: "error",
            message: "Email already exist"
        }))
        return
    }
    if (!isUserParamUnique(user, 'telephone')) {
        res.send(JSON.stringify({
            status: "error",
            message: "Telephone already exist"
        }))
        return
    }

    user.id = randomId()

    fs.writeFileSync(userFilePath, JSON.stringify([...userlist, user]))

    res.send(JSON.stringify({
        "status": "success",
        user,
    }));



};

module.exports = createUser;
