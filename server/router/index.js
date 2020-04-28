var api = require('../api')

module.exports = (app) => {
	//Получение списка адресов по активным заказам, конвертированных в координаты для карты
	app.get('/api/getAdressList', (req, res) => {
		api.getAdresses.orders
		.then((adressArr) => {
			res.send(adressArr)
		})
		.catch((err) => {
			
		})
	})
	//Добавление категории товара
	app.post('/api/addProductType', (req, res) => {
		const queryResult = api.addProductType(req.body)
		res.send(queryResult)
	})
	//Добавление товара
	app.post('/api/addProduct', (req, res) => {
		const queryResult = api.addProductType(req.body)
		res.send(queryResult)
	})
}