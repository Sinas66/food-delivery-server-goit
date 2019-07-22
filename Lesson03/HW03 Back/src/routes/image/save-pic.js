const multer = require('multer')
const path = require('path')
const fs = require(`fs`)
const config = require('../../config')


const imageTmpFolder = `tmp/image`;
const imageFolder = `public/image`;
const tmpImageFolder = path.join(__dirname, '../../..', imageTmpFolder)
const fileDist = path.join(__dirname, '../../..', imageFolder)

if (!fs.existsSync(tmpImageFolder)) {
    fs.mkdirSync(tmpImageFolder)
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, fileDist)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })


const savePic = (req, res) => {
    const filePath = (config.domain() + "/" + imageFolder + `/` + req.file.originalname)


    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({
        status: `success`,
        url: filePath,
    }))
}
module.exports = [upload.single('image'), savePic];
