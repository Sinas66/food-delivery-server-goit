const fs = require('fs');
const path = require('path');

const getUser = (req, res) => {
  console.log(`getuser`);

  const userDir = path.join(__dirname, `../../db`)
  const userFilePath = path.join(userDir, `users.json`)

  const userlistData = fs.readFileSync(userFilePath)
  const userlist = JSON.parse(userlistData)

  console.log(`userlist`, userlist);

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(
    userlist
  ));


};

module.exports = getUser;