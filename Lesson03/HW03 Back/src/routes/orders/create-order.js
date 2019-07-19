const fs = require('fs');
const path = require('path');


const createOrder = (req, res) => {
    const reqOrder = req.body
    // console.log(reqOrder);

    const userOrderDir = path.join(__dirname, `../../db/orders/user-Id-` + reqOrder.user) // Определяем путь к папке заказа юзера
    if (!fs.existsSync(userOrderDir)) {
        fs.mkdirSync(userOrderDir); // Создаем папку заказов user-id-<num> если ее не существует
    }

    const orderIdDir = path.join(__dirname, `../../db/orders`)
    const orderIdFilePath = path.join(orderIdDir, `orders-id.json`) // Файл с общим айди заказов
    if (!fs.existsSync(orderIdFilePath)) {
        fs.writeFileSync(orderIdFilePath, JSON.stringify(0)); // Создаем файл если ее не существует
    }
    const orderId = JSON.parse(fs.readFileSync(orderIdFilePath)) // Общее кол. заказов = айди
    if (orderId === 0) {
        orderId = 1
    }
    const userOrderFilePath = path.join(userOrderDir, `order-${orderId}.json`) // Определяем название заказа с айди

    const isProductsExist = () => {
        let result = true;
        const productsFilePath = path.join(__dirname, `../../db/products.json`)
        const products = JSON.parse(fs.readFileSync(productsFilePath))

        for (let i = 0; i < reqOrder.products.length; i++) {
            result = products.some(el => el.id === reqOrder.products[i])
        }
        return result
    }

    res.setHeader('Content-Type', 'application/json')

    if (!isProductsExist()) {
        res.status(404).send(JSON.stringify({
            status: "failed",
            order: null
        }))
        return
    }


    const newOrder = {
        orderTime: new Date(),
        id: orderId,
        status: { pending: true, },
        ...reqOrder
    }

    fs.writeFileSync(orderIdFilePath, orderId + 1)
    fs.writeFileSync(userOrderFilePath, JSON.stringify(newOrder))

    res.send(JSON.stringify({
        status: "success",
        order: newOrder
    }))
}
module.exports = createOrder;
