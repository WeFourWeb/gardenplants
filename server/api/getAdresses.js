var axios = require('axios')
var config = require('../config')

const url = `${config.protocol}${config.host}${config.path}`

class Adress {
	constructor (id, postcode, lat, lng) {
		this.orderId = id
		this.postcode = postcode
		this.lat = lat
		this.lng = lng
	}

	newAdress (id, postcode, adress) {

		const params = {
			access_token: config.mapApiAccessToken
		}
		
		const geoParams = `${adress}.json`

		axios.get(geoParams, {params})
		.then((res) => {
			return new Adress(id, postcode, res, res)
		})
		.catch((err) => {
			return err
		})
	}
}

var getAdressArr = (orders) => {
	var adressArr = []
	orders.forEach((order, index) => {
		adressArr[index] = Adress.newAdress(`${order.id}`, `${order.shipping.postcode}`, `${order.shipping.adress_1} ${order.shipping.adress_2}`)
	})
	return adressArr
}

module.exports.orders = axios.get(`${url}`, {
		params: {
			consumer_key: config.ck,
			consumer_secret: config.cs
		}
	})
	.then((res) => {
		console.log(getAdressArr(res.data))
		return res
	})
	.catch((err) => {
		return err
	})