const config = require('../config')
const MongoClient = require('mongodb').MongoClient

const mongoClient = new MongoClient(config.mongoHost, { useUnifiedTopology: true })

module.exports = (activeRoute) => {
	mongoClient.connect((err, client) => {
		if (err) {
			return err
		}
		else {
			const db = client.db('gardenplants')
			const productTypesCollection = db.collection('activeRoutes')
			productTypesCollection.insertOne(activeRoute, (err, res) => {
				if (err) {
					return err
				}
				else {
					console.log(res.ops)
					return true
				}
			})
		}
		client.close()
	})
}
