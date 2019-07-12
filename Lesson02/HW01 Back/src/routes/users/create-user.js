const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const randomId = require(`../../utils/randomId`)

const filePath = path.resolve(__dirname, `../../db/users.json`)
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const createUser = async (req, res) => {
  const userDir = path.join(__dirname, `../../db`)
  const userFilePath = path.join(userDir, `users.json`)
  const user = req.body;



  if (!fs.existsSync(userFilePath)) {
    const userlist = [user]
    fs.writeFileSync(userFilePath, JSON.stringify(userlist))
    res.send(`User was crated`)
    return
  }


  const userlistData = fs.readFileSync(userFilePath)
  const userlist = JSON.parse(userlistData)

  UserExist = ({ username }) => {
    let result = false
    userlist.forEach(el => {
      if (el.username === username) {
        result = true
      }
    }
    )
    return result
  }

  if (UserExist(user)) {
    res.send(JSON.stringify({
      "status": "error",
      "message": "Username already exist"
    }))
    return
  }

  user.id = randomId()

  fs.writeFileSync(userFilePath, JSON.stringify([...userlist, user]))

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({
    "status": "success",
    user,
  }));



};

module.exports = createUser;
