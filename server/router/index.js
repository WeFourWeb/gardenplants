var api = require('../api')
var db = require('../api/db')

module.exports = (app) => {
	//Получение списка адресов по активным заказам, конвертированных в координаты для карты
	//{
	//	orderId: string,
	//	postcode: string,
	//	lng: string,
	//	lat: string
	//}
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
				if (err) return err
			})
			.then((result) => {
				res.send(result)
				db.close()
			})
		})
	})
	//Добавление товара
	app.post('/api/addProduct', (req, res) => {
		db.connect(() => {
			db.get().collection('products').insertOne(req.body, (err, res) => {
				if (err) return err
			})
			.then((result) => {
				res.send(result)
				db.close()
			})
		})
	})
	//Сохранение маршрута в бд
	app.post('/api/addActiveRoute', (req, res) => {
		db.connect(() => {
			db.get().collection('activeRoutes').insertOne(req.body, (err, res) => {
				if (err) return err
			})
			.then((result) => {
				res.send(result)
				db.close()
			})
		})
	})
	//Удаление маршрута по routeId
	app.get('/api/removeActiveRoute', (req, res) => {
		db.connect(() => {
			db.get().collection('activeRoutes').deleteOne({routeId: { $eq: req.params.routeId } }, (err, res) => {
				if (err) return err
			})
			.then((result) => {
				res.send(result)
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
				db.close()
			})
		})
	})
	//Добавление пользователя
	app.post('/api/addUser', (req, res) => {
		db.connect(() => {
			db.get().collection('users').insertOne(req.body, (err, res) => {
				if (err) return err
			})
			.then((result) => {
				res.send(result)
				db.close()
			})
		})
	})
	//Получение списка пользователей
	app.get('/api/getUsers', (req, res) => {
		db.connect(() => {
			db.get().collection('users').find({}).toArray()
			.then((routes) => {
				res.send(routes)
				db.close()
			})
		})
	})
}