var api = require('../api')
var db = require('../api/db')

module.exports = (app) => {
	//Получение списка адресов по активным заказам, конвертированных в координаты для карты
	app.get('/api/getAdressList', (req, res) => {
		api.getAdresses.orders
		.then((adressArr) => {
				res.send(adressArr)
		})
		.catch((err) => {
			console.log(err)
		})
	})
	//Добавление категории товара
	app.post('/api/addProductType', (req, res) => {
		db.connect(() => {
			db.get().collection('productTypes').insertOne(req.body, (err, res) => {
				if (err) {
					return err
				}
				else {
					console.log(res.ops)
					return true
				}
			})
			.then((result) => {
				res.send(result)
			})
			.then(() => {
				db.close()
			})
		})
	})
	//Добавление товара
	app.post('/api/addProduct', (req, res) => {
		db.connect(() => {
			db.get().collection('products').insertOne(req.body, (err, res) => {
				if (err) {
					return err
				}
				else {
					console.log(res.ops)
					return true
				}
			})
			.then((result) => {
				res.send(result)
			})
			.then(() => {
				db.close()
			})
		})
	})
	//Сохранение маршрута в бд
	app.post('/api/addActiveRoute', (req, res) => {
		db.connect(() => {
			db.get().collection('activeRoutes').insertOne(req.body, (err, res) => {
				if (err) {
					return err
				}
				else {
					console.log(res.ops)
					return true
				}
			})
			.then((result) => {
				res.send(result)
			})
			.then(() => {
				db.close()
			})
		})
	})
	//Получение сохраненных маршрутов
	app.get('/api/getActiveRoutes', (req, res) => {
		db.connect(() => {
			db.get().collection('activeRoutes').find({}).toArray()
			.then((routes) => {
				res.send(routes)
			})
			.then(() => {
				db.close()
			})
		})
	})
}