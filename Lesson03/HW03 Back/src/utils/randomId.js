const path = require('path');
const fs = require('fs');


randomId = () => {
    const userDir = path.join(__dirname, `../db`)
    const userFilePath = path.join(userDir, `users.json`)


    const userlistData = fs.readFileSync(userFilePath)
    const userlist = JSON.parse(userlistData)
    let lastUserId = 1;
    if (userlist.length !== 0) {
        lastUserId = userlist.length + 1
    }
    console.log(`new user id`, lastUserId);

    return lastUserId
}

module.exports = randomId;