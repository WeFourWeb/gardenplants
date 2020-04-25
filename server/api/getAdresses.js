var axios = require('axios')
var config = require('../config')

const url = `${config.protocol}${config.host}${config.path}`

const defaultAdressArr = [
	{
		adress: '',
		postcode: ''
	},
	{
		adress: '',
		postcode: ''
	},
	{
		adress: '',
		postcode: ''
	},
	{
		adress: '',
		postcode: ''
	},
	{
		adress: '',
		postcode: ''
	},
	{
		adress: '',
		postcode: ''
	},
	{
		adress: '',
		postcode: ''
	},
	{
		adress: '',
		postcode: ''
	},
	{
		adress: '',
		postcode: ''
	}
]

class Adress {
	constructor (id, adress, postcode) {
		this.orderId = id
		this.adress = adress
		this.postcode = postcode
	}

	returnCoords () {
		
	}
}

var getAdressArr = (orders) => {
	var adressArr = []
	orders.forEach((order, index) => {
		adressArr[index] = new Adress (`${order.shipping.address_1} ${order.shipping.address_2}`, `${order.shipping.postcode}`) 
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
		return getAdressArr(res.data)
	})
	.catch((err) => {
		console.log(`${err} error happened`)
		return defaultAdressArr
	})

