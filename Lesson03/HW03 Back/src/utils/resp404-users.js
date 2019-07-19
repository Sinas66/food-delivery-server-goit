const sendNoUsers = (req, res) => {
    console.log(`sendNoProducts`);

    res.setHeader('Content-Type', 'application/json')
    res.status(404).send(JSON.stringify({ status: 'not found', users: [] }));
}

module.exports = sendNoUsers;