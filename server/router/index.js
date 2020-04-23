var api = require('../api')

module.exports = (app) => {
	app.get('/api/getAdressList', (req, res) => {
		api.getAdresses.orders.then((adressArr) => {
			res.send(adressArr)
		})
	})
}