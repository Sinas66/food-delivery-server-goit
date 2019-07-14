const sendNoProducts = (req, res) => {
    console.log(`sendNoProducts`);

    res.setHeader('Content-Type', 'application/json')
    res.status(404).send(JSON.stringify({ status: `no products`, products: [] }));
}

module.exports = sendNoProducts;