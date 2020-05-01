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
}

var getAdressArr = async (orders) => {
	let adressArr = []
	let index = 0
	const params = {
		access_token: config.mapApiAccessToken
	}

	for (const order of orders) {
		let id = order.id
		let postcode = order.shipping.postcode
		let adress = `${order.shipping.address_1} ${order.shipping.address_2} ${order.shipping.city}`
		const geoParams = `${adress} ${postcode}.json`

		await axios.get(`${config.mapApiUrl}${geoParams}`, {params})
		.then((res) => {
			adressArr[index] = new Adress(id, postcode, res.data.features[0].center[1], res.data.features[0].center[0])
		})
		.catch((err) => {
			return err
		})
		index++
	}
	return adressArr
}

module.exports.orders = axios.get(`${url}`, {
		params: {
			consumer_key: config.ck,
			consumer_secret: config.cs
		}
	})
	.then((res) => {
		return getAdressArr(res.data)
	})
	.catch((err) => {
		return err
	})