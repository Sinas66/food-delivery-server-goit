const savePic = (req, res) => {
    console.log(`Req: `, req.body)
    console.log(`File: `, req.file)


    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({
        body: req.body,
        file: req.file ? req.file : null
    }))
}
module.exports = savePic;
